import re

with open("/Users/thuylieu/Downloads/tuvionline/index.html", "r", encoding="utf-8") as f:
    html = f.read()

# 1. ADD TABS
tabs_html = """
<div class="tabs" style="display:flex; flex-wrap:wrap; gap:8px; justify-content:center; margin-bottom:20px;">
  <div class="tab active" data-tab="nhap" style="cursor:pointer; padding:8px 16px; border:1px solid var(--net); border-radius:4px; font-size:14px; color:var(--vang);">📝 Lập Lá Số</div>
  <div class="tab" data-tab="ketqua" style="cursor:pointer; padding:8px 16px; border:1px solid var(--net); border-radius:4px; font-size:14px; color:var(--chu-nhat);">☯ Kết Quả</div>
  <div class="tab" data-tab="kienthuc" style="cursor:pointer; padding:8px 16px; border:1px solid var(--net); border-radius:4px; font-size:14px; color:var(--chu-nhat);">📖 Kiến Thức</div>
  <div class="tab" data-tab="thaylinh" style="cursor:pointer; padding:8px 16px; border:1px solid var(--net); border-radius:4px; font-size:14px; color:var(--chu-nhat);">🔮 Thầy Thục Linh</div>
  <div class="tab" data-tab="gianhang" style="cursor:pointer; padding:8px 16px; border:1px solid var(--net); border-radius:4px; font-size:14px; color:var(--chu-nhat);">🛍️ Gian Hàng</div>
</div>
"""
# Replace old tabs if any, or insert after header
if '<form id="nhap"' in html:
    html = html.replace('<form id="nhap"', tabs_html + '\n<form id="nhap"')
else:
    print("Could not find form id='nhap'")

# 2. ADD NEW PANES
new_panes = """
<div id="pane-kienthuc" class="pane hide" style="background:var(--son-2); border:1px solid var(--net); padding:24px; border-radius:4px; margin-top:20px; line-height:1.7;">
    <h2 style="color:var(--vang-sang); margin-bottom:12px; font-family:'Playfair Display',serif; font-size:22px;">Ngũ Trụ Khuyết Mệnh là gì?</h2>
    <p style="margin-bottom:16px;">Ngũ Trụ (hay Tứ Trụ / Bát Tự mở rộng) là bộ môn khoa học dự đoán vận mệnh phương Đông dựa trên thời điểm ra đời của một người. Hệ thống bao gồm 5 trụ: <b>Năm, Tháng, Ngày, Giờ</b> và <b>Thai Nguyên</b> (gốc rễ thai nhi). Mỗi trụ gồm một Thiên Can và một Địa Chi, tạo thành 10 chữ.</p>
    <p style="margin-bottom:16px;">Bằng cách quy đổi 10 chữ này ra Ngũ Hành (Kim, Mộc, Thủy, Hỏa, Thổ), ta sẽ thấy được sự phân bố năng lượng bẩm sinh. Hành nào quá vượng sẽ gây mất cân bằng, hành nào suy yếu hoặc khuyết thiếu sẽ gây ra những trắc trở tương ứng trong cuộc sống.</p>
    <h2 style="color:var(--vang-sang); margin-bottom:12px; margin-top:24px; font-family:'Playfair Display',serif; font-size:22px;">Ý nghĩa của công cụ này</h2>
    <p style="margin-bottom:16px;">Website được thiết kế để tự động lập lá số Ngũ Trụ chuẩn xác theo <b>Tiết Khí</b> (chuyển giao tháng/năm theo vị trí mặt trời thay vì lịch âm thông thường). Thông qua biểu đồ, bạn sẽ có cái nhìn trực quan nhất về sự mất cân bằng Ngũ Hành của bản thân, biết được Nhật Chủ (bản mệnh) đang ở trạng thái Thân Vượng hay Thân Nhược, từ đó tìm ra <b>Dụng Thần</b> (ngũ hành cần bổ sung) để cải vận.</p>
</div>

<div id="pane-thaylinh" class="pane hide" style="background:var(--son-2); border:1px solid var(--net); padding:24px; border-radius:4px; margin-top:20px; line-height:1.7;">
    <div style="text-align:center; margin-bottom:20px;">
        <div style="width:80px; height:80px; border-radius:50%; background:var(--vang-mo); margin:0 auto; display:flex; align-items:center; justify-content:center; font-size:32px;">🪶</div>
        <h2 style="color:var(--vang-sang); margin-top:12px; font-family:'Playfair Display',serif; font-size:26px;">Thầy Thục Linh</h2>
        <div style="font-size:12px; letter-spacing:0.1em; color:var(--chu-nhat); text-transform:uppercase;">Chuyên Gia Huyền Học - Nhà Văn Tâm Linh</div>
    </div>
    <p style="margin-bottom:16px;">Sinh năm 1996 tại Hà Nội, Thục Linh vốn xuất thân là sinh viên Sư phạm ĐHQGHN kiêm giáo viên Ngữ Văn. Khởi đầu từ niềm đam mê mãnh liệt và sự quan tâm bền bỉ với văn hóa dân gian, tín ngưỡng tâm linh cổ truyền, cô đã tiến sâu vào con đường nghiên cứu Huyền học và Mệnh lý học Á Đông.</p>
    <p style="margin-bottom:16px;">Không chỉ là tác giả của hàng loạt tiểu thuyết tâm linh, kinh dị nổi tiếng (<i>Tứ trấn huyền linh, Khế ước bán dâu - chuyển thể phim 2025, Bóng trăng trắng ngà...</i>), Thục Linh còn dành nhiều năm nghiên cứu chuyên sâu về Bát Tự, Ngũ Trụ và Phong Thủy. Sự kết hợp giữa tư duy logic của một giáo viên và kiến thức uyên thâm về âm dương ngũ hành giúp cô có cái nhìn vô cùng sâu sắc, chính xác khi luận giải lá số vận mệnh.</p>
    <p style="margin-bottom:24px;">Thấu hiểu rằng "Đức năng thắng số" và vạn vật đều tuân theo luật bù trừ, Thầy Thục Linh thường đưa ra những lời khuyên ứng dụng Dụng Thần tinh tế, giúp khách hàng hóa giải vận hạn, kích hoạt tài lộc và bình an.</p>
    <div style="text-align:center;">
        <a href="https://zalo.me/0366110096" target="_blank" style="text-decoration:none;"><button type="button">Nhắn tin Zalo nhờ Thầy luận số</button></a>
    </div>
</div>

<div id="pane-gianhang" class="pane hide" style="background:var(--son-2); border:1px solid var(--net); padding:24px; border-radius:4px; margin-top:20px; line-height:1.7; text-align:center;">
    <h2 style="color:var(--vang-sang); margin-bottom:12px; font-family:'Playfair Display',serif; font-size:22px;">Gian hàng Vật Phẩm Phong Thủy</h2>
    <div style="font-size:40px; margin:20px 0;">🛍️✨</div>
    <p style="margin-bottom:16px; color:var(--vang);"><b>(Tính năng đang được cập nhật)</b></p>
    <p style="margin-bottom:16px;">Dựa trên Dụng thần và Ngũ hành khiếm khuyết của từng người, Thầy Thục Linh sẽ tư vấn trực tiếp các vật phẩm phong thủy tương sinh để trợ mệnh (Vòng trầm hương, đá quý, linh vật...). Danh sách vật phẩm sẽ sớm được ra mắt tại đây.</p>
    <p style="margin-bottom:24px;">Hiện tại, quý khách vui lòng liên hệ Zalo để được tư vấn chọn vật phẩm cá nhân hóa 1-1.</p>
    <a href="https://zalo.me/0366110096" target="_blank" style="text-decoration:none;"><button type="button">Liên hệ thỉnh vật phẩm</button></a>
</div>
"""
# Insert before <footer>
html = html.replace('<footer>', new_panes + '\n<footer>')

