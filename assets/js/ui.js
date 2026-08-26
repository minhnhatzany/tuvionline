/* ═══ BẦU TRỜI SAO ═══ */
const bg=document.getElementById('sao');let _s='';for(let i=0;i<150;i++)_s+=`<b style="left:${Math.random()*100}%;top:${Math.random()*100}%;animation-delay:${Math.random()*4}s"></b>`;bg.innerHTML=_s;

function runLaso(){
  const v=document.getElementById('lDob').value;if(!v)return;
  const[y,m,d]=v.split('-').map(Number);saveURL();
  const K=anSao({dd:d,mm:m,yy:y,gio:+document.getElementById('lHour').value,
    sex:document.getElementById('lSex').value,xemY:+document.getElementById('lXemY').value||undefined});
  const name=document.getElementById('lName')?.value||'';
  saveHistory(name, v, document.getElementById('lHour').value, document.getElementById('lSex').value, document.getElementById('lXemY').value);
  const ban=document.getElementById('ban');ban.innerHTML='';SEL=null;let c0=false;
  GRID.forEach(i=>{
    if(i===null){if(!c0){ban.appendChild(center(K));c0=true;}return;}
    const el=document.createElement('div');
    el.className='cung'+(i===K.menh?' menh':'')+(i===K.than?' than':'')+(i===K.daiVanCung?' dai-van':'');
    el.dataset.chi=i;el.tabIndex=0;el.style.animationDelay=(GRID.indexOf(i)*28)+'ms';
    const ch=Object.keys(K.S).filter(s=>K.S[s]===i),pu=Object.keys(K.P).filter(s=>K.P[s]===i);
    const tg=s=>K.HOA[s]?`<span class="hoa ${K.HOA[s]}">${{loc:'LỘC',quyen:'QUYỀN',khoa:'KHOA',ky:'KỴ'}[K.HOA[s]]}</span>`:'';
    const mh=s=>{if(!MVDH[s])return'';const v=MVDH[s][i],kiem=MH_DAKIEM.has(s+CHI[i]);return`<span class="mh ${v==='Đ'?'D':v} ${kiem?'':'chua'}">${v}</span>`;};
    let tt='';
    if(K.TUAN.includes(i))tt+='<span class="tt-tag tuan">TUẦN</span>';
    if(K.TRIET.includes(i))tt+='<span class="tt-tag triet">TRIỆT</span>';
    if(K.LUU.tieuHan===i)tt+='<span class="tt-tag lh">TIỂU HẠN</span>';
    if(K.LUU.thaiTue===i)tt+='<span class="tt-tag lt">L.THÁI TUẾ</span>';
    if(K.daiVanCung===i)tt+='<span class="tt-tag dv">ĐẠI VẬN</span>';
    const lw=[];
    if(K.LUU.loc===i)lw.push('<span class="s luu">L.Lộc Tồn</span>');
    if(K.LUU.kinh===i)lw.push('<span class="s luu sat">L.Kình Dương</span>');
    if(K.LUU.da===i)lw.push('<span class="s luu sat">L.Đà La</span>');
    if(K.LUU.ma===i)lw.push('<span class="s luu">L.Thiên Mã</span>');
    if(K.LUU.khoc===i)lw.push('<span class="s luu sat">L.Thiên Khốc</span>');
    if(K.LUU.hu===i)lw.push('<span class="s luu sat">L.Thiên Hư</span>');
    if(K.LUU.khoi===i)lw.push('<span class="s luu">L.Thiên Khôi</span>');
    if(K.LUU.viet===i)lw.push('<span class="s luu">L.Thiên Việt</span>');
    [...ch,...pu].forEach(sn=>{const h=K.LUU.hoa[sn];
      if(h)lw.push(`<span class="s luu ${h==='ky'?'sat':''}">L.Hóa ${{loc:'Lộc',quyen:'Quyền',khoa:'Khoa',ky:'Kỵ'}[h]}</span>`);});
    el.innerHTML=`<div class="top"><span class="tl"><span class="ten">${CUNG12[m12(i-K.menh)]}</span>${tt}</span><span class="cc">${K.canCung(i)} ${CHI[i]}</span></div>
      <div class="stars">${ch.map(s=>`<span class="s chinh">${s}${mh(s)}${tg(s)}</span>`).join('')}
      ${pu.map(s=>`<span class="s phu ${SAT_LIST.includes(s)?'sat':CAT_LIST.includes(s)?'cat':''}">${s}${tg(s)}</span>`).join('')}${lw.join('')}</div>
      <div class="vong-group"><span class="s vong">${K.V_TS[i]}</span><span class="s vong">${K.V_TT[i]}</span><span class="s vong">${K.V_BS[i]}</span></div>
      <div class="van"><span>${K.dv[i]}</span><span>${CHI[i]}</span></div>`;
    el.onclick=()=>{SEL=(SEL===i?null:i);paint();};
    ban.appendChild(el);
  });
  document.getElementById('outLaso').innerHTML=luanMenh(K)+luanCacCung(K)+luanDaiVan(K)+luanHanNam(K);
}
function paint(){document.querySelectorAll('#ban .cung').forEach(c=>{const j=+c.dataset.chi;
  c.classList.toggle('focus',SEL!==null&&j===SEL);
  c.classList.toggle('tamhop',SEL!==null&&j!==SEL&&(j===m12(SEL+4)||j===m12(SEL+8)));
  c.classList.toggle('xung',SEL!==null&&j===m12(SEL+6));});}
function center(K){const c=document.createElement('div');c.id='center';
  c.innerHTML=`<h2>☯ LÁ SỐ TỬ VI</h2><div style="text-align:center;margin-bottom:15px"><button id="btnDownloadLaso" onclick="downloadLaso()" style="background:var(--gold);color:#000;border:none;padding:8px 16px;border-radius:4px;cursor:pointer;font-weight:bold;font-size:14px;">📸 Tải Ảnh Lá Số</button></div>
   <div class="row"><span>Âm lịch</span><span>${K.L.day}/${K.L.month}${K.L.leap?' (nhuận)':''}/${K.L.year}</span></div>
   <div class="row"><span>Năm sinh</span><span>${K.canNam} ${K.chiNam}</span></div>
   <div class="row"><span>Nạp âm</span><span>${K.naNam}</span></div>
   <div class="row hl"><span>Cục</span><span>${CUC_TEN[K.cuc]}</span></div>
   <div class="row"><span>Mệnh cư</span><span>${CHI[K.menh]}</span></div>
   <div class="row"><span>Thân cư</span><span>${CUNG12[m12(K.than-K.menh)]}</span></div>
   <div class="row hl"><span>Năm xem</span><span>${yearName(K.LUU.nam)}</span></div>
   <div class="row"><span>Tuổi (âm)</span><span>${K.lunarAge}</span></div>`;return c;}

