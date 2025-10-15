// Web Worker để xử lý dữ liệu lớn mà không block UI
self.onmessage = function(e) {
    const { type, data, options } = e.data;
    
    switch(type) {
        case 'FILTER_DATA':
            const filtered = filterData(data, options);
            self.postMessage({
                type: 'FILTERED_DATA',
                data: filtered,
                totalCount: data.length,
                filteredCount: filtered.length
            });
            break;
            
        case 'CLUSTER_DATA':
            const clustered = clusterData(data, options);
            self.postMessage({
                type: 'CLUSTERED_DATA',
                data: clustered
            });
            break;
            
        case 'SEARCH_DATA':
            const searchResults = searchData(data, options.searchTerm);
            self.postMessage({
                type: 'SEARCH_RESULTS',
                data: searchResults
            });
            break;
            
        case 'GENERATE_SAMPLE_DATA':
            const sampleData = generateSampleData(options.count || 40000);
            self.postMessage({
                type: 'SAMPLE_DATA_GENERATED',
                data: sampleData
            });
            break;
    }
};

// Lọc dữ liệu
function filterData(data, options) {
    const {
        searchTerm = '',
        showInternal = true,
        showCompany = true,
        showCompetitor = true,
        bounds = null,
        zoomLevel = 10
    } = options;
    
    let filtered = data;
    
    // Lọc theo loại
    if (!showInternal || !showCompany || !showCompetitor) {
        filtered = filtered.filter(item => {
            if (item.type === 'internal' && !showInternal) return false;
            if (item.type === 'company' && !showCompany) return false;
            if (item.type === 'competitor' && !showCompetitor) return false;
            return true;
        });
    }
    
    // Lọc theo từ khóa tìm kiếm
    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filtered = filtered.filter(item => 
            item.name.toLowerCase().includes(term) ||
            item.address.toLowerCase().includes(term) ||
            item.district.toLowerCase().includes(term)
        );
    }
    
    // Lọc theo viewport bounds
    if (bounds) {
        filtered = filtered.filter(item => 
            item.lat >= bounds.south &&
            item.lat <= bounds.north &&
            item.lng >= bounds.west &&
            item.lng <= bounds.east
        );
    }
    
    // Giới hạn số lượng dựa trên zoom level
    if (zoomLevel < 8) {
        filtered = filtered.slice(0, 1000); // Chỉ hiển thị 1000 điểm khi zoom xa
    } else if (zoomLevel < 12) {
        filtered = filtered.slice(0, 5000); // Hiển thị 5000 điểm khi zoom trung bình
    }
    
    return filtered;
}

// Clustering dữ liệu
function clusterData(data, options) {
    const { zoomLevel = 10, clusterRadius = 50 } = options;
    
    if (zoomLevel > 12) {
        return data; // Không cluster khi zoom gần
    }
    
    const clusters = [];
    const processed = new Set();
    
    data.forEach((point, index) => {
        if (processed.has(index)) return;
        
        const cluster = {
            id: `cluster_${index}`,
            lat: point.lat,
            lng: point.lng,
            points: [point],
            count: 1,
            type: point.type,
            bounds: {
                north: point.lat,
                south: point.lat,
                east: point.lng,
                west: point.lng
            }
        };
        
        // Tìm các điểm gần đó để cluster
        data.forEach((otherPoint, otherIndex) => {
            if (otherIndex <= index || processed.has(otherIndex)) return;
            
            const distance = calculateDistance(point.lat, point.lng, otherPoint.lat, otherPoint.lng);
            if (distance <= clusterRadius) {
                cluster.points.push(otherPoint);
                cluster.count++;
                processed.add(otherIndex);
                
                // Cập nhật bounds
                cluster.bounds.north = Math.max(cluster.bounds.north, otherPoint.lat);
                cluster.bounds.south = Math.min(cluster.bounds.south, otherPoint.lat);
                cluster.bounds.east = Math.max(cluster.bounds.east, otherPoint.lng);
                cluster.bounds.west = Math.min(cluster.bounds.west, otherPoint.lng);
            }
        });
        
        // Tính tọa độ trung tâm của cluster
        if (cluster.count > 1) {
            cluster.lat = cluster.points.reduce((sum, p) => sum + p.lat, 0) / cluster.points.length;
            cluster.lng = cluster.points.reduce((sum, p) => sum + p.lng, 0) / cluster.points.length;
        }
        
        clusters.push(cluster);
        processed.add(index);
    });
    
    return clusters;
}

// Tìm kiếm dữ liệu
function searchData(data, searchTerm) {
    if (!searchTerm) return data;
    
    const term = searchTerm.toLowerCase();
    return data.filter(item => 
        item.name.toLowerCase().includes(term) ||
        item.address.toLowerCase().includes(term) ||
        item.district.toLowerCase().includes(term) ||
        item.phone.includes(term)
    );
}

