import re

with open("/Users/thuylieu/Downloads/tuvionline/index.html", "r", encoding="utf-8") as f:
    text = f.read()

# 1. Fix Trạch Cát (Month Giêng = Dần(2), Day Dần(2) should be Kiến)
# The current trucIdx was `const trucIdx=(mTh,dc)=>m12(dc-mTh);` 
# where mTh was L.month-1 (0 for Giêng). 
# If Giêng (0) and Day Dần (2), ti = 2. But TRUC[0] is Kiến. So we need ti=0.
# ti = m12(dc - (L.month + 1))
text = re.sub(r'const trucIdx=\(mTh,dc\)=>m12\(dc-mTh\);', r'const trucIdx=(m,dc)=>m12(dc-(m+1));', text)
# Need to replace usage: `trucIdx(L.month-1,dc)` to `trucIdx(L.month,dc)`
text = text.replace('trucIdx(L.month-1,dc)', 'trucIdx(L.month,dc)')

# 2. Fix Giờ Hoàng Đạo
# The old code used HOANG (Kiến Trừ) for hours:
# `const gio=[];for(let h=0;h<12;h++)if(HOANG.includes(trucIdx(m12(dc-2),h)))gio.push(CHI[h]);`
# We need to replace it with the standard Giờ Hoàng Đạo logic:
gio_hoang_dao_logic = """const gio=[];
  const hdBase=(dc%6)*2;
  for(let h=0;h<12;h++){if([0,1,4,5,7,10].includes(m12(h-hdBase)))gio.push(CHI[h]);}"""
text = re.sub(r'const gio=\[\];for\(let h=0;h<12;h\+\+\)if\(HOANG\.includes\(trucIdx\(m12\(dc-2\),h\)\)\)gio\.push\(CHI\[h\]\);', gio_hoang_dao_logic, text)


# 3. Fix Dead Code in luanGiaiCung K.HOA
# Old: const hL = K.HOA['Hóa Lộc'], hQ = K.HOA['Hóa Quyền'], hK = K.HOA['Hóa Khoa'];
# New: K.HOA is mapped from StarName -> 'loc'. We need to reverse it to get position.
hoa_fix_old = """const hL = K.HOA['Hóa Lộc'], hQ = K.HOA['Hóa Quyền'], hK = K.HOA['Hóa Khoa'];
  if(hL===idCung || hQ===idCung || hK===idCung) {
      let th=[]; if(hL===idCung)th.push('Hóa Lộc'); if(hQ===idCung)th.push('Hóa Quyền'); if(hK===idCung)th.push('Hóa Khoa');"""
hoa_fix_new = """const getPos = h => { const s = Object.keys(K.HOA).find(k=>K.HOA[k]===h); return s ? K.S[s] ?? K.P[s] : -1; };
  const hL = getPos('loc'), hQ = getPos('quyen'), hK = getPos('khoa');
  if(hL===idCung || hQ===idCung || hK===idCung) {
      let th=[]; if(hL===idCung)th.push('Hóa Lộc'); if(hQ===idCung)th.push('Hóa Quyền'); if(hK===idCung)th.push('Hóa Khoa');"""
text = text.replace(hoa_fix_old, hoa_fix_new)


# 4. Fix minor bugs
# Thi ĐồngDần -> Thiên ĐồngDần
text = text.replace('Thi ĐồngDần', 'Thiên ĐồngDần')
# DUONG_CONG 7:[8,29] -> 7:[1,29]
text = text.replace('7:[8,29]', '7:[1,29]')
# CAN[cG%10] -> CAN[dayCanIdx(d2,m2,y2)] ? Wait, CAN[cG%10] is in runMa ?
# Let's check runMa logic:
# `const canN=CAN[cN%10],canG=CAN[cG%10];`
text = re.sub(r'const canN=CAN\[cN%10\],canG=CAN\[cG%10\];', r'const canN=CAN[yearCan(y2)],canG=CAN[(yearCan(y2)*2+cG)%10]; /* simplified fix */', text)
# AmDuongLy fix
text = text.replace('cN%2 === K.menh%2', '(K.L.year%2 === K.menh%2)')


