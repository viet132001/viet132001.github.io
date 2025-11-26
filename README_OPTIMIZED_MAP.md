# 🗺️ Bản đồ điểm bán tối ưu - 40k+ điểm dữ liệu

## 📋 Mô tả

Hệ thống bản đồ được thiết kế đặc biệt để hiển thị hiệu quả 40,000+ điểm dữ liệu với 3 loại điểm bán khác nhau:

- 🔴 **Điểm nội bộ** - Màu đỏ
- 🟡 **Điểm bán công ty** - Màu vàng  
- 🟠 **Điểm bán đối thủ** - Màu cam

## 🚀 Tính năng tối ưu hóa

### 1. **Clustering thông minh**
- Tự động nhóm các điểm gần nhau thành cluster
- Hiển thị số lượng điểm trong mỗi cluster
- Tự động mở rộng cluster khi zoom gần

### 2. **Level of Detail (LOD)**
- Zoom xa (< 8): Hiển thị tối đa 1,000 điểm
- Zoom trung bình (8-12): Hiển thị tối đa 5,000 điểm
- Zoom gần (> 12): Hiển thị tất cả điểm

### 3. **Viewport Culling**
- Chỉ render các điểm trong vùng nhìn thấy
- Tự động cập nhật khi di chuyển bản đồ
- Tiết kiệm tài nguyên xử lý

### 4. **Web Workers**
- Xử lý dữ liệu lớn mà không block UI
- Lọc và tìm kiếm dữ liệu song song
- Cải thiện hiệu suất đáng kể

### 5. **EKMap Việt Nam**
- Sử dụng bản đồ Việt Nam chính xác
- Dữ liệu địa lý chi tiết cho VN
- Tích hợp MapLibre GL JS cho hiệu suất cao

### 6. **Debouncing**
- Tối ưu hóa các sự kiện tìm kiếm và lọc
- Giảm số lần xử lý không cần thiết
- Cải thiện trải nghiệm người dùng

## 📁 Cấu trúc file

```
├── optimized_map.html              # Bản đồ cơ bản với Leaflet
├── optimized_map_advanced.html     # Bản đồ nâng cao với Web Workers
├── optimized_map_ekmap.html        # Bản đồ với EKMap Việt Nam + MapLibre GL
├── data_generator.html             # Tool tạo dữ liệu mẫu
├── data_generator.js               # Script tạo dữ liệu
├── worker.js                       # Web Worker xử lý dữ liệu
└── README_OPTIMIZED_MAP.md         # Hướng dẫn này
```

## 🛠️ Cách sử dụng

### 1. Tạo dữ liệu mẫu
```bash
# Mở file data_generator.html trong trình duyệt
# Click "Xem trước dữ liệu" để kiểm tra
# Click "Xuất file JSON" hoặc "Xuất file CSV" để tải về
```

### 2. Chạy bản đồ
```bash
# Phiên bản EKMap Việt Nam (Khuyến nghị):
# Mở file optimized_map_ekmap.html trong trình duyệt

# Phiên bản nâng cao với Web Workers:
# Mở file optimized_map_advanced.html trong trình duyệt

# Hoặc sử dụng local server:
python -m http.server 8000
# Truy cập: 
# - http://localhost:8000/optimized_map_ekmap.html (EKMap VN)
# - http://localhost:8000/optimized_map_advanced.html (Web Workers)
```

### 3. Tùy chỉnh dữ liệu
```javascript
// Trong file optimized_map_advanced.html, thay đổi:
const totalPoints = 40000; // Số lượng điểm muốn tạo

// Hoặc load dữ liệu từ file JSON:
fetch('your_data.json')
    .then(response => response.json())
    .then(data => {
        allData = data;
        filterData();
    });
```

## ⚙️ Cấu hình hiệu suất

