/* ═══ HẰNG SỐ & TỪ ĐIỂN BÁT TỰ NGŨ TRỤ ═══ */
const CAN=['Giáp','Ất','Bính','Đinh','Mậu','Kỷ','Canh','Tân','Nhâm','Quý'];
const CHI=['Tý','Sửu','Dần','Mão','Thìn','Tỵ','Ngọ','Mùi','Thân','Dậu','Tuất','Hợi'];

const m10 = n => ((n % 10) + 10) % 10;
const m12 = n => ((n % 12) + 12) % 12;

const NH_CAN = {
  'Giáp': 'Mộc', 'Ất': 'Mộc', 'Bính': 'Hỏa', 'Đinh': 'Hỏa',
  'Mậu': 'Thổ', 'Kỷ': 'Thổ', 'Canh': 'Kim', 'Tân': 'Kim',
  'Nhâm': 'Thủy', 'Quý': 'Thủy'
};

const NH_CHI = {
  'Dần': 'Mộc', 'Mão': 'Mộc', 'Tỵ': 'Hỏa', 'Ngọ': 'Hỏa',
  'Thân': 'Kim', 'Dậu': 'Kim', 'Hợi': 'Thủy', 'Tý': 'Thủy',
  'Thìn': 'Thổ', 'Tuất': 'Thổ', 'Sửu': 'Thổ', 'Mùi': 'Thổ'
};

const COLOR_NH = {
  'Kim': '#D4AF37', 'Mộc': '#4CAF50', 'Thủy': '#2196F3',
  'Hỏa': '#F44336', 'Thổ': '#795548'
};

// Vòng tương sinh tương khắc cơ bản
const SINH = { 'Kim': 'Thủy', 'Thủy': 'Mộc', 'Mộc': 'Hỏa', 'Hỏa': 'Thổ', 'Thổ': 'Kim' };
const DUOC_SINH = { 'Thủy': 'Kim', 'Mộc': 'Thủy', 'Hỏa': 'Mộc', 'Thổ': 'Hỏa', 'Kim': 'Thổ' };
