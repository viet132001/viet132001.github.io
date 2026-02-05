{
    "    SELECT DISTINCT    \n    plans.id as plan_id,  \n    s.code as shop_code, \n    s.name as shop_name,     \n    s.address as shop_address,   \n    s.lat as shop_lat,     \n    s.long as shop_long,     \n    plans.start_date as start_date,\n    plans.saleman FROM plans INNER JOIN users AS s  \n    ON s.code = plans.shop_code LEFT JOIN users AS upl    \n    ON upl.code = plans.saleman LEFT JOIN roadmaps_v2 AS rm   \n    ON rm.user_id = upl.id WHERE     plans.deleted_at IS NULL  \n    and plans.plan_type =0    AND s.deleted_at IS NULL     AND rm.deleted_at IS NULL \n    AND upl.deleted_at IS NULL     AND plans.saleman IS NOT NULL     AND plans.plan_type = 0  \n    AND (plans.saleman = 35298 or plans.saleman = 38149 or plans.saleman = 19790 or plans.saleman = 3000353    )  \n    AND (plans.start_date >= '2025-12-01 00:00:00')     AND (plans.end_date <= '2025-12-31 23:59:59')\n": [
        {
            "id" : 1757434,
            "code" : "38149000004",
            "name" : "Công Tỷ cổ phần TMDV Thiện Pháp",
            "address" : "Toà nhà joy kcx, Phường Linh Trung, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
            "lat" : "10.7493532",
            "long" : "106.7200534",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757435,
            "code" : "2813518",
            "name" : "TH phương Loan",
            "address" : "1432 Nguyễn Duy Trinh,Phường Long Trường,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8059384",
            "long" : "106.8200579",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757436,
            "code" : "2813522",
            "name" : "Ngo Thi Lang",
            "address" : "11 Đường 898, KP4,Phường Phú Hữu,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7898352",
            "long" : "106.7985645",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757437,
            "code" : "2813538",
            "name" : "Đặng Ngọc Thanh",
            "address" : "1056 Nguyễn Duy Trinh,Phường Long Trường,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7996979",
            "long" : "106.8094676",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757438,
            "code" : "2813548",
            "name" : "chợ sạch melosa",
            "address" : "59 đường số 2, khu nhà melosa,Phường Phú Hữu,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7822712",
            "long" : "106.7924454",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757439,
            "code" : "2813512",
            "name" : "Chu Thị Thùy Trang",
            "address" : "231 - Trường Lưu,Phường Long Trường,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7942439",
            "long" : "106.8246753",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757440,
            "code" : "2981876",
            "name" : "chợ sạch park RiverSide",
            "address" : "M11 KDC Park Riverside Premium,Phường Phú Hữu,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8088243",
            "long" : "106.80211889",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757441,
            "code" : "3065447",
            "name" : "Anh Lý",
            "address" : "81A Bưng Ông Thoàng,p.Phú Hữu,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7968059",
            "long" : "106.8008781",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757442,
            "code" : "3671913",
            "name" : "Trần Thị Anh Thảo",
            "address" : "50 Gò Cát, P. long trường,Long Trường,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7873933",
            "long" : "106.80088",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757443,
            "code" : "4076026",
            "name" : "Ngọc Ánh",
            "address" : "1013 Nguyễn Duy Trinh, P. Phú Hữu,P. Phú Hữu,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7950546",
            "long" : "106.807299",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757444,
            "code" : "4419091",
            "name" : "S MARTKET",
            "address" : "SH32 Park Riveside,,Bưng Ông Thoàng,P.Phú Hữu,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8099165",
            "long" : "106.803154",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757445,
            "code" : "2813477",
            "name" : "Lê Văn Tài",
            "address" : "C007 Khu Dân Cư Ehomes,Phường Phú Hữu,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7977505",
            "long" : "106.7856428",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757446,
            "code" : "4826658",
            "name" : "Kmart Thủ Đức",
            "address" : "E26 KDC Park Riverside Bưng Ông Thoàn,Phường Phú Hữu,Quận Thủ Đức,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8076456",
            "long" : "106.8001648",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757447,
            "code" : "4834560",
            "name" : "Trường ĐH KHXH và Nhân Văn 2",
            "address" : "Khu Phố 6,P. Linh Trung,QUẬN THỦ ĐỨC,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.870105",
            "long" : "106.80003",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757448,
            "code" : "4834558",
            "name" : "KVC NORA",
            "address" : "109 TRƯỜNG LƯU,P. LONG TRƯỜNG,QUẬN THỦ ĐỨC,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.700164",
            "long" : "106.72888",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757449,
            "code" : "38149000003",
            "name" : "Fami mart",
            "address" : "33\/2 gò cát, Phường Phú Hữu, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
            "lat" : "10.7873992",
            "long" : "106.8009187",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757451,
            "code" : "38149000005",
            "name" : "THPT Lương Thế Vinh",
            "address" : "131 cô bắc, Phường Cầu Ông Lãnh, Quận 1, Thành phố Hồ Chí Minh",
            "lat" : "10.7493524",
            "long" : "106.720067",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757452,
            "code" : "38149000002",
            "name" : "Vissan",
            "address" : "21-23 phan chu trinh, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh",
            "lat" : "10.7367718",
            "long" : "106.7171967",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757453,
            "code" : "2812958",
            "name" : "Huỳnh Thi Liên",
            "address" : "TK14\/8 Nguyễn Cảnh Chân,Phường Cầu Kho,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.757901",
            "long" : "106.6875274",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757454,
            "code" : "2812967",
            "name" : "Lê Thị Kiếp",
            "address" : "146 Cô Giang,Phường cô Giang,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7622974",
            "long" : "106.6938782",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757455,
            "code" : "2812984",
            "name" : "Châu Yến Thanh",
            "address" : "109 Ký Con,Phường Nguyễn Thái Bình,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7672034",
            "long" : "106.6984342",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757456,
            "code" : "3673943",
            "name" : "TH Tiến Phát",
            "address" : "100 hàm nghi,P.Bến Nghé,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.77082",
            "long" : "106.70266",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757457,
            "code" : "4439219",
            "name" : "Cô Hồng",
            "address" : "311-312 Chợ Cầu Muối,P. Cầu Ông Lãnh,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.765659",
            "long" : "106.69594",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757458,
            "code" : "4465445",
            "name" : "CH Trí Vĩ",
            "address" : "TK 26\/4 Nguyễn Cảnh Chân,P.Cầu Kho,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.758767",
            "long" : "106.68783",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757459,
            "code" : "4762440",
            "name" : "ECO TRUE MART",
            "address" : "số 7-9 Nguyễn Bỉnh Khiêm,P. Bến Nghé,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.786309",
            "long" : "106.706116",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757460,
            "code" : "4812085",
            "name" : "Căn Tin Bệnh Viện 30\/4",
            "address" : "9 Sư Vạn Hạnh,P. 5,QUẬN 5,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.759548",
            "long" : "106.672585",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757461,
            "code" : "4856758",
            "name" : "Phan Thị Mỹ Hồng",
            "address" : "676\/26 Võ Văn Kiệt,P. 1,QUẬN 5,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.752485",
            "long" : "106.683304",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757462,
            "code" : "2831371",
            "name" : "Trường Trần Đại Nghĩa",
            "address" : "Số 53 Nguyễn Du,Phường Bến Nghé,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.778851",
            "long" : "106.7020135",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757463,
            "code" : "4340641",
            "name" : "Trường THTH Sài Gòn",
            "address" : "220 Đường Trần Bình Trọng,P. 4,Quận 5,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.760928",
            "long" : "106.67986",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757464,
            "code" : "2812759",
            "name" : "THPT Trưng Vương",
            "address" : "3A Nguyễn Bỉnh Khiêm,Phường Bến Nghé,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7856441",
            "long" : "106.7067369",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757466,
            "code" : "2813137",
            "name" : "Nguyen Thi Thuy",
            "address" : "109\/12 Nguyễn Thiện Thuật,Phường 2,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7673468",
            "long" : "106.6802494",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757467,
            "code" : "2813138",
            "name" : "To Thi Kim Thoa",
            "address" : "008 Lô F1 Chung cư Nguyễn Thiệ,Phường 1,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7683159",
            "long" : "106.6773163",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757468,
            "code" : "2813141",
            "name" : "Dang Thi Thuy",
            "address" : "105A Vườn Chuối,Phường 4,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7743104",
            "long" : "106.6826485",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757469,
            "code" : "2813146",
            "name" : "Ngô Ngọc Bích",
            "address" : "376 Cách Mạng Tháng Tám,Phường 10,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.782683",
            "long" : "106.6725999",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757470,
            "code" : "2813148",
            "name" : "Vi Thi Nữ Hanh",
            "address" : "17A Trần Văn Đãng,Phường 9,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7826444",
            "long" : "106.6794872",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757471,
            "code" : "2813149",
            "name" : "Do Thi Thu Nguyet",
            "address" : "91 Nguyễn Thông,Phường 9,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7806314",
            "long" : "106.6799663",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757472,
            "code" : "2813150",
            "name" : "Nha Sach Duc Me",
            "address" : "38 Kỳ Đồng,Phường 9,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7819715",
            "long" : "106.6809753",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757473,
            "code" : "2813151",
            "name" : "Bakery",
            "address" : "1029 Cách Mạng Tháng Tám,Phường 14,Quận Tân Bình,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7910242",
            "long" : "106.6565012",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757474,
            "code" : "2813152",
            "name" : "Trường THCS College",
            "address" : "10 Hồ Xuân Hương,Phường 6,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7760284",
            "long" : "106.6869818",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757475,
            "code" : "2834330",
            "name" : "Đàm Quang Trinh-Trần Văn Đang",
            "address" : "205\/39\/29 Trần Văn Đang,Phường 11,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7863293",
            "long" : "106.6721273",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757476,
            "code" : "2834332",
            "name" : "Vũ Thành Tiến-Nguyễn Thông",
            "address" : "1 Nguyễn Thông,Phường 10,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7818712",
            "long" : "106.6784814",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757477,
            "code" : "3024652",
            "name" : "Nguyễn Thị Tuyết Ngân",
            "address" : "205\/47 Trần Văn Đang,P11,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7861371",
            "long" : "106.6728898",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757478,
            "code" : "4290135",
            "name" : "Chị Mai",
            "address" : "Ga Sài Gòn,1 Nguyễn Thông,Phường 9,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.782439",
            "long" : "106.6774097",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757479,
            "code" : "2812662",
            "name" : "Trường THCS LÊ LỢI-",
            "address" : "282 Võ Thị Sáu,Phường 7,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7787576",
            "long" : "106.6819909",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757480,
            "code" : "4812672",
            "name" : "TH 034",
            "address" : "034 LÔ A, CC NGUYỄN THIỆN THUẬT,P.1,QUẬN 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7674293",
            "long" : "106.6786578",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757481,
            "code" : "3572226",
            "name" : "Trường THCS Thăng Long",
            "address" : "482-484 Nguyễn Thị Minh Khai,Phường 2,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.76682",
            "long" : "106.68289",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757483,
            "code" : "38149000001",
            "name" : "TH Duyên",
            "address" : "115\/4 đường tân mỹ, Phường Tân Thuận Tây, Quận 7, Thành phố Hồ Chí Minh",
            "lat" : "10.749357",
            "long" : "106.720022",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757484,
            "code" : "2812654",
            "name" : "Nguyễn Thị Hồng",
            "address" : "630 Nguyễn Duy Trinh,Phường Bình Trưng Đông,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7888276",
            "long" : "106.7781623",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757485,
            "code" : "2813432",
            "name" : "Le Thi Nhai",
            "address" : "376 Nguyen Thi Dinh,Phường Thạnh Mỹ Lợi,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7823139",
            "long" : "106.7601223",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757486,
            "code" : "2813433",
            "name" : "Ngo Hong Nhung",
            "address" : "39 Đường 3,Phường Thạnh Mỹ Lợi,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7803234",
            "long" : "106.7596631",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757487,
            "code" : "2813446",
            "name" : "Nguyễn Thị Thu Thủy",
            "address" : "40 Đường 28,Phường Cát Lái,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7797805",
            "long" : "106.7708034",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757488,
            "code" : "2813458",
            "name" : "Nguyen Thi Thanh Tuuyen",
            "address" : "11 Đường 6,Phường Bình Trưng Đông,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7844679",
            "long" : "106.7579663",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757489,
            "code" : "2813463",
            "name" : "Lương Thị Nga",
            "address" : "19 Đường 42, Lê Văn Thịnh,Phường Bình Trưng Đông,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7837447",
            "long" : "106.7699262",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757490,
            "code" : "2813465",
            "name" : "Nguyen Van Phung",
            "address" : "99 Le Van Thinh,Phường Bình Trưng Đông,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7840858",
            "long" : "106.7691881",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757491,
            "code" : "3513342",
            "name" : "MEGABOWL",
            "address" : "lầu 2 CBD premium home 125 Đồng Văn Cống,P.Thạnh Mỹ Lợi,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7744536",
            "long" : "106.7618274",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757492,
            "code" : "3991983",
            "name" : "TH Hoa Cà",
            "address" : "52 Đường 18, Nguyễn Thị ĐỊnh,P. Thạnh Mỹ Lợi,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.774423",
            "long" : "106.76486",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757493,
            "code" : "4542618",
            "name" : "CH Gia Hào",
            "address" : "96 Đường 42, Lê Văn Thịnh,P. Bình Trưng Đông,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.784556",
            "long" : "106.77297",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757495,
            "code" : "2813248",
            "name" : "Nguyễn Hải Châu",
            "address" : "145 Trần Đình Xu,Phường Nguyễn Cư Trinh,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7629372",
            "long" : "106.68741778",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757496,
            "code" : "2813251",
            "name" : "Hòang Kim Chi",
            "address" : "212\/C87 Nguyễn Trãi,Phường Nguyễn Cư Trinh,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7654581",
            "long" : "106.68538644",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757497,
            "code" : "2813265",
            "name" : "Lê Mỹ Duyên",
            "address" : "45 Điện Biên Phủ,Phường Đa Kao,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.79137615",
            "long" : "106.6982528",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757498,
            "code" : "2813266",
            "name" : "Đào Thi Diễm Huyền",
            "address" : "17 Trần Khắc Chân,Phường Tân Định,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.79263413",
            "long" : "106.69136952",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757499,
            "code" : "2812979",
            "name" : "Nguyễn Ngọc Phượng",
            "address" : "B1.6 Lý Văn Phức,Phường Tân Định,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.79099746",
            "long" : "106.69312697",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757500,
            "code" : "4159668",
            "name" : "Bảo Tàng CTC Tranh",
            "address" : "28 Võ Văn Tần,P. Võ Thị Sáu,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7796558",
            "long" : "106.69228431",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757501,
            "code" : "4452225",
            "name" : "NaMastle InDia",
            "address" : "121 Nguyễn Hữu Cảnh,P. 22,Quận Bình Thạnh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.79561234",
            "long" : "106.71808348",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757502,
            "code" : "4505731",
            "name" : "MAMA MASALA",
            "address" : "83 Đường Nguyễn Cư Trinh,P.Nguyễn Cư Trinh,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.76411633",
            "long" : "106.69055196",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757503,
            "code" : "4586695",
            "name" : "CH SANHA",
            "address" : "9 Phan Huy Ôn,P.19,Quận Bình Thạnh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.791716",
            "long" : "106.70838908",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757504,
            "code" : "4696441",
            "name" : "BẢO TÀNG",
            "address" : "28 VÕ VĂN TẦN,P. VÕ THỊ SÁU,QUẬN 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.70014",
            "long" : "106.72889",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757505,
            "code" : "2813259",
            "name" : "THPT Nguyễn T.M Khai",
            "address" : "28 Ngô Thời Nhiệm,Phường 6,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7781572",
            "long" : "106.6874851",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757506,
            "code" : "2813267",
            "name" : "THPT Lê Quý Đôn",
            "address" : "110 Nguyễn Thị Minh Khai,Phường 6,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7798914",
            "long" : "106.6935861",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1757507,
            "code" : "4419720",
            "name" : "THPT Bùi Thị Xuân",
            "address" : "73 Bùi Thị Xuân,P. Bến Thành,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.769471",
            "long" : "106.68813",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1760503,
            "code" : "3000353000004",
            "name" : "Loan Lê",
            "address" : "B5 Đường D2, Phường Phú Hữu, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
            "lat" : "10.6852877",
            "long" : "106.7955835",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760504,
            "code" : "2813580",
            "name" : "Nguyen Thanh Hung",
            "address" : "78 Truong Van Thanh,Phường Hiệp Phú,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8499151",
            "long" : "106.7816584",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760505,
            "code" : "2813448",
            "name" : "Nguyễn Thế Sự",
            "address" : "Căn Tin Bệnh Viện Q9,Phường Tăng Nhơn Phú A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8446269",
            "long" : "106.790037",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760506,
            "code" : "2813499",
            "name" : "Trần Thị Thu Thủy",
            "address" : "3C Đường 494,Phường Tăng Nhơn Phú A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8462703",
            "long" : "106.8007555",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760507,
            "code" : "2813536",
            "name" : "Ngô Thị Quý",
            "address" : "C13\/6E Đường 455,Phường Tăng Nhơn Phú A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8469106",
            "long" : "106.7953425",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760508,
            "code" : "2812619",
            "name" : "Luu Thi Thu Nga",
            "address" : "14 Đường 160,Phường Tăng Nhơn Phú A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.839",
            "long" : "106.7918182",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760509,
            "code" : "2812620",
            "name" : "Nguyen Phuong Thao",
            "address" : "84 Làng Tăng Phú, KP4,Phường Tăng Nhơn Phú A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8461997",
            "long" : "106.7987692",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760510,
            "code" : "2812629",
            "name" : "Ngô Thị Hạnh",
            "address" : "51 Làng Tăng Phú,Phường Tăng Nhơn Phú A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8431473",
            "long" : "106.798452",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760511,
            "code" : "3018646",
            "name" : "Lê Thị Trình-3\/25 tổ 17 kp3",
            "address" : "3\/25 tổ 17 kp3,phường Tăng Nhơn Phú A,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8384459",
            "long" : "106.7950147",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760512,
            "code" : "3044433",
            "name" : "Trần Thúy Phượng-46 Lã Xuân Oai",
            "address" : "432 Lê Văn Việt,P, Hiệp Phú,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8440318",
            "long" : "106.7890619",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760513,
            "code" : "4046645",
            "name" : "Nguyễn Hữu Hiệp",
            "address" : "203 Man Thiện,Hiệp Phú,Quận Thủ Đức,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8532167",
            "long" : "106.7906591",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760514,
            "code" : "4094974",
            "name" : "Nguyễn Ngọc Thanh Hằng",
            "address" : "53B Làng Tăng Phú,TNPA,Thủ Đức,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.84331031",
            "long" : "106.79859069",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760515,
            "code" : "4175820",
            "name" : "Trần Thị Nguyên",
            "address" : "364B Võ Văn Hát,Long Trường,Quận Thủ Đức,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.816867",
            "long" : "106.81019",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760516,
            "code" : "4817377",
            "name" : "Trần Thành Nhân",
            "address" : "21 Man Thiên,P. Hiệp Phú,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.845815",
            "long" : "106.786606",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760517,
            "code" : "4860479",
            "name" : "Nhà Hàng PHƯƠNG NAM",
            "address" : "666 Lã Xuân Oai.,P. Long Trường,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8113225",
            "long" : "106.8143576",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760518,
            "code" : "4856239",
            "name" : "BÁCH HÓA TIỆN ÍCH",
            "address" : "T2-1.4 ĐƯỜNG D1, KHU CÔNG NGHỆ CAO,P. TÂN PHÚ,QUẬN THỦ ĐỨC,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8534136",
            "long" : "106.7954423",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760520,
            "code" : "3000353000001",
            "name" : "TH Quốc Phương",
            "address" : "Phạm Phú Thứ, Phường 07, Quận 6, Thành phố Hồ Chí Minh",
            "lat" : "10.685171",
            "long" : "106.7955909",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760521,
            "code" : "2812916",
            "name" : "Nguyen Thi Mong Tra",
            "address" : "302 Dương Bá Trạc,Phường 5,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7445851",
            "long" : "106.689244",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760522,
            "code" : "2812925",
            "name" : "Bui Thi Mui",
            "address" : "119\/81A Đặng Chất,P. 10,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7470102",
            "long" : "106.6855668",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760523,
            "code" : "2812928",
            "name" : "Trần Đinh Long",
            "address" : "157\/79 Dương Bá Trạc,Phường 1,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7470113",
            "long" : "106.6904045",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760524,
            "code" : "2812931",
            "name" : "Trần Thi Ngoc Tâm",
            "address" : "157\/12 Dương Bá Trạc,Phường 1,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7474166",
            "long" : "106.6891169",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760525,
            "code" : "2812953",
            "name" : "Tạ Thị Thanh Bình",
            "address" : "231\/59 Dương Bá Trạc,Phường 6,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.74572943",
            "long" : "106.69032054",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760526,
            "code" : "4011017",
            "name" : "Trịnh Đổ Anh Dũng",
            "address" : "B12\/1 Phạm Thế Hiển,Phường 3,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.748897",
            "long" : "106.6845944",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760527,
            "code" : "4591310",
            "name" : "Trường Bùi Hữu Nghĩa",
            "address" : "389\/34 Tỉnh Lộ 10,P.An Lạc,Quận Bình Tân,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.70336122",
            "long" : "106.7301754",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760528,
            "code" : "2813123",
            "name" : "Pham Van Thanh",
            "address" : "1360 Huỳnh Tấn Phát,Phường Phú Mỹ,Quận 7,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.71265788",
            "long" : "106.73698054",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760529,
            "code" : "3139520",
            "name" : "Trường THPT Tân Phong",
            "address" : "19F Khu Dân Cư Ven Sông Đường,Phường Tân Phong,Quận 7,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.72692702",
            "long" : "106.69316849",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760530,
            "code" : "2813129",
            "name" : "Truong Hoc Sao Viet",
            "address" : "Nguyễn Hữu Thọ,Phường Tân Hưng,Quận 7,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7429363",
            "long" : "106.6997385",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760531,
            "code" : "2812776",
            "name" : "Tiểu học Trần Quang Cơ",
            "address" : "438 Ngô Gia Tự,Phường 14,Quận 10,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.761238",
            "long" : "106.66932",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760532,
            "code" : "2812774",
            "name" : "Tiểu học Lê Thị Riêng",
            "address" : "493 Cách Mạng Tháng 8,Phường 13,Quận 10,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.780095",
            "long" : "106.67196",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760533,
            "code" : "4043788",
            "name" : "A vương CSND",
            "address" : "36 Nguyễn Hữu Thọ,Tân Phong,Quận 7,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7333409",
            "long" : "106.69677545",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760534,
            "code" : "4095392",
            "name" : "Trường Hòa Hưng",
            "address" : "493\/73a Cách Mạng Tháng 8,P.13,Quận 10,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.78175375",
            "long" : "106.67234788",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760535,
            "code" : "4340639",
            "name" : "TrườngTHPT Nguyễn An Ninh",
            "address" : "93 Trần Nhân Tôn,TPHCM,Quận 10,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.761821",
            "long" : "106.6749",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760536,
            "code" : "4432261",
            "name" : "TrườngSươngNguyệtAnh",
            "address" : "249 Hòa Hảo,TPHCM,Quận 10,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7625299",
            "long" : "106.67118707",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760537,
            "code" : "4498447",
            "name" : "Văn Dũng",
            "address" : "1434 Đường  Bảy Hiền,P.11,Quận Tân Bình,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.70013809",
            "long" : "106.72891792",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760538,
            "code" : "4557339",
            "name" : "Trường Nguyễn Văn Tố",
            "address" : "140 Đ.Tam Đảo,P.14,Quận 10,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.77601017",
            "long" : "106.66059727",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760539,
            "code" : "500007000001",
            "name" : "tiên nga",
            "address" : "16 nguyễn Bình, Xã Phú Xuân, Huyện Nhà Bè, Thành phố Hồ Chí Minh",
            "lat" : "10.6783721",
            "long" : "106.7505006",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760540,
            "code" : "500007000005",
            "name" : "yongth market",
            "address" : "92 Lê Văn Thiêm, Phường Tân Phong, Quận 7, Thành phố Hồ Chí Minh",
            "lat" : "10.7367928",
            "long" : "106.7172071",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760542,
            "code" : "4530152",
            "name" : "Đại Lý Sơn Lâm",
            "address" : "172\/26A,An Dương Vương,P.16,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.700146",
            "long" : "106.72888",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760543,
            "code" : "2898039",
            "name" : "Tap Hóa Cô Bằng-",
            "address" : "- 254\/24 Nguyễn Văn Luông - Phường 11 - Quận 6",
            "lat" : "10.7465105",
            "long" : "106.6357622",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760544,
            "code" : "2909525",
            "name" : "Hồ Thúy Vy_I0T6-",
            "address" : "- 21B Nguyễn Văn Luông - Phường 10 - Quận 6",
            "lat" : "10.7346236",
            "long" : "106.633833",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760545,
            "code" : "3137562",
            "name" : "THCS Phú Định - I0T5-",
            "address" : "- 94 Bis Lý Chiêu Hoàng - Phường 10 - Quận 6",
            "lat" : "10.7374572",
            "long" : "106.6301292",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760546,
            "code" : "2897997",
            "name" : "Huynh Thi Hien-",
            "address" : "- 165\/5F Văn Thân - Phường 8 - Quận 6",
            "lat" : "10.7415279",
            "long" : "106.6372226",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760547,
            "code" : "2898028",
            "name" : "Nguyen Thi My Hanh-",
            "address" : "- 721 Pham Van Chi - Phường 7 - Quận 6",
            "lat" : "10.7381344",
            "long" : "106.6352117",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760548,
            "code" : "4028430",
            "name" : "Nguyễn Kế Võ Nghiệp - I0T5-",
            "address" : "- 1005 Lò Gốm - Phường 8 - Quận 6",
            "lat" : "10.7416793",
            "long" : "106.635366",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760549,
            "code" : "2898027",
            "name" : "Dang Ha Huong-",
            "address" : "- 493 Nguyễn Văn Luông - Phường 6 - Quận 6",
            "lat" : "10.753431",
            "long" : "106.6344543",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760550,
            "code" : "3358427",
            "name" : "Trần Minh Phương Dung-I0T6-",
            "address" : "- 27\/18 Kinh Dương Vương - Phường 12 - Quận 6",
            "lat" : "10.751934",
            "long" : "106.63366",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760551,
            "code" : "2909522",
            "name" : "Trần Cẩm Châu_I0T4-",
            "address" : "- 411\/1 Bến Phú Lâm - Phường 9 - Quận 6",
            "lat" : "10.7523368",
            "long" : "106.6406188",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760552,
            "code" : "3398658",
            "name" : "Trường TH Võ Văn Tần-I0T4-Nguyễn Văn Hiền",
            "address" : "- 97 Phạm Đình Hổ - Phường 6 - Quận 6",
            "lat" : "10.7519772",
            "long" : "106.6496696",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760553,
            "code" : "2897987",
            "name" : "Nguyen Ngoc Ly-",
            "address" : "- 182C1 Pham Phu Thu - Phường 12 - Quận 6",
            "lat" : "10.7451764",
            "long" : "106.6434456",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760554,
            "code" : "2897996",
            "name" : "Lệ Thi Hồng-",
            "address" : "- 402 Lê Quang Sung - Phường 9 - Quận 6",
            "lat" : "10.7517735",
            "long" : "106.6418802",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760555,
            "code" : "2897992",
            "name" : "Tra Thanh Vân-",
            "address" : "- 221\/17 Phan Văn Khỏe - Phường 7 - Quận 6",
            "lat" : "10.7481075",
            "long" : "106.6438784",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760556,
            "code" : "4656632",
            "name" : "chị hằng-I0T2-",
            "address" : "- 168A Bình Tiên - Phường 4 - Quận 6",
            "lat" : "10.74342232",
            "long" : "106.64311782",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760557,
            "code" : "4736537",
            "name" : "Đặng Phạm Kim Lợi-I16T3-",
            "address" : "- 116 B1 Lý Chiêu Hoàng - Phường 10 - Quận 6",
            "lat" : "10.7399101",
            "long" : "106.6268087",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760558,
            "code" : "4391976",
            "name" : "Bình Phú",
            "address" : "102 Trần Văn Kiểu,P.10,Quận 6,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.735798",
            "long" : "106.62696",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760560,
            "code" : "3000353000002",
            "name" : "TH Cô Chi",
            "address" : "200a đường 21,phường Phước Long A,q9, Phường Phước Long A, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
            "lat" : "10.6852143",
            "long" : "106.7955638",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760561,
            "code" : "38153000001",
            "name" : "youth market",
            "address" : "nhà số 13, đường số 14 khu B, Phường An Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
            "lat" : "10.7996197",
            "long" : "106.74245",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760562,
            "code" : "2812660",
            "name" : "Nguyen Thi Thu Ha",
            "address" : "85 Đường 3, Tổ 3, KP2,Phường Phước Bình,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8189058",
            "long" : "106.7713837",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760563,
            "code" : "2812661",
            "name" : "Nguyen Thi Le Thu",
            "address" : "78 Ho Ba Phan,Phường Phước Long A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8243223",
            "long" : "106.7644241",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760564,
            "code" : "2813470",
            "name" : "Phạm Thị Hồng Nhi",
            "address" : "93 Đường 18,Phường Phước Bình,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8147781",
            "long" : "106.7713181",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760565,
            "code" : "2813474",
            "name" : "Thach Minh Thang",
            "address" : "59 Đường 6D, KP3,Phường Phước Bình,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8151821",
            "long" : "106.7696198",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760566,
            "code" : "2813480",
            "name" : "Mai Viết Quang",
            "address" : "02 Đặng Văn Bi,Phường Bình Thọ,Thủ Đức,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8391585",
            "long" : "106.7665102",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760567,
            "code" : "2812643",
            "name" : "Tran Thi Le Thuy",
            "address" : "27 Nam Hoa,Phường Phước Long A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8224786",
            "long" : "106.7608716",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760568,
            "code" : "2813589",
            "name" : "Nguyen Duc Rim",
            "address" : "188 Do Xuan Hop,Phường Phước Long A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8284651",
            "long" : "106.7685706",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760569,
            "code" : "2813590",
            "name" : "Phan Thi Phuong",
            "address" : "50 Do Xuan Hop,Phường Phước Long A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8325551",
            "long" : "106.7671406",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760570,
            "code" : "2862303",
            "name" : "Võ Thị Thanh Hoa-79 Đường 109",
            "address" : "79 Đường 109,phường phước long B,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8220993",
            "long" : "106.7762763",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760571,
            "code" : "2893893",
            "name" : "Đinh Thị Lý-66 đường 21",
            "address" : "66 đường 21,phường phước Long A,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.816381",
            "long" : "106.7689358",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760572,
            "code" : "2891450",
            "name" : "Seethai",
            "address" : "344 - 346 Nguyễn Xí,Phường 13,Quận Bình Thạnh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8191907",
            "long" : "106.7730241",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760573,
            "code" : "4561365",
            "name" : "Võ Hoàng Chương",
            "address" : "16D Đường 359,Phước Long B,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.82130078",
            "long" : "106.77449288",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760574,
            "code" : "4745175",
            "name" : "Nguyễn Văn Phúc",
            "address" : "67 Tăng Nhơn Phú,Phước Long B,QUẬN THỦ ĐỨC,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.82803",
            "long" : "106.77212",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760576,
            "code" : "3000353000003",
            "name" : "Hoài Phúc",
            "address" : "168\/25 Vân thân,q6, Phường 06, Quận 6, Thành phố Hồ Chí Minh",
            "lat" : "10.685194",
            "long" : "106.79555",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760577,
            "code" : "2812883",
            "name" : "Đặng Văn Bích",
            "address" : "48\/1 Bến Phú Dinh,Phường 16,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7222569",
            "long" : "106.6277826",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760578,
            "code" : "2812889",
            "name" : "Tran Tong Minh",
            "address" : "80\/45 Đường 41,Phường 2,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7258039",
            "long" : "106.6279303",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760579,
            "code" : "2812892",
            "name" : "Nguyen Xuan Huy",
            "address" : "76\/29\/1 Đường 44,Phường 3,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7205947",
            "long" : "106.6229575",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760580,
            "code" : "3080845",
            "name" : "Nguyễn Văn Trung",
            "address" : "118\/59\/13\/3 Phú Định,phường 16,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7282898",
            "long" : "106.6291674",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760581,
            "code" : "2812836",
            "name" : "Đào Văn Việt",
            "address" : "A5.010 CC E Home3 Hồ Học Lãm,Phường 15,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7147299",
            "long" : "106.61003354",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760582,
            "code" : "4502423",
            "name" : "DasuMart",
            "address" : "79\/25 Phú Định,P.16,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.72988054",
            "long" : "106.63139116",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760583,
            "code" : "2812825",
            "name" : "TẠP HÓA 35",
            "address" : "35 VÕ TRÚ,Phường 9,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7460908",
            "long" : "106.6728364",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760584,
            "code" : "2812850",
            "name" : "Le Thi Kim Lien",
            "address" : "Hẻm 253 - Lưu Hữu Phước,Phường 5,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7258915",
            "long" : "106.6346985",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760585,
            "code" : "2812853",
            "name" : "Do Hong Phi",
            "address" : "30 Lương văn Can,Phường 10,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7348483",
            "long" : "106.6397234",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760586,
            "code" : "2812867",
            "name" : "TẠP HÓA A SON",
            "address" : "127 MỄ CỐC,Phường 15,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7212078",
            "long" : "106.6290839",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760587,
            "code" : "2812873",
            "name" : "Nguyen Thi Thanh Tien",
            "address" : "3K Rạch Cát,Phường 11,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.71635692",
            "long" : "106.62909442",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760588,
            "code" : "3164977",
            "name" : "NGUYỄN HOÀNG KHANH",
            "address" : "145 MỄ CỐC,PHƯỜNG 15,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7187576",
            "long" : "106.6287128",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760589,
            "code" : "3195285",
            "name" : "Nguyen Ngoc Minh",
            "address" : "697-699 Ben Binh Dong,Phuong 13,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.74427963",
            "long" : "106.65249041",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760590,
            "code" : "3695268",
            "name" : "Pham Kim Loan",
            "address" : "102 Hoài Thanh,P. 14,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.737265",
            "long" : "106.64753",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760591,
            "code" : "3998345",
            "name" : "Thạch Thị Duy Tranh",
            "address" : "135k Bến Bình Đông,P14,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.739839",
            "long" : "106.64627",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760592,
            "code" : "4090872",
            "name" : "Võ Thị Bích Thủy",
            "address" : "10 Bình Đông,P15,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.73674024",
            "long" : "106.64075162",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760593,
            "code" : "4561363",
            "name" : "Trường Ngô Gia Tự",
            "address" : "360E Bình Đông,P.15,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.70012599",
            "long" : "106.72894536",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760594,
            "code" : "4765792",
            "name" : "KVC TRẺ EM",
            "address" : "50G BẾN PHÚ ĐỊNH,P16,QUẬN 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7196054",
            "long" : "106.6274871",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1760984,
            "code" : "4716260",
            "name" : "Phạm Ngọc Đoan-",
            "address" : "- 52A Hiệp Bình - Phường Hiệp Bình Phước - Quận Thủ Đức",
            "lat" : "10.846055",
            "long" : "106.7238317",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1760985,
            "code" : "4715755",
            "name" : "Phan Le Dung-",
            "address" : "- 143 QL13 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.831654267396",
            "long" : "106.71403267431",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1760986,
            "code" : "4715764",
            "name" : "Nguyễn Thị Xuyến-",
            "address" : "- 98 Đường số 48 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.8375484",
            "long" : "106.7278605",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1760987,
            "code" : "4715758",
            "name" : "Tran Thi Kim Chi-",
            "address" : "- 521A QL13, KP5 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.847497531223",
            "long" : "106.71834063726",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1760988,
            "code" : "4715753",
            "name" : "Bui Quang Duong-",
            "address" : "- 82 Đường 48, KP6 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.837103083333",
            "long" : "106.7273596",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1760989,
            "code" : "4715752",
            "name" : "Phan Thi Thuy Hong-",
            "address" : "- 61\/24 Đường Số 48 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.838112649518",
            "long" : "106.72630252327",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1760990,
            "code" : "4715754",
            "name" : "Le Tuyet Nhi-",
            "address" : "- 121 QL13 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.829596468258",
            "long" : "106.7140387931",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1760991,
            "code" : "4716078",
            "name" : "Phan Tu-",
            "address" : "- S41 Đường Số 3 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.849198345105",
            "long" : "106.72359801839",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1760992,
            "code" : "4716135",
            "name" : "Huỳnh Thanh Tùng-",
            "address" : "- 17 Đường 9 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.840846005472",
            "long" : "106.72520196213",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1760993,
            "code" : "4716191",
            "name" : "le thi hong tiet-",
            "address" : "- (77)106 Đường số 2 - Phường Hiệp Bình Phước - Quận Thủ Đức",
            "lat" : "10.838629583333",
            "long" : "106.71928605",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1760994,
            "code" : "4716294",
            "name" : "Cao Thị Kim Hồng-",
            "address" : "- 121 Đường 5 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.829701912599",
            "long" : "106.71393753971",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1760995,
            "code" : "4716105",
            "name" : "Nguyễn Văn Đực-",
            "address" : "- 606\/9 QL13 - Phường Hiệp Bình Phước - Quận Thủ Đức",
            "lat" : "10.8511829",
            "long" : "106.7217585",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1760996,
            "code" : "4715757",
            "name" : "Dao Thi Phuong-",
            "address" : "- 52\/6k Đường sô 4 - Phường Hiệp Bình Phước - Quận Thủ Đức",
            "lat" : "10.838829721324",
            "long" : "106.72068069689",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1760997,
            "code" : "4716395",
            "name" : "Trần Thanh Tân-",
            "address" : "- 10 Đường Số 49 - phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.837664343427",
            "long" : "106.73055239963",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1760998,
            "code" : "4716512",
            "name" : "Phạm Thị Thắm-",
            "address" : "- 34 Đường Số 1, Khu Phố 5, Quốc - Phường Hiệp Bình Chánh - Quận Thủ",
            "lat" : "10.835235812711",
            "long" : "106.71178565371",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1760999,
            "code" : "4784190",
            "name" : "Hồ thị kim loan-",
            "address" : "- 36 đường 9. quốc lộ 13 - phường hiệp bình chánh - Thủ Đức",
            "lat" : "10.848111631359",
            "long" : "106.71673265296",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761001,
            "code" : "4715720",
            "name" : "Lê Văn Tây-",
            "address" : "- 91\/8 Đường số 8 - Phường Linh Trung - Quận Thủ Đức",
            "lat" : "10.857731332081",
            "long" : "106.77363672304",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761002,
            "code" : "4715195",
            "name" : "le van tan-",
            "address" : "- 78 duong 7 - Phường Linh Trung - Quận Thủ Đức",
            "lat" : "10.859348368841",
            "long" : "106.7698727456",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761003,
            "code" : "4716118",
            "name" : "Lê Thị Lý-",
            "address" : "- 42 Đường 16 - Phường Linh Trung - Quận Thủ Đức",
            "lat" : "10.861067245724",
            "long" : "106.78187881606",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761004,
            "code" : "4716198",
            "name" : "lê thị lý mai-",
            "address" : "- 65 Đường Số 18 - Phường Linh Trung - Quận Thủ Đức",
            "lat" : "10.873568183753",
            "long" : "106.74629621218",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761005,
            "code" : "4716473",
            "name" : "Đào Danh Bằng-",
            "address" : "- 58 Đường 16 - Phường Linh Trung - Quận Thủ Đức",
            "lat" : "10.861114813025",
            "long" : "106.78303359086",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761006,
            "code" : "4716522",
            "name" : "Huỳnh Quan Đính-",
            "address" : "- 30D đường số 3 - Phường Trường Thọ - Thủ Đức",
            "lat" : "10.839824234146",
            "long" : "106.74380745749",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761007,
            "code" : "4715735",
            "name" : "Nguyen Thi Minh-",
            "address" : "- 9 Nguyen Ba Luat - Phường Bình Thọ - Quận Thủ Đức",
            "lat" : "10.847575860108",
            "long" : "106.76479448574",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761008,
            "code" : "4715734",
            "name" : "Pham Thi Tuyet-",
            "address" : "- 29 Cong Ly - Phường Bình Thọ - Quận Thủ Đức",
            "lat" : "10.873488220396",
            "long" : "106.74628481279",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761009,
            "code" : "4715733",
            "name" : "Lưu Hồng Phứơc-",
            "address" : "- 126 Đặng Văn Bi - Phường Bình Thọ - Quận Thủ Đức",
            "lat" : "10.845760800886",
            "long" : "106.7614827958",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761010,
            "code" : "4715732",
            "name" : "Phan Thị Xí-",
            "address" : "- 171 Thống Nhất - Phường Bình Thọ - Quận Thủ Đức",
            "lat" : "10.849066623497",
            "long" : "106.77190795551",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761011,
            "code" : "4715731",
            "name" : "Huynh Thi Uyen Phuong-",
            "address" : "- 57 Đường 4, KP6 - Phường Trường Thọ - Quận Thủ Đức",
            "lat" : "10.873574386361",
            "long" : "106.74622127796",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761012,
            "code" : "4715730",
            "name" : "Nguyễn Thị Hòang-",
            "address" : "- 211 Đường 2, - Phường Trường Thọ - Quận Thủ Đức",
            "lat" : "10.835809386345",
            "long" : "106.75356424424",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761013,
            "code" : "4716082",
            "name" : "Phạm Thị Thúy-",
            "address" : "- 76A Đường 4 - Phường Trường Thọ - Quận Thủ Đức",
            "lat" : "10.835257689479",
            "long" : "106.75988344486",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761014,
            "code" : "4716376",
            "name" : "Đoàn Văn Châu-",
            "address" : "- 115\/7 Đường Số 11 - Phường Bình Thọ - Quận Thủ Đức",
            "lat" : "10.840921173814",
            "long" : "106.75254240642",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761015,
            "code" : "4715745",
            "name" : "Doan Thi Van Xa-",
            "address" : "- 4 Đường 34 - Phường Linh Đông - Quận Thủ Đức",
            "lat" : "10.839882865558",
            "long" : "106.74381994652",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761016,
            "code" : "4716207",
            "name" : "Phạm Thu Cúc-",
            "address" : "- 54 Đường 11 - Phường Trường Thọ - Quận Thủ Đức",
            "lat" : "10.84426718765",
            "long" : "106.75274432647",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761017,
            "code" : "4716051",
            "name" : "Nguyễn Thị Thu Trang-",
            "address" : "- 18A Đại Lộ Bình Dương - Phường Hiệp Bình Phước - Quận Thủ Đức",
            "lat" : "10.862389993864",
            "long" : "106.74420911829",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761018,
            "code" : "4715765",
            "name" : "Nguyễn Thị Thu Trang-",
            "address" : "- 18 Đại Lộ Bình Dương - Phường Vĩnh Phú - Thị xã Thuận An",
            "lat" : "10.862452355224",
            "long" : "106.74412027011",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761019,
            "code" : "4715717",
            "name" : "Vo Thi Hoa-",
            "address" : "- 50\/22 Dong Hoa, KP Tân Lập - Phường Đông Hòa - Thị xã Dĩ An",
            "lat" : "10.873744622814",
            "long" : "106.7463134789",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761020,
            "code" : "4716339",
            "name" : "Nguyễn Thị Hương-",
            "address" : "- D5 KTX Khu B ĐHQG - Phường Linh Xuân - Quận Thủ Đức",
            "lat" : "10.862449756834",
            "long" : "106.74426779161",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761021,
            "code" : "4716458",
            "name" : "Nguyễn Quốc Công-",
            "address" : "- A4 Kí Túc Xá Khu A - Phường Đông Hòa - Thị xã Dĩ An",
            "lat" : "10.862357052985",
            "long" : "106.74424356791",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761022,
            "code" : "4736202",
            "name" : "Nguyễn Thị Thanh Trà-",
            "address" : "- Lô C KTX Đại Học Quốc Gia Khu B - Phường Linh Trung - Thủ Đức",
            "lat" : "10.862338445159",
            "long" : "106.7442959548",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761024,
            "code" : "4716061",
            "name" : "BUI THI NGA-",
            "address" : "- chung cư mỹ long đương số 18 - phường hiệp bình chánh - Quận Thủ Đứ",
            "lat" : "10.873600705537",
            "long" : "106.74635144892",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761025,
            "code" : "4716341",
            "name" : "Bạch Việt Hải-",
            "address" : "- 249 KVC, KP6 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.829279265293",
            "long" : "106.72160279006",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761026,
            "code" : "4715749",
            "name" : "Ecomart-",
            "address" : "- 13 Hiep Binh - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.838981685239",
            "long" : "106.73219407919",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761027,
            "code" : "4715750",
            "name" : "Pham Tan Khoi-",
            "address" : "- 49 Đường 38 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.842354060161",
            "long" : "106.73422568488",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761028,
            "code" : "4765786",
            "name" : "Võ Ngọc Trang-",
            "address" : "- 62A đường 38 - Phường Hiệp Bình Chánh - Thủ Đức",
            "lat" : "10.842572",
            "long" : "106.736336",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761029,
            "code" : "4784191",
            "name" : "Nguyễn Thị Âu-",
            "address" : "- 549 đường Kha Vạn Cân - phường Hiệp Bình Chánh - Thủ Đức",
            "lat" : "10.839278278882",
            "long" : "106.73557642857",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761030,
            "code" : "4716371",
            "name" : "Nguyễn Thị Thanh Thảo-",
            "address" : "- 2 Đoàn Công Hớn - phường Trường Thọ - Quận Thủ Đức",
            "lat" : "10.851039",
            "long" : "106.75606",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761031,
            "code" : "4715722",
            "name" : "Huynh Van Tho-",
            "address" : "- SỐ 2 HOÀNG DIỆU, KP 1 - Phường Linh Chiểu - Quận Thủ Đức",
            "lat" : "10.860889423649",
            "long" : "106.76122815358",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761032,
            "code" : "4715196",
            "name" : "pham quang nghia-",
            "address" : "- 153\/2a Võ Văn Ngân - Phường Linh Chiểu - Quận Thủ Đức",
            "lat" : "10.851995050917",
            "long" : "106.7628335395",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761033,
            "code" : "4716272",
            "name" : "Vương Thành-",
            "address" : "- 9 Đường Số 1 - Phường Linh Tây - Quận Thủ Đức",
            "lat" : "10.851906295576",
            "long" : "106.75363942981",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761034,
            "code" : "4715766",
            "name" : "Tran Thanh Thuy-",
            "address" : "- F9 Đường Số 23 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.827897330746",
            "long" : "106.72701632604",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761035,
            "code" : "4715698",
            "name" : "Dang Le Phương Lan-",
            "address" : "- 16 DƯỜNG 3 (số 5 duong 25) pha - Phường Hiệp Bình Chánh - Quận Thủ",
            "lat" : "10.831076041805",
            "long" : "106.72842004346",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761036,
            "code" : "4716361",
            "name" : "Nguyễn Văn Nở-",
            "address" : "- 102 Tô Ngọc Vân - phường Linh Tây - Quận Thủ Đức",
            "lat" : "10.852642",
            "long" : "106.7526",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761037,
            "code" : "4716354",
            "name" : "Trần Hoa Phượng-",
            "address" : "- 40 Tô Vĩnh Diện - Phường Linh Tây - Quận Thủ Đức",
            "lat" : "10.85192",
            "long" : "106.76645",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761038,
            "code" : "4768832",
            "name" : "Nguyễn Thị Ngọc Thủy-",
            "address" : "- 10\/1 đường Nguyễn Văn Lịch - phường Linh Tây - Thủ Đức",
            "lat" : "10.8536083",
            "long" : "106.7538783",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761039,
            "code" : "4796280",
            "name" : "Nguyễn Thị Mai Tiên-",
            "address" : "- 56\/7c đường Trần Thị Điệu - phường Phước Long B - Thủ Đức",
            "lat" : "10.873687625873",
            "long" : "106.74630752775",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761041,
            "code" : "4715713",
            "name" : "Le Thi Ngoc Tham-",
            "address" : "- 170 QL1K - Phường Linh Xuân - Quận Thủ Đức",
            "lat" : "10.880596409562",
            "long" : "106.76844287674",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761042,
            "code" : "4715712",
            "name" : "Vu Huu Nghi-",
            "address" : "- 127 Tổ 13 Đường 8, KP1 - Phường Linh Xuân - Quận Thủ Đức",
            "lat" : "10.878441799442",
            "long" : "106.77622413273",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761043,
            "code" : "4715711",
            "name" : "Nguyen Thi Kim Kieu-",
            "address" : "- 24 DUONG 5 - Phường Linh Xuân - Quận Thủ Đức",
            "lat" : "10.880451234999",
            "long" : "106.76741818907",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761044,
            "code" : "4715710",
            "name" : "Nguyen Thi Kim Thu-",
            "address" : "- 113\/6 Đường 11 - Phường Linh Xuân - Quận Thủ Đức",
            "lat" : "10.88638943621",
            "long" : "106.76806812185",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761045,
            "code" : "4715721",
            "name" : "Phạm Thị Tuyết-",
            "address" : "- 31 Đường 5 - Phường Linh Trung - Quận Thủ Đức",
            "lat" : "10.86172429",
            "long" : "106.76499063",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761046,
            "code" : "4715716",
            "name" : "Nguyễn Hồng Dung-",
            "address" : "- 252A QL1K - Phường Linh Xuân - Quận Thủ Đức",
            "lat" : "10.885388385515",
            "long" : "106.77247641618",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761047,
            "code" : "4715714",
            "name" : "Dang Minh Thanh-",
            "address" : "- 561\/24 Quốc Lộ 1A - Phường Linh Xuân - Quận Thủ Đức",
            "lat" : "10.873364796872",
            "long" : "106.76824615347",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761048,
            "code" : "4715709",
            "name" : "Le Thu Phien-",
            "address" : "- 150B Đường Số 8 - Phường Linh Xuân - Quận Thủ Đức",
            "lat" : "10.878907791349",
            "long" : "106.77582213665",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761049,
            "code" : "4715708",
            "name" : "Nguyễn Văn Phụng-",
            "address" : "- 27A Đường 8 - Phường Linh Xuân - Quận Thủ Đức",
            "lat" : "10.880619334067",
            "long" : "106.7733251677",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761050,
            "code" : "4715726",
            "name" : "Nguyễn Đức Bảo-",
            "address" : "- 26\/14 Kha Vạn Cân - Phường An Bình - Thị xã Dĩ An",
            "lat" : "10.869756680923",
            "long" : "106.76300385977",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761051,
            "code" : "4716209",
            "name" : "Võ Thị Thanh Thu-",
            "address" : "- 165 Linh Trung, Linh Trung - Phường Linh Trung - Quận Thủ Đức",
            "lat" : "10.859453435997",
            "long" : "106.78196313801",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761052,
            "code" : "4716293",
            "name" : "Nguyễn Thanh Bình-",
            "address" : "- 23 Đường 1 - Phường Linh Xuân - Quận Thủ Đức",
            "lat" : "10.875629796657",
            "long" : "106.76490973691",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761053,
            "code" : "4716346",
            "name" : "Nguyễn Tuấn Kiệt-",
            "address" : "- Căn tin bờ hồ, TTGDQP, Nguyễn - Phường Đông Hòa - Thị xã Dĩ An",
            "lat" : "10.880560367378",
            "long" : "106.77325040112",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761054,
            "code" : "4736185",
            "name" : "trần văn hiệp-",
            "address" : "- 74 đường 10 - linh trung - Thủ Đức",
            "lat" : "10.8602043",
            "long" : "106.7725696",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761055,
            "code" : "4736517",
            "name" : "nguyễn tuấn kiệt-",
            "address" : "- 56 đường hoàng diệu 2 - phường linh trung - Thủ Đức",
            "lat" : "10.873706778522",
            "long" : "106.74628430987",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761056,
            "code" : "4845954",
            "name" : "Nguyễn Thị Mỹ Linh-",
            "address" : "- số 10 đường Nguyễn Viết Xuân - phường An Bình - Thủ Đức",
            "lat" : "10.868059177893",
            "long" : "106.75034265975",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761057,
            "code" : "4716511",
            "name" : "Phạm Văn Tướng-",
            "address" : "- Đại học Ngân Hàng. đường Hoàng - phường Linh Trung - Quận Thủ Đức",
            "lat" : "10.873653972532",
            "long" : "106.74625011171",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761058,
            "code" : "4768833",
            "name" : "Vũ Bình Định-",
            "address" : "- 269\/7 đường Ngô Chí Quốc - phường Bình Chiểu - Thủ Đức",
            "lat" : "10.880672475333",
            "long" : "106.77325886684",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761060,
            "code" : "35298000001",
            "name" : "Quỳnh Anh",
            "address" : "29\/66 đường số 4.khu phố 6, Phường Trường Thọ, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
            "lat" : "10.862390580597",
            "long" : "106.74420014965",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761061,
            "code" : "4715762",
            "name" : "Nguyen Thi Ngau-",
            "address" : "- 188 Go Dua - Phường Tam Bình - Quận Thủ Đức",
            "lat" : "10.87020813",
            "long" : "106.73912202",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761062,
            "code" : "4715760",
            "name" : "Lam Ngoc Lang-",
            "address" : "- 116 Go Dua - Phường Tam Bình - Quận Thủ Đức",
            "lat" : "10.869154189723",
            "long" : "106.73596643853",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761063,
            "code" : "4715761",
            "name" : "Hồ Tài Thiện-",
            "address" : "- Siêu Thị Mini Đất Xanh - Phường Tam Phú - Quận Thủ Đức",
            "lat" : "10.861060624021",
            "long" : "106.73915617178",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761064,
            "code" : "4715748",
            "name" : "Đặng Minh Châu-",
            "address" : "- 21 Đường 14 - Phường Linh Đông - Quận Thủ Đức",
            "lat" : "10.8534488",
            "long" : "106.7506646",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761065,
            "code" : "4715747",
            "name" : "Lê Thanh Hồng-",
            "address" : "- 232 Linh Đông - Phường Linh Đông - Quận Thủ Đức",
            "lat" : "10.856077172045",
            "long" : "106.74978151207",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761066,
            "code" : "4715746",
            "name" : "Nguyen Dang Huong-",
            "address" : "- 31 Đường 8 - Phường Linh Đông - Quận Thủ Đức",
            "lat" : "10.857589677908",
            "long" : "106.74542583525",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761067,
            "code" : "4715744",
            "name" : "Doan Xuan Bai-",
            "address" : "- 30 Đường 25 - Phường Linh Đông - Quận Thủ Đức",
            "lat" : "10.85757127964",
            "long" : "106.7453296111",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761068,
            "code" : "4715743",
            "name" : "Nguyen Ha Duc-",
            "address" : "- 8 Đường 6 - Phường Linh Đông - Quận Thủ Đức",
            "lat" : "10.858091670099",
            "long" : "106.74587929631",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761069,
            "code" : "4715724",
            "name" : "Nguyen Van Tuoi-",
            "address" : "- 26 Tam Ha - Phường Tam Phú - Quận Thủ Đức",
            "lat" : "10.860372134494",
            "long" : "106.74770898196",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761070,
            "code" : "4715715",
            "name" : "Nguyễn Thị Ánh Ngọc-",
            "address" : "- 167 Phú Châu - Phường Tam Bình - Quận Thủ Đức",
            "lat" : "10.872837533253",
            "long" : "106.74544301825",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761071,
            "code" : "4716129",
            "name" : "Hoàng Thị Ngọc Diệp-",
            "address" : "- 567A Tô Ngọc Vân - Phường Tam Phú - Quận Thủ Đức",
            "lat" : "10.864786212343",
            "long" : "106.74191256064",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761072,
            "code" : "4716333",
            "name" : "Phạm Thị Quyên-",
            "address" : "- 53 Đường 35 - Phường Linh Đông - Quận Thủ Đức",
            "lat" : "10.857348069559",
            "long" : "106.74787469218",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761073,
            "code" : "4716440",
            "name" : "TRẦN THỊ NGỌC BÍCH-",
            "address" : "- 27E Bình Phú - Phường Tam Phú - Quận Thủ Đức",
            "lat" : "10.85302",
            "long" : "106.7390433",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761074,
            "code" : "4736518",
            "name" : "Bùi thị Bình-",
            "address" : "- 165 đường phú châu - phường tam bình - Thủ Đức",
            "lat" : "10.872860583487",
            "long" : "106.74546732577",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761075,
            "code" : "4850670",
            "name" : "Phạm Thị Thoa-",
            "address" : "- 103 đường Gò Dưa - Tam Bình - Thủ Đức",
            "lat" : "10.860968821471",
            "long" : "106.7391266128",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761077,
            "code" : "35298000003",
            "name" : "lê phát",
            "address" : "34 đường tam bình. phường tam phú. thủ đức, Phường Tam Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
            "lat" : "10.850044749687",
            "long" : "106.72928220602",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761078,
            "code" : "35298000002",
            "name" : "ly ly",
            "address" : "số 1 đường gò dưa. tam bình, Phường Bình Chiểu, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
            "lat" : "10.873659462678",
            "long" : "106.74626863572",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761079,
            "code" : "4715737",
            "name" : "Nguyễn Thị Minh Thủy-",
            "address" : "- 22\/29 Bình Chiểu - Phường Bình Chiểu - Quận Thủ Đức",
            "lat" : "10.875535",
            "long" : "106.7355167",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761080,
            "code" : "4715759",
            "name" : "Nguyễn Thị Kim Anh-",
            "address" : "- 34 Đường số 12 - Phường Tam Bình - Quận Thủ Đức",
            "lat" : "10.872818422514",
            "long" : "106.74549138183",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761081,
            "code" : "4715742",
            "name" : "Nguyen Thanh Hai-",
            "address" : "- 1231\/21 Tỉnh Lộ 43 - Phường Bình Chiểu - Quận Thủ Đức",
            "lat" : "10.88690626",
            "long" : "106.72425633",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761082,
            "code" : "4715740",
            "name" : "Dang Hoang An-",
            "address" : "- 29\/1 Dong An - Phường Bình Hòa - Thị xã Thuận An",
            "lat" : "10.891562160115",
            "long" : "106.7249439844",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761083,
            "code" : "4715739",
            "name" : "Nguyễn Thị Kiều Tiên-",
            "address" : "- 108 Ngô Chí Quốc - Phường Bình Chiểu - Quận Thủ Đức",
            "lat" : "10.879850336361",
            "long" : "106.72319912362",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761084,
            "code" : "4715738",
            "name" : "Võ Thị Hường-",
            "address" : "- 1148\/5 TL43 - Phường Bình Chiểu - Quận Thủ Đức",
            "lat" : "10.890759006153",
            "long" : "106.72789173211",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761085,
            "code" : "4715741",
            "name" : "Chu Thanh Tung-",
            "address" : "- 5 Ngo Chi Quoc - Phường Tam Bình - Quận Thủ Đức",
            "lat" : "10.874880831699",
            "long" : "106.73151967126",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761086,
            "code" : "4716352",
            "name" : "Trần Thị Ngọc Thúy-",
            "address" : "- 71 Lê Thị Hoa - Phường Bình Chiểu - Quận Thủ Đức",
            "lat" : "10.873081698093",
            "long" : "106.73594489704",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761087,
            "code" : "4716302",
            "name" : "Nguyễn Thị Phương Thảo-",
            "address" : "- Tòa nhà Stown Phúc An, Đường N - Phường An Bình - Thị xã Dĩ An",
            "lat" : "10.891578462916",
            "long" : "106.72496485534",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761088,
            "code" : "4716249",
            "name" : "Nguyễn Thị Kiều Diễm-",
            "address" : "- 1092\/21\/7\/2 Tỉnh Lộ 43 - Phường Bình Chiểu - Quận Thủ Đức",
            "lat" : "10.889027221138",
            "long" : "106.73016624535",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761089,
            "code" : "4716212",
            "name" : "Âu Văn Hiệp-",
            "address" : "- 218 Quốc Lộ 13 Cũ - Phường Hiệp Bình Phước - Quận Thủ Đức",
            "lat" : "10.873650955046",
            "long" : "106.74622940841",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761090,
            "code" : "4716308",
            "name" : "Lê Thị Châu-",
            "address" : "- 48 Đường 9 - Phường Bình Chiểu - Quận Thủ Đức",
            "lat" : "10.87639",
            "long" : "106.743013",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761091,
            "code" : "4716524",
            "name" : "Nguyễn Thị Hoài-",
            "address" : "- 11 đường số 9 - Tam Bình - Thủ Đức",
            "lat" : "10.8659135",
            "long" : "106.7367947",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761092,
            "code" : "4775891",
            "name" : "Nguyễn thị tuyết mai-",
            "address" : "- 6e\/1 đường Bình Hòa 24 - phường Bình Chiểu - Thủ Đức",
            "lat" : "10.894151330004",
            "long" : "106.73454780142",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761093,
            "code" : "4715725",
            "name" : "Huỳnh Thi Thúy An-",
            "address" : "- 52 Bình Đường 2 - Phường An Bình - Thị xã Dĩ An",
            "lat" : "10.881171491939",
            "long" : "106.75197629268",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761095,
            "code" : "4716260",
            "name" : "Phạm Ngọc Đoan-",
            "address" : "- 52A Hiệp Bình - Phường Hiệp Bình Phước - Quận Thủ Đức",
            "lat" : "10.846055",
            "long" : "106.7238317",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761096,
            "code" : "4715755",
            "name" : "Phan Le Dung-",
            "address" : "- 143 QL13 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.831654267396",
            "long" : "106.71403267431",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761097,
            "code" : "4715764",
            "name" : "Nguyễn Thị Xuyến-",
            "address" : "- 98 Đường số 48 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.8375484",
            "long" : "106.7278605",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761099,
            "code" : "4715753",
            "name" : "Bui Quang Duong-",
            "address" : "- 82 Đường 48, KP6 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.837103083333",
            "long" : "106.7273596",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761100,
            "code" : "4715752",
            "name" : "Phan Thi Thuy Hong-",
            "address" : "- 61\/24 Đường Số 48 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.838112649518",
            "long" : "106.72630252327",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761101,
            "code" : "4715754",
            "name" : "Le Tuyet Nhi-",
            "address" : "- 121 QL13 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.829596468258",
            "long" : "106.7140387931",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761102,
            "code" : "4716078",
            "name" : "Phan Tu-",
            "address" : "- S41 Đường Số 3 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.849198345105",
            "long" : "106.72359801839",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761103,
            "code" : "4716135",
            "name" : "Huỳnh Thanh Tùng-",
            "address" : "- 17 Đường 9 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.840846005472",
            "long" : "106.72520196213",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761104,
            "code" : "4716191",
            "name" : "le thi hong tiet-",
            "address" : "- (77)106 Đường số 2 - Phường Hiệp Bình Phước - Quận Thủ Đức",
            "lat" : "10.838629583333",
            "long" : "106.71928605",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761105,
            "code" : "4716294",
            "name" : "Cao Thị Kim Hồng-",
            "address" : "- 121 Đường 5 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.829701912599",
            "long" : "106.71393753971",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761106,
            "code" : "4716105",
            "name" : "Nguyễn Văn Đực-",
            "address" : "- 606\/9 QL13 - Phường Hiệp Bình Phước - Quận Thủ Đức",
            "lat" : "10.8511829",
            "long" : "106.7217585",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761107,
            "code" : "4715757",
            "name" : "Dao Thi Phuong-",
            "address" : "- 52\/6k Đường sô 4 - Phường Hiệp Bình Phước - Quận Thủ Đức",
            "lat" : "10.838829721324",
            "long" : "106.72068069689",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761108,
            "code" : "4716395",
            "name" : "Trần Thanh Tân-",
            "address" : "- 10 Đường Số 49 - phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.837664343427",
            "long" : "106.73055239963",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761109,
            "code" : "4716512",
            "name" : "Phạm Thị Thắm-",
            "address" : "- 34 Đường Số 1, Khu Phố 5, Quốc - Phường Hiệp Bình Chánh - Quận Thủ",
            "lat" : "10.835235812711",
            "long" : "106.71178565371",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761110,
            "code" : "4784190",
            "name" : "Hồ thị kim loan-",
            "address" : "- 36 đường 9. quốc lộ 13 - phường hiệp bình chánh - Thủ Đức",
            "lat" : "10.848111631359",
            "long" : "106.71673265296",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761112,
            "code" : "4715720",
            "name" : "Lê Văn Tây-",
            "address" : "- 91\/8 Đường số 8 - Phường Linh Trung - Quận Thủ Đức",
            "lat" : "10.857731332081",
            "long" : "106.77363672304",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761113,
            "code" : "4715195",
            "name" : "le van tan-",
            "address" : "- 78 duong 7 - Phường Linh Trung - Quận Thủ Đức",
            "lat" : "10.859348368841",
            "long" : "106.7698727456",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761114,
            "code" : "4716118",
            "name" : "Lê Thị Lý-",
            "address" : "- 42 Đường 16 - Phường Linh Trung - Quận Thủ Đức",
            "lat" : "10.861067245724",
            "long" : "106.78187881606",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761115,
            "code" : "4716198",
            "name" : "lê thị lý mai-",
            "address" : "- 65 Đường Số 18 - Phường Linh Trung - Quận Thủ Đức",
            "lat" : "10.873568183753",
            "long" : "106.74629621218",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761116,
            "code" : "4716473",
            "name" : "Đào Danh Bằng-",
            "address" : "- 58 Đường 16 - Phường Linh Trung - Quận Thủ Đức",
            "lat" : "10.861114813025",
            "long" : "106.78303359086",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761117,
            "code" : "4716522",
            "name" : "Huỳnh Quan Đính-",
            "address" : "- 30D đường số 3 - Phường Trường Thọ - Thủ Đức",
            "lat" : "10.839824234146",
            "long" : "106.74380745749",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761118,
            "code" : "4715735",
            "name" : "Nguyen Thi Minh-",
            "address" : "- 9 Nguyen Ba Luat - Phường Bình Thọ - Quận Thủ Đức",
            "lat" : "10.847575860108",
            "long" : "106.76479448574",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761119,
            "code" : "4715734",
            "name" : "Pham Thi Tuyet-",
            "address" : "- 29 Cong Ly - Phường Bình Thọ - Quận Thủ Đức",
            "lat" : "10.873488220396",
            "long" : "106.74628481279",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761120,
            "code" : "4715733",
            "name" : "Lưu Hồng Phứơc-",
            "address" : "- 126 Đặng Văn Bi - Phường Bình Thọ - Quận Thủ Đức",
            "lat" : "10.845760800886",
            "long" : "106.7614827958",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761121,
            "code" : "4715732",
            "name" : "Phan Thị Xí-",
            "address" : "- 171 Thống Nhất - Phường Bình Thọ - Quận Thủ Đức",
            "lat" : "10.849066623497",
            "long" : "106.77190795551",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761122,
            "code" : "4715731",
            "name" : "Huynh Thi Uyen Phuong-",
            "address" : "- 57 Đường 4, KP6 - Phường Trường Thọ - Quận Thủ Đức",
            "lat" : "10.873574386361",
            "long" : "106.74622127796",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761123,
            "code" : "4715730",
            "name" : "Nguyễn Thị Hòang-",
            "address" : "- 211 Đường 2, - Phường Trường Thọ - Quận Thủ Đức",
            "lat" : "10.835809386345",
            "long" : "106.75356424424",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761124,
            "code" : "4716082",
            "name" : "Phạm Thị Thúy-",
            "address" : "- 76A Đường 4 - Phường Trường Thọ - Quận Thủ Đức",
            "lat" : "10.835257689479",
            "long" : "106.75988344486",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761125,
            "code" : "4716376",
            "name" : "Đoàn Văn Châu-",
            "address" : "- 115\/7 Đường Số 11 - Phường Bình Thọ - Quận Thủ Đức",
            "lat" : "10.840921173814",
            "long" : "106.75254240642",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761126,
            "code" : "4715745",
            "name" : "Doan Thi Van Xa-",
            "address" : "- 4 Đường 34 - Phường Linh Đông - Quận Thủ Đức",
            "lat" : "10.839882865558",
            "long" : "106.74381994652",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761127,
            "code" : "4716207",
            "name" : "Phạm Thu Cúc-",
            "address" : "- 54 Đường 11 - Phường Trường Thọ - Quận Thủ Đức",
            "lat" : "10.84426718765",
            "long" : "106.75274432647",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761128,
            "code" : "4716051",
            "name" : "Nguyễn Thị Thu Trang-",
            "address" : "- 18A Đại Lộ Bình Dương - Phường Hiệp Bình Phước - Quận Thủ Đức",
            "lat" : "10.862389993864",
            "long" : "106.74420911829",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761129,
            "code" : "4715765",
            "name" : "Nguyễn Thị Thu Trang-",
            "address" : "- 18 Đại Lộ Bình Dương - Phường Vĩnh Phú - Thị xã Thuận An",
            "lat" : "10.862452355224",
            "long" : "106.74412027011",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761130,
            "code" : "4715717",
            "name" : "Vo Thi Hoa-",
            "address" : "- 50\/22 Dong Hoa, KP Tân Lập - Phường Đông Hòa - Thị xã Dĩ An",
            "lat" : "10.873744622814",
            "long" : "106.7463134789",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761131,
            "code" : "4716339",
            "name" : "Nguyễn Thị Hương-",
            "address" : "- D5 KTX Khu B ĐHQG - Phường Linh Xuân - Quận Thủ Đức",
            "lat" : "10.862449756834",
            "long" : "106.74426779161",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761132,
            "code" : "4716458",
            "name" : "Nguyễn Quốc Công-",
            "address" : "- A4 Kí Túc Xá Khu A - Phường Đông Hòa - Thị xã Dĩ An",
            "lat" : "10.862357052985",
            "long" : "106.74424356791",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761133,
            "code" : "4736202",
            "name" : "Nguyễn Thị Thanh Trà-",
            "address" : "- Lô C KTX Đại Học Quốc Gia Khu B - Phường Linh Trung - Thủ Đức",
            "lat" : "10.862338445159",
            "long" : "106.7442959548",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761135,
            "code" : "4716061",
            "name" : "BUI THI NGA-",
            "address" : "- chung cư mỹ long đương số 18 - phường hiệp bình chánh - Quận Thủ Đứ",
            "lat" : "10.873600705537",
            "long" : "106.74635144892",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761136,
            "code" : "4716341",
            "name" : "Bạch Việt Hải-",
            "address" : "- 249 KVC, KP6 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.829279265293",
            "long" : "106.72160279006",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761137,
            "code" : "4715749",
            "name" : "Ecomart-",
            "address" : "- 13 Hiep Binh - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.838981685239",
            "long" : "106.73219407919",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761138,
            "code" : "4715750",
            "name" : "Pham Tan Khoi-",
            "address" : "- 49 Đường 38 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.842354060161",
            "long" : "106.73422568488",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761139,
            "code" : "4765786",
            "name" : "Võ Ngọc Trang-",
            "address" : "- 62A đường 38 - Phường Hiệp Bình Chánh - Thủ Đức",
            "lat" : "10.842572",
            "long" : "106.736336",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761140,
            "code" : "4784191",
            "name" : "Nguyễn Thị Âu-",
            "address" : "- 549 đường Kha Vạn Cân - phường Hiệp Bình Chánh - Thủ Đức",
            "lat" : "10.839278278882",
            "long" : "106.73557642857",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761141,
            "code" : "4716371",
            "name" : "Nguyễn Thị Thanh Thảo-",
            "address" : "- 2 Đoàn Công Hớn - phường Trường Thọ - Quận Thủ Đức",
            "lat" : "10.851039",
            "long" : "106.75606",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761142,
            "code" : "4715722",
            "name" : "Huynh Van Tho-",
            "address" : "- SỐ 2 HOÀNG DIỆU, KP 1 - Phường Linh Chiểu - Quận Thủ Đức",
            "lat" : "10.860889423649",
            "long" : "106.76122815358",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761143,
            "code" : "4715196",
            "name" : "pham quang nghia-",
            "address" : "- 153\/2a Võ Văn Ngân - Phường Linh Chiểu - Quận Thủ Đức",
            "lat" : "10.851995050917",
            "long" : "106.7628335395",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761144,
            "code" : "4716272",
            "name" : "Vương Thành-",
            "address" : "- 9 Đường Số 1 - Phường Linh Tây - Quận Thủ Đức",
            "lat" : "10.851906295576",
            "long" : "106.75363942981",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761145,
            "code" : "4715766",
            "name" : "Tran Thanh Thuy-",
            "address" : "- F9 Đường Số 23 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.827897330746",
            "long" : "106.72701632604",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761146,
            "code" : "4715698",
            "name" : "Dang Le Phương Lan-",
            "address" : "- 16 DƯỜNG 3 (số 5 duong 25) pha - Phường Hiệp Bình Chánh - Quận Thủ",
            "lat" : "10.831076041805",
            "long" : "106.72842004346",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761147,
            "code" : "4716361",
            "name" : "Nguyễn Văn Nở-",
            "address" : "- 102 Tô Ngọc Vân - phường Linh Tây - Quận Thủ Đức",
            "lat" : "10.852642",
            "long" : "106.7526",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761148,
            "code" : "4716354",
            "name" : "Trần Hoa Phượng-",
            "address" : "- 40 Tô Vĩnh Diện - Phường Linh Tây - Quận Thủ Đức",
            "lat" : "10.85192",
            "long" : "106.76645",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761149,
            "code" : "4768832",
            "name" : "Nguyễn Thị Ngọc Thủy-",
            "address" : "- 10\/1 đường Nguyễn Văn Lịch - phường Linh Tây - Thủ Đức",
            "lat" : "10.8536083",
            "long" : "106.7538783",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761150,
            "code" : "4796280",
            "name" : "Nguyễn Thị Mai Tiên-",
            "address" : "- 56\/7c đường Trần Thị Điệu - phường Phước Long B - Thủ Đức",
            "lat" : "10.873687625873",
            "long" : "106.74630752775",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761152,
            "code" : "4715713",
            "name" : "Le Thi Ngoc Tham-",
            "address" : "- 170 QL1K - Phường Linh Xuân - Quận Thủ Đức",
            "lat" : "10.880596409562",
            "long" : "106.76844287674",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761153,
            "code" : "4715712",
            "name" : "Vu Huu Nghi-",
            "address" : "- 127 Tổ 13 Đường 8, KP1 - Phường Linh Xuân - Quận Thủ Đức",
            "lat" : "10.878441799442",
            "long" : "106.77622413273",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761154,
            "code" : "4715711",
            "name" : "Nguyen Thi Kim Kieu-",
            "address" : "- 24 DUONG 5 - Phường Linh Xuân - Quận Thủ Đức",
            "lat" : "10.880451234999",
            "long" : "106.76741818907",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761155,
            "code" : "4715710",
            "name" : "Nguyen Thi Kim Thu-",
            "address" : "- 113\/6 Đường 11 - Phường Linh Xuân - Quận Thủ Đức",
            "lat" : "10.88638943621",
            "long" : "106.76806812185",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761156,
            "code" : "4715721",
            "name" : "Phạm Thị Tuyết-",
            "address" : "- 31 Đường 5 - Phường Linh Trung - Quận Thủ Đức",
            "lat" : "10.86172429",
            "long" : "106.76499063",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761157,
            "code" : "4715716",
            "name" : "Nguyễn Hồng Dung-",
            "address" : "- 252A QL1K - Phường Linh Xuân - Quận Thủ Đức",
            "lat" : "10.885388385515",
            "long" : "106.77247641618",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761158,
            "code" : "4715714",
            "name" : "Dang Minh Thanh-",
            "address" : "- 561\/24 Quốc Lộ 1A - Phường Linh Xuân - Quận Thủ Đức",
            "lat" : "10.873364796872",
            "long" : "106.76824615347",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761159,
            "code" : "4715709",
            "name" : "Le Thu Phien-",
            "address" : "- 150B Đường Số 8 - Phường Linh Xuân - Quận Thủ Đức",
            "lat" : "10.878907791349",
            "long" : "106.77582213665",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761160,
            "code" : "4715708",
            "name" : "Nguyễn Văn Phụng-",
            "address" : "- 27A Đường 8 - Phường Linh Xuân - Quận Thủ Đức",
            "lat" : "10.880619334067",
            "long" : "106.7733251677",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761161,
            "code" : "4715726",
            "name" : "Nguyễn Đức Bảo-",
            "address" : "- 26\/14 Kha Vạn Cân - Phường An Bình - Thị xã Dĩ An",
            "lat" : "10.869756680923",
            "long" : "106.76300385977",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761162,
            "code" : "4716209",
            "name" : "Võ Thị Thanh Thu-",
            "address" : "- 165 Linh Trung, Linh Trung - Phường Linh Trung - Quận Thủ Đức",
            "lat" : "10.859453435997",
            "long" : "106.78196313801",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761163,
            "code" : "4716293",
            "name" : "Nguyễn Thanh Bình-",
            "address" : "- 23 Đường 1 - Phường Linh Xuân - Quận Thủ Đức",
            "lat" : "10.875629796657",
            "long" : "106.76490973691",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761164,
            "code" : "4716346",
            "name" : "Nguyễn Tuấn Kiệt-",
            "address" : "- Căn tin bờ hồ, TTGDQP, Nguyễn - Phường Đông Hòa - Thị xã Dĩ An",
            "lat" : "10.880560367378",
            "long" : "106.77325040112",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761165,
            "code" : "4736185",
            "name" : "trần văn hiệp-",
            "address" : "- 74 đường 10 - linh trung - Thủ Đức",
            "lat" : "10.8602043",
            "long" : "106.7725696",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761166,
            "code" : "4736517",
            "name" : "nguyễn tuấn kiệt-",
            "address" : "- 56 đường hoàng diệu 2 - phường linh trung - Thủ Đức",
            "lat" : "10.873706778522",
            "long" : "106.74628430987",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761167,
            "code" : "4845954",
            "name" : "Nguyễn Thị Mỹ Linh-",
            "address" : "- số 10 đường Nguyễn Viết Xuân - phường An Bình - Thủ Đức",
            "lat" : "10.868059177893",
            "long" : "106.75034265975",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761168,
            "code" : "4716511",
            "name" : "Phạm Văn Tướng-",
            "address" : "- Đại học Ngân Hàng. đường Hoàng - phường Linh Trung - Quận Thủ Đức",
            "lat" : "10.873653972532",
            "long" : "106.74625011171",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761169,
            "code" : "4768833",
            "name" : "Vũ Bình Định-",
            "address" : "- 269\/7 đường Ngô Chí Quốc - phường Bình Chiểu - Thủ Đức",
            "lat" : "10.880672475333",
            "long" : "106.77325886684",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761171,
            "code" : "35298000001",
            "name" : "Quỳnh Anh",
            "address" : "29\/66 đường số 4.khu phố 6, Phường Trường Thọ, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
            "lat" : "10.862390580597",
            "long" : "106.74420014965",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761172,
            "code" : "4715762",
            "name" : "Nguyen Thi Ngau-",
            "address" : "- 188 Go Dua - Phường Tam Bình - Quận Thủ Đức",
            "lat" : "10.87020813",
            "long" : "106.73912202",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761173,
            "code" : "4715760",
            "name" : "Lam Ngoc Lang-",
            "address" : "- 116 Go Dua - Phường Tam Bình - Quận Thủ Đức",
            "lat" : "10.869154189723",
            "long" : "106.73596643853",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761174,
            "code" : "4715761",
            "name" : "Hồ Tài Thiện-",
            "address" : "- Siêu Thị Mini Đất Xanh - Phường Tam Phú - Quận Thủ Đức",
            "lat" : "10.861060624021",
            "long" : "106.73915617178",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761175,
            "code" : "4715748",
            "name" : "Đặng Minh Châu-",
            "address" : "- 21 Đường 14 - Phường Linh Đông - Quận Thủ Đức",
            "lat" : "10.8534488",
            "long" : "106.7506646",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761176,
            "code" : "4715747",
            "name" : "Lê Thanh Hồng-",
            "address" : "- 232 Linh Đông - Phường Linh Đông - Quận Thủ Đức",
            "lat" : "10.856077172045",
            "long" : "106.74978151207",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761177,
            "code" : "4715746",
            "name" : "Nguyen Dang Huong-",
            "address" : "- 31 Đường 8 - Phường Linh Đông - Quận Thủ Đức",
            "lat" : "10.857589677908",
            "long" : "106.74542583525",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761178,
            "code" : "4715744",
            "name" : "Doan Xuan Bai-",
            "address" : "- 30 Đường 25 - Phường Linh Đông - Quận Thủ Đức",
            "lat" : "10.85757127964",
            "long" : "106.7453296111",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761179,
            "code" : "4715743",
            "name" : "Nguyen Ha Duc-",
            "address" : "- 8 Đường 6 - Phường Linh Đông - Quận Thủ Đức",
            "lat" : "10.858091670099",
            "long" : "106.74587929631",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761180,
            "code" : "4715724",
            "name" : "Nguyen Van Tuoi-",
            "address" : "- 26 Tam Ha - Phường Tam Phú - Quận Thủ Đức",
            "lat" : "10.860372134494",
            "long" : "106.74770898196",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761181,
            "code" : "4715715",
            "name" : "Nguyễn Thị Ánh Ngọc-",
            "address" : "- 167 Phú Châu - Phường Tam Bình - Quận Thủ Đức",
            "lat" : "10.872837533253",
            "long" : "106.74544301825",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761182,
            "code" : "4716129",
            "name" : "Hoàng Thị Ngọc Diệp-",
            "address" : "- 567A Tô Ngọc Vân - Phường Tam Phú - Quận Thủ Đức",
            "lat" : "10.864786212343",
            "long" : "106.74191256064",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761183,
            "code" : "4716333",
            "name" : "Phạm Thị Quyên-",
            "address" : "- 53 Đường 35 - Phường Linh Đông - Quận Thủ Đức",
            "lat" : "10.857348069559",
            "long" : "106.74787469218",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761184,
            "code" : "4716440",
            "name" : "TRẦN THỊ NGỌC BÍCH-",
            "address" : "- 27E Bình Phú - Phường Tam Phú - Quận Thủ Đức",
            "lat" : "10.85302",
            "long" : "106.7390433",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761185,
            "code" : "4736518",
            "name" : "Bùi thị Bình-",
            "address" : "- 165 đường phú châu - phường tam bình - Thủ Đức",
            "lat" : "10.872860583487",
            "long" : "106.74546732577",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761186,
            "code" : "4850670",
            "name" : "Phạm Thị Thoa-",
            "address" : "- 103 đường Gò Dưa - Tam Bình - Thủ Đức",
            "lat" : "10.860968821471",
            "long" : "106.7391266128",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761188,
            "code" : "35298000003",
            "name" : "lê phát",
            "address" : "34 đường tam bình. phường tam phú. thủ đức, Phường Tam Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
            "lat" : "10.850044749687",
            "long" : "106.72928220602",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761189,
            "code" : "35298000002",
            "name" : "ly ly",
            "address" : "số 1 đường gò dưa. tam bình, Phường Bình Chiểu, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
            "lat" : "10.873659462678",
            "long" : "106.74626863572",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761190,
            "code" : "4715737",
            "name" : "Nguyễn Thị Minh Thủy-",
            "address" : "- 22\/29 Bình Chiểu - Phường Bình Chiểu - Quận Thủ Đức",
            "lat" : "10.875535",
            "long" : "106.7355167",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761191,
            "code" : "4715759",
            "name" : "Nguyễn Thị Kim Anh-",
            "address" : "- 34 Đường số 12 - Phường Tam Bình - Quận Thủ Đức",
            "lat" : "10.872818422514",
            "long" : "106.74549138183",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761192,
            "code" : "4715742",
            "name" : "Nguyen Thanh Hai-",
            "address" : "- 1231\/21 Tỉnh Lộ 43 - Phường Bình Chiểu - Quận Thủ Đức",
            "lat" : "10.88690626",
            "long" : "106.72425633",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761193,
            "code" : "4715740",
            "name" : "Dang Hoang An-",
            "address" : "- 29\/1 Dong An - Phường Bình Hòa - Thị xã Thuận An",
            "lat" : "10.891562160115",
            "long" : "106.7249439844",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761194,
            "code" : "4715739",
            "name" : "Nguyễn Thị Kiều Tiên-",
            "address" : "- 108 Ngô Chí Quốc - Phường Bình Chiểu - Quận Thủ Đức",
            "lat" : "10.879850336361",
            "long" : "106.72319912362",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761195,
            "code" : "4715738",
            "name" : "Võ Thị Hường-",
            "address" : "- 1148\/5 TL43 - Phường Bình Chiểu - Quận Thủ Đức",
            "lat" : "10.890759006153",
            "long" : "106.72789173211",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761196,
            "code" : "4715741",
            "name" : "Chu Thanh Tung-",
            "address" : "- 5 Ngo Chi Quoc - Phường Tam Bình - Quận Thủ Đức",
            "lat" : "10.874880831699",
            "long" : "106.73151967126",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761197,
            "code" : "4716352",
            "name" : "Trần Thị Ngọc Thúy-",
            "address" : "- 71 Lê Thị Hoa - Phường Bình Chiểu - Quận Thủ Đức",
            "lat" : "10.873081698093",
            "long" : "106.73594489704",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761198,
            "code" : "4716302",
            "name" : "Nguyễn Thị Phương Thảo-",
            "address" : "- Tòa nhà Stown Phúc An, Đường N - Phường An Bình - Thị xã Dĩ An",
            "lat" : "10.891578462916",
            "long" : "106.72496485534",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761199,
            "code" : "4716249",
            "name" : "Nguyễn Thị Kiều Diễm-",
            "address" : "- 1092\/21\/7\/2 Tỉnh Lộ 43 - Phường Bình Chiểu - Quận Thủ Đức",
            "lat" : "10.889027221138",
            "long" : "106.73016624535",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761200,
            "code" : "4716212",
            "name" : "Âu Văn Hiệp-",
            "address" : "- 218 Quốc Lộ 13 Cũ - Phường Hiệp Bình Phước - Quận Thủ Đức",
            "lat" : "10.873650955046",
            "long" : "106.74622940841",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761201,
            "code" : "4716308",
            "name" : "Lê Thị Châu-",
            "address" : "- 48 Đường 9 - Phường Bình Chiểu - Quận Thủ Đức",
            "lat" : "10.87639",
            "long" : "106.743013",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761202,
            "code" : "4716524",
            "name" : "Nguyễn Thị Hoài-",
            "address" : "- 11 đường số 9 - Tam Bình - Thủ Đức",
            "lat" : "10.8659135",
            "long" : "106.7367947",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761203,
            "code" : "4775891",
            "name" : "Nguyễn thị tuyết mai-",
            "address" : "- 6e\/1 đường Bình Hòa 24 - phường Bình Chiểu - Thủ Đức",
            "lat" : "10.894151330004",
            "long" : "106.73454780142",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761204,
            "code" : "4715725",
            "name" : "Huỳnh Thi Thúy An-",
            "address" : "- 52 Bình Đường 2 - Phường An Bình - Thị xã Dĩ An",
            "lat" : "10.881171491939",
            "long" : "106.75197629268",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761206,
            "code" : "4716260",
            "name" : "Phạm Ngọc Đoan-",
            "address" : "- 52A Hiệp Bình - Phường Hiệp Bình Phước - Quận Thủ Đức",
            "lat" : "10.846055",
            "long" : "106.7238317",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761207,
            "code" : "4715755",
            "name" : "Phan Le Dung-",
            "address" : "- 143 QL13 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.831654267396",
            "long" : "106.71403267431",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761208,
            "code" : "4715764",
            "name" : "Nguyễn Thị Xuyến-",
            "address" : "- 98 Đường số 48 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.8375484",
            "long" : "106.7278605",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761210,
            "code" : "4715753",
            "name" : "Bui Quang Duong-",
            "address" : "- 82 Đường 48, KP6 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.837103083333",
            "long" : "106.7273596",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761211,
            "code" : "4715752",
            "name" : "Phan Thi Thuy Hong-",
            "address" : "- 61\/24 Đường Số 48 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.838112649518",
            "long" : "106.72630252327",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761212,
            "code" : "4715754",
            "name" : "Le Tuyet Nhi-",
            "address" : "- 121 QL13 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.829596468258",
            "long" : "106.7140387931",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761213,
            "code" : "4716078",
            "name" : "Phan Tu-",
            "address" : "- S41 Đường Số 3 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.849198345105",
            "long" : "106.72359801839",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761214,
            "code" : "4716135",
            "name" : "Huỳnh Thanh Tùng-",
            "address" : "- 17 Đường 9 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.840846005472",
            "long" : "106.72520196213",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761215,
            "code" : "4716191",
            "name" : "le thi hong tiet-",
            "address" : "- (77)106 Đường số 2 - Phường Hiệp Bình Phước - Quận Thủ Đức",
            "lat" : "10.838629583333",
            "long" : "106.71928605",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761216,
            "code" : "4716294",
            "name" : "Cao Thị Kim Hồng-",
            "address" : "- 121 Đường 5 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.829701912599",
            "long" : "106.71393753971",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761217,
            "code" : "4716105",
            "name" : "Nguyễn Văn Đực-",
            "address" : "- 606\/9 QL13 - Phường Hiệp Bình Phước - Quận Thủ Đức",
            "lat" : "10.8511829",
            "long" : "106.7217585",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761218,
            "code" : "4715757",
            "name" : "Dao Thi Phuong-",
            "address" : "- 52\/6k Đường sô 4 - Phường Hiệp Bình Phước - Quận Thủ Đức",
            "lat" : "10.838829721324",
            "long" : "106.72068069689",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761219,
            "code" : "4716395",
            "name" : "Trần Thanh Tân-",
            "address" : "- 10 Đường Số 49 - phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.837664343427",
            "long" : "106.73055239963",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761220,
            "code" : "4716512",
            "name" : "Phạm Thị Thắm-",
            "address" : "- 34 Đường Số 1, Khu Phố 5, Quốc - Phường Hiệp Bình Chánh - Quận Thủ",
            "lat" : "10.835235812711",
            "long" : "106.71178565371",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761221,
            "code" : "4784190",
            "name" : "Hồ thị kim loan-",
            "address" : "- 36 đường 9. quốc lộ 13 - phường hiệp bình chánh - Thủ Đức",
            "lat" : "10.848111631359",
            "long" : "106.71673265296",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761223,
            "code" : "4715720",
            "name" : "Lê Văn Tây-",
            "address" : "- 91\/8 Đường số 8 - Phường Linh Trung - Quận Thủ Đức",
            "lat" : "10.857731332081",
            "long" : "106.77363672304",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761224,
            "code" : "4715195",
            "name" : "le van tan-",
            "address" : "- 78 duong 7 - Phường Linh Trung - Quận Thủ Đức",
            "lat" : "10.859348368841",
            "long" : "106.7698727456",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761225,
            "code" : "4716118",
            "name" : "Lê Thị Lý-",
            "address" : "- 42 Đường 16 - Phường Linh Trung - Quận Thủ Đức",
            "lat" : "10.861067245724",
            "long" : "106.78187881606",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761226,
            "code" : "4716198",
            "name" : "lê thị lý mai-",
            "address" : "- 65 Đường Số 18 - Phường Linh Trung - Quận Thủ Đức",
            "lat" : "10.873568183753",
            "long" : "106.74629621218",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761227,
            "code" : "4716473",
            "name" : "Đào Danh Bằng-",
            "address" : "- 58 Đường 16 - Phường Linh Trung - Quận Thủ Đức",
            "lat" : "10.861114813025",
            "long" : "106.78303359086",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761228,
            "code" : "4716522",
            "name" : "Huỳnh Quan Đính-",
            "address" : "- 30D đường số 3 - Phường Trường Thọ - Thủ Đức",
            "lat" : "10.839824234146",
            "long" : "106.74380745749",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761229,
            "code" : "4715735",
            "name" : "Nguyen Thi Minh-",
            "address" : "- 9 Nguyen Ba Luat - Phường Bình Thọ - Quận Thủ Đức",
            "lat" : "10.847575860108",
            "long" : "106.76479448574",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761230,
            "code" : "4715734",
            "name" : "Pham Thi Tuyet-",
            "address" : "- 29 Cong Ly - Phường Bình Thọ - Quận Thủ Đức",
            "lat" : "10.873488220396",
            "long" : "106.74628481279",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761231,
            "code" : "4715733",
            "name" : "Lưu Hồng Phứơc-",
            "address" : "- 126 Đặng Văn Bi - Phường Bình Thọ - Quận Thủ Đức",
            "lat" : "10.845760800886",
            "long" : "106.7614827958",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761232,
            "code" : "4715732",
            "name" : "Phan Thị Xí-",
            "address" : "- 171 Thống Nhất - Phường Bình Thọ - Quận Thủ Đức",
            "lat" : "10.849066623497",
            "long" : "106.77190795551",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761233,
            "code" : "4715731",
            "name" : "Huynh Thi Uyen Phuong-",
            "address" : "- 57 Đường 4, KP6 - Phường Trường Thọ - Quận Thủ Đức",
            "lat" : "10.873574386361",
            "long" : "106.74622127796",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761234,
            "code" : "4715730",
            "name" : "Nguyễn Thị Hòang-",
            "address" : "- 211 Đường 2, - Phường Trường Thọ - Quận Thủ Đức",
            "lat" : "10.835809386345",
            "long" : "106.75356424424",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761235,
            "code" : "4716082",
            "name" : "Phạm Thị Thúy-",
            "address" : "- 76A Đường 4 - Phường Trường Thọ - Quận Thủ Đức",
            "lat" : "10.835257689479",
            "long" : "106.75988344486",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761236,
            "code" : "4716376",
            "name" : "Đoàn Văn Châu-",
            "address" : "- 115\/7 Đường Số 11 - Phường Bình Thọ - Quận Thủ Đức",
            "lat" : "10.840921173814",
            "long" : "106.75254240642",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761237,
            "code" : "4715745",
            "name" : "Doan Thi Van Xa-",
            "address" : "- 4 Đường 34 - Phường Linh Đông - Quận Thủ Đức",
            "lat" : "10.839882865558",
            "long" : "106.74381994652",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761238,
            "code" : "4716207",
            "name" : "Phạm Thu Cúc-",
            "address" : "- 54 Đường 11 - Phường Trường Thọ - Quận Thủ Đức",
            "lat" : "10.84426718765",
            "long" : "106.75274432647",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761239,
            "code" : "4716051",
            "name" : "Nguyễn Thị Thu Trang-",
            "address" : "- 18A Đại Lộ Bình Dương - Phường Hiệp Bình Phước - Quận Thủ Đức",
            "lat" : "10.862389993864",
            "long" : "106.74420911829",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761240,
            "code" : "4715765",
            "name" : "Nguyễn Thị Thu Trang-",
            "address" : "- 18 Đại Lộ Bình Dương - Phường Vĩnh Phú - Thị xã Thuận An",
            "lat" : "10.862452355224",
            "long" : "106.74412027011",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761241,
            "code" : "4715717",
            "name" : "Vo Thi Hoa-",
            "address" : "- 50\/22 Dong Hoa, KP Tân Lập - Phường Đông Hòa - Thị xã Dĩ An",
            "lat" : "10.873744622814",
            "long" : "106.7463134789",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761242,
            "code" : "4716339",
            "name" : "Nguyễn Thị Hương-",
            "address" : "- D5 KTX Khu B ĐHQG - Phường Linh Xuân - Quận Thủ Đức",
            "lat" : "10.862449756834",
            "long" : "106.74426779161",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761243,
            "code" : "4716458",
            "name" : "Nguyễn Quốc Công-",
            "address" : "- A4 Kí Túc Xá Khu A - Phường Đông Hòa - Thị xã Dĩ An",
            "lat" : "10.862357052985",
            "long" : "106.74424356791",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761244,
            "code" : "4736202",
            "name" : "Nguyễn Thị Thanh Trà-",
            "address" : "- Lô C KTX Đại Học Quốc Gia Khu B - Phường Linh Trung - Thủ Đức",
            "lat" : "10.862338445159",
            "long" : "106.7442959548",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761246,
            "code" : "4716061",
            "name" : "BUI THI NGA-",
            "address" : "- chung cư mỹ long đương số 18 - phường hiệp bình chánh - Quận Thủ Đứ",
            "lat" : "10.873600705537",
            "long" : "106.74635144892",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761247,
            "code" : "4716341",
            "name" : "Bạch Việt Hải-",
            "address" : "- 249 KVC, KP6 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.829279265293",
            "long" : "106.72160279006",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761248,
            "code" : "4715749",
            "name" : "Ecomart-",
            "address" : "- 13 Hiep Binh - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.838981685239",
            "long" : "106.73219407919",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761249,
            "code" : "4715750",
            "name" : "Pham Tan Khoi-",
            "address" : "- 49 Đường 38 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.842354060161",
            "long" : "106.73422568488",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761250,
            "code" : "4765786",
            "name" : "Võ Ngọc Trang-",
            "address" : "- 62A đường 38 - Phường Hiệp Bình Chánh - Thủ Đức",
            "lat" : "10.842572",
            "long" : "106.736336",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761251,
            "code" : "4784191",
            "name" : "Nguyễn Thị Âu-",
            "address" : "- 549 đường Kha Vạn Cân - phường Hiệp Bình Chánh - Thủ Đức",
            "lat" : "10.839278278882",
            "long" : "106.73557642857",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761252,
            "code" : "4716371",
            "name" : "Nguyễn Thị Thanh Thảo-",
            "address" : "- 2 Đoàn Công Hớn - phường Trường Thọ - Quận Thủ Đức",
            "lat" : "10.851039",
            "long" : "106.75606",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761253,
            "code" : "4715722",
            "name" : "Huynh Van Tho-",
            "address" : "- SỐ 2 HOÀNG DIỆU, KP 1 - Phường Linh Chiểu - Quận Thủ Đức",
            "lat" : "10.860889423649",
            "long" : "106.76122815358",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761254,
            "code" : "4715196",
            "name" : "pham quang nghia-",
            "address" : "- 153\/2a Võ Văn Ngân - Phường Linh Chiểu - Quận Thủ Đức",
            "lat" : "10.851995050917",
            "long" : "106.7628335395",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761255,
            "code" : "4716272",
            "name" : "Vương Thành-",
            "address" : "- 9 Đường Số 1 - Phường Linh Tây - Quận Thủ Đức",
            "lat" : "10.851906295576",
            "long" : "106.75363942981",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761256,
            "code" : "4715766",
            "name" : "Tran Thanh Thuy-",
            "address" : "- F9 Đường Số 23 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.827897330746",
            "long" : "106.72701632604",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761257,
            "code" : "4715698",
            "name" : "Dang Le Phương Lan-",
            "address" : "- 16 DƯỜNG 3 (số 5 duong 25) pha - Phường Hiệp Bình Chánh - Quận Thủ",
            "lat" : "10.831076041805",
            "long" : "106.72842004346",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761258,
            "code" : "4716361",
            "name" : "Nguyễn Văn Nở-",
            "address" : "- 102 Tô Ngọc Vân - phường Linh Tây - Quận Thủ Đức",
            "lat" : "10.852642",
            "long" : "106.7526",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761259,
            "code" : "4716354",
            "name" : "Trần Hoa Phượng-",
            "address" : "- 40 Tô Vĩnh Diện - Phường Linh Tây - Quận Thủ Đức",
            "lat" : "10.85192",
            "long" : "106.76645",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761260,
            "code" : "4768832",
            "name" : "Nguyễn Thị Ngọc Thủy-",
            "address" : "- 10\/1 đường Nguyễn Văn Lịch - phường Linh Tây - Thủ Đức",
            "lat" : "10.8536083",
            "long" : "106.7538783",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761261,
            "code" : "4796280",
            "name" : "Nguyễn Thị Mai Tiên-",
            "address" : "- 56\/7c đường Trần Thị Điệu - phường Phước Long B - Thủ Đức",
            "lat" : "10.873687625873",
            "long" : "106.74630752775",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761263,
            "code" : "4715713",
            "name" : "Le Thi Ngoc Tham-",
            "address" : "- 170 QL1K - Phường Linh Xuân - Quận Thủ Đức",
            "lat" : "10.880596409562",
            "long" : "106.76844287674",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761264,
            "code" : "4715712",
            "name" : "Vu Huu Nghi-",
            "address" : "- 127 Tổ 13 Đường 8, KP1 - Phường Linh Xuân - Quận Thủ Đức",
            "lat" : "10.878441799442",
            "long" : "106.77622413273",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761265,
            "code" : "4715711",
            "name" : "Nguyen Thi Kim Kieu-",
            "address" : "- 24 DUONG 5 - Phường Linh Xuân - Quận Thủ Đức",
            "lat" : "10.880451234999",
            "long" : "106.76741818907",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761266,
            "code" : "4715710",
            "name" : "Nguyen Thi Kim Thu-",
            "address" : "- 113\/6 Đường 11 - Phường Linh Xuân - Quận Thủ Đức",
            "lat" : "10.88638943621",
            "long" : "106.76806812185",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761267,
            "code" : "4715721",
            "name" : "Phạm Thị Tuyết-",
            "address" : "- 31 Đường 5 - Phường Linh Trung - Quận Thủ Đức",
            "lat" : "10.86172429",
            "long" : "106.76499063",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761268,
            "code" : "4715716",
            "name" : "Nguyễn Hồng Dung-",
            "address" : "- 252A QL1K - Phường Linh Xuân - Quận Thủ Đức",
            "lat" : "10.885388385515",
            "long" : "106.77247641618",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761269,
            "code" : "4715714",
            "name" : "Dang Minh Thanh-",
            "address" : "- 561\/24 Quốc Lộ 1A - Phường Linh Xuân - Quận Thủ Đức",
            "lat" : "10.873364796872",
            "long" : "106.76824615347",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761270,
            "code" : "4715709",
            "name" : "Le Thu Phien-",
            "address" : "- 150B Đường Số 8 - Phường Linh Xuân - Quận Thủ Đức",
            "lat" : "10.878907791349",
            "long" : "106.77582213665",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761271,
            "code" : "4715708",
            "name" : "Nguyễn Văn Phụng-",
            "address" : "- 27A Đường 8 - Phường Linh Xuân - Quận Thủ Đức",
            "lat" : "10.880619334067",
            "long" : "106.7733251677",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761272,
            "code" : "4715726",
            "name" : "Nguyễn Đức Bảo-",
            "address" : "- 26\/14 Kha Vạn Cân - Phường An Bình - Thị xã Dĩ An",
            "lat" : "10.869756680923",
            "long" : "106.76300385977",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761273,
            "code" : "4716209",
            "name" : "Võ Thị Thanh Thu-",
            "address" : "- 165 Linh Trung, Linh Trung - Phường Linh Trung - Quận Thủ Đức",
            "lat" : "10.859453435997",
            "long" : "106.78196313801",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761274,
            "code" : "4716293",
            "name" : "Nguyễn Thanh Bình-",
            "address" : "- 23 Đường 1 - Phường Linh Xuân - Quận Thủ Đức",
            "lat" : "10.875629796657",
            "long" : "106.76490973691",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761275,
            "code" : "4716346",
            "name" : "Nguyễn Tuấn Kiệt-",
            "address" : "- Căn tin bờ hồ, TTGDQP, Nguyễn - Phường Đông Hòa - Thị xã Dĩ An",
            "lat" : "10.880560367378",
            "long" : "106.77325040112",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761276,
            "code" : "4736185",
            "name" : "trần văn hiệp-",
            "address" : "- 74 đường 10 - linh trung - Thủ Đức",
            "lat" : "10.8602043",
            "long" : "106.7725696",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761277,
            "code" : "4736517",
            "name" : "nguyễn tuấn kiệt-",
            "address" : "- 56 đường hoàng diệu 2 - phường linh trung - Thủ Đức",
            "lat" : "10.873706778522",
            "long" : "106.74628430987",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761278,
            "code" : "4845954",
            "name" : "Nguyễn Thị Mỹ Linh-",
            "address" : "- số 10 đường Nguyễn Viết Xuân - phường An Bình - Thủ Đức",
            "lat" : "10.868059177893",
            "long" : "106.75034265975",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761279,
            "code" : "4716511",
            "name" : "Phạm Văn Tướng-",
            "address" : "- Đại học Ngân Hàng. đường Hoàng - phường Linh Trung - Quận Thủ Đức",
            "lat" : "10.873653972532",
            "long" : "106.74625011171",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761280,
            "code" : "4768833",
            "name" : "Vũ Bình Định-",
            "address" : "- 269\/7 đường Ngô Chí Quốc - phường Bình Chiểu - Thủ Đức",
            "lat" : "10.880672475333",
            "long" : "106.77325886684",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761282,
            "code" : "35298000001",
            "name" : "Quỳnh Anh",
            "address" : "29\/66 đường số 4.khu phố 6, Phường Trường Thọ, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
            "lat" : "10.862390580597",
            "long" : "106.74420014965",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761283,
            "code" : "4715762",
            "name" : "Nguyen Thi Ngau-",
            "address" : "- 188 Go Dua - Phường Tam Bình - Quận Thủ Đức",
            "lat" : "10.87020813",
            "long" : "106.73912202",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761284,
            "code" : "4715760",
            "name" : "Lam Ngoc Lang-",
            "address" : "- 116 Go Dua - Phường Tam Bình - Quận Thủ Đức",
            "lat" : "10.869154189723",
            "long" : "106.73596643853",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761285,
            "code" : "4715761",
            "name" : "Hồ Tài Thiện-",
            "address" : "- Siêu Thị Mini Đất Xanh - Phường Tam Phú - Quận Thủ Đức",
            "lat" : "10.861060624021",
            "long" : "106.73915617178",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761286,
            "code" : "4715748",
            "name" : "Đặng Minh Châu-",
            "address" : "- 21 Đường 14 - Phường Linh Đông - Quận Thủ Đức",
            "lat" : "10.8534488",
            "long" : "106.7506646",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761287,
            "code" : "4715747",
            "name" : "Lê Thanh Hồng-",
            "address" : "- 232 Linh Đông - Phường Linh Đông - Quận Thủ Đức",
            "lat" : "10.856077172045",
            "long" : "106.74978151207",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761288,
            "code" : "4715746",
            "name" : "Nguyen Dang Huong-",
            "address" : "- 31 Đường 8 - Phường Linh Đông - Quận Thủ Đức",
            "lat" : "10.857589677908",
            "long" : "106.74542583525",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761289,
            "code" : "4715744",
            "name" : "Doan Xuan Bai-",
            "address" : "- 30 Đường 25 - Phường Linh Đông - Quận Thủ Đức",
            "lat" : "10.85757127964",
            "long" : "106.7453296111",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761290,
            "code" : "4715743",
            "name" : "Nguyen Ha Duc-",
            "address" : "- 8 Đường 6 - Phường Linh Đông - Quận Thủ Đức",
            "lat" : "10.858091670099",
            "long" : "106.74587929631",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761291,
            "code" : "4715724",
            "name" : "Nguyen Van Tuoi-",
            "address" : "- 26 Tam Ha - Phường Tam Phú - Quận Thủ Đức",
            "lat" : "10.860372134494",
            "long" : "106.74770898196",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761292,
            "code" : "4715715",
            "name" : "Nguyễn Thị Ánh Ngọc-",
            "address" : "- 167 Phú Châu - Phường Tam Bình - Quận Thủ Đức",
            "lat" : "10.872837533253",
            "long" : "106.74544301825",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761293,
            "code" : "4716129",
            "name" : "Hoàng Thị Ngọc Diệp-",
            "address" : "- 567A Tô Ngọc Vân - Phường Tam Phú - Quận Thủ Đức",
            "lat" : "10.864786212343",
            "long" : "106.74191256064",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761294,
            "code" : "4716333",
            "name" : "Phạm Thị Quyên-",
            "address" : "- 53 Đường 35 - Phường Linh Đông - Quận Thủ Đức",
            "lat" : "10.857348069559",
            "long" : "106.74787469218",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761295,
            "code" : "4716440",
            "name" : "TRẦN THỊ NGỌC BÍCH-",
            "address" : "- 27E Bình Phú - Phường Tam Phú - Quận Thủ Đức",
            "lat" : "10.85302",
            "long" : "106.7390433",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761296,
            "code" : "4736518",
            "name" : "Bùi thị Bình-",
            "address" : "- 165 đường phú châu - phường tam bình - Thủ Đức",
            "lat" : "10.872860583487",
            "long" : "106.74546732577",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761297,
            "code" : "4850670",
            "name" : "Phạm Thị Thoa-",
            "address" : "- 103 đường Gò Dưa - Tam Bình - Thủ Đức",
            "lat" : "10.860968821471",
            "long" : "106.7391266128",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761299,
            "code" : "35298000003",
            "name" : "lê phát",
            "address" : "34 đường tam bình. phường tam phú. thủ đức, Phường Tam Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
            "lat" : "10.850044749687",
            "long" : "106.72928220602",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761300,
            "code" : "35298000002",
            "name" : "ly ly",
            "address" : "số 1 đường gò dưa. tam bình, Phường Bình Chiểu, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
            "lat" : "10.873659462678",
            "long" : "106.74626863572",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761301,
            "code" : "4715737",
            "name" : "Nguyễn Thị Minh Thủy-",
            "address" : "- 22\/29 Bình Chiểu - Phường Bình Chiểu - Quận Thủ Đức",
            "lat" : "10.875535",
            "long" : "106.7355167",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761302,
            "code" : "4715759",
            "name" : "Nguyễn Thị Kim Anh-",
            "address" : "- 34 Đường số 12 - Phường Tam Bình - Quận Thủ Đức",
            "lat" : "10.872818422514",
            "long" : "106.74549138183",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761303,
            "code" : "4715742",
            "name" : "Nguyen Thanh Hai-",
            "address" : "- 1231\/21 Tỉnh Lộ 43 - Phường Bình Chiểu - Quận Thủ Đức",
            "lat" : "10.88690626",
            "long" : "106.72425633",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761304,
            "code" : "4715740",
            "name" : "Dang Hoang An-",
            "address" : "- 29\/1 Dong An - Phường Bình Hòa - Thị xã Thuận An",
            "lat" : "10.891562160115",
            "long" : "106.7249439844",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761305,
            "code" : "4715739",
            "name" : "Nguyễn Thị Kiều Tiên-",
            "address" : "- 108 Ngô Chí Quốc - Phường Bình Chiểu - Quận Thủ Đức",
            "lat" : "10.879850336361",
            "long" : "106.72319912362",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761306,
            "code" : "4715738",
            "name" : "Võ Thị Hường-",
            "address" : "- 1148\/5 TL43 - Phường Bình Chiểu - Quận Thủ Đức",
            "lat" : "10.890759006153",
            "long" : "106.72789173211",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761307,
            "code" : "4715741",
            "name" : "Chu Thanh Tung-",
            "address" : "- 5 Ngo Chi Quoc - Phường Tam Bình - Quận Thủ Đức",
            "lat" : "10.874880831699",
            "long" : "106.73151967126",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761308,
            "code" : "4716352",
            "name" : "Trần Thị Ngọc Thúy-",
            "address" : "- 71 Lê Thị Hoa - Phường Bình Chiểu - Quận Thủ Đức",
            "lat" : "10.873081698093",
            "long" : "106.73594489704",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761309,
            "code" : "4716302",
            "name" : "Nguyễn Thị Phương Thảo-",
            "address" : "- Tòa nhà Stown Phúc An, Đường N - Phường An Bình - Thị xã Dĩ An",
            "lat" : "10.891578462916",
            "long" : "106.72496485534",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761310,
            "code" : "4716249",
            "name" : "Nguyễn Thị Kiều Diễm-",
            "address" : "- 1092\/21\/7\/2 Tỉnh Lộ 43 - Phường Bình Chiểu - Quận Thủ Đức",
            "lat" : "10.889027221138",
            "long" : "106.73016624535",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761311,
            "code" : "4716212",
            "name" : "Âu Văn Hiệp-",
            "address" : "- 218 Quốc Lộ 13 Cũ - Phường Hiệp Bình Phước - Quận Thủ Đức",
            "lat" : "10.873650955046",
            "long" : "106.74622940841",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761312,
            "code" : "4716308",
            "name" : "Lê Thị Châu-",
            "address" : "- 48 Đường 9 - Phường Bình Chiểu - Quận Thủ Đức",
            "lat" : "10.87639",
            "long" : "106.743013",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761313,
            "code" : "4716524",
            "name" : "Nguyễn Thị Hoài-",
            "address" : "- 11 đường số 9 - Tam Bình - Thủ Đức",
            "lat" : "10.8659135",
            "long" : "106.7367947",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761314,
            "code" : "4775891",
            "name" : "Nguyễn thị tuyết mai-",
            "address" : "- 6e\/1 đường Bình Hòa 24 - phường Bình Chiểu - Thủ Đức",
            "lat" : "10.894151330004",
            "long" : "106.73454780142",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761315,
            "code" : "4715725",
            "name" : "Huỳnh Thi Thúy An-",
            "address" : "- 52 Bình Đường 2 - Phường An Bình - Thị xã Dĩ An",
            "lat" : "10.881171491939",
            "long" : "106.75197629268",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761317,
            "code" : "4716260",
            "name" : "Phạm Ngọc Đoan-",
            "address" : "- 52A Hiệp Bình - Phường Hiệp Bình Phước - Quận Thủ Đức",
            "lat" : "10.846055",
            "long" : "106.7238317",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761318,
            "code" : "4715755",
            "name" : "Phan Le Dung-",
            "address" : "- 143 QL13 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.831654267396",
            "long" : "106.71403267431",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761319,
            "code" : "4715764",
            "name" : "Nguyễn Thị Xuyến-",
            "address" : "- 98 Đường số 48 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.8375484",
            "long" : "106.7278605",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761321,
            "code" : "4715753",
            "name" : "Bui Quang Duong-",
            "address" : "- 82 Đường 48, KP6 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.837103083333",
            "long" : "106.7273596",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761322,
            "code" : "4715752",
            "name" : "Phan Thi Thuy Hong-",
            "address" : "- 61\/24 Đường Số 48 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.838112649518",
            "long" : "106.72630252327",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761323,
            "code" : "4715754",
            "name" : "Le Tuyet Nhi-",
            "address" : "- 121 QL13 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.829596468258",
            "long" : "106.7140387931",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761324,
            "code" : "4716078",
            "name" : "Phan Tu-",
            "address" : "- S41 Đường Số 3 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.849198345105",
            "long" : "106.72359801839",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761325,
            "code" : "4716135",
            "name" : "Huỳnh Thanh Tùng-",
            "address" : "- 17 Đường 9 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.840846005472",
            "long" : "106.72520196213",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761326,
            "code" : "4716191",
            "name" : "le thi hong tiet-",
            "address" : "- (77)106 Đường số 2 - Phường Hiệp Bình Phước - Quận Thủ Đức",
            "lat" : "10.838629583333",
            "long" : "106.71928605",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761327,
            "code" : "4716294",
            "name" : "Cao Thị Kim Hồng-",
            "address" : "- 121 Đường 5 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.829701912599",
            "long" : "106.71393753971",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761328,
            "code" : "4716105",
            "name" : "Nguyễn Văn Đực-",
            "address" : "- 606\/9 QL13 - Phường Hiệp Bình Phước - Quận Thủ Đức",
            "lat" : "10.8511829",
            "long" : "106.7217585",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761329,
            "code" : "4715757",
            "name" : "Dao Thi Phuong-",
            "address" : "- 52\/6k Đường sô 4 - Phường Hiệp Bình Phước - Quận Thủ Đức",
            "lat" : "10.838829721324",
            "long" : "106.72068069689",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761330,
            "code" : "4716395",
            "name" : "Trần Thanh Tân-",
            "address" : "- 10 Đường Số 49 - phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.837664343427",
            "long" : "106.73055239963",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761331,
            "code" : "4716512",
            "name" : "Phạm Thị Thắm-",
            "address" : "- 34 Đường Số 1, Khu Phố 5, Quốc - Phường Hiệp Bình Chánh - Quận Thủ",
            "lat" : "10.835235812711",
            "long" : "106.71178565371",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761332,
            "code" : "4784190",
            "name" : "Hồ thị kim loan-",
            "address" : "- 36 đường 9. quốc lộ 13 - phường hiệp bình chánh - Thủ Đức",
            "lat" : "10.848111631359",
            "long" : "106.71673265296",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761334,
            "code" : "4715720",
            "name" : "Lê Văn Tây-",
            "address" : "- 91\/8 Đường số 8 - Phường Linh Trung - Quận Thủ Đức",
            "lat" : "10.857731332081",
            "long" : "106.77363672304",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761335,
            "code" : "4715195",
            "name" : "le van tan-",
            "address" : "- 78 duong 7 - Phường Linh Trung - Quận Thủ Đức",
            "lat" : "10.859348368841",
            "long" : "106.7698727456",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761336,
            "code" : "4716118",
            "name" : "Lê Thị Lý-",
            "address" : "- 42 Đường 16 - Phường Linh Trung - Quận Thủ Đức",
            "lat" : "10.861067245724",
            "long" : "106.78187881606",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761337,
            "code" : "4716198",
            "name" : "lê thị lý mai-",
            "address" : "- 65 Đường Số 18 - Phường Linh Trung - Quận Thủ Đức",
            "lat" : "10.873568183753",
            "long" : "106.74629621218",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761338,
            "code" : "4716473",
            "name" : "Đào Danh Bằng-",
            "address" : "- 58 Đường 16 - Phường Linh Trung - Quận Thủ Đức",
            "lat" : "10.861114813025",
            "long" : "106.78303359086",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761339,
            "code" : "4716522",
            "name" : "Huỳnh Quan Đính-",
            "address" : "- 30D đường số 3 - Phường Trường Thọ - Thủ Đức",
            "lat" : "10.839824234146",
            "long" : "106.74380745749",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761340,
            "code" : "4715735",
            "name" : "Nguyen Thi Minh-",
            "address" : "- 9 Nguyen Ba Luat - Phường Bình Thọ - Quận Thủ Đức",
            "lat" : "10.847575860108",
            "long" : "106.76479448574",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761341,
            "code" : "4715734",
            "name" : "Pham Thi Tuyet-",
            "address" : "- 29 Cong Ly - Phường Bình Thọ - Quận Thủ Đức",
            "lat" : "10.873488220396",
            "long" : "106.74628481279",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761342,
            "code" : "4715733",
            "name" : "Lưu Hồng Phứơc-",
            "address" : "- 126 Đặng Văn Bi - Phường Bình Thọ - Quận Thủ Đức",
            "lat" : "10.845760800886",
            "long" : "106.7614827958",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761343,
            "code" : "4715732",
            "name" : "Phan Thị Xí-",
            "address" : "- 171 Thống Nhất - Phường Bình Thọ - Quận Thủ Đức",
            "lat" : "10.849066623497",
            "long" : "106.77190795551",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761344,
            "code" : "4715731",
            "name" : "Huynh Thi Uyen Phuong-",
            "address" : "- 57 Đường 4, KP6 - Phường Trường Thọ - Quận Thủ Đức",
            "lat" : "10.873574386361",
            "long" : "106.74622127796",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761345,
            "code" : "4715730",
            "name" : "Nguyễn Thị Hòang-",
            "address" : "- 211 Đường 2, - Phường Trường Thọ - Quận Thủ Đức",
            "lat" : "10.835809386345",
            "long" : "106.75356424424",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761346,
            "code" : "4716082",
            "name" : "Phạm Thị Thúy-",
            "address" : "- 76A Đường 4 - Phường Trường Thọ - Quận Thủ Đức",
            "lat" : "10.835257689479",
            "long" : "106.75988344486",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761347,
            "code" : "4716376",
            "name" : "Đoàn Văn Châu-",
            "address" : "- 115\/7 Đường Số 11 - Phường Bình Thọ - Quận Thủ Đức",
            "lat" : "10.840921173814",
            "long" : "106.75254240642",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761348,
            "code" : "4715745",
            "name" : "Doan Thi Van Xa-",
            "address" : "- 4 Đường 34 - Phường Linh Đông - Quận Thủ Đức",
            "lat" : "10.839882865558",
            "long" : "106.74381994652",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761349,
            "code" : "4716207",
            "name" : "Phạm Thu Cúc-",
            "address" : "- 54 Đường 11 - Phường Trường Thọ - Quận Thủ Đức",
            "lat" : "10.84426718765",
            "long" : "106.75274432647",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761350,
            "code" : "4716051",
            "name" : "Nguyễn Thị Thu Trang-",
            "address" : "- 18A Đại Lộ Bình Dương - Phường Hiệp Bình Phước - Quận Thủ Đức",
            "lat" : "10.862389993864",
            "long" : "106.74420911829",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761351,
            "code" : "4715765",
            "name" : "Nguyễn Thị Thu Trang-",
            "address" : "- 18 Đại Lộ Bình Dương - Phường Vĩnh Phú - Thị xã Thuận An",
            "lat" : "10.862452355224",
            "long" : "106.74412027011",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761352,
            "code" : "4715717",
            "name" : "Vo Thi Hoa-",
            "address" : "- 50\/22 Dong Hoa, KP Tân Lập - Phường Đông Hòa - Thị xã Dĩ An",
            "lat" : "10.873744622814",
            "long" : "106.7463134789",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761353,
            "code" : "4716339",
            "name" : "Nguyễn Thị Hương-",
            "address" : "- D5 KTX Khu B ĐHQG - Phường Linh Xuân - Quận Thủ Đức",
            "lat" : "10.862449756834",
            "long" : "106.74426779161",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761354,
            "code" : "4716458",
            "name" : "Nguyễn Quốc Công-",
            "address" : "- A4 Kí Túc Xá Khu A - Phường Đông Hòa - Thị xã Dĩ An",
            "lat" : "10.862357052985",
            "long" : "106.74424356791",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761355,
            "code" : "4736202",
            "name" : "Nguyễn Thị Thanh Trà-",
            "address" : "- Lô C KTX Đại Học Quốc Gia Khu B - Phường Linh Trung - Thủ Đức",
            "lat" : "10.862338445159",
            "long" : "106.7442959548",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761357,
            "code" : "4716061",
            "name" : "BUI THI NGA-",
            "address" : "- chung cư mỹ long đương số 18 - phường hiệp bình chánh - Quận Thủ Đứ",
            "lat" : "10.873600705537",
            "long" : "106.74635144892",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761358,
            "code" : "4716341",
            "name" : "Bạch Việt Hải-",
            "address" : "- 249 KVC, KP6 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.829279265293",
            "long" : "106.72160279006",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761359,
            "code" : "4715749",
            "name" : "Ecomart-",
            "address" : "- 13 Hiep Binh - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.838981685239",
            "long" : "106.73219407919",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761360,
            "code" : "4715750",
            "name" : "Pham Tan Khoi-",
            "address" : "- 49 Đường 38 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.842354060161",
            "long" : "106.73422568488",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761361,
            "code" : "4765786",
            "name" : "Võ Ngọc Trang-",
            "address" : "- 62A đường 38 - Phường Hiệp Bình Chánh - Thủ Đức",
            "lat" : "10.842572",
            "long" : "106.736336",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761362,
            "code" : "4784191",
            "name" : "Nguyễn Thị Âu-",
            "address" : "- 549 đường Kha Vạn Cân - phường Hiệp Bình Chánh - Thủ Đức",
            "lat" : "10.839278278882",
            "long" : "106.73557642857",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761363,
            "code" : "4716371",
            "name" : "Nguyễn Thị Thanh Thảo-",
            "address" : "- 2 Đoàn Công Hớn - phường Trường Thọ - Quận Thủ Đức",
            "lat" : "10.851039",
            "long" : "106.75606",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761364,
            "code" : "4715722",
            "name" : "Huynh Van Tho-",
            "address" : "- SỐ 2 HOÀNG DIỆU, KP 1 - Phường Linh Chiểu - Quận Thủ Đức",
            "lat" : "10.860889423649",
            "long" : "106.76122815358",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761365,
            "code" : "4715196",
            "name" : "pham quang nghia-",
            "address" : "- 153\/2a Võ Văn Ngân - Phường Linh Chiểu - Quận Thủ Đức",
            "lat" : "10.851995050917",
            "long" : "106.7628335395",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761366,
            "code" : "4716272",
            "name" : "Vương Thành-",
            "address" : "- 9 Đường Số 1 - Phường Linh Tây - Quận Thủ Đức",
            "lat" : "10.851906295576",
            "long" : "106.75363942981",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761367,
            "code" : "4715766",
            "name" : "Tran Thanh Thuy-",
            "address" : "- F9 Đường Số 23 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.827897330746",
            "long" : "106.72701632604",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761368,
            "code" : "4715698",
            "name" : "Dang Le Phương Lan-",
            "address" : "- 16 DƯỜNG 3 (số 5 duong 25) pha - Phường Hiệp Bình Chánh - Quận Thủ",
            "lat" : "10.831076041805",
            "long" : "106.72842004346",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761369,
            "code" : "4716361",
            "name" : "Nguyễn Văn Nở-",
            "address" : "- 102 Tô Ngọc Vân - phường Linh Tây - Quận Thủ Đức",
            "lat" : "10.852642",
            "long" : "106.7526",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761370,
            "code" : "4716354",
            "name" : "Trần Hoa Phượng-",
            "address" : "- 40 Tô Vĩnh Diện - Phường Linh Tây - Quận Thủ Đức",
            "lat" : "10.85192",
            "long" : "106.76645",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761371,
            "code" : "4768832",
            "name" : "Nguyễn Thị Ngọc Thủy-",
            "address" : "- 10\/1 đường Nguyễn Văn Lịch - phường Linh Tây - Thủ Đức",
            "lat" : "10.8536083",
            "long" : "106.7538783",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761372,
            "code" : "4796280",
            "name" : "Nguyễn Thị Mai Tiên-",
            "address" : "- 56\/7c đường Trần Thị Điệu - phường Phước Long B - Thủ Đức",
            "lat" : "10.873687625873",
            "long" : "106.74630752775",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761374,
            "code" : "4715713",
            "name" : "Le Thi Ngoc Tham-",
            "address" : "- 170 QL1K - Phường Linh Xuân - Quận Thủ Đức",
            "lat" : "10.880596409562",
            "long" : "106.76844287674",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761375,
            "code" : "4715712",
            "name" : "Vu Huu Nghi-",
            "address" : "- 127 Tổ 13 Đường 8, KP1 - Phường Linh Xuân - Quận Thủ Đức",
            "lat" : "10.878441799442",
            "long" : "106.77622413273",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761376,
            "code" : "4715711",
            "name" : "Nguyen Thi Kim Kieu-",
            "address" : "- 24 DUONG 5 - Phường Linh Xuân - Quận Thủ Đức",
            "lat" : "10.880451234999",
            "long" : "106.76741818907",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761377,
            "code" : "4715710",
            "name" : "Nguyen Thi Kim Thu-",
            "address" : "- 113\/6 Đường 11 - Phường Linh Xuân - Quận Thủ Đức",
            "lat" : "10.88638943621",
            "long" : "106.76806812185",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761378,
            "code" : "4715721",
            "name" : "Phạm Thị Tuyết-",
            "address" : "- 31 Đường 5 - Phường Linh Trung - Quận Thủ Đức",
            "lat" : "10.86172429",
            "long" : "106.76499063",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761379,
            "code" : "4715716",
            "name" : "Nguyễn Hồng Dung-",
            "address" : "- 252A QL1K - Phường Linh Xuân - Quận Thủ Đức",
            "lat" : "10.885388385515",
            "long" : "106.77247641618",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761380,
            "code" : "4715714",
            "name" : "Dang Minh Thanh-",
            "address" : "- 561\/24 Quốc Lộ 1A - Phường Linh Xuân - Quận Thủ Đức",
            "lat" : "10.873364796872",
            "long" : "106.76824615347",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761381,
            "code" : "4715709",
            "name" : "Le Thu Phien-",
            "address" : "- 150B Đường Số 8 - Phường Linh Xuân - Quận Thủ Đức",
            "lat" : "10.878907791349",
            "long" : "106.77582213665",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761382,
            "code" : "4715708",
            "name" : "Nguyễn Văn Phụng-",
            "address" : "- 27A Đường 8 - Phường Linh Xuân - Quận Thủ Đức",
            "lat" : "10.880619334067",
            "long" : "106.7733251677",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761383,
            "code" : "4715726",
            "name" : "Nguyễn Đức Bảo-",
            "address" : "- 26\/14 Kha Vạn Cân - Phường An Bình - Thị xã Dĩ An",
            "lat" : "10.869756680923",
            "long" : "106.76300385977",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761384,
            "code" : "4716209",
            "name" : "Võ Thị Thanh Thu-",
            "address" : "- 165 Linh Trung, Linh Trung - Phường Linh Trung - Quận Thủ Đức",
            "lat" : "10.859453435997",
            "long" : "106.78196313801",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761385,
            "code" : "4716293",
            "name" : "Nguyễn Thanh Bình-",
            "address" : "- 23 Đường 1 - Phường Linh Xuân - Quận Thủ Đức",
            "lat" : "10.875629796657",
            "long" : "106.76490973691",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761386,
            "code" : "4716346",
            "name" : "Nguyễn Tuấn Kiệt-",
            "address" : "- Căn tin bờ hồ, TTGDQP, Nguyễn - Phường Đông Hòa - Thị xã Dĩ An",
            "lat" : "10.880560367378",
            "long" : "106.77325040112",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761387,
            "code" : "4736185",
            "name" : "trần văn hiệp-",
            "address" : "- 74 đường 10 - linh trung - Thủ Đức",
            "lat" : "10.8602043",
            "long" : "106.7725696",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761388,
            "code" : "4736517",
            "name" : "nguyễn tuấn kiệt-",
            "address" : "- 56 đường hoàng diệu 2 - phường linh trung - Thủ Đức",
            "lat" : "10.873706778522",
            "long" : "106.74628430987",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761389,
            "code" : "4845954",
            "name" : "Nguyễn Thị Mỹ Linh-",
            "address" : "- số 10 đường Nguyễn Viết Xuân - phường An Bình - Thủ Đức",
            "lat" : "10.868059177893",
            "long" : "106.75034265975",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761390,
            "code" : "4716511",
            "name" : "Phạm Văn Tướng-",
            "address" : "- Đại học Ngân Hàng. đường Hoàng - phường Linh Trung - Quận Thủ Đức",
            "lat" : "10.873653972532",
            "long" : "106.74625011171",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761391,
            "code" : "4768833",
            "name" : "Vũ Bình Định-",
            "address" : "- 269\/7 đường Ngô Chí Quốc - phường Bình Chiểu - Thủ Đức",
            "lat" : "10.880672475333",
            "long" : "106.77325886684",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761393,
            "code" : "35298000001",
            "name" : "Quỳnh Anh",
            "address" : "29\/66 đường số 4.khu phố 6, Phường Trường Thọ, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
            "lat" : "10.862390580597",
            "long" : "106.74420014965",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761394,
            "code" : "4715762",
            "name" : "Nguyen Thi Ngau-",
            "address" : "- 188 Go Dua - Phường Tam Bình - Quận Thủ Đức",
            "lat" : "10.87020813",
            "long" : "106.73912202",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761395,
            "code" : "4715760",
            "name" : "Lam Ngoc Lang-",
            "address" : "- 116 Go Dua - Phường Tam Bình - Quận Thủ Đức",
            "lat" : "10.869154189723",
            "long" : "106.73596643853",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761396,
            "code" : "4715761",
            "name" : "Hồ Tài Thiện-",
            "address" : "- Siêu Thị Mini Đất Xanh - Phường Tam Phú - Quận Thủ Đức",
            "lat" : "10.861060624021",
            "long" : "106.73915617178",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761397,
            "code" : "4715748",
            "name" : "Đặng Minh Châu-",
            "address" : "- 21 Đường 14 - Phường Linh Đông - Quận Thủ Đức",
            "lat" : "10.8534488",
            "long" : "106.7506646",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761398,
            "code" : "4715747",
            "name" : "Lê Thanh Hồng-",
            "address" : "- 232 Linh Đông - Phường Linh Đông - Quận Thủ Đức",
            "lat" : "10.856077172045",
            "long" : "106.74978151207",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761399,
            "code" : "4715746",
            "name" : "Nguyen Dang Huong-",
            "address" : "- 31 Đường 8 - Phường Linh Đông - Quận Thủ Đức",
            "lat" : "10.857589677908",
            "long" : "106.74542583525",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761400,
            "code" : "4715744",
            "name" : "Doan Xuan Bai-",
            "address" : "- 30 Đường 25 - Phường Linh Đông - Quận Thủ Đức",
            "lat" : "10.85757127964",
            "long" : "106.7453296111",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761401,
            "code" : "4715743",
            "name" : "Nguyen Ha Duc-",
            "address" : "- 8 Đường 6 - Phường Linh Đông - Quận Thủ Đức",
            "lat" : "10.858091670099",
            "long" : "106.74587929631",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761402,
            "code" : "4715724",
            "name" : "Nguyen Van Tuoi-",
            "address" : "- 26 Tam Ha - Phường Tam Phú - Quận Thủ Đức",
            "lat" : "10.860372134494",
            "long" : "106.74770898196",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761403,
            "code" : "4715715",
            "name" : "Nguyễn Thị Ánh Ngọc-",
            "address" : "- 167 Phú Châu - Phường Tam Bình - Quận Thủ Đức",
            "lat" : "10.872837533253",
            "long" : "106.74544301825",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761404,
            "code" : "4716129",
            "name" : "Hoàng Thị Ngọc Diệp-",
            "address" : "- 567A Tô Ngọc Vân - Phường Tam Phú - Quận Thủ Đức",
            "lat" : "10.864786212343",
            "long" : "106.74191256064",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761405,
            "code" : "4716333",
            "name" : "Phạm Thị Quyên-",
            "address" : "- 53 Đường 35 - Phường Linh Đông - Quận Thủ Đức",
            "lat" : "10.857348069559",
            "long" : "106.74787469218",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761406,
            "code" : "4716440",
            "name" : "TRẦN THỊ NGỌC BÍCH-",
            "address" : "- 27E Bình Phú - Phường Tam Phú - Quận Thủ Đức",
            "lat" : "10.85302",
            "long" : "106.7390433",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761407,
            "code" : "4736518",
            "name" : "Bùi thị Bình-",
            "address" : "- 165 đường phú châu - phường tam bình - Thủ Đức",
            "lat" : "10.872860583487",
            "long" : "106.74546732577",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761408,
            "code" : "4850670",
            "name" : "Phạm Thị Thoa-",
            "address" : "- 103 đường Gò Dưa - Tam Bình - Thủ Đức",
            "lat" : "10.860968821471",
            "long" : "106.7391266128",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761410,
            "code" : "35298000003",
            "name" : "lê phát",
            "address" : "34 đường tam bình. phường tam phú. thủ đức, Phường Tam Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
            "lat" : "10.850044749687",
            "long" : "106.72928220602",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761411,
            "code" : "35298000002",
            "name" : "ly ly",
            "address" : "số 1 đường gò dưa. tam bình, Phường Bình Chiểu, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
            "lat" : "10.873659462678",
            "long" : "106.74626863572",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761412,
            "code" : "4715737",
            "name" : "Nguyễn Thị Minh Thủy-",
            "address" : "- 22\/29 Bình Chiểu - Phường Bình Chiểu - Quận Thủ Đức",
            "lat" : "10.875535",
            "long" : "106.7355167",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761413,
            "code" : "4715759",
            "name" : "Nguyễn Thị Kim Anh-",
            "address" : "- 34 Đường số 12 - Phường Tam Bình - Quận Thủ Đức",
            "lat" : "10.872818422514",
            "long" : "106.74549138183",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761414,
            "code" : "4715742",
            "name" : "Nguyen Thanh Hai-",
            "address" : "- 1231\/21 Tỉnh Lộ 43 - Phường Bình Chiểu - Quận Thủ Đức",
            "lat" : "10.88690626",
            "long" : "106.72425633",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761415,
            "code" : "4715740",
            "name" : "Dang Hoang An-",
            "address" : "- 29\/1 Dong An - Phường Bình Hòa - Thị xã Thuận An",
            "lat" : "10.891562160115",
            "long" : "106.7249439844",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761416,
            "code" : "4715739",
            "name" : "Nguyễn Thị Kiều Tiên-",
            "address" : "- 108 Ngô Chí Quốc - Phường Bình Chiểu - Quận Thủ Đức",
            "lat" : "10.879850336361",
            "long" : "106.72319912362",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761417,
            "code" : "4715738",
            "name" : "Võ Thị Hường-",
            "address" : "- 1148\/5 TL43 - Phường Bình Chiểu - Quận Thủ Đức",
            "lat" : "10.890759006153",
            "long" : "106.72789173211",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761418,
            "code" : "4715741",
            "name" : "Chu Thanh Tung-",
            "address" : "- 5 Ngo Chi Quoc - Phường Tam Bình - Quận Thủ Đức",
            "lat" : "10.874880831699",
            "long" : "106.73151967126",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761419,
            "code" : "4716352",
            "name" : "Trần Thị Ngọc Thúy-",
            "address" : "- 71 Lê Thị Hoa - Phường Bình Chiểu - Quận Thủ Đức",
            "lat" : "10.873081698093",
            "long" : "106.73594489704",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761420,
            "code" : "4716302",
            "name" : "Nguyễn Thị Phương Thảo-",
            "address" : "- Tòa nhà Stown Phúc An, Đường N - Phường An Bình - Thị xã Dĩ An",
            "lat" : "10.891578462916",
            "long" : "106.72496485534",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761421,
            "code" : "4716249",
            "name" : "Nguyễn Thị Kiều Diễm-",
            "address" : "- 1092\/21\/7\/2 Tỉnh Lộ 43 - Phường Bình Chiểu - Quận Thủ Đức",
            "lat" : "10.889027221138",
            "long" : "106.73016624535",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761422,
            "code" : "4716212",
            "name" : "Âu Văn Hiệp-",
            "address" : "- 218 Quốc Lộ 13 Cũ - Phường Hiệp Bình Phước - Quận Thủ Đức",
            "lat" : "10.873650955046",
            "long" : "106.74622940841",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761423,
            "code" : "4716308",
            "name" : "Lê Thị Châu-",
            "address" : "- 48 Đường 9 - Phường Bình Chiểu - Quận Thủ Đức",
            "lat" : "10.87639",
            "long" : "106.743013",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761424,
            "code" : "4716524",
            "name" : "Nguyễn Thị Hoài-",
            "address" : "- 11 đường số 9 - Tam Bình - Thủ Đức",
            "lat" : "10.8659135",
            "long" : "106.7367947",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761425,
            "code" : "4775891",
            "name" : "Nguyễn thị tuyết mai-",
            "address" : "- 6e\/1 đường Bình Hòa 24 - phường Bình Chiểu - Thủ Đức",
            "lat" : "10.894151330004",
            "long" : "106.73454780142",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761426,
            "code" : "4715725",
            "name" : "Huỳnh Thi Thúy An-",
            "address" : "- 52 Bình Đường 2 - Phường An Bình - Thị xã Dĩ An",
            "lat" : "10.881171491939",
            "long" : "106.75197629268",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761428,
            "code" : "4716260",
            "name" : "Phạm Ngọc Đoan-",
            "address" : "- 52A Hiệp Bình - Phường Hiệp Bình Phước - Quận Thủ Đức",
            "lat" : "10.846055",
            "long" : "106.7238317",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761429,
            "code" : "4715755",
            "name" : "Phan Le Dung-",
            "address" : "- 143 QL13 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.831654267396",
            "long" : "106.71403267431",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761430,
            "code" : "4715764",
            "name" : "Nguyễn Thị Xuyến-",
            "address" : "- 98 Đường số 48 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.8375484",
            "long" : "106.7278605",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761432,
            "code" : "4715753",
            "name" : "Bui Quang Duong-",
            "address" : "- 82 Đường 48, KP6 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.837103083333",
            "long" : "106.7273596",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761433,
            "code" : "4715752",
            "name" : "Phan Thi Thuy Hong-",
            "address" : "- 61\/24 Đường Số 48 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.838112649518",
            "long" : "106.72630252327",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761434,
            "code" : "4715754",
            "name" : "Le Tuyet Nhi-",
            "address" : "- 121 QL13 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.829596468258",
            "long" : "106.7140387931",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761435,
            "code" : "4716078",
            "name" : "Phan Tu-",
            "address" : "- S41 Đường Số 3 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.849198345105",
            "long" : "106.72359801839",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761436,
            "code" : "4716135",
            "name" : "Huỳnh Thanh Tùng-",
            "address" : "- 17 Đường 9 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.840846005472",
            "long" : "106.72520196213",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761437,
            "code" : "4716191",
            "name" : "le thi hong tiet-",
            "address" : "- (77)106 Đường số 2 - Phường Hiệp Bình Phước - Quận Thủ Đức",
            "lat" : "10.838629583333",
            "long" : "106.71928605",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761438,
            "code" : "4716294",
            "name" : "Cao Thị Kim Hồng-",
            "address" : "- 121 Đường 5 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.829701912599",
            "long" : "106.71393753971",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761439,
            "code" : "4716105",
            "name" : "Nguyễn Văn Đực-",
            "address" : "- 606\/9 QL13 - Phường Hiệp Bình Phước - Quận Thủ Đức",
            "lat" : "10.8511829",
            "long" : "106.7217585",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761440,
            "code" : "4715757",
            "name" : "Dao Thi Phuong-",
            "address" : "- 52\/6k Đường sô 4 - Phường Hiệp Bình Phước - Quận Thủ Đức",
            "lat" : "10.838829721324",
            "long" : "106.72068069689",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761441,
            "code" : "4716395",
            "name" : "Trần Thanh Tân-",
            "address" : "- 10 Đường Số 49 - phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.837664343427",
            "long" : "106.73055239963",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761442,
            "code" : "4716512",
            "name" : "Phạm Thị Thắm-",
            "address" : "- 34 Đường Số 1, Khu Phố 5, Quốc - Phường Hiệp Bình Chánh - Quận Thủ",
            "lat" : "10.835235812711",
            "long" : "106.71178565371",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761443,
            "code" : "4784190",
            "name" : "Hồ thị kim loan-",
            "address" : "- 36 đường 9. quốc lộ 13 - phường hiệp bình chánh - Thủ Đức",
            "lat" : "10.848111631359",
            "long" : "106.71673265296",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761445,
            "code" : "4715720",
            "name" : "Lê Văn Tây-",
            "address" : "- 91\/8 Đường số 8 - Phường Linh Trung - Quận Thủ Đức",
            "lat" : "10.857731332081",
            "long" : "106.77363672304",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761446,
            "code" : "4715195",
            "name" : "le van tan-",
            "address" : "- 78 duong 7 - Phường Linh Trung - Quận Thủ Đức",
            "lat" : "10.859348368841",
            "long" : "106.7698727456",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761447,
            "code" : "4716118",
            "name" : "Lê Thị Lý-",
            "address" : "- 42 Đường 16 - Phường Linh Trung - Quận Thủ Đức",
            "lat" : "10.861067245724",
            "long" : "106.78187881606",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761448,
            "code" : "4716198",
            "name" : "lê thị lý mai-",
            "address" : "- 65 Đường Số 18 - Phường Linh Trung - Quận Thủ Đức",
            "lat" : "10.873568183753",
            "long" : "106.74629621218",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761449,
            "code" : "4716473",
            "name" : "Đào Danh Bằng-",
            "address" : "- 58 Đường 16 - Phường Linh Trung - Quận Thủ Đức",
            "lat" : "10.861114813025",
            "long" : "106.78303359086",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761450,
            "code" : "4716522",
            "name" : "Huỳnh Quan Đính-",
            "address" : "- 30D đường số 3 - Phường Trường Thọ - Thủ Đức",
            "lat" : "10.839824234146",
            "long" : "106.74380745749",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761451,
            "code" : "4715735",
            "name" : "Nguyen Thi Minh-",
            "address" : "- 9 Nguyen Ba Luat - Phường Bình Thọ - Quận Thủ Đức",
            "lat" : "10.847575860108",
            "long" : "106.76479448574",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761452,
            "code" : "4715734",
            "name" : "Pham Thi Tuyet-",
            "address" : "- 29 Cong Ly - Phường Bình Thọ - Quận Thủ Đức",
            "lat" : "10.873488220396",
            "long" : "106.74628481279",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761453,
            "code" : "4715733",
            "name" : "Lưu Hồng Phứơc-",
            "address" : "- 126 Đặng Văn Bi - Phường Bình Thọ - Quận Thủ Đức",
            "lat" : "10.845760800886",
            "long" : "106.7614827958",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761454,
            "code" : "4715732",
            "name" : "Phan Thị Xí-",
            "address" : "- 171 Thống Nhất - Phường Bình Thọ - Quận Thủ Đức",
            "lat" : "10.849066623497",
            "long" : "106.77190795551",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761455,
            "code" : "4715731",
            "name" : "Huynh Thi Uyen Phuong-",
            "address" : "- 57 Đường 4, KP6 - Phường Trường Thọ - Quận Thủ Đức",
            "lat" : "10.873574386361",
            "long" : "106.74622127796",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761456,
            "code" : "4715730",
            "name" : "Nguyễn Thị Hòang-",
            "address" : "- 211 Đường 2, - Phường Trường Thọ - Quận Thủ Đức",
            "lat" : "10.835809386345",
            "long" : "106.75356424424",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761457,
            "code" : "4716082",
            "name" : "Phạm Thị Thúy-",
            "address" : "- 76A Đường 4 - Phường Trường Thọ - Quận Thủ Đức",
            "lat" : "10.835257689479",
            "long" : "106.75988344486",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761458,
            "code" : "4716376",
            "name" : "Đoàn Văn Châu-",
            "address" : "- 115\/7 Đường Số 11 - Phường Bình Thọ - Quận Thủ Đức",
            "lat" : "10.840921173814",
            "long" : "106.75254240642",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761459,
            "code" : "4715745",
            "name" : "Doan Thi Van Xa-",
            "address" : "- 4 Đường 34 - Phường Linh Đông - Quận Thủ Đức",
            "lat" : "10.839882865558",
            "long" : "106.74381994652",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761460,
            "code" : "4716207",
            "name" : "Phạm Thu Cúc-",
            "address" : "- 54 Đường 11 - Phường Trường Thọ - Quận Thủ Đức",
            "lat" : "10.84426718765",
            "long" : "106.75274432647",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761461,
            "code" : "4716051",
            "name" : "Nguyễn Thị Thu Trang-",
            "address" : "- 18A Đại Lộ Bình Dương - Phường Hiệp Bình Phước - Quận Thủ Đức",
            "lat" : "10.862389993864",
            "long" : "106.74420911829",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761462,
            "code" : "4715765",
            "name" : "Nguyễn Thị Thu Trang-",
            "address" : "- 18 Đại Lộ Bình Dương - Phường Vĩnh Phú - Thị xã Thuận An",
            "lat" : "10.862452355224",
            "long" : "106.74412027011",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761463,
            "code" : "4715717",
            "name" : "Vo Thi Hoa-",
            "address" : "- 50\/22 Dong Hoa, KP Tân Lập - Phường Đông Hòa - Thị xã Dĩ An",
            "lat" : "10.873744622814",
            "long" : "106.7463134789",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761464,
            "code" : "4716339",
            "name" : "Nguyễn Thị Hương-",
            "address" : "- D5 KTX Khu B ĐHQG - Phường Linh Xuân - Quận Thủ Đức",
            "lat" : "10.862449756834",
            "long" : "106.74426779161",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761465,
            "code" : "4716458",
            "name" : "Nguyễn Quốc Công-",
            "address" : "- A4 Kí Túc Xá Khu A - Phường Đông Hòa - Thị xã Dĩ An",
            "lat" : "10.862357052985",
            "long" : "106.74424356791",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761466,
            "code" : "4736202",
            "name" : "Nguyễn Thị Thanh Trà-",
            "address" : "- Lô C KTX Đại Học Quốc Gia Khu B - Phường Linh Trung - Thủ Đức",
            "lat" : "10.862338445159",
            "long" : "106.7442959548",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761468,
            "code" : "4716061",
            "name" : "BUI THI NGA-",
            "address" : "- chung cư mỹ long đương số 18 - phường hiệp bình chánh - Quận Thủ Đứ",
            "lat" : "10.873600705537",
            "long" : "106.74635144892",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761469,
            "code" : "4716341",
            "name" : "Bạch Việt Hải-",
            "address" : "- 249 KVC, KP6 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.829279265293",
            "long" : "106.72160279006",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761470,
            "code" : "4715749",
            "name" : "Ecomart-",
            "address" : "- 13 Hiep Binh - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.838981685239",
            "long" : "106.73219407919",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761471,
            "code" : "4715750",
            "name" : "Pham Tan Khoi-",
            "address" : "- 49 Đường 38 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.842354060161",
            "long" : "106.73422568488",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761472,
            "code" : "4765786",
            "name" : "Võ Ngọc Trang-",
            "address" : "- 62A đường 38 - Phường Hiệp Bình Chánh - Thủ Đức",
            "lat" : "10.842572",
            "long" : "106.736336",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761473,
            "code" : "4784191",
            "name" : "Nguyễn Thị Âu-",
            "address" : "- 549 đường Kha Vạn Cân - phường Hiệp Bình Chánh - Thủ Đức",
            "lat" : "10.839278278882",
            "long" : "106.73557642857",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761474,
            "code" : "4716371",
            "name" : "Nguyễn Thị Thanh Thảo-",
            "address" : "- 2 Đoàn Công Hớn - phường Trường Thọ - Quận Thủ Đức",
            "lat" : "10.851039",
            "long" : "106.75606",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761475,
            "code" : "4715722",
            "name" : "Huynh Van Tho-",
            "address" : "- SỐ 2 HOÀNG DIỆU, KP 1 - Phường Linh Chiểu - Quận Thủ Đức",
            "lat" : "10.860889423649",
            "long" : "106.76122815358",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761476,
            "code" : "4715196",
            "name" : "pham quang nghia-",
            "address" : "- 153\/2a Võ Văn Ngân - Phường Linh Chiểu - Quận Thủ Đức",
            "lat" : "10.851995050917",
            "long" : "106.7628335395",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761477,
            "code" : "4716272",
            "name" : "Vương Thành-",
            "address" : "- 9 Đường Số 1 - Phường Linh Tây - Quận Thủ Đức",
            "lat" : "10.851906295576",
            "long" : "106.75363942981",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761478,
            "code" : "4715766",
            "name" : "Tran Thanh Thuy-",
            "address" : "- F9 Đường Số 23 - Phường Hiệp Bình Chánh - Quận Thủ Đức",
            "lat" : "10.827897330746",
            "long" : "106.72701632604",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761479,
            "code" : "4715698",
            "name" : "Dang Le Phương Lan-",
            "address" : "- 16 DƯỜNG 3 (số 5 duong 25) pha - Phường Hiệp Bình Chánh - Quận Thủ",
            "lat" : "10.831076041805",
            "long" : "106.72842004346",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761480,
            "code" : "4716361",
            "name" : "Nguyễn Văn Nở-",
            "address" : "- 102 Tô Ngọc Vân - phường Linh Tây - Quận Thủ Đức",
            "lat" : "10.852642",
            "long" : "106.7526",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761481,
            "code" : "4716354",
            "name" : "Trần Hoa Phượng-",
            "address" : "- 40 Tô Vĩnh Diện - Phường Linh Tây - Quận Thủ Đức",
            "lat" : "10.85192",
            "long" : "106.76645",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761482,
            "code" : "4768832",
            "name" : "Nguyễn Thị Ngọc Thủy-",
            "address" : "- 10\/1 đường Nguyễn Văn Lịch - phường Linh Tây - Thủ Đức",
            "lat" : "10.8536083",
            "long" : "106.7538783",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1761483,
            "code" : "4796280",
            "name" : "Nguyễn Thị Mai Tiên-",
            "address" : "- 56\/7c đường Trần Thị Điệu - phường Phước Long B - Thủ Đức",
            "lat" : "10.873687625873",
            "long" : "106.74630752775",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "35298"
        },
        {
            "id" : 1778597,
            "code" : "2812657",
            "name" : "Pham Thi Huong",
            "address" : "46 Đường 20,Phường Long Thạnh Mỹ,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.843460932374",
            "long" : "106.827267408371",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778598,
            "code" : "2813537",
            "name" : "Võ Thị Mỹ",
            "address" : "911 Nguyễn Xiển,Phường Long Thạnh Mỹ,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8528621",
            "long" : "106.833501",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778599,
            "code" : "2813539",
            "name" : "Ton Thi Le Thu",
            "address" : "294 Nguyen Van Tang,Phường Long Thạnh Mỹ,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.841163075529",
            "long" : "106.822577733547",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778600,
            "code" : "2813540",
            "name" : "Nguyen Thi Huong Ngoc",
            "address" : "323 Hoàng Hữu Nam,P. Long Thạnh Mỹ,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.868090",
            "long" : "106.813805",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778601,
            "code" : "2813579",
            "name" : "Lưu Đức Bắc",
            "address" : "387 Nguyễn Văn Tăng,Phường Long Thạnh Mỹ,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8410154",
            "long" : "106.8262362",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778602,
            "code" : "2910045",
            "name" : "Nguyễn Thị Hồng-114 Đường số 6",
            "address" : "114 Đường số 6. Kp Long Bửu,Phường Long Bình,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8578272",
            "long" : "106.8435869",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778603,
            "code" : "2813501",
            "name" : "Nguyen Thi Bach Diep",
            "address" : "265 Nguyen Xien,Phường Tăng Nhơn Phú A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.825318847783",
            "long" : "106.829494647682",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778604,
            "code" : "4287692",
            "name" : "Đặc Sản Hà Nội 2",
            "address" : "01 - S01 Toà BS16 CC VinHomes Grandpark  - Nguyễn Xiển,P. Long Thạnh Mỹ,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.847197",
            "long" : "106.843832",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778605,
            "code" : "4390447",
            "name" : "Cam Táo Mart",
            "address" : "T2-14 Manhattan Vinhomes Grandpark,P . Long Thạnh Mỹ,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.839218",
            "long" : "106.84184",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778606,
            "code" : "4748469",
            "name" : "Bách Hóa Sơn Thu",
            "address" : "338 Nguyễn Văn Tăng,P.Long Thạnh Mỹ,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.841236",
            "long" : "106.824187",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778607,
            "code" : "4768508",
            "name" : "KonNi 39",
            "address" : "S6-03 01S15 CC Vinhomes Grandpark - Nguyễn Xiển,P.Long Thạnh Mỹ,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.843946",
            "long" : "106.838032",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778608,
            "code" : "4848252",
            "name" : "Tạp Hóa Kim Oanh",
            "address" : "3\/34 Quyết Thắng - Bình Thắng,Bình Dương,THỊ XÃ DĨ AN,TỈNH BÌNH DƯƠNG",
            "lat" : "10.8603817",
            "long" : "106.8368383",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778609,
            "code" : "4884494",
            "name" : "Mart 24h - 2",
            "address" : "E2 Khu Masteri Vinhomes Grandpark,P.Long Thạnh Mỹ,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.842191",
            "long" : "106.840157",
            "start_date" : "2025-12-01 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778611,
            "code" : "2812767",
            "name" : "Nguyễn Thi Kim Thương",
            "address" : "209F Tôn Thất Thuyết,Phường 3,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75531295",
            "long" : "106.69871475",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778612,
            "code" : "2812769",
            "name" : "Trần Thị Thơ",
            "address" : "196\/47\/1 Tôn Thất Thuyết,Phường 3,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75389676",
            "long" : "106.69988188",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778613,
            "code" : "2812771",
            "name" : "Do Thi Thu Ha",
            "address" : "2Lô M CC Tôn Thất Thuyết,Phường 1,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7545183",
            "long" : "106.691966",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778614,
            "code" : "2812734",
            "name" : "Minh Hải",
            "address" : "305 Tôn Thất Thuyết,Phường 1,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.752946",
            "long" : "106.6941",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778615,
            "code" : "2813383",
            "name" : "Khu Bach Lan",
            "address" : "12 Nguyễn Khóai,Phường 10,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75329628",
            "long" : "106.69531752",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778616,
            "code" : "3196340",
            "name" : "Trường Nguyễn Huệ",
            "address" : "243 hoàng diệu,Phường 8,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7615667",
            "long" : "106.7013983",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778617,
            "code" : "2813031",
            "name" : "Nguyễn Thi Lập",
            "address" : "B60 Nguyễn Thần Hiến,Phường 18,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7555034",
            "long" : "106.71682741",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778618,
            "code" : "2813051",
            "name" : "Huỳnh Thị Yên",
            "address" : "A91 Nguyễn Thần Hiến,Phường 18,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75462345",
            "long" : "106.71639125",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778619,
            "code" : "4059615",
            "name" : "TH Chị Lý",
            "address" : "383\/18 Bà Hạt P.4,P.4,Quận 10,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.763885",
            "long" : "106.70596",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778620,
            "code" : "4075702",
            "name" : "Jump Arena",
            "address" : "02-04 Đường Số 9 - Khu Đô Thị Mới Him Lam P. Tân Hưng,P. Tân Hưng,Quận 7,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.742012",
            "long" : "106.695233",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778621,
            "code" : "4274086",
            "name" : "Jum Arena 2",
            "address" : "02 Đường Số 9 - KDT Him Lam P. Tân Hưng,P. Tân Hưng,Quận 7,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.742012",
            "long" : "106.695233",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778622,
            "code" : "4419719",
            "name" : "Jum Arena Gò Vấp",
            "address" : "647 Quang Trung P.11,P.11,Quận Gò Vấp,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.742072",
            "long" : "106.695157",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778623,
            "code" : "4462506",
            "name" : "KVC Khánh Hội",
            "address" : "227 Đường Số 48,P.9,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75845045",
            "long" : "106.69867027",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778624,
            "code" : "4725362",
            "name" : "Đàm Sự Thân",
            "address" : "80 Hàm Nghi,P.Bến Nghé,QUẬN 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7712117",
            "long" : "106.7033751",
            "start_date" : "2025-12-02 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778626,
            "code" : "2813037",
            "name" : "Dinh Thi Xe",
            "address" : "692\/24 Đoàn Văn Bơ,Phường 13,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75749948",
            "long" : "106.71226133",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778627,
            "code" : "2813048",
            "name" : "Hồ Ngọc Hòang Dung",
            "address" : "920 Đoàn Văn Bơ,Phường 18,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75667736",
            "long" : "106.71678553",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778628,
            "code" : "2813058",
            "name" : "Lâm Tài",
            "address" : "135 Xóm Chiếu,Phường 14,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.757251",
            "long" : "106.71022",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778629,
            "code" : "2812721",
            "name" : "Nguyễn Thị Hồng Hạnh",
            "address" : "538\/149 Đoàn Văn Bơ,Phường 14,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.757178",
            "long" : "106.708275",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778630,
            "code" : "2812765",
            "name" : "Nguyễn Anh Trung",
            "address" : "92\/18B Tôn Thất Thuyết,Phường 16,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.753966",
            "long" : "106.710175",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778631,
            "code" : "3269598",
            "name" : "Nguyễn Thị Mỹ Dung",
            "address" : "772\/20 Đoàn Văn Bơ,P.10,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.756785",
            "long" : "106.7138",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778632,
            "code" : "4197028",
            "name" : "TH Tiến Đào",
            "address" : "132 Đoàn Văn Bơ P.9,P.9,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.763286",
            "long" : "106.703964",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778633,
            "code" : "4440969",
            "name" : "Jum Arena 3",
            "address" : "645 Quang Trung P.12,P.12,Quận Gò Vấp,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8510392",
            "long" : "106.6609435",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778634,
            "code" : "4614402",
            "name" : "KVC 123 GO",
            "address" : "17 Tô Hiệu,P.Tân Thới Hòa,Quận Tân Phú,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.76631",
            "long" : "106.6269167",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778635,
            "code" : "4664055",
            "name" : "Nguyễn Thị Thu Thủy",
            "address" : "2238 Huỳnh Tấn Phát,Xã Phú Xuân,HUYỆN NHÀ BÈ,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.684122",
            "long" : "106.745345",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778636,
            "code" : "4848220",
            "name" : "KVC 123 Go 3",
            "address" : "641 Kinh Dương Vương,An Lạc,HUYỆN BÌNH TÂN,TỈNH VĨNH LONG",
            "lat" : "10.7663033",
            "long" : "106.6269333",
            "start_date" : "2025-12-03 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778638,
            "code" : "2813481",
            "name" : "Le Van Tuan",
            "address" : "40\/8 An Phu, KP4,Phường An Phú,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.809641126543",
            "long" : "106.752698812634",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778639,
            "code" : "2813487",
            "name" : "Tran Thi Phuong Thu",
            "address" : "37 Nguyen Van Huong Cc Hagl,Phường Thảo Điền,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8044515",
            "long" : "106.7274888",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778640,
            "code" : "2813425",
            "name" : "Nguyễn Thị Thu Thủy",
            "address" : "Chung Cư Estella,Phường An Phú,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.800769",
            "long" : "106.7493113",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778641,
            "code" : "2813426",
            "name" : "Đỗ Thị Kim Liên",
            "address" : "Tầng Trệt A1 - CC Cantavil,Phường An Phú,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.800812929",
            "long" : "106.746782782",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778642,
            "code" : "2813429",
            "name" : "Pham Van Hoang",
            "address" : "10 Đường Lo C,Phường An Phú,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.789939588867",
            "long" : "106.74527538009",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778643,
            "code" : "2813498",
            "name" : "Trường Horizon",
            "address" : "8 Đường 44, Trường Horizon,Phường Thảo Điền,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8057823",
            "long" : "106.7295348",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778644,
            "code" : "2813434",
            "name" : "Nguyễn Thị Tuyết",
            "address" : "Lô CD, Nhà B, Khu Dân Cư Bình,Phường Bình Khánh,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7875944",
            "long" : "106.7407311",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778645,
            "code" : "3246884",
            "name" : "Vũ Thị Kim",
            "address" : "238 Bùi Tá Hán,P.An Phú,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.795427",
            "long" : "106.744675",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778646,
            "code" : "3267618",
            "name" : "Huỳnh Ngọc Phượng",
            "address" : "13A Đường số 10,P.Thảo Điền,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.804096",
            "long" : "106.74398",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778647,
            "code" : "3398420",
            "name" : "Phạm Thị Kim Loan",
            "address" : "253 Lương Định Của,P.An Phú,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.791588",
            "long" : "106.74814",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778648,
            "code" : "3627430",
            "name" : "Bùi Thị Thanh Ngà",
            "address" : "311 M2 Lương Định Của,P.An Phú,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.789429",
            "long" : "106.74353",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778649,
            "code" : "3648425",
            "name" : "Siêu Thị An Phú",
            "address" : "43 Thảo Điền p. Thảo Điền,p. Thảo Điền,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.805047",
            "long" : "106.73642",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778650,
            "code" : "4033588",
            "name" : "FoodVille",
            "address" : "170  Nguyễn Văn Hưởng p. Thảo Điền,P. Thảo Điền,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.815492",
            "long" : "106.7273",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778651,
            "code" : "4376749",
            "name" : "ViNa Mart",
            "address" : "24B Xuân Thủy P. An Phú,P .An phú,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.80271",
            "long" : "106.728745",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778652,
            "code" : "4815380",
            "name" : "Thanh Hoàn",
            "address" : "418 Xa Lộ Hà Nội,P.An Phú,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.806642",
            "long" : "106.755567",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778653,
            "code" : "4815381",
            "name" : "Tạp Hóa Cô Cúc",
            "address" : "311M1 Lương Định Của,P.An Phú,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.789427",
            "long" : "106.743520",
            "start_date" : "2025-12-04 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778655,
            "code" : "2812775",
            "name" : "Nguyễn Thị Huyền Chân",
            "address" : "A4\/17 Hương Lộ 11,Xã Tân Quý Tây,Huyện Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.65591096",
            "long" : "106.6063968",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778656,
            "code" : "2812782",
            "name" : "Nguyen Thi Kim Nhung",
            "address" : "89\/4 Hoàng Đạo Thúy,Xã An Phú Tây,Huyện Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.69685066",
            "long" : "106.59734042",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778657,
            "code" : "2812792",
            "name" : "Pham Thi Ngoc Van",
            "address" : "B2\/12 Dinh Duc Thien,Xã Bình Lợi,Huyện Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8510298",
            "long" : "106.6609556",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778658,
            "code" : "2812796",
            "name" : "Truong Thi Minh Nguyet",
            "address" : "13E Nguyen Van Linh,Xã Bình Hưng,Huyện Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.70602657",
            "long" : "106.64402804",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778659,
            "code" : "2812816",
            "name" : "Lê Thành Ngọc Em",
            "address" : "C7\/32 Hương Lộ 11, Ấp 3,Xã Hưng Long,Huyện Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.6483143",
            "long" : "106.6277663",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778660,
            "code" : "3092949",
            "name" : "TH Thủy Tiên",
            "address" : "53 Đường số 5 KDC 13E Phong Ph,xã Phong Phú,Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7049392",
            "long" : "106.6471424",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778661,
            "code" : "4290134",
            "name" : "Tạp Hóa Chi - E",
            "address" : "C1 Chung Cư Him Lam - 267b Ba Tơ P.7,P.7,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.706793",
            "long" : "106.62089",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778662,
            "code" : "4323906",
            "name" : "TeraMart 2",
            "address" : "26 Đường Số 2 - Terra Mia - Bình Hưng,Bình Hưng,Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.72259579",
            "long" : "106.68771889",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778663,
            "code" : "4573759",
            "name" : "TH ÚT THÚY",
            "address" : "Số 552, Đoàn Nguyễn Tuấn,Ấp 3,X. Hưng Long, H.Bình Chánh,Huyện Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.649718",
            "long" : "106.625134",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778664,
            "code" : "4783108",
            "name" : "TH VŨ NGUYÊN",
            "address" : "C6\/3H ĐƯỜNG HƯNG NHƠN,XÃ TÂN KIÊN,HUYỆN BÌNH CHÁNH,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.713920",
            "long" : "106.591840",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778665,
            "code" : "4797669",
            "name" : "TH MAI SƯƠNG",
            "address" : "B9\/277, ĐƯỜNG NGÃ 3 CHÚ LƯỜNG,XÃ ĐA PHƯỚC,UYỆN BÌNH CHÁNH,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.652538",
            "long" : "106.659409",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1778666,
            "code" : "4482240",
            "name" : "Shop Bích Thủy",
            "address" : "Đinh Đức Thiện, Bình Chánh,Tân Qúy Tây,Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.703452",
            "long" : "106.7301898",
            "start_date" : "2025-12-05 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819332,
            "code" : "38149000001",
            "name" : "TH Duyên",
            "address" : "115\/4 đường tân mỹ, Phường Tân Thuận Tây, Quận 7, Thành phố Hồ Chí Minh",
            "lat" : "10.749357",
            "long" : "106.720022",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819333,
            "code" : "2812654",
            "name" : "Nguyễn Thị Hồng",
            "address" : "630 Nguyễn Duy Trinh,Phường Bình Trưng Đông,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7888276",
            "long" : "106.7781623",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819334,
            "code" : "2813432",
            "name" : "Le Thi Nhai",
            "address" : "376 Nguyen Thi Dinh,Phường Thạnh Mỹ Lợi,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7823139",
            "long" : "106.7601223",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819335,
            "code" : "2813433",
            "name" : "Ngo Hong Nhung",
            "address" : "39 Đường 3,Phường Thạnh Mỹ Lợi,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7803234",
            "long" : "106.7596631",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819336,
            "code" : "2813446",
            "name" : "Nguyễn Thị Thu Thủy",
            "address" : "40 Đường 28,Phường Cát Lái,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7797805",
            "long" : "106.7708034",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819337,
            "code" : "2813458",
            "name" : "Nguyen Thi Thanh Tuuyen",
            "address" : "11 Đường 6,Phường Bình Trưng Đông,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7844679",
            "long" : "106.7579663",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819338,
            "code" : "2813463",
            "name" : "Lương Thị Nga",
            "address" : "19 Đường 42, Lê Văn Thịnh,Phường Bình Trưng Đông,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7837447",
            "long" : "106.7699262",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819339,
            "code" : "2813465",
            "name" : "Nguyen Van Phung",
            "address" : "99 Le Van Thinh,Phường Bình Trưng Đông,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7840858",
            "long" : "106.7691881",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819340,
            "code" : "3513342",
            "name" : "MEGABOWL",
            "address" : "lầu 2 CBD premium home 125 Đồng Văn Cống,P.Thạnh Mỹ Lợi,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7744536",
            "long" : "106.7618274",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819341,
            "code" : "3991983",
            "name" : "TH Hoa Cà",
            "address" : "52 Đường 18, Nguyễn Thị ĐỊnh,P. Thạnh Mỹ Lợi,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.774423",
            "long" : "106.76486",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819342,
            "code" : "4542618",
            "name" : "CH Gia Hào",
            "address" : "96 Đường 42, Lê Văn Thịnh,P. Bình Trưng Đông,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.784556",
            "long" : "106.77297",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819343,
            "code" : "38149000004",
            "name" : "Công Tỷ cổ phần TMDV Thiện Pháp",
            "address" : "Toà nhà joy kcx, Phường Linh Trung, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
            "lat" : "10.7493532",
            "long" : "106.7200534",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819344,
            "code" : "2813518",
            "name" : "TH phương Loan",
            "address" : "1432 Nguyễn Duy Trinh,Phường Long Trường,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8059384",
            "long" : "106.8200579",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819345,
            "code" : "2813522",
            "name" : "Ngo Thi Lang",
            "address" : "11 Đường 898, KP4,Phường Phú Hữu,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7898352",
            "long" : "106.7985645",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819346,
            "code" : "2813538",
            "name" : "Đặng Ngọc Thanh",
            "address" : "1056 Nguyễn Duy Trinh,Phường Long Trường,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7996979",
            "long" : "106.8094676",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819347,
            "code" : "2813548",
            "name" : "chợ sạch melosa",
            "address" : "59 đường số 2, khu nhà melosa,Phường Phú Hữu,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7822712",
            "long" : "106.7924454",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819348,
            "code" : "2813512",
            "name" : "Chu Thị Thùy Trang",
            "address" : "231 - Trường Lưu,Phường Long Trường,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7942439",
            "long" : "106.8246753",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819349,
            "code" : "2981876",
            "name" : "chợ sạch park RiverSide",
            "address" : "M11 KDC Park Riverside Premium,Phường Phú Hữu,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8088243",
            "long" : "106.80211889",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819350,
            "code" : "3065447",
            "name" : "Anh Lý",
            "address" : "81A Bưng Ông Thoàng,p.Phú Hữu,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7968059",
            "long" : "106.8008781",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819351,
            "code" : "3671913",
            "name" : "Trần Thị Anh Thảo",
            "address" : "50 Gò Cát, P. long trường,Long Trường,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7873933",
            "long" : "106.80088",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819352,
            "code" : "4076026",
            "name" : "Ngọc Ánh",
            "address" : "1013 Nguyễn Duy Trinh, P. Phú Hữu,P. Phú Hữu,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7950546",
            "long" : "106.807299",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819353,
            "code" : "4419091",
            "name" : "S MARTKET",
            "address" : "SH32 Park Riveside,,Bưng Ông Thoàng,P.Phú Hữu,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8099165",
            "long" : "106.803154",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819354,
            "code" : "2813477",
            "name" : "Lê Văn Tài",
            "address" : "C007 Khu Dân Cư Ehomes,Phường Phú Hữu,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7977505",
            "long" : "106.7856428",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819355,
            "code" : "4826658",
            "name" : "Kmart Thủ Đức",
            "address" : "E26 KDC Park Riverside Bưng Ông Thoàn,Phường Phú Hữu,Quận Thủ Đức,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8076456",
            "long" : "106.8001648",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819356,
            "code" : "4834560",
            "name" : "Trường ĐH KHXH và Nhân Văn 2",
            "address" : "Khu Phố 6,P. Linh Trung,QUẬN THỦ ĐỨC,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.870105",
            "long" : "106.80003",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819357,
            "code" : "4834558",
            "name" : "KVC NORA",
            "address" : "109 TRƯỜNG LƯU,P. LONG TRƯỜNG,QUẬN THỦ ĐỨC,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.700164",
            "long" : "106.72888",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819358,
            "code" : "38149000003",
            "name" : "Fami mart",
            "address" : "33\/2 gò cát, Phường Phú Hữu, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
            "lat" : "10.7873992",
            "long" : "106.8009187",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819359,
            "code" : "38149000005",
            "name" : "THPT Lương Thế Vinh",
            "address" : "131 cô bắc, Phường Cầu Ông Lãnh, Quận 1, Thành phố Hồ Chí Minh",
            "lat" : "10.7493524",
            "long" : "106.720067",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819360,
            "code" : "38149000002",
            "name" : "Vissan",
            "address" : "21-23 phan chu trinh, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh",
            "lat" : "10.7367718",
            "long" : "106.7171967",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819361,
            "code" : "2812958",
            "name" : "Huỳnh Thi Liên",
            "address" : "TK14\/8 Nguyễn Cảnh Chân,Phường Cầu Kho,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.757901",
            "long" : "106.6875274",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819362,
            "code" : "2812967",
            "name" : "Lê Thị Kiếp",
            "address" : "146 Cô Giang,Phường cô Giang,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7622974",
            "long" : "106.6938782",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819363,
            "code" : "2812984",
            "name" : "Châu Yến Thanh",
            "address" : "109 Ký Con,Phường Nguyễn Thái Bình,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7672034",
            "long" : "106.6984342",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819364,
            "code" : "3673943",
            "name" : "TH Tiến Phát",
            "address" : "100 hàm nghi,P.Bến Nghé,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.77082",
            "long" : "106.70266",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819365,
            "code" : "4439219",
            "name" : "Cô Hồng",
            "address" : "311-312 Chợ Cầu Muối,P. Cầu Ông Lãnh,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.765659",
            "long" : "106.69594",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819366,
            "code" : "4465445",
            "name" : "CH Trí Vĩ",
            "address" : "TK 26\/4 Nguyễn Cảnh Chân,P.Cầu Kho,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.758767",
            "long" : "106.68783",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819367,
            "code" : "4762440",
            "name" : "ECO TRUE MART",
            "address" : "số 7-9 Nguyễn Bỉnh Khiêm,P. Bến Nghé,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.786309",
            "long" : "106.706116",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819368,
            "code" : "4812085",
            "name" : "Căn Tin Bệnh Viện 30\/4",
            "address" : "9 Sư Vạn Hạnh,P. 5,QUẬN 5,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.759548",
            "long" : "106.672585",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819369,
            "code" : "4856758",
            "name" : "Phan Thị Mỹ Hồng",
            "address" : "676\/26 Võ Văn Kiệt,P. 1,QUẬN 5,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.752485",
            "long" : "106.683304",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819370,
            "code" : "2831371",
            "name" : "Trường Trần Đại Nghĩa",
            "address" : "Số 53 Nguyễn Du,Phường Bến Nghé,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.778851",
            "long" : "106.7020135",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819371,
            "code" : "4340641",
            "name" : "Trường THTH Sài Gòn",
            "address" : "220 Đường Trần Bình Trọng,P. 4,Quận 5,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.760928",
            "long" : "106.67986",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819372,
            "code" : "2812759",
            "name" : "THPT Trưng Vương",
            "address" : "3A Nguyễn Bỉnh Khiêm,Phường Bến Nghé,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7856441",
            "long" : "106.7067369",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819373,
            "code" : "2813137",
            "name" : "Nguyen Thi Thuy",
            "address" : "109\/12 Nguyễn Thiện Thuật,Phường 2,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7673468",
            "long" : "106.6802494",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819374,
            "code" : "2813138",
            "name" : "To Thi Kim Thoa",
            "address" : "008 Lô F1 Chung cư Nguyễn Thiệ,Phường 1,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7683159",
            "long" : "106.6773163",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819375,
            "code" : "2813141",
            "name" : "Dang Thi Thuy",
            "address" : "105A Vườn Chuối,Phường 4,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7743104",
            "long" : "106.6826485",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819376,
            "code" : "2813146",
            "name" : "Ngô Ngọc Bích",
            "address" : "376 Cách Mạng Tháng Tám,Phường 10,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.782683",
            "long" : "106.6725999",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819377,
            "code" : "2813148",
            "name" : "Vi Thi Nữ Hanh",
            "address" : "17A Trần Văn Đãng,Phường 9,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7826444",
            "long" : "106.6794872",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819378,
            "code" : "2813149",
            "name" : "Do Thi Thu Nguyet",
            "address" : "91 Nguyễn Thông,Phường 9,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7806314",
            "long" : "106.6799663",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819379,
            "code" : "2813150",
            "name" : "Nha Sach Duc Me",
            "address" : "38 Kỳ Đồng,Phường 9,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7819715",
            "long" : "106.6809753",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819380,
            "code" : "2813151",
            "name" : "Bakery",
            "address" : "1029 Cách Mạng Tháng Tám,Phường 14,Quận Tân Bình,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7910242",
            "long" : "106.6565012",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819381,
            "code" : "2813152",
            "name" : "Trường THCS College",
            "address" : "10 Hồ Xuân Hương,Phường 6,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7760284",
            "long" : "106.6869818",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819382,
            "code" : "2834330",
            "name" : "Đàm Quang Trinh-Trần Văn Đang",
            "address" : "205\/39\/29 Trần Văn Đang,Phường 11,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7863293",
            "long" : "106.6721273",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819383,
            "code" : "2834332",
            "name" : "Vũ Thành Tiến-Nguyễn Thông",
            "address" : "1 Nguyễn Thông,Phường 10,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7818712",
            "long" : "106.6784814",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819384,
            "code" : "3024652",
            "name" : "Nguyễn Thị Tuyết Ngân",
            "address" : "205\/47 Trần Văn Đang,P11,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7861371",
            "long" : "106.6728898",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819385,
            "code" : "4290135",
            "name" : "Chị Mai",
            "address" : "Ga Sài Gòn,1 Nguyễn Thông,Phường 9,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.782439",
            "long" : "106.6774097",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819386,
            "code" : "2812662",
            "name" : "Trường THCS LÊ LỢI-",
            "address" : "282 Võ Thị Sáu,Phường 7,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7787576",
            "long" : "106.6819909",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819387,
            "code" : "4812672",
            "name" : "TH 034",
            "address" : "034 LÔ A, CC NGUYỄN THIỆN THUẬT,P.1,QUẬN 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7674293",
            "long" : "106.6786578",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819388,
            "code" : "3572226",
            "name" : "Trường THCS Thăng Long",
            "address" : "482-484 Nguyễn Thị Minh Khai,Phường 2,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.76682",
            "long" : "106.68289",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819389,
            "code" : "3000599000001",
            "name" : "Pham Diem",
            "address" : "4\/15 Bùi Cẩm Hổ, P.Phú Thọ Hoà, Q.Tân Phú, Phường Phú Thọ Hòa, Quận Tân Phú, Thành phố Hồ Chí Minh",
            "lat" : "10.763119765777",
            "long" : "106.63436256144",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819390,
            "code" : "3442339",
            "name" : "Nguyễn Thị Ngọc Linh-I10T4-",
            "address" : "- 35A Lũy Bán Bích - Phường Tân Thới Hòa - Quận Tân Phú",
            "lat" : "10.7599765",
            "long" : "106.6327555",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819391,
            "code" : "2898117",
            "name" : "Nguyen Thi Hai Sam-",
            "address" : "- 36 Lê Quát - Phường Phú Thọ Hòa - Quận Tân Phú",
            "lat" : "10.763770137359",
            "long" : "106.635443410304",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819392,
            "code" : "2898123",
            "name" : "Trinh Thi Kim Phung-",
            "address" : "- 4\/9 Bui Cam Ho - Phường Phú Thọ Hòa - Quận Tân Phú",
            "lat" : "10.763646150285",
            "long" : "106.634317338467",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819393,
            "code" : "2898124",
            "name" : "Ho Sec Phon-",
            "address" : "- 16 Bis Luy Ban Bich - Phường Tân Thới Hòa - Quận Tân Phú",
            "lat" : "10.759960798453",
            "long" : "106.632954378041",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819394,
            "code" : "2898126",
            "name" : "Truong Ái Liên-I10T4-",
            "address" : "- 260\/31 Phan Anh - Phường Hiệp Tân - Quận Tân Phú",
            "lat" : "10.7704475",
            "long" : "106.6236954",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819395,
            "code" : "3036509",
            "name" : "Phan Thị Sáu-I10T4-",
            "address" : "- 49\/30 Lương Thế Vinh - Phường Tân Thới Hòa - Quận Tân Phú",
            "lat" : "10.7628711",
            "long" : "106.6303385",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819396,
            "code" : "2898116",
            "name" : "Trần Hữu Hạnh-I10T4-",
            "address" : "- 149\/29\/8 Luy Ban Bich - Phường Phú Thọ Hòa - Quận Tân Phú",
            "lat" : "10.766013136",
            "long" : "106.63022815",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819397,
            "code" : "2898136",
            "name" : "Dang Thi Thu Suong-I10T4-",
            "address" : "- 252\/11 Phan Anh - Phường Hiệp Tân - Quận Tân Phú",
            "lat" : "10.769161522036",
            "long" : "106.6244565323",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819398,
            "code" : "2898118",
            "name" : "Nguyen Thi My Chau-",
            "address" : "- 28\/33 Luong The Vinh - Phường Phú Thọ Hòa - Quận Tân Phú",
            "lat" : "10.764639438466",
            "long" : "106.630350738194",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819399,
            "code" : "2898130",
            "name" : "Nguyễn Thị Hoàng Mai-I10T4-",
            "address" : "- 151\/52 Lũy Bán Bích - Phường Tân Thới Hòa - Quận Tân Phú",
            "lat" : "10.7666731",
            "long" : "106.6304776",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819400,
            "code" : "2898121",
            "name" : "Quach Thi Hon-",
            "address" : "- 196\/37 To Hieu - Phường Hiệp Tân - Quận Tân Phú",
            "lat" : "10.773372648302",
            "long" : "106.628817000923",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819401,
            "code" : "2898144",
            "name" : "Doan Thanh Son-",
            "address" : "- 349 Thoai Ngoc Hau - Phường Hiệp Tân - Quận Tân Phú",
            "lat" : "10.7764361",
            "long" : "106.626737",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819402,
            "code" : "3447366",
            "name" : "Nguyễn Thanh Lệ-I10T5-",
            "address" : "- 161 Thoại Ngọc Hầu - Phường Phú Thạnh - Quận Tân Phú",
            "lat" : "10.780844",
            "long" : "106.63437",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819403,
            "code" : "2898160",
            "name" : "Nguyen Le Xuan Truc-I10T3-",
            "address" : "- 55 Thach Lam - Phường Hiệp Tân - Quận Tân Phú",
            "lat" : "10.7765064",
            "long" : "106.6318552",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819404,
            "code" : "4745909",
            "name" : "Phạm Đình Huy-I16T6-",
            "address" : "- 46 Lý Thánh Tông - Tân Thới Hòa - Quận Tân Phú",
            "lat" : "10.766946769465",
            "long" : "106.6299296137",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819405,
            "code" : "2898146",
            "name" : "Tran Thi Bich Duyen-",
            "address" : "- 364\/68 Thoai Ngoc Hau - Phường Phú Thạnh - Quận Tân Phú",
            "lat" : "10.7763955",
            "long" : "106.623086",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819406,
            "code" : "2898156",
            "name" : "Trương Thị Kim Hương_I10-",
            "address" : "- 83\/9 Thoại Ngọc Hầu - Phường Hoà Thành - Quận Tân Phú",
            "lat" : "10.7818523",
            "long" : "106.638043",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819407,
            "code" : "4850672",
            "name" : "chị Thảo-I16T6-",
            "address" : "- 34 Bình Long - Phường Phú Thạnh - Quận Tân Phú",
            "lat" : "10.775028955776",
            "long" : "106.62151386518",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819408,
            "code" : "4715863",
            "name" : "Trần Văn Mạnh-",
            "address" : "- 111B Lý Thánh Tông - Phường Tân Thới Hòa - Quận Tân Phú",
            "lat" : "10.766328983333",
            "long" : "106.628339983333",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819409,
            "code" : "4776301",
            "name" : "Vissan Thống Nhất-",
            "address" : "- 79-81 Thống Nhất - phường Tân Thành - Tân Phú",
            "lat" : "10.790606",
            "long" : "106.635086",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819410,
            "code" : "4716403",
            "name" : "TH Lê Quý Đôn - Lê Thị Hồng Tiết-",
            "address" : "- 343D Lạc Long Quân - Phường 5 - Quận 11",
            "lat" : "10.76801",
            "long" : "106.64297",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819411,
            "code" : "4848753",
            "name" : "Nguyễn Thị Thảo-",
            "address" : "- 155 Tân Quý - Phường Tân Quý - Tân Phú",
            "lat" : "10.758950350937",
            "long" : "106.66032950662",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819412,
            "code" : "4848754",
            "name" : "Huỳnh Quan Đính-",
            "address" : "- 745 Lũy Bán Bích - Phường Hòa Thạnh - Tân Phú",
            "lat" : "10.758878464665",
            "long" : "106.66033333758",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819413,
            "code" : "4800606",
            "name" : "BH Song Anh-I17T2-",
            "address" : "- 158 Thạch Lam - Phường Phú Thạnh - Quận Tân Phú",
            "lat" : "10.77752269",
            "long" : "106.62840391",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819414,
            "code" : "2813248",
            "name" : "Nguyễn Hải Châu",
            "address" : "145 Trần Đình Xu,Phường Nguyễn Cư Trinh,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7629372",
            "long" : "106.68741778",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819415,
            "code" : "2813251",
            "name" : "Hòang Kim Chi",
            "address" : "212\/C87 Nguyễn Trãi,Phường Nguyễn Cư Trinh,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7654581",
            "long" : "106.68538644",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819416,
            "code" : "2813265",
            "name" : "Lê Mỹ Duyên",
            "address" : "45 Điện Biên Phủ,Phường Đa Kao,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.79137615",
            "long" : "106.6982528",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819417,
            "code" : "2813266",
            "name" : "Đào Thi Diễm Huyền",
            "address" : "17 Trần Khắc Chân,Phường Tân Định,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.79263413",
            "long" : "106.69136952",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819418,
            "code" : "2812979",
            "name" : "Nguyễn Ngọc Phượng",
            "address" : "B1.6 Lý Văn Phức,Phường Tân Định,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.79099746",
            "long" : "106.69312697",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819419,
            "code" : "4159668",
            "name" : "Bảo Tàng CTC Tranh",
            "address" : "28 Võ Văn Tần,P. Võ Thị Sáu,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7796558",
            "long" : "106.69228431",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819420,
            "code" : "4452225",
            "name" : "NaMastle InDia",
            "address" : "121 Nguyễn Hữu Cảnh,P. 22,Quận Bình Thạnh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.79561234",
            "long" : "106.71808348",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819421,
            "code" : "4505731",
            "name" : "MAMA MASALA",
            "address" : "83 Đường Nguyễn Cư Trinh,P.Nguyễn Cư Trinh,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.76411633",
            "long" : "106.69055196",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819422,
            "code" : "4586695",
            "name" : "CH SANHA",
            "address" : "9 Phan Huy Ôn,P.19,Quận Bình Thạnh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.791716",
            "long" : "106.70838908",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819423,
            "code" : "4696441",
            "name" : "BẢO TÀNG",
            "address" : "28 VÕ VĂN TẦN,P. VÕ THỊ SÁU,QUẬN 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.70014",
            "long" : "106.72889",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819424,
            "code" : "2813259",
            "name" : "THPT Nguyễn T.M Khai",
            "address" : "28 Ngô Thời Nhiệm,Phường 6,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7781572",
            "long" : "106.6874851",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819425,
            "code" : "2813267",
            "name" : "THPT Lê Quý Đôn",
            "address" : "110 Nguyễn Thị Minh Khai,Phường 6,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7798914",
            "long" : "106.6935861",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819426,
            "code" : "4419720",
            "name" : "THPT Bùi Thị Xuân",
            "address" : "73 Bùi Thị Xuân,P. Bến Thành,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.769471",
            "long" : "106.68813",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819427,
            "code" : "2812957",
            "name" : "Mai Thi Thuy",
            "address" : "5 Trương Đinh,Phường 6,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7760363",
            "long" : "106.6914952",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819428,
            "code" : "2812966",
            "name" : "Đinh Thị Nguyệt Thu",
            "address" : "60 Lý Chính Thắng,Phường 8,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7902643",
            "long" : "106.6863136",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819429,
            "code" : "2812972",
            "name" : "Lê Thị Thảo",
            "address" : "453\/77\/2 Lê Văn Sỹ,Phường 12,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7891493",
            "long" : "106.6729937",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819430,
            "code" : "2812978",
            "name" : "Dang Thi Thuy Loan",
            "address" : "339\/39 Lê Văn Sỹ,Phường 12,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7863076",
            "long" : "106.6771901",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819431,
            "code" : "2812985",
            "name" : "Tieu Thi Dat",
            "address" : "262\/29 Lê Văn Sỹ,Phường 14,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7873969",
            "long" : "106.6811586",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819432,
            "code" : "3116698",
            "name" : "Cô Duyên",
            "address" : "932G Trường Sa,Phường13,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7847255",
            "long" : "106.6794663",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819433,
            "code" : "4686082",
            "name" : "ABC Bakery",
            "address" : "282B Lê Văn Sỹ,P. 14,QUẬN 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.786904",
            "long" : "106.67992",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819434,
            "code" : "2812762",
            "name" : "TH Trần Văn Ơn",
            "address" : "161 Nguyễn Văn Thụ,Phường Đa Kao,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.788234",
            "long" : "106.697945",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819435,
            "code" : "4365173",
            "name" : "TH Nguyễn Bỉnh khiêm",
            "address" : "2 BIS Nguyễn Bỉnh Khiêm,P.Bến Nghé,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7496067",
            "long" : "106.719995",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819436,
            "code" : "38149000001",
            "name" : "TH Duyên",
            "address" : "115\/4 đường tân mỹ, Phường Tân Thuận Tây, Quận 7, Thành phố Hồ Chí Minh",
            "lat" : "10.749357",
            "long" : "106.720022",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819437,
            "code" : "2812654",
            "name" : "Nguyễn Thị Hồng",
            "address" : "630 Nguyễn Duy Trinh,Phường Bình Trưng Đông,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7888276",
            "long" : "106.7781623",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819438,
            "code" : "2813432",
            "name" : "Le Thi Nhai",
            "address" : "376 Nguyen Thi Dinh,Phường Thạnh Mỹ Lợi,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7823139",
            "long" : "106.7601223",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819439,
            "code" : "2813433",
            "name" : "Ngo Hong Nhung",
            "address" : "39 Đường 3,Phường Thạnh Mỹ Lợi,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7803234",
            "long" : "106.7596631",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819440,
            "code" : "2813446",
            "name" : "Nguyễn Thị Thu Thủy",
            "address" : "40 Đường 28,Phường Cát Lái,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7797805",
            "long" : "106.7708034",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819441,
            "code" : "2813458",
            "name" : "Nguyen Thi Thanh Tuuyen",
            "address" : "11 Đường 6,Phường Bình Trưng Đông,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7844679",
            "long" : "106.7579663",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819442,
            "code" : "2813463",
            "name" : "Lương Thị Nga",
            "address" : "19 Đường 42, Lê Văn Thịnh,Phường Bình Trưng Đông,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7837447",
            "long" : "106.7699262",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819443,
            "code" : "2813465",
            "name" : "Nguyen Van Phung",
            "address" : "99 Le Van Thinh,Phường Bình Trưng Đông,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7840858",
            "long" : "106.7691881",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819444,
            "code" : "3513342",
            "name" : "MEGABOWL",
            "address" : "lầu 2 CBD premium home 125 Đồng Văn Cống,P.Thạnh Mỹ Lợi,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7744536",
            "long" : "106.7618274",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819445,
            "code" : "3991983",
            "name" : "TH Hoa Cà",
            "address" : "52 Đường 18, Nguyễn Thị ĐỊnh,P. Thạnh Mỹ Lợi,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.774423",
            "long" : "106.76486",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819446,
            "code" : "4542618",
            "name" : "CH Gia Hào",
            "address" : "96 Đường 42, Lê Văn Thịnh,P. Bình Trưng Đông,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.784556",
            "long" : "106.77297",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819447,
            "code" : "38149000004",
            "name" : "Công Tỷ cổ phần TMDV Thiện Pháp",
            "address" : "Toà nhà joy kcx, Phường Linh Trung, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
            "lat" : "10.7493532",
            "long" : "106.7200534",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819448,
            "code" : "2813518",
            "name" : "TH phương Loan",
            "address" : "1432 Nguyễn Duy Trinh,Phường Long Trường,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8059384",
            "long" : "106.8200579",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819449,
            "code" : "2813522",
            "name" : "Ngo Thi Lang",
            "address" : "11 Đường 898, KP4,Phường Phú Hữu,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7898352",
            "long" : "106.7985645",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819450,
            "code" : "2813538",
            "name" : "Đặng Ngọc Thanh",
            "address" : "1056 Nguyễn Duy Trinh,Phường Long Trường,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7996979",
            "long" : "106.8094676",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819451,
            "code" : "2813548",
            "name" : "chợ sạch melosa",
            "address" : "59 đường số 2, khu nhà melosa,Phường Phú Hữu,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7822712",
            "long" : "106.7924454",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819452,
            "code" : "2813512",
            "name" : "Chu Thị Thùy Trang",
            "address" : "231 - Trường Lưu,Phường Long Trường,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7942439",
            "long" : "106.8246753",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819453,
            "code" : "2981876",
            "name" : "chợ sạch park RiverSide",
            "address" : "M11 KDC Park Riverside Premium,Phường Phú Hữu,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8088243",
            "long" : "106.80211889",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819454,
            "code" : "3065447",
            "name" : "Anh Lý",
            "address" : "81A Bưng Ông Thoàng,p.Phú Hữu,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7968059",
            "long" : "106.8008781",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819455,
            "code" : "3671913",
            "name" : "Trần Thị Anh Thảo",
            "address" : "50 Gò Cát, P. long trường,Long Trường,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7873933",
            "long" : "106.80088",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819456,
            "code" : "4076026",
            "name" : "Ngọc Ánh",
            "address" : "1013 Nguyễn Duy Trinh, P. Phú Hữu,P. Phú Hữu,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7950546",
            "long" : "106.807299",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819457,
            "code" : "4419091",
            "name" : "S MARTKET",
            "address" : "SH32 Park Riveside,,Bưng Ông Thoàng,P.Phú Hữu,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8099165",
            "long" : "106.803154",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819458,
            "code" : "2813477",
            "name" : "Lê Văn Tài",
            "address" : "C007 Khu Dân Cư Ehomes,Phường Phú Hữu,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7977505",
            "long" : "106.7856428",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819459,
            "code" : "4826658",
            "name" : "Kmart Thủ Đức",
            "address" : "E26 KDC Park Riverside Bưng Ông Thoàn,Phường Phú Hữu,Quận Thủ Đức,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8076456",
            "long" : "106.8001648",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819460,
            "code" : "4834560",
            "name" : "Trường ĐH KHXH và Nhân Văn 2",
            "address" : "Khu Phố 6,P. Linh Trung,QUẬN THỦ ĐỨC,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.870105",
            "long" : "106.80003",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819461,
            "code" : "4834558",
            "name" : "KVC NORA",
            "address" : "109 TRƯỜNG LƯU,P. LONG TRƯỜNG,QUẬN THỦ ĐỨC,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.700164",
            "long" : "106.72888",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819462,
            "code" : "38149000003",
            "name" : "Fami mart",
            "address" : "33\/2 gò cát, Phường Phú Hữu, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
            "lat" : "10.7873992",
            "long" : "106.8009187",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819463,
            "code" : "38149000005",
            "name" : "THPT Lương Thế Vinh",
            "address" : "131 cô bắc, Phường Cầu Ông Lãnh, Quận 1, Thành phố Hồ Chí Minh",
            "lat" : "10.7493524",
            "long" : "106.720067",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819464,
            "code" : "38149000002",
            "name" : "Vissan",
            "address" : "21-23 phan chu trinh, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh",
            "lat" : "10.7367718",
            "long" : "106.7171967",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819465,
            "code" : "2812958",
            "name" : "Huỳnh Thi Liên",
            "address" : "TK14\/8 Nguyễn Cảnh Chân,Phường Cầu Kho,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.757901",
            "long" : "106.6875274",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819466,
            "code" : "2812967",
            "name" : "Lê Thị Kiếp",
            "address" : "146 Cô Giang,Phường cô Giang,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7622974",
            "long" : "106.6938782",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819467,
            "code" : "2812984",
            "name" : "Châu Yến Thanh",
            "address" : "109 Ký Con,Phường Nguyễn Thái Bình,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7672034",
            "long" : "106.6984342",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819468,
            "code" : "3673943",
            "name" : "TH Tiến Phát",
            "address" : "100 hàm nghi,P.Bến Nghé,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.77082",
            "long" : "106.70266",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819469,
            "code" : "4439219",
            "name" : "Cô Hồng",
            "address" : "311-312 Chợ Cầu Muối,P. Cầu Ông Lãnh,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.765659",
            "long" : "106.69594",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819470,
            "code" : "4465445",
            "name" : "CH Trí Vĩ",
            "address" : "TK 26\/4 Nguyễn Cảnh Chân,P.Cầu Kho,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.758767",
            "long" : "106.68783",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819471,
            "code" : "4762440",
            "name" : "ECO TRUE MART",
            "address" : "số 7-9 Nguyễn Bỉnh Khiêm,P. Bến Nghé,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.786309",
            "long" : "106.706116",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819472,
            "code" : "4812085",
            "name" : "Căn Tin Bệnh Viện 30\/4",
            "address" : "9 Sư Vạn Hạnh,P. 5,QUẬN 5,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.759548",
            "long" : "106.672585",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819473,
            "code" : "4856758",
            "name" : "Phan Thị Mỹ Hồng",
            "address" : "676\/26 Võ Văn Kiệt,P. 1,QUẬN 5,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.752485",
            "long" : "106.683304",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819474,
            "code" : "2831371",
            "name" : "Trường Trần Đại Nghĩa",
            "address" : "Số 53 Nguyễn Du,Phường Bến Nghé,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.778851",
            "long" : "106.7020135",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819475,
            "code" : "4340641",
            "name" : "Trường THTH Sài Gòn",
            "address" : "220 Đường Trần Bình Trọng,P. 4,Quận 5,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.760928",
            "long" : "106.67986",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819476,
            "code" : "2812759",
            "name" : "THPT Trưng Vương",
            "address" : "3A Nguyễn Bỉnh Khiêm,Phường Bến Nghé,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7856441",
            "long" : "106.7067369",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819477,
            "code" : "2813137",
            "name" : "Nguyen Thi Thuy",
            "address" : "109\/12 Nguyễn Thiện Thuật,Phường 2,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7673468",
            "long" : "106.6802494",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819478,
            "code" : "2813138",
            "name" : "To Thi Kim Thoa",
            "address" : "008 Lô F1 Chung cư Nguyễn Thiệ,Phường 1,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7683159",
            "long" : "106.6773163",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819479,
            "code" : "2813141",
            "name" : "Dang Thi Thuy",
            "address" : "105A Vườn Chuối,Phường 4,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7743104",
            "long" : "106.6826485",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819480,
            "code" : "2813146",
            "name" : "Ngô Ngọc Bích",
            "address" : "376 Cách Mạng Tháng Tám,Phường 10,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.782683",
            "long" : "106.6725999",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819481,
            "code" : "2813148",
            "name" : "Vi Thi Nữ Hanh",
            "address" : "17A Trần Văn Đãng,Phường 9,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7826444",
            "long" : "106.6794872",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819482,
            "code" : "2813149",
            "name" : "Do Thi Thu Nguyet",
            "address" : "91 Nguyễn Thông,Phường 9,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7806314",
            "long" : "106.6799663",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819483,
            "code" : "2813150",
            "name" : "Nha Sach Duc Me",
            "address" : "38 Kỳ Đồng,Phường 9,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7819715",
            "long" : "106.6809753",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819484,
            "code" : "2813151",
            "name" : "Bakery",
            "address" : "1029 Cách Mạng Tháng Tám,Phường 14,Quận Tân Bình,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7910242",
            "long" : "106.6565012",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819485,
            "code" : "2813152",
            "name" : "Trường THCS College",
            "address" : "10 Hồ Xuân Hương,Phường 6,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7760284",
            "long" : "106.6869818",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819486,
            "code" : "2834330",
            "name" : "Đàm Quang Trinh-Trần Văn Đang",
            "address" : "205\/39\/29 Trần Văn Đang,Phường 11,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7863293",
            "long" : "106.6721273",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819487,
            "code" : "2834332",
            "name" : "Vũ Thành Tiến-Nguyễn Thông",
            "address" : "1 Nguyễn Thông,Phường 10,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7818712",
            "long" : "106.6784814",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819488,
            "code" : "3024652",
            "name" : "Nguyễn Thị Tuyết Ngân",
            "address" : "205\/47 Trần Văn Đang,P11,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7861371",
            "long" : "106.6728898",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819489,
            "code" : "4290135",
            "name" : "Chị Mai",
            "address" : "Ga Sài Gòn,1 Nguyễn Thông,Phường 9,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.782439",
            "long" : "106.6774097",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819490,
            "code" : "2812662",
            "name" : "Trường THCS LÊ LỢI-",
            "address" : "282 Võ Thị Sáu,Phường 7,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7787576",
            "long" : "106.6819909",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819491,
            "code" : "4812672",
            "name" : "TH 034",
            "address" : "034 LÔ A, CC NGUYỄN THIỆN THUẬT,P.1,QUẬN 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7674293",
            "long" : "106.6786578",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819492,
            "code" : "3572226",
            "name" : "Trường THCS Thăng Long",
            "address" : "482-484 Nguyễn Thị Minh Khai,Phường 2,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.76682",
            "long" : "106.68289",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819493,
            "code" : "3000599000001",
            "name" : "Pham Diem",
            "address" : "4\/15 Bùi Cẩm Hổ, P.Phú Thọ Hoà, Q.Tân Phú, Phường Phú Thọ Hòa, Quận Tân Phú, Thành phố Hồ Chí Minh",
            "lat" : "10.763119765777",
            "long" : "106.63436256144",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819494,
            "code" : "3442339",
            "name" : "Nguyễn Thị Ngọc Linh-I10T4-",
            "address" : "- 35A Lũy Bán Bích - Phường Tân Thới Hòa - Quận Tân Phú",
            "lat" : "10.7599765",
            "long" : "106.6327555",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819495,
            "code" : "2898117",
            "name" : "Nguyen Thi Hai Sam-",
            "address" : "- 36 Lê Quát - Phường Phú Thọ Hòa - Quận Tân Phú",
            "lat" : "10.763770137359",
            "long" : "106.635443410304",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819496,
            "code" : "2898123",
            "name" : "Trinh Thi Kim Phung-",
            "address" : "- 4\/9 Bui Cam Ho - Phường Phú Thọ Hòa - Quận Tân Phú",
            "lat" : "10.763646150285",
            "long" : "106.634317338467",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819497,
            "code" : "2898124",
            "name" : "Ho Sec Phon-",
            "address" : "- 16 Bis Luy Ban Bich - Phường Tân Thới Hòa - Quận Tân Phú",
            "lat" : "10.759960798453",
            "long" : "106.632954378041",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819498,
            "code" : "2898126",
            "name" : "Truong Ái Liên-I10T4-",
            "address" : "- 260\/31 Phan Anh - Phường Hiệp Tân - Quận Tân Phú",
            "lat" : "10.7704475",
            "long" : "106.6236954",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819499,
            "code" : "3036509",
            "name" : "Phan Thị Sáu-I10T4-",
            "address" : "- 49\/30 Lương Thế Vinh - Phường Tân Thới Hòa - Quận Tân Phú",
            "lat" : "10.7628711",
            "long" : "106.6303385",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819500,
            "code" : "2898116",
            "name" : "Trần Hữu Hạnh-I10T4-",
            "address" : "- 149\/29\/8 Luy Ban Bich - Phường Phú Thọ Hòa - Quận Tân Phú",
            "lat" : "10.766013136",
            "long" : "106.63022815",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819501,
            "code" : "2898136",
            "name" : "Dang Thi Thu Suong-I10T4-",
            "address" : "- 252\/11 Phan Anh - Phường Hiệp Tân - Quận Tân Phú",
            "lat" : "10.769161522036",
            "long" : "106.6244565323",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819502,
            "code" : "2898118",
            "name" : "Nguyen Thi My Chau-",
            "address" : "- 28\/33 Luong The Vinh - Phường Phú Thọ Hòa - Quận Tân Phú",
            "lat" : "10.764639438466",
            "long" : "106.630350738194",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819503,
            "code" : "2898130",
            "name" : "Nguyễn Thị Hoàng Mai-I10T4-",
            "address" : "- 151\/52 Lũy Bán Bích - Phường Tân Thới Hòa - Quận Tân Phú",
            "lat" : "10.7666731",
            "long" : "106.6304776",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819504,
            "code" : "2898121",
            "name" : "Quach Thi Hon-",
            "address" : "- 196\/37 To Hieu - Phường Hiệp Tân - Quận Tân Phú",
            "lat" : "10.773372648302",
            "long" : "106.628817000923",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819505,
            "code" : "2898144",
            "name" : "Doan Thanh Son-",
            "address" : "- 349 Thoai Ngoc Hau - Phường Hiệp Tân - Quận Tân Phú",
            "lat" : "10.7764361",
            "long" : "106.626737",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819506,
            "code" : "3447366",
            "name" : "Nguyễn Thanh Lệ-I10T5-",
            "address" : "- 161 Thoại Ngọc Hầu - Phường Phú Thạnh - Quận Tân Phú",
            "lat" : "10.780844",
            "long" : "106.63437",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819507,
            "code" : "2898160",
            "name" : "Nguyen Le Xuan Truc-I10T3-",
            "address" : "- 55 Thach Lam - Phường Hiệp Tân - Quận Tân Phú",
            "lat" : "10.7765064",
            "long" : "106.6318552",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819508,
            "code" : "4745909",
            "name" : "Phạm Đình Huy-I16T6-",
            "address" : "- 46 Lý Thánh Tông - Tân Thới Hòa - Quận Tân Phú",
            "lat" : "10.766946769465",
            "long" : "106.6299296137",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819509,
            "code" : "2898146",
            "name" : "Tran Thi Bich Duyen-",
            "address" : "- 364\/68 Thoai Ngoc Hau - Phường Phú Thạnh - Quận Tân Phú",
            "lat" : "10.7763955",
            "long" : "106.623086",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819510,
            "code" : "2898156",
            "name" : "Trương Thị Kim Hương_I10-",
            "address" : "- 83\/9 Thoại Ngọc Hầu - Phường Hoà Thành - Quận Tân Phú",
            "lat" : "10.7818523",
            "long" : "106.638043",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819511,
            "code" : "4850672",
            "name" : "chị Thảo-I16T6-",
            "address" : "- 34 Bình Long - Phường Phú Thạnh - Quận Tân Phú",
            "lat" : "10.775028955776",
            "long" : "106.62151386518",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819512,
            "code" : "4715863",
            "name" : "Trần Văn Mạnh-",
            "address" : "- 111B Lý Thánh Tông - Phường Tân Thới Hòa - Quận Tân Phú",
            "lat" : "10.766328983333",
            "long" : "106.628339983333",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819513,
            "code" : "4776301",
            "name" : "Vissan Thống Nhất-",
            "address" : "- 79-81 Thống Nhất - phường Tân Thành - Tân Phú",
            "lat" : "10.790606",
            "long" : "106.635086",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819514,
            "code" : "4716403",
            "name" : "TH Lê Quý Đôn - Lê Thị Hồng Tiết-",
            "address" : "- 343D Lạc Long Quân - Phường 5 - Quận 11",
            "lat" : "10.76801",
            "long" : "106.64297",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819515,
            "code" : "4848753",
            "name" : "Nguyễn Thị Thảo-",
            "address" : "- 155 Tân Quý - Phường Tân Quý - Tân Phú",
            "lat" : "10.758950350937",
            "long" : "106.66032950662",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819516,
            "code" : "4848754",
            "name" : "Huỳnh Quan Đính-",
            "address" : "- 745 Lũy Bán Bích - Phường Hòa Thạnh - Tân Phú",
            "lat" : "10.758878464665",
            "long" : "106.66033333758",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819517,
            "code" : "4800606",
            "name" : "BH Song Anh-I17T2-",
            "address" : "- 158 Thạch Lam - Phường Phú Thạnh - Quận Tân Phú",
            "lat" : "10.77752269",
            "long" : "106.62840391",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819518,
            "code" : "2813248",
            "name" : "Nguyễn Hải Châu",
            "address" : "145 Trần Đình Xu,Phường Nguyễn Cư Trinh,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7629372",
            "long" : "106.68741778",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819519,
            "code" : "2813251",
            "name" : "Hòang Kim Chi",
            "address" : "212\/C87 Nguyễn Trãi,Phường Nguyễn Cư Trinh,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7654581",
            "long" : "106.68538644",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819520,
            "code" : "2813265",
            "name" : "Lê Mỹ Duyên",
            "address" : "45 Điện Biên Phủ,Phường Đa Kao,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.79137615",
            "long" : "106.6982528",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819521,
            "code" : "2813266",
            "name" : "Đào Thi Diễm Huyền",
            "address" : "17 Trần Khắc Chân,Phường Tân Định,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.79263413",
            "long" : "106.69136952",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819522,
            "code" : "2812979",
            "name" : "Nguyễn Ngọc Phượng",
            "address" : "B1.6 Lý Văn Phức,Phường Tân Định,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.79099746",
            "long" : "106.69312697",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819523,
            "code" : "4159668",
            "name" : "Bảo Tàng CTC Tranh",
            "address" : "28 Võ Văn Tần,P. Võ Thị Sáu,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7796558",
            "long" : "106.69228431",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819524,
            "code" : "4452225",
            "name" : "NaMastle InDia",
            "address" : "121 Nguyễn Hữu Cảnh,P. 22,Quận Bình Thạnh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.79561234",
            "long" : "106.71808348",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819525,
            "code" : "4505731",
            "name" : "MAMA MASALA",
            "address" : "83 Đường Nguyễn Cư Trinh,P.Nguyễn Cư Trinh,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.76411633",
            "long" : "106.69055196",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819526,
            "code" : "4586695",
            "name" : "CH SANHA",
            "address" : "9 Phan Huy Ôn,P.19,Quận Bình Thạnh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.791716",
            "long" : "106.70838908",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819527,
            "code" : "4696441",
            "name" : "BẢO TÀNG",
            "address" : "28 VÕ VĂN TẦN,P. VÕ THỊ SÁU,QUẬN 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.70014",
            "long" : "106.72889",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819528,
            "code" : "2813259",
            "name" : "THPT Nguyễn T.M Khai",
            "address" : "28 Ngô Thời Nhiệm,Phường 6,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7781572",
            "long" : "106.6874851",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819529,
            "code" : "2813267",
            "name" : "THPT Lê Quý Đôn",
            "address" : "110 Nguyễn Thị Minh Khai,Phường 6,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7798914",
            "long" : "106.6935861",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819530,
            "code" : "4419720",
            "name" : "THPT Bùi Thị Xuân",
            "address" : "73 Bùi Thị Xuân,P. Bến Thành,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.769471",
            "long" : "106.68813",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819531,
            "code" : "2812957",
            "name" : "Mai Thi Thuy",
            "address" : "5 Trương Đinh,Phường 6,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7760363",
            "long" : "106.6914952",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819532,
            "code" : "2812966",
            "name" : "Đinh Thị Nguyệt Thu",
            "address" : "60 Lý Chính Thắng,Phường 8,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7902643",
            "long" : "106.6863136",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819533,
            "code" : "2812972",
            "name" : "Lê Thị Thảo",
            "address" : "453\/77\/2 Lê Văn Sỹ,Phường 12,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7891493",
            "long" : "106.6729937",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819534,
            "code" : "2812978",
            "name" : "Dang Thi Thuy Loan",
            "address" : "339\/39 Lê Văn Sỹ,Phường 12,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7863076",
            "long" : "106.6771901",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819535,
            "code" : "2812985",
            "name" : "Tieu Thi Dat",
            "address" : "262\/29 Lê Văn Sỹ,Phường 14,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7873969",
            "long" : "106.6811586",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819536,
            "code" : "3116698",
            "name" : "Cô Duyên",
            "address" : "932G Trường Sa,Phường13,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7847255",
            "long" : "106.6794663",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819537,
            "code" : "4686082",
            "name" : "ABC Bakery",
            "address" : "282B Lê Văn Sỹ,P. 14,QUẬN 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.786904",
            "long" : "106.67992",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819538,
            "code" : "2812762",
            "name" : "TH Trần Văn Ơn",
            "address" : "161 Nguyễn Văn Thụ,Phường Đa Kao,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.788234",
            "long" : "106.697945",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819539,
            "code" : "4365173",
            "name" : "TH Nguyễn Bỉnh khiêm",
            "address" : "2 BIS Nguyễn Bỉnh Khiêm,P.Bến Nghé,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7496067",
            "long" : "106.719995",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819540,
            "code" : "38149000001",
            "name" : "TH Duyên",
            "address" : "115\/4 đường tân mỹ, Phường Tân Thuận Tây, Quận 7, Thành phố Hồ Chí Minh",
            "lat" : "10.749357",
            "long" : "106.720022",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819541,
            "code" : "2812654",
            "name" : "Nguyễn Thị Hồng",
            "address" : "630 Nguyễn Duy Trinh,Phường Bình Trưng Đông,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7888276",
            "long" : "106.7781623",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819542,
            "code" : "2813432",
            "name" : "Le Thi Nhai",
            "address" : "376 Nguyen Thi Dinh,Phường Thạnh Mỹ Lợi,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7823139",
            "long" : "106.7601223",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819543,
            "code" : "2813433",
            "name" : "Ngo Hong Nhung",
            "address" : "39 Đường 3,Phường Thạnh Mỹ Lợi,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7803234",
            "long" : "106.7596631",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819544,
            "code" : "2813446",
            "name" : "Nguyễn Thị Thu Thủy",
            "address" : "40 Đường 28,Phường Cát Lái,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7797805",
            "long" : "106.7708034",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819545,
            "code" : "2813458",
            "name" : "Nguyen Thi Thanh Tuuyen",
            "address" : "11 Đường 6,Phường Bình Trưng Đông,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7844679",
            "long" : "106.7579663",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819546,
            "code" : "2813463",
            "name" : "Lương Thị Nga",
            "address" : "19 Đường 42, Lê Văn Thịnh,Phường Bình Trưng Đông,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7837447",
            "long" : "106.7699262",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819547,
            "code" : "2813465",
            "name" : "Nguyen Van Phung",
            "address" : "99 Le Van Thinh,Phường Bình Trưng Đông,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7840858",
            "long" : "106.7691881",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819548,
            "code" : "3513342",
            "name" : "MEGABOWL",
            "address" : "lầu 2 CBD premium home 125 Đồng Văn Cống,P.Thạnh Mỹ Lợi,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7744536",
            "long" : "106.7618274",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819549,
            "code" : "3991983",
            "name" : "TH Hoa Cà",
            "address" : "52 Đường 18, Nguyễn Thị ĐỊnh,P. Thạnh Mỹ Lợi,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.774423",
            "long" : "106.76486",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819550,
            "code" : "4542618",
            "name" : "CH Gia Hào",
            "address" : "96 Đường 42, Lê Văn Thịnh,P. Bình Trưng Đông,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.784556",
            "long" : "106.77297",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819551,
            "code" : "38149000004",
            "name" : "Công Tỷ cổ phần TMDV Thiện Pháp",
            "address" : "Toà nhà joy kcx, Phường Linh Trung, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
            "lat" : "10.7493532",
            "long" : "106.7200534",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819552,
            "code" : "2813518",
            "name" : "TH phương Loan",
            "address" : "1432 Nguyễn Duy Trinh,Phường Long Trường,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8059384",
            "long" : "106.8200579",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819553,
            "code" : "2813522",
            "name" : "Ngo Thi Lang",
            "address" : "11 Đường 898, KP4,Phường Phú Hữu,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7898352",
            "long" : "106.7985645",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819554,
            "code" : "2813538",
            "name" : "Đặng Ngọc Thanh",
            "address" : "1056 Nguyễn Duy Trinh,Phường Long Trường,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7996979",
            "long" : "106.8094676",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819555,
            "code" : "2813548",
            "name" : "chợ sạch melosa",
            "address" : "59 đường số 2, khu nhà melosa,Phường Phú Hữu,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7822712",
            "long" : "106.7924454",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819556,
            "code" : "2813512",
            "name" : "Chu Thị Thùy Trang",
            "address" : "231 - Trường Lưu,Phường Long Trường,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7942439",
            "long" : "106.8246753",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819557,
            "code" : "2981876",
            "name" : "chợ sạch park RiverSide",
            "address" : "M11 KDC Park Riverside Premium,Phường Phú Hữu,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8088243",
            "long" : "106.80211889",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819558,
            "code" : "3065447",
            "name" : "Anh Lý",
            "address" : "81A Bưng Ông Thoàng,p.Phú Hữu,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7968059",
            "long" : "106.8008781",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819559,
            "code" : "3671913",
            "name" : "Trần Thị Anh Thảo",
            "address" : "50 Gò Cát, P. long trường,Long Trường,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7873933",
            "long" : "106.80088",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819560,
            "code" : "4076026",
            "name" : "Ngọc Ánh",
            "address" : "1013 Nguyễn Duy Trinh, P. Phú Hữu,P. Phú Hữu,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7950546",
            "long" : "106.807299",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819561,
            "code" : "4419091",
            "name" : "S MARTKET",
            "address" : "SH32 Park Riveside,,Bưng Ông Thoàng,P.Phú Hữu,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8099165",
            "long" : "106.803154",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819562,
            "code" : "2813477",
            "name" : "Lê Văn Tài",
            "address" : "C007 Khu Dân Cư Ehomes,Phường Phú Hữu,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7977505",
            "long" : "106.7856428",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819563,
            "code" : "4826658",
            "name" : "Kmart Thủ Đức",
            "address" : "E26 KDC Park Riverside Bưng Ông Thoàn,Phường Phú Hữu,Quận Thủ Đức,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8076456",
            "long" : "106.8001648",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819564,
            "code" : "4834560",
            "name" : "Trường ĐH KHXH và Nhân Văn 2",
            "address" : "Khu Phố 6,P. Linh Trung,QUẬN THỦ ĐỨC,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.870105",
            "long" : "106.80003",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819565,
            "code" : "4834558",
            "name" : "KVC NORA",
            "address" : "109 TRƯỜNG LƯU,P. LONG TRƯỜNG,QUẬN THỦ ĐỨC,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.700164",
            "long" : "106.72888",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819566,
            "code" : "38149000003",
            "name" : "Fami mart",
            "address" : "33\/2 gò cát, Phường Phú Hữu, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
            "lat" : "10.7873992",
            "long" : "106.8009187",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819567,
            "code" : "38149000005",
            "name" : "THPT Lương Thế Vinh",
            "address" : "131 cô bắc, Phường Cầu Ông Lãnh, Quận 1, Thành phố Hồ Chí Minh",
            "lat" : "10.7493524",
            "long" : "106.720067",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819568,
            "code" : "38149000002",
            "name" : "Vissan",
            "address" : "21-23 phan chu trinh, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh",
            "lat" : "10.7367718",
            "long" : "106.7171967",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819569,
            "code" : "2812958",
            "name" : "Huỳnh Thi Liên",
            "address" : "TK14\/8 Nguyễn Cảnh Chân,Phường Cầu Kho,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.757901",
            "long" : "106.6875274",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819570,
            "code" : "2812967",
            "name" : "Lê Thị Kiếp",
            "address" : "146 Cô Giang,Phường cô Giang,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7622974",
            "long" : "106.6938782",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819571,
            "code" : "2812984",
            "name" : "Châu Yến Thanh",
            "address" : "109 Ký Con,Phường Nguyễn Thái Bình,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7672034",
            "long" : "106.6984342",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819572,
            "code" : "3673943",
            "name" : "TH Tiến Phát",
            "address" : "100 hàm nghi,P.Bến Nghé,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.77082",
            "long" : "106.70266",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819573,
            "code" : "4439219",
            "name" : "Cô Hồng",
            "address" : "311-312 Chợ Cầu Muối,P. Cầu Ông Lãnh,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.765659",
            "long" : "106.69594",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819574,
            "code" : "4465445",
            "name" : "CH Trí Vĩ",
            "address" : "TK 26\/4 Nguyễn Cảnh Chân,P.Cầu Kho,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.758767",
            "long" : "106.68783",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819575,
            "code" : "4762440",
            "name" : "ECO TRUE MART",
            "address" : "số 7-9 Nguyễn Bỉnh Khiêm,P. Bến Nghé,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.786309",
            "long" : "106.706116",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819576,
            "code" : "4812085",
            "name" : "Căn Tin Bệnh Viện 30\/4",
            "address" : "9 Sư Vạn Hạnh,P. 5,QUẬN 5,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.759548",
            "long" : "106.672585",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819577,
            "code" : "4856758",
            "name" : "Phan Thị Mỹ Hồng",
            "address" : "676\/26 Võ Văn Kiệt,P. 1,QUẬN 5,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.752485",
            "long" : "106.683304",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819578,
            "code" : "2831371",
            "name" : "Trường Trần Đại Nghĩa",
            "address" : "Số 53 Nguyễn Du,Phường Bến Nghé,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.778851",
            "long" : "106.7020135",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819579,
            "code" : "4340641",
            "name" : "Trường THTH Sài Gòn",
            "address" : "220 Đường Trần Bình Trọng,P. 4,Quận 5,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.760928",
            "long" : "106.67986",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819580,
            "code" : "2812759",
            "name" : "THPT Trưng Vương",
            "address" : "3A Nguyễn Bỉnh Khiêm,Phường Bến Nghé,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7856441",
            "long" : "106.7067369",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819581,
            "code" : "2813137",
            "name" : "Nguyen Thi Thuy",
            "address" : "109\/12 Nguyễn Thiện Thuật,Phường 2,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7673468",
            "long" : "106.6802494",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819582,
            "code" : "2813138",
            "name" : "To Thi Kim Thoa",
            "address" : "008 Lô F1 Chung cư Nguyễn Thiệ,Phường 1,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7683159",
            "long" : "106.6773163",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819583,
            "code" : "2813141",
            "name" : "Dang Thi Thuy",
            "address" : "105A Vườn Chuối,Phường 4,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7743104",
            "long" : "106.6826485",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819584,
            "code" : "2813146",
            "name" : "Ngô Ngọc Bích",
            "address" : "376 Cách Mạng Tháng Tám,Phường 10,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.782683",
            "long" : "106.6725999",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819585,
            "code" : "2813148",
            "name" : "Vi Thi Nữ Hanh",
            "address" : "17A Trần Văn Đãng,Phường 9,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7826444",
            "long" : "106.6794872",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819586,
            "code" : "2813149",
            "name" : "Do Thi Thu Nguyet",
            "address" : "91 Nguyễn Thông,Phường 9,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7806314",
            "long" : "106.6799663",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819587,
            "code" : "2813150",
            "name" : "Nha Sach Duc Me",
            "address" : "38 Kỳ Đồng,Phường 9,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7819715",
            "long" : "106.6809753",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819588,
            "code" : "2813151",
            "name" : "Bakery",
            "address" : "1029 Cách Mạng Tháng Tám,Phường 14,Quận Tân Bình,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7910242",
            "long" : "106.6565012",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819589,
            "code" : "2813152",
            "name" : "Trường THCS College",
            "address" : "10 Hồ Xuân Hương,Phường 6,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7760284",
            "long" : "106.6869818",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819590,
            "code" : "2834330",
            "name" : "Đàm Quang Trinh-Trần Văn Đang",
            "address" : "205\/39\/29 Trần Văn Đang,Phường 11,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7863293",
            "long" : "106.6721273",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819591,
            "code" : "2834332",
            "name" : "Vũ Thành Tiến-Nguyễn Thông",
            "address" : "1 Nguyễn Thông,Phường 10,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7818712",
            "long" : "106.6784814",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819592,
            "code" : "3024652",
            "name" : "Nguyễn Thị Tuyết Ngân",
            "address" : "205\/47 Trần Văn Đang,P11,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7861371",
            "long" : "106.6728898",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819593,
            "code" : "4290135",
            "name" : "Chị Mai",
            "address" : "Ga Sài Gòn,1 Nguyễn Thông,Phường 9,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.782439",
            "long" : "106.6774097",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819594,
            "code" : "2812662",
            "name" : "Trường THCS LÊ LỢI-",
            "address" : "282 Võ Thị Sáu,Phường 7,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7787576",
            "long" : "106.6819909",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819595,
            "code" : "4812672",
            "name" : "TH 034",
            "address" : "034 LÔ A, CC NGUYỄN THIỆN THUẬT,P.1,QUẬN 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7674293",
            "long" : "106.6786578",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819596,
            "code" : "3572226",
            "name" : "Trường THCS Thăng Long",
            "address" : "482-484 Nguyễn Thị Minh Khai,Phường 2,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.76682",
            "long" : "106.68289",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819597,
            "code" : "3000599000001",
            "name" : "Pham Diem",
            "address" : "4\/15 Bùi Cẩm Hổ, P.Phú Thọ Hoà, Q.Tân Phú, Phường Phú Thọ Hòa, Quận Tân Phú, Thành phố Hồ Chí Minh",
            "lat" : "10.763119765777",
            "long" : "106.63436256144",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819598,
            "code" : "3442339",
            "name" : "Nguyễn Thị Ngọc Linh-I10T4-",
            "address" : "- 35A Lũy Bán Bích - Phường Tân Thới Hòa - Quận Tân Phú",
            "lat" : "10.7599765",
            "long" : "106.6327555",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819599,
            "code" : "2898117",
            "name" : "Nguyen Thi Hai Sam-",
            "address" : "- 36 Lê Quát - Phường Phú Thọ Hòa - Quận Tân Phú",
            "lat" : "10.763770137359",
            "long" : "106.635443410304",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819600,
            "code" : "2898123",
            "name" : "Trinh Thi Kim Phung-",
            "address" : "- 4\/9 Bui Cam Ho - Phường Phú Thọ Hòa - Quận Tân Phú",
            "lat" : "10.763646150285",
            "long" : "106.634317338467",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819601,
            "code" : "2898124",
            "name" : "Ho Sec Phon-",
            "address" : "- 16 Bis Luy Ban Bich - Phường Tân Thới Hòa - Quận Tân Phú",
            "lat" : "10.759960798453",
            "long" : "106.632954378041",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819602,
            "code" : "2898126",
            "name" : "Truong Ái Liên-I10T4-",
            "address" : "- 260\/31 Phan Anh - Phường Hiệp Tân - Quận Tân Phú",
            "lat" : "10.7704475",
            "long" : "106.6236954",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819603,
            "code" : "3036509",
            "name" : "Phan Thị Sáu-I10T4-",
            "address" : "- 49\/30 Lương Thế Vinh - Phường Tân Thới Hòa - Quận Tân Phú",
            "lat" : "10.7628711",
            "long" : "106.6303385",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819604,
            "code" : "2898116",
            "name" : "Trần Hữu Hạnh-I10T4-",
            "address" : "- 149\/29\/8 Luy Ban Bich - Phường Phú Thọ Hòa - Quận Tân Phú",
            "lat" : "10.766013136",
            "long" : "106.63022815",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819605,
            "code" : "2898136",
            "name" : "Dang Thi Thu Suong-I10T4-",
            "address" : "- 252\/11 Phan Anh - Phường Hiệp Tân - Quận Tân Phú",
            "lat" : "10.769161522036",
            "long" : "106.6244565323",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819606,
            "code" : "2898118",
            "name" : "Nguyen Thi My Chau-",
            "address" : "- 28\/33 Luong The Vinh - Phường Phú Thọ Hòa - Quận Tân Phú",
            "lat" : "10.764639438466",
            "long" : "106.630350738194",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819607,
            "code" : "2898130",
            "name" : "Nguyễn Thị Hoàng Mai-I10T4-",
            "address" : "- 151\/52 Lũy Bán Bích - Phường Tân Thới Hòa - Quận Tân Phú",
            "lat" : "10.7666731",
            "long" : "106.6304776",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819608,
            "code" : "2898121",
            "name" : "Quach Thi Hon-",
            "address" : "- 196\/37 To Hieu - Phường Hiệp Tân - Quận Tân Phú",
            "lat" : "10.773372648302",
            "long" : "106.628817000923",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819609,
            "code" : "2898144",
            "name" : "Doan Thanh Son-",
            "address" : "- 349 Thoai Ngoc Hau - Phường Hiệp Tân - Quận Tân Phú",
            "lat" : "10.7764361",
            "long" : "106.626737",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819610,
            "code" : "3447366",
            "name" : "Nguyễn Thanh Lệ-I10T5-",
            "address" : "- 161 Thoại Ngọc Hầu - Phường Phú Thạnh - Quận Tân Phú",
            "lat" : "10.780844",
            "long" : "106.63437",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819611,
            "code" : "2898160",
            "name" : "Nguyen Le Xuan Truc-I10T3-",
            "address" : "- 55 Thach Lam - Phường Hiệp Tân - Quận Tân Phú",
            "lat" : "10.7765064",
            "long" : "106.6318552",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819612,
            "code" : "4745909",
            "name" : "Phạm Đình Huy-I16T6-",
            "address" : "- 46 Lý Thánh Tông - Tân Thới Hòa - Quận Tân Phú",
            "lat" : "10.766946769465",
            "long" : "106.6299296137",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819613,
            "code" : "2898146",
            "name" : "Tran Thi Bich Duyen-",
            "address" : "- 364\/68 Thoai Ngoc Hau - Phường Phú Thạnh - Quận Tân Phú",
            "lat" : "10.7763955",
            "long" : "106.623086",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819614,
            "code" : "2898156",
            "name" : "Trương Thị Kim Hương_I10-",
            "address" : "- 83\/9 Thoại Ngọc Hầu - Phường Hoà Thành - Quận Tân Phú",
            "lat" : "10.7818523",
            "long" : "106.638043",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819615,
            "code" : "4850672",
            "name" : "chị Thảo-I16T6-",
            "address" : "- 34 Bình Long - Phường Phú Thạnh - Quận Tân Phú",
            "lat" : "10.775028955776",
            "long" : "106.62151386518",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819616,
            "code" : "4715863",
            "name" : "Trần Văn Mạnh-",
            "address" : "- 111B Lý Thánh Tông - Phường Tân Thới Hòa - Quận Tân Phú",
            "lat" : "10.766328983333",
            "long" : "106.628339983333",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819617,
            "code" : "4776301",
            "name" : "Vissan Thống Nhất-",
            "address" : "- 79-81 Thống Nhất - phường Tân Thành - Tân Phú",
            "lat" : "10.790606",
            "long" : "106.635086",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819618,
            "code" : "4716403",
            "name" : "TH Lê Quý Đôn - Lê Thị Hồng Tiết-",
            "address" : "- 343D Lạc Long Quân - Phường 5 - Quận 11",
            "lat" : "10.76801",
            "long" : "106.64297",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819619,
            "code" : "4848753",
            "name" : "Nguyễn Thị Thảo-",
            "address" : "- 155 Tân Quý - Phường Tân Quý - Tân Phú",
            "lat" : "10.758950350937",
            "long" : "106.66032950662",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819620,
            "code" : "4848754",
            "name" : "Huỳnh Quan Đính-",
            "address" : "- 745 Lũy Bán Bích - Phường Hòa Thạnh - Tân Phú",
            "lat" : "10.758878464665",
            "long" : "106.66033333758",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819621,
            "code" : "4800606",
            "name" : "BH Song Anh-I17T2-",
            "address" : "- 158 Thạch Lam - Phường Phú Thạnh - Quận Tân Phú",
            "lat" : "10.77752269",
            "long" : "106.62840391",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819622,
            "code" : "2813248",
            "name" : "Nguyễn Hải Châu",
            "address" : "145 Trần Đình Xu,Phường Nguyễn Cư Trinh,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7629372",
            "long" : "106.68741778",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819623,
            "code" : "2813251",
            "name" : "Hòang Kim Chi",
            "address" : "212\/C87 Nguyễn Trãi,Phường Nguyễn Cư Trinh,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7654581",
            "long" : "106.68538644",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819624,
            "code" : "2813265",
            "name" : "Lê Mỹ Duyên",
            "address" : "45 Điện Biên Phủ,Phường Đa Kao,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.79137615",
            "long" : "106.6982528",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819625,
            "code" : "2813266",
            "name" : "Đào Thi Diễm Huyền",
            "address" : "17 Trần Khắc Chân,Phường Tân Định,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.79263413",
            "long" : "106.69136952",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819626,
            "code" : "2812979",
            "name" : "Nguyễn Ngọc Phượng",
            "address" : "B1.6 Lý Văn Phức,Phường Tân Định,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.79099746",
            "long" : "106.69312697",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819627,
            "code" : "4159668",
            "name" : "Bảo Tàng CTC Tranh",
            "address" : "28 Võ Văn Tần,P. Võ Thị Sáu,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7796558",
            "long" : "106.69228431",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819628,
            "code" : "4452225",
            "name" : "NaMastle InDia",
            "address" : "121 Nguyễn Hữu Cảnh,P. 22,Quận Bình Thạnh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.79561234",
            "long" : "106.71808348",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819629,
            "code" : "4505731",
            "name" : "MAMA MASALA",
            "address" : "83 Đường Nguyễn Cư Trinh,P.Nguyễn Cư Trinh,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.76411633",
            "long" : "106.69055196",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819630,
            "code" : "4586695",
            "name" : "CH SANHA",
            "address" : "9 Phan Huy Ôn,P.19,Quận Bình Thạnh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.791716",
            "long" : "106.70838908",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819631,
            "code" : "4696441",
            "name" : "BẢO TÀNG",
            "address" : "28 VÕ VĂN TẦN,P. VÕ THỊ SÁU,QUẬN 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.70014",
            "long" : "106.72889",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819632,
            "code" : "2813259",
            "name" : "THPT Nguyễn T.M Khai",
            "address" : "28 Ngô Thời Nhiệm,Phường 6,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7781572",
            "long" : "106.6874851",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819633,
            "code" : "2813267",
            "name" : "THPT Lê Quý Đôn",
            "address" : "110 Nguyễn Thị Minh Khai,Phường 6,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7798914",
            "long" : "106.6935861",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819634,
            "code" : "4419720",
            "name" : "THPT Bùi Thị Xuân",
            "address" : "73 Bùi Thị Xuân,P. Bến Thành,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.769471",
            "long" : "106.68813",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819635,
            "code" : "2812957",
            "name" : "Mai Thi Thuy",
            "address" : "5 Trương Đinh,Phường 6,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7760363",
            "long" : "106.6914952",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819636,
            "code" : "2812966",
            "name" : "Đinh Thị Nguyệt Thu",
            "address" : "60 Lý Chính Thắng,Phường 8,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7902643",
            "long" : "106.6863136",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819637,
            "code" : "2812972",
            "name" : "Lê Thị Thảo",
            "address" : "453\/77\/2 Lê Văn Sỹ,Phường 12,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7891493",
            "long" : "106.6729937",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819638,
            "code" : "2812978",
            "name" : "Dang Thi Thuy Loan",
            "address" : "339\/39 Lê Văn Sỹ,Phường 12,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7863076",
            "long" : "106.6771901",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819639,
            "code" : "2812985",
            "name" : "Tieu Thi Dat",
            "address" : "262\/29 Lê Văn Sỹ,Phường 14,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7873969",
            "long" : "106.6811586",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819640,
            "code" : "3116698",
            "name" : "Cô Duyên",
            "address" : "932G Trường Sa,Phường13,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7847255",
            "long" : "106.6794663",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819641,
            "code" : "4686082",
            "name" : "ABC Bakery",
            "address" : "282B Lê Văn Sỹ,P. 14,QUẬN 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.786904",
            "long" : "106.67992",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819642,
            "code" : "2812762",
            "name" : "TH Trần Văn Ơn",
            "address" : "161 Nguyễn Văn Thụ,Phường Đa Kao,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.788234",
            "long" : "106.697945",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819643,
            "code" : "4365173",
            "name" : "TH Nguyễn Bỉnh khiêm",
            "address" : "2 BIS Nguyễn Bỉnh Khiêm,P.Bến Nghé,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7496067",
            "long" : "106.719995",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819644,
            "code" : "38149000001",
            "name" : "TH Duyên",
            "address" : "115\/4 đường tân mỹ, Phường Tân Thuận Tây, Quận 7, Thành phố Hồ Chí Minh",
            "lat" : "10.749357",
            "long" : "106.720022",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819645,
            "code" : "2812654",
            "name" : "Nguyễn Thị Hồng",
            "address" : "630 Nguyễn Duy Trinh,Phường Bình Trưng Đông,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7888276",
            "long" : "106.7781623",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819646,
            "code" : "2813432",
            "name" : "Le Thi Nhai",
            "address" : "376 Nguyen Thi Dinh,Phường Thạnh Mỹ Lợi,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7823139",
            "long" : "106.7601223",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819647,
            "code" : "2813433",
            "name" : "Ngo Hong Nhung",
            "address" : "39 Đường 3,Phường Thạnh Mỹ Lợi,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7803234",
            "long" : "106.7596631",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819648,
            "code" : "2813446",
            "name" : "Nguyễn Thị Thu Thủy",
            "address" : "40 Đường 28,Phường Cát Lái,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7797805",
            "long" : "106.7708034",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819649,
            "code" : "2813458",
            "name" : "Nguyen Thi Thanh Tuuyen",
            "address" : "11 Đường 6,Phường Bình Trưng Đông,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7844679",
            "long" : "106.7579663",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819650,
            "code" : "2813463",
            "name" : "Lương Thị Nga",
            "address" : "19 Đường 42, Lê Văn Thịnh,Phường Bình Trưng Đông,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7837447",
            "long" : "106.7699262",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819651,
            "code" : "2813465",
            "name" : "Nguyen Van Phung",
            "address" : "99 Le Van Thinh,Phường Bình Trưng Đông,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7840858",
            "long" : "106.7691881",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819652,
            "code" : "3513342",
            "name" : "MEGABOWL",
            "address" : "lầu 2 CBD premium home 125 Đồng Văn Cống,P.Thạnh Mỹ Lợi,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7744536",
            "long" : "106.7618274",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819653,
            "code" : "3991983",
            "name" : "TH Hoa Cà",
            "address" : "52 Đường 18, Nguyễn Thị ĐỊnh,P. Thạnh Mỹ Lợi,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.774423",
            "long" : "106.76486",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819654,
            "code" : "4542618",
            "name" : "CH Gia Hào",
            "address" : "96 Đường 42, Lê Văn Thịnh,P. Bình Trưng Đông,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.784556",
            "long" : "106.77297",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819655,
            "code" : "38149000004",
            "name" : "Công Tỷ cổ phần TMDV Thiện Pháp",
            "address" : "Toà nhà joy kcx, Phường Linh Trung, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
            "lat" : "10.7493532",
            "long" : "106.7200534",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819656,
            "code" : "2813518",
            "name" : "TH phương Loan",
            "address" : "1432 Nguyễn Duy Trinh,Phường Long Trường,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8059384",
            "long" : "106.8200579",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819657,
            "code" : "2813522",
            "name" : "Ngo Thi Lang",
            "address" : "11 Đường 898, KP4,Phường Phú Hữu,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7898352",
            "long" : "106.7985645",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819658,
            "code" : "2813538",
            "name" : "Đặng Ngọc Thanh",
            "address" : "1056 Nguyễn Duy Trinh,Phường Long Trường,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7996979",
            "long" : "106.8094676",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819659,
            "code" : "2813548",
            "name" : "chợ sạch melosa",
            "address" : "59 đường số 2, khu nhà melosa,Phường Phú Hữu,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7822712",
            "long" : "106.7924454",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819660,
            "code" : "2813512",
            "name" : "Chu Thị Thùy Trang",
            "address" : "231 - Trường Lưu,Phường Long Trường,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7942439",
            "long" : "106.8246753",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819661,
            "code" : "2981876",
            "name" : "chợ sạch park RiverSide",
            "address" : "M11 KDC Park Riverside Premium,Phường Phú Hữu,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8088243",
            "long" : "106.80211889",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819662,
            "code" : "3065447",
            "name" : "Anh Lý",
            "address" : "81A Bưng Ông Thoàng,p.Phú Hữu,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7968059",
            "long" : "106.8008781",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819663,
            "code" : "3671913",
            "name" : "Trần Thị Anh Thảo",
            "address" : "50 Gò Cát, P. long trường,Long Trường,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7873933",
            "long" : "106.80088",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819664,
            "code" : "4076026",
            "name" : "Ngọc Ánh",
            "address" : "1013 Nguyễn Duy Trinh, P. Phú Hữu,P. Phú Hữu,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7950546",
            "long" : "106.807299",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819665,
            "code" : "4419091",
            "name" : "S MARTKET",
            "address" : "SH32 Park Riveside,,Bưng Ông Thoàng,P.Phú Hữu,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8099165",
            "long" : "106.803154",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819666,
            "code" : "2813477",
            "name" : "Lê Văn Tài",
            "address" : "C007 Khu Dân Cư Ehomes,Phường Phú Hữu,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7977505",
            "long" : "106.7856428",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819667,
            "code" : "4826658",
            "name" : "Kmart Thủ Đức",
            "address" : "E26 KDC Park Riverside Bưng Ông Thoàn,Phường Phú Hữu,Quận Thủ Đức,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8076456",
            "long" : "106.8001648",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819668,
            "code" : "4834560",
            "name" : "Trường ĐH KHXH và Nhân Văn 2",
            "address" : "Khu Phố 6,P. Linh Trung,QUẬN THỦ ĐỨC,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.870105",
            "long" : "106.80003",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819669,
            "code" : "4834558",
            "name" : "KVC NORA",
            "address" : "109 TRƯỜNG LƯU,P. LONG TRƯỜNG,QUẬN THỦ ĐỨC,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.700164",
            "long" : "106.72888",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819670,
            "code" : "38149000003",
            "name" : "Fami mart",
            "address" : "33\/2 gò cát, Phường Phú Hữu, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
            "lat" : "10.7873992",
            "long" : "106.8009187",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819671,
            "code" : "38149000005",
            "name" : "THPT Lương Thế Vinh",
            "address" : "131 cô bắc, Phường Cầu Ông Lãnh, Quận 1, Thành phố Hồ Chí Minh",
            "lat" : "10.7493524",
            "long" : "106.720067",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819672,
            "code" : "38149000002",
            "name" : "Vissan",
            "address" : "21-23 phan chu trinh, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh",
            "lat" : "10.7367718",
            "long" : "106.7171967",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819673,
            "code" : "2812958",
            "name" : "Huỳnh Thi Liên",
            "address" : "TK14\/8 Nguyễn Cảnh Chân,Phường Cầu Kho,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.757901",
            "long" : "106.6875274",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819674,
            "code" : "2812967",
            "name" : "Lê Thị Kiếp",
            "address" : "146 Cô Giang,Phường cô Giang,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7622974",
            "long" : "106.6938782",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819675,
            "code" : "2812984",
            "name" : "Châu Yến Thanh",
            "address" : "109 Ký Con,Phường Nguyễn Thái Bình,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7672034",
            "long" : "106.6984342",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819676,
            "code" : "3673943",
            "name" : "TH Tiến Phát",
            "address" : "100 hàm nghi,P.Bến Nghé,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.77082",
            "long" : "106.70266",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819677,
            "code" : "4439219",
            "name" : "Cô Hồng",
            "address" : "311-312 Chợ Cầu Muối,P. Cầu Ông Lãnh,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.765659",
            "long" : "106.69594",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819678,
            "code" : "4465445",
            "name" : "CH Trí Vĩ",
            "address" : "TK 26\/4 Nguyễn Cảnh Chân,P.Cầu Kho,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.758767",
            "long" : "106.68783",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819679,
            "code" : "4762440",
            "name" : "ECO TRUE MART",
            "address" : "số 7-9 Nguyễn Bỉnh Khiêm,P. Bến Nghé,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.786309",
            "long" : "106.706116",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819680,
            "code" : "4812085",
            "name" : "Căn Tin Bệnh Viện 30\/4",
            "address" : "9 Sư Vạn Hạnh,P. 5,QUẬN 5,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.759548",
            "long" : "106.672585",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819681,
            "code" : "4856758",
            "name" : "Phan Thị Mỹ Hồng",
            "address" : "676\/26 Võ Văn Kiệt,P. 1,QUẬN 5,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.752485",
            "long" : "106.683304",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819682,
            "code" : "2831371",
            "name" : "Trường Trần Đại Nghĩa",
            "address" : "Số 53 Nguyễn Du,Phường Bến Nghé,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.778851",
            "long" : "106.7020135",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819683,
            "code" : "4340641",
            "name" : "Trường THTH Sài Gòn",
            "address" : "220 Đường Trần Bình Trọng,P. 4,Quận 5,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.760928",
            "long" : "106.67986",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819684,
            "code" : "2812759",
            "name" : "THPT Trưng Vương",
            "address" : "3A Nguyễn Bỉnh Khiêm,Phường Bến Nghé,Quận 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7856441",
            "long" : "106.7067369",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819685,
            "code" : "2813137",
            "name" : "Nguyen Thi Thuy",
            "address" : "109\/12 Nguyễn Thiện Thuật,Phường 2,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7673468",
            "long" : "106.6802494",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819686,
            "code" : "2813138",
            "name" : "To Thi Kim Thoa",
            "address" : "008 Lô F1 Chung cư Nguyễn Thiệ,Phường 1,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7683159",
            "long" : "106.6773163",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819687,
            "code" : "2813141",
            "name" : "Dang Thi Thuy",
            "address" : "105A Vườn Chuối,Phường 4,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7743104",
            "long" : "106.6826485",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819688,
            "code" : "2813146",
            "name" : "Ngô Ngọc Bích",
            "address" : "376 Cách Mạng Tháng Tám,Phường 10,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.782683",
            "long" : "106.6725999",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819689,
            "code" : "2813148",
            "name" : "Vi Thi Nữ Hanh",
            "address" : "17A Trần Văn Đãng,Phường 9,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7826444",
            "long" : "106.6794872",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819690,
            "code" : "2813149",
            "name" : "Do Thi Thu Nguyet",
            "address" : "91 Nguyễn Thông,Phường 9,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7806314",
            "long" : "106.6799663",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819691,
            "code" : "2813150",
            "name" : "Nha Sach Duc Me",
            "address" : "38 Kỳ Đồng,Phường 9,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7819715",
            "long" : "106.6809753",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819692,
            "code" : "2813151",
            "name" : "Bakery",
            "address" : "1029 Cách Mạng Tháng Tám,Phường 14,Quận Tân Bình,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7910242",
            "long" : "106.6565012",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819693,
            "code" : "2813152",
            "name" : "Trường THCS College",
            "address" : "10 Hồ Xuân Hương,Phường 6,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7760284",
            "long" : "106.6869818",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819694,
            "code" : "2834330",
            "name" : "Đàm Quang Trinh-Trần Văn Đang",
            "address" : "205\/39\/29 Trần Văn Đang,Phường 11,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7863293",
            "long" : "106.6721273",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819695,
            "code" : "2834332",
            "name" : "Vũ Thành Tiến-Nguyễn Thông",
            "address" : "1 Nguyễn Thông,Phường 10,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7818712",
            "long" : "106.6784814",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819696,
            "code" : "3024652",
            "name" : "Nguyễn Thị Tuyết Ngân",
            "address" : "205\/47 Trần Văn Đang,P11,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7861371",
            "long" : "106.6728898",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819697,
            "code" : "4290135",
            "name" : "Chị Mai",
            "address" : "Ga Sài Gòn,1 Nguyễn Thông,Phường 9,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.782439",
            "long" : "106.6774097",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819698,
            "code" : "2812662",
            "name" : "Trường THCS LÊ LỢI-",
            "address" : "282 Võ Thị Sáu,Phường 7,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7787576",
            "long" : "106.6819909",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819699,
            "code" : "4812672",
            "name" : "TH 034",
            "address" : "034 LÔ A, CC NGUYỄN THIỆN THUẬT,P.1,QUẬN 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7674293",
            "long" : "106.6786578",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819700,
            "code" : "3572226",
            "name" : "Trường THCS Thăng Long",
            "address" : "482-484 Nguyễn Thị Minh Khai,Phường 2,Quận 3,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.76682",
            "long" : "106.68289",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "38149"
        },
        {
            "id" : 1819701,
            "code" : "2813364",
            "name" : "Nguyen Thanh Van",
            "address" : "331\/11A Tôn Đản,Phường 18,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7542866",
            "long" : "106.70587716",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819702,
            "code" : "2813366",
            "name" : "Võ Thi Hòang Yến",
            "address" : "266\/40 Tôn Đản,Phường 8,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75745882",
            "long" : "106.70477936",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819703,
            "code" : "2813367",
            "name" : "Lưu Thị Bích Võ",
            "address" : "307\/11c Tôn Đản.,Phường 15,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75489162",
            "long" : "106.70611472",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819704,
            "code" : "2813368",
            "name" : "Nguyen Thi Hanh",
            "address" : "5 Lê Thach,Phường 1,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7640497",
            "long" : "106.70558587",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819705,
            "code" : "2813369",
            "name" : "Tu Ty",
            "address" : "25 Lê Thach,Phường 2,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.76386402",
            "long" : "106.70601195",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819706,
            "code" : "2813374",
            "name" : "Nguyễn Văn Nở",
            "address" : "122\/16 Tôn Đản,Phường 10,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.759949",
            "long" : "106.70634",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819707,
            "code" : "2813376",
            "name" : "Hồ Thị Ngọc Lài",
            "address" : "37\/9 Đoàn Như Hài,Phường 12,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.765812",
            "long" : "106.7058",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819708,
            "code" : "2813379",
            "name" : "Chuc Thanh Phuong",
            "address" : "2 CC C1Tân Vinh,Phường 6,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75991325",
            "long" : "106.69979388",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819709,
            "code" : "2813382",
            "name" : "Ngo Thi Lan",
            "address" : "K 30 CX Vĩnh Hội, Bến Vân Đồn,Phường 4,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.76121486",
            "long" : "106.69988408",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819710,
            "code" : "2833293",
            "name" : "Trà Sữa Đô Rê Mon-Vĩnh Hội",
            "address" : "D32 Cư Xá Vĩnh Hội,Phường 5,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.760331",
            "long" : "106.69794",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819711,
            "code" : "2812735",
            "name" : "Đoàn Minh Kỳ",
            "address" : "243\/31\/30 Tôn Đản,Phường 15,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.755839",
            "long" : "106.70766",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819712,
            "code" : "3403875",
            "name" : "Trần Thị Hà",
            "address" : "336 Tôn Đản,P4,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.755141",
            "long" : "106.70577",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819713,
            "code" : "4748095",
            "name" : "Trần Thị Nể",
            "address" : "243\/31\/28 Tôn Đản,P.15,QUẬN 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.755775",
            "long" : "106.7077",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819714,
            "code" : "2812657",
            "name" : "Pham Thi Huong",
            "address" : "46 Đường 20,Phường Long Thạnh Mỹ,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.843460932374",
            "long" : "106.827267408371",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819715,
            "code" : "2813537",
            "name" : "Võ Thị Mỹ",
            "address" : "911 Nguyễn Xiển,Phường Long Thạnh Mỹ,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8528621",
            "long" : "106.833501",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819716,
            "code" : "2813539",
            "name" : "Ton Thi Le Thu",
            "address" : "294 Nguyen Van Tang,Phường Long Thạnh Mỹ,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.841163075529",
            "long" : "106.822577733547",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819717,
            "code" : "2813540",
            "name" : "Nguyen Thi Huong Ngoc",
            "address" : "323 Hoàng Hữu Nam,P. Long Thạnh Mỹ,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.868090",
            "long" : "106.813805",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819718,
            "code" : "2813579",
            "name" : "Lưu Đức Bắc",
            "address" : "387 Nguyễn Văn Tăng,Phường Long Thạnh Mỹ,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8410154",
            "long" : "106.8262362",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819719,
            "code" : "2910045",
            "name" : "Nguyễn Thị Hồng-114 Đường số 6",
            "address" : "114 Đường số 6. Kp Long Bửu,Phường Long Bình,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8578272",
            "long" : "106.8435869",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819720,
            "code" : "2813501",
            "name" : "Nguyen Thi Bach Diep",
            "address" : "265 Nguyen Xien,Phường Tăng Nhơn Phú A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.825318847783",
            "long" : "106.829494647682",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819721,
            "code" : "4287692",
            "name" : "Đặc Sản Hà Nội 2",
            "address" : "01 - S01 Toà BS16 CC VinHomes Grandpark  - Nguyễn Xiển,P. Long Thạnh Mỹ,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.847197",
            "long" : "106.843832",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819722,
            "code" : "4390447",
            "name" : "Cam Táo Mart",
            "address" : "T2-14 Manhattan Vinhomes Grandpark,P . Long Thạnh Mỹ,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.839218",
            "long" : "106.84184",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819723,
            "code" : "4748469",
            "name" : "Bách Hóa Sơn Thu",
            "address" : "338 Nguyễn Văn Tăng,P.Long Thạnh Mỹ,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.841236",
            "long" : "106.824187",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819724,
            "code" : "4768508",
            "name" : "KonNi 39",
            "address" : "S6-03 01S15 CC Vinhomes Grandpark - Nguyễn Xiển,P.Long Thạnh Mỹ,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.843946",
            "long" : "106.838032",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819725,
            "code" : "4848252",
            "name" : "Tạp Hóa Kim Oanh",
            "address" : "3\/34 Quyết Thắng - Bình Thắng,Bình Dương,THỊ XÃ DĨ AN,TỈNH BÌNH DƯƠNG",
            "lat" : "10.8603817",
            "long" : "106.8368383",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819726,
            "code" : "4884494",
            "name" : "Mart 24h - 2",
            "address" : "E2 Khu Masteri Vinhomes Grandpark,P.Long Thạnh Mỹ,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.842191",
            "long" : "106.840157",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819727,
            "code" : "2812767",
            "name" : "Nguyễn Thi Kim Thương",
            "address" : "209F Tôn Thất Thuyết,Phường 3,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75531295",
            "long" : "106.69871475",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819728,
            "code" : "2812769",
            "name" : "Trần Thị Thơ",
            "address" : "196\/47\/1 Tôn Thất Thuyết,Phường 3,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75389676",
            "long" : "106.69988188",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819729,
            "code" : "2812771",
            "name" : "Do Thi Thu Ha",
            "address" : "2Lô M CC Tôn Thất Thuyết,Phường 1,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7545183",
            "long" : "106.691966",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819730,
            "code" : "2812734",
            "name" : "Minh Hải",
            "address" : "305 Tôn Thất Thuyết,Phường 1,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.752946",
            "long" : "106.6941",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819731,
            "code" : "2813383",
            "name" : "Khu Bach Lan",
            "address" : "12 Nguyễn Khóai,Phường 10,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75329628",
            "long" : "106.69531752",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819732,
            "code" : "3196340",
            "name" : "Trường Nguyễn Huệ",
            "address" : "243 hoàng diệu,Phường 8,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7615667",
            "long" : "106.7013983",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819733,
            "code" : "2813031",
            "name" : "Nguyễn Thi Lập",
            "address" : "B60 Nguyễn Thần Hiến,Phường 18,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7555034",
            "long" : "106.71682741",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819734,
            "code" : "2813051",
            "name" : "Huỳnh Thị Yên",
            "address" : "A91 Nguyễn Thần Hiến,Phường 18,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75462345",
            "long" : "106.71639125",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819735,
            "code" : "4059615",
            "name" : "TH Chị Lý",
            "address" : "383\/18 Bà Hạt P.4,P.4,Quận 10,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.763885",
            "long" : "106.70596",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819736,
            "code" : "4075702",
            "name" : "Jump Arena",
            "address" : "02-04 Đường Số 9 - Khu Đô Thị Mới Him Lam P. Tân Hưng,P. Tân Hưng,Quận 7,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.742012",
            "long" : "106.695233",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819737,
            "code" : "4274086",
            "name" : "Jum Arena 2",
            "address" : "02 Đường Số 9 - KDT Him Lam P. Tân Hưng,P. Tân Hưng,Quận 7,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.742012",
            "long" : "106.695233",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819738,
            "code" : "4419719",
            "name" : "Jum Arena Gò Vấp",
            "address" : "647 Quang Trung P.11,P.11,Quận Gò Vấp,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.742072",
            "long" : "106.695157",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819739,
            "code" : "4462506",
            "name" : "KVC Khánh Hội",
            "address" : "227 Đường Số 48,P.9,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75845045",
            "long" : "106.69867027",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819740,
            "code" : "4725362",
            "name" : "Đàm Sự Thân",
            "address" : "80 Hàm Nghi,P.Bến Nghé,QUẬN 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7712117",
            "long" : "106.7033751",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819741,
            "code" : "2813037",
            "name" : "Dinh Thi Xe",
            "address" : "692\/24 Đoàn Văn Bơ,Phường 13,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75749948",
            "long" : "106.71226133",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819742,
            "code" : "2813048",
            "name" : "Hồ Ngọc Hòang Dung",
            "address" : "920 Đoàn Văn Bơ,Phường 18,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75667736",
            "long" : "106.71678553",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819743,
            "code" : "2813058",
            "name" : "Lâm Tài",
            "address" : "135 Xóm Chiếu,Phường 14,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.757251",
            "long" : "106.71022",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819744,
            "code" : "2812721",
            "name" : "Nguyễn Thị Hồng Hạnh",
            "address" : "538\/149 Đoàn Văn Bơ,Phường 14,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.757178",
            "long" : "106.708275",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819745,
            "code" : "2812765",
            "name" : "Nguyễn Anh Trung",
            "address" : "92\/18B Tôn Thất Thuyết,Phường 16,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.753966",
            "long" : "106.710175",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819746,
            "code" : "3269598",
            "name" : "Nguyễn Thị Mỹ Dung",
            "address" : "772\/20 Đoàn Văn Bơ,P.10,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.756785",
            "long" : "106.7138",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819747,
            "code" : "4197028",
            "name" : "TH Tiến Đào",
            "address" : "132 Đoàn Văn Bơ P.9,P.9,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.763286",
            "long" : "106.703964",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819748,
            "code" : "4440969",
            "name" : "Jum Arena 3",
            "address" : "645 Quang Trung P.12,P.12,Quận Gò Vấp,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8510392",
            "long" : "106.6609435",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819749,
            "code" : "4614402",
            "name" : "KVC 123 GO",
            "address" : "17 Tô Hiệu,P.Tân Thới Hòa,Quận Tân Phú,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.76631",
            "long" : "106.6269167",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819750,
            "code" : "4664055",
            "name" : "Nguyễn Thị Thu Thủy",
            "address" : "2238 Huỳnh Tấn Phát,Xã Phú Xuân,HUYỆN NHÀ BÈ,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.684122",
            "long" : "106.745345",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819751,
            "code" : "4848220",
            "name" : "KVC 123 Go 3",
            "address" : "641 Kinh Dương Vương,An Lạc,HUYỆN BÌNH TÂN,TỈNH VĨNH LONG",
            "lat" : "10.7663033",
            "long" : "106.6269333",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819752,
            "code" : "3887857",
            "name" : "FGR Tran Quoc Toan - I5T3-",
            "address" : "- 69 Diệp Minh Châu phường Tân Sơn Nhì - Phường Tân Sơn Nhì - Quận Tâ",
            "lat" : "10.7966631",
            "long" : "106.6329118",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819753,
            "code" : "4282761",
            "name" : "Chị Giao - I5T7-",
            "address" : "- 91\/19 Trần Tấn - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.797013126441",
            "long" : "106.63531250719",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819754,
            "code" : "2898639",
            "name" : "Nguyen Thi Huong-",
            "address" : "- 84\/20 Tan Son Nhi - Phường Tân Kỳ - Quận Tân Phú",
            "lat" : "10.8018117",
            "long" : "106.632705",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819755,
            "code" : "4238637",
            "name" : "Dương Thanh Hương - I5T7-",
            "address" : "- 58 Nguyễn Văn Săng - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.7990499",
            "long" : "106.63414564",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819756,
            "code" : "2898703",
            "name" : "Nguyễn Thị Ngọc Anh-I5T6-",
            "address" : "- 985\/37 Âu Cơ - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.8009637",
            "long" : "106.635665",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819757,
            "code" : "4766275",
            "name" : "Cô Oanh-I17T7-",
            "address" : "- 985\/38 Âu Cơ - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.8003333",
            "long" : "106.63521",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819758,
            "code" : "4851350",
            "name" : "TH 92-I17T7-",
            "address" : "- 92 Nguyễn Văn Săng - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.79884",
            "long" : "106.6329433",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819759,
            "code" : "2898621",
            "name" : "Dinh Huu Tho-",
            "address" : "- 20 Doc Lap - Phường Tân Thành - Quận Tân Phú",
            "lat" : "10.791711460458",
            "long" : "106.63617122725",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819760,
            "code" : "2898622",
            "name" : "Nguyen Khac Kinh-",
            "address" : "- 201 Thanh Cong - Phường Tân Thành - Quận Tân Phú",
            "lat" : "10.793511767096",
            "long" : "106.632182338395",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819761,
            "code" : "2898623",
            "name" : "Vu Thi Hanh-",
            "address" : "- 38 Nguyen Ba Tong - Phường Tân Thành - Quận Tân Phú",
            "lat" : "10.791971191176",
            "long" : "106.636473306284",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819762,
            "code" : "2898626",
            "name" : "Pham Ngoc Quyen-",
            "address" : "- 96A Dan Toc - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.794596275583",
            "long" : "106.633838952487",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819763,
            "code" : "2898675",
            "name" : "Nguyễn Minh Tú-I5-",
            "address" : "- 305 Tan Son Nhi - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.796602",
            "long" : "106.630646",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819764,
            "code" : "2898641",
            "name" : "Ly Thuc Trang-",
            "address" : "- 69\/12 Nguyen Cuu Dam - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.79865103",
            "long" : "106.62950443",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819765,
            "code" : "2898643",
            "name" : "Tran Thi Yen Nhi-",
            "address" : "- 177 Tan Ky Tan Quy - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.803152279023",
            "long" : "106.630964298466",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819766,
            "code" : "2898645",
            "name" : "Nguyen Thi Thanh Binh-",
            "address" : "- 249\/35\/9 Tan Ky Tan Quy - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.801227144217",
            "long" : "106.628354455487",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819767,
            "code" : "2898644",
            "name" : "Nguyen Thi Hong-",
            "address" : "- 249\/58 Tan Ky Tan Quy - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.80112155266",
            "long" : "106.627844411593",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819768,
            "code" : "4762251",
            "name" : "TT Minh Quân-17T2-",
            "address" : "- 25A Đường 1 - Phường Tân Thành - Quận Tân Phú",
            "lat" : "10.789932",
            "long" : "106.63141",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819769,
            "code" : "4720503",
            "name" : "Gia Phú-I11T3-",
            "address" : "uận Bình T - 151\/43  liên khu 4\/5 - bình hưng hòa B - Quận Bình Tân",
            "lat" : "10.7900167",
            "long" : "106.631785",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819770,
            "code" : "2898624",
            "name" : "Chu Thi Phuong-",
            "address" : "- 167 Truong Vinh Ky - Phường Tân Thành - Quận Tân Phú",
            "lat" : "10.793749213512",
            "long" : "106.633218616618",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819771,
            "code" : "2898667",
            "name" : "Trần Trọng Đạt-",
            "address" : "- 36 Trần Văn Ơn - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.801242735023",
            "long" : "106.630700125461",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819772,
            "code" : "3887859",
            "name" : "FGR Nguyen Dinh Du - I5T2-",
            "address" : "- 27 Thống Nhất - Phuòng Tân Thành - Quận Tân Phú",
            "lat" : "10.7904119",
            "long" : "106.6364659",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819773,
            "code" : "3204895",
            "name" : "Bạch Thị Thúy Kiều-I5T3-",
            "address" : "- 24 Đường số 2 - Phường Tân Thành - Quận Tân Phú",
            "lat" : "10.78990753",
            "long" : "106.63134826",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819774,
            "code" : "2813481",
            "name" : "Le Van Tuan",
            "address" : "40\/8 An Phu, KP4,Phường An Phú,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.809641126543",
            "long" : "106.752698812634",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819775,
            "code" : "2813487",
            "name" : "Tran Thi Phuong Thu",
            "address" : "37 Nguyen Van Huong Cc Hagl,Phường Thảo Điền,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8044515",
            "long" : "106.7274888",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819776,
            "code" : "2813425",
            "name" : "Nguyễn Thị Thu Thủy",
            "address" : "Chung Cư Estella,Phường An Phú,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.800769",
            "long" : "106.7493113",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819777,
            "code" : "2813426",
            "name" : "Đỗ Thị Kim Liên",
            "address" : "Tầng Trệt A1 - CC Cantavil,Phường An Phú,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.800812929",
            "long" : "106.746782782",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819778,
            "code" : "2813429",
            "name" : "Pham Van Hoang",
            "address" : "10 Đường Lo C,Phường An Phú,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.789939588867",
            "long" : "106.74527538009",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819779,
            "code" : "2813498",
            "name" : "Trường Horizon",
            "address" : "8 Đường 44, Trường Horizon,Phường Thảo Điền,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8057823",
            "long" : "106.7295348",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819780,
            "code" : "2813434",
            "name" : "Nguyễn Thị Tuyết",
            "address" : "Lô CD, Nhà B, Khu Dân Cư Bình,Phường Bình Khánh,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7875944",
            "long" : "106.7407311",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819781,
            "code" : "3246884",
            "name" : "Vũ Thị Kim",
            "address" : "238 Bùi Tá Hán,P.An Phú,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.795427",
            "long" : "106.744675",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819782,
            "code" : "3267618",
            "name" : "Huỳnh Ngọc Phượng",
            "address" : "13A Đường số 10,P.Thảo Điền,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.804096",
            "long" : "106.74398",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819783,
            "code" : "3398420",
            "name" : "Phạm Thị Kim Loan",
            "address" : "253 Lương Định Của,P.An Phú,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.791588",
            "long" : "106.74814",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819784,
            "code" : "3627430",
            "name" : "Bùi Thị Thanh Ngà",
            "address" : "311 M2 Lương Định Của,P.An Phú,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.789429",
            "long" : "106.74353",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819785,
            "code" : "3648425",
            "name" : "Siêu Thị An Phú",
            "address" : "43 Thảo Điền p. Thảo Điền,p. Thảo Điền,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.805047",
            "long" : "106.73642",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819786,
            "code" : "4033588",
            "name" : "FoodVille",
            "address" : "170  Nguyễn Văn Hưởng p. Thảo Điền,P. Thảo Điền,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.815492",
            "long" : "106.7273",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819787,
            "code" : "4376749",
            "name" : "ViNa Mart",
            "address" : "24B Xuân Thủy P. An Phú,P .An phú,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.80271",
            "long" : "106.728745",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819788,
            "code" : "4815380",
            "name" : "Thanh Hoàn",
            "address" : "418 Xa Lộ Hà Nội,P.An Phú,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.806642",
            "long" : "106.755567",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819789,
            "code" : "4815381",
            "name" : "Tạp Hóa Cô Cúc",
            "address" : "311M1 Lương Định Của,P.An Phú,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.789427",
            "long" : "106.743520",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819790,
            "code" : "2812775",
            "name" : "Nguyễn Thị Huyền Chân",
            "address" : "A4\/17 Hương Lộ 11,Xã Tân Quý Tây,Huyện Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.65591096",
            "long" : "106.6063968",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819791,
            "code" : "2812782",
            "name" : "Nguyen Thi Kim Nhung",
            "address" : "89\/4 Hoàng Đạo Thúy,Xã An Phú Tây,Huyện Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.69685066",
            "long" : "106.59734042",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819792,
            "code" : "2812792",
            "name" : "Pham Thi Ngoc Van",
            "address" : "B2\/12 Dinh Duc Thien,Xã Bình Lợi,Huyện Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8510298",
            "long" : "106.6609556",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819793,
            "code" : "2812796",
            "name" : "Truong Thi Minh Nguyet",
            "address" : "13E Nguyen Van Linh,Xã Bình Hưng,Huyện Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.70602657",
            "long" : "106.64402804",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819794,
            "code" : "2812816",
            "name" : "Lê Thành Ngọc Em",
            "address" : "C7\/32 Hương Lộ 11, Ấp 3,Xã Hưng Long,Huyện Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.6483143",
            "long" : "106.6277663",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819795,
            "code" : "3092949",
            "name" : "TH Thủy Tiên",
            "address" : "53 Đường số 5 KDC 13E Phong Ph,xã Phong Phú,Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7049392",
            "long" : "106.6471424",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819796,
            "code" : "4290134",
            "name" : "Tạp Hóa Chi - E",
            "address" : "C1 Chung Cư Him Lam - 267b Ba Tơ P.7,P.7,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.706793",
            "long" : "106.62089",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819797,
            "code" : "4323906",
            "name" : "TeraMart 2",
            "address" : "26 Đường Số 2 - Terra Mia - Bình Hưng,Bình Hưng,Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.72259579",
            "long" : "106.68771889",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819798,
            "code" : "4573759",
            "name" : "TH ÚT THÚY",
            "address" : "Số 552, Đoàn Nguyễn Tuấn,Ấp 3,X. Hưng Long, H.Bình Chánh,Huyện Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.649718",
            "long" : "106.625134",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819799,
            "code" : "4783108",
            "name" : "TH VŨ NGUYÊN",
            "address" : "C6\/3H ĐƯỜNG HƯNG NHƠN,XÃ TÂN KIÊN,HUYỆN BÌNH CHÁNH,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.713920",
            "long" : "106.591840",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819800,
            "code" : "4797669",
            "name" : "TH MAI SƯƠNG",
            "address" : "B9\/277, ĐƯỜNG NGÃ 3 CHÚ LƯỜNG,XÃ ĐA PHƯỚC,UYỆN BÌNH CHÁNH,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.652538",
            "long" : "106.659409",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819801,
            "code" : "4482240",
            "name" : "Shop Bích Thủy",
            "address" : "Đinh Đức Thiện, Bình Chánh,Tân Qúy Tây,Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.703452",
            "long" : "106.7301898",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819802,
            "code" : "2813364",
            "name" : "Nguyen Thanh Van",
            "address" : "331\/11A Tôn Đản,Phường 18,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7542866",
            "long" : "106.70587716",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819803,
            "code" : "2813366",
            "name" : "Võ Thi Hòang Yến",
            "address" : "266\/40 Tôn Đản,Phường 8,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75745882",
            "long" : "106.70477936",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819804,
            "code" : "2813367",
            "name" : "Lưu Thị Bích Võ",
            "address" : "307\/11c Tôn Đản.,Phường 15,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75489162",
            "long" : "106.70611472",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819805,
            "code" : "2813368",
            "name" : "Nguyen Thi Hanh",
            "address" : "5 Lê Thach,Phường 1,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7640497",
            "long" : "106.70558587",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819806,
            "code" : "2813369",
            "name" : "Tu Ty",
            "address" : "25 Lê Thach,Phường 2,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.76386402",
            "long" : "106.70601195",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819807,
            "code" : "2813374",
            "name" : "Nguyễn Văn Nở",
            "address" : "122\/16 Tôn Đản,Phường 10,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.759949",
            "long" : "106.70634",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819808,
            "code" : "2813376",
            "name" : "Hồ Thị Ngọc Lài",
            "address" : "37\/9 Đoàn Như Hài,Phường 12,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.765812",
            "long" : "106.7058",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819809,
            "code" : "2813379",
            "name" : "Chuc Thanh Phuong",
            "address" : "2 CC C1Tân Vinh,Phường 6,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75991325",
            "long" : "106.69979388",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819810,
            "code" : "2813382",
            "name" : "Ngo Thi Lan",
            "address" : "K 30 CX Vĩnh Hội, Bến Vân Đồn,Phường 4,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.76121486",
            "long" : "106.69988408",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819811,
            "code" : "2833293",
            "name" : "Trà Sữa Đô Rê Mon-Vĩnh Hội",
            "address" : "D32 Cư Xá Vĩnh Hội,Phường 5,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.760331",
            "long" : "106.69794",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819812,
            "code" : "2812735",
            "name" : "Đoàn Minh Kỳ",
            "address" : "243\/31\/30 Tôn Đản,Phường 15,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.755839",
            "long" : "106.70766",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819813,
            "code" : "3403875",
            "name" : "Trần Thị Hà",
            "address" : "336 Tôn Đản,P4,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.755141",
            "long" : "106.70577",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819814,
            "code" : "4748095",
            "name" : "Trần Thị Nể",
            "address" : "243\/31\/28 Tôn Đản,P.15,QUẬN 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.755775",
            "long" : "106.7077",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819815,
            "code" : "2812657",
            "name" : "Pham Thi Huong",
            "address" : "46 Đường 20,Phường Long Thạnh Mỹ,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.843460932374",
            "long" : "106.827267408371",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819816,
            "code" : "2813537",
            "name" : "Võ Thị Mỹ",
            "address" : "911 Nguyễn Xiển,Phường Long Thạnh Mỹ,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8528621",
            "long" : "106.833501",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819817,
            "code" : "2813539",
            "name" : "Ton Thi Le Thu",
            "address" : "294 Nguyen Van Tang,Phường Long Thạnh Mỹ,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.841163075529",
            "long" : "106.822577733547",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819818,
            "code" : "2813540",
            "name" : "Nguyen Thi Huong Ngoc",
            "address" : "323 Hoàng Hữu Nam,P. Long Thạnh Mỹ,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.868090",
            "long" : "106.813805",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819819,
            "code" : "2813579",
            "name" : "Lưu Đức Bắc",
            "address" : "387 Nguyễn Văn Tăng,Phường Long Thạnh Mỹ,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8410154",
            "long" : "106.8262362",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819820,
            "code" : "2910045",
            "name" : "Nguyễn Thị Hồng-114 Đường số 6",
            "address" : "114 Đường số 6. Kp Long Bửu,Phường Long Bình,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8578272",
            "long" : "106.8435869",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819821,
            "code" : "2813501",
            "name" : "Nguyen Thi Bach Diep",
            "address" : "265 Nguyen Xien,Phường Tăng Nhơn Phú A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.825318847783",
            "long" : "106.829494647682",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819822,
            "code" : "4287692",
            "name" : "Đặc Sản Hà Nội 2",
            "address" : "01 - S01 Toà BS16 CC VinHomes Grandpark  - Nguyễn Xiển,P. Long Thạnh Mỹ,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.847197",
            "long" : "106.843832",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819823,
            "code" : "4390447",
            "name" : "Cam Táo Mart",
            "address" : "T2-14 Manhattan Vinhomes Grandpark,P . Long Thạnh Mỹ,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.839218",
            "long" : "106.84184",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819824,
            "code" : "4748469",
            "name" : "Bách Hóa Sơn Thu",
            "address" : "338 Nguyễn Văn Tăng,P.Long Thạnh Mỹ,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.841236",
            "long" : "106.824187",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819825,
            "code" : "4768508",
            "name" : "KonNi 39",
            "address" : "S6-03 01S15 CC Vinhomes Grandpark - Nguyễn Xiển,P.Long Thạnh Mỹ,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.843946",
            "long" : "106.838032",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819826,
            "code" : "4848252",
            "name" : "Tạp Hóa Kim Oanh",
            "address" : "3\/34 Quyết Thắng - Bình Thắng,Bình Dương,THỊ XÃ DĨ AN,TỈNH BÌNH DƯƠNG",
            "lat" : "10.8603817",
            "long" : "106.8368383",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819827,
            "code" : "4884494",
            "name" : "Mart 24h - 2",
            "address" : "E2 Khu Masteri Vinhomes Grandpark,P.Long Thạnh Mỹ,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.842191",
            "long" : "106.840157",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819828,
            "code" : "2812767",
            "name" : "Nguyễn Thi Kim Thương",
            "address" : "209F Tôn Thất Thuyết,Phường 3,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75531295",
            "long" : "106.69871475",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819829,
            "code" : "2812769",
            "name" : "Trần Thị Thơ",
            "address" : "196\/47\/1 Tôn Thất Thuyết,Phường 3,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75389676",
            "long" : "106.69988188",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819830,
            "code" : "2812771",
            "name" : "Do Thi Thu Ha",
            "address" : "2Lô M CC Tôn Thất Thuyết,Phường 1,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7545183",
            "long" : "106.691966",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819831,
            "code" : "2812734",
            "name" : "Minh Hải",
            "address" : "305 Tôn Thất Thuyết,Phường 1,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.752946",
            "long" : "106.6941",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819832,
            "code" : "2813383",
            "name" : "Khu Bach Lan",
            "address" : "12 Nguyễn Khóai,Phường 10,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75329628",
            "long" : "106.69531752",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819833,
            "code" : "3196340",
            "name" : "Trường Nguyễn Huệ",
            "address" : "243 hoàng diệu,Phường 8,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7615667",
            "long" : "106.7013983",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819834,
            "code" : "2813031",
            "name" : "Nguyễn Thi Lập",
            "address" : "B60 Nguyễn Thần Hiến,Phường 18,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7555034",
            "long" : "106.71682741",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819835,
            "code" : "2813051",
            "name" : "Huỳnh Thị Yên",
            "address" : "A91 Nguyễn Thần Hiến,Phường 18,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75462345",
            "long" : "106.71639125",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819836,
            "code" : "4059615",
            "name" : "TH Chị Lý",
            "address" : "383\/18 Bà Hạt P.4,P.4,Quận 10,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.763885",
            "long" : "106.70596",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819837,
            "code" : "4075702",
            "name" : "Jump Arena",
            "address" : "02-04 Đường Số 9 - Khu Đô Thị Mới Him Lam P. Tân Hưng,P. Tân Hưng,Quận 7,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.742012",
            "long" : "106.695233",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819838,
            "code" : "4274086",
            "name" : "Jum Arena 2",
            "address" : "02 Đường Số 9 - KDT Him Lam P. Tân Hưng,P. Tân Hưng,Quận 7,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.742012",
            "long" : "106.695233",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819839,
            "code" : "4419719",
            "name" : "Jum Arena Gò Vấp",
            "address" : "647 Quang Trung P.11,P.11,Quận Gò Vấp,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.742072",
            "long" : "106.695157",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819840,
            "code" : "4462506",
            "name" : "KVC Khánh Hội",
            "address" : "227 Đường Số 48,P.9,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75845045",
            "long" : "106.69867027",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819841,
            "code" : "4725362",
            "name" : "Đàm Sự Thân",
            "address" : "80 Hàm Nghi,P.Bến Nghé,QUẬN 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7712117",
            "long" : "106.7033751",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819842,
            "code" : "2813037",
            "name" : "Dinh Thi Xe",
            "address" : "692\/24 Đoàn Văn Bơ,Phường 13,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75749948",
            "long" : "106.71226133",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819843,
            "code" : "2813048",
            "name" : "Hồ Ngọc Hòang Dung",
            "address" : "920 Đoàn Văn Bơ,Phường 18,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75667736",
            "long" : "106.71678553",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819844,
            "code" : "2813058",
            "name" : "Lâm Tài",
            "address" : "135 Xóm Chiếu,Phường 14,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.757251",
            "long" : "106.71022",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819845,
            "code" : "2812721",
            "name" : "Nguyễn Thị Hồng Hạnh",
            "address" : "538\/149 Đoàn Văn Bơ,Phường 14,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.757178",
            "long" : "106.708275",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819846,
            "code" : "2812765",
            "name" : "Nguyễn Anh Trung",
            "address" : "92\/18B Tôn Thất Thuyết,Phường 16,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.753966",
            "long" : "106.710175",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819847,
            "code" : "3269598",
            "name" : "Nguyễn Thị Mỹ Dung",
            "address" : "772\/20 Đoàn Văn Bơ,P.10,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.756785",
            "long" : "106.7138",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819848,
            "code" : "4197028",
            "name" : "TH Tiến Đào",
            "address" : "132 Đoàn Văn Bơ P.9,P.9,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.763286",
            "long" : "106.703964",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819849,
            "code" : "4440969",
            "name" : "Jum Arena 3",
            "address" : "645 Quang Trung P.12,P.12,Quận Gò Vấp,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8510392",
            "long" : "106.6609435",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819850,
            "code" : "4614402",
            "name" : "KVC 123 GO",
            "address" : "17 Tô Hiệu,P.Tân Thới Hòa,Quận Tân Phú,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.76631",
            "long" : "106.6269167",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819851,
            "code" : "4664055",
            "name" : "Nguyễn Thị Thu Thủy",
            "address" : "2238 Huỳnh Tấn Phát,Xã Phú Xuân,HUYỆN NHÀ BÈ,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.684122",
            "long" : "106.745345",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819852,
            "code" : "4848220",
            "name" : "KVC 123 Go 3",
            "address" : "641 Kinh Dương Vương,An Lạc,HUYỆN BÌNH TÂN,TỈNH VĨNH LONG",
            "lat" : "10.7663033",
            "long" : "106.6269333",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819853,
            "code" : "3887857",
            "name" : "FGR Tran Quoc Toan - I5T3-",
            "address" : "- 69 Diệp Minh Châu phường Tân Sơn Nhì - Phường Tân Sơn Nhì - Quận Tâ",
            "lat" : "10.7966631",
            "long" : "106.6329118",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819854,
            "code" : "4282761",
            "name" : "Chị Giao - I5T7-",
            "address" : "- 91\/19 Trần Tấn - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.797013126441",
            "long" : "106.63531250719",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819855,
            "code" : "2898639",
            "name" : "Nguyen Thi Huong-",
            "address" : "- 84\/20 Tan Son Nhi - Phường Tân Kỳ - Quận Tân Phú",
            "lat" : "10.8018117",
            "long" : "106.632705",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819856,
            "code" : "4238637",
            "name" : "Dương Thanh Hương - I5T7-",
            "address" : "- 58 Nguyễn Văn Săng - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.7990499",
            "long" : "106.63414564",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819857,
            "code" : "2898703",
            "name" : "Nguyễn Thị Ngọc Anh-I5T6-",
            "address" : "- 985\/37 Âu Cơ - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.8009637",
            "long" : "106.635665",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819858,
            "code" : "4766275",
            "name" : "Cô Oanh-I17T7-",
            "address" : "- 985\/38 Âu Cơ - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.8003333",
            "long" : "106.63521",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819859,
            "code" : "4851350",
            "name" : "TH 92-I17T7-",
            "address" : "- 92 Nguyễn Văn Săng - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.79884",
            "long" : "106.6329433",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819860,
            "code" : "2898621",
            "name" : "Dinh Huu Tho-",
            "address" : "- 20 Doc Lap - Phường Tân Thành - Quận Tân Phú",
            "lat" : "10.791711460458",
            "long" : "106.63617122725",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819861,
            "code" : "2898622",
            "name" : "Nguyen Khac Kinh-",
            "address" : "- 201 Thanh Cong - Phường Tân Thành - Quận Tân Phú",
            "lat" : "10.793511767096",
            "long" : "106.632182338395",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819862,
            "code" : "2898623",
            "name" : "Vu Thi Hanh-",
            "address" : "- 38 Nguyen Ba Tong - Phường Tân Thành - Quận Tân Phú",
            "lat" : "10.791971191176",
            "long" : "106.636473306284",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819863,
            "code" : "2898626",
            "name" : "Pham Ngoc Quyen-",
            "address" : "- 96A Dan Toc - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.794596275583",
            "long" : "106.633838952487",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819864,
            "code" : "2898675",
            "name" : "Nguyễn Minh Tú-I5-",
            "address" : "- 305 Tan Son Nhi - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.796602",
            "long" : "106.630646",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819865,
            "code" : "2898641",
            "name" : "Ly Thuc Trang-",
            "address" : "- 69\/12 Nguyen Cuu Dam - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.79865103",
            "long" : "106.62950443",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819866,
            "code" : "2898643",
            "name" : "Tran Thi Yen Nhi-",
            "address" : "- 177 Tan Ky Tan Quy - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.803152279023",
            "long" : "106.630964298466",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819867,
            "code" : "2898645",
            "name" : "Nguyen Thi Thanh Binh-",
            "address" : "- 249\/35\/9 Tan Ky Tan Quy - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.801227144217",
            "long" : "106.628354455487",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819868,
            "code" : "2898644",
            "name" : "Nguyen Thi Hong-",
            "address" : "- 249\/58 Tan Ky Tan Quy - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.80112155266",
            "long" : "106.627844411593",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819869,
            "code" : "4762251",
            "name" : "TT Minh Quân-17T2-",
            "address" : "- 25A Đường 1 - Phường Tân Thành - Quận Tân Phú",
            "lat" : "10.789932",
            "long" : "106.63141",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819870,
            "code" : "4720503",
            "name" : "Gia Phú-I11T3-",
            "address" : "uận Bình T - 151\/43  liên khu 4\/5 - bình hưng hòa B - Quận Bình Tân",
            "lat" : "10.7900167",
            "long" : "106.631785",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819871,
            "code" : "2898624",
            "name" : "Chu Thi Phuong-",
            "address" : "- 167 Truong Vinh Ky - Phường Tân Thành - Quận Tân Phú",
            "lat" : "10.793749213512",
            "long" : "106.633218616618",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819872,
            "code" : "2898667",
            "name" : "Trần Trọng Đạt-",
            "address" : "- 36 Trần Văn Ơn - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.801242735023",
            "long" : "106.630700125461",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819873,
            "code" : "3887859",
            "name" : "FGR Nguyen Dinh Du - I5T2-",
            "address" : "- 27 Thống Nhất - Phuòng Tân Thành - Quận Tân Phú",
            "lat" : "10.7904119",
            "long" : "106.6364659",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819874,
            "code" : "3204895",
            "name" : "Bạch Thị Thúy Kiều-I5T3-",
            "address" : "- 24 Đường số 2 - Phường Tân Thành - Quận Tân Phú",
            "lat" : "10.78990753",
            "long" : "106.63134826",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819875,
            "code" : "2813481",
            "name" : "Le Van Tuan",
            "address" : "40\/8 An Phu, KP4,Phường An Phú,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.809641126543",
            "long" : "106.752698812634",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819876,
            "code" : "2813487",
            "name" : "Tran Thi Phuong Thu",
            "address" : "37 Nguyen Van Huong Cc Hagl,Phường Thảo Điền,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8044515",
            "long" : "106.7274888",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819877,
            "code" : "2813425",
            "name" : "Nguyễn Thị Thu Thủy",
            "address" : "Chung Cư Estella,Phường An Phú,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.800769",
            "long" : "106.7493113",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819878,
            "code" : "2813426",
            "name" : "Đỗ Thị Kim Liên",
            "address" : "Tầng Trệt A1 - CC Cantavil,Phường An Phú,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.800812929",
            "long" : "106.746782782",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819879,
            "code" : "2813429",
            "name" : "Pham Van Hoang",
            "address" : "10 Đường Lo C,Phường An Phú,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.789939588867",
            "long" : "106.74527538009",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819880,
            "code" : "2813498",
            "name" : "Trường Horizon",
            "address" : "8 Đường 44, Trường Horizon,Phường Thảo Điền,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8057823",
            "long" : "106.7295348",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819881,
            "code" : "2813434",
            "name" : "Nguyễn Thị Tuyết",
            "address" : "Lô CD, Nhà B, Khu Dân Cư Bình,Phường Bình Khánh,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7875944",
            "long" : "106.7407311",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819882,
            "code" : "3246884",
            "name" : "Vũ Thị Kim",
            "address" : "238 Bùi Tá Hán,P.An Phú,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.795427",
            "long" : "106.744675",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819883,
            "code" : "3267618",
            "name" : "Huỳnh Ngọc Phượng",
            "address" : "13A Đường số 10,P.Thảo Điền,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.804096",
            "long" : "106.74398",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819884,
            "code" : "3398420",
            "name" : "Phạm Thị Kim Loan",
            "address" : "253 Lương Định Của,P.An Phú,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.791588",
            "long" : "106.74814",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819885,
            "code" : "3627430",
            "name" : "Bùi Thị Thanh Ngà",
            "address" : "311 M2 Lương Định Của,P.An Phú,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.789429",
            "long" : "106.74353",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819886,
            "code" : "3648425",
            "name" : "Siêu Thị An Phú",
            "address" : "43 Thảo Điền p. Thảo Điền,p. Thảo Điền,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.805047",
            "long" : "106.73642",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819887,
            "code" : "4033588",
            "name" : "FoodVille",
            "address" : "170  Nguyễn Văn Hưởng p. Thảo Điền,P. Thảo Điền,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.815492",
            "long" : "106.7273",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819888,
            "code" : "4376749",
            "name" : "ViNa Mart",
            "address" : "24B Xuân Thủy P. An Phú,P .An phú,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.80271",
            "long" : "106.728745",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819889,
            "code" : "4815380",
            "name" : "Thanh Hoàn",
            "address" : "418 Xa Lộ Hà Nội,P.An Phú,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.806642",
            "long" : "106.755567",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819890,
            "code" : "4815381",
            "name" : "Tạp Hóa Cô Cúc",
            "address" : "311M1 Lương Định Của,P.An Phú,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.789427",
            "long" : "106.743520",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819891,
            "code" : "2812775",
            "name" : "Nguyễn Thị Huyền Chân",
            "address" : "A4\/17 Hương Lộ 11,Xã Tân Quý Tây,Huyện Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.65591096",
            "long" : "106.6063968",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819892,
            "code" : "2812782",
            "name" : "Nguyen Thi Kim Nhung",
            "address" : "89\/4 Hoàng Đạo Thúy,Xã An Phú Tây,Huyện Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.69685066",
            "long" : "106.59734042",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819893,
            "code" : "2812792",
            "name" : "Pham Thi Ngoc Van",
            "address" : "B2\/12 Dinh Duc Thien,Xã Bình Lợi,Huyện Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8510298",
            "long" : "106.6609556",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819894,
            "code" : "2812796",
            "name" : "Truong Thi Minh Nguyet",
            "address" : "13E Nguyen Van Linh,Xã Bình Hưng,Huyện Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.70602657",
            "long" : "106.64402804",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819895,
            "code" : "2812816",
            "name" : "Lê Thành Ngọc Em",
            "address" : "C7\/32 Hương Lộ 11, Ấp 3,Xã Hưng Long,Huyện Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.6483143",
            "long" : "106.6277663",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819896,
            "code" : "3092949",
            "name" : "TH Thủy Tiên",
            "address" : "53 Đường số 5 KDC 13E Phong Ph,xã Phong Phú,Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7049392",
            "long" : "106.6471424",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819897,
            "code" : "4290134",
            "name" : "Tạp Hóa Chi - E",
            "address" : "C1 Chung Cư Him Lam - 267b Ba Tơ P.7,P.7,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.706793",
            "long" : "106.62089",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819898,
            "code" : "4323906",
            "name" : "TeraMart 2",
            "address" : "26 Đường Số 2 - Terra Mia - Bình Hưng,Bình Hưng,Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.72259579",
            "long" : "106.68771889",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819899,
            "code" : "4573759",
            "name" : "TH ÚT THÚY",
            "address" : "Số 552, Đoàn Nguyễn Tuấn,Ấp 3,X. Hưng Long, H.Bình Chánh,Huyện Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.649718",
            "long" : "106.625134",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819900,
            "code" : "4783108",
            "name" : "TH VŨ NGUYÊN",
            "address" : "C6\/3H ĐƯỜNG HƯNG NHƠN,XÃ TÂN KIÊN,HUYỆN BÌNH CHÁNH,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.713920",
            "long" : "106.591840",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819901,
            "code" : "4797669",
            "name" : "TH MAI SƯƠNG",
            "address" : "B9\/277, ĐƯỜNG NGÃ 3 CHÚ LƯỜNG,XÃ ĐA PHƯỚC,UYỆN BÌNH CHÁNH,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.652538",
            "long" : "106.659409",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819902,
            "code" : "4482240",
            "name" : "Shop Bích Thủy",
            "address" : "Đinh Đức Thiện, Bình Chánh,Tân Qúy Tây,Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.703452",
            "long" : "106.7301898",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819903,
            "code" : "2813364",
            "name" : "Nguyen Thanh Van",
            "address" : "331\/11A Tôn Đản,Phường 18,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7542866",
            "long" : "106.70587716",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819904,
            "code" : "2813366",
            "name" : "Võ Thi Hòang Yến",
            "address" : "266\/40 Tôn Đản,Phường 8,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75745882",
            "long" : "106.70477936",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819905,
            "code" : "2813367",
            "name" : "Lưu Thị Bích Võ",
            "address" : "307\/11c Tôn Đản.,Phường 15,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75489162",
            "long" : "106.70611472",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819906,
            "code" : "2813368",
            "name" : "Nguyen Thi Hanh",
            "address" : "5 Lê Thach,Phường 1,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7640497",
            "long" : "106.70558587",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819907,
            "code" : "2813369",
            "name" : "Tu Ty",
            "address" : "25 Lê Thach,Phường 2,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.76386402",
            "long" : "106.70601195",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819908,
            "code" : "2813374",
            "name" : "Nguyễn Văn Nở",
            "address" : "122\/16 Tôn Đản,Phường 10,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.759949",
            "long" : "106.70634",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819909,
            "code" : "2813376",
            "name" : "Hồ Thị Ngọc Lài",
            "address" : "37\/9 Đoàn Như Hài,Phường 12,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.765812",
            "long" : "106.7058",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819910,
            "code" : "2813379",
            "name" : "Chuc Thanh Phuong",
            "address" : "2 CC C1Tân Vinh,Phường 6,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75991325",
            "long" : "106.69979388",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819911,
            "code" : "2813382",
            "name" : "Ngo Thi Lan",
            "address" : "K 30 CX Vĩnh Hội, Bến Vân Đồn,Phường 4,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.76121486",
            "long" : "106.69988408",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819912,
            "code" : "2833293",
            "name" : "Trà Sữa Đô Rê Mon-Vĩnh Hội",
            "address" : "D32 Cư Xá Vĩnh Hội,Phường 5,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.760331",
            "long" : "106.69794",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819913,
            "code" : "2812735",
            "name" : "Đoàn Minh Kỳ",
            "address" : "243\/31\/30 Tôn Đản,Phường 15,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.755839",
            "long" : "106.70766",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819914,
            "code" : "3403875",
            "name" : "Trần Thị Hà",
            "address" : "336 Tôn Đản,P4,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.755141",
            "long" : "106.70577",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819915,
            "code" : "4748095",
            "name" : "Trần Thị Nể",
            "address" : "243\/31\/28 Tôn Đản,P.15,QUẬN 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.755775",
            "long" : "106.7077",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819916,
            "code" : "2812657",
            "name" : "Pham Thi Huong",
            "address" : "46 Đường 20,Phường Long Thạnh Mỹ,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.843460932374",
            "long" : "106.827267408371",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819917,
            "code" : "2813537",
            "name" : "Võ Thị Mỹ",
            "address" : "911 Nguyễn Xiển,Phường Long Thạnh Mỹ,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8528621",
            "long" : "106.833501",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819918,
            "code" : "2813539",
            "name" : "Ton Thi Le Thu",
            "address" : "294 Nguyen Van Tang,Phường Long Thạnh Mỹ,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.841163075529",
            "long" : "106.822577733547",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819919,
            "code" : "2813540",
            "name" : "Nguyen Thi Huong Ngoc",
            "address" : "323 Hoàng Hữu Nam,P. Long Thạnh Mỹ,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.868090",
            "long" : "106.813805",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819920,
            "code" : "2813579",
            "name" : "Lưu Đức Bắc",
            "address" : "387 Nguyễn Văn Tăng,Phường Long Thạnh Mỹ,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8410154",
            "long" : "106.8262362",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819921,
            "code" : "2910045",
            "name" : "Nguyễn Thị Hồng-114 Đường số 6",
            "address" : "114 Đường số 6. Kp Long Bửu,Phường Long Bình,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8578272",
            "long" : "106.8435869",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819922,
            "code" : "2813501",
            "name" : "Nguyen Thi Bach Diep",
            "address" : "265 Nguyen Xien,Phường Tăng Nhơn Phú A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.825318847783",
            "long" : "106.829494647682",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819923,
            "code" : "4287692",
            "name" : "Đặc Sản Hà Nội 2",
            "address" : "01 - S01 Toà BS16 CC VinHomes Grandpark  - Nguyễn Xiển,P. Long Thạnh Mỹ,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.847197",
            "long" : "106.843832",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819924,
            "code" : "4390447",
            "name" : "Cam Táo Mart",
            "address" : "T2-14 Manhattan Vinhomes Grandpark,P . Long Thạnh Mỹ,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.839218",
            "long" : "106.84184",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819925,
            "code" : "4748469",
            "name" : "Bách Hóa Sơn Thu",
            "address" : "338 Nguyễn Văn Tăng,P.Long Thạnh Mỹ,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.841236",
            "long" : "106.824187",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819926,
            "code" : "4768508",
            "name" : "KonNi 39",
            "address" : "S6-03 01S15 CC Vinhomes Grandpark - Nguyễn Xiển,P.Long Thạnh Mỹ,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.843946",
            "long" : "106.838032",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819927,
            "code" : "4848252",
            "name" : "Tạp Hóa Kim Oanh",
            "address" : "3\/34 Quyết Thắng - Bình Thắng,Bình Dương,THỊ XÃ DĨ AN,TỈNH BÌNH DƯƠNG",
            "lat" : "10.8603817",
            "long" : "106.8368383",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819928,
            "code" : "4884494",
            "name" : "Mart 24h - 2",
            "address" : "E2 Khu Masteri Vinhomes Grandpark,P.Long Thạnh Mỹ,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.842191",
            "long" : "106.840157",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819929,
            "code" : "2812767",
            "name" : "Nguyễn Thi Kim Thương",
            "address" : "209F Tôn Thất Thuyết,Phường 3,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75531295",
            "long" : "106.69871475",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819930,
            "code" : "2812769",
            "name" : "Trần Thị Thơ",
            "address" : "196\/47\/1 Tôn Thất Thuyết,Phường 3,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75389676",
            "long" : "106.69988188",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819931,
            "code" : "2812771",
            "name" : "Do Thi Thu Ha",
            "address" : "2Lô M CC Tôn Thất Thuyết,Phường 1,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7545183",
            "long" : "106.691966",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819932,
            "code" : "2812734",
            "name" : "Minh Hải",
            "address" : "305 Tôn Thất Thuyết,Phường 1,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.752946",
            "long" : "106.6941",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819933,
            "code" : "2813383",
            "name" : "Khu Bach Lan",
            "address" : "12 Nguyễn Khóai,Phường 10,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75329628",
            "long" : "106.69531752",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819934,
            "code" : "3196340",
            "name" : "Trường Nguyễn Huệ",
            "address" : "243 hoàng diệu,Phường 8,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7615667",
            "long" : "106.7013983",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819935,
            "code" : "2813031",
            "name" : "Nguyễn Thi Lập",
            "address" : "B60 Nguyễn Thần Hiến,Phường 18,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7555034",
            "long" : "106.71682741",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819936,
            "code" : "2813051",
            "name" : "Huỳnh Thị Yên",
            "address" : "A91 Nguyễn Thần Hiến,Phường 18,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75462345",
            "long" : "106.71639125",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819937,
            "code" : "4059615",
            "name" : "TH Chị Lý",
            "address" : "383\/18 Bà Hạt P.4,P.4,Quận 10,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.763885",
            "long" : "106.70596",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819938,
            "code" : "4075702",
            "name" : "Jump Arena",
            "address" : "02-04 Đường Số 9 - Khu Đô Thị Mới Him Lam P. Tân Hưng,P. Tân Hưng,Quận 7,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.742012",
            "long" : "106.695233",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819939,
            "code" : "4274086",
            "name" : "Jum Arena 2",
            "address" : "02 Đường Số 9 - KDT Him Lam P. Tân Hưng,P. Tân Hưng,Quận 7,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.742012",
            "long" : "106.695233",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819940,
            "code" : "4419719",
            "name" : "Jum Arena Gò Vấp",
            "address" : "647 Quang Trung P.11,P.11,Quận Gò Vấp,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.742072",
            "long" : "106.695157",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819941,
            "code" : "4462506",
            "name" : "KVC Khánh Hội",
            "address" : "227 Đường Số 48,P.9,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75845045",
            "long" : "106.69867027",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819942,
            "code" : "4725362",
            "name" : "Đàm Sự Thân",
            "address" : "80 Hàm Nghi,P.Bến Nghé,QUẬN 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7712117",
            "long" : "106.7033751",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819943,
            "code" : "2813037",
            "name" : "Dinh Thi Xe",
            "address" : "692\/24 Đoàn Văn Bơ,Phường 13,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75749948",
            "long" : "106.71226133",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819944,
            "code" : "2813048",
            "name" : "Hồ Ngọc Hòang Dung",
            "address" : "920 Đoàn Văn Bơ,Phường 18,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75667736",
            "long" : "106.71678553",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819945,
            "code" : "2813058",
            "name" : "Lâm Tài",
            "address" : "135 Xóm Chiếu,Phường 14,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.757251",
            "long" : "106.71022",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819946,
            "code" : "2812721",
            "name" : "Nguyễn Thị Hồng Hạnh",
            "address" : "538\/149 Đoàn Văn Bơ,Phường 14,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.757178",
            "long" : "106.708275",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819947,
            "code" : "2812765",
            "name" : "Nguyễn Anh Trung",
            "address" : "92\/18B Tôn Thất Thuyết,Phường 16,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.753966",
            "long" : "106.710175",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819948,
            "code" : "3269598",
            "name" : "Nguyễn Thị Mỹ Dung",
            "address" : "772\/20 Đoàn Văn Bơ,P.10,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.756785",
            "long" : "106.7138",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819949,
            "code" : "4197028",
            "name" : "TH Tiến Đào",
            "address" : "132 Đoàn Văn Bơ P.9,P.9,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.763286",
            "long" : "106.703964",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819950,
            "code" : "4440969",
            "name" : "Jum Arena 3",
            "address" : "645 Quang Trung P.12,P.12,Quận Gò Vấp,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8510392",
            "long" : "106.6609435",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819951,
            "code" : "4614402",
            "name" : "KVC 123 GO",
            "address" : "17 Tô Hiệu,P.Tân Thới Hòa,Quận Tân Phú,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.76631",
            "long" : "106.6269167",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819952,
            "code" : "4664055",
            "name" : "Nguyễn Thị Thu Thủy",
            "address" : "2238 Huỳnh Tấn Phát,Xã Phú Xuân,HUYỆN NHÀ BÈ,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.684122",
            "long" : "106.745345",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819953,
            "code" : "4848220",
            "name" : "KVC 123 Go 3",
            "address" : "641 Kinh Dương Vương,An Lạc,HUYỆN BÌNH TÂN,TỈNH VĨNH LONG",
            "lat" : "10.7663033",
            "long" : "106.6269333",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819954,
            "code" : "3887857",
            "name" : "FGR Tran Quoc Toan - I5T3-",
            "address" : "- 69 Diệp Minh Châu phường Tân Sơn Nhì - Phường Tân Sơn Nhì - Quận Tâ",
            "lat" : "10.7966631",
            "long" : "106.6329118",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819955,
            "code" : "4282761",
            "name" : "Chị Giao - I5T7-",
            "address" : "- 91\/19 Trần Tấn - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.797013126441",
            "long" : "106.63531250719",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819956,
            "code" : "2898639",
            "name" : "Nguyen Thi Huong-",
            "address" : "- 84\/20 Tan Son Nhi - Phường Tân Kỳ - Quận Tân Phú",
            "lat" : "10.8018117",
            "long" : "106.632705",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819957,
            "code" : "4238637",
            "name" : "Dương Thanh Hương - I5T7-",
            "address" : "- 58 Nguyễn Văn Săng - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.7990499",
            "long" : "106.63414564",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819958,
            "code" : "2898703",
            "name" : "Nguyễn Thị Ngọc Anh-I5T6-",
            "address" : "- 985\/37 Âu Cơ - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.8009637",
            "long" : "106.635665",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819959,
            "code" : "4766275",
            "name" : "Cô Oanh-I17T7-",
            "address" : "- 985\/38 Âu Cơ - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.8003333",
            "long" : "106.63521",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819960,
            "code" : "4851350",
            "name" : "TH 92-I17T7-",
            "address" : "- 92 Nguyễn Văn Săng - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.79884",
            "long" : "106.6329433",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819961,
            "code" : "2898621",
            "name" : "Dinh Huu Tho-",
            "address" : "- 20 Doc Lap - Phường Tân Thành - Quận Tân Phú",
            "lat" : "10.791711460458",
            "long" : "106.63617122725",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819962,
            "code" : "2898622",
            "name" : "Nguyen Khac Kinh-",
            "address" : "- 201 Thanh Cong - Phường Tân Thành - Quận Tân Phú",
            "lat" : "10.793511767096",
            "long" : "106.632182338395",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819963,
            "code" : "2898623",
            "name" : "Vu Thi Hanh-",
            "address" : "- 38 Nguyen Ba Tong - Phường Tân Thành - Quận Tân Phú",
            "lat" : "10.791971191176",
            "long" : "106.636473306284",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819964,
            "code" : "2898626",
            "name" : "Pham Ngoc Quyen-",
            "address" : "- 96A Dan Toc - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.794596275583",
            "long" : "106.633838952487",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819965,
            "code" : "2898675",
            "name" : "Nguyễn Minh Tú-I5-",
            "address" : "- 305 Tan Son Nhi - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.796602",
            "long" : "106.630646",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819966,
            "code" : "2898641",
            "name" : "Ly Thuc Trang-",
            "address" : "- 69\/12 Nguyen Cuu Dam - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.79865103",
            "long" : "106.62950443",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819967,
            "code" : "2898643",
            "name" : "Tran Thi Yen Nhi-",
            "address" : "- 177 Tan Ky Tan Quy - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.803152279023",
            "long" : "106.630964298466",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819968,
            "code" : "2898645",
            "name" : "Nguyen Thi Thanh Binh-",
            "address" : "- 249\/35\/9 Tan Ky Tan Quy - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.801227144217",
            "long" : "106.628354455487",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819969,
            "code" : "2898644",
            "name" : "Nguyen Thi Hong-",
            "address" : "- 249\/58 Tan Ky Tan Quy - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.80112155266",
            "long" : "106.627844411593",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819970,
            "code" : "4762251",
            "name" : "TT Minh Quân-17T2-",
            "address" : "- 25A Đường 1 - Phường Tân Thành - Quận Tân Phú",
            "lat" : "10.789932",
            "long" : "106.63141",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819971,
            "code" : "4720503",
            "name" : "Gia Phú-I11T3-",
            "address" : "uận Bình T - 151\/43  liên khu 4\/5 - bình hưng hòa B - Quận Bình Tân",
            "lat" : "10.7900167",
            "long" : "106.631785",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819972,
            "code" : "2898624",
            "name" : "Chu Thi Phuong-",
            "address" : "- 167 Truong Vinh Ky - Phường Tân Thành - Quận Tân Phú",
            "lat" : "10.793749213512",
            "long" : "106.633218616618",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819973,
            "code" : "2898667",
            "name" : "Trần Trọng Đạt-",
            "address" : "- 36 Trần Văn Ơn - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.801242735023",
            "long" : "106.630700125461",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819974,
            "code" : "3887859",
            "name" : "FGR Nguyen Dinh Du - I5T2-",
            "address" : "- 27 Thống Nhất - Phuòng Tân Thành - Quận Tân Phú",
            "lat" : "10.7904119",
            "long" : "106.6364659",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819975,
            "code" : "3204895",
            "name" : "Bạch Thị Thúy Kiều-I5T3-",
            "address" : "- 24 Đường số 2 - Phường Tân Thành - Quận Tân Phú",
            "lat" : "10.78990753",
            "long" : "106.63134826",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819976,
            "code" : "2813481",
            "name" : "Le Van Tuan",
            "address" : "40\/8 An Phu, KP4,Phường An Phú,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.809641126543",
            "long" : "106.752698812634",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819977,
            "code" : "2813487",
            "name" : "Tran Thi Phuong Thu",
            "address" : "37 Nguyen Van Huong Cc Hagl,Phường Thảo Điền,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8044515",
            "long" : "106.7274888",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819978,
            "code" : "2813425",
            "name" : "Nguyễn Thị Thu Thủy",
            "address" : "Chung Cư Estella,Phường An Phú,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.800769",
            "long" : "106.7493113",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819979,
            "code" : "2813426",
            "name" : "Đỗ Thị Kim Liên",
            "address" : "Tầng Trệt A1 - CC Cantavil,Phường An Phú,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.800812929",
            "long" : "106.746782782",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819980,
            "code" : "2813429",
            "name" : "Pham Van Hoang",
            "address" : "10 Đường Lo C,Phường An Phú,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.789939588867",
            "long" : "106.74527538009",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819981,
            "code" : "2813498",
            "name" : "Trường Horizon",
            "address" : "8 Đường 44, Trường Horizon,Phường Thảo Điền,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8057823",
            "long" : "106.7295348",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819982,
            "code" : "2813434",
            "name" : "Nguyễn Thị Tuyết",
            "address" : "Lô CD, Nhà B, Khu Dân Cư Bình,Phường Bình Khánh,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7875944",
            "long" : "106.7407311",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819983,
            "code" : "3246884",
            "name" : "Vũ Thị Kim",
            "address" : "238 Bùi Tá Hán,P.An Phú,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.795427",
            "long" : "106.744675",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819984,
            "code" : "3267618",
            "name" : "Huỳnh Ngọc Phượng",
            "address" : "13A Đường số 10,P.Thảo Điền,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.804096",
            "long" : "106.74398",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819985,
            "code" : "3398420",
            "name" : "Phạm Thị Kim Loan",
            "address" : "253 Lương Định Của,P.An Phú,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.791588",
            "long" : "106.74814",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819986,
            "code" : "3627430",
            "name" : "Bùi Thị Thanh Ngà",
            "address" : "311 M2 Lương Định Của,P.An Phú,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.789429",
            "long" : "106.74353",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819987,
            "code" : "3648425",
            "name" : "Siêu Thị An Phú",
            "address" : "43 Thảo Điền p. Thảo Điền,p. Thảo Điền,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.805047",
            "long" : "106.73642",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819988,
            "code" : "4033588",
            "name" : "FoodVille",
            "address" : "170  Nguyễn Văn Hưởng p. Thảo Điền,P. Thảo Điền,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.815492",
            "long" : "106.7273",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819989,
            "code" : "4376749",
            "name" : "ViNa Mart",
            "address" : "24B Xuân Thủy P. An Phú,P .An phú,Quận 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.80271",
            "long" : "106.728745",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819990,
            "code" : "4815380",
            "name" : "Thanh Hoàn",
            "address" : "418 Xa Lộ Hà Nội,P.An Phú,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.806642",
            "long" : "106.755567",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819991,
            "code" : "4815381",
            "name" : "Tạp Hóa Cô Cúc",
            "address" : "311M1 Lương Định Của,P.An Phú,QUẬN 2,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.789427",
            "long" : "106.743520",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819992,
            "code" : "2812775",
            "name" : "Nguyễn Thị Huyền Chân",
            "address" : "A4\/17 Hương Lộ 11,Xã Tân Quý Tây,Huyện Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.65591096",
            "long" : "106.6063968",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819993,
            "code" : "2812782",
            "name" : "Nguyen Thi Kim Nhung",
            "address" : "89\/4 Hoàng Đạo Thúy,Xã An Phú Tây,Huyện Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.69685066",
            "long" : "106.59734042",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819994,
            "code" : "2812792",
            "name" : "Pham Thi Ngoc Van",
            "address" : "B2\/12 Dinh Duc Thien,Xã Bình Lợi,Huyện Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8510298",
            "long" : "106.6609556",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819995,
            "code" : "2812796",
            "name" : "Truong Thi Minh Nguyet",
            "address" : "13E Nguyen Van Linh,Xã Bình Hưng,Huyện Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.70602657",
            "long" : "106.64402804",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819996,
            "code" : "2812816",
            "name" : "Lê Thành Ngọc Em",
            "address" : "C7\/32 Hương Lộ 11, Ấp 3,Xã Hưng Long,Huyện Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.6483143",
            "long" : "106.6277663",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819997,
            "code" : "3092949",
            "name" : "TH Thủy Tiên",
            "address" : "53 Đường số 5 KDC 13E Phong Ph,xã Phong Phú,Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7049392",
            "long" : "106.6471424",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819998,
            "code" : "4290134",
            "name" : "Tạp Hóa Chi - E",
            "address" : "C1 Chung Cư Him Lam - 267b Ba Tơ P.7,P.7,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.706793",
            "long" : "106.62089",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1819999,
            "code" : "4323906",
            "name" : "TeraMart 2",
            "address" : "26 Đường Số 2 - Terra Mia - Bình Hưng,Bình Hưng,Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.72259579",
            "long" : "106.68771889",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820000,
            "code" : "4573759",
            "name" : "TH ÚT THÚY",
            "address" : "Số 552, Đoàn Nguyễn Tuấn,Ấp 3,X. Hưng Long, H.Bình Chánh,Huyện Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.649718",
            "long" : "106.625134",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820001,
            "code" : "4783108",
            "name" : "TH VŨ NGUYÊN",
            "address" : "C6\/3H ĐƯỜNG HƯNG NHƠN,XÃ TÂN KIÊN,HUYỆN BÌNH CHÁNH,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.713920",
            "long" : "106.591840",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820002,
            "code" : "4797669",
            "name" : "TH MAI SƯƠNG",
            "address" : "B9\/277, ĐƯỜNG NGÃ 3 CHÚ LƯỜNG,XÃ ĐA PHƯỚC,UYỆN BÌNH CHÁNH,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.652538",
            "long" : "106.659409",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820003,
            "code" : "4482240",
            "name" : "Shop Bích Thủy",
            "address" : "Đinh Đức Thiện, Bình Chánh,Tân Qúy Tây,Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.703452",
            "long" : "106.7301898",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820004,
            "code" : "2813364",
            "name" : "Nguyen Thanh Van",
            "address" : "331\/11A Tôn Đản,Phường 18,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7542866",
            "long" : "106.70587716",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820005,
            "code" : "2813366",
            "name" : "Võ Thi Hòang Yến",
            "address" : "266\/40 Tôn Đản,Phường 8,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75745882",
            "long" : "106.70477936",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820006,
            "code" : "2813367",
            "name" : "Lưu Thị Bích Võ",
            "address" : "307\/11c Tôn Đản.,Phường 15,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75489162",
            "long" : "106.70611472",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820007,
            "code" : "2813368",
            "name" : "Nguyen Thi Hanh",
            "address" : "5 Lê Thach,Phường 1,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7640497",
            "long" : "106.70558587",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820008,
            "code" : "2813369",
            "name" : "Tu Ty",
            "address" : "25 Lê Thach,Phường 2,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.76386402",
            "long" : "106.70601195",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820009,
            "code" : "2813374",
            "name" : "Nguyễn Văn Nở",
            "address" : "122\/16 Tôn Đản,Phường 10,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.759949",
            "long" : "106.70634",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820010,
            "code" : "2813376",
            "name" : "Hồ Thị Ngọc Lài",
            "address" : "37\/9 Đoàn Như Hài,Phường 12,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.765812",
            "long" : "106.7058",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820011,
            "code" : "2813379",
            "name" : "Chuc Thanh Phuong",
            "address" : "2 CC C1Tân Vinh,Phường 6,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75991325",
            "long" : "106.69979388",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820012,
            "code" : "2813382",
            "name" : "Ngo Thi Lan",
            "address" : "K 30 CX Vĩnh Hội, Bến Vân Đồn,Phường 4,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.76121486",
            "long" : "106.69988408",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820013,
            "code" : "2833293",
            "name" : "Trà Sữa Đô Rê Mon-Vĩnh Hội",
            "address" : "D32 Cư Xá Vĩnh Hội,Phường 5,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.760331",
            "long" : "106.69794",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820014,
            "code" : "2812735",
            "name" : "Đoàn Minh Kỳ",
            "address" : "243\/31\/30 Tôn Đản,Phường 15,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.755839",
            "long" : "106.70766",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820015,
            "code" : "3403875",
            "name" : "Trần Thị Hà",
            "address" : "336 Tôn Đản,P4,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.755141",
            "long" : "106.70577",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820016,
            "code" : "4748095",
            "name" : "Trần Thị Nể",
            "address" : "243\/31\/28 Tôn Đản,P.15,QUẬN 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.755775",
            "long" : "106.7077",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820017,
            "code" : "2812657",
            "name" : "Pham Thi Huong",
            "address" : "46 Đường 20,Phường Long Thạnh Mỹ,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.843460932374",
            "long" : "106.827267408371",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820018,
            "code" : "2813537",
            "name" : "Võ Thị Mỹ",
            "address" : "911 Nguyễn Xiển,Phường Long Thạnh Mỹ,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8528621",
            "long" : "106.833501",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820019,
            "code" : "2813539",
            "name" : "Ton Thi Le Thu",
            "address" : "294 Nguyen Van Tang,Phường Long Thạnh Mỹ,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.841163075529",
            "long" : "106.822577733547",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820020,
            "code" : "2813540",
            "name" : "Nguyen Thi Huong Ngoc",
            "address" : "323 Hoàng Hữu Nam,P. Long Thạnh Mỹ,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.868090",
            "long" : "106.813805",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820021,
            "code" : "2813579",
            "name" : "Lưu Đức Bắc",
            "address" : "387 Nguyễn Văn Tăng,Phường Long Thạnh Mỹ,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8410154",
            "long" : "106.8262362",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820022,
            "code" : "2910045",
            "name" : "Nguyễn Thị Hồng-114 Đường số 6",
            "address" : "114 Đường số 6. Kp Long Bửu,Phường Long Bình,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8578272",
            "long" : "106.8435869",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820023,
            "code" : "2813501",
            "name" : "Nguyen Thi Bach Diep",
            "address" : "265 Nguyen Xien,Phường Tăng Nhơn Phú A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.825318847783",
            "long" : "106.829494647682",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820024,
            "code" : "4287692",
            "name" : "Đặc Sản Hà Nội 2",
            "address" : "01 - S01 Toà BS16 CC VinHomes Grandpark  - Nguyễn Xiển,P. Long Thạnh Mỹ,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.847197",
            "long" : "106.843832",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820025,
            "code" : "4390447",
            "name" : "Cam Táo Mart",
            "address" : "T2-14 Manhattan Vinhomes Grandpark,P . Long Thạnh Mỹ,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.839218",
            "long" : "106.84184",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820026,
            "code" : "4748469",
            "name" : "Bách Hóa Sơn Thu",
            "address" : "338 Nguyễn Văn Tăng,P.Long Thạnh Mỹ,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.841236",
            "long" : "106.824187",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820027,
            "code" : "4768508",
            "name" : "KonNi 39",
            "address" : "S6-03 01S15 CC Vinhomes Grandpark - Nguyễn Xiển,P.Long Thạnh Mỹ,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.843946",
            "long" : "106.838032",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820028,
            "code" : "4848252",
            "name" : "Tạp Hóa Kim Oanh",
            "address" : "3\/34 Quyết Thắng - Bình Thắng,Bình Dương,THỊ XÃ DĨ AN,TỈNH BÌNH DƯƠNG",
            "lat" : "10.8603817",
            "long" : "106.8368383",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820029,
            "code" : "4884494",
            "name" : "Mart 24h - 2",
            "address" : "E2 Khu Masteri Vinhomes Grandpark,P.Long Thạnh Mỹ,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.842191",
            "long" : "106.840157",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820030,
            "code" : "2812767",
            "name" : "Nguyễn Thi Kim Thương",
            "address" : "209F Tôn Thất Thuyết,Phường 3,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75531295",
            "long" : "106.69871475",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820031,
            "code" : "2812769",
            "name" : "Trần Thị Thơ",
            "address" : "196\/47\/1 Tôn Thất Thuyết,Phường 3,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75389676",
            "long" : "106.69988188",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820032,
            "code" : "2812771",
            "name" : "Do Thi Thu Ha",
            "address" : "2Lô M CC Tôn Thất Thuyết,Phường 1,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7545183",
            "long" : "106.691966",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820033,
            "code" : "2812734",
            "name" : "Minh Hải",
            "address" : "305 Tôn Thất Thuyết,Phường 1,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.752946",
            "long" : "106.6941",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820034,
            "code" : "2813383",
            "name" : "Khu Bach Lan",
            "address" : "12 Nguyễn Khóai,Phường 10,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75329628",
            "long" : "106.69531752",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820035,
            "code" : "3196340",
            "name" : "Trường Nguyễn Huệ",
            "address" : "243 hoàng diệu,Phường 8,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7615667",
            "long" : "106.7013983",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820036,
            "code" : "2813031",
            "name" : "Nguyễn Thi Lập",
            "address" : "B60 Nguyễn Thần Hiến,Phường 18,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7555034",
            "long" : "106.71682741",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820037,
            "code" : "2813051",
            "name" : "Huỳnh Thị Yên",
            "address" : "A91 Nguyễn Thần Hiến,Phường 18,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75462345",
            "long" : "106.71639125",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820038,
            "code" : "4059615",
            "name" : "TH Chị Lý",
            "address" : "383\/18 Bà Hạt P.4,P.4,Quận 10,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.763885",
            "long" : "106.70596",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820039,
            "code" : "4075702",
            "name" : "Jump Arena",
            "address" : "02-04 Đường Số 9 - Khu Đô Thị Mới Him Lam P. Tân Hưng,P. Tân Hưng,Quận 7,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.742012",
            "long" : "106.695233",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820040,
            "code" : "4274086",
            "name" : "Jum Arena 2",
            "address" : "02 Đường Số 9 - KDT Him Lam P. Tân Hưng,P. Tân Hưng,Quận 7,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.742012",
            "long" : "106.695233",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820041,
            "code" : "4419719",
            "name" : "Jum Arena Gò Vấp",
            "address" : "647 Quang Trung P.11,P.11,Quận Gò Vấp,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.742072",
            "long" : "106.695157",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820042,
            "code" : "4462506",
            "name" : "KVC Khánh Hội",
            "address" : "227 Đường Số 48,P.9,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75845045",
            "long" : "106.69867027",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820043,
            "code" : "4725362",
            "name" : "Đàm Sự Thân",
            "address" : "80 Hàm Nghi,P.Bến Nghé,QUẬN 1,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7712117",
            "long" : "106.7033751",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820044,
            "code" : "2813037",
            "name" : "Dinh Thi Xe",
            "address" : "692\/24 Đoàn Văn Bơ,Phường 13,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75749948",
            "long" : "106.71226133",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820045,
            "code" : "2813048",
            "name" : "Hồ Ngọc Hòang Dung",
            "address" : "920 Đoàn Văn Bơ,Phường 18,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.75667736",
            "long" : "106.71678553",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820046,
            "code" : "2813058",
            "name" : "Lâm Tài",
            "address" : "135 Xóm Chiếu,Phường 14,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.757251",
            "long" : "106.71022",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820047,
            "code" : "2812721",
            "name" : "Nguyễn Thị Hồng Hạnh",
            "address" : "538\/149 Đoàn Văn Bơ,Phường 14,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.757178",
            "long" : "106.708275",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820048,
            "code" : "2812765",
            "name" : "Nguyễn Anh Trung",
            "address" : "92\/18B Tôn Thất Thuyết,Phường 16,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.753966",
            "long" : "106.710175",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820049,
            "code" : "3269598",
            "name" : "Nguyễn Thị Mỹ Dung",
            "address" : "772\/20 Đoàn Văn Bơ,P.10,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.756785",
            "long" : "106.7138",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820050,
            "code" : "4197028",
            "name" : "TH Tiến Đào",
            "address" : "132 Đoàn Văn Bơ P.9,P.9,Quận 4,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.763286",
            "long" : "106.703964",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820051,
            "code" : "4440969",
            "name" : "Jum Arena 3",
            "address" : "645 Quang Trung P.12,P.12,Quận Gò Vấp,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8510392",
            "long" : "106.6609435",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820052,
            "code" : "4614402",
            "name" : "KVC 123 GO",
            "address" : "17 Tô Hiệu,P.Tân Thới Hòa,Quận Tân Phú,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.76631",
            "long" : "106.6269167",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820053,
            "code" : "4664055",
            "name" : "Nguyễn Thị Thu Thủy",
            "address" : "2238 Huỳnh Tấn Phát,Xã Phú Xuân,HUYỆN NHÀ BÈ,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.684122",
            "long" : "106.745345",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820054,
            "code" : "4848220",
            "name" : "KVC 123 Go 3",
            "address" : "641 Kinh Dương Vương,An Lạc,HUYỆN BÌNH TÂN,TỈNH VĨNH LONG",
            "lat" : "10.7663033",
            "long" : "106.6269333",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820055,
            "code" : "3887857",
            "name" : "FGR Tran Quoc Toan - I5T3-",
            "address" : "- 69 Diệp Minh Châu phường Tân Sơn Nhì - Phường Tân Sơn Nhì - Quận Tâ",
            "lat" : "10.7966631",
            "long" : "106.6329118",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820056,
            "code" : "4282761",
            "name" : "Chị Giao - I5T7-",
            "address" : "- 91\/19 Trần Tấn - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.797013126441",
            "long" : "106.63531250719",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820057,
            "code" : "2898639",
            "name" : "Nguyen Thi Huong-",
            "address" : "- 84\/20 Tan Son Nhi - Phường Tân Kỳ - Quận Tân Phú",
            "lat" : "10.8018117",
            "long" : "106.632705",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820058,
            "code" : "4238637",
            "name" : "Dương Thanh Hương - I5T7-",
            "address" : "- 58 Nguyễn Văn Săng - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.7990499",
            "long" : "106.63414564",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820059,
            "code" : "2898703",
            "name" : "Nguyễn Thị Ngọc Anh-I5T6-",
            "address" : "- 985\/37 Âu Cơ - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.8009637",
            "long" : "106.635665",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820060,
            "code" : "4766275",
            "name" : "Cô Oanh-I17T7-",
            "address" : "- 985\/38 Âu Cơ - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.8003333",
            "long" : "106.63521",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820061,
            "code" : "4851350",
            "name" : "TH 92-I17T7-",
            "address" : "- 92 Nguyễn Văn Săng - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.79884",
            "long" : "106.6329433",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820062,
            "code" : "2898621",
            "name" : "Dinh Huu Tho-",
            "address" : "- 20 Doc Lap - Phường Tân Thành - Quận Tân Phú",
            "lat" : "10.791711460458",
            "long" : "106.63617122725",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820063,
            "code" : "2898622",
            "name" : "Nguyen Khac Kinh-",
            "address" : "- 201 Thanh Cong - Phường Tân Thành - Quận Tân Phú",
            "lat" : "10.793511767096",
            "long" : "106.632182338395",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820064,
            "code" : "2898623",
            "name" : "Vu Thi Hanh-",
            "address" : "- 38 Nguyen Ba Tong - Phường Tân Thành - Quận Tân Phú",
            "lat" : "10.791971191176",
            "long" : "106.636473306284",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820065,
            "code" : "2898626",
            "name" : "Pham Ngoc Quyen-",
            "address" : "- 96A Dan Toc - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.794596275583",
            "long" : "106.633838952487",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820066,
            "code" : "2898675",
            "name" : "Nguyễn Minh Tú-I5-",
            "address" : "- 305 Tan Son Nhi - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.796602",
            "long" : "106.630646",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820067,
            "code" : "2898641",
            "name" : "Ly Thuc Trang-",
            "address" : "- 69\/12 Nguyen Cuu Dam - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.79865103",
            "long" : "106.62950443",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820068,
            "code" : "2898643",
            "name" : "Tran Thi Yen Nhi-",
            "address" : "- 177 Tan Ky Tan Quy - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.803152279023",
            "long" : "106.630964298466",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820069,
            "code" : "2898645",
            "name" : "Nguyen Thi Thanh Binh-",
            "address" : "- 249\/35\/9 Tan Ky Tan Quy - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.801227144217",
            "long" : "106.628354455487",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820070,
            "code" : "2898644",
            "name" : "Nguyen Thi Hong-",
            "address" : "- 249\/58 Tan Ky Tan Quy - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.80112155266",
            "long" : "106.627844411593",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820071,
            "code" : "4762251",
            "name" : "TT Minh Quân-17T2-",
            "address" : "- 25A Đường 1 - Phường Tân Thành - Quận Tân Phú",
            "lat" : "10.789932",
            "long" : "106.63141",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820072,
            "code" : "4720503",
            "name" : "Gia Phú-I11T3-",
            "address" : "uận Bình T - 151\/43  liên khu 4\/5 - bình hưng hòa B - Quận Bình Tân",
            "lat" : "10.7900167",
            "long" : "106.631785",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820073,
            "code" : "2898624",
            "name" : "Chu Thi Phuong-",
            "address" : "- 167 Truong Vinh Ky - Phường Tân Thành - Quận Tân Phú",
            "lat" : "10.793749213512",
            "long" : "106.633218616618",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820074,
            "code" : "2898667",
            "name" : "Trần Trọng Đạt-",
            "address" : "- 36 Trần Văn Ơn - Phường Tân Sơn Nhì - Quận Tân Phú",
            "lat" : "10.801242735023",
            "long" : "106.630700125461",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820075,
            "code" : "3887859",
            "name" : "FGR Nguyen Dinh Du - I5T2-",
            "address" : "- 27 Thống Nhất - Phuòng Tân Thành - Quận Tân Phú",
            "lat" : "10.7904119",
            "long" : "106.6364659",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820076,
            "code" : "3204895",
            "name" : "Bạch Thị Thúy Kiều-I5T3-",
            "address" : "- 24 Đường số 2 - Phường Tân Thành - Quận Tân Phú",
            "lat" : "10.78990753",
            "long" : "106.63134826",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "19790"
        },
        {
            "id" : 1820077,
            "code" : "3000353000005",
            "name" : "CH Trung Kiên",
            "address" : "1888 Huỳnh Tấn Phát, Phường Phú Mỹ, Quận 7, Thành phố Hồ Chí Minh",
            "lat" : "10.6855611",
            "long" : "106.7955538",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820078,
            "code" : "2813074",
            "name" : "Nguyen Thi Thuy",
            "address" : "003A.2a Chung Cư Bùi Mimh Trực III,P. 5,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.73615",
            "long" : "106.6594351",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820079,
            "code" : "2813080",
            "name" : "Nguyen Ngoc Yen",
            "address" : "254 Bùi Minh Trực,Phường 7,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7373455",
            "long" : "106.6556252",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820080,
            "code" : "2813091",
            "name" : "Võ Thị Một",
            "address" : "85\/11 Bùi Minh Trực,Phường 5,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7386342",
            "long" : "106.6602881",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820081,
            "code" : "2813092",
            "name" : "Lê Thi Cẫm Nhung",
            "address" : "161\/9 Bông Sao,Phường 5,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7382375",
            "long" : "106.6630214",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820082,
            "code" : "2813103",
            "name" : "Lê Thị Tuyết",
            "address" : "24 đường số 8, khu2, Bùi Minh,Phường 5,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7361537",
            "long" : "106.6589636",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820083,
            "code" : "2813077",
            "name" : "Le Thi Huyen",
            "address" : "31 Đường số 10,Xã Bình Hưng,Huyện Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7269344",
            "long" : "106.6549998",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820084,
            "code" : "2813084",
            "name" : "Shop 175",
            "address" : "175 Đường Số 1,Xã Bình Hưng,Huyện Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7303057",
            "long" : "106.6542279",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820085,
            "code" : "3179491",
            "name" : "TRƯỜNG THPT TẠ QUANG BỬU",
            "address" : "909 TẠ QUANG BỬU,PHƯỜNG 5,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.73408033",
            "long" : "106.66063037",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820086,
            "code" : "3222869",
            "name" : "Hà Thị Vân",
            "address" : "180 Bùi Minh Trực,Phường 5,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7382813",
            "long" : "106.658793",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820087,
            "code" : "3285160",
            "name" : "Nguyen Thi Tham Phuong Trinh",
            "address" : "238\/25 Bùi Minh Trực,Phường 6,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.736183",
            "long" : "106.6543",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820088,
            "code" : "3737407",
            "name" : "Đặng Huỳnh Phương Thảo",
            "address" : "306 Phạm Hùng,P.4,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.73996521",
            "long" : "106.66828992",
            "start_date" : "2025-12-06 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820089,
            "code" : "3000353000004",
            "name" : "Loan Lê",
            "address" : "B5 Đường D2, Phường Phú Hữu, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
            "lat" : "10.6852877",
            "long" : "106.7955835",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820090,
            "code" : "2813580",
            "name" : "Nguyen Thanh Hung",
            "address" : "78 Truong Van Thanh,Phường Hiệp Phú,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8499151",
            "long" : "106.7816584",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820091,
            "code" : "2813448",
            "name" : "Nguyễn Thế Sự",
            "address" : "Căn Tin Bệnh Viện Q9,Phường Tăng Nhơn Phú A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8446269",
            "long" : "106.790037",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820092,
            "code" : "2813499",
            "name" : "Trần Thị Thu Thủy",
            "address" : "3C Đường 494,Phường Tăng Nhơn Phú A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8462703",
            "long" : "106.8007555",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820093,
            "code" : "2813536",
            "name" : "Ngô Thị Quý",
            "address" : "C13\/6E Đường 455,Phường Tăng Nhơn Phú A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8469106",
            "long" : "106.7953425",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820094,
            "code" : "2812619",
            "name" : "Luu Thi Thu Nga",
            "address" : "14 Đường 160,Phường Tăng Nhơn Phú A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.839",
            "long" : "106.7918182",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820095,
            "code" : "2812620",
            "name" : "Nguyen Phuong Thao",
            "address" : "84 Làng Tăng Phú, KP4,Phường Tăng Nhơn Phú A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8461997",
            "long" : "106.7987692",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820096,
            "code" : "2812629",
            "name" : "Ngô Thị Hạnh",
            "address" : "51 Làng Tăng Phú,Phường Tăng Nhơn Phú A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8431473",
            "long" : "106.798452",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820097,
            "code" : "3018646",
            "name" : "Lê Thị Trình-3\/25 tổ 17 kp3",
            "address" : "3\/25 tổ 17 kp3,phường Tăng Nhơn Phú A,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8384459",
            "long" : "106.7950147",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820098,
            "code" : "3044433",
            "name" : "Trần Thúy Phượng-46 Lã Xuân Oai",
            "address" : "432 Lê Văn Việt,P, Hiệp Phú,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8440318",
            "long" : "106.7890619",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820099,
            "code" : "4046645",
            "name" : "Nguyễn Hữu Hiệp",
            "address" : "203 Man Thiện,Hiệp Phú,Quận Thủ Đức,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8532167",
            "long" : "106.7906591",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820100,
            "code" : "4094974",
            "name" : "Nguyễn Ngọc Thanh Hằng",
            "address" : "53B Làng Tăng Phú,TNPA,Thủ Đức,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.84331031",
            "long" : "106.79859069",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820101,
            "code" : "4175820",
            "name" : "Trần Thị Nguyên",
            "address" : "364B Võ Văn Hát,Long Trường,Quận Thủ Đức,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.816867",
            "long" : "106.81019",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820102,
            "code" : "4817377",
            "name" : "Trần Thành Nhân",
            "address" : "21 Man Thiên,P. Hiệp Phú,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.845815",
            "long" : "106.786606",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820103,
            "code" : "4860479",
            "name" : "Nhà Hàng PHƯƠNG NAM",
            "address" : "666 Lã Xuân Oai.,P. Long Trường,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8113225",
            "long" : "106.8143576",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820104,
            "code" : "4856239",
            "name" : "BÁCH HÓA TIỆN ÍCH",
            "address" : "T2-1.4 ĐƯỜNG D1, KHU CÔNG NGHỆ CAO,P. TÂN PHÚ,QUẬN THỦ ĐỨC,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8534136",
            "long" : "106.7954423",
            "start_date" : "2025-12-08 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820105,
            "code" : "3000353000001",
            "name" : "TH Quốc Phương",
            "address" : "Phạm Phú Thứ, Phường 07, Quận 6, Thành phố Hồ Chí Minh",
            "lat" : "10.685171",
            "long" : "106.7955909",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820106,
            "code" : "2812916",
            "name" : "Nguyen Thi Mong Tra",
            "address" : "302 Dương Bá Trạc,Phường 5,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7445851",
            "long" : "106.689244",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820107,
            "code" : "2812925",
            "name" : "Bui Thi Mui",
            "address" : "119\/81A Đặng Chất,P. 10,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7470102",
            "long" : "106.6855668",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820108,
            "code" : "2812928",
            "name" : "Trần Đinh Long",
            "address" : "157\/79 Dương Bá Trạc,Phường 1,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7470113",
            "long" : "106.6904045",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820109,
            "code" : "2812931",
            "name" : "Trần Thi Ngoc Tâm",
            "address" : "157\/12 Dương Bá Trạc,Phường 1,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7474166",
            "long" : "106.6891169",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820110,
            "code" : "2812953",
            "name" : "Tạ Thị Thanh Bình",
            "address" : "231\/59 Dương Bá Trạc,Phường 6,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.74572943",
            "long" : "106.69032054",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820111,
            "code" : "4011017",
            "name" : "Trịnh Đổ Anh Dũng",
            "address" : "B12\/1 Phạm Thế Hiển,Phường 3,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.748897",
            "long" : "106.6845944",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820112,
            "code" : "4591310",
            "name" : "Trường Bùi Hữu Nghĩa",
            "address" : "389\/34 Tỉnh Lộ 10,P.An Lạc,Quận Bình Tân,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.70336122",
            "long" : "106.7301754",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820113,
            "code" : "2813123",
            "name" : "Pham Van Thanh",
            "address" : "1360 Huỳnh Tấn Phát,Phường Phú Mỹ,Quận 7,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.71265788",
            "long" : "106.73698054",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820114,
            "code" : "3139520",
            "name" : "Trường THPT Tân Phong",
            "address" : "19F Khu Dân Cư Ven Sông Đường,Phường Tân Phong,Quận 7,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.72692702",
            "long" : "106.69316849",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820115,
            "code" : "2813129",
            "name" : "Truong Hoc Sao Viet",
            "address" : "Nguyễn Hữu Thọ,Phường Tân Hưng,Quận 7,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7429363",
            "long" : "106.6997385",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820116,
            "code" : "2812776",
            "name" : "Tiểu học Trần Quang Cơ",
            "address" : "438 Ngô Gia Tự,Phường 14,Quận 10,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.761238",
            "long" : "106.66932",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820117,
            "code" : "2812774",
            "name" : "Tiểu học Lê Thị Riêng",
            "address" : "493 Cách Mạng Tháng 8,Phường 13,Quận 10,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.780095",
            "long" : "106.67196",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820118,
            "code" : "4043788",
            "name" : "A vương CSND",
            "address" : "36 Nguyễn Hữu Thọ,Tân Phong,Quận 7,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7333409",
            "long" : "106.69677545",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820119,
            "code" : "4095392",
            "name" : "Trường Hòa Hưng",
            "address" : "493\/73a Cách Mạng Tháng 8,P.13,Quận 10,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.78175375",
            "long" : "106.67234788",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820120,
            "code" : "4340639",
            "name" : "TrườngTHPT Nguyễn An Ninh",
            "address" : "93 Trần Nhân Tôn,TPHCM,Quận 10,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.761821",
            "long" : "106.6749",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820121,
            "code" : "4432261",
            "name" : "TrườngSươngNguyệtAnh",
            "address" : "249 Hòa Hảo,TPHCM,Quận 10,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7625299",
            "long" : "106.67118707",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820122,
            "code" : "4498447",
            "name" : "Văn Dũng",
            "address" : "1434 Đường  Bảy Hiền,P.11,Quận Tân Bình,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.70013809",
            "long" : "106.72891792",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820123,
            "code" : "4557339",
            "name" : "Trường Nguyễn Văn Tố",
            "address" : "140 Đ.Tam Đảo,P.14,Quận 10,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.77601017",
            "long" : "106.66059727",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820124,
            "code" : "500007000001",
            "name" : "tiên nga",
            "address" : "16 nguyễn Bình, Xã Phú Xuân, Huyện Nhà Bè, Thành phố Hồ Chí Minh",
            "lat" : "10.6783721",
            "long" : "106.7505006",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820125,
            "code" : "500007000005",
            "name" : "yongth market",
            "address" : "92 Lê Văn Thiêm, Phường Tân Phong, Quận 7, Thành phố Hồ Chí Minh",
            "lat" : "10.7367928",
            "long" : "106.7172071",
            "start_date" : "2025-12-09 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820126,
            "code" : "4530152",
            "name" : "Đại Lý Sơn Lâm",
            "address" : "172\/26A,An Dương Vương,P.16,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.700146",
            "long" : "106.72888",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820127,
            "code" : "2898039",
            "name" : "Tap Hóa Cô Bằng-",
            "address" : "- 254\/24 Nguyễn Văn Luông - Phường 11 - Quận 6",
            "lat" : "10.7465105",
            "long" : "106.6357622",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820128,
            "code" : "2909525",
            "name" : "Hồ Thúy Vy_I0T6-",
            "address" : "- 21B Nguyễn Văn Luông - Phường 10 - Quận 6",
            "lat" : "10.7346236",
            "long" : "106.633833",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820129,
            "code" : "3137562",
            "name" : "THCS Phú Định - I0T5-",
            "address" : "- 94 Bis Lý Chiêu Hoàng - Phường 10 - Quận 6",
            "lat" : "10.7374572",
            "long" : "106.6301292",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820130,
            "code" : "2897997",
            "name" : "Huynh Thi Hien-",
            "address" : "- 165\/5F Văn Thân - Phường 8 - Quận 6",
            "lat" : "10.7415279",
            "long" : "106.6372226",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820131,
            "code" : "2898028",
            "name" : "Nguyen Thi My Hanh-",
            "address" : "- 721 Pham Van Chi - Phường 7 - Quận 6",
            "lat" : "10.7381344",
            "long" : "106.6352117",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820132,
            "code" : "4028430",
            "name" : "Nguyễn Kế Võ Nghiệp - I0T5-",
            "address" : "- 1005 Lò Gốm - Phường 8 - Quận 6",
            "lat" : "10.7416793",
            "long" : "106.635366",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820133,
            "code" : "2898027",
            "name" : "Dang Ha Huong-",
            "address" : "- 493 Nguyễn Văn Luông - Phường 6 - Quận 6",
            "lat" : "10.753431",
            "long" : "106.6344543",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820134,
            "code" : "3358427",
            "name" : "Trần Minh Phương Dung-I0T6-",
            "address" : "- 27\/18 Kinh Dương Vương - Phường 12 - Quận 6",
            "lat" : "10.751934",
            "long" : "106.63366",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820135,
            "code" : "2909522",
            "name" : "Trần Cẩm Châu_I0T4-",
            "address" : "- 411\/1 Bến Phú Lâm - Phường 9 - Quận 6",
            "lat" : "10.7523368",
            "long" : "106.6406188",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820136,
            "code" : "3398658",
            "name" : "Trường TH Võ Văn Tần-I0T4-Nguyễn Văn Hiền",
            "address" : "- 97 Phạm Đình Hổ - Phường 6 - Quận 6",
            "lat" : "10.7519772",
            "long" : "106.6496696",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820137,
            "code" : "2897987",
            "name" : "Nguyen Ngoc Ly-",
            "address" : "- 182C1 Pham Phu Thu - Phường 12 - Quận 6",
            "lat" : "10.7451764",
            "long" : "106.6434456",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820138,
            "code" : "2897996",
            "name" : "Lệ Thi Hồng-",
            "address" : "- 402 Lê Quang Sung - Phường 9 - Quận 6",
            "lat" : "10.7517735",
            "long" : "106.6418802",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820139,
            "code" : "2897992",
            "name" : "Tra Thanh Vân-",
            "address" : "- 221\/17 Phan Văn Khỏe - Phường 7 - Quận 6",
            "lat" : "10.7481075",
            "long" : "106.6438784",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820140,
            "code" : "4656632",
            "name" : "chị hằng-I0T2-",
            "address" : "- 168A Bình Tiên - Phường 4 - Quận 6",
            "lat" : "10.74342232",
            "long" : "106.64311782",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820141,
            "code" : "4736537",
            "name" : "Đặng Phạm Kim Lợi-I16T3-",
            "address" : "- 116 B1 Lý Chiêu Hoàng - Phường 10 - Quận 6",
            "lat" : "10.7399101",
            "long" : "106.6268087",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820142,
            "code" : "4391976",
            "name" : "Bình Phú",
            "address" : "102 Trần Văn Kiểu,P.10,Quận 6,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.735798",
            "long" : "106.62696",
            "start_date" : "2025-12-10 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820143,
            "code" : "3000353000002",
            "name" : "TH Cô Chi",
            "address" : "200a đường 21,phường Phước Long A,q9, Phường Phước Long A, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
            "lat" : "10.6852143",
            "long" : "106.7955638",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820144,
            "code" : "38153000001",
            "name" : "youth market",
            "address" : "nhà số 13, đường số 14 khu B, Phường An Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
            "lat" : "10.7996197",
            "long" : "106.74245",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820145,
            "code" : "2812660",
            "name" : "Nguyen Thi Thu Ha",
            "address" : "85 Đường 3, Tổ 3, KP2,Phường Phước Bình,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8189058",
            "long" : "106.7713837",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820146,
            "code" : "2812661",
            "name" : "Nguyen Thi Le Thu",
            "address" : "78 Ho Ba Phan,Phường Phước Long A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8243223",
            "long" : "106.7644241",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820147,
            "code" : "2813470",
            "name" : "Phạm Thị Hồng Nhi",
            "address" : "93 Đường 18,Phường Phước Bình,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8147781",
            "long" : "106.7713181",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820148,
            "code" : "2813474",
            "name" : "Thach Minh Thang",
            "address" : "59 Đường 6D, KP3,Phường Phước Bình,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8151821",
            "long" : "106.7696198",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820149,
            "code" : "2813480",
            "name" : "Mai Viết Quang",
            "address" : "02 Đặng Văn Bi,Phường Bình Thọ,Thủ Đức,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8391585",
            "long" : "106.7665102",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820150,
            "code" : "2812643",
            "name" : "Tran Thi Le Thuy",
            "address" : "27 Nam Hoa,Phường Phước Long A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8224786",
            "long" : "106.7608716",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820151,
            "code" : "2813589",
            "name" : "Nguyen Duc Rim",
            "address" : "188 Do Xuan Hop,Phường Phước Long A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8284651",
            "long" : "106.7685706",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820152,
            "code" : "2813590",
            "name" : "Phan Thi Phuong",
            "address" : "50 Do Xuan Hop,Phường Phước Long A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8325551",
            "long" : "106.7671406",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820153,
            "code" : "2862303",
            "name" : "Võ Thị Thanh Hoa-79 Đường 109",
            "address" : "79 Đường 109,phường phước long B,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8220993",
            "long" : "106.7762763",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820154,
            "code" : "2893893",
            "name" : "Đinh Thị Lý-66 đường 21",
            "address" : "66 đường 21,phường phước Long A,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.816381",
            "long" : "106.7689358",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820155,
            "code" : "2891450",
            "name" : "Seethai",
            "address" : "344 - 346 Nguyễn Xí,Phường 13,Quận Bình Thạnh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8191907",
            "long" : "106.7730241",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820156,
            "code" : "4561365",
            "name" : "Võ Hoàng Chương",
            "address" : "16D Đường 359,Phước Long B,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.82130078",
            "long" : "106.77449288",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820157,
            "code" : "4745175",
            "name" : "Nguyễn Văn Phúc",
            "address" : "67 Tăng Nhơn Phú,Phước Long B,QUẬN THỦ ĐỨC,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.82803",
            "long" : "106.77212",
            "start_date" : "2025-12-11 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820158,
            "code" : "3000353000003",
            "name" : "Hoài Phúc",
            "address" : "168\/25 Vân thân,q6, Phường 06, Quận 6, Thành phố Hồ Chí Minh",
            "lat" : "10.685194",
            "long" : "106.79555",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820159,
            "code" : "2812883",
            "name" : "Đặng Văn Bích",
            "address" : "48\/1 Bến Phú Dinh,Phường 16,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7222569",
            "long" : "106.6277826",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820160,
            "code" : "2812889",
            "name" : "Tran Tong Minh",
            "address" : "80\/45 Đường 41,Phường 2,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7258039",
            "long" : "106.6279303",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820161,
            "code" : "2812892",
            "name" : "Nguyen Xuan Huy",
            "address" : "76\/29\/1 Đường 44,Phường 3,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7205947",
            "long" : "106.6229575",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820162,
            "code" : "3080845",
            "name" : "Nguyễn Văn Trung",
            "address" : "118\/59\/13\/3 Phú Định,phường 16,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7282898",
            "long" : "106.6291674",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820163,
            "code" : "2812836",
            "name" : "Đào Văn Việt",
            "address" : "A5.010 CC E Home3 Hồ Học Lãm,Phường 15,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7147299",
            "long" : "106.61003354",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820164,
            "code" : "4502423",
            "name" : "DasuMart",
            "address" : "79\/25 Phú Định,P.16,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.72988054",
            "long" : "106.63139116",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820165,
            "code" : "2812825",
            "name" : "TẠP HÓA 35",
            "address" : "35 VÕ TRÚ,Phường 9,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7460908",
            "long" : "106.6728364",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820166,
            "code" : "2812850",
            "name" : "Le Thi Kim Lien",
            "address" : "Hẻm 253 - Lưu Hữu Phước,Phường 5,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7258915",
            "long" : "106.6346985",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820167,
            "code" : "2812853",
            "name" : "Do Hong Phi",
            "address" : "30 Lương văn Can,Phường 10,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7348483",
            "long" : "106.6397234",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820168,
            "code" : "2812867",
            "name" : "TẠP HÓA A SON",
            "address" : "127 MỄ CỐC,Phường 15,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7212078",
            "long" : "106.6290839",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820169,
            "code" : "2812873",
            "name" : "Nguyen Thi Thanh Tien",
            "address" : "3K Rạch Cát,Phường 11,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.71635692",
            "long" : "106.62909442",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820170,
            "code" : "3164977",
            "name" : "NGUYỄN HOÀNG KHANH",
            "address" : "145 MỄ CỐC,PHƯỜNG 15,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7187576",
            "long" : "106.6287128",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820171,
            "code" : "3195285",
            "name" : "Nguyen Ngoc Minh",
            "address" : "697-699 Ben Binh Dong,Phuong 13,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.74427963",
            "long" : "106.65249041",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820172,
            "code" : "3695268",
            "name" : "Pham Kim Loan",
            "address" : "102 Hoài Thanh,P. 14,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.737265",
            "long" : "106.64753",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820173,
            "code" : "3998345",
            "name" : "Thạch Thị Duy Tranh",
            "address" : "135k Bến Bình Đông,P14,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.739839",
            "long" : "106.64627",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820174,
            "code" : "4090872",
            "name" : "Võ Thị Bích Thủy",
            "address" : "10 Bình Đông,P15,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.73674024",
            "long" : "106.64075162",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820175,
            "code" : "4561363",
            "name" : "Trường Ngô Gia Tự",
            "address" : "360E Bình Đông,P.15,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.70012599",
            "long" : "106.72894536",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820176,
            "code" : "4765792",
            "name" : "KVC TRẺ EM",
            "address" : "50G BẾN PHÚ ĐỊNH,P16,QUẬN 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7196054",
            "long" : "106.6274871",
            "start_date" : "2025-12-12 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820177,
            "code" : "3000353000005",
            "name" : "CH Trung Kiên",
            "address" : "1888 Huỳnh Tấn Phát, Phường Phú Mỹ, Quận 7, Thành phố Hồ Chí Minh",
            "lat" : "10.6855611",
            "long" : "106.7955538",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820178,
            "code" : "2813074",
            "name" : "Nguyen Thi Thuy",
            "address" : "003A.2a Chung Cư Bùi Mimh Trực III,P. 5,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.73615",
            "long" : "106.6594351",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820179,
            "code" : "2813080",
            "name" : "Nguyen Ngoc Yen",
            "address" : "254 Bùi Minh Trực,Phường 7,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7373455",
            "long" : "106.6556252",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820180,
            "code" : "2813091",
            "name" : "Võ Thị Một",
            "address" : "85\/11 Bùi Minh Trực,Phường 5,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7386342",
            "long" : "106.6602881",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820181,
            "code" : "2813092",
            "name" : "Lê Thi Cẫm Nhung",
            "address" : "161\/9 Bông Sao,Phường 5,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7382375",
            "long" : "106.6630214",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820182,
            "code" : "2813103",
            "name" : "Lê Thị Tuyết",
            "address" : "24 đường số 8, khu2, Bùi Minh,Phường 5,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7361537",
            "long" : "106.6589636",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820183,
            "code" : "2813077",
            "name" : "Le Thi Huyen",
            "address" : "31 Đường số 10,Xã Bình Hưng,Huyện Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7269344",
            "long" : "106.6549998",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820184,
            "code" : "2813084",
            "name" : "Shop 175",
            "address" : "175 Đường Số 1,Xã Bình Hưng,Huyện Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7303057",
            "long" : "106.6542279",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820185,
            "code" : "3179491",
            "name" : "TRƯỜNG THPT TẠ QUANG BỬU",
            "address" : "909 TẠ QUANG BỬU,PHƯỜNG 5,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.73408033",
            "long" : "106.66063037",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820186,
            "code" : "3222869",
            "name" : "Hà Thị Vân",
            "address" : "180 Bùi Minh Trực,Phường 5,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7382813",
            "long" : "106.658793",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820187,
            "code" : "3285160",
            "name" : "Nguyen Thi Tham Phuong Trinh",
            "address" : "238\/25 Bùi Minh Trực,Phường 6,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.736183",
            "long" : "106.6543",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820188,
            "code" : "3737407",
            "name" : "Đặng Huỳnh Phương Thảo",
            "address" : "306 Phạm Hùng,P.4,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.73996521",
            "long" : "106.66828992",
            "start_date" : "2025-12-13 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820189,
            "code" : "3000353000004",
            "name" : "Loan Lê",
            "address" : "B5 Đường D2, Phường Phú Hữu, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
            "lat" : "10.6852877",
            "long" : "106.7955835",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820190,
            "code" : "2813580",
            "name" : "Nguyen Thanh Hung",
            "address" : "78 Truong Van Thanh,Phường Hiệp Phú,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8499151",
            "long" : "106.7816584",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820191,
            "code" : "2813448",
            "name" : "Nguyễn Thế Sự",
            "address" : "Căn Tin Bệnh Viện Q9,Phường Tăng Nhơn Phú A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8446269",
            "long" : "106.790037",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820192,
            "code" : "2813499",
            "name" : "Trần Thị Thu Thủy",
            "address" : "3C Đường 494,Phường Tăng Nhơn Phú A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8462703",
            "long" : "106.8007555",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820193,
            "code" : "2813536",
            "name" : "Ngô Thị Quý",
            "address" : "C13\/6E Đường 455,Phường Tăng Nhơn Phú A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8469106",
            "long" : "106.7953425",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820194,
            "code" : "2812619",
            "name" : "Luu Thi Thu Nga",
            "address" : "14 Đường 160,Phường Tăng Nhơn Phú A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.839",
            "long" : "106.7918182",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820195,
            "code" : "2812620",
            "name" : "Nguyen Phuong Thao",
            "address" : "84 Làng Tăng Phú, KP4,Phường Tăng Nhơn Phú A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8461997",
            "long" : "106.7987692",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820196,
            "code" : "2812629",
            "name" : "Ngô Thị Hạnh",
            "address" : "51 Làng Tăng Phú,Phường Tăng Nhơn Phú A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8431473",
            "long" : "106.798452",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820197,
            "code" : "3018646",
            "name" : "Lê Thị Trình-3\/25 tổ 17 kp3",
            "address" : "3\/25 tổ 17 kp3,phường Tăng Nhơn Phú A,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8384459",
            "long" : "106.7950147",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820198,
            "code" : "3044433",
            "name" : "Trần Thúy Phượng-46 Lã Xuân Oai",
            "address" : "432 Lê Văn Việt,P, Hiệp Phú,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8440318",
            "long" : "106.7890619",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820199,
            "code" : "4046645",
            "name" : "Nguyễn Hữu Hiệp",
            "address" : "203 Man Thiện,Hiệp Phú,Quận Thủ Đức,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8532167",
            "long" : "106.7906591",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820200,
            "code" : "4094974",
            "name" : "Nguyễn Ngọc Thanh Hằng",
            "address" : "53B Làng Tăng Phú,TNPA,Thủ Đức,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.84331031",
            "long" : "106.79859069",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820201,
            "code" : "4175820",
            "name" : "Trần Thị Nguyên",
            "address" : "364B Võ Văn Hát,Long Trường,Quận Thủ Đức,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.816867",
            "long" : "106.81019",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820202,
            "code" : "4817377",
            "name" : "Trần Thành Nhân",
            "address" : "21 Man Thiên,P. Hiệp Phú,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.845815",
            "long" : "106.786606",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820203,
            "code" : "4860479",
            "name" : "Nhà Hàng PHƯƠNG NAM",
            "address" : "666 Lã Xuân Oai.,P. Long Trường,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8113225",
            "long" : "106.8143576",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820204,
            "code" : "4856239",
            "name" : "BÁCH HÓA TIỆN ÍCH",
            "address" : "T2-1.4 ĐƯỜNG D1, KHU CÔNG NGHỆ CAO,P. TÂN PHÚ,QUẬN THỦ ĐỨC,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8534136",
            "long" : "106.7954423",
            "start_date" : "2025-12-15 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820205,
            "code" : "3000353000001",
            "name" : "TH Quốc Phương",
            "address" : "Phạm Phú Thứ, Phường 07, Quận 6, Thành phố Hồ Chí Minh",
            "lat" : "10.685171",
            "long" : "106.7955909",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820206,
            "code" : "2812916",
            "name" : "Nguyen Thi Mong Tra",
            "address" : "302 Dương Bá Trạc,Phường 5,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7445851",
            "long" : "106.689244",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820207,
            "code" : "2812925",
            "name" : "Bui Thi Mui",
            "address" : "119\/81A Đặng Chất,P. 10,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7470102",
            "long" : "106.6855668",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820208,
            "code" : "2812928",
            "name" : "Trần Đinh Long",
            "address" : "157\/79 Dương Bá Trạc,Phường 1,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7470113",
            "long" : "106.6904045",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820209,
            "code" : "2812931",
            "name" : "Trần Thi Ngoc Tâm",
            "address" : "157\/12 Dương Bá Trạc,Phường 1,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7474166",
            "long" : "106.6891169",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820210,
            "code" : "2812953",
            "name" : "Tạ Thị Thanh Bình",
            "address" : "231\/59 Dương Bá Trạc,Phường 6,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.74572943",
            "long" : "106.69032054",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820211,
            "code" : "4011017",
            "name" : "Trịnh Đổ Anh Dũng",
            "address" : "B12\/1 Phạm Thế Hiển,Phường 3,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.748897",
            "long" : "106.6845944",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820212,
            "code" : "4591310",
            "name" : "Trường Bùi Hữu Nghĩa",
            "address" : "389\/34 Tỉnh Lộ 10,P.An Lạc,Quận Bình Tân,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.70336122",
            "long" : "106.7301754",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820213,
            "code" : "2813123",
            "name" : "Pham Van Thanh",
            "address" : "1360 Huỳnh Tấn Phát,Phường Phú Mỹ,Quận 7,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.71265788",
            "long" : "106.73698054",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820214,
            "code" : "3139520",
            "name" : "Trường THPT Tân Phong",
            "address" : "19F Khu Dân Cư Ven Sông Đường,Phường Tân Phong,Quận 7,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.72692702",
            "long" : "106.69316849",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820215,
            "code" : "2813129",
            "name" : "Truong Hoc Sao Viet",
            "address" : "Nguyễn Hữu Thọ,Phường Tân Hưng,Quận 7,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7429363",
            "long" : "106.6997385",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820216,
            "code" : "2812776",
            "name" : "Tiểu học Trần Quang Cơ",
            "address" : "438 Ngô Gia Tự,Phường 14,Quận 10,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.761238",
            "long" : "106.66932",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820217,
            "code" : "2812774",
            "name" : "Tiểu học Lê Thị Riêng",
            "address" : "493 Cách Mạng Tháng 8,Phường 13,Quận 10,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.780095",
            "long" : "106.67196",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820218,
            "code" : "4043788",
            "name" : "A vương CSND",
            "address" : "36 Nguyễn Hữu Thọ,Tân Phong,Quận 7,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7333409",
            "long" : "106.69677545",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820219,
            "code" : "4095392",
            "name" : "Trường Hòa Hưng",
            "address" : "493\/73a Cách Mạng Tháng 8,P.13,Quận 10,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.78175375",
            "long" : "106.67234788",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820220,
            "code" : "4340639",
            "name" : "TrườngTHPT Nguyễn An Ninh",
            "address" : "93 Trần Nhân Tôn,TPHCM,Quận 10,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.761821",
            "long" : "106.6749",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820221,
            "code" : "4432261",
            "name" : "TrườngSươngNguyệtAnh",
            "address" : "249 Hòa Hảo,TPHCM,Quận 10,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7625299",
            "long" : "106.67118707",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820222,
            "code" : "4498447",
            "name" : "Văn Dũng",
            "address" : "1434 Đường  Bảy Hiền,P.11,Quận Tân Bình,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.70013809",
            "long" : "106.72891792",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820223,
            "code" : "4557339",
            "name" : "Trường Nguyễn Văn Tố",
            "address" : "140 Đ.Tam Đảo,P.14,Quận 10,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.77601017",
            "long" : "106.66059727",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820224,
            "code" : "500007000001",
            "name" : "tiên nga",
            "address" : "16 nguyễn Bình, Xã Phú Xuân, Huyện Nhà Bè, Thành phố Hồ Chí Minh",
            "lat" : "10.6783721",
            "long" : "106.7505006",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820225,
            "code" : "500007000005",
            "name" : "yongth market",
            "address" : "92 Lê Văn Thiêm, Phường Tân Phong, Quận 7, Thành phố Hồ Chí Minh",
            "lat" : "10.7367928",
            "long" : "106.7172071",
            "start_date" : "2025-12-16 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820226,
            "code" : "4530152",
            "name" : "Đại Lý Sơn Lâm",
            "address" : "172\/26A,An Dương Vương,P.16,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.700146",
            "long" : "106.72888",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820227,
            "code" : "2898039",
            "name" : "Tap Hóa Cô Bằng-",
            "address" : "- 254\/24 Nguyễn Văn Luông - Phường 11 - Quận 6",
            "lat" : "10.7465105",
            "long" : "106.6357622",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820228,
            "code" : "2909525",
            "name" : "Hồ Thúy Vy_I0T6-",
            "address" : "- 21B Nguyễn Văn Luông - Phường 10 - Quận 6",
            "lat" : "10.7346236",
            "long" : "106.633833",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820229,
            "code" : "3137562",
            "name" : "THCS Phú Định - I0T5-",
            "address" : "- 94 Bis Lý Chiêu Hoàng - Phường 10 - Quận 6",
            "lat" : "10.7374572",
            "long" : "106.6301292",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820230,
            "code" : "2897997",
            "name" : "Huynh Thi Hien-",
            "address" : "- 165\/5F Văn Thân - Phường 8 - Quận 6",
            "lat" : "10.7415279",
            "long" : "106.6372226",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820231,
            "code" : "2898028",
            "name" : "Nguyen Thi My Hanh-",
            "address" : "- 721 Pham Van Chi - Phường 7 - Quận 6",
            "lat" : "10.7381344",
            "long" : "106.6352117",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820232,
            "code" : "4028430",
            "name" : "Nguyễn Kế Võ Nghiệp - I0T5-",
            "address" : "- 1005 Lò Gốm - Phường 8 - Quận 6",
            "lat" : "10.7416793",
            "long" : "106.635366",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820233,
            "code" : "2898027",
            "name" : "Dang Ha Huong-",
            "address" : "- 493 Nguyễn Văn Luông - Phường 6 - Quận 6",
            "lat" : "10.753431",
            "long" : "106.6344543",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820234,
            "code" : "3358427",
            "name" : "Trần Minh Phương Dung-I0T6-",
            "address" : "- 27\/18 Kinh Dương Vương - Phường 12 - Quận 6",
            "lat" : "10.751934",
            "long" : "106.63366",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820235,
            "code" : "2909522",
            "name" : "Trần Cẩm Châu_I0T4-",
            "address" : "- 411\/1 Bến Phú Lâm - Phường 9 - Quận 6",
            "lat" : "10.7523368",
            "long" : "106.6406188",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820236,
            "code" : "3398658",
            "name" : "Trường TH Võ Văn Tần-I0T4-Nguyễn Văn Hiền",
            "address" : "- 97 Phạm Đình Hổ - Phường 6 - Quận 6",
            "lat" : "10.7519772",
            "long" : "106.6496696",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820237,
            "code" : "2897987",
            "name" : "Nguyen Ngoc Ly-",
            "address" : "- 182C1 Pham Phu Thu - Phường 12 - Quận 6",
            "lat" : "10.7451764",
            "long" : "106.6434456",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820238,
            "code" : "2897996",
            "name" : "Lệ Thi Hồng-",
            "address" : "- 402 Lê Quang Sung - Phường 9 - Quận 6",
            "lat" : "10.7517735",
            "long" : "106.6418802",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820239,
            "code" : "2897992",
            "name" : "Tra Thanh Vân-",
            "address" : "- 221\/17 Phan Văn Khỏe - Phường 7 - Quận 6",
            "lat" : "10.7481075",
            "long" : "106.6438784",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820240,
            "code" : "4656632",
            "name" : "chị hằng-I0T2-",
            "address" : "- 168A Bình Tiên - Phường 4 - Quận 6",
            "lat" : "10.74342232",
            "long" : "106.64311782",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820241,
            "code" : "4736537",
            "name" : "Đặng Phạm Kim Lợi-I16T3-",
            "address" : "- 116 B1 Lý Chiêu Hoàng - Phường 10 - Quận 6",
            "lat" : "10.7399101",
            "long" : "106.6268087",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820242,
            "code" : "4391976",
            "name" : "Bình Phú",
            "address" : "102 Trần Văn Kiểu,P.10,Quận 6,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.735798",
            "long" : "106.62696",
            "start_date" : "2025-12-17 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820243,
            "code" : "3000353000002",
            "name" : "TH Cô Chi",
            "address" : "200a đường 21,phường Phước Long A,q9, Phường Phước Long A, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
            "lat" : "10.6852143",
            "long" : "106.7955638",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820244,
            "code" : "38153000001",
            "name" : "youth market",
            "address" : "nhà số 13, đường số 14 khu B, Phường An Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
            "lat" : "10.7996197",
            "long" : "106.74245",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820245,
            "code" : "2812660",
            "name" : "Nguyen Thi Thu Ha",
            "address" : "85 Đường 3, Tổ 3, KP2,Phường Phước Bình,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8189058",
            "long" : "106.7713837",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820246,
            "code" : "2812661",
            "name" : "Nguyen Thi Le Thu",
            "address" : "78 Ho Ba Phan,Phường Phước Long A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8243223",
            "long" : "106.7644241",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820247,
            "code" : "2813470",
            "name" : "Phạm Thị Hồng Nhi",
            "address" : "93 Đường 18,Phường Phước Bình,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8147781",
            "long" : "106.7713181",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820248,
            "code" : "2813474",
            "name" : "Thach Minh Thang",
            "address" : "59 Đường 6D, KP3,Phường Phước Bình,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8151821",
            "long" : "106.7696198",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820249,
            "code" : "2813480",
            "name" : "Mai Viết Quang",
            "address" : "02 Đặng Văn Bi,Phường Bình Thọ,Thủ Đức,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8391585",
            "long" : "106.7665102",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820250,
            "code" : "2812643",
            "name" : "Tran Thi Le Thuy",
            "address" : "27 Nam Hoa,Phường Phước Long A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8224786",
            "long" : "106.7608716",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820251,
            "code" : "2813589",
            "name" : "Nguyen Duc Rim",
            "address" : "188 Do Xuan Hop,Phường Phước Long A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8284651",
            "long" : "106.7685706",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820252,
            "code" : "2813590",
            "name" : "Phan Thi Phuong",
            "address" : "50 Do Xuan Hop,Phường Phước Long A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8325551",
            "long" : "106.7671406",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820253,
            "code" : "2862303",
            "name" : "Võ Thị Thanh Hoa-79 Đường 109",
            "address" : "79 Đường 109,phường phước long B,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8220993",
            "long" : "106.7762763",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820254,
            "code" : "2893893",
            "name" : "Đinh Thị Lý-66 đường 21",
            "address" : "66 đường 21,phường phước Long A,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.816381",
            "long" : "106.7689358",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820255,
            "code" : "2891450",
            "name" : "Seethai",
            "address" : "344 - 346 Nguyễn Xí,Phường 13,Quận Bình Thạnh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8191907",
            "long" : "106.7730241",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820256,
            "code" : "4561365",
            "name" : "Võ Hoàng Chương",
            "address" : "16D Đường 359,Phước Long B,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.82130078",
            "long" : "106.77449288",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820257,
            "code" : "4745175",
            "name" : "Nguyễn Văn Phúc",
            "address" : "67 Tăng Nhơn Phú,Phước Long B,QUẬN THỦ ĐỨC,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.82803",
            "long" : "106.77212",
            "start_date" : "2025-12-18 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820258,
            "code" : "3000353000003",
            "name" : "Hoài Phúc",
            "address" : "168\/25 Vân thân,q6, Phường 06, Quận 6, Thành phố Hồ Chí Minh",
            "lat" : "10.685194",
            "long" : "106.79555",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820259,
            "code" : "2812883",
            "name" : "Đặng Văn Bích",
            "address" : "48\/1 Bến Phú Dinh,Phường 16,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7222569",
            "long" : "106.6277826",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820260,
            "code" : "2812889",
            "name" : "Tran Tong Minh",
            "address" : "80\/45 Đường 41,Phường 2,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7258039",
            "long" : "106.6279303",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820261,
            "code" : "2812892",
            "name" : "Nguyen Xuan Huy",
            "address" : "76\/29\/1 Đường 44,Phường 3,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7205947",
            "long" : "106.6229575",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820262,
            "code" : "3080845",
            "name" : "Nguyễn Văn Trung",
            "address" : "118\/59\/13\/3 Phú Định,phường 16,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7282898",
            "long" : "106.6291674",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820263,
            "code" : "2812836",
            "name" : "Đào Văn Việt",
            "address" : "A5.010 CC E Home3 Hồ Học Lãm,Phường 15,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7147299",
            "long" : "106.61003354",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820264,
            "code" : "4502423",
            "name" : "DasuMart",
            "address" : "79\/25 Phú Định,P.16,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.72988054",
            "long" : "106.63139116",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820265,
            "code" : "2812825",
            "name" : "TẠP HÓA 35",
            "address" : "35 VÕ TRÚ,Phường 9,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7460908",
            "long" : "106.6728364",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820266,
            "code" : "2812850",
            "name" : "Le Thi Kim Lien",
            "address" : "Hẻm 253 - Lưu Hữu Phước,Phường 5,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7258915",
            "long" : "106.6346985",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820267,
            "code" : "2812853",
            "name" : "Do Hong Phi",
            "address" : "30 Lương văn Can,Phường 10,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7348483",
            "long" : "106.6397234",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820268,
            "code" : "2812867",
            "name" : "TẠP HÓA A SON",
            "address" : "127 MỄ CỐC,Phường 15,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7212078",
            "long" : "106.6290839",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820269,
            "code" : "2812873",
            "name" : "Nguyen Thi Thanh Tien",
            "address" : "3K Rạch Cát,Phường 11,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.71635692",
            "long" : "106.62909442",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820270,
            "code" : "3164977",
            "name" : "NGUYỄN HOÀNG KHANH",
            "address" : "145 MỄ CỐC,PHƯỜNG 15,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7187576",
            "long" : "106.6287128",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820271,
            "code" : "3195285",
            "name" : "Nguyen Ngoc Minh",
            "address" : "697-699 Ben Binh Dong,Phuong 13,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.74427963",
            "long" : "106.65249041",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820272,
            "code" : "3695268",
            "name" : "Pham Kim Loan",
            "address" : "102 Hoài Thanh,P. 14,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.737265",
            "long" : "106.64753",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820273,
            "code" : "3998345",
            "name" : "Thạch Thị Duy Tranh",
            "address" : "135k Bến Bình Đông,P14,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.739839",
            "long" : "106.64627",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820274,
            "code" : "4090872",
            "name" : "Võ Thị Bích Thủy",
            "address" : "10 Bình Đông,P15,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.73674024",
            "long" : "106.64075162",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820275,
            "code" : "4561363",
            "name" : "Trường Ngô Gia Tự",
            "address" : "360E Bình Đông,P.15,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.70012599",
            "long" : "106.72894536",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820276,
            "code" : "4765792",
            "name" : "KVC TRẺ EM",
            "address" : "50G BẾN PHÚ ĐỊNH,P16,QUẬN 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7196054",
            "long" : "106.6274871",
            "start_date" : "2025-12-19 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820277,
            "code" : "3000353000005",
            "name" : "CH Trung Kiên",
            "address" : "1888 Huỳnh Tấn Phát, Phường Phú Mỹ, Quận 7, Thành phố Hồ Chí Minh",
            "lat" : "10.6855611",
            "long" : "106.7955538",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820278,
            "code" : "2813074",
            "name" : "Nguyen Thi Thuy",
            "address" : "003A.2a Chung Cư Bùi Mimh Trực III,P. 5,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.73615",
            "long" : "106.6594351",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820279,
            "code" : "2813080",
            "name" : "Nguyen Ngoc Yen",
            "address" : "254 Bùi Minh Trực,Phường 7,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7373455",
            "long" : "106.6556252",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820280,
            "code" : "2813091",
            "name" : "Võ Thị Một",
            "address" : "85\/11 Bùi Minh Trực,Phường 5,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7386342",
            "long" : "106.6602881",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820281,
            "code" : "2813092",
            "name" : "Lê Thi Cẫm Nhung",
            "address" : "161\/9 Bông Sao,Phường 5,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7382375",
            "long" : "106.6630214",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820282,
            "code" : "2813103",
            "name" : "Lê Thị Tuyết",
            "address" : "24 đường số 8, khu2, Bùi Minh,Phường 5,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7361537",
            "long" : "106.6589636",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820283,
            "code" : "2813077",
            "name" : "Le Thi Huyen",
            "address" : "31 Đường số 10,Xã Bình Hưng,Huyện Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7269344",
            "long" : "106.6549998",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820284,
            "code" : "2813084",
            "name" : "Shop 175",
            "address" : "175 Đường Số 1,Xã Bình Hưng,Huyện Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7303057",
            "long" : "106.6542279",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820285,
            "code" : "3179491",
            "name" : "TRƯỜNG THPT TẠ QUANG BỬU",
            "address" : "909 TẠ QUANG BỬU,PHƯỜNG 5,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.73408033",
            "long" : "106.66063037",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820286,
            "code" : "3222869",
            "name" : "Hà Thị Vân",
            "address" : "180 Bùi Minh Trực,Phường 5,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7382813",
            "long" : "106.658793",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820287,
            "code" : "3285160",
            "name" : "Nguyen Thi Tham Phuong Trinh",
            "address" : "238\/25 Bùi Minh Trực,Phường 6,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.736183",
            "long" : "106.6543",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820288,
            "code" : "3737407",
            "name" : "Đặng Huỳnh Phương Thảo",
            "address" : "306 Phạm Hùng,P.4,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.73996521",
            "long" : "106.66828992",
            "start_date" : "2025-12-20 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820289,
            "code" : "3000353000004",
            "name" : "Loan Lê",
            "address" : "B5 Đường D2, Phường Phú Hữu, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
            "lat" : "10.6852877",
            "long" : "106.7955835",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820290,
            "code" : "2813580",
            "name" : "Nguyen Thanh Hung",
            "address" : "78 Truong Van Thanh,Phường Hiệp Phú,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8499151",
            "long" : "106.7816584",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820291,
            "code" : "2813448",
            "name" : "Nguyễn Thế Sự",
            "address" : "Căn Tin Bệnh Viện Q9,Phường Tăng Nhơn Phú A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8446269",
            "long" : "106.790037",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820292,
            "code" : "2813499",
            "name" : "Trần Thị Thu Thủy",
            "address" : "3C Đường 494,Phường Tăng Nhơn Phú A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8462703",
            "long" : "106.8007555",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820293,
            "code" : "2813536",
            "name" : "Ngô Thị Quý",
            "address" : "C13\/6E Đường 455,Phường Tăng Nhơn Phú A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8469106",
            "long" : "106.7953425",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820294,
            "code" : "2812619",
            "name" : "Luu Thi Thu Nga",
            "address" : "14 Đường 160,Phường Tăng Nhơn Phú A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.839",
            "long" : "106.7918182",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820295,
            "code" : "2812620",
            "name" : "Nguyen Phuong Thao",
            "address" : "84 Làng Tăng Phú, KP4,Phường Tăng Nhơn Phú A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8461997",
            "long" : "106.7987692",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820296,
            "code" : "2812629",
            "name" : "Ngô Thị Hạnh",
            "address" : "51 Làng Tăng Phú,Phường Tăng Nhơn Phú A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8431473",
            "long" : "106.798452",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820297,
            "code" : "3018646",
            "name" : "Lê Thị Trình-3\/25 tổ 17 kp3",
            "address" : "3\/25 tổ 17 kp3,phường Tăng Nhơn Phú A,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8384459",
            "long" : "106.7950147",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820298,
            "code" : "3044433",
            "name" : "Trần Thúy Phượng-46 Lã Xuân Oai",
            "address" : "432 Lê Văn Việt,P, Hiệp Phú,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8440318",
            "long" : "106.7890619",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820299,
            "code" : "4046645",
            "name" : "Nguyễn Hữu Hiệp",
            "address" : "203 Man Thiện,Hiệp Phú,Quận Thủ Đức,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8532167",
            "long" : "106.7906591",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820300,
            "code" : "4094974",
            "name" : "Nguyễn Ngọc Thanh Hằng",
            "address" : "53B Làng Tăng Phú,TNPA,Thủ Đức,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.84331031",
            "long" : "106.79859069",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820301,
            "code" : "4175820",
            "name" : "Trần Thị Nguyên",
            "address" : "364B Võ Văn Hát,Long Trường,Quận Thủ Đức,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.816867",
            "long" : "106.81019",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820302,
            "code" : "4817377",
            "name" : "Trần Thành Nhân",
            "address" : "21 Man Thiên,P. Hiệp Phú,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.845815",
            "long" : "106.786606",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820303,
            "code" : "4860479",
            "name" : "Nhà Hàng PHƯƠNG NAM",
            "address" : "666 Lã Xuân Oai.,P. Long Trường,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8113225",
            "long" : "106.8143576",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820304,
            "code" : "4856239",
            "name" : "BÁCH HÓA TIỆN ÍCH",
            "address" : "T2-1.4 ĐƯỜNG D1, KHU CÔNG NGHỆ CAO,P. TÂN PHÚ,QUẬN THỦ ĐỨC,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8534136",
            "long" : "106.7954423",
            "start_date" : "2025-12-22 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820305,
            "code" : "3000353000001",
            "name" : "TH Quốc Phương",
            "address" : "Phạm Phú Thứ, Phường 07, Quận 6, Thành phố Hồ Chí Minh",
            "lat" : "10.685171",
            "long" : "106.7955909",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820306,
            "code" : "2812916",
            "name" : "Nguyen Thi Mong Tra",
            "address" : "302 Dương Bá Trạc,Phường 5,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7445851",
            "long" : "106.689244",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820307,
            "code" : "2812925",
            "name" : "Bui Thi Mui",
            "address" : "119\/81A Đặng Chất,P. 10,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7470102",
            "long" : "106.6855668",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820308,
            "code" : "2812928",
            "name" : "Trần Đinh Long",
            "address" : "157\/79 Dương Bá Trạc,Phường 1,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7470113",
            "long" : "106.6904045",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820309,
            "code" : "2812931",
            "name" : "Trần Thi Ngoc Tâm",
            "address" : "157\/12 Dương Bá Trạc,Phường 1,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7474166",
            "long" : "106.6891169",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820310,
            "code" : "2812953",
            "name" : "Tạ Thị Thanh Bình",
            "address" : "231\/59 Dương Bá Trạc,Phường 6,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.74572943",
            "long" : "106.69032054",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820311,
            "code" : "4011017",
            "name" : "Trịnh Đổ Anh Dũng",
            "address" : "B12\/1 Phạm Thế Hiển,Phường 3,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.748897",
            "long" : "106.6845944",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820312,
            "code" : "4591310",
            "name" : "Trường Bùi Hữu Nghĩa",
            "address" : "389\/34 Tỉnh Lộ 10,P.An Lạc,Quận Bình Tân,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.70336122",
            "long" : "106.7301754",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820313,
            "code" : "2813123",
            "name" : "Pham Van Thanh",
            "address" : "1360 Huỳnh Tấn Phát,Phường Phú Mỹ,Quận 7,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.71265788",
            "long" : "106.73698054",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820314,
            "code" : "3139520",
            "name" : "Trường THPT Tân Phong",
            "address" : "19F Khu Dân Cư Ven Sông Đường,Phường Tân Phong,Quận 7,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.72692702",
            "long" : "106.69316849",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820315,
            "code" : "2813129",
            "name" : "Truong Hoc Sao Viet",
            "address" : "Nguyễn Hữu Thọ,Phường Tân Hưng,Quận 7,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7429363",
            "long" : "106.6997385",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820316,
            "code" : "2812776",
            "name" : "Tiểu học Trần Quang Cơ",
            "address" : "438 Ngô Gia Tự,Phường 14,Quận 10,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.761238",
            "long" : "106.66932",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820317,
            "code" : "2812774",
            "name" : "Tiểu học Lê Thị Riêng",
            "address" : "493 Cách Mạng Tháng 8,Phường 13,Quận 10,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.780095",
            "long" : "106.67196",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820318,
            "code" : "4043788",
            "name" : "A vương CSND",
            "address" : "36 Nguyễn Hữu Thọ,Tân Phong,Quận 7,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7333409",
            "long" : "106.69677545",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820319,
            "code" : "4095392",
            "name" : "Trường Hòa Hưng",
            "address" : "493\/73a Cách Mạng Tháng 8,P.13,Quận 10,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.78175375",
            "long" : "106.67234788",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820320,
            "code" : "4340639",
            "name" : "TrườngTHPT Nguyễn An Ninh",
            "address" : "93 Trần Nhân Tôn,TPHCM,Quận 10,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.761821",
            "long" : "106.6749",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820321,
            "code" : "4432261",
            "name" : "TrườngSươngNguyệtAnh",
            "address" : "249 Hòa Hảo,TPHCM,Quận 10,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7625299",
            "long" : "106.67118707",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820322,
            "code" : "4498447",
            "name" : "Văn Dũng",
            "address" : "1434 Đường  Bảy Hiền,P.11,Quận Tân Bình,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.70013809",
            "long" : "106.72891792",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820323,
            "code" : "4557339",
            "name" : "Trường Nguyễn Văn Tố",
            "address" : "140 Đ.Tam Đảo,P.14,Quận 10,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.77601017",
            "long" : "106.66059727",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820324,
            "code" : "500007000001",
            "name" : "tiên nga",
            "address" : "16 nguyễn Bình, Xã Phú Xuân, Huyện Nhà Bè, Thành phố Hồ Chí Minh",
            "lat" : "10.6783721",
            "long" : "106.7505006",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820325,
            "code" : "500007000005",
            "name" : "yongth market",
            "address" : "92 Lê Văn Thiêm, Phường Tân Phong, Quận 7, Thành phố Hồ Chí Minh",
            "lat" : "10.7367928",
            "long" : "106.7172071",
            "start_date" : "2025-12-23 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820326,
            "code" : "4530152",
            "name" : "Đại Lý Sơn Lâm",
            "address" : "172\/26A,An Dương Vương,P.16,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.700146",
            "long" : "106.72888",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820327,
            "code" : "2898039",
            "name" : "Tap Hóa Cô Bằng-",
            "address" : "- 254\/24 Nguyễn Văn Luông - Phường 11 - Quận 6",
            "lat" : "10.7465105",
            "long" : "106.6357622",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820328,
            "code" : "2909525",
            "name" : "Hồ Thúy Vy_I0T6-",
            "address" : "- 21B Nguyễn Văn Luông - Phường 10 - Quận 6",
            "lat" : "10.7346236",
            "long" : "106.633833",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820329,
            "code" : "3137562",
            "name" : "THCS Phú Định - I0T5-",
            "address" : "- 94 Bis Lý Chiêu Hoàng - Phường 10 - Quận 6",
            "lat" : "10.7374572",
            "long" : "106.6301292",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820330,
            "code" : "2897997",
            "name" : "Huynh Thi Hien-",
            "address" : "- 165\/5F Văn Thân - Phường 8 - Quận 6",
            "lat" : "10.7415279",
            "long" : "106.6372226",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820331,
            "code" : "2898028",
            "name" : "Nguyen Thi My Hanh-",
            "address" : "- 721 Pham Van Chi - Phường 7 - Quận 6",
            "lat" : "10.7381344",
            "long" : "106.6352117",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820332,
            "code" : "4028430",
            "name" : "Nguyễn Kế Võ Nghiệp - I0T5-",
            "address" : "- 1005 Lò Gốm - Phường 8 - Quận 6",
            "lat" : "10.7416793",
            "long" : "106.635366",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820333,
            "code" : "2898027",
            "name" : "Dang Ha Huong-",
            "address" : "- 493 Nguyễn Văn Luông - Phường 6 - Quận 6",
            "lat" : "10.753431",
            "long" : "106.6344543",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820334,
            "code" : "3358427",
            "name" : "Trần Minh Phương Dung-I0T6-",
            "address" : "- 27\/18 Kinh Dương Vương - Phường 12 - Quận 6",
            "lat" : "10.751934",
            "long" : "106.63366",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820335,
            "code" : "2909522",
            "name" : "Trần Cẩm Châu_I0T4-",
            "address" : "- 411\/1 Bến Phú Lâm - Phường 9 - Quận 6",
            "lat" : "10.7523368",
            "long" : "106.6406188",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820336,
            "code" : "3398658",
            "name" : "Trường TH Võ Văn Tần-I0T4-Nguyễn Văn Hiền",
            "address" : "- 97 Phạm Đình Hổ - Phường 6 - Quận 6",
            "lat" : "10.7519772",
            "long" : "106.6496696",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820337,
            "code" : "2897987",
            "name" : "Nguyen Ngoc Ly-",
            "address" : "- 182C1 Pham Phu Thu - Phường 12 - Quận 6",
            "lat" : "10.7451764",
            "long" : "106.6434456",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820338,
            "code" : "2897996",
            "name" : "Lệ Thi Hồng-",
            "address" : "- 402 Lê Quang Sung - Phường 9 - Quận 6",
            "lat" : "10.7517735",
            "long" : "106.6418802",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820339,
            "code" : "2897992",
            "name" : "Tra Thanh Vân-",
            "address" : "- 221\/17 Phan Văn Khỏe - Phường 7 - Quận 6",
            "lat" : "10.7481075",
            "long" : "106.6438784",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820340,
            "code" : "4656632",
            "name" : "chị hằng-I0T2-",
            "address" : "- 168A Bình Tiên - Phường 4 - Quận 6",
            "lat" : "10.74342232",
            "long" : "106.64311782",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820341,
            "code" : "4736537",
            "name" : "Đặng Phạm Kim Lợi-I16T3-",
            "address" : "- 116 B1 Lý Chiêu Hoàng - Phường 10 - Quận 6",
            "lat" : "10.7399101",
            "long" : "106.6268087",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820342,
            "code" : "4391976",
            "name" : "Bình Phú",
            "address" : "102 Trần Văn Kiểu,P.10,Quận 6,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.735798",
            "long" : "106.62696",
            "start_date" : "2025-12-24 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820343,
            "code" : "3000353000002",
            "name" : "TH Cô Chi",
            "address" : "200a đường 21,phường Phước Long A,q9, Phường Phước Long A, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
            "lat" : "10.6852143",
            "long" : "106.7955638",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820344,
            "code" : "38153000001",
            "name" : "youth market",
            "address" : "nhà số 13, đường số 14 khu B, Phường An Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
            "lat" : "10.7996197",
            "long" : "106.74245",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820345,
            "code" : "2812660",
            "name" : "Nguyen Thi Thu Ha",
            "address" : "85 Đường 3, Tổ 3, KP2,Phường Phước Bình,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8189058",
            "long" : "106.7713837",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820346,
            "code" : "2812661",
            "name" : "Nguyen Thi Le Thu",
            "address" : "78 Ho Ba Phan,Phường Phước Long A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8243223",
            "long" : "106.7644241",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820347,
            "code" : "2813470",
            "name" : "Phạm Thị Hồng Nhi",
            "address" : "93 Đường 18,Phường Phước Bình,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8147781",
            "long" : "106.7713181",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820348,
            "code" : "2813474",
            "name" : "Thach Minh Thang",
            "address" : "59 Đường 6D, KP3,Phường Phước Bình,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8151821",
            "long" : "106.7696198",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820349,
            "code" : "2813480",
            "name" : "Mai Viết Quang",
            "address" : "02 Đặng Văn Bi,Phường Bình Thọ,Thủ Đức,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8391585",
            "long" : "106.7665102",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820350,
            "code" : "2812643",
            "name" : "Tran Thi Le Thuy",
            "address" : "27 Nam Hoa,Phường Phước Long A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8224786",
            "long" : "106.7608716",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820351,
            "code" : "2813589",
            "name" : "Nguyen Duc Rim",
            "address" : "188 Do Xuan Hop,Phường Phước Long A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8284651",
            "long" : "106.7685706",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820352,
            "code" : "2813590",
            "name" : "Phan Thi Phuong",
            "address" : "50 Do Xuan Hop,Phường Phước Long A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8325551",
            "long" : "106.7671406",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820353,
            "code" : "2862303",
            "name" : "Võ Thị Thanh Hoa-79 Đường 109",
            "address" : "79 Đường 109,phường phước long B,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8220993",
            "long" : "106.7762763",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820354,
            "code" : "2893893",
            "name" : "Đinh Thị Lý-66 đường 21",
            "address" : "66 đường 21,phường phước Long A,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.816381",
            "long" : "106.7689358",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820355,
            "code" : "2891450",
            "name" : "Seethai",
            "address" : "344 - 346 Nguyễn Xí,Phường 13,Quận Bình Thạnh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8191907",
            "long" : "106.7730241",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820356,
            "code" : "4561365",
            "name" : "Võ Hoàng Chương",
            "address" : "16D Đường 359,Phước Long B,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.82130078",
            "long" : "106.77449288",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820357,
            "code" : "4745175",
            "name" : "Nguyễn Văn Phúc",
            "address" : "67 Tăng Nhơn Phú,Phước Long B,QUẬN THỦ ĐỨC,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.82803",
            "long" : "106.77212",
            "start_date" : "2025-12-25 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820358,
            "code" : "3000353000003",
            "name" : "Hoài Phúc",
            "address" : "168\/25 Vân thân,q6, Phường 06, Quận 6, Thành phố Hồ Chí Minh",
            "lat" : "10.685194",
            "long" : "106.79555",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820359,
            "code" : "2812883",
            "name" : "Đặng Văn Bích",
            "address" : "48\/1 Bến Phú Dinh,Phường 16,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7222569",
            "long" : "106.6277826",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820360,
            "code" : "2812889",
            "name" : "Tran Tong Minh",
            "address" : "80\/45 Đường 41,Phường 2,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7258039",
            "long" : "106.6279303",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820361,
            "code" : "2812892",
            "name" : "Nguyen Xuan Huy",
            "address" : "76\/29\/1 Đường 44,Phường 3,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7205947",
            "long" : "106.6229575",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820362,
            "code" : "3080845",
            "name" : "Nguyễn Văn Trung",
            "address" : "118\/59\/13\/3 Phú Định,phường 16,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7282898",
            "long" : "106.6291674",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820363,
            "code" : "2812836",
            "name" : "Đào Văn Việt",
            "address" : "A5.010 CC E Home3 Hồ Học Lãm,Phường 15,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7147299",
            "long" : "106.61003354",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820364,
            "code" : "4502423",
            "name" : "DasuMart",
            "address" : "79\/25 Phú Định,P.16,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.72988054",
            "long" : "106.63139116",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820365,
            "code" : "2812825",
            "name" : "TẠP HÓA 35",
            "address" : "35 VÕ TRÚ,Phường 9,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7460908",
            "long" : "106.6728364",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820366,
            "code" : "2812850",
            "name" : "Le Thi Kim Lien",
            "address" : "Hẻm 253 - Lưu Hữu Phước,Phường 5,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7258915",
            "long" : "106.6346985",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820367,
            "code" : "2812853",
            "name" : "Do Hong Phi",
            "address" : "30 Lương văn Can,Phường 10,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7348483",
            "long" : "106.6397234",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820368,
            "code" : "2812867",
            "name" : "TẠP HÓA A SON",
            "address" : "127 MỄ CỐC,Phường 15,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7212078",
            "long" : "106.6290839",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820369,
            "code" : "2812873",
            "name" : "Nguyen Thi Thanh Tien",
            "address" : "3K Rạch Cát,Phường 11,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.71635692",
            "long" : "106.62909442",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820370,
            "code" : "3164977",
            "name" : "NGUYỄN HOÀNG KHANH",
            "address" : "145 MỄ CỐC,PHƯỜNG 15,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7187576",
            "long" : "106.6287128",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820371,
            "code" : "3195285",
            "name" : "Nguyen Ngoc Minh",
            "address" : "697-699 Ben Binh Dong,Phuong 13,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.74427963",
            "long" : "106.65249041",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820372,
            "code" : "3695268",
            "name" : "Pham Kim Loan",
            "address" : "102 Hoài Thanh,P. 14,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.737265",
            "long" : "106.64753",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820373,
            "code" : "3998345",
            "name" : "Thạch Thị Duy Tranh",
            "address" : "135k Bến Bình Đông,P14,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.739839",
            "long" : "106.64627",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820374,
            "code" : "4090872",
            "name" : "Võ Thị Bích Thủy",
            "address" : "10 Bình Đông,P15,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.73674024",
            "long" : "106.64075162",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820375,
            "code" : "4561363",
            "name" : "Trường Ngô Gia Tự",
            "address" : "360E Bình Đông,P.15,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.70012599",
            "long" : "106.72894536",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820376,
            "code" : "4765792",
            "name" : "KVC TRẺ EM",
            "address" : "50G BẾN PHÚ ĐỊNH,P16,QUẬN 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7196054",
            "long" : "106.6274871",
            "start_date" : "2025-12-26 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820377,
            "code" : "3000353000005",
            "name" : "CH Trung Kiên",
            "address" : "1888 Huỳnh Tấn Phát, Phường Phú Mỹ, Quận 7, Thành phố Hồ Chí Minh",
            "lat" : "10.6855611",
            "long" : "106.7955538",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820378,
            "code" : "2813074",
            "name" : "Nguyen Thi Thuy",
            "address" : "003A.2a Chung Cư Bùi Mimh Trực III,P. 5,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.73615",
            "long" : "106.6594351",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820379,
            "code" : "2813080",
            "name" : "Nguyen Ngoc Yen",
            "address" : "254 Bùi Minh Trực,Phường 7,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7373455",
            "long" : "106.6556252",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820380,
            "code" : "2813091",
            "name" : "Võ Thị Một",
            "address" : "85\/11 Bùi Minh Trực,Phường 5,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7386342",
            "long" : "106.6602881",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820381,
            "code" : "2813092",
            "name" : "Lê Thi Cẫm Nhung",
            "address" : "161\/9 Bông Sao,Phường 5,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7382375",
            "long" : "106.6630214",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820382,
            "code" : "2813103",
            "name" : "Lê Thị Tuyết",
            "address" : "24 đường số 8, khu2, Bùi Minh,Phường 5,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7361537",
            "long" : "106.6589636",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820383,
            "code" : "2813077",
            "name" : "Le Thi Huyen",
            "address" : "31 Đường số 10,Xã Bình Hưng,Huyện Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7269344",
            "long" : "106.6549998",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820384,
            "code" : "2813084",
            "name" : "Shop 175",
            "address" : "175 Đường Số 1,Xã Bình Hưng,Huyện Bình Chánh,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7303057",
            "long" : "106.6542279",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820385,
            "code" : "3179491",
            "name" : "TRƯỜNG THPT TẠ QUANG BỬU",
            "address" : "909 TẠ QUANG BỬU,PHƯỜNG 5,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.73408033",
            "long" : "106.66063037",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820386,
            "code" : "3222869",
            "name" : "Hà Thị Vân",
            "address" : "180 Bùi Minh Trực,Phường 5,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7382813",
            "long" : "106.658793",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820387,
            "code" : "3285160",
            "name" : "Nguyen Thi Tham Phuong Trinh",
            "address" : "238\/25 Bùi Minh Trực,Phường 6,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.736183",
            "long" : "106.6543",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820388,
            "code" : "3737407",
            "name" : "Đặng Huỳnh Phương Thảo",
            "address" : "306 Phạm Hùng,P.4,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.73996521",
            "long" : "106.66828992",
            "start_date" : "2025-12-27 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820389,
            "code" : "3000353000004",
            "name" : "Loan Lê",
            "address" : "B5 Đường D2, Phường Phú Hữu, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
            "lat" : "10.6852877",
            "long" : "106.7955835",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820390,
            "code" : "2813580",
            "name" : "Nguyen Thanh Hung",
            "address" : "78 Truong Van Thanh,Phường Hiệp Phú,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8499151",
            "long" : "106.7816584",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820391,
            "code" : "2813448",
            "name" : "Nguyễn Thế Sự",
            "address" : "Căn Tin Bệnh Viện Q9,Phường Tăng Nhơn Phú A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8446269",
            "long" : "106.790037",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820392,
            "code" : "2813499",
            "name" : "Trần Thị Thu Thủy",
            "address" : "3C Đường 494,Phường Tăng Nhơn Phú A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8462703",
            "long" : "106.8007555",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820393,
            "code" : "2813536",
            "name" : "Ngô Thị Quý",
            "address" : "C13\/6E Đường 455,Phường Tăng Nhơn Phú A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8469106",
            "long" : "106.7953425",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820394,
            "code" : "2812619",
            "name" : "Luu Thi Thu Nga",
            "address" : "14 Đường 160,Phường Tăng Nhơn Phú A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.839",
            "long" : "106.7918182",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820395,
            "code" : "2812620",
            "name" : "Nguyen Phuong Thao",
            "address" : "84 Làng Tăng Phú, KP4,Phường Tăng Nhơn Phú A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8461997",
            "long" : "106.7987692",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820396,
            "code" : "2812629",
            "name" : "Ngô Thị Hạnh",
            "address" : "51 Làng Tăng Phú,Phường Tăng Nhơn Phú A,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8431473",
            "long" : "106.798452",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820397,
            "code" : "3018646",
            "name" : "Lê Thị Trình-3\/25 tổ 17 kp3",
            "address" : "3\/25 tổ 17 kp3,phường Tăng Nhơn Phú A,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8384459",
            "long" : "106.7950147",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820398,
            "code" : "3044433",
            "name" : "Trần Thúy Phượng-46 Lã Xuân Oai",
            "address" : "432 Lê Văn Việt,P, Hiệp Phú,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8440318",
            "long" : "106.7890619",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820399,
            "code" : "4046645",
            "name" : "Nguyễn Hữu Hiệp",
            "address" : "203 Man Thiện,Hiệp Phú,Quận Thủ Đức,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8532167",
            "long" : "106.7906591",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820400,
            "code" : "4094974",
            "name" : "Nguyễn Ngọc Thanh Hằng",
            "address" : "53B Làng Tăng Phú,TNPA,Thủ Đức,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.84331031",
            "long" : "106.79859069",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820401,
            "code" : "4175820",
            "name" : "Trần Thị Nguyên",
            "address" : "364B Võ Văn Hát,Long Trường,Quận Thủ Đức,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.816867",
            "long" : "106.81019",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820402,
            "code" : "4817377",
            "name" : "Trần Thành Nhân",
            "address" : "21 Man Thiên,P. Hiệp Phú,QUẬN 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.845815",
            "long" : "106.786606",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820403,
            "code" : "4860479",
            "name" : "Nhà Hàng PHƯƠNG NAM",
            "address" : "666 Lã Xuân Oai.,P. Long Trường,Quận 9,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8113225",
            "long" : "106.8143576",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820404,
            "code" : "4856239",
            "name" : "BÁCH HÓA TIỆN ÍCH",
            "address" : "T2-1.4 ĐƯỜNG D1, KHU CÔNG NGHỆ CAO,P. TÂN PHÚ,QUẬN THỦ ĐỨC,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.8534136",
            "long" : "106.7954423",
            "start_date" : "2025-12-29 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820405,
            "code" : "3000353000001",
            "name" : "TH Quốc Phương",
            "address" : "Phạm Phú Thứ, Phường 07, Quận 6, Thành phố Hồ Chí Minh",
            "lat" : "10.685171",
            "long" : "106.7955909",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820406,
            "code" : "2812916",
            "name" : "Nguyen Thi Mong Tra",
            "address" : "302 Dương Bá Trạc,Phường 5,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7445851",
            "long" : "106.689244",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820407,
            "code" : "2812925",
            "name" : "Bui Thi Mui",
            "address" : "119\/81A Đặng Chất,P. 10,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7470102",
            "long" : "106.6855668",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820408,
            "code" : "2812928",
            "name" : "Trần Đinh Long",
            "address" : "157\/79 Dương Bá Trạc,Phường 1,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7470113",
            "long" : "106.6904045",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820409,
            "code" : "2812931",
            "name" : "Trần Thi Ngoc Tâm",
            "address" : "157\/12 Dương Bá Trạc,Phường 1,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7474166",
            "long" : "106.6891169",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820410,
            "code" : "2812953",
            "name" : "Tạ Thị Thanh Bình",
            "address" : "231\/59 Dương Bá Trạc,Phường 6,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.74572943",
            "long" : "106.69032054",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820411,
            "code" : "4011017",
            "name" : "Trịnh Đổ Anh Dũng",
            "address" : "B12\/1 Phạm Thế Hiển,Phường 3,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.748897",
            "long" : "106.6845944",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820412,
            "code" : "4591310",
            "name" : "Trường Bùi Hữu Nghĩa",
            "address" : "389\/34 Tỉnh Lộ 10,P.An Lạc,Quận Bình Tân,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.70336122",
            "long" : "106.7301754",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820413,
            "code" : "2813123",
            "name" : "Pham Van Thanh",
            "address" : "1360 Huỳnh Tấn Phát,Phường Phú Mỹ,Quận 7,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.71265788",
            "long" : "106.73698054",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820414,
            "code" : "3139520",
            "name" : "Trường THPT Tân Phong",
            "address" : "19F Khu Dân Cư Ven Sông Đường,Phường Tân Phong,Quận 7,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.72692702",
            "long" : "106.69316849",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820415,
            "code" : "2813129",
            "name" : "Truong Hoc Sao Viet",
            "address" : "Nguyễn Hữu Thọ,Phường Tân Hưng,Quận 7,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7429363",
            "long" : "106.6997385",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820416,
            "code" : "2812776",
            "name" : "Tiểu học Trần Quang Cơ",
            "address" : "438 Ngô Gia Tự,Phường 14,Quận 10,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.761238",
            "long" : "106.66932",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820417,
            "code" : "2812774",
            "name" : "Tiểu học Lê Thị Riêng",
            "address" : "493 Cách Mạng Tháng 8,Phường 13,Quận 10,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.780095",
            "long" : "106.67196",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820418,
            "code" : "4043788",
            "name" : "A vương CSND",
            "address" : "36 Nguyễn Hữu Thọ,Tân Phong,Quận 7,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7333409",
            "long" : "106.69677545",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820419,
            "code" : "4095392",
            "name" : "Trường Hòa Hưng",
            "address" : "493\/73a Cách Mạng Tháng 8,P.13,Quận 10,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.78175375",
            "long" : "106.67234788",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820420,
            "code" : "4340639",
            "name" : "TrườngTHPT Nguyễn An Ninh",
            "address" : "93 Trần Nhân Tôn,TPHCM,Quận 10,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.761821",
            "long" : "106.6749",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820421,
            "code" : "4432261",
            "name" : "TrườngSươngNguyệtAnh",
            "address" : "249 Hòa Hảo,TPHCM,Quận 10,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.7625299",
            "long" : "106.67118707",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820422,
            "code" : "4498447",
            "name" : "Văn Dũng",
            "address" : "1434 Đường  Bảy Hiền,P.11,Quận Tân Bình,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.70013809",
            "long" : "106.72891792",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820423,
            "code" : "4557339",
            "name" : "Trường Nguyễn Văn Tố",
            "address" : "140 Đ.Tam Đảo,P.14,Quận 10,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.77601017",
            "long" : "106.66059727",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820424,
            "code" : "500007000001",
            "name" : "tiên nga",
            "address" : "16 nguyễn Bình, Xã Phú Xuân, Huyện Nhà Bè, Thành phố Hồ Chí Minh",
            "lat" : "10.6783721",
            "long" : "106.7505006",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820425,
            "code" : "500007000005",
            "name" : "yongth market",
            "address" : "92 Lê Văn Thiêm, Phường Tân Phong, Quận 7, Thành phố Hồ Chí Minh",
            "lat" : "10.7367928",
            "long" : "106.7172071",
            "start_date" : "2025-12-30 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820426,
            "code" : "4530152",
            "name" : "Đại Lý Sơn Lâm",
            "address" : "172\/26A,An Dương Vương,P.16,Quận 8,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.700146",
            "long" : "106.72888",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820427,
            "code" : "2898039",
            "name" : "Tap Hóa Cô Bằng-",
            "address" : "- 254\/24 Nguyễn Văn Luông - Phường 11 - Quận 6",
            "lat" : "10.7465105",
            "long" : "106.6357622",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820428,
            "code" : "2909525",
            "name" : "Hồ Thúy Vy_I0T6-",
            "address" : "- 21B Nguyễn Văn Luông - Phường 10 - Quận 6",
            "lat" : "10.7346236",
            "long" : "106.633833",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820429,
            "code" : "3137562",
            "name" : "THCS Phú Định - I0T5-",
            "address" : "- 94 Bis Lý Chiêu Hoàng - Phường 10 - Quận 6",
            "lat" : "10.7374572",
            "long" : "106.6301292",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820430,
            "code" : "2897997",
            "name" : "Huynh Thi Hien-",
            "address" : "- 165\/5F Văn Thân - Phường 8 - Quận 6",
            "lat" : "10.7415279",
            "long" : "106.6372226",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820431,
            "code" : "2898028",
            "name" : "Nguyen Thi My Hanh-",
            "address" : "- 721 Pham Van Chi - Phường 7 - Quận 6",
            "lat" : "10.7381344",
            "long" : "106.6352117",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820432,
            "code" : "4028430",
            "name" : "Nguyễn Kế Võ Nghiệp - I0T5-",
            "address" : "- 1005 Lò Gốm - Phường 8 - Quận 6",
            "lat" : "10.7416793",
            "long" : "106.635366",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820433,
            "code" : "2898027",
            "name" : "Dang Ha Huong-",
            "address" : "- 493 Nguyễn Văn Luông - Phường 6 - Quận 6",
            "lat" : "10.753431",
            "long" : "106.6344543",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820434,
            "code" : "3358427",
            "name" : "Trần Minh Phương Dung-I0T6-",
            "address" : "- 27\/18 Kinh Dương Vương - Phường 12 - Quận 6",
            "lat" : "10.751934",
            "long" : "106.63366",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820435,
            "code" : "2909522",
            "name" : "Trần Cẩm Châu_I0T4-",
            "address" : "- 411\/1 Bến Phú Lâm - Phường 9 - Quận 6",
            "lat" : "10.7523368",
            "long" : "106.6406188",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820436,
            "code" : "3398658",
            "name" : "Trường TH Võ Văn Tần-I0T4-Nguyễn Văn Hiền",
            "address" : "- 97 Phạm Đình Hổ - Phường 6 - Quận 6",
            "lat" : "10.7519772",
            "long" : "106.6496696",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820437,
            "code" : "2897987",
            "name" : "Nguyen Ngoc Ly-",
            "address" : "- 182C1 Pham Phu Thu - Phường 12 - Quận 6",
            "lat" : "10.7451764",
            "long" : "106.6434456",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820438,
            "code" : "2897996",
            "name" : "Lệ Thi Hồng-",
            "address" : "- 402 Lê Quang Sung - Phường 9 - Quận 6",
            "lat" : "10.7517735",
            "long" : "106.6418802",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820439,
            "code" : "2897992",
            "name" : "Tra Thanh Vân-",
            "address" : "- 221\/17 Phan Văn Khỏe - Phường 7 - Quận 6",
            "lat" : "10.7481075",
            "long" : "106.6438784",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820440,
            "code" : "4656632",
            "name" : "chị hằng-I0T2-",
            "address" : "- 168A Bình Tiên - Phường 4 - Quận 6",
            "lat" : "10.74342232",
            "long" : "106.64311782",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820441,
            "code" : "4736537",
            "name" : "Đặng Phạm Kim Lợi-I16T3-",
            "address" : "- 116 B1 Lý Chiêu Hoàng - Phường 10 - Quận 6",
            "lat" : "10.7399101",
            "long" : "106.6268087",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "3000353"
        },
        {
            "id" : 1820442,
            "code" : "4391976",
            "name" : "Bình Phú",
            "address" : "102 Trần Văn Kiểu,P.10,Quận 6,THÀNH PHỐ HỒ CHÍ MINH",
            "lat" : "10.735798",
            "long" : "106.62696",
            "start_date" : "2025-12-31 00:00:00",
            "saleman" : "3000353"
        }
    ]}
    