/* ═══ EVENT HANDLERS CÁC TABS CÒN LẠI ═══ */
let DAYS=[];
function runCuoi(){
  const eB=document.getElementById('bDob').value,eG=document.getElementById('gDob').value;
  const y1=+document.getElementById('y1').value,y2=+document.getElementById('y2').value;
  const err=document.getElementById('errCuoi');err.textContent='';
  if(!eB||!eG)return err.textContent='Chưa nhập đủ thông tin.';
  if(y2<y1)return err.textContent='Năm kết thúc phải lớn hơn hoặc bằng năm bắt đầu.';
  if(y2-y1>10)return err.textContent='Khoảng thời gian tra cứu tối đa là 10 năm.';

  const[by,bm,bd]=eB.split('-').map(Number),[gy,gm,gd]=eG.split('-').map(Number);
  const LB=solar2Lunar(bd,bm,by),LG=solar2Lunar(gd,gm,gy);
  const cB=yearChiI(LB.year),cG=yearChiI(LG.year),ctx={cB,cG,lyB:LB.year,lyG:LG.year};
  saveURL();let H='';
  
  const checks=[...checkChi(cB,cG),checkNapAm(LB.year,LG.year),checkCungPhi(LB.year,LG.year)];
  const bad=checks.filter(c=>c.v==='bad').length;
  H+=`<h3>Hợp tuổi</h3><div class="tally"><div class="big">Nữ ${yearName(LB.year)} (${CHI[cB]}) · Nam ${yearName(LG.year)} (${CHI[cG]})</div></div>`;
  checks.forEach(c=>H+=`<div class="card"><div class="hd"><span class="t">${c.t}</span><span class="v ${c.v}">${c.v==='good'?'Hợp':c.v==='bad'?'Xung':'Bình'}</span></div><div class="why">${c.why}</div></div>`);
  
  let lb='';
  if(!bad)lb="Hai tuổi cực kỳ hòa hợp, ngũ hành tương sinh, can chi tương hòa. Kết duyên dễ bề làm ăn, gia đạo êm ấm viên mãn.";
  else if(bad===1)lb="Nhìn chung có sự tương giao tốt, tuy vướng chút xung khắc nhẹ nhưng không đáng lo ngại. Vợ chồng biết nhường nhịn thấu hiểu là bách niên giai lão.";
  else lb="Hai tuổi có nhiều điểm xung khắc rủi ro. Dễ bất đồng quan điểm, kinh tế thăng trầm. Tuy nhiên, 'Đức năng thắng số', sự chân thành và bao dung từ hai phía mới là gốc rễ bền vững để hóa giải.";

  const G_DAI_LOI={0:[6,12],1:[5,11],2:[2,8],3:[1,7],4:[4,10],5:[3,9],6:[6,12],7:[5,11],8:[2,8],9:[1,7],10:[4,10],11:[3,9]};
  const G_TIEU_LOI={0:[1,7],1:[4,10],2:[3,9],3:[6,12],4:[5,11],5:[2,8],6:[1,7],7:[4,10],8:[3,9],9:[6,12],10:[5,11],11:[2,8]};
  const dl=G_DAI_LOI[cB],tl=G_TIEU_LOI[cB];

  H+=`<div class="phan-box"><h3 style="color:var(--gold);margin-top:0;font-size:18px;">☯ Luận giải Cung - Mệnh tình duyên</h3>
  <ul style="padding-left:20px;line-height:1.6">
  <li><b>Tháng cưới đại lợi (theo tuổi Nữ):</b> Đương số nữ tuổi ${CHI[cB]}, tháng cưới hỏi đẹp nhất trong năm là <b>tháng ${dl.join(', ')} âm lịch</b> (Rất tốt, gia đạo êm ấm, dồi dào vượng khí). Nếu quá gấp rút hoặc lỡ dở, có thể dùng tạm tháng Tiểu lợi là <b>tháng ${tl.join(', ')} âm lịch</b>. Tuyệt đối kiêng những tháng kỵ phòng phu thê.</li>
  <li><b>Hòa hợp Thiên Can:</b> Chú rể can ${CAN[yearCan(Lg.year)]} · Cô dâu can ${CAN[yearCan(Lb.year)]}. Thiên can chi phối lộc lá đất đai. Việc xem xét Can phối ngẫu hợp nhau mang lại nền tảng làm ăn vững vàng cho gia đình nhỏ.</li>
  <li><b>Lời bàn chung:</b> ${lb}</li>
  </ul></div>`;

  H+=`<h3>${G('Kim Lâu','kim lâu')} &amp; ${G('Tam tai','tam tai')}</h3><table><thead><tr><th>Năm</th><th>Tuổi Nữ</th><th>Kim Lâu</th><th>Tam tai Nữ</th><th>Tam tai Nam</th></tr></thead><tbody>`;
  for(let y=y1;y<=y2;y++){const kl=kimLau(LB.year,y),tb=tamTai(cB,y),tg=tamTai(cG,y);
    H+=`<tr><td><b>${yearName(y)}</b></td><td>${kl.tuoiMu}</td><td class="${kl.pham?'no':'ok'}">${kl.pham?kl.loai:'-'}</td><td class="${tb.pham?'wa':'ok'}">${tb.pham?`Năm ${tb.thu}`:'-'}</td><td class="${tg.pham?'wa':'ok'}">${tg.pham?`Năm ${tg.thu}`:'-'}</td></tr>`;}
  H+=`</tbody></table><h3>Trạch Cát (Ngày đẹp)</h3>`;
  
  DAYS=[];const months=[];
  for(let y=y1;y<=y2;y++)for(let mo=1;mo<=12;mo++){const dim=new Date(y,mo,0).getDate(),cells=[];
    for(let d=1;d<=dim;d++){const r=xetNgay(d,mo,y,ctx);cells.push(r);if(r.tot)DAYS.push(r);}months.push({y,mo,cells});}
  H+=`<div class="tally"><div class="big">Tìm thấy ${DAYS.length} ngày cát lợi.</div><div class="note">Thuật toán đã tự động lọc sạch Hắc đạo, Tam nương, Nguyệt kỵ, Dương công kỵ và ngày xung khắc tuổi.</div></div>`;
  const DOW=['CN','T2','T3','T4','T5','T6','T7'];
  months.forEach(({y,mo,cells})=>{if(!cells.some(c=>c.tot))return;
    H+=`<div class="mon"><h4>Tháng ${mo}/${y}</h4><div class="cal">${DOW.map(d=>`<div class="dow">${d}</div>`).join('')}`;
    const off=new Date(y,mo-1,1).getDay();for(let i=0;i<off;i++)H+='<div class="dd blank"></div>';
    cells.forEach(c=>{const k=DAYS.indexOf(c);
      H+=c.tot?`<div class="dd good" tabindex="0" data-k="${k}">${c.d}<small>${c.L.day}/${c.L.month}</small></div>`:`<div class="dd">${c.d}</div>`;});
    H+='</div></div>';});
  document.getElementById('outCuoi').innerHTML=H;
}

