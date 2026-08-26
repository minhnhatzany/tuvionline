import re

with open("/Users/thuylieu/Downloads/tuvionline/index.html", "r", encoding="utf-8") as f:
    html = f.read()

# 1. Remove #kiem
html = re.sub(r'<div id="kiem">.*?</div>', '', html, flags=re.DOTALL)
html = re.sub(r'#kiem\{.*?\}', '', html, flags=re.DOTALL)
html = re.sub(r'#kiem\.dat\{.*?\}', '', html, flags=re.DOTALL)
html = re.sub(r'#kiem\.hong\{.*?\}', '', html, flags=re.DOTALL)
html = html.replace('tuKiem();', '')

# Remove tuKiem JS function
tukiem_regex = r'const MAU_KIEM=.*?function tuKiem\(\)\{.*?\}'
html = re.sub(tukiem_regex, '', html, flags=re.DOTALL)

# 2. Update Fonts (Change to Times New Roman)
html = html.replace("font-family:'Be Vietnam Pro',system-ui,sans-serif;", "font-family: 'Times New Roman', Times, serif;")
html = html.replace("font-family:'Playfair Display',serif;", "font-family: 'Times New Roman', Times, serif;")

# 3. Update H1
old_h1 = """h1{
  font-family:'Playfair Display',serif; font-weight:400;
  font-size:clamp(36px,9vw,56px); line-height:1; letter-spacing:.03em;
  background:linear-gradient(172deg,#fff8e4 4%,var(--vang) 48%,#8f7325 96%);
  -webkit-background-clip:text;background-clip:text;color:transparent;
  filter:drop-shadow(0 0 26px rgba(201,162,39,.22));
}"""

new_h1 = """h1{
  font-family: 'Times New Roman', Times, serif; font-weight:bold;
  font-size:clamp(46px,12vw,76px); line-height:1.4; letter-spacing:.05em;
  background:linear-gradient(172deg,#fff8e4 4%,var(--vang-sang) 30%,var(--vang) 70%,#8f7325 96%);
  -webkit-background-clip:text;background-clip:text;color:transparent;
  filter:drop-shadow(0 0 20px rgba(201,162,39,0.8));
  padding-bottom: 15px; /* Sửa lỗi mất chân chữ */
  text-shadow: 0px 4px 15px rgba(201, 162, 39, 0.4);
}"""
html = html.replace(old_h1, new_h1)

# 4. Add Fog / Smoke Animation
css_fog = """
/* Sương khói mờ ảo */
.khoi-css { position: fixed; border-radius: 50%; filter: blur(50px); background: rgba(255, 255, 255, 0.04); pointer-events: none; z-index: -1; animation: bay-khoi infinite alternate ease-in-out; }
.khoi-1 { width: 80vw; height: 40vh; top: 10%; left: -30%; animation-duration: 25s; }
.khoi-2 { width: 90vw; height: 50vh; top: 50%; right: -30%; animation-duration: 35s; animation-delay: -10s; }
.khoi-3 { width: 60vw; height: 30vh; top: 70%; left: 10%; animation-duration: 20s; animation-delay: -5s; }
@keyframes bay-khoi { 0% { transform: translateX(0) scale(1) rotate(0deg); opacity: 0.02; } 100% { transform: translateX(20vw) scale(1.3) rotate(5deg); opacity: 0.07; } }
"""
html = html.replace('</style>', css_fog + '\n</style>')

fog_divs = """
<div class="khoi-css khoi-1"></div>
<div class="khoi-css khoi-2"></div>
<div class="khoi-css khoi-3"></div>
"""
html = html.replace('<div id="bui"></div>', '<div id="bui"></div>\n' + fog_divs)

# 5. Update Description Result in JS
old_ghi = """<div class="ghi">Đây là dụng thần cơ bản, suy từ việc đếm số lượng ngũ hành.
      Muốn định dụng thần cho chuẩn còn phải xét tàng can và nguyệt lệnh — phần đó cần người luận,
      trang này chỉ lập số.</div>"""

new_ghi = """<div class="ghi" style="font-style:normal; font-size: 14px; color: #e6ded0; line-height: 1.6; padding-top: 15px;">
      <p style="margin-bottom:10px; text-align: justify;">Dựa trên sự phân bố Ngũ Hành của 10 chữ (Ngũ Trụ) trên, bản mệnh của bạn thuộc vòng <b>${dg.trangThai}</b>. Việc mất cân bằng ngũ hành bẩm sinh có thể gây ra những cản trở nhất định trong công việc, tình duyên và sức khỏe. Để cải thiện vận số, bạn cần ưu tiên bổ sung các hành <b>${dt}</b> (đây gọi là Dụng thần trợ mệnh).</p>
      <p style="color: var(--vang-sang); font-style: italic; margin-bottom:16px; text-align: justify;">💡 Tuy nhiên, đây chỉ là kết quả phân tích ngũ hành bề mặt. Để biết chính xác Tàng Can ẩn chứa gì, Nguyệt Lệnh ảnh hưởng ra sao, và làm thế nào để áp dụng phong thủy vào thực tế nhằm kích tài lộc, hóa giải vận hạn cho riêng bạn, bạn cần một chuyên gia thực thụ luận giải chi tiết lá số này.</p>
      <div style="text-align:center;">
        <a href="https://zalo.me/0366110096" target="_blank" style="text-decoration:none;"><button type="button" style="padding: 12px 24px; font-size: 14px; width: 100%;">💬 Nhờ Thầy Thục Linh luận giải chi tiết</button></a>
      </div>
    </div>"""

html = html.replace(old_ghi, new_ghi)

with open("/Users/thuylieu/Downloads/tuvionline/index.html", "w", encoding="utf-8") as f:
    f.write(html)
