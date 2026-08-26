/* ═══ HẰNG SỐ & TỪ ĐIỂN BÁT TỰ NGŨ TRỤ ═══ */
const CAN=['Giáp','Ất','Bính','Đinh','Mậu','Kỷ','Canh','Tân','Nhâm','Quý'];
const CHI=['Tý','Sửu','Dần','Mão','Thìn','Tỵ','Ngọ','Mùi','Thân','Dậu','Tuất','Hợi'];

const NAP_AM=['Kim','Hỏa','Mộc','Thổ','Kim','Hỏa','Thủy','Thổ','Kim','Mộc','Thủy','Thổ','Hỏa','Mộc','Thủy','Kim','Hỏa','Mộc','Thổ','Kim','Hỏa','Thủy','Thổ','Kim','Mộc','Thủy','Thổ','Hỏa','Mộc','Thủy'];

const NA_TEN=['Hải Trung Kim','Lư Trung Hỏa','Đại Lâm Mộc','Lộ Bàng Thổ','Kiếm Phong Kim','Sơn Đầu Hỏa','Giản Hạ Thủy','Thành Đầu Thổ','Bạch Lạp Kim','Dương Liễu Mộc','Tuyền Trung Thủy','Ốc Thượng Thổ','Tích Lịch Hỏa','Tùng Bách Mộc','Trường Lưu Thủy','Sa Trung Kim','Sơn Hạ Hỏa','Bình Địa Mộc','Bích Thượng Thổ','Kim Bạc Kim','Phú Đăng Hỏa','Thiên Hà Thủy','Đại Trạch Thổ','Thoa Xuyến Kim','Tang Đố Mộc','Đại Khê Thủy','Sa Trung Thổ','Thiên Thượng Hỏa','Thạch Lựu Mộc','Đại Hải Thủy'];

// Hàm tiện ích
const m10 = n => ((n % 10) + 10) % 10;
const m12 = n => ((n % 12) + 12) % 12;
const m60 = n => ((n % 60) + 60) % 60;

const NA_IDX={};for(let i=0;i<60;i++)NA_IDX[CAN[i%10]+'-'+CHI[i%12]]=Math.floor(i/2);

// NGŨ HÀNH CỦA CAN VÀ CHI
const NH_CAN = {
  'Giáp': 'Mộc', 'Ất': 'Mộc',
  'Bính': 'Hỏa', 'Đinh': 'Hỏa',
  'Mậu': 'Thổ', 'Kỷ': 'Thổ',
  'Canh': 'Kim', 'Tân': 'Kim',
  'Nhâm': 'Thủy', 'Quý': 'Thủy'
};

const NH_CHI = {
  'Dần': 'Mộc', 'Mão': 'Mộc',
  'Tỵ': 'Hỏa', 'Ngọ': 'Hỏa',
  'Thân': 'Kim', 'Dậu': 'Kim',
  'Hợi': 'Thủy', 'Tý': 'Thủy',
  'Thìn': 'Thổ', 'Tuất': 'Thổ', 'Sửu': 'Thổ', 'Mùi': 'Thổ'
};

const COLOR_NH = {
  'Kim': '#D4AF37', // Vàng kim
  'Mộc': '#4CAF50', // Xanh lá
  'Thủy': '#2196F3', // Xanh dương
  'Hỏa': '#F44336', // Đỏ
  'Thổ': '#795548'  // Nâu
};

const MSG_KHUYET = {
  'Kim': 'Thiếu Kim khiến sự quyết đoán suy giảm, tiền bạc khó tụ, dễ vướng thị phi. Nên đeo trang sức Vàng bạc, Thạch anh trắng, hoặc luân xa hệ Kim để trợ mệnh.',
  'Mộc': 'Thiếu Mộc làm sinh khí giảm sút, hay chán nản mệt mỏi, thiếu động lực thăng tiến. Rất cần đeo Vòng Trầm Hương, Gỗ quý, Thạch anh xanh để dưỡng Mộc.',
  'Thủy': 'Thiếu Thủy khiến công danh dễ bế tắc, tài lộc trôi tuột, tính tình hay nóng nảy. Cần bổ sung năng lượng Thủy qua đá Aquamarine, Thạch anh đen.',
  'Hỏa': 'Thiếu Hỏa làm đường tình duyên và các mối quan hệ nguội lạnh, sức khỏe thiếu sinh khí. Nên dùng vật phẩm Mão Não đỏ, Thạch anh hồng, Thạch anh tóc đỏ.',
  'Thổ': 'Thiếu Thổ khiến nền tảng không vững, khó tích lũy đất đai tài sản, hay lo âu. Cần mang Đá mắt hổ vàng nâu, Thạch anh tóc vàng để trụ vững bản mệnh.'
};