const HOANG_OC=[{t:'Nhất Cát',v:'good'},{t:'Nhị Nghi',v:'good'},{t:'Tam Địa Sát',v:'bad'},{t:'Tứ Tấn Tài',v:'good'},{t:'Ngũ Thọ Tử',v:'bad'},{t:'Lục Hoang Ốc',v:'bad'}];
const TRACH = {1:'Phúc',2:'Đức',3:'Bại',4:'Hư',5:'Khốc',6:'Quỷ',7:'Tử',8:'Bảo',0:'Lộc'};
function runNha(){
  const errNha=document.getElementById('errNha'); errNha.textContent='';
  const v=document.getElementById('nDob').value,yX=+document.getElementById('nY').value;if(!v||!yX)return;
  const[y,m,dd]=v.split('-').map(Number),lb=solar2Lunar(dd,m,y),t=yX-lb.year+1;saveURL();
  if(t<10){errNha.textContent='Tuổi quá nhỏ để tính Hoang Ốc/Kim Lâu (dưới 10 tuổi mụ).';return;}
  
  const ho=HOANG_OC[(t-10)%6],kl=kimLau(lb.year,yX),tt=tamTai(yearChiI(lb.year),yX);
  const trach=TRACH[t%9],trachV=['Phúc','Đức','Bảo','Lộc'].includes(trach)?'good':'bad';
  
  let H=`<div class="tally"><div class="big">Gia chủ ${yearName(lb.year)} · Khởi công năm ${yearName(yX)} (Tuổi mụ: ${t})</div></div>`;
  const row=(t2,vv,why)=>`<div class="card"><div class="hd"><span class="t">${t2}</span><span class="v ${vv}">${vv==='good'?'Cát':'Hung'}</span></div><div class="why">${why}</div></div>`;
  
  let hoExp=ho.v==='good'?'Làm nhà năm này phúc lộc dồi dào, gia đạo an vui, sự nghiệp hưng vượng.':'Cực xấu. Phạm Hoang Ốc sinh ốm đau, hao tài tốn của, dễ gặp xui xẻo rình rập.';
  let klExp=kl.pham?`Phạm Kim Lâu ${kl.loai}. `+(kl.loai==='Thân'?'Đại kỵ cho chính bản thân người chủ, dễ gặp tai ương.':kl.loai==='Thê'?'Mang họa tổn thọ cho người vợ.':kl.loai==='Tử'?'Con cái ốm đau, khó nuôi.':'Làm ăn lụi bại, hao tổn kinh tế nghiêm trọng.'):'Hoàn toàn vượng khí, không vướng bận Kim Lâu, tha hồ đứng tên động thổ.';
  let ttExp=tt.pham?`Hạn Tam Tai năm thứ ${tt.thu}. Trắc trở bủa vây, xây cất thi công hay xảy ra tai nạn, thị phi kiện cáo.`:'Thoát khỏi vòng kìm kẹp của Tam Tai, mọi mưu sự hanh thông dễ dàng.';
  
  H+=row(G('Hoang Ốc','hoang ốc')+' — '+ho.t,ho.v,hoExp);
  H+=row(G('Kim Lâu','kim lâu'),kl.pham?'bad':'good',klExp);
  H+=row(G('Tam tai','tam tai'),tt.pham?'bad':'good',ttExp);
  H+=row(G('Cửu Trạch','trạch tuổi')+' — Trạch '+trach,trachV,trachV==='good'?'Trạch tuổi quá đẹp, vào đúng cung tụ khí sinh tài. Ngôi nhà đón lộc khí, gia chủ ngày càng phát đạt.':'Trạch tuổi u ám, mang năng lượng suy bại, hao mòn sức sống. Tuyệt đối nên cân nhắc kỹ.');

  const cp=cungPhi(lb.year,document.getElementById('nSex').value);
  const huong=DONG_TU.includes(cp)?'Đông, Đông Nam, Nam, Bắc':'Tây, Tây Nam, Tây Bắc, Đông Bắc';
  const xau=[ho.v==='bad',kl.pham,tt.pham].filter(Boolean).length;
  let lb2='';
  if(!xau)lb2="Năm vô cùng cát lợi để tiến hành động thổ. Thiên thời địa lợi nhân hòa đều hội tụ.";
  else if(xau===1)lb2="Năm này vướng mắc nhẹ. Nếu bắt buộc làm nhà, gia chủ vẫn có thể tự làm hoặc nhờ cao nhân mượn tuổi để cẩn thận che chắn.";
  else lb2="ĐẠI KỴ! Năm nay phạm kỵ quá nặng nề. Gia chủ tuyệt đối không tự ý đứng ra động thổ mà bắt buộc phải mượn tuổi người thân để tránh họa sát thân.";
  
  let muontuoi = xau ? `<li><b>Giải pháp Hóa Giải (Mượn tuổi):</b> Vì phạm kỵ, gia chủ tuyệt đối không tự tay cuốc đất. Bắt buộc phải mượn người nam giới lớn tuổi hơn (ưu tiên người trong họ), có gia đạo êm ấm, không vướng tang bụi và <b>không phạm Kim Lâu, Hoang Ốc, Tam Tai</b> trong năm ${yearName(yX)} để đứng ra làm lễ và cuốc những nhát đầu tiên.</li>` : `<li><b>Thủ tục Động Thổ:</b> Tuổi quá đẹp, gia chủ đích thân chủ trì. Chọn giờ Hoàng đạo, đứng ở mặt <b>${huong.split(', ')[0]}</b> (cung Sinh Khí) cuốc 5 nhát sâu xuống đất tượng trưng cho Ngũ Hành tương sinh, đâm chồi nảy lộc.</li>`;

  H+=`<div class="phan-box"><h3 style="color:var(--gold);margin-top:0;font-size:18px;">☯ Cẩm Nang Phong Thủy & Tâm Linh Xây Cất</h3>
  <ul style="padding-left:20px;line-height:1.6">
  <li><b>Tổng luận năm ${yearName(yX)}:</b> ${lb2}</li>
  <li><b>Hướng xây cất & Bố cục:</b> Theo Bát Trạch, gia chủ mang phi cung <b>${cp}</b>, mệnh <b>${DONG_TU.includes(cp)?'Đông':'Tây'} tứ trạch</b>. Hướng vàng để trổ cửa chính, đặt ban thờ, kê đầu giường là: <b>${huong}</b> (Hứng trọn Sinh Khí, Diên Niên, Thiên Y, Phục Vị). Tránh tuyệt đối để cửa chính quay về các hướng ngược lại kẻo vướng Lục Sát, Tuyệt Mệnh, gia đạo suy vong.</li>
  ${muontuoi}
  <li><b>Lễ vật Động Thổ:</b> Chuẩn bị 1 mâm cúng tươm tất gồm: 1 con gà trống luộc nguyên con chéo cánh, 1 đĩa xôi gấc, mâm ngũ quả tươi, 3 cơi trầu cau, 9 bông hồng đỏ, 1 đĩa muối gạo, đinh vàng hoa, 5 chén rượu, 5 chén nước, nhang đèn đầy đủ.</li>
  <li><b>Đại Kỵ khi thi công:</b> Ngày động thổ và đổ mái, cấm kỵ cho phụ nữ mang thai hoặc người đang mang trọng tang bước vào công trường. Cột nhà không được để đổ. Cửa chính không được đâm thẳng vào ngã ba, góc nhọn nhà hàng xóm, hoặc có cột điện chắn giữa cửa.</li>
  </ul></div>`;
  
  document.getElementById('outNha').innerHTML=H;
}
document.getElementById('btnNha').onclick=runNha;