# 3. ADD CSS FOR PANES AND ORBS
css_additions = """
.hide { display: none !important; }
.tab.active { color: var(--vang) !important; border-color: var(--vang) !important; background: rgba(201,162,39,0.05); }
.orb { position: fixed; border-radius: 50%; filter: blur(60px); opacity: 0.15; z-index: -2; animation: float 20s infinite ease-in-out alternate; pointer-events: none; }
.orb.kim { background: var(--kim); width: 40vw; height: 40vw; top: -10%; left: -10%; animation-delay: -2s; }
.orb.moc { background: var(--moc); width: 35vw; height: 35vw; top: 60%; left: 70%; animation-delay: -5s; }
.orb.thuy { background: var(--thuy); width: 38vw; height: 38vw; top: 70%; left: -10%; animation-delay: -8s; }
.orb.hoa { background: var(--hoa); width: 32vw; height: 32vw; top: -5%; left: 60%; animation-delay: -1s; }
.orb.tho { background: var(--tho); width: 45vw; height: 45vw; top: 30%; left: 25%; animation-delay: -12s; }
@keyframes float { 0% { transform: translate(0, 0) scale(1); } 100% { transform: translate(5vw, 8vh) scale(1.2); } }
"""
html = html.replace('</style>', css_additions + '\n</style>')

# Add orbs to body
orbs_html = """
<div class="orb kim"></div>
<div class="orb moc"></div>
<div class="orb thuy"></div>
<div class="orb hoa"></div>
<div class="orb tho"></div>
"""
html = html.replace('<div id="suong">', orbs_html + '\n<div id="suong">')

# 4. UPDATE JS TO HANDLE TABS
js_tabs = """
// Xử lý Tabs
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.dataset.tab;
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        ['nhap', 'ketqua', 'kienthuc', 'thaylinh', 'gianhang'].forEach(id => {
            const pane = document.getElementById(id === 'nhap' ? 'nhap' : (id === 'ketqua' ? 'bang' : 'pane-' + id));
            if(pane) {
                if(id === target) {
                    pane.classList.remove('hide');
                    if (id === 'ketqua') pane.classList.add('hien');
                } else {
                    pane.classList.add('hide');
                    if (id === 'ketqua') pane.classList.remove('hien');
                }
            }
        });
    });
});
"""
# Add JS logic inside the script tag, right before tuKiem()
html = html.replace('tuKiem(); lap();', js_tabs + '\ntuKiem();')

# Modify lap(e) to switch to ketqua tab when submitted
tab_switch_logic = """
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelector('.tab[data-tab="ketqua"]').classList.add('active');
  ['nhap', 'pane-kienthuc', 'pane-thaylinh', 'pane-gianhang'].forEach(id => {
      const p = document.getElementById(id); if(p) p.classList.add('hide');
  });
  const b=document.getElementById('bang'); b.classList.remove('hide'); b.classList.add('hien');
"""
html = html.replace("const b=document.getElementById('bang'); b.classList.add('hien');", tab_switch_logic)

with open("/Users/thuylieu/Downloads/tuvionline/index.html", "w", encoding="utf-8") as f:
    f.write(html)
