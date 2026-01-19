{
    "SELECT\n    r.id   AS role_id,\n    r.name AS role_name,\n    pg.id  AS permission_groups_id,\n    pg.name AS permissions_group_name,\n    p.id   AS permission_id,\n    p.name AS permission_name\nFROM roles r\nJOIN role_permissions rp\n    ON r.id = rp.role_id\nJOIN permissions p\n    ON rp.permission_id = p.id\nJOIN permission_groups pg\n    ON p.group_id = pg.id\nORDER BY r.id, pg.id, p.id": [
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 122,
            "name" : "Menu Hệ Thống",
            "id" : 595,
            "name" : "Menu Quản Lý Tài Khoản"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 122,
            "name" : "Menu Hệ Thống",
            "id" : 596,
            "name" : "Menu Vai Trò & Quyền Hạn"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 594,
            "name" : "Menu Hệ thống"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 610,
            "name" : "Menu Tiện Ích & Mở Rộng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 613,
            "name" : "Menu Quản Lý Báo Cáo"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 614,
            "name" : "Menu Quản Trị Kho"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 615,
            "name" : "Menu Quản Lý Tài Sản"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 616,
            "name" : "Menu Quản Lý QR"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 617,
            "name" : "Menu Quản Lý Thông Báo"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 618,
            "name" : "Menu Quản Lý KPI"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 619,
            "name" : "Menu Quản Lý Kế Hoạch"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 620,
            "name" : "Menu Quản Lý Tuyến"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 621,
            "name" : "Menu Quản Lý Cây Hệ Thống"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 622,
            "name" : "Menu Quản Lý Phân Phối"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 623,
            "name" : "Menu Quản Lý Nhân Viên"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 624,
            "name" : "Menu Quản Lý Khách Hàng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 625,
            "name" : "Menu Chương Trình Bán Hàng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 626,
            "name" : "Menu Bảng Giá"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 627,
            "name" : "Menu Sản Phẩm"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 628,
            "name" : "Menu Đơn Hàng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 629,
            "name" : "Dashboard"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 808,
            "name" : "Menu Kiểm Tra MasterData"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 887,
            "name" : "Menu quản lý nhóm khách hàng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 897,
            "name" : "Menu Chương trình khuyễn mãi ERP"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 898,
            "name" : "Menu chương trình trưng bày"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 908,
            "name" : "Menu quản lý mapping ERP"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 909,
            "name" : "Menu ERP Oracle"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 947,
            "name" : "Menu quản lý email"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 955,
            "name" : "Menu đơn hàng mua"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 977,
            "name" : "Menu chương trình Loyalty"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 981,
            "name" : "Menu đơn hàng ERP"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 1015,
            "name" : "Menu phiếu giao hàng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 124,
            "name" : "Action Quản Lý Tài Khoản",
            "id" : 597,
            "name" : "Xem Quản Lý Tài Khoản"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 124,
            "name" : "Action Quản Lý Tài Khoản",
            "id" : 598,
            "name" : "Tạo Quản Lý Tài Khoản"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 124,
            "name" : "Action Quản Lý Tài Khoản",
            "id" : 599,
            "name" : "Sửa Quản Lý Tài Khoản"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 124,
            "name" : "Action Quản Lý Tài Khoản",
            "id" : 600,
            "name" : "Xóa Quản Lý Tài Khoản"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 125,
            "name" : "Action Vai Trò & Phân Quyền",
            "id" : 601,
            "name" : "Tạo Vai Trò"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 125,
            "name" : "Action Vai Trò & Phân Quyền",
            "id" : 602,
            "name" : "Sửa Vai Trò"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 125,
            "name" : "Action Vai Trò & Phân Quyền",
            "id" : 603,
            "name" : "Xóa Vai Trò"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 125,
            "name" : "Action Vai Trò & Phân Quyền",
            "id" : 604,
            "name" : "Tạo Nhóm Quyền"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 125,
            "name" : "Action Vai Trò & Phân Quyền",
            "id" : 605,
            "name" : "Sửa Nhóm Quyền"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 125,
            "name" : "Action Vai Trò & Phân Quyền",
            "id" : 606,
            "name" : "Xóa Nhóm Quyền"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 125,
            "name" : "Action Vai Trò & Phân Quyền",
            "id" : 607,
            "name" : "Tạo Quyền"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 125,
            "name" : "Action Vai Trò & Phân Quyền",
            "id" : 608,
            "name" : "Sửa Quyền"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 125,
            "name" : "Action Vai Trò & Phân Quyền",
            "id" : 609,
            "name" : "Xóa Quyền"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 126,
            "name" : "Menu Tiện Ích & Mở Rộng",
            "id" : 611,
            "name" : "Menu Thiết Lập Chung"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 126,
            "name" : "Menu Tiện Ích & Mở Rộng",
            "id" : 612,
            "name" : "Menu Cấu Hình Lý Do"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 126,
            "name" : "Menu Tiện Ích & Mở Rộng",
            "id" : 879,
            "name" : "Menu nhật ký tích hợp"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 127,
            "name" : "Action Thiết Lập Chung",
            "id" : 630,
            "name" : "Xem Thiết Lập Chung"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 127,
            "name" : "Action Thiết Lập Chung",
            "id" : 631,
            "name" : "Sửa Thiết Lập Chung"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 127,
            "name" : "Action Thiết Lập Chung",
            "id" : 632,
            "name" : "Tạo Thiết Lập Chung"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 127,
            "name" : "Action Thiết Lập Chung",
            "id" : 633,
            "name" : "Xóa Thiết Lập Chung"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 128,
            "name" : "Action Cấu Hình Lý Do",
            "id" : 634,
            "name" : "Xem Cấu Hình Lý Do"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 128,
            "name" : "Action Cấu Hình Lý Do",
            "id" : 635,
            "name" : "Tạo Cấu Hình Lý Do"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 128,
            "name" : "Action Cấu Hình Lý Do",
            "id" : 636,
            "name" : "Sửa Cấu Hình Lý Do"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 128,
            "name" : "Action Cấu Hình Lý Do",
            "id" : 637,
            "name" : "Xóa Cấu Hình Lý Do"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 638,
            "name" : "Báo cáo Sản Phẩm Theo Khách Hàng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 639,
            "name" : "Báo cáo Thống Kê Bán Hàng Theo Khu Vực"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 641,
            "name" : "Báo cáo Đơn Hàng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 642,
            "name" : "Báo cáo Chi Tiết Đơn Hàng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 643,
            "name" : "Báo cáo Thống Kê Bán Hàng Theo Kênh"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 914,
            "name" : "Báo cáo Điểm bán mới"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 915,
            "name" : "Báo cáo Tuyến"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 916,
            "name" : "Báo cáo Sản phẩm"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 917,
            "name" : "Báo cáo Khách hàng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 919,
            "name" : "Báo cáo Tồn kho"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 920,
            "name" : "Báo cáo Hóa đơn"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 923,
            "name" : "Báo cáo Claim"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 982,
            "name" : "Báo cáo Xuất nhập tồn"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 130,
            "name" : "Menu Quản Trị Kho",
            "id" : 644,
            "name" : "Menu Danh Sách Kho"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 130,
            "name" : "Menu Quản Trị Kho",
            "id" : 645,
            "name" : "Menu Nhập Kho"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 130,
            "name" : "Menu Quản Trị Kho",
            "id" : 646,
            "name" : "Menu Xuất Kho"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 130,
            "name" : "Menu Quản Trị Kho",
            "id" : 647,
            "name" : "Menu Quản Lý Lô"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 130,
            "name" : "Menu Quản Trị Kho",
            "id" : 648,
            "name" : "Menu Tồn Kho"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 130,
            "name" : "Menu Quản Trị Kho",
            "id" : 649,
            "name" : "Menu Kiểm Kê Kho Tại Điểm Bán"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 130,
            "name" : "Menu Quản Trị Kho",
            "id" : 650,
            "name" : "Menu Cấu Hình Sản Phẩm Kiểm Kê"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 131,
            "name" : "Action Danh Sách Kho",
            "id" : 651,
            "name" : "Xem Chi Tiết Kho"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 131,
            "name" : "Action Danh Sách Kho",
            "id" : 652,
            "name" : "Xem Danh Sách kho"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 131,
            "name" : "Action Danh Sách Kho",
            "id" : 653,
            "name" : "Tạo Kho"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 131,
            "name" : "Action Danh Sách Kho",
            "id" : 654,
            "name" : "Sửa Kho"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 131,
            "name" : "Action Danh Sách Kho",
            "id" : 655,
            "name" : "Xóa Kho"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 131,
            "name" : "Action Danh Sách Kho",
            "id" : 885,
            "name" : "UPDATE-INVENTORY"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 132,
            "name" : "Action Nhập\/Xuất Kho",
            "id" : 656,
            "name" : "Xem Danh sách"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 132,
            "name" : "Action Nhập\/Xuất Kho",
            "id" : 657,
            "name" : "Tạo Phiếu Nhập\/Xuất"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 132,
            "name" : "Action Nhập\/Xuất Kho",
            "id" : 658,
            "name" : "Sửa Phiếu Nhập\/Xuất"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 132,
            "name" : "Action Nhập\/Xuất Kho",
            "id" : 659,
            "name" : "Xóa Phiếu Nhập\/Xuất"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 133,
            "name" : "Action Quản Lý Lô",
            "id" : 660,
            "name" : "Xem danh sách"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 133,
            "name" : "Action Quản Lý Lô",
            "id" : 661,
            "name" : "Tạo Lô"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 133,
            "name" : "Action Quản Lý Lô",
            "id" : 662,
            "name" : "Sửa Lô"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 134,
            "name" : "Action Tồn Kho",
            "id" : 663,
            "name" : "Import Tồn Kho"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 134,
            "name" : "Action Tồn Kho",
            "id" : 913,
            "name" : "Xuất dữ liệu tồn kho"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 134,
            "name" : "Action Tồn Kho",
            "id" : 983,
            "name" : "Xuất báo cáo xuất nhập tồn"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 136,
            "name" : "Action Cấu Hình Sản Phẩm Kiểm Kê",
            "id" : 665,
            "name" : "Xem Danh Sách Cấu Hình"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 136,
            "name" : "Action Cấu Hình Sản Phẩm Kiểm Kê",
            "id" : 666,
            "name" : "Tạo Cấu Hình Sản Phẩm Kiểm Kê"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 136,
            "name" : "Action Cấu Hình Sản Phẩm Kiểm Kê",
            "id" : 667,
            "name" : "Sửa Cấu Hình Sản Phẩm Kiểm Kê"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 136,
            "name" : "Action Cấu Hình Sản Phẩm Kiểm Kê",
            "id" : 668,
            "name" : "Xóa Cấu Hình Sản Phẩm Kiểm Kê"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 137,
            "name" : "Menu Quản Lý Tài Sản",
            "id" : 669,
            "name" : "Menu Danh Sách Kho Tài Sản"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 137,
            "name" : "Menu Quản Lý Tài Sản",
            "id" : 670,
            "name" : "Menu Cấu hình Tài Sản"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 137,
            "name" : "Menu Quản Lý Tài Sản",
            "id" : 671,
            "name" : "Menu Lịch Sử Kiểm Kê Tài Sản"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 137,
            "name" : "Menu Quản Lý Tài Sản",
            "id" : 989,
            "name" : "Menu Yêu cầu duyệt tài sản"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 137,
            "name" : "Menu Quản Lý Tài Sản",
            "id" : 1022,
            "name" : "Menu Danh Sách Tài Sản"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 138,
            "name" : "Menu Cấu Hình Tài Sản",
            "id" : 672,
            "name" : "Menu Loại"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 138,
            "name" : "Menu Cấu Hình Tài Sản",
            "id" : 673,
            "name" : "Menu Kích Thước Tài Sản"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 138,
            "name" : "Menu Cấu Hình Tài Sản",
            "id" : 674,
            "name" : "Menu Thương Hiệu Tài Sản"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 138,
            "name" : "Menu Cấu Hình Tài Sản",
            "id" : 675,
            "name" : "Menu Nhà Cung Cấp Tài Sản"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 138,
            "name" : "Menu Cấu Hình Tài Sản",
            "id" : 676,
            "name" : "Menu Model Tài Sản"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 139,
            "name" : "Action Kho Tài Sản",
            "id" : 677,
            "name" : "Xem Tài Sản"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 139,
            "name" : "Action Kho Tài Sản",
            "id" : 678,
            "name" : "Sửa Kho Tài Sản"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 139,
            "name" : "Action Kho Tài Sản",
            "id" : 679,
            "name" : "Lịch Sử Kho Tài Sản"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 139,
            "name" : "Action Kho Tài Sản",
            "id" : 680,
            "name" : "Điều Chuyển Kho Tài Sản"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 139,
            "name" : "Action Kho Tài Sản",
            "id" : 681,
            "name" : "Thu Hồi Tài Sản"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 139,
            "name" : "Action Kho Tài Sản",
            "id" : 895,
            "name" : "Import Tài Sản"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 139,
            "name" : "Action Kho Tài Sản",
            "id" : 990,
            "name" : "Cấp phát tài sản"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 139,
            "name" : "Action Kho Tài Sản",
            "id" : 991,
            "name" : "Luân chuyển kho"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 140,
            "name" : "Action Loại Tài Sản",
            "id" : 682,
            "name" : "Xem Loại Tài Sản"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 140,
            "name" : "Action Loại Tài Sản",
            "id" : 683,
            "name" : "Tạo Loại Tài Sản"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 140,
            "name" : "Action Loại Tài Sản",
            "id" : 684,
            "name" : "Sửa Loại Tài Sản"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 140,
            "name" : "Action Loại Tài Sản",
            "id" : 685,
            "name" : "Xóa Loại Tài Sản"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 141,
            "name" : "Action Kích Thước Tài Sản",
            "id" : 686,
            "name" : "Xem Kích Thước Tài Sản"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 141,
            "name" : "Action Kích Thước Tài Sản",
            "id" : 687,
            "name" : "Tạo Kích Thước Tài Sản"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 141,
            "name" : "Action Kích Thước Tài Sản",
            "id" : 688,
            "name" : "Sửa Kích Thước Tài Sản"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 141,
            "name" : "Action Kích Thước Tài Sản",
            "id" : 689,
            "name" : "Xóa Kích Thước Tài Sản"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 142,
            "name" : "Action Thương Hiệu Tài Sản",
            "id" : 690,
            "name" : "Xem Thương Hiệu Tài Sản"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 142,
            "name" : "Action Thương Hiệu Tài Sản",
            "id" : 691,
            "name" : "Tạo Thương Hiệu Tài Sản"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 142,
            "name" : "Action Thương Hiệu Tài Sản",
            "id" : 692,
            "name" : "Sửa Thương Hiệu Tài Sản"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 142,
            "name" : "Action Thương Hiệu Tài Sản",
            "id" : 693,
            "name" : "Xóa Thương Hiệu Tài Sản"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 143,
            "name" : "Action Nhà Cung Cấp Tài Sản",
            "id" : 694,
            "name" : "Xem Nhà Cung Cấp Tài Sản"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 143,
            "name" : "Action Nhà Cung Cấp Tài Sản",
            "id" : 695,
            "name" : "Tạo Nhà Cung Cấp Tài Sản"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 143,
            "name" : "Action Nhà Cung Cấp Tài Sản",
            "id" : 696,
            "name" : "Sửa Nhà Cung Cấp Tài Sản"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 143,
            "name" : "Action Nhà Cung Cấp Tài Sản",
            "id" : 697,
            "name" : "Xóa Nhà Cung Cấp Tài Sản"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 144,
            "name" : "Action Model Tài Sản",
            "id" : 698,
            "name" : "Xem Model Tài Sản"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 144,
            "name" : "Action Model Tài Sản",
            "id" : 699,
            "name" : "Tạo Model Tài Sản"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 144,
            "name" : "Action Model Tài Sản",
            "id" : 700,
            "name" : "Sửa Model Tài Sản"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 144,
            "name" : "Action Model Tài Sản",
            "id" : 701,
            "name" : "Xóa Model Tài Sản"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 145,
            "name" : "Action Lịch Sử Kiểm Kê Tài Sản",
            "id" : 702,
            "name" : "Xuất Báo Cáo Kiểm Kê"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 146,
            "name" : "Action Quản Lý QR",
            "id" : 703,
            "name" : "Xem QR"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 146,
            "name" : "Action Quản Lý QR",
            "id" : 704,
            "name" : "Tạo Mới QR"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 146,
            "name" : "Action Quản Lý QR",
            "id" : 705,
            "name" : "Sửa QR"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 146,
            "name" : "Action Quản Lý QR",
            "id" : 706,
            "name" : "Xóa QR"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 146,
            "name" : "Action Quản Lý QR",
            "id" : 707,
            "name" : "Duyệt QR"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 146,
            "name" : "Action Quản Lý QR",
            "id" : 894,
            "name" : "Xuất báo cáo QR"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 146,
            "name" : "Action Quản Lý QR",
            "id" : 979,
            "name" : "Import QR"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 147,
            "name" : "Action Quản Lý Thông Báo",
            "id" : 708,
            "name" : "Xem Thông Báo"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 147,
            "name" : "Action Quản Lý Thông Báo",
            "id" : 709,
            "name" : "Tạo Thông Báo"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 147,
            "name" : "Action Quản Lý Thông Báo",
            "id" : 710,
            "name" : "Sửa Thông Báo"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 147,
            "name" : "Action Quản Lý Thông Báo",
            "id" : 711,
            "name" : "Xóa Thông Báo"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 147,
            "name" : "Action Quản Lý Thông Báo",
            "id" : 712,
            "name" : "Gửi Thông Báo"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 148,
            "name" : "Action Quản Lý Kế Hoạch",
            "id" : 713,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 148,
            "name" : "Action Quản Lý Kế Hoạch",
            "id" : 714,
            "name" : "Tạo Mới Kế Hoạch"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 148,
            "name" : "Action Quản Lý Kế Hoạch",
            "id" : 715,
            "name" : "Sửa Kế Hoạch"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 148,
            "name" : "Action Quản Lý Kế Hoạch",
            "id" : 716,
            "name" : "Xóa Kế Hoạch"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 148,
            "name" : "Action Quản Lý Kế Hoạch",
            "id" : 876,
            "name" : "Import kế hoạch"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 148,
            "name" : "Action Quản Lý Kế Hoạch",
            "id" : 878,
            "name" : "Xóa kế hoạch con"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 149,
            "name" : "Action Quản Lý Tuyến",
            "id" : 717,
            "name" : "Xem Tuyến"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 149,
            "name" : "Action Quản Lý Tuyến",
            "id" : 718,
            "name" : "Tạo Mới Tuyến"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 149,
            "name" : "Action Quản Lý Tuyến",
            "id" : 719,
            "name" : "Sửa Tuyến"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 149,
            "name" : "Action Quản Lý Tuyến",
            "id" : 720,
            "name" : "Xóa Tuyến"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 149,
            "name" : "Action Quản Lý Tuyến",
            "id" : 905,
            "name" : "Import Tuyến"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 149,
            "name" : "Action Quản Lý Tuyến",
            "id" : 907,
            "name" : "Import\/Export tuyến"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 149,
            "name" : "Action Quản Lý Tuyến",
            "id" : 918,
            "name" : "Export tuyến"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 150,
            "name" : "Menu Cấu hình Cây Hệ Thống",
            "id" : 721,
            "name" : "Menu Cấu Hình Cây Hệ Thống"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 150,
            "name" : "Menu Cấu hình Cây Hệ Thống",
            "id" : 722,
            "name" : "Menu Giám Sát"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 150,
            "name" : "Menu Cấu hình Cây Hệ Thống",
            "id" : 731,
            "name" : "Menu Lịch Sử Điều Chuyển Cây Hệ Thống"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 664,
            "name" : "Xem Kiểm Kê Kho Tại Điểm Bán"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 723,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 724,
            "name" : "Tạo Mới Cây Hệ Thống"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 725,
            "name" : "Sửa Cây Hệ Thống"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 726,
            "name" : "Xóa Cây Hệ Thống"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 727,
            "name" : "Xuất Dữ Liệu Nhân Viên"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 728,
            "name" : "Xuất Báo Cáo Viếng Thăm"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 729,
            "name" : "Xuất Báo Cáo Điểm Bán Mới"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 730,
            "name" : "Điều Chuyển Cây Hệ Thống"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 872,
            "name" : "Tạo checkin công tác"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 873,
            "name" : "Xem cửa hàng của nhân viên"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 874,
            "name" : "Xem vị trí khách hàng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 875,
            "name" : "Điều chuyển cửa hàng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 906,
            "name" : "Cập nhật mã mới"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 152,
            "name" : "Menu Giám Sát",
            "id" : 732,
            "name" : "Menu Giám Sát Hình Ảnh"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 152,
            "name" : "Menu Giám Sát",
            "id" : 733,
            "name" : "Menu Viếng Thăm"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 152,
            "name" : "Menu Giám Sát",
            "id" : 734,
            "name" : "Menu Yêu cầu Cập Nhật Vị Trí"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 152,
            "name" : "Menu Giám Sát",
            "id" : 735,
            "name" : "Menu Lịch Sử Yêu Cầu"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 152,
            "name" : "Menu Giám Sát",
            "id" : 870,
            "name" : "Menu danh sách viếng thăm"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 152,
            "name" : "Menu Giám Sát",
            "id" : 871,
            "name" : "Menu danh sách checkin"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 153,
            "name" : "Action Giám Sát Hình Ảnh",
            "id" : 736,
            "name" : "Xuất Hình Ảnh"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 154,
            "name" : "Action Viếng Thăm - Danh Sách Checkin",
            "id" : 737,
            "name" : "Xem chi tiết kế hoạch"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 154,
            "name" : "Action Viếng Thăm - Danh Sách Checkin",
            "id" : 738,
            "name" : "Checkin\/out"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 155,
            "name" : "Action Yêu Cầu Cập Nhật Vị Trí",
            "id" : 739,
            "name" : "Duyệt Vị Trí"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 155,
            "name" : "Action Yêu Cầu Cập Nhật Vị Trí",
            "id" : 740,
            "name" : "Sửa Địa Chỉ"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 155,
            "name" : "Action Yêu Cầu Cập Nhật Vị Trí",
            "id" : 741,
            "name" : "Xem Hình"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 156,
            "name" : "Menu Quản Lý Phân Phối",
            "id" : 742,
            "name" : "Menu Quản Lý Kênh"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 156,
            "name" : "Menu Quản Lý Phân Phối",
            "id" : 743,
            "name" : "Menu Quản lý chuỗi"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 156,
            "name" : "Menu Quản Lý Phân Phối",
            "id" : 744,
            "name" : "Menu Quản Lý Vùng Miền"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 156,
            "name" : "Menu Quản Lý Phân Phối",
            "id" : 745,
            "name" : "Menu Quản Lý Khu Vực"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 156,
            "name" : "Menu Quản Lý Phân Phối",
            "id" : 1012,
            "name" : "Menu Danh sách tỉnh thành"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 156,
            "name" : "Menu Quản Lý Phân Phối",
            "id" : 1013,
            "name" : "Menu Danh sách quận huyện"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 156,
            "name" : "Menu Quản Lý Phân Phối",
            "id" : 1014,
            "name" : "Danh sách phường xã"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 157,
            "name" : "Action Kênh",
            "id" : 746,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 157,
            "name" : "Action Kênh",
            "id" : 747,
            "name" : "Tạo Mới Kênh"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 157,
            "name" : "Action Kênh",
            "id" : 748,
            "name" : "Sửa Kênh"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 157,
            "name" : "Action Kênh",
            "id" : 749,
            "name" : "Xóa Kênh"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 158,
            "name" : "Action Chuỗi",
            "id" : 750,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 158,
            "name" : "Action Chuỗi",
            "id" : 751,
            "name" : "Tạo Mới Chuỗi"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 158,
            "name" : "Action Chuỗi",
            "id" : 752,
            "name" : "Sửa Chuỗi"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 158,
            "name" : "Action Chuỗi",
            "id" : 753,
            "name" : "Xóa Chuỗi"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 158,
            "name" : "Action Chuỗi",
            "id" : 754,
            "name" : "Xem Mapping Sản Phẩm"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 158,
            "name" : "Action Chuỗi",
            "id" : 755,
            "name" : "Xem Mapping Khách Hàng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 158,
            "name" : "Action Chuỗi",
            "id" : 756,
            "name" : "Tạo Mapping"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 158,
            "name" : "Action Chuỗi",
            "id" : 757,
            "name" : "Sửa Mapping"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 158,
            "name" : "Action Chuỗi",
            "id" : 758,
            "name" : "Xóa Mapping"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 158,
            "name" : "Action Chuỗi",
            "id" : 882,
            "name" : "Import Mapping"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 159,
            "name" : "Action Vùng Miền",
            "id" : 759,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 159,
            "name" : "Action Vùng Miền",
            "id" : 760,
            "name" : "Tạo Mới Vùng Miền"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 159,
            "name" : "Action Vùng Miền",
            "id" : 761,
            "name" : "Sửa Vùng Miền"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 159,
            "name" : "Action Vùng Miền",
            "id" : 762,
            "name" : "Xóa Vùng Miền"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 160,
            "name" : "Action Khu Vực",
            "id" : 763,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 160,
            "name" : "Action Khu Vực",
            "id" : 764,
            "name" : "Tạo Mới Khu Vực"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 160,
            "name" : "Action Khu Vực",
            "id" : 765,
            "name" : "Sửa Khu Vực"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 160,
            "name" : "Action Khu Vực",
            "id" : 766,
            "name" : "Xóa Khu Vực"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 161,
            "name" : "Action Quản Lý Nhân Viên",
            "id" : 767,
            "name" : "Xem Nhân Viên"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 161,
            "name" : "Action Quản Lý Nhân Viên",
            "id" : 768,
            "name" : "Tạo Mới Nhân Viên"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 161,
            "name" : "Action Quản Lý Nhân Viên",
            "id" : 769,
            "name" : "Sửa Nhân Viên"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 161,
            "name" : "Action Quản Lý Nhân Viên",
            "id" : 770,
            "name" : "Xóa Nhân Viên"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 162,
            "name" : "Menu Quản Lý Khách Hàng",
            "id" : 771,
            "name" : "Menu Khách Hàng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 162,
            "name" : "Menu Quản Lý Khách Hàng",
            "id" : 772,
            "name" : "Menu Nhà Phân Phối"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 162,
            "name" : "Menu Quản Lý Khách Hàng",
            "id" : 773,
            "name" : "Menu Nhóm Khách Hàng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 162,
            "name" : "Menu Quản Lý Khách Hàng",
            "id" : 774,
            "name" : "Menu Lịch Sử Cập Nhật"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 162,
            "name" : "Menu Quản Lý Khách Hàng",
            "id" : 868,
            "name" : "Menu nhóm đối tượng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 162,
            "name" : "Menu Quản Lý Khách Hàng",
            "id" : 869,
            "name" : "Menu lịch sử cập nhật"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 162,
            "name" : "Menu Quản Lý Khách Hàng",
            "id" : 924,
            "name" : "Menu nhà cung cấp"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 163,
            "name" : "Action Khách Hàng",
            "id" : 775,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 163,
            "name" : "Action Khách Hàng",
            "id" : 776,
            "name" : "Tạo Mới Khách Hàng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 163,
            "name" : "Action Khách Hàng",
            "id" : 777,
            "name" : "Sửa Khách Hàng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 163,
            "name" : "Action Khách Hàng",
            "id" : 778,
            "name" : "Xóa Khách Hàng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 163,
            "name" : "Action Khách Hàng",
            "id" : 779,
            "name" : "Import Khách Hàng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 164,
            "name" : "Action Nhà Phân Phối",
            "id" : 780,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 164,
            "name" : "Action Nhà Phân Phối",
            "id" : 781,
            "name" : "Tạo Mới Nhà Phân Phối"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 164,
            "name" : "Action Nhà Phân Phối",
            "id" : 782,
            "name" : "Sửa Nhà Phân Phối"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 164,
            "name" : "Action Nhà Phân Phối",
            "id" : 783,
            "name" : "Xóa Nhà Phân Phối"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 164,
            "name" : "Action Nhà Phân Phối",
            "id" : 784,
            "name" : "Import Nhà Phân Phối"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 165,
            "name" : "Action Nhóm Đối Tượng",
            "id" : 785,
            "name" : "Xem Nhóm Đối Tượng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 165,
            "name" : "Action Nhóm Đối Tượng",
            "id" : 786,
            "name" : "Tạo Mới Nhóm Đối Tượng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 165,
            "name" : "Action Nhóm Đối Tượng",
            "id" : 787,
            "name" : "Sửa Nhóm Đối Tượng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 165,
            "name" : "Action Nhóm Đối Tượng",
            "id" : 788,
            "name" : "Xóa Nhóm Đối Tượng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 166,
            "name" : "Menu Chương Trình Bán Hàng",
            "id" : 789,
            "name" : "Menu Chương Trình Khuyến Mãi"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 166,
            "name" : "Menu Chương Trình Bán Hàng",
            "id" : 930,
            "name" : "Menu khai báo ngân sách"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 166,
            "name" : "Menu Chương Trình Bán Hàng",
            "id" : 931,
            "name" : "Menu theo dõi ngân sách NPP"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 166,
            "name" : "Menu Chương Trình Bán Hàng",
            "id" : 932,
            "name" : "Menu Claim By Distribution"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 166,
            "name" : "Menu Chương Trình Bán Hàng",
            "id" : 933,
            "name" : "Menu claim by outlet"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 166,
            "name" : "Menu Chương Trình Bán Hàng",
            "id" : 951,
            "name" : "Menu claim by order"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 167,
            "name" : "Action Chương Trình Khuyến Mãi",
            "id" : 790,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 167,
            "name" : "Action Chương Trình Khuyến Mãi",
            "id" : 791,
            "name" : "Tạo Mới Chương Trình Khuyến Mãi"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 167,
            "name" : "Action Chương Trình Khuyến Mãi",
            "id" : 792,
            "name" : "Sửa Chương Trình Khuyến Mãi"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 167,
            "name" : "Action Chương Trình Khuyến Mãi",
            "id" : 793,
            "name" : "Xóa Chương Trình Khuyến Mãi"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 167,
            "name" : "Action Chương Trình Khuyến Mãi",
            "id" : 877,
            "name" : "Clone CTKM"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 168,
            "name" : "Menu Bảng Giá",
            "id" : 794,
            "name" : "Menu Bảng Giá"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 168,
            "name" : "Menu Bảng Giá",
            "id" : 795,
            "name" : "Menu Log Bảng Giá"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 169,
            "name" : "Action Bảng Giá",
            "id" : 796,
            "name" : "Xem Danh Sách Bảng Giá"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 169,
            "name" : "Action Bảng Giá",
            "id" : 797,
            "name" : "Tạo Mới Bảng Giá"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 169,
            "name" : "Action Bảng Giá",
            "id" : 798,
            "name" : "Sửa Bảng Giá"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 169,
            "name" : "Action Bảng Giá",
            "id" : 799,
            "name" : "Xóa Bảng Giá"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 169,
            "name" : "Action Bảng Giá",
            "id" : 800,
            "name" : "Clone Bảng Giá"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 169,
            "name" : "Action Bảng Giá",
            "id" : 801,
            "name" : "Xem Chi Tiết Bảng Giá"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 169,
            "name" : "Action Bảng Giá",
            "id" : 802,
            "name" : "Thêm Sản Phẩm Trong Bảng Giá"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 169,
            "name" : "Action Bảng Giá",
            "id" : 803,
            "name" : "Sửa Sản Phẩm Trong Bảng Giá"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 169,
            "name" : "Action Bảng Giá",
            "id" : 804,
            "name" : "Xóa Sản Phẩm Trong Bảng Giá"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 169,
            "name" : "Action Bảng Giá",
            "id" : 805,
            "name" : "Import Sản Phẩm Trong Bảng Giá"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 170,
            "name" : "Menu Quản Lý Sản Phẩm",
            "id" : 806,
            "name" : "Menu Ngành hành\/Nhóm hàng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 170,
            "name" : "Menu Quản Lý Sản Phẩm",
            "id" : 807,
            "name" : "Menu Sản Phẩm"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 170,
            "name" : "Menu Quản Lý Sản Phẩm",
            "id" : 809,
            "name" : "Menu phân ngành"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 170,
            "name" : "Menu Quản Lý Sản Phẩm",
            "id" : 810,
            "name" : "Menu Thương Hiệu"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 170,
            "name" : "Menu Quản Lý Sản Phẩm",
            "id" : 811,
            "name" : "Menu nhà cung cấp"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 170,
            "name" : "Menu Quản Lý Sản Phẩm",
            "id" : 812,
            "name" : "Menu Đơn Vị Tính"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 170,
            "name" : "Menu Quản Lý Sản Phẩm",
            "id" : 813,
            "name" : "Menu đơn vị quy đổi"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 170,
            "name" : "Menu Quản Lý Sản Phẩm",
            "id" : 814,
            "name" : "Menu Quản lý thuế"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 171,
            "name" : "Action Ngành hành\/Nhóm hàng",
            "id" : 815,
            "name" : "Xem Ngành hành\/Nhóm hàng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 171,
            "name" : "Action Ngành hành\/Nhóm hàng",
            "id" : 816,
            "name" : "Tạo Ngành hành\/Nhóm hàng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 171,
            "name" : "Action Ngành hành\/Nhóm hàng",
            "id" : 817,
            "name" : "Sửa Ngành hành\/Nhóm hàng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 171,
            "name" : "Action Ngành hành\/Nhóm hàng",
            "id" : 818,
            "name" : "Xóa Ngành hành\/Nhóm hàng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 171,
            "name" : "Action Ngành hành\/Nhóm hàng",
            "id" : 819,
            "name" : "Clone Ngành hành\/Nhóm hàng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 171,
            "name" : "Action Ngành hành\/Nhóm hàng",
            "id" : 820,
            "name" : "Import Sản Phẩm Vào Ngành hành\/Nhóm hàng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 172,
            "name" : "Action Sản Phẩm",
            "id" : 821,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 172,
            "name" : "Action Sản Phẩm",
            "id" : 822,
            "name" : "Tạo Mới Sản Phẩm"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 172,
            "name" : "Action Sản Phẩm",
            "id" : 823,
            "name" : "Sửa Sản Phẩm"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 172,
            "name" : "Action Sản Phẩm",
            "id" : 824,
            "name" : "Xóa Sản Phẩm"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 172,
            "name" : "Action Sản Phẩm",
            "id" : 825,
            "name" : "Clone Sản Phẩm"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 172,
            "name" : "Action Sản Phẩm",
            "id" : 886,
            "name" : "Xuất danh sách sản phẩm"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 172,
            "name" : "Action Sản Phẩm",
            "id" : 912,
            "name" : "Import sản phẩm"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 173,
            "name" : "Action phân ngành",
            "id" : 826,
            "name" : "Xem Phân Ngành"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 173,
            "name" : "Action phân ngành",
            "id" : 827,
            "name" : "Tạo Mới Phân Ngành"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 173,
            "name" : "Action phân ngành",
            "id" : 828,
            "name" : "Sửa Phân Ngành"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 173,
            "name" : "Action phân ngành",
            "id" : 829,
            "name" : "Xóa Phân Ngành"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 174,
            "name" : "Action Thương Hiệu",
            "id" : 830,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 174,
            "name" : "Action Thương Hiệu",
            "id" : 831,
            "name" : "Tạo Mới Thương Hiệu"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 174,
            "name" : "Action Thương Hiệu",
            "id" : 832,
            "name" : "Sửa Thương Hiệu"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 174,
            "name" : "Action Thương Hiệu",
            "id" : 833,
            "name" : "Xóa Thương Hiệu"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 175,
            "name" : "Action Hãng Sản Xuất",
            "id" : 834,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 175,
            "name" : "Action Hãng Sản Xuất",
            "id" : 835,
            "name" : "Tạo Mới Hãng Sản Xuất"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 175,
            "name" : "Action Hãng Sản Xuất",
            "id" : 836,
            "name" : "Sửa Hãng Sản Xuất"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 175,
            "name" : "Action Hãng Sản Xuất",
            "id" : 837,
            "name" : "Xóa Hãng Sản Xuất"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 176,
            "name" : "Action Đơn Vị Tính",
            "id" : 838,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 176,
            "name" : "Action Đơn Vị Tính",
            "id" : 839,
            "name" : "Tạo Mới Đơn Vị Tính"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 176,
            "name" : "Action Đơn Vị Tính",
            "id" : 840,
            "name" : "Sửa Đơn Vị Tính"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 176,
            "name" : "Action Đơn Vị Tính",
            "id" : 841,
            "name" : "Xóa Đơn Vị Tính"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 177,
            "name" : "Action đơn vị quy đổi",
            "id" : 842,
            "name" : "Xem Đơn Vị Quy Đổi"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 177,
            "name" : "Action đơn vị quy đổi",
            "id" : 843,
            "name" : "Tạo Mới Đơn Vị Quy Đổi"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 177,
            "name" : "Action đơn vị quy đổi",
            "id" : 844,
            "name" : "Sửa Đơn Vị Quy Đổi"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 177,
            "name" : "Action đơn vị quy đổi",
            "id" : 845,
            "name" : "Xóa Đơn Vị Quy Đổi"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 178,
            "name" : "Action Thuế",
            "id" : 846,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 178,
            "name" : "Action Thuế",
            "id" : 847,
            "name" : "Tạo Mới Thuế"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 178,
            "name" : "Action Thuế",
            "id" : 848,
            "name" : "Sửa Thuế"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 178,
            "name" : "Action Thuế",
            "id" : 849,
            "name" : "Xóa Thuế"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 850,
            "name" : "Menu Tất Cả Đơn Hàng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 851,
            "name" : "Menu Đơn Mới"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 852,
            "name" : "Menu Nhận Đơn"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 853,
            "name" : "Menu Kế Toán HH"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 854,
            "name" : "Menu Kế toán công nợ"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 855,
            "name" : "Menu Chờ Duyệt"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 856,
            "name" : "Menu Kho Hàng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 857,
            "name" : "Menu Thanh Toán"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 858,
            "name" : "Menu Hủy Đơn"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 893,
            "name" : "Menu đơn hàng PO"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 911,
            "name" : "Menu Thực hiện & kết quả giao hàng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 921,
            "name" : "Menu Chưa Thanh Toán"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 859,
            "name" : "Tạo Mới Đơn Hàng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 860,
            "name" : "Import đơn hàng chuỗi"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 861,
            "name" : "Xem Chi Tiết Đơn"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 862,
            "name" : "Sửa Đơn"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 863,
            "name" : "Duyệt Đơn"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 864,
            "name" : "Hủy Đơn"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 865,
            "name" : "Xem Báo Cáo Đơn hàng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 866,
            "name" : "Xuất Dữ Liệu"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 883,
            "name" : "Đồng bộ lại đơn hàng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 910,
            "name" : "Tạo lệnh giao hàng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 922,
            "name" : "Cập nhật trạng thái thanh toán"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 1025,
            "name" : "Sửa đơn trạng thái nhận đơn"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 181,
            "name" : "Menu quản lý nhân viên",
            "id" : 867,
            "name" : "Menu danh sách nhân viên"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 182,
            "name" : "Menu nhật ký tích hợp",
            "id" : 880,
            "name" : "Menu tích hợp SEASOFT"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 182,
            "name" : "Menu nhật ký tích hợp",
            "id" : 881,
            "name" : "Menu Log đồng bộ"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 182,
            "name" : "Menu nhật ký tích hợp",
            "id" : 896,
            "name" : "Menu tích hợp ERP"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 183,
            "name" : "File",
            "id" : 884,
            "name" : "UPLOAD-FILE"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 184,
            "name" : "Action nhóm khách hàng",
            "id" : 888,
            "name" : "Tạo nhóm khách hàng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 184,
            "name" : "Action nhóm khách hàng",
            "id" : 889,
            "name" : "Sửa nhóm khách hàng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 184,
            "name" : "Action nhóm khách hàng",
            "id" : 890,
            "name" : "Xem nhóm khách hàng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 184,
            "name" : "Action nhóm khách hàng",
            "id" : 891,
            "name" : "Xóa nhóm khách hàng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 184,
            "name" : "Action nhóm khách hàng",
            "id" : 892,
            "name" : "Import nhóm khách hàng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 185,
            "name" : "Menu chương trình trưng bày",
            "id" : 899,
            "name" : "Chương trình trưng bày"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 186,
            "name" : "Action chương trình trưng bày",
            "id" : 900,
            "name" : "Xem chương trình trưng bày"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 186,
            "name" : "Action chương trình trưng bày",
            "id" : 901,
            "name" : "Cập nhật chương trình trưng bày"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 186,
            "name" : "Action chương trình trưng bày",
            "id" : 902,
            "name" : "Xóa chương trình trưng bày"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 186,
            "name" : "Action chương trình trưng bày",
            "id" : 903,
            "name" : "Tạo chương trình trưng bày"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 186,
            "name" : "Action chương trình trưng bày",
            "id" : 904,
            "name" : "Clone chương trình trưng bày"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 187,
            "name" : "Action nhà cung cấp",
            "id" : 925,
            "name" : "Xóa nhà cung cấp"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 187,
            "name" : "Action nhà cung cấp",
            "id" : 926,
            "name" : "Xem nhà cung cấp"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 188,
            "name" : "Claim by Outlet",
            "id" : 934,
            "name" : "Xuất báo cáo"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 188,
            "name" : "Claim by Outlet",
            "id" : 943,
            "name" : "Duyệt claim"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 188,
            "name" : "Claim by Outlet",
            "id" : 944,
            "name" : "Từ chối claim"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 189,
            "name" : "Claim By Distributor",
            "id" : 935,
            "name" : "Xuất báo cáo"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 189,
            "name" : "Claim By Distributor",
            "id" : 941,
            "name" : "Duyệt claim"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 189,
            "name" : "Claim By Distributor",
            "id" : 942,
            "name" : "Từ chối claim"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 190,
            "name" : "Action khai báo ngân sách",
            "id" : 936,
            "name" : "Xem ngân sách"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 190,
            "name" : "Action khai báo ngân sách",
            "id" : 937,
            "name" : "Cập nhật ngân sách"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 190,
            "name" : "Action khai báo ngân sách",
            "id" : 938,
            "name" : "Tạo ngân sách"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 190,
            "name" : "Action khai báo ngân sách",
            "id" : 939,
            "name" : "Xóa ngân sách"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 190,
            "name" : "Action khai báo ngân sách",
            "id" : 940,
            "name" : "Import ngân sách"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 190,
            "name" : "Action khai báo ngân sách",
            "id" : 946,
            "name" : "Clone ngân sách"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 191,
            "name" : "Action theo dõi ngân sách NPP",
            "id" : 945,
            "name" : "Xuất báo cáo"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 192,
            "name" : "Menu quản lý email",
            "id" : 948,
            "name" : "Email nhận"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 192,
            "name" : "Menu quản lý email",
            "id" : 949,
            "name" : "Email gửi"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 192,
            "name" : "Menu quản lý email",
            "id" : 950,
            "name" : "Email PO"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 193,
            "name" : "Action Claim by order",
            "id" : 952,
            "name" : "Duyệt claim"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 193,
            "name" : "Action Claim by order",
            "id" : 953,
            "name" : "Từ chối claim"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 193,
            "name" : "Action Claim by order",
            "id" : 954,
            "name" : "Xuất báo cáo"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 194,
            "name" : "Menu đơn hàng mua",
            "id" : 956,
            "name" : "Menu tất cả đơn hàng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 194,
            "name" : "Menu đơn hàng mua",
            "id" : 957,
            "name" : "Menu đơn mới"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 194,
            "name" : "Menu đơn hàng mua",
            "id" : 958,
            "name" : "Menu nhận đơn"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 194,
            "name" : "Menu đơn hàng mua",
            "id" : 959,
            "name" : "Menu chờ giao"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 194,
            "name" : "Menu đơn hàng mua",
            "id" : 960,
            "name" : "Menu Giao hàng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 194,
            "name" : "Menu đơn hàng mua",
            "id" : 961,
            "name" : "Menu Hoàn tất"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 194,
            "name" : "Menu đơn hàng mua",
            "id" : 962,
            "name" : "Menu Đã nhập hàng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 194,
            "name" : "Menu đơn hàng mua",
            "id" : 963,
            "name" : "Menu hủy"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 194,
            "name" : "Menu đơn hàng mua",
            "id" : 964,
            "name" : "Tạo đơn hàng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 194,
            "name" : "Menu đơn hàng mua",
            "id" : 980,
            "name" : "Menu Trả hàng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 195,
            "name" : "Action chương trình loyalty",
            "id" : 968,
            "name" : "Tạo chương trình loyalty"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 195,
            "name" : "Action chương trình loyalty",
            "id" : 969,
            "name" : "Clone chương trình loyalty"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 195,
            "name" : "Action chương trình loyalty",
            "id" : 970,
            "name" : "Xem chương trình loyalty"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 195,
            "name" : "Action chương trình loyalty",
            "id" : 971,
            "name" : "Chỉnh sửa chương trình loyalty"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 195,
            "name" : "Action chương trình loyalty",
            "id" : 972,
            "name" : "Xóa chương trình loyalty"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 196,
            "name" : "Action đăng ký chương trình Loyalty",
            "id" : 973,
            "name" : "Tạo đăng ký"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 196,
            "name" : "Action đăng ký chương trình Loyalty",
            "id" : 974,
            "name" : "Xem đăng ký"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 196,
            "name" : "Action đăng ký chương trình Loyalty",
            "id" : 975,
            "name" : "Chỉnh sửa đăng ký"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 196,
            "name" : "Action đăng ký chương trình Loyalty",
            "id" : 976,
            "name" : "Xóa đăng ký"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 197,
            "name" : "Menu chương trình Loyalty",
            "id" : 965,
            "name" : "Menu Danh Sách Chương Trình Loyalty"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 197,
            "name" : "Menu chương trình Loyalty",
            "id" : 966,
            "name" : "Menu đăng ký chương tình Loyalty"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 197,
            "name" : "Menu chương trình Loyalty",
            "id" : 967,
            "name" : "Menu theo dõi Loyalty"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 197,
            "name" : "Menu chương trình Loyalty",
            "id" : 978,
            "name" : "Menu kết quả tính thưởng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 198,
            "name" : "Quản lý KPI",
            "id" : 984,
            "name" : "Tạo KPI"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 198,
            "name" : "Quản lý KPI",
            "id" : 985,
            "name" : "Cập nhật trạng thái KPI"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 198,
            "name" : "Quản lý KPI",
            "id" : 986,
            "name" : "Xem KPI"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 198,
            "name" : "Quản lý KPI",
            "id" : 987,
            "name" : "Xóa KPI"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 198,
            "name" : "Quản lý KPI",
            "id" : 988,
            "name" : "Chỉnh sửa KPI"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 199,
            "name" : "Action Yêu cầu tài sản",
            "id" : 992,
            "name" : "Tạo yêu câu"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 199,
            "name" : "Action Yêu cầu tài sản",
            "id" : 993,
            "name" : "Xem Yêu cầu"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 199,
            "name" : "Action Yêu cầu tài sản",
            "id" : 994,
            "name" : "Sửa yêu cầu"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 199,
            "name" : "Action Yêu cầu tài sản",
            "id" : 995,
            "name" : "Xóa yêu cầu"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 199,
            "name" : "Action Yêu cầu tài sản",
            "id" : 996,
            "name" : "Từ chối yêu cầu"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 199,
            "name" : "Action Yêu cầu tài sản",
            "id" : 997,
            "name" : "Sửa\/Nhập Serial"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 199,
            "name" : "Action Yêu cầu tài sản",
            "id" : 998,
            "name" : "Tải chứng từ"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 199,
            "name" : "Action Yêu cầu tài sản",
            "id" : 999,
            "name" : "Xem Preview Chứng Từ"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 199,
            "name" : "Action Yêu cầu tài sản",
            "id" : 1000,
            "name" : "Hoàn thành trực tiếp"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 199,
            "name" : "Action Yêu cầu tài sản",
            "id" : 1001,
            "name" : "Xuất báo cáo Excel"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 199,
            "name" : "Action Yêu cầu tài sản",
            "id" : 1002,
            "name" : "Xác nhận yêu cầu lần 1"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 199,
            "name" : "Action Yêu cầu tài sản",
            "id" : 1003,
            "name" : "Xác nhận yêu cầu lần 2"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 199,
            "name" : "Action Yêu cầu tài sản",
            "id" : 1004,
            "name" : "Xác nhận yêu cầu lần 3"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 199,
            "name" : "Action Yêu cầu tài sản",
            "id" : 1005,
            "name" : "Duyệt yêu cầu"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 201,
            "name" : "Action phiếu giao hàng",
            "id" : 1017,
            "name" : "Xuất Báo cáo giao hàng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 201,
            "name" : "Action phiếu giao hàng",
            "id" : 1018,
            "name" : "Duyệt hủy"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 201,
            "name" : "Action phiếu giao hàng",
            "id" : 1019,
            "name" : "Giao lại"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 201,
            "name" : "Action phiếu giao hàng",
            "id" : 1020,
            "name" : "Xóa"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 201,
            "name" : "Action phiếu giao hàng",
            "id" : 1021,
            "name" : "Xem"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 202,
            "name" : "Action kết quả tính thưởng",
            "id" : 1023,
            "name" : "Xuất dữ liệu"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 202,
            "name" : "Action kết quả tính thưởng",
            "id" : 1024,
            "name" : "Tính lại kết quả trả thưởng"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 203,
            "name" : "Action theo dõi Loyalty",
            "id" : 1026,
            "name" : "Xuất báo cáo"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 204,
            "name" : "Action đơn hàng ERP",
            "id" : 1027,
            "name" : "Xuất báo cáo"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 205,
            "name" : "Action Email Nhận",
            "id" : 1028,
            "name" : "Tạo Email"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 205,
            "name" : "Action Email Nhận",
            "id" : 1029,
            "name" : "Sửa Email"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 205,
            "name" : "Action Email Nhận",
            "id" : 1030,
            "name" : "Xóa Email"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 205,
            "name" : "Action Email Nhận",
            "id" : 1031,
            "name" : "Đăng Nhập Email"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 206,
            "name" : "Action Email Gửi",
            "id" : 1032,
            "name" : "Tạo Email"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 206,
            "name" : "Action Email Gửi",
            "id" : 1033,
            "name" : "Sửa Email"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 206,
            "name" : "Action Email Gửi",
            "id" : 1034,
            "name" : "Xóa Email"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 207,
            "name" : "Action Email PO",
            "id" : 1035,
            "name" : "Refresh Email"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 207,
            "name" : "Action Email PO",
            "id" : 1036,
            "name" : "Tải File PO"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 207,
            "name" : "Action Email PO",
            "id" : 1037,
            "name" : "Import PO từ Email"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 207,
            "name" : "Action Email PO",
            "id" : 1038,
            "name" : "Xem Email"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 207,
            "name" : "Action Email PO",
            "id" : 1039,
            "name" : "Từ chối Email"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 207,
            "name" : "Action Email PO",
            "id" : 1040,
            "name" : "Xem File PO"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 207,
            "name" : "Action Email PO",
            "id" : 1041,
            "name" : "Xem Phiếu nhập kho của POS"
        },
        {
            "id" : 1,
            "name" : "Admin",
            "id" : 207,
            "name" : "Action Email PO",
            "id" : 1042,
            "name" : "Tải Phiếu nhập kho của POS"
        },
        {
            "id" : 2,
            "name" : "Nhà Cung Cấp",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 613,
            "name" : "Menu Quản Lý Báo Cáo"
        },
        {
            "id" : 2,
            "name" : "Nhà Cung Cấp",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 614,
            "name" : "Menu Quản Trị Kho"
        },
        {
            "id" : 2,
            "name" : "Nhà Cung Cấp",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 623,
            "name" : "Menu Quản Lý Nhân Viên"
        },
        {
            "id" : 2,
            "name" : "Nhà Cung Cấp",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 624,
            "name" : "Menu Quản Lý Khách Hàng"
        },
        {
            "id" : 2,
            "name" : "Nhà Cung Cấp",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 627,
            "name" : "Menu Sản Phẩm"
        },
        {
            "id" : 2,
            "name" : "Nhà Cung Cấp",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 628,
            "name" : "Menu Đơn Hàng"
        },
        {
            "id" : 2,
            "name" : "Nhà Cung Cấp",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 629,
            "name" : "Dashboard"
        },
        {
            "id" : 2,
            "name" : "Nhà Cung Cấp",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 638,
            "name" : "Báo cáo Sản Phẩm Theo Khách Hàng"
        },
        {
            "id" : 2,
            "name" : "Nhà Cung Cấp",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 639,
            "name" : "Báo cáo Thống Kê Bán Hàng Theo Khu Vực"
        },
        {
            "id" : 2,
            "name" : "Nhà Cung Cấp",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 641,
            "name" : "Báo cáo Đơn Hàng"
        },
        {
            "id" : 2,
            "name" : "Nhà Cung Cấp",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 642,
            "name" : "Báo cáo Chi Tiết Đơn Hàng"
        },
        {
            "id" : 2,
            "name" : "Nhà Cung Cấp",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 643,
            "name" : "Báo cáo Thống Kê Bán Hàng Theo Kênh"
        },
        {
            "id" : 2,
            "name" : "Nhà Cung Cấp",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 914,
            "name" : "Báo cáo Điểm bán mới"
        },
        {
            "id" : 2,
            "name" : "Nhà Cung Cấp",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 917,
            "name" : "Báo cáo Khách hàng"
        },
        {
            "id" : 2,
            "name" : "Nhà Cung Cấp",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 919,
            "name" : "Báo cáo Tồn kho"
        },
        {
            "id" : 2,
            "name" : "Nhà Cung Cấp",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 920,
            "name" : "Báo cáo Hóa đơn"
        },
        {
            "id" : 2,
            "name" : "Nhà Cung Cấp",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 923,
            "name" : "Báo cáo Claim"
        },
        {
            "id" : 2,
            "name" : "Nhà Cung Cấp",
            "id" : 130,
            "name" : "Menu Quản Trị Kho",
            "id" : 644,
            "name" : "Menu Danh Sách Kho"
        },
        {
            "id" : 2,
            "name" : "Nhà Cung Cấp",
            "id" : 130,
            "name" : "Menu Quản Trị Kho",
            "id" : 645,
            "name" : "Menu Nhập Kho"
        },
        {
            "id" : 2,
            "name" : "Nhà Cung Cấp",
            "id" : 130,
            "name" : "Menu Quản Trị Kho",
            "id" : 646,
            "name" : "Menu Xuất Kho"
        },
        {
            "id" : 2,
            "name" : "Nhà Cung Cấp",
            "id" : 130,
            "name" : "Menu Quản Trị Kho",
            "id" : 648,
            "name" : "Menu Tồn Kho"
        },
        {
            "id" : 2,
            "name" : "Nhà Cung Cấp",
            "id" : 132,
            "name" : "Action Nhập\/Xuất Kho",
            "id" : 656,
            "name" : "Xem Danh sách"
        },
        {
            "id" : 2,
            "name" : "Nhà Cung Cấp",
            "id" : 134,
            "name" : "Action Tồn Kho",
            "id" : 913,
            "name" : "Xuất dữ liệu tồn kho"
        },
        {
            "id" : 2,
            "name" : "Nhà Cung Cấp",
            "id" : 161,
            "name" : "Action Quản Lý Nhân Viên",
            "id" : 767,
            "name" : "Xem Nhân Viên"
        },
        {
            "id" : 2,
            "name" : "Nhà Cung Cấp",
            "id" : 162,
            "name" : "Menu Quản Lý Khách Hàng",
            "id" : 771,
            "name" : "Menu Khách Hàng"
        },
        {
            "id" : 2,
            "name" : "Nhà Cung Cấp",
            "id" : 162,
            "name" : "Menu Quản Lý Khách Hàng",
            "id" : 772,
            "name" : "Menu Nhà Phân Phối"
        },
        {
            "id" : 2,
            "name" : "Nhà Cung Cấp",
            "id" : 163,
            "name" : "Action Khách Hàng",
            "id" : 775,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 2,
            "name" : "Nhà Cung Cấp",
            "id" : 164,
            "name" : "Action Nhà Phân Phối",
            "id" : 780,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 2,
            "name" : "Nhà Cung Cấp",
            "id" : 170,
            "name" : "Menu Quản Lý Sản Phẩm",
            "id" : 806,
            "name" : "Menu Ngành hành\/Nhóm hàng"
        },
        {
            "id" : 2,
            "name" : "Nhà Cung Cấp",
            "id" : 170,
            "name" : "Menu Quản Lý Sản Phẩm",
            "id" : 807,
            "name" : "Menu Sản Phẩm"
        },
        {
            "id" : 2,
            "name" : "Nhà Cung Cấp",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 850,
            "name" : "Menu Tất Cả Đơn Hàng"
        },
        {
            "id" : 2,
            "name" : "Nhà Cung Cấp",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 851,
            "name" : "Menu Đơn Mới"
        },
        {
            "id" : 2,
            "name" : "Nhà Cung Cấp",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 852,
            "name" : "Menu Nhận Đơn"
        },
        {
            "id" : 2,
            "name" : "Nhà Cung Cấp",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 853,
            "name" : "Menu Kế Toán HH"
        },
        {
            "id" : 2,
            "name" : "Nhà Cung Cấp",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 855,
            "name" : "Menu Chờ Duyệt"
        },
        {
            "id" : 2,
            "name" : "Nhà Cung Cấp",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 856,
            "name" : "Menu Kho Hàng"
        },
        {
            "id" : 2,
            "name" : "Nhà Cung Cấp",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 857,
            "name" : "Menu Thanh Toán"
        },
        {
            "id" : 2,
            "name" : "Nhà Cung Cấp",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 858,
            "name" : "Menu Hủy Đơn"
        },
        {
            "id" : 2,
            "name" : "Nhà Cung Cấp",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 911,
            "name" : "Menu Thực hiện & kết quả giao hàng"
        },
        {
            "id" : 2,
            "name" : "Nhà Cung Cấp",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 921,
            "name" : "Menu Chưa Thanh Toán"
        },
        {
            "id" : 2,
            "name" : "Nhà Cung Cấp",
            "id" : 181,
            "name" : "Menu quản lý nhân viên",
            "id" : 867,
            "name" : "Menu danh sách nhân viên"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 615,
            "name" : "Menu Quản Lý Tài Sản"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 619,
            "name" : "Menu Quản Lý Kế Hoạch"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 620,
            "name" : "Menu Quản Lý Tuyến"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 621,
            "name" : "Menu Quản Lý Cây Hệ Thống"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 623,
            "name" : "Menu Quản Lý Nhân Viên"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 624,
            "name" : "Menu Quản Lý Khách Hàng"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 625,
            "name" : "Menu Chương Trình Bán Hàng"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 627,
            "name" : "Menu Sản Phẩm"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 628,
            "name" : "Menu Đơn Hàng"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 977,
            "name" : "Menu chương trình Loyalty"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 137,
            "name" : "Menu Quản Lý Tài Sản",
            "id" : 669,
            "name" : "Menu Danh Sách Kho Tài Sản"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 137,
            "name" : "Menu Quản Lý Tài Sản",
            "id" : 671,
            "name" : "Menu Lịch Sử Kiểm Kê Tài Sản"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 139,
            "name" : "Action Kho Tài Sản",
            "id" : 677,
            "name" : "Xem Tài Sản"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 148,
            "name" : "Action Quản Lý Kế Hoạch",
            "id" : 713,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 149,
            "name" : "Action Quản Lý Tuyến",
            "id" : 717,
            "name" : "Xem Tuyến"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 150,
            "name" : "Menu Cấu hình Cây Hệ Thống",
            "id" : 721,
            "name" : "Menu Cấu Hình Cây Hệ Thống"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 150,
            "name" : "Menu Cấu hình Cây Hệ Thống",
            "id" : 722,
            "name" : "Menu Giám Sát"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 150,
            "name" : "Menu Cấu hình Cây Hệ Thống",
            "id" : 731,
            "name" : "Menu Lịch Sử Điều Chuyển Cây Hệ Thống"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 664,
            "name" : "Xem Kiểm Kê Kho Tại Điểm Bán"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 723,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 727,
            "name" : "Xuất Dữ Liệu Nhân Viên"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 728,
            "name" : "Xuất Báo Cáo Viếng Thăm"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 729,
            "name" : "Xuất Báo Cáo Điểm Bán Mới"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 872,
            "name" : "Tạo checkin công tác"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 873,
            "name" : "Xem cửa hàng của nhân viên"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 874,
            "name" : "Xem vị trí khách hàng"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 152,
            "name" : "Menu Giám Sát",
            "id" : 732,
            "name" : "Menu Giám Sát Hình Ảnh"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 152,
            "name" : "Menu Giám Sát",
            "id" : 733,
            "name" : "Menu Viếng Thăm"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 152,
            "name" : "Menu Giám Sát",
            "id" : 734,
            "name" : "Menu Yêu cầu Cập Nhật Vị Trí"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 152,
            "name" : "Menu Giám Sát",
            "id" : 735,
            "name" : "Menu Lịch Sử Yêu Cầu"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 152,
            "name" : "Menu Giám Sát",
            "id" : 870,
            "name" : "Menu danh sách viếng thăm"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 152,
            "name" : "Menu Giám Sát",
            "id" : 871,
            "name" : "Menu danh sách checkin"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 154,
            "name" : "Action Viếng Thăm - Danh Sách Checkin",
            "id" : 737,
            "name" : "Xem chi tiết kế hoạch"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 155,
            "name" : "Action Yêu Cầu Cập Nhật Vị Trí",
            "id" : 741,
            "name" : "Xem Hình"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 161,
            "name" : "Action Quản Lý Nhân Viên",
            "id" : 767,
            "name" : "Xem Nhân Viên"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 162,
            "name" : "Menu Quản Lý Khách Hàng",
            "id" : 771,
            "name" : "Menu Khách Hàng"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 162,
            "name" : "Menu Quản Lý Khách Hàng",
            "id" : 772,
            "name" : "Menu Nhà Phân Phối"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 162,
            "name" : "Menu Quản Lý Khách Hàng",
            "id" : 774,
            "name" : "Menu Lịch Sử Cập Nhật"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 163,
            "name" : "Action Khách Hàng",
            "id" : 775,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 164,
            "name" : "Action Nhà Phân Phối",
            "id" : 780,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 165,
            "name" : "Action Nhóm Đối Tượng",
            "id" : 785,
            "name" : "Xem Nhóm Đối Tượng"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 166,
            "name" : "Menu Chương Trình Bán Hàng",
            "id" : 789,
            "name" : "Menu Chương Trình Khuyến Mãi"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 167,
            "name" : "Action Chương Trình Khuyến Mãi",
            "id" : 790,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 170,
            "name" : "Menu Quản Lý Sản Phẩm",
            "id" : 806,
            "name" : "Menu Ngành hành\/Nhóm hàng"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 170,
            "name" : "Menu Quản Lý Sản Phẩm",
            "id" : 807,
            "name" : "Menu Sản Phẩm"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 171,
            "name" : "Action Ngành hành\/Nhóm hàng",
            "id" : 815,
            "name" : "Xem Ngành hành\/Nhóm hàng"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 172,
            "name" : "Action Sản Phẩm",
            "id" : 821,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 850,
            "name" : "Menu Tất Cả Đơn Hàng"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 851,
            "name" : "Menu Đơn Mới"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 852,
            "name" : "Menu Nhận Đơn"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 853,
            "name" : "Menu Kế Toán HH"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 854,
            "name" : "Menu Kế toán công nợ"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 855,
            "name" : "Menu Chờ Duyệt"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 856,
            "name" : "Menu Kho Hàng"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 857,
            "name" : "Menu Thanh Toán"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 858,
            "name" : "Menu Hủy Đơn"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 861,
            "name" : "Xem Chi Tiết Đơn"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 181,
            "name" : "Menu quản lý nhân viên",
            "id" : 867,
            "name" : "Menu danh sách nhân viên"
        },
        {
            "id" : 12,
            "name" : "Giám sát",
            "id" : 197,
            "name" : "Menu chương trình Loyalty",
            "id" : 967,
            "name" : "Menu theo dõi Loyalty"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 613,
            "name" : "Menu Quản Lý Báo Cáo"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 614,
            "name" : "Menu Quản Trị Kho"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 615,
            "name" : "Menu Quản Lý Tài Sản"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 620,
            "name" : "Menu Quản Lý Tuyến"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 621,
            "name" : "Menu Quản Lý Cây Hệ Thống"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 623,
            "name" : "Menu Quản Lý Nhân Viên"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 624,
            "name" : "Menu Quản Lý Khách Hàng"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 625,
            "name" : "Menu Chương Trình Bán Hàng"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 626,
            "name" : "Menu Bảng Giá"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 627,
            "name" : "Menu Sản Phẩm"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 628,
            "name" : "Menu Đơn Hàng"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 955,
            "name" : "Menu đơn hàng mua"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 977,
            "name" : "Menu chương trình Loyalty"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 641,
            "name" : "Báo cáo Đơn Hàng"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 642,
            "name" : "Báo cáo Chi Tiết Đơn Hàng"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 914,
            "name" : "Báo cáo Điểm bán mới"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 915,
            "name" : "Báo cáo Tuyến"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 916,
            "name" : "Báo cáo Sản phẩm"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 917,
            "name" : "Báo cáo Khách hàng"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 919,
            "name" : "Báo cáo Tồn kho"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 920,
            "name" : "Báo cáo Hóa đơn"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 982,
            "name" : "Báo cáo Xuất nhập tồn"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 130,
            "name" : "Menu Quản Trị Kho",
            "id" : 644,
            "name" : "Menu Danh Sách Kho"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 130,
            "name" : "Menu Quản Trị Kho",
            "id" : 645,
            "name" : "Menu Nhập Kho"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 130,
            "name" : "Menu Quản Trị Kho",
            "id" : 646,
            "name" : "Menu Xuất Kho"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 130,
            "name" : "Menu Quản Trị Kho",
            "id" : 647,
            "name" : "Menu Quản Lý Lô"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 130,
            "name" : "Menu Quản Trị Kho",
            "id" : 648,
            "name" : "Menu Tồn Kho"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 130,
            "name" : "Menu Quản Trị Kho",
            "id" : 649,
            "name" : "Menu Kiểm Kê Kho Tại Điểm Bán"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 130,
            "name" : "Menu Quản Trị Kho",
            "id" : 650,
            "name" : "Menu Cấu Hình Sản Phẩm Kiểm Kê"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 131,
            "name" : "Action Danh Sách Kho",
            "id" : 651,
            "name" : "Xem Chi Tiết Kho"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 131,
            "name" : "Action Danh Sách Kho",
            "id" : 652,
            "name" : "Xem Danh Sách kho"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 131,
            "name" : "Action Danh Sách Kho",
            "id" : 653,
            "name" : "Tạo Kho"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 131,
            "name" : "Action Danh Sách Kho",
            "id" : 654,
            "name" : "Sửa Kho"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 131,
            "name" : "Action Danh Sách Kho",
            "id" : 655,
            "name" : "Xóa Kho"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 131,
            "name" : "Action Danh Sách Kho",
            "id" : 885,
            "name" : "UPDATE-INVENTORY"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 132,
            "name" : "Action Nhập\/Xuất Kho",
            "id" : 656,
            "name" : "Xem Danh sách"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 132,
            "name" : "Action Nhập\/Xuất Kho",
            "id" : 657,
            "name" : "Tạo Phiếu Nhập\/Xuất"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 132,
            "name" : "Action Nhập\/Xuất Kho",
            "id" : 658,
            "name" : "Sửa Phiếu Nhập\/Xuất"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 132,
            "name" : "Action Nhập\/Xuất Kho",
            "id" : 659,
            "name" : "Xóa Phiếu Nhập\/Xuất"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 134,
            "name" : "Action Tồn Kho",
            "id" : 663,
            "name" : "Import Tồn Kho"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 134,
            "name" : "Action Tồn Kho",
            "id" : 913,
            "name" : "Xuất dữ liệu tồn kho"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 134,
            "name" : "Action Tồn Kho",
            "id" : 983,
            "name" : "Xuất báo cáo xuất nhập tồn"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 137,
            "name" : "Menu Quản Lý Tài Sản",
            "id" : 669,
            "name" : "Menu Danh Sách Kho Tài Sản"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 137,
            "name" : "Menu Quản Lý Tài Sản",
            "id" : 671,
            "name" : "Menu Lịch Sử Kiểm Kê Tài Sản"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 139,
            "name" : "Action Kho Tài Sản",
            "id" : 677,
            "name" : "Xem Tài Sản"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 139,
            "name" : "Action Kho Tài Sản",
            "id" : 679,
            "name" : "Lịch Sử Kho Tài Sản"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 139,
            "name" : "Action Kho Tài Sản",
            "id" : 680,
            "name" : "Điều Chuyển Kho Tài Sản"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 139,
            "name" : "Action Kho Tài Sản",
            "id" : 681,
            "name" : "Thu Hồi Tài Sản"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 145,
            "name" : "Action Lịch Sử Kiểm Kê Tài Sản",
            "id" : 702,
            "name" : "Xuất Báo Cáo Kiểm Kê"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 146,
            "name" : "Action Quản Lý QR",
            "id" : 703,
            "name" : "Xem QR"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 146,
            "name" : "Action Quản Lý QR",
            "id" : 707,
            "name" : "Duyệt QR"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 149,
            "name" : "Action Quản Lý Tuyến",
            "id" : 717,
            "name" : "Xem Tuyến"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 149,
            "name" : "Action Quản Lý Tuyến",
            "id" : 718,
            "name" : "Tạo Mới Tuyến"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 149,
            "name" : "Action Quản Lý Tuyến",
            "id" : 719,
            "name" : "Sửa Tuyến"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 149,
            "name" : "Action Quản Lý Tuyến",
            "id" : 720,
            "name" : "Xóa Tuyến"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 149,
            "name" : "Action Quản Lý Tuyến",
            "id" : 905,
            "name" : "Import Tuyến"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 149,
            "name" : "Action Quản Lý Tuyến",
            "id" : 907,
            "name" : "Import\/Export tuyến"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 149,
            "name" : "Action Quản Lý Tuyến",
            "id" : 918,
            "name" : "Export tuyến"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 150,
            "name" : "Menu Cấu hình Cây Hệ Thống",
            "id" : 721,
            "name" : "Menu Cấu Hình Cây Hệ Thống"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 150,
            "name" : "Menu Cấu hình Cây Hệ Thống",
            "id" : 722,
            "name" : "Menu Giám Sát"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 150,
            "name" : "Menu Cấu hình Cây Hệ Thống",
            "id" : 731,
            "name" : "Menu Lịch Sử Điều Chuyển Cây Hệ Thống"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 664,
            "name" : "Xem Kiểm Kê Kho Tại Điểm Bán"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 723,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 724,
            "name" : "Tạo Mới Cây Hệ Thống"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 725,
            "name" : "Sửa Cây Hệ Thống"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 726,
            "name" : "Xóa Cây Hệ Thống"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 727,
            "name" : "Xuất Dữ Liệu Nhân Viên"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 728,
            "name" : "Xuất Báo Cáo Viếng Thăm"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 729,
            "name" : "Xuất Báo Cáo Điểm Bán Mới"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 730,
            "name" : "Điều Chuyển Cây Hệ Thống"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 872,
            "name" : "Tạo checkin công tác"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 873,
            "name" : "Xem cửa hàng của nhân viên"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 874,
            "name" : "Xem vị trí khách hàng"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 875,
            "name" : "Điều chuyển cửa hàng"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 906,
            "name" : "Cập nhật mã mới"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 152,
            "name" : "Menu Giám Sát",
            "id" : 732,
            "name" : "Menu Giám Sát Hình Ảnh"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 152,
            "name" : "Menu Giám Sát",
            "id" : 733,
            "name" : "Menu Viếng Thăm"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 152,
            "name" : "Menu Giám Sát",
            "id" : 734,
            "name" : "Menu Yêu cầu Cập Nhật Vị Trí"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 152,
            "name" : "Menu Giám Sát",
            "id" : 735,
            "name" : "Menu Lịch Sử Yêu Cầu"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 152,
            "name" : "Menu Giám Sát",
            "id" : 870,
            "name" : "Menu danh sách viếng thăm"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 152,
            "name" : "Menu Giám Sát",
            "id" : 871,
            "name" : "Menu danh sách checkin"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 157,
            "name" : "Action Kênh",
            "id" : 746,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 159,
            "name" : "Action Vùng Miền",
            "id" : 759,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 160,
            "name" : "Action Khu Vực",
            "id" : 763,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 161,
            "name" : "Action Quản Lý Nhân Viên",
            "id" : 767,
            "name" : "Xem Nhân Viên"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 162,
            "name" : "Menu Quản Lý Khách Hàng",
            "id" : 771,
            "name" : "Menu Khách Hàng"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 162,
            "name" : "Menu Quản Lý Khách Hàng",
            "id" : 772,
            "name" : "Menu Nhà Phân Phối"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 162,
            "name" : "Menu Quản Lý Khách Hàng",
            "id" : 868,
            "name" : "Menu nhóm đối tượng"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 162,
            "name" : "Menu Quản Lý Khách Hàng",
            "id" : 869,
            "name" : "Menu lịch sử cập nhật"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 163,
            "name" : "Action Khách Hàng",
            "id" : 775,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 163,
            "name" : "Action Khách Hàng",
            "id" : 776,
            "name" : "Tạo Mới Khách Hàng"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 163,
            "name" : "Action Khách Hàng",
            "id" : 777,
            "name" : "Sửa Khách Hàng"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 163,
            "name" : "Action Khách Hàng",
            "id" : 778,
            "name" : "Xóa Khách Hàng"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 163,
            "name" : "Action Khách Hàng",
            "id" : 779,
            "name" : "Import Khách Hàng"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 164,
            "name" : "Action Nhà Phân Phối",
            "id" : 780,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 165,
            "name" : "Action Nhóm Đối Tượng",
            "id" : 785,
            "name" : "Xem Nhóm Đối Tượng"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 165,
            "name" : "Action Nhóm Đối Tượng",
            "id" : 786,
            "name" : "Tạo Mới Nhóm Đối Tượng"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 165,
            "name" : "Action Nhóm Đối Tượng",
            "id" : 787,
            "name" : "Sửa Nhóm Đối Tượng"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 165,
            "name" : "Action Nhóm Đối Tượng",
            "id" : 788,
            "name" : "Xóa Nhóm Đối Tượng"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 166,
            "name" : "Menu Chương Trình Bán Hàng",
            "id" : 789,
            "name" : "Menu Chương Trình Khuyến Mãi"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 166,
            "name" : "Menu Chương Trình Bán Hàng",
            "id" : 931,
            "name" : "Menu theo dõi ngân sách NPP"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 166,
            "name" : "Menu Chương Trình Bán Hàng",
            "id" : 932,
            "name" : "Menu Claim By Distribution"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 166,
            "name" : "Menu Chương Trình Bán Hàng",
            "id" : 933,
            "name" : "Menu claim by outlet"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 166,
            "name" : "Menu Chương Trình Bán Hàng",
            "id" : 951,
            "name" : "Menu claim by order"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 167,
            "name" : "Action Chương Trình Khuyến Mãi",
            "id" : 790,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 168,
            "name" : "Menu Bảng Giá",
            "id" : 794,
            "name" : "Menu Bảng Giá"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 169,
            "name" : "Action Bảng Giá",
            "id" : 796,
            "name" : "Xem Danh Sách Bảng Giá"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 170,
            "name" : "Menu Quản Lý Sản Phẩm",
            "id" : 806,
            "name" : "Menu Ngành hành\/Nhóm hàng"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 170,
            "name" : "Menu Quản Lý Sản Phẩm",
            "id" : 807,
            "name" : "Menu Sản Phẩm"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 170,
            "name" : "Menu Quản Lý Sản Phẩm",
            "id" : 809,
            "name" : "Menu phân ngành"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 170,
            "name" : "Menu Quản Lý Sản Phẩm",
            "id" : 810,
            "name" : "Menu Thương Hiệu"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 170,
            "name" : "Menu Quản Lý Sản Phẩm",
            "id" : 811,
            "name" : "Menu nhà cung cấp"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 170,
            "name" : "Menu Quản Lý Sản Phẩm",
            "id" : 812,
            "name" : "Menu Đơn Vị Tính"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 170,
            "name" : "Menu Quản Lý Sản Phẩm",
            "id" : 813,
            "name" : "Menu đơn vị quy đổi"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 170,
            "name" : "Menu Quản Lý Sản Phẩm",
            "id" : 814,
            "name" : "Menu Quản lý thuế"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 171,
            "name" : "Action Ngành hành\/Nhóm hàng",
            "id" : 815,
            "name" : "Xem Ngành hành\/Nhóm hàng"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 172,
            "name" : "Action Sản Phẩm",
            "id" : 821,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 173,
            "name" : "Action phân ngành",
            "id" : 826,
            "name" : "Xem Phân Ngành"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 174,
            "name" : "Action Thương Hiệu",
            "id" : 830,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 175,
            "name" : "Action Hãng Sản Xuất",
            "id" : 834,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 176,
            "name" : "Action Đơn Vị Tính",
            "id" : 838,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 177,
            "name" : "Action đơn vị quy đổi",
            "id" : 842,
            "name" : "Xem Đơn Vị Quy Đổi"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 178,
            "name" : "Action Thuế",
            "id" : 846,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 850,
            "name" : "Menu Tất Cả Đơn Hàng"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 851,
            "name" : "Menu Đơn Mới"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 852,
            "name" : "Menu Nhận Đơn"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 853,
            "name" : "Menu Kế Toán HH"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 854,
            "name" : "Menu Kế toán công nợ"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 855,
            "name" : "Menu Chờ Duyệt"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 856,
            "name" : "Menu Kho Hàng"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 857,
            "name" : "Menu Thanh Toán"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 858,
            "name" : "Menu Hủy Đơn"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 893,
            "name" : "Menu đơn hàng PO"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 911,
            "name" : "Menu Thực hiện & kết quả giao hàng"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 921,
            "name" : "Menu Chưa Thanh Toán"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 859,
            "name" : "Tạo Mới Đơn Hàng"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 860,
            "name" : "Import đơn hàng chuỗi"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 861,
            "name" : "Xem Chi Tiết Đơn"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 862,
            "name" : "Sửa Đơn"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 863,
            "name" : "Duyệt Đơn"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 864,
            "name" : "Hủy Đơn"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 865,
            "name" : "Xem Báo Cáo Đơn hàng"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 866,
            "name" : "Xuất Dữ Liệu"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 883,
            "name" : "Đồng bộ lại đơn hàng"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 910,
            "name" : "Tạo lệnh giao hàng"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 922,
            "name" : "Cập nhật trạng thái thanh toán"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 181,
            "name" : "Menu quản lý nhân viên",
            "id" : 867,
            "name" : "Menu danh sách nhân viên"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 184,
            "name" : "Action nhóm khách hàng",
            "id" : 888,
            "name" : "Tạo nhóm khách hàng"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 184,
            "name" : "Action nhóm khách hàng",
            "id" : 889,
            "name" : "Sửa nhóm khách hàng"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 184,
            "name" : "Action nhóm khách hàng",
            "id" : 890,
            "name" : "Xem nhóm khách hàng"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 184,
            "name" : "Action nhóm khách hàng",
            "id" : 891,
            "name" : "Xóa nhóm khách hàng"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 184,
            "name" : "Action nhóm khách hàng",
            "id" : 892,
            "name" : "Import nhóm khách hàng"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 188,
            "name" : "Claim by Outlet",
            "id" : 934,
            "name" : "Xuất báo cáo"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 189,
            "name" : "Claim By Distributor",
            "id" : 935,
            "name" : "Xuất báo cáo"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 193,
            "name" : "Action Claim by order",
            "id" : 954,
            "name" : "Xuất báo cáo"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 194,
            "name" : "Menu đơn hàng mua",
            "id" : 956,
            "name" : "Menu tất cả đơn hàng"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 194,
            "name" : "Menu đơn hàng mua",
            "id" : 957,
            "name" : "Menu đơn mới"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 194,
            "name" : "Menu đơn hàng mua",
            "id" : 958,
            "name" : "Menu nhận đơn"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 194,
            "name" : "Menu đơn hàng mua",
            "id" : 959,
            "name" : "Menu chờ giao"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 194,
            "name" : "Menu đơn hàng mua",
            "id" : 960,
            "name" : "Menu Giao hàng"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 194,
            "name" : "Menu đơn hàng mua",
            "id" : 961,
            "name" : "Menu Hoàn tất"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 194,
            "name" : "Menu đơn hàng mua",
            "id" : 962,
            "name" : "Menu Đã nhập hàng"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 194,
            "name" : "Menu đơn hàng mua",
            "id" : 963,
            "name" : "Menu hủy"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 194,
            "name" : "Menu đơn hàng mua",
            "id" : 964,
            "name" : "Tạo đơn hàng"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 194,
            "name" : "Menu đơn hàng mua",
            "id" : 980,
            "name" : "Menu Trả hàng"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 197,
            "name" : "Menu chương trình Loyalty",
            "id" : 965,
            "name" : "Menu Danh Sách Chương Trình Loyalty"
        },
        {
            "id" : 15,
            "name" : "Nhà Phân Phối",
            "id" : 197,
            "name" : "Menu chương trình Loyalty",
            "id" : 967,
            "name" : "Menu theo dõi Loyalty"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 613,
            "name" : "Menu Quản Lý Báo Cáo"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 614,
            "name" : "Menu Quản Trị Kho"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 615,
            "name" : "Menu Quản Lý Tài Sản"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 616,
            "name" : "Menu Quản Lý QR"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 620,
            "name" : "Menu Quản Lý Tuyến"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 621,
            "name" : "Menu Quản Lý Cây Hệ Thống"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 624,
            "name" : "Menu Quản Lý Khách Hàng"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 628,
            "name" : "Menu Đơn Hàng"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 977,
            "name" : "Menu chương trình Loyalty"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 641,
            "name" : "Báo cáo Đơn Hàng"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 643,
            "name" : "Báo cáo Thống Kê Bán Hàng Theo Kênh"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 919,
            "name" : "Báo cáo Tồn kho"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 920,
            "name" : "Báo cáo Hóa đơn"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 982,
            "name" : "Báo cáo Xuất nhập tồn"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 130,
            "name" : "Menu Quản Trị Kho",
            "id" : 644,
            "name" : "Menu Danh Sách Kho"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 130,
            "name" : "Menu Quản Trị Kho",
            "id" : 648,
            "name" : "Menu Tồn Kho"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 134,
            "name" : "Action Tồn Kho",
            "id" : 913,
            "name" : "Xuất dữ liệu tồn kho"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 134,
            "name" : "Action Tồn Kho",
            "id" : 983,
            "name" : "Xuất báo cáo xuất nhập tồn"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 137,
            "name" : "Menu Quản Lý Tài Sản",
            "id" : 669,
            "name" : "Menu Danh Sách Kho Tài Sản"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 137,
            "name" : "Menu Quản Lý Tài Sản",
            "id" : 671,
            "name" : "Menu Lịch Sử Kiểm Kê Tài Sản"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 139,
            "name" : "Action Kho Tài Sản",
            "id" : 677,
            "name" : "Xem Tài Sản"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 145,
            "name" : "Action Lịch Sử Kiểm Kê Tài Sản",
            "id" : 702,
            "name" : "Xuất Báo Cáo Kiểm Kê"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 146,
            "name" : "Action Quản Lý QR",
            "id" : 703,
            "name" : "Xem QR"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 146,
            "name" : "Action Quản Lý QR",
            "id" : 894,
            "name" : "Xuất báo cáo QR"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 147,
            "name" : "Action Quản Lý Thông Báo",
            "id" : 708,
            "name" : "Xem Thông Báo"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 148,
            "name" : "Action Quản Lý Kế Hoạch",
            "id" : 714,
            "name" : "Tạo Mới Kế Hoạch"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 148,
            "name" : "Action Quản Lý Kế Hoạch",
            "id" : 715,
            "name" : "Sửa Kế Hoạch"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 149,
            "name" : "Action Quản Lý Tuyến",
            "id" : 717,
            "name" : "Xem Tuyến"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 149,
            "name" : "Action Quản Lý Tuyến",
            "id" : 719,
            "name" : "Sửa Tuyến"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 149,
            "name" : "Action Quản Lý Tuyến",
            "id" : 905,
            "name" : "Import Tuyến"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 149,
            "name" : "Action Quản Lý Tuyến",
            "id" : 907,
            "name" : "Import\/Export tuyến"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 149,
            "name" : "Action Quản Lý Tuyến",
            "id" : 918,
            "name" : "Export tuyến"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 150,
            "name" : "Menu Cấu hình Cây Hệ Thống",
            "id" : 722,
            "name" : "Menu Giám Sát"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 664,
            "name" : "Xem Kiểm Kê Kho Tại Điểm Bán"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 723,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 727,
            "name" : "Xuất Dữ Liệu Nhân Viên"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 728,
            "name" : "Xuất Báo Cáo Viếng Thăm"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 729,
            "name" : "Xuất Báo Cáo Điểm Bán Mới"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 873,
            "name" : "Xem cửa hàng của nhân viên"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 874,
            "name" : "Xem vị trí khách hàng"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 152,
            "name" : "Menu Giám Sát",
            "id" : 732,
            "name" : "Menu Giám Sát Hình Ảnh"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 152,
            "name" : "Menu Giám Sát",
            "id" : 733,
            "name" : "Menu Viếng Thăm"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 152,
            "name" : "Menu Giám Sát",
            "id" : 734,
            "name" : "Menu Yêu cầu Cập Nhật Vị Trí"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 152,
            "name" : "Menu Giám Sát",
            "id" : 870,
            "name" : "Menu danh sách viếng thăm"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 152,
            "name" : "Menu Giám Sát",
            "id" : 871,
            "name" : "Menu danh sách checkin"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 154,
            "name" : "Action Viếng Thăm - Danh Sách Checkin",
            "id" : 737,
            "name" : "Xem chi tiết kế hoạch"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 154,
            "name" : "Action Viếng Thăm - Danh Sách Checkin",
            "id" : 738,
            "name" : "Checkin\/out"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 155,
            "name" : "Action Yêu Cầu Cập Nhật Vị Trí",
            "id" : 739,
            "name" : "Duyệt Vị Trí"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 155,
            "name" : "Action Yêu Cầu Cập Nhật Vị Trí",
            "id" : 741,
            "name" : "Xem Hình"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 162,
            "name" : "Menu Quản Lý Khách Hàng",
            "id" : 771,
            "name" : "Menu Khách Hàng"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 163,
            "name" : "Action Khách Hàng",
            "id" : 775,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 850,
            "name" : "Menu Tất Cả Đơn Hàng"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 851,
            "name" : "Menu Đơn Mới"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 852,
            "name" : "Menu Nhận Đơn"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 856,
            "name" : "Menu Kho Hàng"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 857,
            "name" : "Menu Thanh Toán"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 858,
            "name" : "Menu Hủy Đơn"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 866,
            "name" : "Xuất Dữ Liệu"
        },
        {
            "id" : 22,
            "name" : "Nhân viên kinh doanh",
            "id" : 197,
            "name" : "Menu chương trình Loyalty",
            "id" : 967,
            "name" : "Menu theo dõi Loyalty"
        },
        {
            "id" : 24,
            "name" : "Nhân Viên Quản Lý Tài Sản\/AS",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 615,
            "name" : "Menu Quản Lý Tài Sản"
        },
        {
            "id" : 24,
            "name" : "Nhân Viên Quản Lý Tài Sản\/AS",
            "id" : 137,
            "name" : "Menu Quản Lý Tài Sản",
            "id" : 669,
            "name" : "Menu Danh Sách Kho Tài Sản"
        },
        {
            "id" : 24,
            "name" : "Nhân Viên Quản Lý Tài Sản\/AS",
            "id" : 137,
            "name" : "Menu Quản Lý Tài Sản",
            "id" : 670,
            "name" : "Menu Cấu hình Tài Sản"
        },
        {
            "id" : 24,
            "name" : "Nhân Viên Quản Lý Tài Sản\/AS",
            "id" : 137,
            "name" : "Menu Quản Lý Tài Sản",
            "id" : 671,
            "name" : "Menu Lịch Sử Kiểm Kê Tài Sản"
        },
        {
            "id" : 24,
            "name" : "Nhân Viên Quản Lý Tài Sản\/AS",
            "id" : 138,
            "name" : "Menu Cấu Hình Tài Sản",
            "id" : 672,
            "name" : "Menu Loại"
        },
        {
            "id" : 24,
            "name" : "Nhân Viên Quản Lý Tài Sản\/AS",
            "id" : 138,
            "name" : "Menu Cấu Hình Tài Sản",
            "id" : 673,
            "name" : "Menu Kích Thước Tài Sản"
        },
        {
            "id" : 24,
            "name" : "Nhân Viên Quản Lý Tài Sản\/AS",
            "id" : 138,
            "name" : "Menu Cấu Hình Tài Sản",
            "id" : 674,
            "name" : "Menu Thương Hiệu Tài Sản"
        },
        {
            "id" : 24,
            "name" : "Nhân Viên Quản Lý Tài Sản\/AS",
            "id" : 138,
            "name" : "Menu Cấu Hình Tài Sản",
            "id" : 675,
            "name" : "Menu Nhà Cung Cấp Tài Sản"
        },
        {
            "id" : 24,
            "name" : "Nhân Viên Quản Lý Tài Sản\/AS",
            "id" : 138,
            "name" : "Menu Cấu Hình Tài Sản",
            "id" : 676,
            "name" : "Menu Model Tài Sản"
        },
        {
            "id" : 24,
            "name" : "Nhân Viên Quản Lý Tài Sản\/AS",
            "id" : 139,
            "name" : "Action Kho Tài Sản",
            "id" : 677,
            "name" : "Xem Tài Sản"
        },
        {
            "id" : 24,
            "name" : "Nhân Viên Quản Lý Tài Sản\/AS",
            "id" : 139,
            "name" : "Action Kho Tài Sản",
            "id" : 678,
            "name" : "Sửa Kho Tài Sản"
        },
        {
            "id" : 24,
            "name" : "Nhân Viên Quản Lý Tài Sản\/AS",
            "id" : 139,
            "name" : "Action Kho Tài Sản",
            "id" : 679,
            "name" : "Lịch Sử Kho Tài Sản"
        },
        {
            "id" : 24,
            "name" : "Nhân Viên Quản Lý Tài Sản\/AS",
            "id" : 139,
            "name" : "Action Kho Tài Sản",
            "id" : 680,
            "name" : "Điều Chuyển Kho Tài Sản"
        },
        {
            "id" : 24,
            "name" : "Nhân Viên Quản Lý Tài Sản\/AS",
            "id" : 139,
            "name" : "Action Kho Tài Sản",
            "id" : 681,
            "name" : "Thu Hồi Tài Sản"
        },
        {
            "id" : 24,
            "name" : "Nhân Viên Quản Lý Tài Sản\/AS",
            "id" : 139,
            "name" : "Action Kho Tài Sản",
            "id" : 895,
            "name" : "Import Tài Sản"
        },
        {
            "id" : 24,
            "name" : "Nhân Viên Quản Lý Tài Sản\/AS",
            "id" : 140,
            "name" : "Action Loại Tài Sản",
            "id" : 682,
            "name" : "Xem Loại Tài Sản"
        },
        {
            "id" : 24,
            "name" : "Nhân Viên Quản Lý Tài Sản\/AS",
            "id" : 140,
            "name" : "Action Loại Tài Sản",
            "id" : 683,
            "name" : "Tạo Loại Tài Sản"
        },
        {
            "id" : 24,
            "name" : "Nhân Viên Quản Lý Tài Sản\/AS",
            "id" : 140,
            "name" : "Action Loại Tài Sản",
            "id" : 684,
            "name" : "Sửa Loại Tài Sản"
        },
        {
            "id" : 24,
            "name" : "Nhân Viên Quản Lý Tài Sản\/AS",
            "id" : 140,
            "name" : "Action Loại Tài Sản",
            "id" : 685,
            "name" : "Xóa Loại Tài Sản"
        },
        {
            "id" : 24,
            "name" : "Nhân Viên Quản Lý Tài Sản\/AS",
            "id" : 141,
            "name" : "Action Kích Thước Tài Sản",
            "id" : 686,
            "name" : "Xem Kích Thước Tài Sản"
        },
        {
            "id" : 24,
            "name" : "Nhân Viên Quản Lý Tài Sản\/AS",
            "id" : 141,
            "name" : "Action Kích Thước Tài Sản",
            "id" : 687,
            "name" : "Tạo Kích Thước Tài Sản"
        },
        {
            "id" : 24,
            "name" : "Nhân Viên Quản Lý Tài Sản\/AS",
            "id" : 141,
            "name" : "Action Kích Thước Tài Sản",
            "id" : 688,
            "name" : "Sửa Kích Thước Tài Sản"
        },
        {
            "id" : 24,
            "name" : "Nhân Viên Quản Lý Tài Sản\/AS",
            "id" : 141,
            "name" : "Action Kích Thước Tài Sản",
            "id" : 689,
            "name" : "Xóa Kích Thước Tài Sản"
        },
        {
            "id" : 24,
            "name" : "Nhân Viên Quản Lý Tài Sản\/AS",
            "id" : 142,
            "name" : "Action Thương Hiệu Tài Sản",
            "id" : 690,
            "name" : "Xem Thương Hiệu Tài Sản"
        },
        {
            "id" : 24,
            "name" : "Nhân Viên Quản Lý Tài Sản\/AS",
            "id" : 142,
            "name" : "Action Thương Hiệu Tài Sản",
            "id" : 691,
            "name" : "Tạo Thương Hiệu Tài Sản"
        },
        {
            "id" : 24,
            "name" : "Nhân Viên Quản Lý Tài Sản\/AS",
            "id" : 142,
            "name" : "Action Thương Hiệu Tài Sản",
            "id" : 692,
            "name" : "Sửa Thương Hiệu Tài Sản"
        },
        {
            "id" : 24,
            "name" : "Nhân Viên Quản Lý Tài Sản\/AS",
            "id" : 142,
            "name" : "Action Thương Hiệu Tài Sản",
            "id" : 693,
            "name" : "Xóa Thương Hiệu Tài Sản"
        },
        {
            "id" : 24,
            "name" : "Nhân Viên Quản Lý Tài Sản\/AS",
            "id" : 143,
            "name" : "Action Nhà Cung Cấp Tài Sản",
            "id" : 694,
            "name" : "Xem Nhà Cung Cấp Tài Sản"
        },
        {
            "id" : 24,
            "name" : "Nhân Viên Quản Lý Tài Sản\/AS",
            "id" : 143,
            "name" : "Action Nhà Cung Cấp Tài Sản",
            "id" : 695,
            "name" : "Tạo Nhà Cung Cấp Tài Sản"
        },
        {
            "id" : 24,
            "name" : "Nhân Viên Quản Lý Tài Sản\/AS",
            "id" : 143,
            "name" : "Action Nhà Cung Cấp Tài Sản",
            "id" : 696,
            "name" : "Sửa Nhà Cung Cấp Tài Sản"
        },
        {
            "id" : 24,
            "name" : "Nhân Viên Quản Lý Tài Sản\/AS",
            "id" : 143,
            "name" : "Action Nhà Cung Cấp Tài Sản",
            "id" : 697,
            "name" : "Xóa Nhà Cung Cấp Tài Sản"
        },
        {
            "id" : 24,
            "name" : "Nhân Viên Quản Lý Tài Sản\/AS",
            "id" : 144,
            "name" : "Action Model Tài Sản",
            "id" : 698,
            "name" : "Xem Model Tài Sản"
        },
        {
            "id" : 24,
            "name" : "Nhân Viên Quản Lý Tài Sản\/AS",
            "id" : 144,
            "name" : "Action Model Tài Sản",
            "id" : 699,
            "name" : "Tạo Model Tài Sản"
        },
        {
            "id" : 24,
            "name" : "Nhân Viên Quản Lý Tài Sản\/AS",
            "id" : 144,
            "name" : "Action Model Tài Sản",
            "id" : 700,
            "name" : "Sửa Model Tài Sản"
        },
        {
            "id" : 24,
            "name" : "Nhân Viên Quản Lý Tài Sản\/AS",
            "id" : 144,
            "name" : "Action Model Tài Sản",
            "id" : 701,
            "name" : "Xóa Model Tài Sản"
        },
        {
            "id" : 24,
            "name" : "Nhân Viên Quản Lý Tài Sản\/AS",
            "id" : 161,
            "name" : "Action Quản Lý Nhân Viên",
            "id" : 767,
            "name" : "Xem Nhân Viên"
        },
        {
            "id" : 26,
            "name" : "Quản lý vùng\/kênh",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 621,
            "name" : "Menu Quản Lý Cây Hệ Thống"
        },
        {
            "id" : 26,
            "name" : "Quản lý vùng\/kênh",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 623,
            "name" : "Menu Quản Lý Nhân Viên"
        },
        {
            "id" : 26,
            "name" : "Quản lý vùng\/kênh",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 624,
            "name" : "Menu Quản Lý Khách Hàng"
        },
        {
            "id" : 26,
            "name" : "Quản lý vùng\/kênh",
            "id" : 149,
            "name" : "Action Quản Lý Tuyến",
            "id" : 717,
            "name" : "Xem Tuyến"
        },
        {
            "id" : 26,
            "name" : "Quản lý vùng\/kênh",
            "id" : 149,
            "name" : "Action Quản Lý Tuyến",
            "id" : 718,
            "name" : "Tạo Mới Tuyến"
        },
        {
            "id" : 26,
            "name" : "Quản lý vùng\/kênh",
            "id" : 149,
            "name" : "Action Quản Lý Tuyến",
            "id" : 719,
            "name" : "Sửa Tuyến"
        },
        {
            "id" : 26,
            "name" : "Quản lý vùng\/kênh",
            "id" : 149,
            "name" : "Action Quản Lý Tuyến",
            "id" : 720,
            "name" : "Xóa Tuyến"
        },
        {
            "id" : 26,
            "name" : "Quản lý vùng\/kênh",
            "id" : 149,
            "name" : "Action Quản Lý Tuyến",
            "id" : 905,
            "name" : "Import Tuyến"
        },
        {
            "id" : 26,
            "name" : "Quản lý vùng\/kênh",
            "id" : 149,
            "name" : "Action Quản Lý Tuyến",
            "id" : 907,
            "name" : "Import\/Export tuyến"
        },
        {
            "id" : 26,
            "name" : "Quản lý vùng\/kênh",
            "id" : 149,
            "name" : "Action Quản Lý Tuyến",
            "id" : 918,
            "name" : "Export tuyến"
        },
        {
            "id" : 26,
            "name" : "Quản lý vùng\/kênh",
            "id" : 150,
            "name" : "Menu Cấu hình Cây Hệ Thống",
            "id" : 722,
            "name" : "Menu Giám Sát"
        },
        {
            "id" : 26,
            "name" : "Quản lý vùng\/kênh",
            "id" : 152,
            "name" : "Menu Giám Sát",
            "id" : 732,
            "name" : "Menu Giám Sát Hình Ảnh"
        },
        {
            "id" : 26,
            "name" : "Quản lý vùng\/kênh",
            "id" : 152,
            "name" : "Menu Giám Sát",
            "id" : 733,
            "name" : "Menu Viếng Thăm"
        },
        {
            "id" : 26,
            "name" : "Quản lý vùng\/kênh",
            "id" : 152,
            "name" : "Menu Giám Sát",
            "id" : 734,
            "name" : "Menu Yêu cầu Cập Nhật Vị Trí"
        },
        {
            "id" : 26,
            "name" : "Quản lý vùng\/kênh",
            "id" : 152,
            "name" : "Menu Giám Sát",
            "id" : 735,
            "name" : "Menu Lịch Sử Yêu Cầu"
        },
        {
            "id" : 26,
            "name" : "Quản lý vùng\/kênh",
            "id" : 152,
            "name" : "Menu Giám Sát",
            "id" : 870,
            "name" : "Menu danh sách viếng thăm"
        },
        {
            "id" : 26,
            "name" : "Quản lý vùng\/kênh",
            "id" : 152,
            "name" : "Menu Giám Sát",
            "id" : 871,
            "name" : "Menu danh sách checkin"
        },
        {
            "id" : 26,
            "name" : "Quản lý vùng\/kênh",
            "id" : 181,
            "name" : "Menu quản lý nhân viên",
            "id" : 867,
            "name" : "Menu danh sách nhân viên"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 613,
            "name" : "Menu Quản Lý Báo Cáo"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 622,
            "name" : "Menu Quản Lý Phân Phối"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 623,
            "name" : "Menu Quản Lý Nhân Viên"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 624,
            "name" : "Menu Quản Lý Khách Hàng"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 625,
            "name" : "Menu Chương Trình Bán Hàng"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 626,
            "name" : "Menu Bảng Giá"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 628,
            "name" : "Menu Đơn Hàng"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 808,
            "name" : "Menu Kiểm Tra MasterData"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 947,
            "name" : "Menu quản lý email"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 955,
            "name" : "Menu đơn hàng mua"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 981,
            "name" : "Menu đơn hàng ERP"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 641,
            "name" : "Báo cáo Đơn Hàng"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 642,
            "name" : "Báo cáo Chi Tiết Đơn Hàng"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 920,
            "name" : "Báo cáo Hóa đơn"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 156,
            "name" : "Menu Quản Lý Phân Phối",
            "id" : 743,
            "name" : "Menu Quản lý chuỗi"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 158,
            "name" : "Action Chuỗi",
            "id" : 750,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 158,
            "name" : "Action Chuỗi",
            "id" : 751,
            "name" : "Tạo Mới Chuỗi"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 158,
            "name" : "Action Chuỗi",
            "id" : 752,
            "name" : "Sửa Chuỗi"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 158,
            "name" : "Action Chuỗi",
            "id" : 753,
            "name" : "Xóa Chuỗi"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 158,
            "name" : "Action Chuỗi",
            "id" : 754,
            "name" : "Xem Mapping Sản Phẩm"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 158,
            "name" : "Action Chuỗi",
            "id" : 755,
            "name" : "Xem Mapping Khách Hàng"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 158,
            "name" : "Action Chuỗi",
            "id" : 756,
            "name" : "Tạo Mapping"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 158,
            "name" : "Action Chuỗi",
            "id" : 757,
            "name" : "Sửa Mapping"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 158,
            "name" : "Action Chuỗi",
            "id" : 758,
            "name" : "Xóa Mapping"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 158,
            "name" : "Action Chuỗi",
            "id" : 882,
            "name" : "Import Mapping"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 161,
            "name" : "Action Quản Lý Nhân Viên",
            "id" : 767,
            "name" : "Xem Nhân Viên"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 162,
            "name" : "Menu Quản Lý Khách Hàng",
            "id" : 771,
            "name" : "Menu Khách Hàng"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 162,
            "name" : "Menu Quản Lý Khách Hàng",
            "id" : 772,
            "name" : "Menu Nhà Phân Phối"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 162,
            "name" : "Menu Quản Lý Khách Hàng",
            "id" : 868,
            "name" : "Menu nhóm đối tượng"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 162,
            "name" : "Menu Quản Lý Khách Hàng",
            "id" : 869,
            "name" : "Menu lịch sử cập nhật"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 163,
            "name" : "Action Khách Hàng",
            "id" : 777,
            "name" : "Sửa Khách Hàng"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 165,
            "name" : "Action Nhóm Đối Tượng",
            "id" : 785,
            "name" : "Xem Nhóm Đối Tượng"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 166,
            "name" : "Menu Chương Trình Bán Hàng",
            "id" : 789,
            "name" : "Menu Chương Trình Khuyến Mãi"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 167,
            "name" : "Action Chương Trình Khuyến Mãi",
            "id" : 790,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 168,
            "name" : "Menu Bảng Giá",
            "id" : 794,
            "name" : "Menu Bảng Giá"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 169,
            "name" : "Action Bảng Giá",
            "id" : 796,
            "name" : "Xem Danh Sách Bảng Giá"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 169,
            "name" : "Action Bảng Giá",
            "id" : 801,
            "name" : "Xem Chi Tiết Bảng Giá"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 169,
            "name" : "Action Bảng Giá",
            "id" : 803,
            "name" : "Sửa Sản Phẩm Trong Bảng Giá"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 172,
            "name" : "Action Sản Phẩm",
            "id" : 821,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 850,
            "name" : "Menu Tất Cả Đơn Hàng"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 851,
            "name" : "Menu Đơn Mới"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 852,
            "name" : "Menu Nhận Đơn"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 853,
            "name" : "Menu Kế Toán HH"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 854,
            "name" : "Menu Kế toán công nợ"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 855,
            "name" : "Menu Chờ Duyệt"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 856,
            "name" : "Menu Kho Hàng"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 857,
            "name" : "Menu Thanh Toán"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 858,
            "name" : "Menu Hủy Đơn"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 893,
            "name" : "Menu đơn hàng PO"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 911,
            "name" : "Menu Thực hiện & kết quả giao hàng"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 859,
            "name" : "Tạo Mới Đơn Hàng"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 860,
            "name" : "Import đơn hàng chuỗi"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 861,
            "name" : "Xem Chi Tiết Đơn"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 862,
            "name" : "Sửa Đơn"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 863,
            "name" : "Duyệt Đơn"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 864,
            "name" : "Hủy Đơn"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 865,
            "name" : "Xem Báo Cáo Đơn hàng"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 866,
            "name" : "Xuất Dữ Liệu"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 883,
            "name" : "Đồng bộ lại đơn hàng"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 910,
            "name" : "Tạo lệnh giao hàng"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 181,
            "name" : "Menu quản lý nhân viên",
            "id" : 867,
            "name" : "Menu danh sách nhân viên"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 184,
            "name" : "Action nhóm khách hàng",
            "id" : 889,
            "name" : "Sửa nhóm khách hàng"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 192,
            "name" : "Menu quản lý email",
            "id" : 950,
            "name" : "Email PO"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 194,
            "name" : "Menu đơn hàng mua",
            "id" : 956,
            "name" : "Menu tất cả đơn hàng"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 194,
            "name" : "Menu đơn hàng mua",
            "id" : 957,
            "name" : "Menu đơn mới"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 194,
            "name" : "Menu đơn hàng mua",
            "id" : 958,
            "name" : "Menu nhận đơn"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 194,
            "name" : "Menu đơn hàng mua",
            "id" : 959,
            "name" : "Menu chờ giao"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 194,
            "name" : "Menu đơn hàng mua",
            "id" : 960,
            "name" : "Menu Giao hàng"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 194,
            "name" : "Menu đơn hàng mua",
            "id" : 961,
            "name" : "Menu Hoàn tất"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 194,
            "name" : "Menu đơn hàng mua",
            "id" : 962,
            "name" : "Menu Đã nhập hàng"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 194,
            "name" : "Menu đơn hàng mua",
            "id" : 963,
            "name" : "Menu hủy"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 194,
            "name" : "Menu đơn hàng mua",
            "id" : 964,
            "name" : "Tạo đơn hàng"
        },
        {
            "id" : 29,
            "name" : "Admin duyệt đơn",
            "id" : 194,
            "name" : "Menu đơn hàng mua",
            "id" : 980,
            "name" : "Menu Trả hàng"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 619,
            "name" : "Menu Quản Lý Kế Hoạch"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 620,
            "name" : "Menu Quản Lý Tuyến"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 621,
            "name" : "Menu Quản Lý Cây Hệ Thống"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 623,
            "name" : "Menu Quản Lý Nhân Viên"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 624,
            "name" : "Menu Quản Lý Khách Hàng"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 625,
            "name" : "Menu Chương Trình Bán Hàng"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 626,
            "name" : "Menu Bảng Giá"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 627,
            "name" : "Menu Sản Phẩm"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 628,
            "name" : "Menu Đơn Hàng"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 629,
            "name" : "Dashboard"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 148,
            "name" : "Action Quản Lý Kế Hoạch",
            "id" : 713,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 149,
            "name" : "Action Quản Lý Tuyến",
            "id" : 717,
            "name" : "Xem Tuyến"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 149,
            "name" : "Action Quản Lý Tuyến",
            "id" : 718,
            "name" : "Tạo Mới Tuyến"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 149,
            "name" : "Action Quản Lý Tuyến",
            "id" : 719,
            "name" : "Sửa Tuyến"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 149,
            "name" : "Action Quản Lý Tuyến",
            "id" : 720,
            "name" : "Xóa Tuyến"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 149,
            "name" : "Action Quản Lý Tuyến",
            "id" : 905,
            "name" : "Import Tuyến"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 149,
            "name" : "Action Quản Lý Tuyến",
            "id" : 907,
            "name" : "Import\/Export tuyến"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 149,
            "name" : "Action Quản Lý Tuyến",
            "id" : 918,
            "name" : "Export tuyến"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 150,
            "name" : "Menu Cấu hình Cây Hệ Thống",
            "id" : 721,
            "name" : "Menu Cấu Hình Cây Hệ Thống"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 150,
            "name" : "Menu Cấu hình Cây Hệ Thống",
            "id" : 722,
            "name" : "Menu Giám Sát"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 150,
            "name" : "Menu Cấu hình Cây Hệ Thống",
            "id" : 731,
            "name" : "Menu Lịch Sử Điều Chuyển Cây Hệ Thống"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 723,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 727,
            "name" : "Xuất Dữ Liệu Nhân Viên"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 728,
            "name" : "Xuất Báo Cáo Viếng Thăm"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 729,
            "name" : "Xuất Báo Cáo Điểm Bán Mới"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 872,
            "name" : "Tạo checkin công tác"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 873,
            "name" : "Xem cửa hàng của nhân viên"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 874,
            "name" : "Xem vị trí khách hàng"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 152,
            "name" : "Menu Giám Sát",
            "id" : 732,
            "name" : "Menu Giám Sát Hình Ảnh"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 152,
            "name" : "Menu Giám Sát",
            "id" : 733,
            "name" : "Menu Viếng Thăm"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 152,
            "name" : "Menu Giám Sát",
            "id" : 734,
            "name" : "Menu Yêu cầu Cập Nhật Vị Trí"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 152,
            "name" : "Menu Giám Sát",
            "id" : 735,
            "name" : "Menu Lịch Sử Yêu Cầu"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 152,
            "name" : "Menu Giám Sát",
            "id" : 870,
            "name" : "Menu danh sách viếng thăm"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 152,
            "name" : "Menu Giám Sát",
            "id" : 871,
            "name" : "Menu danh sách checkin"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 161,
            "name" : "Action Quản Lý Nhân Viên",
            "id" : 767,
            "name" : "Xem Nhân Viên"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 162,
            "name" : "Menu Quản Lý Khách Hàng",
            "id" : 771,
            "name" : "Menu Khách Hàng"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 163,
            "name" : "Action Khách Hàng",
            "id" : 775,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 166,
            "name" : "Menu Chương Trình Bán Hàng",
            "id" : 789,
            "name" : "Menu Chương Trình Khuyến Mãi"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 167,
            "name" : "Action Chương Trình Khuyến Mãi",
            "id" : 790,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 170,
            "name" : "Menu Quản Lý Sản Phẩm",
            "id" : 807,
            "name" : "Menu Sản Phẩm"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 172,
            "name" : "Action Sản Phẩm",
            "id" : 821,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 850,
            "name" : "Menu Tất Cả Đơn Hàng"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 851,
            "name" : "Menu Đơn Mới"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 852,
            "name" : "Menu Nhận Đơn"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 853,
            "name" : "Menu Kế Toán HH"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 854,
            "name" : "Menu Kế toán công nợ"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 855,
            "name" : "Menu Chờ Duyệt"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 856,
            "name" : "Menu Kho Hàng"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 857,
            "name" : "Menu Thanh Toán"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 858,
            "name" : "Menu Hủy Đơn"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 861,
            "name" : "Xem Chi Tiết Đơn"
        },
        {
            "id" : 30,
            "name" : "Giám đốc vùng",
            "id" : 181,
            "name" : "Menu quản lý nhân viên",
            "id" : 867,
            "name" : "Menu danh sách nhân viên"
        },
        {
            "id" : 31,
            "name" : "Quản lý kho",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 628,
            "name" : "Menu Đơn Hàng"
        },
        {
            "id" : 31,
            "name" : "Quản lý kho",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 629,
            "name" : "Dashboard"
        },
        {
            "id" : 31,
            "name" : "Quản lý kho",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 893,
            "name" : "Menu đơn hàng PO"
        },
        {
            "id" : 32,
            "name" : "Nhà Cung Cấp",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 613,
            "name" : "Menu Quản Lý Báo Cáo"
        },
        {
            "id" : 32,
            "name" : "Nhà Cung Cấp",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 614,
            "name" : "Menu Quản Trị Kho"
        },
        {
            "id" : 32,
            "name" : "Nhà Cung Cấp",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 623,
            "name" : "Menu Quản Lý Nhân Viên"
        },
        {
            "id" : 32,
            "name" : "Nhà Cung Cấp",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 624,
            "name" : "Menu Quản Lý Khách Hàng"
        },
        {
            "id" : 32,
            "name" : "Nhà Cung Cấp",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 625,
            "name" : "Menu Chương Trình Bán Hàng"
        },
        {
            "id" : 32,
            "name" : "Nhà Cung Cấp",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 627,
            "name" : "Menu Sản Phẩm"
        },
        {
            "id" : 32,
            "name" : "Nhà Cung Cấp",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 629,
            "name" : "Dashboard"
        },
        {
            "id" : 32,
            "name" : "Nhà Cung Cấp",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 977,
            "name" : "Menu chương trình Loyalty"
        },
        {
            "id" : 32,
            "name" : "Nhà Cung Cấp",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 641,
            "name" : "Báo cáo Đơn Hàng"
        },
        {
            "id" : 32,
            "name" : "Nhà Cung Cấp",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 642,
            "name" : "Báo cáo Chi Tiết Đơn Hàng"
        },
        {
            "id" : 32,
            "name" : "Nhà Cung Cấp",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 916,
            "name" : "Báo cáo Sản phẩm"
        },
        {
            "id" : 32,
            "name" : "Nhà Cung Cấp",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 917,
            "name" : "Báo cáo Khách hàng"
        },
        {
            "id" : 32,
            "name" : "Nhà Cung Cấp",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 919,
            "name" : "Báo cáo Tồn kho"
        },
        {
            "id" : 32,
            "name" : "Nhà Cung Cấp",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 982,
            "name" : "Báo cáo Xuất nhập tồn"
        },
        {
            "id" : 32,
            "name" : "Nhà Cung Cấp",
            "id" : 130,
            "name" : "Menu Quản Trị Kho",
            "id" : 644,
            "name" : "Menu Danh Sách Kho"
        },
        {
            "id" : 32,
            "name" : "Nhà Cung Cấp",
            "id" : 130,
            "name" : "Menu Quản Trị Kho",
            "id" : 648,
            "name" : "Menu Tồn Kho"
        },
        {
            "id" : 32,
            "name" : "Nhà Cung Cấp",
            "id" : 131,
            "name" : "Action Danh Sách Kho",
            "id" : 651,
            "name" : "Xem Chi Tiết Kho"
        },
        {
            "id" : 32,
            "name" : "Nhà Cung Cấp",
            "id" : 131,
            "name" : "Action Danh Sách Kho",
            "id" : 652,
            "name" : "Xem Danh Sách kho"
        },
        {
            "id" : 32,
            "name" : "Nhà Cung Cấp",
            "id" : 134,
            "name" : "Action Tồn Kho",
            "id" : 913,
            "name" : "Xuất dữ liệu tồn kho"
        },
        {
            "id" : 32,
            "name" : "Nhà Cung Cấp",
            "id" : 134,
            "name" : "Action Tồn Kho",
            "id" : 983,
            "name" : "Xuất báo cáo xuất nhập tồn"
        },
        {
            "id" : 32,
            "name" : "Nhà Cung Cấp",
            "id" : 161,
            "name" : "Action Quản Lý Nhân Viên",
            "id" : 767,
            "name" : "Xem Nhân Viên"
        },
        {
            "id" : 32,
            "name" : "Nhà Cung Cấp",
            "id" : 162,
            "name" : "Menu Quản Lý Khách Hàng",
            "id" : 771,
            "name" : "Menu Khách Hàng"
        },
        {
            "id" : 32,
            "name" : "Nhà Cung Cấp",
            "id" : 162,
            "name" : "Menu Quản Lý Khách Hàng",
            "id" : 772,
            "name" : "Menu Nhà Phân Phối"
        },
        {
            "id" : 32,
            "name" : "Nhà Cung Cấp",
            "id" : 162,
            "name" : "Menu Quản Lý Khách Hàng",
            "id" : 924,
            "name" : "Menu nhà cung cấp"
        },
        {
            "id" : 32,
            "name" : "Nhà Cung Cấp",
            "id" : 163,
            "name" : "Action Khách Hàng",
            "id" : 775,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 32,
            "name" : "Nhà Cung Cấp",
            "id" : 164,
            "name" : "Action Nhà Phân Phối",
            "id" : 780,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 32,
            "name" : "Nhà Cung Cấp",
            "id" : 166,
            "name" : "Menu Chương Trình Bán Hàng",
            "id" : 930,
            "name" : "Menu khai báo ngân sách"
        },
        {
            "id" : 32,
            "name" : "Nhà Cung Cấp",
            "id" : 166,
            "name" : "Menu Chương Trình Bán Hàng",
            "id" : 931,
            "name" : "Menu theo dõi ngân sách NPP"
        },
        {
            "id" : 32,
            "name" : "Nhà Cung Cấp",
            "id" : 166,
            "name" : "Menu Chương Trình Bán Hàng",
            "id" : 932,
            "name" : "Menu Claim By Distribution"
        },
        {
            "id" : 32,
            "name" : "Nhà Cung Cấp",
            "id" : 166,
            "name" : "Menu Chương Trình Bán Hàng",
            "id" : 933,
            "name" : "Menu claim by outlet"
        },
        {
            "id" : 32,
            "name" : "Nhà Cung Cấp",
            "id" : 166,
            "name" : "Menu Chương Trình Bán Hàng",
            "id" : 951,
            "name" : "Menu claim by order"
        },
        {
            "id" : 32,
            "name" : "Nhà Cung Cấp",
            "id" : 170,
            "name" : "Menu Quản Lý Sản Phẩm",
            "id" : 807,
            "name" : "Menu Sản Phẩm"
        },
        {
            "id" : 32,
            "name" : "Nhà Cung Cấp",
            "id" : 171,
            "name" : "Action Ngành hành\/Nhóm hàng",
            "id" : 815,
            "name" : "Xem Ngành hành\/Nhóm hàng"
        },
        {
            "id" : 32,
            "name" : "Nhà Cung Cấp",
            "id" : 172,
            "name" : "Action Sản Phẩm",
            "id" : 821,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 32,
            "name" : "Nhà Cung Cấp",
            "id" : 181,
            "name" : "Menu quản lý nhân viên",
            "id" : 867,
            "name" : "Menu danh sách nhân viên"
        },
        {
            "id" : 32,
            "name" : "Nhà Cung Cấp",
            "id" : 188,
            "name" : "Claim by Outlet",
            "id" : 934,
            "name" : "Xuất báo cáo"
        },
        {
            "id" : 32,
            "name" : "Nhà Cung Cấp",
            "id" : 189,
            "name" : "Claim By Distributor",
            "id" : 935,
            "name" : "Xuất báo cáo"
        },
        {
            "id" : 32,
            "name" : "Nhà Cung Cấp",
            "id" : 190,
            "name" : "Action khai báo ngân sách",
            "id" : 936,
            "name" : "Xem ngân sách"
        },
        {
            "id" : 32,
            "name" : "Nhà Cung Cấp",
            "id" : 193,
            "name" : "Action Claim by order",
            "id" : 954,
            "name" : "Xuất báo cáo"
        },
        {
            "id" : 32,
            "name" : "Nhà Cung Cấp",
            "id" : 197,
            "name" : "Menu chương trình Loyalty",
            "id" : 967,
            "name" : "Menu theo dõi Loyalty"
        },
        {
            "id" : 32,
            "name" : "Nhà Cung Cấp",
            "id" : 197,
            "name" : "Menu chương trình Loyalty",
            "id" : 978,
            "name" : "Menu kết quả tính thưởng"
        },
        {
            "id" : 33,
            "name" : "Quản lý chung",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 613,
            "name" : "Menu Quản Lý Báo Cáo"
        },
        {
            "id" : 33,
            "name" : "Quản lý chung",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 628,
            "name" : "Menu Đơn Hàng"
        },
        {
            "id" : 33,
            "name" : "Quản lý chung",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 629,
            "name" : "Dashboard"
        },
        {
            "id" : 33,
            "name" : "Quản lý chung",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 638,
            "name" : "Báo cáo Sản Phẩm Theo Khách Hàng"
        },
        {
            "id" : 33,
            "name" : "Quản lý chung",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 639,
            "name" : "Báo cáo Thống Kê Bán Hàng Theo Khu Vực"
        },
        {
            "id" : 33,
            "name" : "Quản lý chung",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 641,
            "name" : "Báo cáo Đơn Hàng"
        },
        {
            "id" : 33,
            "name" : "Quản lý chung",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 642,
            "name" : "Báo cáo Chi Tiết Đơn Hàng"
        },
        {
            "id" : 33,
            "name" : "Quản lý chung",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 643,
            "name" : "Báo cáo Thống Kê Bán Hàng Theo Kênh"
        },
        {
            "id" : 33,
            "name" : "Quản lý chung",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 914,
            "name" : "Báo cáo Điểm bán mới"
        },
        {
            "id" : 33,
            "name" : "Quản lý chung",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 915,
            "name" : "Báo cáo Tuyến"
        },
        {
            "id" : 33,
            "name" : "Quản lý chung",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 916,
            "name" : "Báo cáo Sản phẩm"
        },
        {
            "id" : 33,
            "name" : "Quản lý chung",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 917,
            "name" : "Báo cáo Khách hàng"
        },
        {
            "id" : 33,
            "name" : "Quản lý chung",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 919,
            "name" : "Báo cáo Tồn kho"
        },
        {
            "id" : 33,
            "name" : "Quản lý chung",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 920,
            "name" : "Báo cáo Hóa đơn"
        },
        {
            "id" : 33,
            "name" : "Quản lý chung",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 923,
            "name" : "Báo cáo Claim"
        },
        {
            "id" : 33,
            "name" : "Quản lý chung",
            "id" : 162,
            "name" : "Menu Quản Lý Khách Hàng",
            "id" : 771,
            "name" : "Menu Khách Hàng"
        },
        {
            "id" : 33,
            "name" : "Quản lý chung",
            "id" : 162,
            "name" : "Menu Quản Lý Khách Hàng",
            "id" : 772,
            "name" : "Menu Nhà Phân Phối"
        },
        {
            "id" : 33,
            "name" : "Quản lý chung",
            "id" : 162,
            "name" : "Menu Quản Lý Khách Hàng",
            "id" : 868,
            "name" : "Menu nhóm đối tượng"
        },
        {
            "id" : 33,
            "name" : "Quản lý chung",
            "id" : 162,
            "name" : "Menu Quản Lý Khách Hàng",
            "id" : 924,
            "name" : "Menu nhà cung cấp"
        },
        {
            "id" : 33,
            "name" : "Quản lý chung",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 850,
            "name" : "Menu Tất Cả Đơn Hàng"
        },
        {
            "id" : 33,
            "name" : "Quản lý chung",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 851,
            "name" : "Menu Đơn Mới"
        },
        {
            "id" : 33,
            "name" : "Quản lý chung",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 852,
            "name" : "Menu Nhận Đơn"
        },
        {
            "id" : 33,
            "name" : "Quản lý chung",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 853,
            "name" : "Menu Kế Toán HH"
        },
        {
            "id" : 33,
            "name" : "Quản lý chung",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 854,
            "name" : "Menu Kế toán công nợ"
        },
        {
            "id" : 33,
            "name" : "Quản lý chung",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 855,
            "name" : "Menu Chờ Duyệt"
        },
        {
            "id" : 33,
            "name" : "Quản lý chung",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 856,
            "name" : "Menu Kho Hàng"
        },
        {
            "id" : 33,
            "name" : "Quản lý chung",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 857,
            "name" : "Menu Thanh Toán"
        },
        {
            "id" : 33,
            "name" : "Quản lý chung",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 858,
            "name" : "Menu Hủy Đơn"
        },
        {
            "id" : 33,
            "name" : "Quản lý chung",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 893,
            "name" : "Menu đơn hàng PO"
        },
        {
            "id" : 33,
            "name" : "Quản lý chung",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 911,
            "name" : "Menu Thực hiện & kết quả giao hàng"
        },
        {
            "id" : 33,
            "name" : "Quản lý chung",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 921,
            "name" : "Menu Chưa Thanh Toán"
        },
        {
            "id" : 33,
            "name" : "Quản lý chung",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 929,
            "name" : "Đơn hàng hoàn thành"
        },
        {
            "id" : 33,
            "name" : "Quản lý chung",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 861,
            "name" : "Xem Chi Tiết Đơn"
        },
        {
            "id" : 33,
            "name" : "Quản lý chung",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 865,
            "name" : "Xem Báo Cáo Đơn hàng"
        },
        {
            "id" : 34,
            "name" : "Report",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 613,
            "name" : "Menu Quản Lý Báo Cáo"
        },
        {
            "id" : 34,
            "name" : "Report",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 638,
            "name" : "Báo cáo Sản Phẩm Theo Khách Hàng"
        },
        {
            "id" : 34,
            "name" : "Report",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 639,
            "name" : "Báo cáo Thống Kê Bán Hàng Theo Khu Vực"
        },
        {
            "id" : 34,
            "name" : "Report",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 641,
            "name" : "Báo cáo Đơn Hàng"
        },
        {
            "id" : 34,
            "name" : "Report",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 642,
            "name" : "Báo cáo Chi Tiết Đơn Hàng"
        },
        {
            "id" : 34,
            "name" : "Report",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 643,
            "name" : "Báo cáo Thống Kê Bán Hàng Theo Kênh"
        },
        {
            "id" : 34,
            "name" : "Report",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 914,
            "name" : "Báo cáo Điểm bán mới"
        },
        {
            "id" : 34,
            "name" : "Report",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 915,
            "name" : "Báo cáo Tuyến"
        },
        {
            "id" : 34,
            "name" : "Report",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 916,
            "name" : "Báo cáo Sản phẩm"
        },
        {
            "id" : 34,
            "name" : "Report",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 917,
            "name" : "Báo cáo Khách hàng"
        },
        {
            "id" : 34,
            "name" : "Report",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 919,
            "name" : "Báo cáo Tồn kho"
        },
        {
            "id" : 34,
            "name" : "Report",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 920,
            "name" : "Báo cáo Hóa đơn"
        },
        {
            "id" : 34,
            "name" : "Report",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 728,
            "name" : "Xuất Báo Cáo Viếng Thăm"
        },
        {
            "id" : 34,
            "name" : "Report",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 850,
            "name" : "Menu Tất Cả Đơn Hàng"
        },
        {
            "id" : 34,
            "name" : "Report",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 861,
            "name" : "Xem Chi Tiết Đơn"
        },
        {
            "id" : 34,
            "name" : "Report",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 865,
            "name" : "Xem Báo Cáo Đơn hàng"
        },
        {
            "id" : 34,
            "name" : "Report",
            "id" : 188,
            "name" : "Claim by Outlet",
            "id" : 934,
            "name" : "Xuất báo cáo"
        },
        {
            "id" : 34,
            "name" : "Report",
            "id" : 189,
            "name" : "Claim By Distributor",
            "id" : 935,
            "name" : "Xuất báo cáo"
        },
        {
            "id" : 34,
            "name" : "Report",
            "id" : 193,
            "name" : "Action Claim by order",
            "id" : 954,
            "name" : "Xuất báo cáo"
        },
        {
            "id" : 34,
            "name" : "Report",
            "id" : 195,
            "name" : "Action chương trình loyalty",
            "id" : 970,
            "name" : "Xem chương trình loyalty"
        },
        {
            "id" : 34,
            "name" : "Report",
            "id" : 196,
            "name" : "Action đăng ký chương trình Loyalty",
            "id" : 974,
            "name" : "Xem đăng ký"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 613,
            "name" : "Menu Quản Lý Báo Cáo"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 625,
            "name" : "Menu Chương Trình Bán Hàng"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 628,
            "name" : "Menu Đơn Hàng"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 977,
            "name" : "Menu chương trình Loyalty"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 638,
            "name" : "Báo cáo Sản Phẩm Theo Khách Hàng"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 639,
            "name" : "Báo cáo Thống Kê Bán Hàng Theo Khu Vực"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 641,
            "name" : "Báo cáo Đơn Hàng"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 642,
            "name" : "Báo cáo Chi Tiết Đơn Hàng"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 643,
            "name" : "Báo cáo Thống Kê Bán Hàng Theo Kênh"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 914,
            "name" : "Báo cáo Điểm bán mới"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 915,
            "name" : "Báo cáo Tuyến"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 916,
            "name" : "Báo cáo Sản phẩm"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 917,
            "name" : "Báo cáo Khách hàng"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 919,
            "name" : "Báo cáo Tồn kho"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 920,
            "name" : "Báo cáo Hóa đơn"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 134,
            "name" : "Action Tồn Kho",
            "id" : 913,
            "name" : "Xuất dữ liệu tồn kho"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 149,
            "name" : "Action Quản Lý Tuyến",
            "id" : 717,
            "name" : "Xem Tuyến"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 161,
            "name" : "Action Quản Lý Nhân Viên",
            "id" : 767,
            "name" : "Xem Nhân Viên"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 163,
            "name" : "Action Khách Hàng",
            "id" : 775,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 165,
            "name" : "Action Nhóm Đối Tượng",
            "id" : 785,
            "name" : "Xem Nhóm Đối Tượng"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 166,
            "name" : "Menu Chương Trình Bán Hàng",
            "id" : 789,
            "name" : "Menu Chương Trình Khuyến Mãi"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 166,
            "name" : "Menu Chương Trình Bán Hàng",
            "id" : 930,
            "name" : "Menu khai báo ngân sách"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 166,
            "name" : "Menu Chương Trình Bán Hàng",
            "id" : 931,
            "name" : "Menu theo dõi ngân sách NPP"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 166,
            "name" : "Menu Chương Trình Bán Hàng",
            "id" : 932,
            "name" : "Menu Claim By Distribution"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 166,
            "name" : "Menu Chương Trình Bán Hàng",
            "id" : 933,
            "name" : "Menu claim by outlet"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 166,
            "name" : "Menu Chương Trình Bán Hàng",
            "id" : 951,
            "name" : "Menu claim by order"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 167,
            "name" : "Action Chương Trình Khuyến Mãi",
            "id" : 790,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 169,
            "name" : "Action Bảng Giá",
            "id" : 796,
            "name" : "Xem Danh Sách Bảng Giá"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 850,
            "name" : "Menu Tất Cả Đơn Hàng"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 861,
            "name" : "Xem Chi Tiết Đơn"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 865,
            "name" : "Xem Báo Cáo Đơn hàng"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 866,
            "name" : "Xuất Dữ Liệu"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 185,
            "name" : "Menu chương trình trưng bày",
            "id" : 899,
            "name" : "Chương trình trưng bày"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 186,
            "name" : "Action chương trình trưng bày",
            "id" : 900,
            "name" : "Xem chương trình trưng bày"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 188,
            "name" : "Claim by Outlet",
            "id" : 934,
            "name" : "Xuất báo cáo"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 188,
            "name" : "Claim by Outlet",
            "id" : 943,
            "name" : "Duyệt claim"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 188,
            "name" : "Claim by Outlet",
            "id" : 944,
            "name" : "Từ chối claim"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 189,
            "name" : "Claim By Distributor",
            "id" : 935,
            "name" : "Xuất báo cáo"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 189,
            "name" : "Claim By Distributor",
            "id" : 941,
            "name" : "Duyệt claim"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 189,
            "name" : "Claim By Distributor",
            "id" : 942,
            "name" : "Từ chối claim"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 190,
            "name" : "Action khai báo ngân sách",
            "id" : 936,
            "name" : "Xem ngân sách"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 190,
            "name" : "Action khai báo ngân sách",
            "id" : 937,
            "name" : "Cập nhật ngân sách"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 190,
            "name" : "Action khai báo ngân sách",
            "id" : 938,
            "name" : "Tạo ngân sách"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 190,
            "name" : "Action khai báo ngân sách",
            "id" : 940,
            "name" : "Import ngân sách"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 190,
            "name" : "Action khai báo ngân sách",
            "id" : 946,
            "name" : "Clone ngân sách"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 191,
            "name" : "Action theo dõi ngân sách NPP",
            "id" : 945,
            "name" : "Xuất báo cáo"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 193,
            "name" : "Action Claim by order",
            "id" : 952,
            "name" : "Duyệt claim"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 193,
            "name" : "Action Claim by order",
            "id" : 953,
            "name" : "Từ chối claim"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 193,
            "name" : "Action Claim by order",
            "id" : 954,
            "name" : "Xuất báo cáo"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 195,
            "name" : "Action chương trình loyalty",
            "id" : 970,
            "name" : "Xem chương trình loyalty"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 196,
            "name" : "Action đăng ký chương trình Loyalty",
            "id" : 974,
            "name" : "Xem đăng ký"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 197,
            "name" : "Menu chương trình Loyalty",
            "id" : 965,
            "name" : "Menu Danh Sách Chương Trình Loyalty"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 197,
            "name" : "Menu chương trình Loyalty",
            "id" : 966,
            "name" : "Menu đăng ký chương tình Loyalty"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 197,
            "name" : "Menu chương trình Loyalty",
            "id" : 967,
            "name" : "Menu theo dõi Loyalty"
        },
        {
            "id" : 35,
            "name" : "Trade team",
            "id" : 197,
            "name" : "Menu chương trình Loyalty",
            "id" : 978,
            "name" : "Menu kết quả tính thưởng"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 613,
            "name" : "Menu Quản Lý Báo Cáo"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 615,
            "name" : "Menu Quản Lý Tài Sản"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 624,
            "name" : "Menu Quản Lý Khách Hàng"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 625,
            "name" : "Menu Chương Trình Bán Hàng"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 628,
            "name" : "Menu Đơn Hàng"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 898,
            "name" : "Menu chương trình trưng bày"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 977,
            "name" : "Menu chương trình Loyalty"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 638,
            "name" : "Báo cáo Sản Phẩm Theo Khách Hàng"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 639,
            "name" : "Báo cáo Thống Kê Bán Hàng Theo Khu Vực"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 641,
            "name" : "Báo cáo Đơn Hàng"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 642,
            "name" : "Báo cáo Chi Tiết Đơn Hàng"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 643,
            "name" : "Báo cáo Thống Kê Bán Hàng Theo Kênh"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 914,
            "name" : "Báo cáo Điểm bán mới"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 915,
            "name" : "Báo cáo Tuyến"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 916,
            "name" : "Báo cáo Sản phẩm"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 917,
            "name" : "Báo cáo Khách hàng"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 919,
            "name" : "Báo cáo Tồn kho"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 129,
            "name" : "Action Báo Cáo",
            "id" : 920,
            "name" : "Báo cáo Hóa đơn"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 131,
            "name" : "Action Danh Sách Kho",
            "id" : 651,
            "name" : "Xem Chi Tiết Kho"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 131,
            "name" : "Action Danh Sách Kho",
            "id" : 652,
            "name" : "Xem Danh Sách kho"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 134,
            "name" : "Action Tồn Kho",
            "id" : 913,
            "name" : "Xuất dữ liệu tồn kho"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 148,
            "name" : "Action Quản Lý Kế Hoạch",
            "id" : 713,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 149,
            "name" : "Action Quản Lý Tuyến",
            "id" : 717,
            "name" : "Xem Tuyến"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 664,
            "name" : "Xem Kiểm Kê Kho Tại Điểm Bán"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 723,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 727,
            "name" : "Xuất Dữ Liệu Nhân Viên"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 728,
            "name" : "Xuất Báo Cáo Viếng Thăm"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 729,
            "name" : "Xuất Báo Cáo Điểm Bán Mới"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 873,
            "name" : "Xem cửa hàng của nhân viên"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 151,
            "name" : "Action Cấu Hình Cây Hệ Thống",
            "id" : 874,
            "name" : "Xem vị trí khách hàng"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 161,
            "name" : "Action Quản Lý Nhân Viên",
            "id" : 767,
            "name" : "Xem Nhân Viên"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 162,
            "name" : "Menu Quản Lý Khách Hàng",
            "id" : 771,
            "name" : "Menu Khách Hàng"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 162,
            "name" : "Menu Quản Lý Khách Hàng",
            "id" : 868,
            "name" : "Menu nhóm đối tượng"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 163,
            "name" : "Action Khách Hàng",
            "id" : 775,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 165,
            "name" : "Action Nhóm Đối Tượng",
            "id" : 785,
            "name" : "Xem Nhóm Đối Tượng"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 166,
            "name" : "Menu Chương Trình Bán Hàng",
            "id" : 789,
            "name" : "Menu Chương Trình Khuyến Mãi"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 166,
            "name" : "Menu Chương Trình Bán Hàng",
            "id" : 930,
            "name" : "Menu khai báo ngân sách"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 166,
            "name" : "Menu Chương Trình Bán Hàng",
            "id" : 931,
            "name" : "Menu theo dõi ngân sách NPP"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 166,
            "name" : "Menu Chương Trình Bán Hàng",
            "id" : 932,
            "name" : "Menu Claim By Distribution"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 166,
            "name" : "Menu Chương Trình Bán Hàng",
            "id" : 933,
            "name" : "Menu claim by outlet"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 166,
            "name" : "Menu Chương Trình Bán Hàng",
            "id" : 951,
            "name" : "Menu claim by order"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 167,
            "name" : "Action Chương Trình Khuyến Mãi",
            "id" : 790,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 167,
            "name" : "Action Chương Trình Khuyến Mãi",
            "id" : 791,
            "name" : "Tạo Mới Chương Trình Khuyến Mãi"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 167,
            "name" : "Action Chương Trình Khuyến Mãi",
            "id" : 792,
            "name" : "Sửa Chương Trình Khuyến Mãi"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 167,
            "name" : "Action Chương Trình Khuyến Mãi",
            "id" : 793,
            "name" : "Xóa Chương Trình Khuyến Mãi"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 167,
            "name" : "Action Chương Trình Khuyến Mãi",
            "id" : 877,
            "name" : "Clone CTKM"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 168,
            "name" : "Menu Bảng Giá",
            "id" : 794,
            "name" : "Menu Bảng Giá"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 169,
            "name" : "Action Bảng Giá",
            "id" : 796,
            "name" : "Xem Danh Sách Bảng Giá"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 169,
            "name" : "Action Bảng Giá",
            "id" : 797,
            "name" : "Tạo Mới Bảng Giá"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 169,
            "name" : "Action Bảng Giá",
            "id" : 798,
            "name" : "Sửa Bảng Giá"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 169,
            "name" : "Action Bảng Giá",
            "id" : 800,
            "name" : "Clone Bảng Giá"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 169,
            "name" : "Action Bảng Giá",
            "id" : 801,
            "name" : "Xem Chi Tiết Bảng Giá"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 169,
            "name" : "Action Bảng Giá",
            "id" : 802,
            "name" : "Thêm Sản Phẩm Trong Bảng Giá"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 169,
            "name" : "Action Bảng Giá",
            "id" : 803,
            "name" : "Sửa Sản Phẩm Trong Bảng Giá"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 169,
            "name" : "Action Bảng Giá",
            "id" : 804,
            "name" : "Xóa Sản Phẩm Trong Bảng Giá"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 169,
            "name" : "Action Bảng Giá",
            "id" : 805,
            "name" : "Import Sản Phẩm Trong Bảng Giá"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 172,
            "name" : "Action Sản Phẩm",
            "id" : 821,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 172,
            "name" : "Action Sản Phẩm",
            "id" : 822,
            "name" : "Tạo Mới Sản Phẩm"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 172,
            "name" : "Action Sản Phẩm",
            "id" : 823,
            "name" : "Sửa Sản Phẩm"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 172,
            "name" : "Action Sản Phẩm",
            "id" : 824,
            "name" : "Xóa Sản Phẩm"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 172,
            "name" : "Action Sản Phẩm",
            "id" : 825,
            "name" : "Clone Sản Phẩm"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 172,
            "name" : "Action Sản Phẩm",
            "id" : 886,
            "name" : "Xuất danh sách sản phẩm"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 172,
            "name" : "Action Sản Phẩm",
            "id" : 912,
            "name" : "Import sản phẩm"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 850,
            "name" : "Menu Tất Cả Đơn Hàng"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 851,
            "name" : "Menu Đơn Mới"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 852,
            "name" : "Menu Nhận Đơn"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 853,
            "name" : "Menu Kế Toán HH"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 854,
            "name" : "Menu Kế toán công nợ"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 855,
            "name" : "Menu Chờ Duyệt"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 856,
            "name" : "Menu Kho Hàng"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 857,
            "name" : "Menu Thanh Toán"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 858,
            "name" : "Menu Hủy Đơn"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 893,
            "name" : "Menu đơn hàng PO"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 911,
            "name" : "Menu Thực hiện & kết quả giao hàng"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 921,
            "name" : "Menu Chưa Thanh Toán"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 179,
            "name" : "Menu Đơn Hàng",
            "id" : 929,
            "name" : "Đơn hàng hoàn thành"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 861,
            "name" : "Xem Chi Tiết Đơn"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 865,
            "name" : "Xem Báo Cáo Đơn hàng"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 180,
            "name" : "Action Đơn hàng",
            "id" : 866,
            "name" : "Xuất Dữ Liệu"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 184,
            "name" : "Action nhóm khách hàng",
            "id" : 890,
            "name" : "Xem nhóm khách hàng"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 185,
            "name" : "Menu chương trình trưng bày",
            "id" : 899,
            "name" : "Chương trình trưng bày"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 186,
            "name" : "Action chương trình trưng bày",
            "id" : 900,
            "name" : "Xem chương trình trưng bày"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 186,
            "name" : "Action chương trình trưng bày",
            "id" : 901,
            "name" : "Cập nhật chương trình trưng bày"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 186,
            "name" : "Action chương trình trưng bày",
            "id" : 902,
            "name" : "Xóa chương trình trưng bày"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 186,
            "name" : "Action chương trình trưng bày",
            "id" : 903,
            "name" : "Tạo chương trình trưng bày"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 186,
            "name" : "Action chương trình trưng bày",
            "id" : 904,
            "name" : "Clone chương trình trưng bày"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 187,
            "name" : "Action nhà cung cấp",
            "id" : 926,
            "name" : "Xem nhà cung cấp"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 188,
            "name" : "Claim by Outlet",
            "id" : 934,
            "name" : "Xuất báo cáo"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 189,
            "name" : "Claim By Distributor",
            "id" : 935,
            "name" : "Xuất báo cáo"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 190,
            "name" : "Action khai báo ngân sách",
            "id" : 936,
            "name" : "Xem ngân sách"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 190,
            "name" : "Action khai báo ngân sách",
            "id" : 937,
            "name" : "Cập nhật ngân sách"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 190,
            "name" : "Action khai báo ngân sách",
            "id" : 938,
            "name" : "Tạo ngân sách"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 190,
            "name" : "Action khai báo ngân sách",
            "id" : 940,
            "name" : "Import ngân sách"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 190,
            "name" : "Action khai báo ngân sách",
            "id" : 946,
            "name" : "Clone ngân sách"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 191,
            "name" : "Action theo dõi ngân sách NPP",
            "id" : 945,
            "name" : "Xuất báo cáo"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 193,
            "name" : "Action Claim by order",
            "id" : 954,
            "name" : "Xuất báo cáo"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 195,
            "name" : "Action chương trình loyalty",
            "id" : 968,
            "name" : "Tạo chương trình loyalty"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 195,
            "name" : "Action chương trình loyalty",
            "id" : 969,
            "name" : "Clone chương trình loyalty"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 195,
            "name" : "Action chương trình loyalty",
            "id" : 970,
            "name" : "Xem chương trình loyalty"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 195,
            "name" : "Action chương trình loyalty",
            "id" : 971,
            "name" : "Chỉnh sửa chương trình loyalty"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 195,
            "name" : "Action chương trình loyalty",
            "id" : 972,
            "name" : "Xóa chương trình loyalty"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 196,
            "name" : "Action đăng ký chương trình Loyalty",
            "id" : 973,
            "name" : "Tạo đăng ký"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 196,
            "name" : "Action đăng ký chương trình Loyalty",
            "id" : 974,
            "name" : "Xem đăng ký"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 196,
            "name" : "Action đăng ký chương trình Loyalty",
            "id" : 975,
            "name" : "Chỉnh sửa đăng ký"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 196,
            "name" : "Action đăng ký chương trình Loyalty",
            "id" : 976,
            "name" : "Xóa đăng ký"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 197,
            "name" : "Menu chương trình Loyalty",
            "id" : 965,
            "name" : "Menu Danh Sách Chương Trình Loyalty"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 197,
            "name" : "Menu chương trình Loyalty",
            "id" : 966,
            "name" : "Menu đăng ký chương tình Loyalty"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 197,
            "name" : "Menu chương trình Loyalty",
            "id" : 967,
            "name" : "Menu theo dõi Loyalty"
        },
        {
            "id" : 36,
            "name" : "Tác nghiệp kinh doanh",
            "id" : 197,
            "name" : "Menu chương trình Loyalty",
            "id" : 978,
            "name" : "Menu kết quả tính thưởng"
        },
        {
            "id" : 38,
            "name" : "Admin Khu Vực",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 615,
            "name" : "Menu Quản Lý Tài Sản"
        },
        {
            "id" : 38,
            "name" : "Admin Khu Vực",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 624,
            "name" : "Menu Quản Lý Khách Hàng"
        },
        {
            "id" : 38,
            "name" : "Admin Khu Vực",
            "id" : 137,
            "name" : "Menu Quản Lý Tài Sản",
            "id" : 669,
            "name" : "Menu Danh Sách Kho Tài Sản"
        },
        {
            "id" : 38,
            "name" : "Admin Khu Vực",
            "id" : 137,
            "name" : "Menu Quản Lý Tài Sản",
            "id" : 989,
            "name" : "Menu Yêu cầu duyệt tài sản"
        },
        {
            "id" : 38,
            "name" : "Admin Khu Vực",
            "id" : 139,
            "name" : "Action Kho Tài Sản",
            "id" : 677,
            "name" : "Xem Tài Sản"
        },
        {
            "id" : 38,
            "name" : "Admin Khu Vực",
            "id" : 162,
            "name" : "Menu Quản Lý Khách Hàng",
            "id" : 771,
            "name" : "Menu Khách Hàng"
        },
        {
            "id" : 38,
            "name" : "Admin Khu Vực",
            "id" : 163,
            "name" : "Action Khách Hàng",
            "id" : 775,
            "name" : "Xem Danh Sách"
        },
        {
            "id" : 38,
            "name" : "Admin Khu Vực",
            "id" : 199,
            "name" : "Action Yêu cầu tài sản",
            "id" : 993,
            "name" : "Xem Yêu cầu"
        },
        {
            "id" : 38,
            "name" : "Admin Khu Vực",
            "id" : 199,
            "name" : "Action Yêu cầu tài sản",
            "id" : 996,
            "name" : "Từ chối yêu cầu"
        },
        {
            "id" : 38,
            "name" : "Admin Khu Vực",
            "id" : 199,
            "name" : "Action Yêu cầu tài sản",
            "id" : 999,
            "name" : "Xem Preview Chứng Từ"
        },
        {
            "id" : 38,
            "name" : "Admin Khu Vực",
            "id" : 199,
            "name" : "Action Yêu cầu tài sản",
            "id" : 1001,
            "name" : "Xuất báo cáo Excel"
        },
        {
            "id" : 38,
            "name" : "Admin Khu Vực",
            "id" : 199,
            "name" : "Action Yêu cầu tài sản",
            "id" : 1003,
            "name" : "Xác nhận yêu cầu lần 2"
        },
        {
            "id" : 38,
            "name" : "Admin Khu Vực",
            "id" : 199,
            "name" : "Action Yêu cầu tài sản",
            "id" : 1004,
            "name" : "Xác nhận yêu cầu lần 3"
        },
        {
            "id" : 38,
            "name" : "Admin Khu Vực",
            "id" : 200,
            "name" : "Action danh sách tài sản",
            "id" : 1009,
            "name" : "Xem"
        },
        {
            "id" : 38,
            "name" : "Admin Khu Vực",
            "id" : 200,
            "name" : "Action danh sách tài sản",
            "id" : 1011,
            "name" : "Export Excel"
        },
        {
            "id" : 39,
            "name" : "Quản Lý Khu Vực",
            "id" : 123,
            "name" : "MENU Tổng",
            "id" : 615,
            "name" : "Menu Quản Lý Tài Sản"
        },
        {
            "id" : 39,
            "name" : "Quản Lý Khu Vực",
            "id" : 137,
            "name" : "Menu Quản Lý Tài Sản",
            "id" : 669,
            "name" : "Menu Danh Sách Kho Tài Sản"
        },
        {
            "id" : 39,
            "name" : "Quản Lý Khu Vực",
            "id" : 137,
            "name" : "Menu Quản Lý Tài Sản",
            "id" : 989,
            "name" : "Menu Yêu cầu duyệt tài sản"
        },
        {
            "id" : 39,
            "name" : "Quản Lý Khu Vực",
            "id" : 139,
            "name" : "Action Kho Tài Sản",
            "id" : 677,
            "name" : "Xem Tài Sản"
        },
        {
            "id" : 39,
            "name" : "Quản Lý Khu Vực",
            "id" : 199,
            "name" : "Action Yêu cầu tài sản",
            "id" : 993,
            "name" : "Xem Yêu cầu"
        },
        {
            "id" : 39,
            "name" : "Quản Lý Khu Vực",
            "id" : 199,
            "name" : "Action Yêu cầu tài sản",
            "id" : 996,
            "name" : "Từ chối yêu cầu"
        },
        {
            "id" : 39,
            "name" : "Quản Lý Khu Vực",
            "id" : 199,
            "name" : "Action Yêu cầu tài sản",
            "id" : 999,
            "name" : "Xem Preview Chứng Từ"
        },
        {
            "id" : 39,
            "name" : "Quản Lý Khu Vực",
            "id" : 199,
            "name" : "Action Yêu cầu tài sản",
            "id" : 1003,
            "name" : "Xác nhận yêu cầu lần 2"
        },
        {
            "id" : 39,
            "name" : "Quản Lý Khu Vực",
            "id" : 199,
            "name" : "Action Yêu cầu tài sản",
            "id" : 1004,
            "name" : "Xác nhận yêu cầu lần 3"
        },
        {
            "id" : 39,
            "name" : "Quản Lý Khu Vực",
            "id" : 199,
            "name" : "Action Yêu cầu tài sản",
            "id" : 1005,
            "name" : "Duyệt yêu cầu"
        },
        {
            "id" : 39,
            "name" : "Quản Lý Khu Vực",
            "id" : 200,
            "name" : "Action danh sách tài sản",
            "id" : 1009,
            "name" : "Xem"
        },
        {
            "id" : 39,
            "name" : "Quản Lý Khu Vực",
            "id" : 200,
            "name" : "Action danh sách tài sản",
            "id" : 1011,
            "name" : "Export Excel"
        }
    ]}
    