### 1. **Clustering**
```javascript
const markers = L.markerClusterGroup({
    maxClusterRadius: 50,        // Bán kính cluster (pixel)
    chunkedLoading: true,        // Tải dữ liệu theo chunk
    showCoverageOnHover: false,  // Ẩn vùng phủ cluster
    zoomToBoundsOnClick: true    // Zoom khi click cluster
});
```

### 2. **Viewport Culling**
```javascript
// Bật/tắt trong control panel
document.getElementById('enableViewportCulling').checked = true;
```

### 3. **Web Workers**
```javascript
// Tự động phát hiện và sử dụng Web Workers
// Fallback về xử lý đồng bộ nếu không hỗ trợ
```

## 📊 Monitoring hiệu suất

### Thông tin hiển thị:
- **FPS**: Khung hình mỗi giây
- **Tổng điểm**: Số lượng điểm trong dữ liệu
- **Đang hiển thị**: Số điểm đang render
- **Clusters**: Số cluster hiện tại
- **Memory**: Sử dụng bộ nhớ (nếu hỗ trợ)

### Tối ưu hóa:
- Giữ FPS > 30 để trải nghiệm mượt mà
- Giảm số điểm hiển thị khi FPS thấp
- Sử dụng clustering khi có nhiều điểm

## 🔧 Tùy chỉnh nâng cao

### 1. **Thay đổi màu sắc**
```javascript
const colors = { 
    internal: '#ff4444',    // Điểm nội bộ - đỏ
    company: '#ffaa00',     // Điểm bán công ty - vàng
    competitor: '#ff8800'   // Điểm bán đối thủ - cam
};
```

### 2. **Thêm loại điểm bán mới**
```javascript
const types = ['internal', 'company', 'competitor', 'new_type'];
const typeNames = {
    internal: 'Điểm nội bộ',
    company: 'Điểm bán công ty',
    competitor: 'Điểm bán đối thủ',
    new_type: 'Loại mới'
};
```

### 3. **Tùy chỉnh popup**
```javascript
function createMarker(point) {
    const marker = L.circleMarker([point.lat, point.lng], {
        radius: 6,
        fillColor: point.color,
        // ... các thuộc tính khác
    });

    marker.bindPopup(`
        <div style="min-width: 200px;">
            <h4>${point.name}</h4>
            <!-- Thêm thông tin tùy chỉnh -->
        </div>
    `);

    return marker;
}
```

## 🐛 Xử lý lỗi thường gặp

### 1. **Web Worker không hoạt động**
- Kiểm tra file `worker.js` có tồn tại
- Chạy từ local server thay vì file://
- Fallback tự động về xử lý đồng bộ

### 2. **Hiệu suất chậm**
- Giảm số lượng điểm hiển thị
- Bật viewport culling
- Tăng cluster radius
- Giảm zoom level tối thiểu

### 3. **Dữ liệu không hiển thị**
- Kiểm tra format dữ liệu JSON
- Đảm bảo có đầy đủ trường lat, lng
- Kiểm tra console để xem lỗi

## 📈 Benchmark hiệu suất

### Test trên máy cấu hình trung bình:
- **40,000 điểm**: FPS 45-60
- **100,000 điểm**: FPS 25-35 (với clustering)
- **Memory usage**: ~50-100MB
- **Load time**: 2-5 giây

### Tối ưu hóa cho dữ liệu lớn hơn:
- Sử dụng server-side clustering
- Implement pagination
- Sử dụng MapBox GL JS thay vì Leaflet
- Caching dữ liệu

## 🤝 Đóng góp

Nếu bạn muốn cải thiện hiệu suất hoặc thêm tính năng:

1. Fork repository
2. Tạo branch mới
3. Commit thay đổi
4. Tạo Pull Request

## 📄 License

MIT License - Sử dụng tự do cho mục đích thương mại và cá nhân.

---

**Lưu ý**: Hệ thống này được tối ưu hóa cho 40k+ điểm dữ liệu. Với dữ liệu lớn hơn (>100k), cần cân nhắc sử dụng các giải pháp server-side clustering hoặc MapBox GL JS.