function runMa(){
  const a=document.getElementById('maDob').value,b=document.getElementById('maDeath').value;if(!a||!b)return;
  const[y1,m1,d1]=a.split('-').map(Number),[y2,m2,d2]=b.split('-').map(Number);
  const sex=document.getElementById('maSex').value,gio=+document.getElementById('maHour').value;
  const lb=solar2Lunar(d1,m1,y1),ld=solar2Lunar(d2,m2,y2),t=ld.year-lb.year+1;saveURL();
  const buoc=sex==='nam'?1:-1,khoi=sex==='nam'?2:8;
  const cT=m12(khoi+(Math.floor(t/10)*buoc)+(((t%10)===0?0:(t%10)-1)*buoc));
  const cTh=m12(cT+ld.month*buoc),cN=m12(cTh+ld.day*buoc),cG=m12(cN+(gio+1)*buoc);
  const loai=c=>[2,8,5,11].includes(c)?['Trùng tang','bad']:[0,6,3,9].includes(c)?['Thiên di','mid']:['Nhập mộ','good'];
  let H=`<div class="tally"><div class="big">Mất ${ld.day}/${ld.month} năm ${yearName(ld.year)} · Thọ ${t} tuổi</div></div>`;
  
  let arrTypes=[];
  [['Tuổi',t,cT],['Tháng',ld.month,cTh],['Ngày',ld.day,cN],['Giờ',CHI[gio],cG]]
    .forEach(([n,v,c])=>{
      const[ten,cls]=loai(c);
      arrTypes.push(ten);
      let exp=ten==='Trùng tang'?'Hung hiểm. Vong hồn ra đi không thanh thản, oán niệm còn vương, dễ quấy nhiễu kéo theo người thân cõi trần.':ten==='Thiên di'?'Trời định số tận. Vong hồn nhẹ nhàng rời đi theo quy luật tự nhiên, vô ưu vô lo.':'Cực kỳ tốt. Ra đi viên mãn, đạt được mồ yên mả đẹp. Năng lượng âm phần che chở, độ trì cho con cháu đắc lộc.';
      H+=`<div class="card"><div class="hd"><span class="t">${n} ${v} <b>→ ${CHI[c]}</b></span><span class="v ${cls}">${ten}</span></div><div class="why">${exp}</div></div>`;
    });

  let countTrung=arrTypes.filter(x=>x==='Trùng tang').length,countMo=arrTypes.filter(x=>x==='Nhập mộ').length;
  let kl='';
  if(countTrung===4)kl='<b class="bad">HUNG: PHẠM TRÙNG TANG LIÊN TÁNG.</b> Lá số khai tử mang sát khí cực thịnh. Buộc phải tức tốc thỉnh cao tăng pháp sư trấn yểm. Linh cữu phải gửi lên chùa ngay, tuyệt nhiên nên tham khảo ý kiến chuyên gia tâm linh để an vị bát hương. Tránh để người hợp tuổi khóc lóc cạnh quan tài.';
  else if(countTrung>=2)kl='<b class="bad">HUNG: Phạm Trùng Tang nặng nề.</b> Gia đạo cần chú ý giữ gìn sức khỏe. Nên làm lễ cầu siêu, thành tâm hướng Phật để vong linh sớm siêu thoát.';
  else if(countTrung===1)kl='Vướng 1 Trùng tang nhẹ. Dẫu không họa hại to lớn nhưng chớ vội chủ quan. Người nhà năng niệm Phật, tụng chú Đại Bi để dẫn lối cho vong hồn mau chóng siêu thoát.';
  else if(countMo>=2)kl='<b class="good">ĐẠI CÁT: Được vòng Nhập Mộ.</b> Người mất nhẹ bước tiêu diêu cõi Phật. Đất lành chim đậu, mồ yên mả ấm. Sự viên mãn này chính là đại phước đức báu vật để lại cho con cháu, thế hệ sau hứa hẹn phát đạt rực rỡ.';
  else kl='Cục diện bình hòa. Tang ma tiến hành theo nghi thức truyền thống thuận tự nhiên. Chỉ cần cẩn thận xem ngày giờ hạ huyệt tránh hắc đạo là vạn sự êm xuôi.';

  H+=`<div class="phan-box"><h3 style="color:var(--gold);margin-top:0;font-size:18px;">☯ Cẩm Nang Nghi Thức Hậu Sự & Hóa Giải</h3>
  <ul style="padding-left:20px;line-height:1.6">
  <li><b>Phán quyết Trùng Tang & Mộ Phần:</b> ${kl}</li>
  <li><b>Chọn ngày hạ huyệt:</b> Mọi sự hung cát của tuổi đều có thể dùng ngày/giờ tốt để dung hòa. Bắt buộc chọn ngày Hoàng Đạo, có các sao cát như Trực Kiên, Trực Thành chiếu rọi. Tuyệt đối tránh xa các ngày Thọ Tử, Sát Chủ, Không Phòng kẻo rước thêm tai ương.</li>
  <li><b>Nghi thức Khâm Liệm (Nhập Quan):</b> Trước liệm phải làm lễ mộc dục (tắm gội thi hài bằng nước ngũ vị hương). Dùng vải lụa trắng sạch làm đồ đại/tiểu liệm. Phải cắt móng tay, móng chân, chải tóc gọn gàng, bọc vào một túi nhỏ đặt cùng vào quan tài. Tuyệt đối không dùng quần áo bằng nilon hay da.</li>
  <li><b>Thiết lập Linh Tọa:</b> Trên linh tọa phải có ảnh bài vị, 2 bát cơm úp thành ngọn, 1 quả trứng luộc, 1 đôi đũa bông cắm thẳng, 7 ngọn nến (nếu người nam) hoặc 9 ngọn (nếu nữ). Nhang đèn phải giữ cháy liên tục không đứt đoạn trong suốt những ngày quàn tại gia để dẫn đường cho linh hồn.</li>
  <li><b>Đại Kỵ trong Tang Ma:</b> 
     <br>- Không để chó, mèo đen nhảy qua thi hài (tránh hiện tượng quỷ nhập tràng). 
     <br>- Tránh để nước mắt rơi vào thi hài lúc khâm liệm. 
     <br>- Phụ nữ mang thai, người bị chó dại cắn, hoặc người có tuổi Tứ hành xung với người mất nên lánh mặt lúc hạ huyệt để tránh nhiễm âm khí.
  </li>
  </ul></div>`;
  
  document.getElementById('outMa').innerHTML=H;
}
document.getElementById('btnMa').onclick=runMa;