// Tạo dữ liệu mẫu
function generateSampleData(count) {
    const data = [];
    const types = ['internal', 'company', 'competitor'];
    const typeNames = {
        internal: 'Điểm nội bộ',
        company: 'Điểm bán công ty', 
        competitor: 'Điểm bán đối thủ'
    };
    const colors = { 
        internal: '#ff4444', 
        company: '#ffaa00', 
        competitor: '#ff8800' 
    };

    // Tọa độ Việt Nam
    const regions = [
        { name: 'Hồ Chí Minh', lat: 10.7769, lng: 106.7009, radius: 0.5 },
        { name: 'Hà Nội', lat: 21.0285, lng: 105.8542, radius: 0.4 },
        { name: 'Đà Nẵng', lat: 16.0544, lng: 108.2022, radius: 0.3 },
        { name: 'Cần Thơ', lat: 10.0452, lng: 105.7469, radius: 0.2 },
        { name: 'Hải Phòng', lat: 20.8449, lng: 106.6881, radius: 0.2 },
        { name: 'Nha Trang', lat: 12.2388, lng: 109.1967, radius: 0.15 },
        { name: 'Huế', lat: 16.4637, lng: 107.5909, radius: 0.15 },
        { name: 'Vũng Tàu', lat: 10.3460, lng: 107.0843, radius: 0.1 }
    ];

    const storeNames = [
        'Siêu thị', 'Cửa hàng', 'Đại lý', 'Chi nhánh', 'Trung tâm',
        'Kho hàng', 'Showroom', 'Outlet', 'Mini mart', 'Convenience',
        'Phân phối', 'Bán lẻ', 'Thương mại', 'Dịch vụ', 'Tổng đại lý'
    ];

    const districts = [
        'Quận 1', 'Quận 2', 'Quận 3', 'Quận 4', 'Quận 5',
        'Quận 6', 'Quận 7', 'Quận 8', 'Quận 9', 'Quận 10',
        'Quận 11', 'Quận 12', 'Thủ Đức', 'Gò Vấp', 'Bình Thạnh',
        'Tân Bình', 'Tân Phú', 'Phú Nhuận', 'Bình Tân', 'Hóc Môn',
        'Củ Chi', 'Bình Chánh', 'Nhà Bè', 'Cần Giờ'
    ];

    const streets = [
        'Nguyễn Huệ', 'Lê Lợi', 'Đồng Khởi', 'Nguyễn Thị Minh Khai',
        'Cách Mạng Tháng 8', 'Lý Tự Trọng', 'Pasteur', 'Nam Kỳ Khởi Nghĩa',
        'Võ Văn Tần', 'Nguyễn Thị Nghĩa', 'Điện Biên Phủ', 'Cộng Hòa',
        'Lê Văn Việt', 'Nguyễn Văn Linh', 'Hùng Vương', 'Trường Chinh'
    ];

    let id = 1;

    // Tạo dữ liệu cho mỗi vùng
    regions.forEach(region => {
        const pointsInRegion = Math.floor(count / regions.length) + Math.floor(Math.random() * 100);
        
        for (let i = 0; i < pointsInRegion && id <= count; i++) {
            const type = types[Math.floor(Math.random() * types.length)];
            
            // Tạo tọa độ ngẫu nhiên trong vùng
            const angle = Math.random() * 2 * Math.PI;
            const distance = Math.random() * region.radius;
            const lat = region.lat + distance * Math.cos(angle);
            const lng = region.lng + distance * Math.sin(angle);
            
            // Tạo tên cửa hàng
            const storeName = storeNames[Math.floor(Math.random() * storeNames.length)];
            const district = districts[Math.floor(Math.random() * districts.length)];
            const street = streets[Math.floor(Math.random() * streets.length)];
            const streetNumber = Math.floor(Math.random() * 999) + 1;
            
            const name = `${storeName} ${id}`;
            const address = `${streetNumber} ${street}, ${district}`;
            
            // Tạo dữ liệu doanh thu và thông tin khác
            const revenue = Math.floor(Math.random() * 2000000000) + 10000000;
            const phone = `0${Math.floor(Math.random() * 900000000) + 100000000}`;
            const employeeCount = Math.floor(Math.random() * 50) + 1;
            const area = Math.floor(Math.random() * 500) + 20;
            
            data.push({
                id: id++,
                name: name,
                type: type,
                typeName: typeNames[type],
                color: colors[type],
                lat: lat,
                lng: lng,
                address: address,
                phone: phone,
                revenue: revenue,
                employeeCount: employeeCount,
                area: area,
                region: region.name,
                district: district,
                street: street,
                streetNumber: streetNumber,
                openingHours: '8:00 - 22:00',
                manager: `Quản lý ${id}`,
                establishedYear: 2015 + Math.floor(Math.random() * 9),
                rating: (3 + Math.random() * 2).toFixed(1),
                isActive: Math.random() > 0.05,
                lastVisit: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
            });
        }
    });

    return data;
}

// Tính khoảng cách giữa 2 điểm
function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371; // Bán kính Trái Đất (km)
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c * 1000; // Trả về mét
}
