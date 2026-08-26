// ENGINE BÁT TỰ NGŨ TRỤ (Sử dụng lunar-javascript cho Tiết Khí chính xác)

const MAP_CAN = {'甲':'Giáp', '乙':'Ất', '丙':'Bính', '丁':'Đinh', '戊':'Mậu', '己':'Kỷ', '庚':'Canh', '辛':'Tân', '壬':'Nhâm', '癸':'Quý'};
const MAP_CHI = {'子':'Tý', '丑':'Sửu', '寅':'Dần', '卯':'Mão', '辰':'Thìn', '巳':'Tỵ', '午':'Ngọ', '未':'Mùi', '申':'Thân', '酉':'Dậu', '戌':'Tuất', '亥':'Hợi'};

function calculateNguTru(dd, mm, yy, hour) {
    const solar = Solar.fromYmdHms(yy, mm, dd, hour, 0, 0);
    const lunar = solar.getLunar();
    const eightChar = lunar.getEightChar();

    const yearCan = MAP_CAN[eightChar.getYearGan()] || eightChar.getYearGan();
    const yearChi = MAP_CHI[eightChar.getYearZhi()] || eightChar.getYearZhi();
    
    const monthCan = MAP_CAN[eightChar.getMonthGan()] || eightChar.getMonthGan();
    const monthChi = MAP_CHI[eightChar.getMonthZhi()] || eightChar.getMonthZhi();
    
    const dayCan = MAP_CAN[eightChar.getDayGan()] || eightChar.getDayGan();
    const dayChi = MAP_CHI[eightChar.getDayZhi()] || eightChar.getDayZhi();
    
    const hourCan = MAP_CAN[eightChar.getTimeGan()] || eightChar.getTimeGan();
    const hourChi = MAP_CHI[eightChar.getTimeZhi()] || eightChar.getTimeZhi();

    const mCanIdx = CAN.indexOf(monthCan);
    const mChiIdx = CHI.indexOf(monthChi);
    
    const thaiCan = CAN[m10(mCanIdx + 1)];
    const thaiChi = CHI[m12(mChiIdx + 3)];

    return [
        { name: 'Năm', can: yearCan, chi: yearChi },
        { name: 'Tháng', can: monthCan, chi: monthChi },
        { name: 'Ngày', can: dayCan, chi: dayChi },
        { name: 'Giờ', can: hourCan, chi: hourChi },
        { name: 'Thai Nguyên', can: thaiCan, chi: thaiChi }
    ];
}

function countNguHanh(truList) {
    const counts = { 'Kim': 0, 'Mộc': 0, 'Thủy': 0, 'Hỏa': 0, 'Thổ': 0 };
    truList.forEach(t => {
        counts[NH_CAN[t.can]]++;
        counts[NH_CHI[t.chi]]++;
    });
    return counts;
}

function analyzeBatTu(truList, counts) {
    // Nhật chủ là Can của Trụ Ngày (index 2)
    const nhatChuCan = truList[2].can;
    const nhatChuHanh = NH_CAN[nhatChuCan];
    
    // Tìm các hành Sinh trợ (Đồng hành + Hành sinh ra nó)
    const hanhDong = nhatChuHanh;
    const hanhSinhTro = DUOC_SINH[nhatChuHanh];
    
    // Tìm các hành Khắc tiết (Hành nó sinh + Hành nó khắc + Hành khắc nó)
    const hanhTiets = ['Kim', 'Mộc', 'Thủy', 'Hỏa', 'Thổ'].filter(h => h !== hanhDong && h !== hanhSinhTro);
    
    const diemSinhTro = counts[hanhDong] + counts[hanhSinhTro];
    const diemKhacTiet = hanhTiets.reduce((sum, h) => sum + counts[h], 0);
    
    let trangThai = '';
    let dungThan = [];
    
    if (diemSinhTro > diemKhacTiet) {
        trangThai = 'Thân Vượng';
        // Thân vượng cần Khắc, Tiết, Hao
        dungThan = hanhTiets; 
    } else if (diemSinhTro < diemKhacTiet) {
        trangThai = 'Thân Nhược';
        // Thân nhược cần Sinh, Trợ
        dungThan = [hanhSinhTro, hanhDong];
    } else {
        trangThai = 'Trung Hòa';
        dungThan = []; // Cần xét kỹ lệnh tháng (Nguyệt lệnh)
    }
    
    return { nhatChuCan, nhatChuHanh, trangThai, dungThan };
}