/* ═══ CALENDAR CLICK (CƯỚI HỎI) ═══ */
document.addEventListener('click',e=>{
  const dd=e.target.closest('.dd.good');if(!dd)return;
  document.querySelectorAll('.dd.good.active').forEach(x=>x.classList.remove('active'));
  dd.classList.add('active');
  const r=DAYS[+dd.dataset.k],mon=dd.closest('.mon');
  let box=mon.querySelector('.dayinfo-inline');
  if(!box){box=document.createElement('div');box.className='dayinfo-inline phan-box';mon.appendChild(box);}
  document.querySelectorAll('.dayinfo-inline').forEach(b=>{if(b!==box)b.remove();});
  box.innerHTML=`<h3 style="margin-top:0;font-size:16px;color:var(--gold)">Chi tiết ngày ${String(r.d).padStart(2,'0')}/${String(r.m).padStart(2,'0')}/${r.y}</h3>
  <b>Âm lịch:</b> ${r.L.day}/${r.L.month} năm ${yearName(r.L.year)} · Ngày <b>${r.can} ${r.chi}</b><br>
  <b>Trực:</b> ${r.truc} (Hoàng đạo)<br>
  <b>Giờ đại cát:</b> ${r.gio.join(', ')}<br>
  <div style="margin-top:12px; padding: 12px; background: rgba(196,162,101,.05); border-left: 3px solid var(--gold); font-size:15px; line-height:1.6">
    <h4 style="color:var(--gold); margin:0 0 8px 0; font-size:16px;">☯ Cẩm nang Tiến hành Đại sự</h4>
    <ul style="padding-left:18px; margin:0;">
       <li style="margin-bottom:6px"><b>Giờ xuất hành & Rước dâu:</b> Căn cứ vào bảng giờ Hoàng đạo, gia chủ nên chọn 1 trong các cung giờ: <b>${r.gio[0]||'Tý'}, ${r.gio[1]||'Sửu'}</b> để khởi hành. Tuyệt đối né cung giờ hắc đạo hoặc giờ kỵ tuổi.</li>
       <li style="margin-bottom:6px"><b>Hướng xuất hành:</b> Nên đi về hướng đón Hỷ Thần (thần may mắn) hoặc Tài Thần (thần tài lộc). Quá trình di chuyển ưu tiên đường lớn, bằng phẳng.</li>
       <li style="margin-bottom:6px"><b>Trải giường tân hôn:</b> Mời người phụ nữ trong họ có gia đạo viên mãn, vợ chồng hòa thuận, con cái nếp tẻ đầy đủ để tự tay trải chiếu/giường tân hôn. Trẻ em trai lanh lợi có thể cho lăn lộn trên giường lấy vía sinh con quý tử.</li>
       <li style="margin-bottom:6px"><b>Nghi thức gia tiên:</b> Lễ vật bắt buộc phải có mâm trầu cau (quả cau phải tròn trịa, lá trầu xanh thắm), rượu, chè, bánh phu thê. Chú rể phải đích thân thắp nhang trình báo tổ tiên xin rước dâu.</li>
       <li><b>Kiêng kỵ cốt tử:</b> Mẹ đẻ không đưa con gái về nhà chồng. Khi qua đò, qua cầu hoặc ngã tư lớn phải rải tiền xu, muối gạo để xuôi chèo mát mái, xua đuổi tà linh. Cô dâu khi bước ra khỏi cổng nhà tuyệt đối hướng mắt thẳng, không ngoái đầu nhìn lại.</li>
    </ul>
  </div>`;
  box.scrollIntoView({behavior:'smooth',block:'nearest'});
});

/* ═══ URL STATE & TIP ═══ */
const tip=document.getElementById('tip');
document.addEventListener('click',e=>{const g=e.target.closest('.gl');
  if(!g){tip.style.display='none';return;}
  tip.innerHTML=`<b>${g.textContent}</b><br>${GLOSS[g.dataset.g]||''}`;tip.style.display='block';
  const r=g.getBoundingClientRect();
  tip.style.left=Math.max(8,Math.min(r.left,innerWidth-tip.offsetWidth-8))+'px';
  tip.style.top=(r.bottom+8+tip.offsetHeight>innerHeight?r.top-tip.offsetHeight-8:r.bottom+8)+'px';});