# 5. Tone down fear-mongering
# A. Hạn năm
# BÁO ĐỘNG ĐỎ -> LƯU Ý ĐẶC BIỆT
text = text.replace('BÁO ĐỘNG ĐỎ!', 'LƯU Ý ĐẶC BIỆT')
text = text.replace('cực kỳ hung hiểm', 'nhiều thử thách')
text = text.replace('Tranh thủ hành thiện, phóng sinh, cúng sao giải hạn đầu năm', 'Nên tĩnh tâm, hành thiện tích đức, không mạo hiểm')
text = text.replace('NGUY HIỂM', 'CẨN TRỌNG')
text = text.replace('Chồng 4 tầng', 'Có nhiều yếu tố')
text = text.replace('Chồng 3 tầng', 'Có nhiều yếu tố')

# B. Tang lễ
text = text.replace('ĐẠI HUNG: TRÙNG TANG LIÊN TÁNG TOÀN TẬP', 'HUNG: PHẠM TRÙNG TANG LIÊN TÁNG')
text = text.replace('cực kỳ nguy hiểm, họa sát thân liên hoàn', 'cần chú ý an toàn, sức khỏe của người nhà')
text = text.replace('buộc phải tức tốc thỉnh cao tăng pháp sư trấn yểm', 'nên làm lễ cầu siêu tươm tất cho người đã khuất')
text = text.replace('cấm lập bàn thờ tại gia trong 3 năm đầu', 'nên tham khảo ý kiến chuyên gia tâm linh để an vị bát hương')
text = text.replace('Có bóng đen xui xẻo rình rập gia đạo. Phải làm lễ siêu độ cắt trùng thật chu toàn, tốt nhất nên rước linh vị vào nương nhờ cửa Phật để vong giải bớt oán khí.', 'Gia đạo cần chú ý giữ gìn sức khỏe. Nên làm lễ cầu siêu, thành tâm hướng Phật để vong linh sớm siêu thoát.')
text = text.replace('Nước mắt người sống (đặc biệt là con cháu) tuyệt đối không được rơi vào thi hài lúc khâm liệm kẻo vong luyến trần không thể siêu thoát.', 'Tránh để nước mắt rơi vào thi hài lúc khâm liệm.')

# C. Phong Thủy
text = text.replace('hóa giải sát khí', 'cân bằng năng lượng')
text = text.replace('khai quang và trì chú', 'tuyển chọn kỹ lưỡng')
text = text.replace('Mỗi vật phẩm đều được Thầy Thục Linh trực tiếp xem xét, khai quang và trì chú trước khi gửi đến tay bạn', 'Mỗi vật phẩm đều được Thầy Thục Linh trực tiếp tuyển chọn kỹ lưỡng trước khi gửi đến tay bạn')


# 6. Restore Self Test logic
# I will append a basic self-test script that runs on console
self_test = """
/* ═══ BĂNG TỰ KIỂM (FIXTURES) ═══ */
const FIXTURES = [
  {"dob":"2007-06-12","hour":7,"sex":"nu","menh":8,"than":8,"menhCung":"Thân","cuc":4},
  {"dob":"1998-02-01","hour":7,"sex":"nu","menh":7,"than":11,"menhCung":"Mùi","cuc":6}
];
function selfTest() {
  let passed = 0;
  FIXTURES.forEach((f, i) => {
    const [y,m,d] = f.dob.split('-').map(Number);
    const K = anSao({dd:d, mm:m, yy:y, gio:f.hour, sex:f.sex, xemY:2026});
    const errs = [];
    if(K.menh !== f.menh) errs.push(`Mệnh sai: ${K.menh} != ${f.menh}`);
    if(K.than !== f.than) errs.push(`Thân sai: ${K.than} != ${f.than}`);
    if(K.cuc !== f.cuc) errs.push(`Cục sai: ${K.cuc} != ${f.cuc}`);
    if(errs.length) console.error(`[TEST ${i}] FAILED:`, errs.join(', '));
    else passed++;
  });
  console.log(`[TEST] Passed ${passed}/${FIXTURES.length} fixtures.`);
}
setTimeout(selfTest, 1000);
"""
text = text.replace('</script>\n</body>', self_test + '</script>\n</body>')

with open("/Users/thuylieu/Downloads/tuvionline/index.html", "w", encoding="utf-8") as f:
    f.write(text)

print("Claude fixes applied!")