function saveURL(){
  try{
    const tab=document.querySelector('.tab.on').dataset.tab;
    let obj = {t:tab};
    if(tab==='cuoi'){
      obj.b=document.getElementById('bDob').value; obj.g=document.getElementById('gDob').value;
      obj.y1=document.getElementById('y1').value; obj.y2=document.getElementById('y2').value;
    } else if (tab==='laso'){
      obj.l=document.getElementById('lDob').value; obj.h=document.getElementById('lHour').value;
      obj.s=document.getElementById('lSex').value; obj.xy=document.getElementById('lXemY').value;
    } else if (tab==='nha'){
      obj.nb=document.getElementById('nDob').value; obj.ns=document.getElementById('nSex').value;
      obj.ny=document.getElementById('nY').value;
    } else if (tab==='ma'){
      obj.ma1=document.getElementById('maDob').value; obj.ma2=document.getElementById('maDeath').value;
      obj.mah=document.getElementById('maHour').value; obj.mas=document.getElementById('maSex').value;
    }
    const q = btoa(JSON.stringify(obj));
    const p = new URLSearchParams();
    p.set('q', q);
    history.replaceState(null,'','?'+p.toString());
  }catch(e){}
}
function loadURL(){
  try {
    const p=new URLSearchParams(location.search);
    if(p.has('q')) {
      const q = p.get('q');
      const obj = JSON.parse(atob(q));
      const set=(id,k)=>{if(obj[k]!==undefined)document.getElementById(id).value=obj[k];};
      set('bDob','b');set('gDob','g');set('y1','y1');set('y2','y2');set('lDob','l');set('lHour','h');
      set('lSex','s');set('lXemY','xy');set('nDob','nb');set('nSex','ns');set('nY','ny');
      set('maDob','ma1');set('maDeath','ma2');set('maHour','mah');set('maSex','mas');
      if(obj.t){
        const tb=document.querySelector(`[data-tab="${obj.t}"]`);
        if(tb)tb.click();
      }
    } else {
      if(![...p].length)return;
      const set=(id,k)=>{if(p.get(k)!==null)document.getElementById(id).value=p.get(k);};
      set('bDob','b');set('gDob','g');set('y1','y1');set('y2','y2');set('lDob','l');set('lHour','h');
      set('lSex','s');set('lXemY','xy');set('nDob','nb');set('nSex','ns');set('nY','ny');
      set('maDob','ma1');set('maDeath','ma2');set('maHour','mah');set('maSex','mas');
      const tb=p.get('t')&&document.querySelector(`[data-tab="${p.get('t')}"]`);if(tb)tb.click();
    }
  }catch(e){}
}

/* ═══ KHỞI TẠO ═══ */
const sh=document.getElementById('lHour'),mah=document.getElementById('maHour');
CHI.forEach((c,i)=>{const a=(i*2+23)%24,b=(i*2)%24;
  const o=`<option value="${i}">${c} (${String(a).padStart(2,'0')}h–${String(b).padStart(2,'0')}h59)</option>`;
  sh.innerHTML+=o;mah.innerHTML+=o;});
sh.value=7;mah.value=7;
document.querySelectorAll('.tab').forEach(t=>{t.onclick=()=>{
  document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('on',x===t));
  ['cuoi','laso','nha','ma','huongdan','phongthuy'].forEach(id=>document.getElementById('pane-'+id).classList.toggle('hide',t.dataset.tab!==id));saveURL();};});
document.getElementById('btnCuoi').onclick=runCuoi;
document.getElementById('btnLaso').onclick=runLaso;
loadURL();runCuoi();runLaso();runNha();runMa();

const FIXTURES=[
 {ten:'01/02/1998 14h Nam', inp:{dd:1,mm:2,yy:1998,gio:7,sex:'nam'},
  mong:{am:'5/1/1998',menh:'Mùi',menhCC:'Kỷ Mùi',cuc:6,tv:'Sửu',than:'Phúc Đức',dv6:'Mùi',
    sao:{'Tỵ':'Liêm Trinh,Tham Lang','Ngọ':'Cự Môn','Mùi':'Thiên Tướng','Thân':'Thiên Đồng,Thiên Lương',
      'Dậu':'Thất Sát,Vũ Khúc','Tuất':'Thái Dương','Hợi':'','Tý':'Thiên Cơ','Sửu':'Phá Quân,Tử Vi',
      'Dần':'','Mão':'Thiên Phủ','Thìn':'Thái Âm'},
    tuan:'Thân,Dậu',triet:'Tý,Sửu',hoa:'Thân',linh:'Thân',
    ts:{'Dần':'Tràng Sinh','Mão':'Mộc Dục','Thìn':'Quan Đới','Tỵ':'Lâm Quan','Ngọ':'Đế Vượng','Mùi':'Suy','Thân':'Bệnh','Dậu':'Tử','Tuất':'Mộ','Hợi':'Tuyệt','Tý':'Thai','Sửu':'Dưỡng'},
    tt:{'Dần':'Thái Tuế','Mão':'Thiếu Dương','Thìn':'Tang Môn','Tỵ':'Thiếu Âm','Ngọ':'Quan Phù','Mùi':'Tử Phù','Thân':'Tuế Phá','Dậu':'Long Đức','Tuất':'Bạch Hổ','Hợi':'Phúc Đức','Tý':'Điếu Khách','Sửu':'Trực Phù'},
    bs:{'Tỵ':'Bác Sĩ','Ngọ':'Lực Sĩ','Mùi':'Thanh Long','Thân':'Tiểu Hao','Dậu':'Tướng Quân','Tuất':'Tấu Thư','Hợi':'Phi Liêm','Tý':'Hỷ Thần','Sửu':'Bệnh Phù','Dần':'Đại Hao','Mão':'Phục Binh','Thìn':'Quan Phủ'},
    phu:{'Thiên Mã':'Thân','Thiên Quý':'Thân','Tam Thai':'Thân','Thiên Hư':'Thân','Phượng Các':'Thân',
      'Ân Quang':'Ngọ','Bát Tọa':'Ngọ','Long Trì':'Ngọ','Thiên Khốc':'Thìn','Cô Thần':'Tỵ','Quả Tú':'Sửu',
      'Thiên Hỷ':'Mùi','Hồng Loan':'Sửu','Đào Hoa':'Mão','Thiên Hình':'Dậu','Thiên Riêu':'Sửu'},
    luu:{nam:2026,loc:'Tỵ',kinh:'Ngọ',da:'Thìn',thaiTue:'Ngọ',ma:'Thân'}}},
 {ten:'20/08/2026 21h15 Nữ', inp:{dd:20,mm:8,yy:2026,gio:11,sex:'nu'},
  mong:{am:'8/7/2026',menh:'Dậu',menhCC:'Đinh Dậu',cuc:6,tv:'Mùi',than:'Phu Thê',dv6:'Dậu',
    sao:{'Tỵ':'','Ngọ':'Thiên Cơ','Mùi':'Phá Quân,Tử Vi','Thân':'','Dậu':'Thiên Phủ','Tuất':'Thái Âm',
      'Hợi':'Liêm Trinh,Tham Lang','Tý':'Cự Môn','Sửu':'Thiên Tướng','Dần':'Thiên Đồng,Thiên Lương',
      'Mão':'Thất Sát,Vũ Khúc','Thìn':'Thái Dương'},
    tuan:'Dần,Mão',triet:'Thìn,Tỵ',hoa:'Dần',linh:'Dần',
    ts:{'Dần':'Tràng Sinh','Sửu':'Mộc Dục','Tý':'Quan Đới','Hợi':'Lâm Quan','Tuất':'Đế Vượng','Dậu':'Suy','Thân':'Bệnh','Mùi':'Tử','Ngọ':'Mộ','Tỵ':'Tuyệt','Thìn':'Thai','Mão':'Dưỡng'},
    tt:{'Ngọ':'Thái Tuế','Mùi':'Thiếu Dương','Thân':'Tang Môn','Dậu':'Thiếu Âm','Tuất':'Quan Phù','Hợi':'Tử Phù','Tý':'Tuế Phá','Sửu':'Long Đức','Dần':'Bạch Hổ','Mão':'Phúc Đức','Thìn':'Điếu Khách','Tỵ':'Trực Phù'},
    bs:{'Tỵ':'Bác Sĩ','Thìn':'Lực Sĩ','Mão':'Thanh Long','Dần':'Tiểu Hao','Sửu':'Tướng Quân','Tý':'Tấu Thư','Hợi':'Phi Liêm','Tuất':'Hỷ Thần','Dậu':'Bệnh Phù','Thân':'Đại Hao','Mùi':'Phục Binh','Ngọ':'Quan Phủ'},
    phu:{'Thiên Mã':'Thân','Long Trì':'Tuất','Phượng Các':'Thìn','Thiên Khốc':'Tý','Thiên Hư':'Tý',
      'Hồng Loan':'Dậu','Thiên Hỷ':'Mão','Đào Hoa':'Mão','Cô Thần':'Thân','Quả Tú':'Thìn',
      'Tam Thai':'Tỵ','Bát Tọa':'Dậu','Ân Quang':'Tỵ','Thiên Quý':'Dậu','Thiên Hình':'Mão','Thiên Riêu':'Mùi'},
    luu:{nam:2026,loc:'Tỵ',kinh:'Ngọ',da:'Thìn',thaiTue:'Ngọ',ma:'Thân'}}},
 /* ─── 3 lá bổ sung 25/08/2026: Kim tứ cục, Thổ ngũ cục, can Canh, can Kỷ, Âm Nam ─── */
 {ten:'24/12/2000 13h30 Nữ',inp:{dd:24,mm:12,yy:2000,gio:7,sex:'nu'},
  mong:{am:'29/11/2000',menh:'Tỵ',menhCC:'Tân Tỵ',cuc:4,tv:'Ngọ',than:'Phúc Đức',dv6:'',dvKhoi:['Tỵ',4],
   sao:{'Tỵ':'Thiên Cơ','Ngọ':'Tử Vi','Mùi':'','Thân':'Phá Quân','Thìn':'Thất Sát','Dậu':'',
    'Mão':'Thái Dương,Thiên Lương','Tuất':'Liêm Trinh,Thiên Phủ','Dần':'Vũ Khúc,Thiên Tướng',
    'Sửu':'Thiên Đồng,Cự Môn','Tý':'Tham Lang','Hợi':'Thái Âm'},
   ts:{'Tỵ':'Tràng Sinh','Thìn':'Mộc Dục','Mão':'Quan Đới','Dần':'Lâm Quan','Sửu':'Đế Vượng','Tý':'Suy',
    'Hợi':'Bệnh','Tuất':'Tử','Dậu':'Mộ','Thân':'Tuyệt','Mùi':'Thai','Ngọ':'Dưỡng'}}},
 {ten:'10/01/2001 20h50 Nữ',inp:{dd:10,mm:1,yy:2001,gio:10,sex:'nu'},
  mong:{am:'16/12/2000',menh:'Mão',menhCC:'Kỷ Mão',cuc:5,tv:'Dậu',than:'Tài Bạch',dvKhoi:['Mão',5],
   sao:{'Tỵ':'Phá Quân,Vũ Khúc','Ngọ':'Thái Dương','Mùi':'Thiên Phủ','Thân':'Thái Âm,Thiên Cơ',
    'Thìn':'Thiên Đồng','Dậu':'Tử Vi,Tham Lang','Mão':'','Tuất':'Cự Môn','Dần':'',
    'Sửu':'Thất Sát,Liêm Trinh','Tý':'Thiên Lương','Hợi':'Thiên Tướng'},
   ts:{'Thân':'Tràng Sinh','Mùi':'Mộc Dục','Ngọ':'Quan Đới','Tỵ':'Lâm Quan','Thìn':'Đế Vượng','Mão':'Suy',
    'Dần':'Bệnh','Sửu':'Tử','Tý':'Mộ','Hợi':'Tuyệt','Tuất':'Thai','Dậu':'Dưỡng'}}},
 {ten:'01/06/2009 07h20 Nam',inp:{dd:1,mm:6,yy:2009,gio:4,sex:'nam'},
  mong:{am:'9/5/2009',menh:'Dần',menhCC:'Bính Dần',cuc:6,tv:'Tý',than:'Tài Bạch',dvKhoi:['Dần',6],
   sao:{'Tỵ':'Thái Âm','Ngọ':'Tham Lang','Mùi':'Thiên Đồng,Cự Môn','Thân':'Thiên Tướng,Vũ Khúc',
    'Thìn':'Liêm Trinh,Thiên Phủ','Dậu':'Thiên Lương,Thái Dương','Mão':'','Tuất':'Thất Sát',
    'Dần':'Phá Quân','Sửu':'','Tý':'Tử Vi','Hợi':'Thiên Cơ'}}}
];
function selfTest(){
  let passed=0, errs=[];
  FIXTURES.forEach((f,i)=>{
    const inp = f.inp;
    const K = anSao({dd:inp.dd, mm:inp.mm, yy:inp.yy, gio:inp.gio, sex:inp.sex, xemY:inp.xemY||inp.yy});
    const M = f.mong;
    const check = (name, v1, v2) => { if(v1 != v2) errs.push(`[Ca ${i+1}] ${name}: Tính ra '${v1}' - Kỳ vọng '${v2}'`); };
    if(M.menh) check('Mệnh', CHI[K.menh], M.menh);
    if(M.than) check('Thân', CHI[K.than], M.than);
    if(M.cuc) check('Cục', K.cuc, M.cuc);
    if(M.tv) check('Tử Vi', CHI[K.tv], M.tv);
    if(M.tuan) {
      const actual = K.TUAN.map(x=>CHI[x]).join(',');
      check('Tuần', actual, M.tuan);
    }
    if(M.triet) {
      const actual = K.TRIET.map(x=>CHI[x]).join(',');
      check('Triệt', actual, M.triet);
    }
    if(M.sao) {
      Object.keys(M.sao).forEach(chi => {
        const expected = M.sao[chi].split(',').filter(x=>x).sort().join(',');
        const cid = CHI.indexOf(chi);
        const actual = Object.keys(K.S).filter(s=>K.S[s]===cid).sort().join(',');
        if(actual !== expected) check(`Chính tinh tại ${chi}`, actual, expected);
      });
    }
    if(M.ts) {
      Object.keys(M.ts).forEach(chi => {
        const cid = CHI.indexOf(chi);
        if(K.V_TS[cid] !== M.ts[chi]) check(`Tràng Sinh tại ${chi}`, K.V_TS[cid], M.ts[chi]);
      });
    }
    if(M.tt) {
      Object.keys(M.tt).forEach(chi => {
        const cid = CHI.indexOf(chi);
        if(K.V_TT[cid] !== M.tt[chi]) check(`Thái Tuế tại ${chi}`, K.V_TT[cid], M.tt[chi]);
      });
    }
  });
  
  if(errs.length > 0) {
    const div = document.createElement('div');
    div.style = 'background:var(--cinnabar);color:#fff;padding:15px;font-weight:bold;margin-bottom:15px;border-radius:4px;white-space:pre-wrap;border-left:5px solid #ff0000;';
    div.innerHTML = '⚠ TỰ KIỂM TRA BÁO LỖI (CHƯA ĐỐI CHIẾU HOÀN TOÀN):\n' + errs.join('\n');
    document.querySelector('.wrap').prepend(div);
    console.error(errs.join('\n'));
  }
}
setTimeout(selfTest, 1000);
function saveHistory(name, dob, hour, sex, xemY) {
  let hist = JSON.parse(localStorage.getItem('tuvi_hist') || '[]');
  hist = hist.filter(x => !(x.dob === dob && x.hour === hour && x.name === name));
  hist.unshift({name, dob, hour, sex, xemY});
  if(hist.length > 10) hist.pop();
  localStorage.setItem('tuvi_hist', JSON.stringify(hist));
  renderHistory();
}
function renderHistory() {
  const sel = document.getElementById('historySelect');
  if(!sel) return;
  let hist = JSON.parse(localStorage.getItem('tuvi_hist') || '[]');
  sel.innerHTML = '<option value="">-- Lá số vừa xem --</option>' + hist.map((x, i) => `<option value="${i}">${x.name || 'Vô danh'} (${x.dob})</option>`).join('');
}
function loadHistory(idx) {
  if(idx === "") return;
  let hist = JSON.parse(localStorage.getItem('tuvi_hist') || '[]');
  const x = hist[idx];
  if(x) {
    if(document.getElementById('lName')) document.getElementById('lName').value = x.name;
    document.getElementById('lDob').value = x.dob;
    document.getElementById('lHour').value = x.hour;
    document.getElementById('lSex').value = x.sex;
    document.getElementById('lXemY').value = x.xemY;
    document.getElementById('btnLaso').click();
  }
}
function downloadLaso() {
  const btn = document.getElementById('btnDownloadLaso');
  const ogText = btn.innerHTML;
  btn.innerHTML = '⏳ Đang tạo ảnh...';

  // Chống lỗi CSS Grid của html2canvas bằng cách vẽ lại clone bằng Absolute Positioning
  const clone = document.createElement('div');
  clone.style.width = '1200px';
  clone.style.height = '1000px'; // 4 rows x 250px
  clone.style.position = 'fixed';
  clone.style.left = '-15000px';
  clone.style.top = '0';
  clone.style.background = 'var(--line, #333)';
  
  const CW = 299, CH = 249; // width, height (trừ 1px border)
  
  // Tọa độ 12 cung (Mệnh -> Phụ Mẫu... theo index 0-11 là Dần->Sửu)
  // 0:Dần(0,3), 1:Mão(0,2), 2:Thìn(0,1), 3:Tỵ(0,0), 4:Ngọ(1,0), 5:Mùi(2,0)
  // 6:Thân(3,0), 7:Dậu(3,1), 8:Tuất(3,2), 9:Hợi(3,3), 10:Tý(2,3), 11:Sửu(1,3)
  const coords = [
    {x:0,y:3}, {x:0,y:2}, {x:0,y:1}, {x:0,y:0},
    {x:1,y:0}, {x:2,y:0}, {x:3,y:0}, {x:3,y:1},
    {x:3,y:2}, {x:3,y:3}, {x:2,y:3}, {x:1,y:3}
  ];

  const cungs = document.querySelectorAll('#ban .cung');
  cungs.forEach((c, i) => {
    const cc = c.cloneNode(true);
    cc.style.position = 'absolute';
    cc.style.left = (coords[i].x * 300) + 'px';
    cc.style.top = (coords[i].y * 250) + 'px';
    cc.style.width = CW + 'px';
    cc.style.height = CH + 'px';
    cc.style.background = '#111';
    cc.style.boxSizing = 'border-box';
    clone.appendChild(cc);
  });

  const center = document.getElementById('center').cloneNode(true);
  center.style.position = 'absolute';
  center.style.left = '300px';
  center.style.top = '250px';
  center.style.width = '599px'; // 2 cells
  center.style.height = '499px'; // 2 cells
  center.style.background = '#111';
  center.style.boxSizing = 'border-box';
  center.style.padding = '30px';
  const btnC = center.querySelector('#btnDownloadLaso');
  if(btnC) btnC.remove();
  clone.appendChild(center);

  document.body.appendChild(clone);

  html2canvas(clone, {
    backgroundColor: '#000', 
    scale: 2, 
    useCORS: true,
    logging: false
  }).then(canvas => {
    document.body.removeChild(clone);
    btn.innerHTML = '✅ Đã tạo xong';
    setTimeout(()=>btn.innerHTML=ogText, 2000);
    
    canvas.toBlob(blob => {
      const file = new File([blob], 'LaSoTuVi.png', {type: 'image/png'});
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        navigator.share({
          files: [file],
          title: 'Lá Số Tử Vi',
        }).catch(e => fallbackDownload(blob));
      } else {
        fallbackDownload(blob);
      }
    }, 'image/png');
  }).catch(err => {
    if(document.body.contains(clone)) document.body.removeChild(clone);
    btn.innerHTML = '❌ Lỗi tải ảnh';
  });
}

function fallbackDownload(blob) {
  const link = document.createElement('a');
  link.download = 'LaSoTuVi_' + (document.getElementById('lName')?.value || 'TuVi') + '.png';
  link.href = URL.createObjectURL(blob);
  link.click();
}

document.addEventListener('DOMContentLoaded', renderHistory);
