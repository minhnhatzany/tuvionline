/* ═══ THUẬT TOÁN LUẬN SÂU V14 ═══ */
const SAO_HANH={"Tử Vi":"Thổ","Thiên Cơ":"Mộc","Thái Dương":"Hỏa","Vũ Khúc":"Kim","Thiên Đồng":"Thủy","Liêm Trinh":"Hỏa","Thiên Phủ":"Thổ","Thái Âm":"Thủy","Tham Lang":"Mộc","Cự Môn":"Thủy","Thiên Tướng":"Thủy","Thiên Lương":"Mộc","Thất Sát":"Kim","Phá Quân":"Thủy"};
const SINH_H={'Kim':'Thủy','Thủy':'Mộc','Mộc':'Hỏa','Hỏa':'Thổ','Thổ':'Kim'};
const KHAC_H={'Kim':'Mộc','Mộc':'Thổ','Thổ':'Thủy','Thủy':'Hỏa','Hỏa':'Kim'};
function sinhKhac(hanhA, hanhB) {
  if(hanhA === hanhB) return "bình hòa";
  if(SINH_H[hanhA] === hanhB) return "sinh xuất";
  if(SINH_H[hanhB] === hanhA) return "sinh nhập";
  if(KHAC_H[hanhA] === hanhB) return "khắc xuất";
  if(KHAC_H[hanhB] === hanhA) return "khắc nhập";
  return "";
}

const DICT_SAO_TOT = {
  "Tử Vi": "Đế tinh ngự trị vượng địa, mang cốt cách bậc bề trên, uy nghi đĩnh đạc. Bẩm sinh có tài tổ chức, lãnh đạo, toát ra khí chất khiến người khác nể trọng.",
  "Thiên Cơ": "Phúc thiện tinh sáng sủa, báo hiệu bộ óc chiến lược, tư duy logic sâu sắc. Rất linh hoạt, mưu trí, hợp làm tham mưu, vạch định kế hoạch.",
  "Thái Dương": "Mặt trời rực rỡ, mang tâm hồn quang minh chính đại, hào sảng trượng nghĩa. Sống cống hiến, thích giúp đời, sự nghiệp danh vọng thênh thang.",
  "Vũ Khúc": "Đệ nhất tài tinh hội tụ, cực kỳ nhạy bén với tiền bạc. Tính cách kiên nghị, quyết đoán, làm việc dứt khoát lạnh lùng nhưng bên trong trọng tình nghĩa.",
  "Thiên Đồng": "Phúc tinh tọa chiếu, xua tan tai ương. Bản tính ôn hòa, hiền hậu, tâm hồn lãng mạn. Không bon chen tranh giành nhưng lộc lá cứ tự nhiên kéo đến.",
  "Liêm Trinh": "Tù tinh mang đậm nét sắc sảo, đào hoa. Bộc trực, thẳng thắn, làm việc với ngọn lửa đam mê hừng hực. Cá tính vô cùng cuốn hút và mạnh mẽ.",
  "Thiên Phủ": "Kho đụn nhà trời mở rộng. Cẩn trọng, bao dung, làm gì cũng bài bản. Có biệt tài giữ tiền, sinh ra để quản lý những khối tài sản lớn.",
  "Thái Âm": "Mặt trăng sáng vượng, mang sự tinh tế, dịu dàng và lãng mạn. Nhạy bén với nghệ thuật và điền sản. Cuộc đời êm ái, hậu vận sung túc.",
  "Tham Lang": "Đại diện cho dục vọng và nghệ thuật, khả năng ngoại giao tuyệt đỉnh. Khôn khéo, biết tiến thoái, giỏi chớp thời cơ bạo phát. Nội tâm phong phú đa tình.",
  "Cự Môn": "Ám tinh chủ miệng lưỡi sáng sủa. Khả năng hùng biện, phản biện sắc sảo, tư duy phân tích đỉnh cao. Một lời nói ra có thể xoay chuyển cục diện.",
  "Thiên Tướng": "Mang phong thái quyền thần uy nghi, đường bệ, trọng chữ tín, sống trượng nghĩa. Chú trọng hình thức, làm việc kỷ luật đâu ra đó.",
  "Thiên Lương": "Thọ tinh hiền hậu, từ bi, sống có nguyên tắc, thích che chở kẻ yếu. Cuộc đời hay gặp may mắn bất ngờ vào những lúc nguy nan nhất.",
  "Thất Sát": "Quyền tinh cai quản sinh sát. Dũng mãnh, quyết đoán, dám nghĩ dám làm, mang tinh thần khởi nghiệp bất khuất. Thành công đến từ sự xông pha.",
  "Phá Quân": "Hao tinh chủ sự tiên phong phá vỡ khuôn mẫu cũ. Mạnh mẽ, gai góc, tìm kiếm sự đổi mới. Tự tay gây dựng cơ đồ huy hoàng từ đống tro tàn."
};

const DICT_SAO_XAU = {
  "Tử Vi": "Mang danh Đế tinh nhưng rơi thế yếu. Lý tưởng lớn, cái tôi cao nhưng hoàn cảnh thực tại thường trêu ngươi, dễ sinh bất mãn, tài năng không được trọng dụng.",
  "Thiên Cơ": "Thông minh nhưng hay bị 'suy nghĩ quá độ'. Tính toán nhiều mà hành động ít, tự ôm lo âu vào lòng. Thần kinh nhạy cảm, dễ mất ngủ.",
  "Thái Dương": "Ánh dương lạc hãm bị che mờ. Tâm bao dung nhưng hay làm ơn mắc oán, giúp người không được ghi nhận. Nam lận đận công danh, nữ vất vả phu quân.",
  "Vũ Khúc": "Quá cứng nhắc, nguyên tắc đến mức cô độc. Mưu cầu lớn nhưng hay gãy đổ do thiếu sự mềm mỏng ngoại giao. Tình cảm khô khan, ít lãng mạn.",
  "Thiên Đồng": "Quá hiền lành đâm ra nhu nhược, thiếu chí tiến thủ. Dễ hài lòng với hiện tại, cả thèm chóng chán, làm việc thiếu sự kiên trì tới cùng.",
  "Liêm Trinh": "Cá tính quá mạnh dẫn đến bốc đồng, nóng nảy. Dễ vướng vào thị phi, kiện tụng pháp lý hoặc rắc rối trong các mối quan hệ tình cảm phức tạp.",
  "Thiên Phủ": "Quá an toàn đến mức bảo thủ, bỏ lỡ nhiều cơ hội bứt phá. Đôi khi có xu hướng hẹp hòi trong tiền bạc, thiếu đi sự liều lĩnh cần thiết.",
  "Thái Âm": "Tâm lý u buồn, nhạy cảm quá mức, dễ bị tổn thương bởi lời nói. Hay mơ mộng viển vông, đường tình cảm thường chông gai vất vả.",
  "Tham Lang": "Lòng tham dễ bị kích phát. Tháo vát nhưng cả thèm chóng chán, dễ sa đà vào tửu sắc hoặc thú vui tốn kém. Cuộc đời hay thăng trầm vì khát kho không đáy.",
  "Cự Môn": "Hay hoài nghi, đa nghi đa lo. Rất dễ vướng vào khẩu nghiệp, khắc khẩu với người thân, ra đường hay gặp thị phi đàm tiếu. Họa thường từ miệng ra.",
  "Thiên Tướng": "Thích sĩ diện, ham hư vinh, đôi khi lo chuyện bao đồng mà rước họa vào thân. Sự bảo thủ trong cách làm việc dễ khiến giậm chân tại chỗ.",
  "Thiên Lương": "Nguyên tắc thái quá thành ra cổ hủ, giáo điều. Đôi khi cứng nhắc, không chịu tiếp thu cái mới. Cuộc đời phải trải qua nhiều đợt tai ách rồi mới được cứu giải.",
  "Thất Sát": "Quá liều lĩnh, dễ sa vào cảnh bạo phát bạo tàn. Tính tình nóng nảy, dễ gây thù chuốc oán. Cẩn trọng những tai nạn, thương tích trên cơ thể.",
  "Phá Quân": "Phá hoại nhiều hơn xây dựng. Nóng nảy, dễ manh động chống đối. Sự nghiệp hay đứt gãy giữa chừng, phải trải qua nhiều lần trắng tay mới đúc kết được bài học."
};

function luanGiaiCung(K, idCung, tenCung) {
  const ch = Object.keys(K.S).filter(s=>K.S[s]===idCung);
  const pu = Object.keys(K.P).filter(s=>K.P[s]===idCung);
  const tuantriet = (K.TUAN.includes(idCung)?1:0) + (K.TRIET.includes(idCung)?2:0);
  const ts = K.V_TS[idCung];
  
  const intos = [
    `☯ <b>Luận về ${tenCung} (tại ${CHI[idCung]}):</b> `,
    `☯ <b>Khảo sát cung ${tenCung}:</b> `,
    `☯ <b>Với phương vị ${tenCung} (đóng tại ${CHI[idCung]}):</b> `,
    `☯ <b>Nhìn vào mảng ${tenCung}:</b> `,
    `☯ <b>Phân tích cung ${tenCung}:</b> `
  ];
  let t = `<p style="margin-bottom:12px; padding-bottom:12px; border-bottom: 1px solid rgba(255,255,255,0.05)">${intos[idCung % 5]}`;
  
  if (ch.length === 0) {
     const di = m12(idCung + 6);
     const chD = Object.keys(K.S).filter(s=>K.S[s]===di);
     t += `Cung này <b>Vô Chính Diệu</b> (không có chính tinh tọa thủ). Trong khoa Tử Vi, cung vô chính diệu như một căn nhà không nóc, uyển chuyển và linh hoạt vô cùng, nhưng ban đầu lại thiếu đi cái gốc kiên định. Do đó, phương diện này sẽ chịu sự chi phối mạnh mẽ từ <b>${chD.join(' và ')}</b> ở cung đối diện chiếu về. `;
  } else {
     t += `Nơi đây có sự cai quản của <b>${ch.join(' và ')}</b>. `;
     ch.forEach(s => {
        const mvdh = MVDH[s] ? MVDH[s][idCung] : 'B';
        const isTot = ['M','V','D'].includes(mvdh);
        const hsk = sinhKhac(SAO_HANH[s], K.naHanh);
        
        let saoText = isTot ? DICT_SAO_TOT[s] : DICT_SAO_XAU[s];
        if(saoText) t += saoText + " ";
        
        if(hsk === 'sinh nhập') t += `Đặc biệt, sinh khí của ${s} tương sinh với bản mệnh, tựa như hổ mọc thêm cánh, giúp đương số thu hút vượng khí, tài lộc tự nhiên tìm đến. `;
        else if(hsk === 'khắc xuất') t += `Tuy nhiên, bản mệnh phải hao tổn tâm lực để khắc chế ${s}. Dù chông gai thử thách, đương số vẫn đủ bản lĩnh để thao túng toàn bộ cục diện này. `;
        else if(hsk === 'khắc nhập') t += `Cần lưu ý, năng lượng của ${s} khắc ngược lại bản mệnh. Đây là một áp lực khổng lồ, đòi hỏi đương số phải nếm mật nằm gai mới mong thu phục được thành quả. `;
     });
  }

  const satTinh = pu.filter(s=>SAT_LIST.includes(s));
  const catTinh = pu.filter(s=>['Văn Xương','Văn Khúc','Thiên Khôi','Thiên Việt','Lộc Tồn','Tả Phụ','Hữu Bật'].includes(s));

  // Context-aware cung interpretation
  if (tenCung === 'Phu Thê') {
     const hasSat = satTinh.length > 0;
     const hasCat = catTinh.length > 0;
     const hasDaoHoa = pu.includes('Đào Hoa') || pu.includes('Hồng Loan') || pu.includes('Thiên Hỷ');
     const hasCoQua = pu.includes('Cô Thần') || pu.includes('Quả Tú');
     t += '<br><br><b style="color:var(--gold)">♡ Luận về đường Vợ Chồng & Con cái:</b> ';
     if (ch.length === 0) {
        t += 'Cung Phu Thê vô chính diệu, đường tình duyên uyển chuyển bất định. Nửa kia của đương số là người khó đoán, mối quan hệ cần nhiều thời gian mài giũa mới thấu hiểu nhau. Hôn nhân nếu đến muộn (sau 25 tuổi) thì bền vững, vội vàng dễ tan vỡ. ';
     } else if (ch.some(s => ['Tử Vi','Thiên Phủ','Thiên Tướng'].includes(s))) {
        t += 'Nửa kia là người có phẩm cách đoan trang, gia thế nền nếp, biết vun vén lo liệu cho gia đình. Cuộc hôn nhân mang lại sự ổn định và thăng tiến xã hội cho đương số. Vợ chồng có mô hình "phu xướng phụ tùy", một người chủ ngoài một người giữ trong, rất hòa hợp. ';
     } else if (ch.some(s => ['Thái Dương','Thái Âm'].includes(s))) {
        t += 'Nửa kia mang nét dịu dàng, lãng mạn và tinh tế. Mối quan hệ vợ chồng thiên về tình cảm sâu sắc, yêu thương chân thành. Tuy nhiên cũng dễ nhạy cảm, hay giận hờn vặt vãnh. Cần sự bao dung và lắng nghe từ cả hai phía. ';
     } else if (ch.some(s => ['Tham Lang','Liêm Trinh'].includes(s))) {
        t += 'Nửa kia là người có sức hút mãnh liệt, đào hoa, quyến rũ. Đường tình cảm trải qua nhiều sóng gió trước khi tìm được bến đỗ. Hôn nhân có thể đến sau một mối tình sâu đậm hoặc sau khoảng thời gian dài tìm kiếm. ';
     } else if (ch.some(s => ['Phá Quân','Thất Sát'].includes(s))) {
        t += 'Nửa kia có cá tính mạnh, độc lập, không dễ chiều. Đường vợ chồng nhiều va chạm, tranh cãi nhưng lại rất nồng nhiệt. Cần học cách nhường nhịn, kiểm soát cái tôi. Hôn nhân muộn sẽ bền hơn sớm. ';
     } else if (ch.some(s => ['Thiên Đồng','Thiên Lương'].includes(s))) {
        t += 'Nửa kia hiền hậu, phúc hậu, sống tình nghĩa. Hôn nhân êm đềm, vợ chồng cùng nhau xây dựng tổ ấm bằng sự kiên nhẫn và chân thành. Cuộc sống gia đình ấm cúng, ít sóng gió lớn. ';
     } else if (ch.some(s => ['Vũ Khúc','Thiên Cơ'].includes(s))) {
        t += 'Nửa kia thông minh, giỏi tính toán, biết giữ tiền. Hôn nhân có nền tảng kinh tế vững chắc nhưng đôi khi thiếu sự lãng mạn. Vợ chồng cùng nhau bàn bạc đầu tư, kinh doanh sẽ rất ăn ý. ';
     } else if (ch.some(s => ['Cự Môn'].includes(s))) {
        t += 'Nửa kia có tài ăn nói nhưng cũng hay tranh cãi. Đường vợ chồng dễ xảy ra khẩu chiến, hiểu lầm vì lời nói. Bí quyết giữ gìn hạnh phúc là "ít nói khi giận, nhiều nói khi yêu". ';
     }
     if (hasDaoHoa) t += 'Đào Hoa/Hồng Loan chiếu cung Phu Thê, đương số và nửa kia đều có duyên ngầm, dễ thu hút người khác giới. Cần giữ lòng chung thủy và minh bạch để tránh hiểu lầm tai tiếng. ';
     if (hasCoQua) t += 'Cô Thần/Quả Tú lạc vào cung Phu Thê mang đến nỗi cô đơn trong hôn nhân. Dù ở bên nhau nhưng đôi khi vẫn cảm thấy lẻ loi. Cần chủ động giao tiếp, chia sẻ tâm tư để kéo gần khoảng cách. ';
     // Tu Tuc (Children)
     const tuTucId = m12(K.menh + 9);
     const chTT = Object.keys(K.S).filter(s=>K.S[s]===tuTucId);
     const puTT = Object.keys(K.P).filter(s=>K.P[s]===tuTucId);
     const satTT = puTT.filter(s=>SAT_LIST.includes(s));
     t += '<br><br><b style="color:var(--gold)">♡ Về đường Con cái:</b> ';
     if (chTT.some(s => ['Tử Vi','Thiên Phủ','Thiên Tướng','Thái Dương'].includes(s))) {
        t += 'Cung Tử Tức sáng sủa, con cái sau này thông minh lanh lợi, có chí hướng, hiếu thảo với cha mẹ. Gia đình đông vui, con cháu hưng vượng. ';
     } else if (chTT.length === 0) {
        t += 'Cung Tử Tức vô chính diệu, đường con cái uyển chuyển, có thể sinh muộn hoặc con cái ở xa. ';
     } else {
        t += 'Con cái mang cá tính riêng biệt, cần sự kiên nhẫn dạy dỗ từ cha mẹ. ';
     }
     if (satTT.length >= 2) t += 'Tuy nhiên cung Tử Tức có sát tinh hội tụ, đường con cái vất vả hơn người thường, cần chăm sóc sức khỏe thai sản cẩn thận. ';
     if (puTT.includes('Thiên Hỷ') || puTT.includes('Hồng Loan')) t += 'May mắn có cát tinh hỷ chiếu, tin vui về con cái sẽ đến đúng thời điểm, mang lại niềm hạnh phúc viên mãn cho gia đình. ';
  }

  if (tenCung === 'Tật Ách') {
     t += '<br><br><b style="color:var(--gold)">♡ Về sức khỏe cần lưu ý:</b> ';
     if (ch.some(s => ['Liêm Trinh','Thất Sát','Phá Quân'].includes(s))) t += 'Cung Tật Ách gặp sao dữ, đương số cần chú ý các bệnh về xương khớp, tai nạn va chạm, phẫu thuật. Tránh các hoạt động mạo hiểm, lái xe cẩn thận. ';
     else if (ch.some(s => ['Thái Âm','Thiên Đồng','Thiên Cơ'].includes(s))) t += 'Sức khỏe tổng thể khá ổn nhưng hay bị suy nhược thần kinh, mất ngủ, stress. Cần giữ tinh thần thoải mái, tập thiền, yoga. ';
     else t += 'Nhìn chung thể trạng bình ổn, không có dấu hiệu bệnh nặng nổi bật. Tuy nhiên vẫn cần khám sức khỏe định kỳ, phòng bệnh hơn chữa bệnh. ';
  }

  if (tenCung === 'Phúc Đức') {
     t += '<br><br><b style="color:var(--gold)">♡ Về phúc phần & hậu vận:</b> ';
     if (ch.some(s => ['Thiên Lương','Thiên Đồng','Thiên Phủ','Tử Vi'].includes(s))) t += 'Phúc đức dày, tổ tiên để lại nền tảng tốt. Hậu vận an nhàn, về già sung túc, con cháu quây quần. Hay gặp may mắn bất ngờ trong những lúc khó khăn. ';
     else if (ch.some(s => ['Thất Sát','Phá Quân','Tham Lang'].includes(s))) t += 'Phúc đức mỏng, phải tự thân lập nghiệp, ít được hưởng thừa kế từ gia đình. Hậu vận cần tích cực làm phúc, hành thiện để bồi đắp phúc phần cho con cháu. ';
     else t += 'Phúc phần ở mức trung bình, cuộc sống hậu vận tùy thuộc vào sự nỗ lực và tích đức của chính đương số trong giai đoạn trung vận. ';
  }

  if (tuantriet === 1) t += `Khúc triết thay, vùng không gian này lại bị <b>Tuần Không</b> bủa vây. Mọi mưu sự ở tiền vận (trước 35 tuổi) thường bế tắc, chậm chạp. Phải nhẫn nại qua trung vận thì sự vững chãi mới bắt đầu đền đáp. `;
  if (tuantriet === 2) t += `Cần cực kỳ cẩn trọng vì có <b>Triệt Lộ</b> án ngữ. Triệt chủ sự đứt đoạn bất thình lình, ban đầu có thể bạo phát hanh thông nhưng dễ sụp đổ nhanh chóng nếu chủ quan hống hách. Vượt qua 35 tuổi, rào cản này sẽ dần được tháo gỡ. `;
  if (tuantriet === 3) t += `Đáng tiếc, cung này bị phong tỏa hoàn toàn bởi lưới <b>Tuần - Triệt đồng cung</b>. Cát tinh mất thiêng mà hung tinh cũng tiêu tán. Những mong cầu mãnh liệt ở đây tốt nhất nên thuận theo tự nhiên, cưỡng cầu chỉ thêm chuốc lấy muộn phiền. `;

  if (satTinh.length >= 2) {
     t += `Chưa kể, bầy hung sát tinh tàn khốc (${satTinh.join(', ')}) hội tụ về đây, mang đến sóng gió trùng trùng. Làm gì cũng đổ mồ hôi sôi nước mắt mới đạt được kết quả, đòi hỏi đương số phải rèn một bản lĩnh thép. `;
  } else if (satTinh.length === 1) {
     t += `Sự góp mặt của hung tinh ${satTinh[0]} mang đến đôi chút chông gai, đóng vai trò như ngọn lửa thử vàng rèn giũa ý chí. `;
  }

  if (catTinh.length >= 2) {
     t += `Nhưng vạn sự vẹn toàn bù trừ, nơi đây hội tụ quần vinh cát tinh (${catTinh.join(', ')}). Báo hiệu quý nhân âm thầm phò trợ, lúc nguy nan luôn có cơ hội vàng bất ngờ xuất hiện kéo đương số vượt qua nghịch cảnh. `;
  }
  
  const getPos = h => { const s = Object.keys(K.HOA).find(k=>K.HOA[k]===h); return s ? K.S[s] ?? K.P[s] : -1; };
  const hL = getPos('loc'), hQ = getPos('quyen'), hK = getPos('khoa');
  if(hL===idCung || hQ===idCung || hK===idCung) {
      let th=[]; if(hL===idCung)th.push('Hóa Lộc'); if(hQ===idCung)th.push('Hóa Quyền'); if(hK===idCung)th.push('Hóa Khoa');
      t += `Tuyệt vời hơn, ${tenCung} còn ôm trọn vượng khí của <b>${th.join(', ')}</b>. Đây chính là mảnh đất màu mỡ bậc nhất trên lá số để đương số bạo phát tài danh, hóa rồng hóa phượng. `;
  }

  const badTS = ['Suy','Bệnh','Tử','Mộ','Tuyệt'];
  const goodTS = ['Tràng Sinh','Đế Vượng','Lâm Quan','Quan Đới'];
  if (badTS.includes(ts)) {
      if (idCung % 2 === 0) t += `Tựu chung lại, trường năng lượng của cung đang rơi vào vòng <b>${ts}</b>. Khí vận âm ỉ suy thoái, khuyên đương số nên thu mình tích lũy, chờ đợi mây tan thay vì mạo hiểm vung tay quá trán.`;
      else t += `Với khí số nằm ở vòng <b>${ts}</b>, vạn sự thiếu đi sức bật vươn cao, đành lấy sự bình ổn, tĩnh tại làm kim chỉ nam.`;
  } else if (goodTS.includes(ts)) {
      if (idCung % 2 === 0) t += `Cuối cùng, bao trùm lên tất cả là khí vận vượng phát đắc vòng <b>${ts}</b>. Giai đoạn bùng nổ, thịnh vượng tột bậc, hoàn toàn có thể tự tin bung sức vẫy vùng làm nên chuyện lớn.`;
      else t += `Cộng hưởng khí thế <b>${ts}</b>, nội lực vùng này tuôn trào cuồn cuộn, mở ra cơ hội thăng tiến và thành tựu vang dội.`;
  } else {
      if (idCung % 3 === 0) t += `Năng lượng cung đắc địa ở thế <b>${ts}</b>, duy trì sự ươm mầm, bình hòa nuôi dưỡng chờ thời đợi vận.`;
  }
  
  t += `</p>`;
  return t;
}

function luanMenh(K){
  const cN=yearChiI(K.L.year);
  const cucHanh = K.cuc===2?'Thủy':K.cuc===3?'Mộc':K.cuc===4?'Kim':K.cuc===5?'Thổ':'Hỏa';
  const nh = K.naHanh;
  let menhCucText = "";
  if (nh === cucHanh) menhCucText = "Mệnh Cục bình hòa. Đương số dễ hòa nhập, hoàn cảnh sống ổn định, ít biến động sốc.";
  else if (SINH_H[nh] === cucHanh) menhCucText = "Mệnh sinh Cục. Bản mệnh có xu hướng hào phóng, hay lo toan cho vạn vật xung quanh, chịu nhiều vất vả thiệt thòi nhưng được người đời nể trọng.";
  else if (SINH_H[cucHanh] === nh) menhCucText = "Cục sinh Mệnh. Hoàn cảnh đặc biệt ưu ái đương số, đi ra ngoài dễ gặp may mắn bất ngờ, hay được quý nhân hoặc môi trường nâng đỡ tận tình.";
  else if (KHAC_H[nh] === cucHanh) menhCucText = "Mệnh khắc Cục. Hoàn cảnh nhiều thử thách nhưng bản lĩnh đương số vô cùng to lớn, kiên cường khắc phục nghịch cảnh để tự tay vươn lên thành tựu.";
  else if (KHAC_H[cucHanh] === nh) menhCucText = "Cục khắc Mệnh. Môi trường hay tạo áp lực chèn ép. Đương số cần sự nhẫn nại, ý chí bền bỉ gấp năm mười lần người thường để vươn tới vinh quang.";
  
  const amDuongLy = K.thuan ? "Âm Dương thuận lý. Cuộc đời nhìn chung có nhiều điểm thuận lợi, dễ gặp thời vận, mưu sự dễ thành hơn người." : "Âm Dương nghịch lý. Đòi hỏi nội lực mạnh mẽ. Dù gặp nhiều thử thách thăng trầm nhưng nhờ sự nỗ lực tự thân không ngừng nghỉ mà bứt phá.";

  let t = '<h3 style="color:var(--gold);margin-top:0;font-size:18px;margin-bottom:12px;">☯ Nền tảng Bản mệnh & Cốt cách</h3>';

  const th = [K.menh, m12(K.menh+4), m12(K.menh+8)];
  let ch = [];
  th.forEach(c => {
    Object.keys(K.S).forEach(s => { if(K.S[s]===c) ch.push(s); });
  });
  let cachcuc = "";
  const has = (arr) => arr.every(x => ch.includes(x));
  if(has(['Thất Sát', 'Phá Quân', 'Tham Lang'])) cachcuc = "Sát Phá Tham (Chủ về đột phá, khai sáng, võ nghiệp, kinh doanh táo bạo).";
  else if(has(['Thiên Cơ', 'Thái Âm', 'Thiên Đồng', 'Thiên Lương'])) cachcuc = "Cơ Nguyệt Đồng Lương (Chủ về sự ôn hòa, trí thức, văn cách, làm chuyên môn hoặc công chức rất hợp).";
  else if(has(['Tử Vi', 'Thiên Phủ', 'Vũ Khúc', 'Thiên Tướng'])) cachcuc = "Tử Phủ Vũ Tướng (Cách cục của người lãnh đạo, quản lý, nắm quyền bính và tài chính).";
  else if(has(['Cự Môn', 'Thái Dương'])) cachcuc = "Cự Nhật (Chủ về ngoại giao, truyền thông, danh tiếng, nói năng thuyết phục).";
  else if(has(['Thái Dương', 'Thái Âm'])) cachcuc = "Nhật Nguyệt Tịnh Minh (Chủ về sự thông tuệ, rực rỡ, danh tài song mỹ).";
  
  let ccText = cachcuc ? `<p style="margin-bottom:12px; padding-bottom:12px; border-bottom: 1px solid rgba(255,255,255,0.05)">☯ <b>Cách cục Chính:</b> Bản mệnh đắc cách <b>${cachcuc}</b></p>` : '';
  
  t += ccText;

  t += `<p style="margin-bottom:12px; padding-bottom:12px; border-bottom: 1px solid rgba(255,255,255,0.05)">☯ <b>Gốc rễ Âm Dương - Ngũ Hành:</b> Đương số mang mệnh <b>${K.naNam}</b> (${nh}), <b>${CUC_TEN[K.cuc]}</b>. Cục diện rơi vào thế <b>${amDuongLy}</b> Tình thế vận động: <b>${menhCucText}</b></p>`;
  t += luanGiaiCung(K, K.menh, 'Mệnh');
  return '<div class="phan-box">'+t+'<div style="margin:20px 0;padding:15px;background:rgba(196,162,101,0.1);border:1px dashed var(--gold);border-radius:4px;text-align:center;"><h4 style="color:var(--gold);margin-bottom:10px;font-size:16px;">🔍 XUẤT BẢN FULL PDF & TƯ VẤN CHUYÊN SÂU</h4><p style="font-size:15px;margin-bottom:10px;">Bản miễn phí chỉ phản ánh 70% bức tranh tổng thể. Hãy mở khóa Báo Cáo VIP (15 trang) để xem chi tiết từng năm, hoặc đặt lịch tư vấn 1-1 đả thông bế tắc.</p><button onclick="document.getElementById(\'paymentModal\').style.display=\'flex\'" style="display:inline-block;background:var(--gold);color:#000;border:none;padding:10px 16px;text-decoration:none;font-weight:bold;margin-right:10px;border-radius:4px;font-size:14px;margin-bottom:5px;cursor:pointer;">🔓 Mở Khóa Báo Cáo VIP (50k)</button><a href="https://www.facebook.com/groups/1451929442272843" target="_blank" style="display:inline-block;background:transparent;color:var(--gold);border:1px solid var(--gold);padding:9px 16px;text-decoration:none;font-weight:bold;border-radius:4px;font-size:14px;margin-bottom:5px;">👥 Tham gia Group Tử Vi</a></div></div>';
}

function luanCacCung(K){
  let t = '<div class="phan-box"><h3 style="color:var(--gold);margin-top:0;font-size:18px;margin-bottom:12px;">☯ Đường Học hành, Công danh & Tiền bạc</h3>';
  t += luanGiaiCung(K, m12(K.menh+4), 'Quan Lộc');
  t += luanGiaiCung(K, m12(K.menh+8), 'Tài Bạch');
  t += `</div>`;

  t += '<div class="phan-box"><h3 style="color:var(--gold);margin-top:0;font-size:18px;margin-bottom:12px;">☯ Hậu vận, Gia đạo & Nghiệp quả</h3>';
  t += luanGiaiCung(K, m12(K.menh+10), 'Phu Thê');
  t += luanGiaiCung(K, m12(K.menh+7), 'Tật Ách');
  t += luanGiaiCung(K, m12(K.menh+2), 'Phúc Đức');
  t += `</div>`;
  return t;
}

/* ═══ ÂM LỊCH ═══ */
const TZ=7;
function jdFromDate(dd,mm,yy){const a=Math.floor((14-mm)/12),y=yy+4800-a,m=mm+12*a-3;let jd=dd+Math.floor((153*m+2)/5)+365*y+Math.floor(y/4)-Math.floor(y/100)+Math.floor(y/400)-32045;if(jd<2299161)jd=dd+Math.floor((153*m+2)/5)+365*y+Math.floor(y/4)-32083;return jd;}
function newMoonDay(k,tz){const T=k/1236.85,T2=T*T,T3=T2*T,dr=Math.PI/180;let J=2415020.75933+29.53058868*k+.0001178*T2-.000000155*T3;J+=.00033*Math.sin((166.56+132.87*T-.009173*T2)*dr);const M=359.2242+29.10535608*k-.0000333*T2-.00000347*T3,Mp=306.0253+385.81691806*k+.0107306*T2+.00001236*T3,F=21.2964+390.67050646*k-.0016528*T2-.00000239*T3;let C=(.1734-.000393*T)*Math.sin(M*dr)+.0021*Math.sin(2*dr*M);C-=.4068*Math.sin(Mp*dr)+.0161*Math.sin(dr*2*Mp)-.0004*Math.sin(dr*3*Mp);C+=.0104*Math.sin(dr*2*F)-.0051*Math.sin(dr*(M+Mp))-.0074*Math.sin(dr*(M-Mp));C+=.0004*Math.sin(dr*(2*F+M))-.0004*Math.sin(dr*(2*F-M))-.0006*Math.sin(dr*(2*F+Mp));C+=.001*Math.sin(dr*(2*F-Mp))+.0005*Math.sin(dr*(2*Mp+M));const dt=T<-11?.001+.000839*T+.0002261*T2-.00000845*T3-.000000081*T*T3:-.000278+.000265*T+.000262*T2;return Math.floor(J+C-dt+.5+tz/24);}
function sunLongitude(jdn,tz){const T=(jdn-2451545.5-tz/24)/36525,T2=T*T,dr=Math.PI/180;const M=357.5291+35999.0503*T-.0001559*T2-.00000048*T*T2,L0=280.46645+36000.76983*T+.0003032*T2;let DL=(1.9146-.004817*T-.000014*T2)*Math.sin(dr*M);DL+=(.019993-.000101*T)*Math.sin(dr*2*M)+.00029*Math.sin(dr*3*M);let L=(L0+DL)*dr;L-=Math.PI*2*Math.floor(L/(Math.PI*2));return Math.floor(L/Math.PI*6);}
function lunarMonth11(yy,tz){const off=jdFromDate(31,12,yy)-2415021,k=Math.floor(off/29.530588853);let nm=newMoonDay(k,tz);if(sunLongitude(nm,tz)>=9)nm=newMoonDay(k-1,tz);return nm;}
function leapMonthOffset(a11,tz){const k=Math.floor((a11-2415021.076998695)/29.530588853+.5);let last=0,i=1,arc=sunLongitude(newMoonDay(k+i,tz),tz);do{last=arc;i++;arc=sunLongitude(newMoonDay(k+i,tz),tz);}while(arc!==last&&i<14);return i-1;}
function solar2Lunar(dd,mm,yy,tz=TZ){const dayNum=jdFromDate(dd,mm,yy),k=Math.floor((dayNum-2415021.076998695)/29.530588853);let monthStart=newMoonDay(k+1,tz);if(monthStart>dayNum)monthStart=newMoonDay(k,tz);let a11=lunarMonth11(yy,tz),b11=a11,lunarYear;if(a11>=monthStart){lunarYear=yy;a11=lunarMonth11(yy-1,tz);}else{lunarYear=yy+1;b11=lunarMonth11(yy+1,tz);}const lunarDay=dayNum-monthStart+1,diff=Math.floor((monthStart-a11)/29);let leap=0,lunarMonth=diff+11;if(b11-a11>365){const lo=leapMonthOffset(a11,tz);if(diff>=lo){lunarMonth=diff+10;if(diff===lo)leap=1;}}if(lunarMonth>12)lunarMonth-=12;if(lunarMonth>=11&&diff<4)lunarYear-=1;return{day:lunarDay,month:lunarMonth,year:lunarYear,leap};}
const yearCan=y=>CAN[((y+6)%10+10)%10],yearChiI=y=>((y+8)%12+12)%12,yearName=y=>yearCan(y)+' '+CHI[yearChiI(y)];
const dayChiIdx=(d,m,y)=>(jdFromDate(d,m,y)+1)%12,dayCanIdx=(d,m,y)=>(jdFromDate(d,m,y)+9)%10;
const fsp=(K,s)=>K.S[s]!==undefined?K.S[s]:(K.P[s]!==undefined?K.P[s]:-1);

/* ═══ AN SAO ═══ */
function anSao({dd,mm,yy,gio,sex,xemY}){
  const L=solar2Lunar(dd,mm,yy),ci=((L.year+6)%10+10)%10,canNam=CAN[ci],cN=yearChiI(L.year);
  const menh=m12(2+(L.month-1)-gio),than=m12(2+(L.month-1)+gio);
  const NGU_HO={0:2,5:2,1:4,6:4,2:6,7:6,3:8,8:8,4:0,9:0},canDan=NGU_HO[ci];
  const canCung=i=>CAN[(canDan+m12(i-2))%10];
  const nh=NAP_AM[NA_IDX[canCung(menh)+'-'+CHI[menh]]],cuc=CUC_SO[nh];
  const n=Math.ceil(L.day/cuc),r=n*cuc-L.day,base=m12(1+n),tv=m12(r%2===1?base-r:base+r),ph=m12(4-tv),S={};
  S['Tử Vi']=tv;S['Thiên Cơ']=m12(tv-1);S['Thái Dương']=m12(tv-3);S['Vũ Khúc']=m12(tv-4);
  S['Thiên Đồng']=m12(tv-5);S['Liêm Trinh']=m12(tv-8);S['Thiên Phủ']=ph;S['Thái Âm']=m12(ph+1);
  S['Tham Lang']=m12(ph+2);S['Cự Môn']=m12(ph+3);S['Thiên Tướng']=m12(ph+4);S['Thiên Lương']=m12(ph+5);
  S['Thất Sát']=m12(ph+6);S['Phá Quân']=m12(ph+10);
  const P={'Văn Xương':m12(10-gio),'Văn Khúc':m12(4+gio),'Tả Phụ':m12(3+L.month),'Hữu Bật':m12(11-L.month),
    'Địa Kiếp':m12(11+gio),'Địa Không':m12(11-gio),'Lộc Tồn':LOC_TON[canNam],
    'Kình Dương':m12(LOC_TON[canNam]+1),'Đà La':m12(LOC_TON[canNam]-1),
    'Thiên Khôi':KHOI_VIET[canNam][0],'Thiên Việt':KHOI_VIET[canNam][1]};
  const[lo,qu,kh,ky]=TU_HOA[canNam],HOA={};HOA[lo]='loc';HOA[qu]='quyen';HOA[kh]='khoa';HOA[ky]='ky';
  const duong=[0,2,4,6,8].includes(ci),thuan=(duong&&sex==='nam')||(!duong&&sex==='nu');
  const dv={};for(let i=0;i<12;i++)dv[m12(thuan?menh+i:menh-i)]=cuc+i*10;
  const off=m12(cN-ci),TUAN=[m12(10+off),m12(11+off)],tb=m12(8-(ci%5)*2),TRIET=[tb,m12(tb+1)];
  let sH,sL;
  if([2,6,10].includes(cN)){sH=1;sL=3;}else if([8,0,4].includes(cN)){sH=2;sL=10;}
  else if([5,9,1].includes(cN)){sH=3;sL=10;}else{sH=9;sL=10;}
  P['Hỏa Tinh']=m12(thuan?sH+gio:sH-gio);P['Linh Tinh']=m12(thuan?sL-gio:sL+gio);
  P['Long Trì']=m12(4+cN);P['Phượng Các']=m12(10-cN);P['Thiên Khốc']=m12(6-cN);P['Thiên Hư']=m12(6+cN);
  P['Hồng Loan']=m12(3-cN);P['Thiên Hỷ']=m12(9-cN);
  P['Đào Hoa']={0:9,4:9,8:9,2:3,6:3,10:3,5:6,9:6,1:6,11:0,3:0,7:0}[cN];
  P['Thiên Mã']={8:2,0:2,4:2,2:8,6:8,10:8,5:11,9:11,1:11,11:5,3:5,7:5}[cN];
  P['Cô Thần']={11:2,0:2,1:2,2:5,3:5,4:5,5:8,6:8,7:8,8:11,9:11,10:11}[cN];
  P['Quả Tú']={11:10,0:10,1:10,2:1,3:1,4:1,5:4,6:4,7:4,8:7,9:7,10:7}[cN];
  P['Thiên Hình']=m12(9+(L.month-1));P['Thiên Riêu']=m12(1+(L.month-1));P['Thiên Y']=P['Thiên Riêu'];
  P['Ân Quang']=m12(P['Văn Xương']+(L.day-2));P['Thiên Quý']=m12(P['Văn Khúc']-(L.day-2));
  P['Tam Thai']=m12(P['Tả Phụ']+(L.day-1));P['Bát Tọa']=m12(P['Hữu Bật']-(L.day-1));
  P['Thiên Không']=m12(cN+1);
  P['Giải Thần']={0:8,4:8,8:8,1:5,5:5,9:5,2:2,6:2,10:2,3:11,7:11,11:11}[cN];
  const _TS=['Tràng Sinh','Mộc Dục','Quan Đới','Lâm Quan','Đế Vượng','Suy','Bệnh','Tử','Mộ','Tuyệt','Thai','Dưỡng'];
  const _TT=['Thái Tuế','Thiếu Dương','Tang Môn','Thiếu Âm','Quan Phù','Tử Phù','Tuế Phá','Long Đức','Bạch Hổ','Phúc Đức','Điếu Khách','Trực Phù'];
  const _BS=['Bác Sĩ','Lực Sĩ','Thanh Long','Tiểu Hao','Tướng Quân','Tấu Thư','Phi Liêm','Hỷ Thần','Bệnh Phù','Đại Hao','Phục Binh','Quan Phủ'];
  const tsB={2:8,5:8,3:11,4:5,6:2}[cuc],bsB=LOC_TON[canNam];
  const V_TS={},V_TT={},V_BS={};
  for(let i=0;i<12;i++){V_TS[m12(thuan?tsB+i:tsB-i)]=_TS[i];V_TT[m12(cN+i)]=_TT[i];V_BS[m12(thuan?bsB+i:bsB-i)]=_BS[i];}
  const xY=xemY||L.year,cX=yearChiI(xY),canX=CAN[((xY+6)%10+10)%10];
  const th0={2:4,6:4,10:4,8:10,0:10,4:10,5:7,9:7,1:7,11:1,3:1,7:1}[cN];
  const dif=xY-L.year,lLoc=LOC_TON[canX];
  const LUU={nam:xY,tieuHan:m12(sex==='nam'?th0+dif:th0-dif),thaiTue:cX,
    loc:lLoc,kinh:m12(lLoc+1),da:m12(lLoc-1),
    ma:{8:2,0:2,4:2,2:8,6:8,10:8,5:11,9:11,1:11,11:5,3:5,7:5}[cX],
    khoc:m12(6-cX),hu:m12(6+cX),khoi:KHOI_VIET[canX][0],viet:KHOI_VIET[canX][1],
    hoa:(()=>{const[a,b,c,e]=TU_HOA[canX],H={};H[a]='loc';H[b]='quyen';H[c]='khoa';H[e]='ky';return H;})()};
  const lunarAge=xY-L.year+1;let daiVanCung=-1,daiVanStart=0;
  for(let c=0;c<12;c++){if(dv[c]!==undefined&&lunarAge>=dv[c]&&lunarAge<dv[c]+10){daiVanCung=c;daiVanStart=dv[c];break;}}
  const daiVanCan=daiVanCung>=0?canCung(daiVanCung):'';
  return{L,canNam,chiNam:CHI[cN],menh,than,cuc,nh,tv,S,P,HOA,dv,thuan,canCung,TUAN,TRIET,V_TS,V_TT,V_BS,LUU,
    naNam:NA_TEN[NA_IDX[canNam+'-'+CHI[cN]]], naHanh: NAP_AM[NA_IDX[canNam+'-'+CHI[cN]]], daiVanCung,daiVanStart,daiVanCan,lunarAge,sex};
}

/* ═══ HỢP TUỔI & TRẠCH CÁT ═══ */
const TAM_HOP=[[0,4,8],[1,5,9],[2,6,10],[3,7,11]];
const TU_HANH_XUNG=[[0,3,6,9],[1,4,7,10],[2,5,8,11]];
const LUC_HAI={0:7,7:0,1:6,6:1,2:5,5:2,3:4,4:3,8:11,11:8,9:10,10:9};
const LUC_HOP={0:1,1:0,2:11,11:2,3:10,10:3,4:9,9:4,5:8,8:5,6:7,7:6};
const TAM_TAI_MAP={"0,4,8":[2,3,4],"1,5,9":[11,0,1],"2,6,10":[8,9,10],"3,7,11":[5,6,7]};
function checkChi(a,b){const o=[];
  const th=TAM_HOP.find(g=>g.includes(a)&&g.includes(b));if(th&&a!==b)o.push({v:'good',t:G('Tam hợp','tam hợp'),why:`Cùng nhóm ${th.map(i=>CHI[i]).join(' – ')}.`});
  const tx=TU_HANH_XUNG.find(g=>g.includes(a)&&g.includes(b));if(tx&&a!==b)o.push({v:'bad',t:G('Tứ hành xung','tứ hành xung'),why:`Cùng nhóm ${tx.map(i=>CHI[i]).join(' – ')}.`});
  if(m12(a-b)===6)o.push({v:'bad',t:G('Lục xung','lục xung'),why:'Đối diện vòng chi.'});
  if(LUC_HAI[a]===b)o.push({v:'mid',t:G('Lục hại','lục hại'),why:'Hại nhau.'});
  if(LUC_HOP[a]===b)o.push({v:'good',t:G('Lục hợp','lục hợp'),why:'Hợp nhau.'});
  if(!o.length)o.push({v:'mid',t:'Bình hòa',why:'Không xung không hợp.'});return o;}

const napAm=y=>{const i=NA_IDX[yearCan(y)+'-'+CHI[yearChiI(y)]];return{hanh:NAP_AM[i],ten:NA_TEN[i]};};
function checkNapAm(y1,y2){const a=napAm(y1),b=napAm(y2),base=`Nam <b>${a.ten}</b> (${a.hanh}) · Nữ <b>${b.ten}</b> (${b.hanh}). `;
  if(SINH_H[a.hanh]===b.hanh||SINH_H[b.hanh]===a.hanh)return{v:'good',t:G('Tương sinh','nạp âm'),why:base};
  if(KHAC_H[a.hanh]===b.hanh||KHAC_H[b.hanh]===a.hanh)return{v:'bad',t:G('Tương khắc','nạp âm'),why:base};
  return{v:'mid',t:G('Bình hòa','nạp âm'),why:base};}
const QUAI={1:'Khảm',2:'Khôn',3:'Chấn',4:'Tốn',6:'Càn',7:'Đoài',8:'Cấn',9:'Ly'},DONG_TU=['Khảm','Ly','Chấn','Tốn'];
const red=x=>{while(x>9)x=String(x).split('').reduce((a,b)=>a+ +b,0);return x;};
function cungPhi(y,sex){const s=red(String(y).slice(-2).split('').reduce((a,b)=>a+ +b,0));let n=sex==='nam'?(y<2000?10:9)-s:s+(y<2000?5:6);while(n>9)n-=9;if(n<=0)n+=9;return n===5?(sex==='nam'?'Khôn':'Cấn'):QUAI[n];}
function checkCungPhi(yB,yG){const b=cungPhi(yB,'nu'),g=cungPhi(yG,'nam'),same=(DONG_TU.includes(b))===(DONG_TU.includes(g));
  return{v:same?'good':'mid',t:G('Bát trạch','cung phi'),why:`Nam <b>${g}</b> · Nữ <b>${b}</b>. `+(same?'Cùng nhóm Đông/Tây tứ mệnh, rất tốt.':'Khác nhóm, cần dùng hướng bếp/giường dung hòa.')};}
function kimLau(yB,yL){const t=yL-yB+1,du=t%9,L={1:'Thân',3:'Thê',6:'Tử',8:'Lục Súc'};return{tuoiMu:t,du,pham:!!L[du],loai:L[du]||null};}
function tamTai(c,yL){const g=TAM_HOP.find(x=>x.includes(c)),nam=TAM_TAI_MAP[g.join(',')],cy=yearChiI(yL);return nam.includes(cy)?{pham:true,thu:nam.indexOf(cy)+1}:{pham:false};}

const TRUC=['Kiến','Trừ','Mãn','Bình','Định','Chấp','Phá','Nguy','Thành','Thu','Khai','Bế'];
const HOANG=[1,2,4,5,8,10];
const TAM_NUONG=[3,7,13,18,22,27],NGUYET_KY=[5,14,23],DUONG_CONG={1:[13],2:[11],3:[9],4:[7],5:[5],6:[3],7:[1,29],8:[27],9:[25],10:[23],11:[21],12:[19]};
const trucIdx=(m,dc)=>m12(dc-(m+1));
function xetNgay(d,m,y,ctx){const L=solar2Lunar(d,m,y),dc=dayChiIdx(d,m,y),can=CAN[dayCanIdx(d,m,y)];
  const ti=trucIdx(L.month,dc),truc=TRUC[ti],hoang=HOANG.includes(ti);const xau=[];
  if(!hoang)xau.push(`hắc đạo (${truc})`);if(TAM_NUONG.includes(L.day))xau.push('tam nương');
  if(NGUYET_KY.includes(L.day))xau.push('nguyệt kỵ');if((DUONG_CONG[L.month]||[]).includes(L.day))xau.push('Dương Công kỵ');
  if(m12(dc-ctx.cB)===6)xau.push(`xung ${CHI[ctx.cB]}`);if(m12(dc-ctx.cG)===6)xau.push(`xung ${CHI[ctx.cG]}`);
  const gio=[];
  const hdBase=m12((dc-2)*2);
  for(let h=0;h<12;h++){if([0,1,4,5,7,10].includes(m12(h-hdBase)))gio.push(CHI[h]);}
  return{d,m,y,L,can,chi:CHI[dc],truc,hoang,xau,gio,tot:xau.length===0};}


function luanDaiVan(K){
  if(K.daiVanCung<0)return'<div class="phan-box"><b>☳ ĐẠI VẬN</b><br><br>Chưa vào Đại Vận đầu tiên.</div>';
  const p=K.daiVanCung,cn=CUNG12[m12(p-K.menh)];
  const ch=Object.keys(K.S).filter(s=>K.S[s]===p),pu=Object.keys(K.P).filter(s=>K.P[s]===p);
  let t=`Đương số <b>${K.lunarAge} tuổi</b> (âm), đang đi <b>Đại Vận cung ${cn}</b> (${K.canCung(p)} ${CHI[p]}), từ ${K.daiVanStart}–${K.daiVanStart+9} tuổi.<br><br>`;
  if(ch.length) t+=`Chính tinh quản vận: <b>${ch.join(' và ')}</b>. Thời kỳ năng lượng hội tụ vào tính chất của các vì sao này. `;
  else t+='Đại Vận vô chính diệu, vận trình uyển chuyển, phụ thuộc ngoại cảnh và sự xoay chuyển linh hoạt rất nhiều. ';
  
  const kyDV=ch.concat(pu).filter(s=>K.HOA[s]==='ky');
  if(kyDV.length)t+=`<br><br><b class="bad">⚠ Đại Vận có Hóa Kỵ</b> (${kyDV.join(', ')}). Thời vận trắc trở, làm gì cũng phải kín kẽ đề phòng.`;
  const satDV=pu.filter(s=>SAT_LIST.includes(s));
  if(satDV.length)t+=`<br><br><b>Thử thách sát tinh:</b> ${satDV.join(', ')}. Giai đoạn mài giũa bản lĩnh cực độ, có thể bạo phát bạo tàn.`;
  const catDV=pu.filter(s=>['Tả Phụ','Hữu Bật','Văn Xương','Văn Khúc','Thiên Khôi','Thiên Việt','Lộc Tồn'].includes(s));
  if(catDV.length)t+=`<br><br><span class="good"><b>Quý nhân phò tá:</b> Hội tụ ${catDV.join(', ')}.</span> Giúp đương số vượt qua sóng gió, đơm hoa kết trái.`;
  
  if(K.daiVanCan){
    const[lo,qu,kh,ky]=TU_HOA[K.daiVanCan];
    t+=`<br><br><b>Tứ Hóa Đại Vận</b> (can ${K.daiVanCan}): Phi ${lo} Hóa Lộc, ${qu} Hóa Quyền, ${kh} Hóa Khoa, và <b class="bad">phi ${ky} Hóa Kỵ</b>. `;
    const kyP=fsp(K,ky);
    if(kyP===K.menh)t+='<b class="bad">⚠ Chú ý: Hóa Kỵ Đại Vận phi thẳng về Mệnh!</b> Báo hiệu 10 năm nhiều sức ép tâm lý, thị phi vây quanh. ';
    else if(kyP===m12(K.menh+6))t+='<b class="bad">⚠ Hóa Kỵ Đại Vận phi về Thiên Di xung chiếu Mệnh!</b> Ra ngoài làm ăn cần hết sức đề phòng tiểu nhân hãm hại.';
  }
  return`<div class="phan-box"><h3 style="color:var(--gold);margin-top:0;font-size:18px;">☳ LUẬN ĐẠI VẬN HIỆN TẠI</h3>${t}</div>`;
}

function luanHanNam(K){
  const xY=K.LUU.nam,canX=CAN[((xY+6)%10+10)%10],[loNam,quNam,khNam,kyNam]=TU_HOA[canX];
  const kyNamPos=fsp(K,kyNam),diPos=m12(K.menh+6);
  const factors=[];
  if(kyNamPos===K.menh)factors.push({txt:`<b>${kyNam}</b> Hóa Kỵ năm nay phi trúng <b>cung Mệnh</b>.`, detail:'Hóa Kỵ đáp thẳng vào Mệnh nghĩa là năm nay đương số dễ gặp chuyện buồn phiền, áp lực tinh thần lớn, công việc trục trặc, sức khỏe suy giảm. Cần hết sức bình tĩnh, tránh quyết định lớn khi tâm trạng bất ổn.'});
  else if(kyNamPos===diPos)factors.push({txt:`<b>${kyNam}</b> Hóa Kỵ tọa Thiên Di, <b>xung chiếu về Mệnh</b>.`, detail:'Kỵ tọa Thiên Di xung Mệnh cho thấy rắc rối đến từ bên ngoài: đối tác làm ăn, khách hàng, hoặc môi trường xung quanh gây bất lợi. Ra ngoài đi lại cẩn thận, đề phòng tiểu nhân sau lưng.'});
  if(K.daiVanCung>=0){const chD=Object.keys(K.S).filter(s=>K.S[s]===K.daiVanCung),puD=Object.keys(K.P).filter(s=>K.P[s]===K.daiVanCung);
    const kyDV=chD.concat(puD).filter(s=>K.HOA[s]==='ky');
    if(kyDV.length)factors.push({txt:`Gốc Đại Vận có <b>${kyDV.join(', ')}</b> Hóa Kỵ án ngữ.`, detail:'Hóa Kỵ nằm sẵn trong Đại Vận (chu kỳ 10 năm) giống như một vết thương cũ chưa lành. Năm nào gặp thêm lưu niên xấu thì vết thương bùng phát, năm tốt thì âm ỉ không đáng ngại.'});}
  const kkM=['Địa Không','Địa Kiếp'].filter(s=>K.P[s]===K.menh||K.P[s]===K.than);
  if(kkM.length&&K.daiVanCung>=0){const chD=Object.keys(K.S).filter(s=>K.S[s]===K.daiVanCung).concat(Object.keys(K.P).filter(s=>K.P[s]===K.daiVanCung));
    if(chD.some(s=>K.HOA[s]==='ky'))factors.push({txt:`Mệnh/Thân ôm Sát tinh Không Kiếp, lại đang đi qua Đại Vận Hóa Kỵ.`, detail:'Địa Không, Địa Kiếp là hai sao phá tán tiền bạc. Khi gặp Hóa Kỵ trong Đại Vận, tài chính dễ biến động mạnh: đầu tư thua lỗ, bị lừa đảo, mất tiền bất ngờ. Tuyệt đối không cho vay, không bảo lãnh, không đầu cơ.'});}
  if(K.daiVanCan){const[,,,kyDVC]=TU_HOA[K.daiVanCan],kyDVCP=fsp(K,kyDVC);
    if(kyDVCP===K.menh&&kyNamPos!==K.menh)factors.push({txt:`Can Đại Vận (${K.daiVanCan}) phi <b>${kyDVC}</b> Hóa Kỵ về Mệnh.`, detail:'Đại Vận tự phóng thêm một tia Kỵ nữa vào Mệnh, tạo thành "song Kỵ giáp công". Đương số như bị tấn công từ hai phía, áp lực gấp đôi, cần đặc biệt cẩn trọng sức khỏe và pháp lý.'});}
  const satM=SAT_LIST.filter(s=>K.P[s]===K.menh);
  if(satM.length){const thP=K.LUU.tieuHan,chTH=Object.keys(K.S).filter(s=>K.S[s]===thP).concat(Object.keys(K.P).filter(s=>K.P[s]===thP));
    if(chTH.some(s=>K.HOA[s]==='ky'||K.LUU.hoa[s]==='ky'))factors.push({txt:`Mệnh có bầy Sát tinh, Tiểu Hạn năm nay lại đụng Hóa Kỵ.`, detail:'Sát tinh (Kình Dương, Đà La, Hỏa Tinh, Linh Tinh, Không Kiếp) vốn đã hung dữ, nay lại bị Kỵ kích hoạt như đổ thêm dầu vào lửa. Nguy cơ tai nạn, bệnh tật, kiện tụng tăng cao.'});}
  const satTh=SAT_LIST.filter(s=>K.P[s]===K.than),hkTh=['Thiên Hình','Thiên Không'].filter(s=>K.P[s]===K.than);
  if(satTh.length&&hkTh.length)factors.push({txt:`Thân có ${satTh.join(', ')} kèm ${hkTh.join(', ')}, năm Kỵ dễ kích phát tai ương.`, detail:'Thiên Hình chủ hình phạt, Thiên Không chủ trống rỗng. Kết hợp sát tinh ở cung Thân (phản ánh hành động thực tế), đương số dễ hành xử bốc đồng rồi phải gánh hậu quả nặng nề.'});
  const tamHopM=[K.menh,m12(K.menh+4),m12(K.menh+8),m12(K.menh+6)];
  const rescues=[];const hoaLQK=[];
  Object.keys(K.HOA).forEach(s=>{const h=K.HOA[s],pos=fsp(K,s);
    if((h==='loc'||h==='quyen'||h==='khoa')&&tamHopM.includes(pos))hoaLQK.push(`${s} Hóa ${{loc:'Lộc',quyen:'Quyền',khoa:'Khoa'}[h]}`);});
  if(hoaLQK.length>=2)rescues.push(hoaLQK.join(', ')+' hội chiếu');
  if(tamHopM.includes(K.P['Thiên Khôi']))rescues.push('Thiên Khôi chiếu');
  if(tamHopM.includes(K.P['Thiên Việt']))rescues.push('Thiên Việt chiếu');
  
  // Tieu Han analysis
  const thP=K.LUU.tieuHan, thCung=CUNG12[m12(thP-K.menh)];
  const chTH=Object.keys(K.S).filter(s=>K.S[s]===thP);
  
  let t=`<p><b>Năm ${yearName(xY)}</b> (Can ${canX}), đương số ${K.lunarAge} tuổi âm.</p>`;
  t+=`<p><b>Tứ Hóa Lưu Niên:</b> Năm nay Can ${canX} tung ra 4 tia năng lượng: <span class="good">${loNam} Hóa Lộc</span> (tiền bạc, may mắn) · <span class="good">${quNam} Hóa Quyền</span> (quyền lực, thăng tiến) · <span class="good">${khNam} Hóa Khoa</span> (danh tiếng, thi cử) · <span class="bad">${kyNam} Hóa Kỵ</span> (trắc trở, thị phi). Trong đó, Hóa Kỵ là yếu tố nguy hiểm nhất cần đặc biệt chú ý.</p>`;
  
  t+=`<p><b>Tiểu Hạn năm nay:</b> Rơi vào cung <b>${thCung}</b> (${CHI[thP]}). `;
  if(chTH.length) t+=`Có sự cai quản của ${chTH.join(' và ')}, `;
  t+=`chi phối trực tiếp vận may rủi trong 12 tháng tới.</p>`;

  if(!factors.length){
    t+=`<p><span class="good"><b>✓ KẾT QUẢ: AN TOÀN</b></span></p>`;
    t+=`<p>Không phát hiện tổ hợp Hóa Kỵ nguy hiểm nào bủa vây Mệnh. Năm nay vận trình khá thuận lợi, êm ả. Đương số có thể tự tin triển khai các kế hoạch lớn: đầu tư, mua nhà, chuyển việc, lập gia đình đều hanh thông.</p>`;
    t+=`<p><b>Lời khuyên:</b> Tận dụng tối đa vận may, chủ động nắm bắt cơ hội. Đặc biệt chú ý các tháng có Lộc Tồn và Thiên Mã lưu niên đi qua cung Mệnh hoặc Tài Bạch, đó là thời điểm vàng để bứt phá tài chính.</p>`;
  } else {
    t+=`<p><b class="bad">⚠ CẢNH BÁO: Phát hiện ${factors.length} yếu tố Kỵ/Sát kích hoạt</b></p>`;
    factors.forEach(f=>{
      t+=`<p style="margin-left:15px;padding:8px;background:rgba(168,62,53,.05);border-left:2px solid var(--cinnabar);margin-bottom:8px"><span class="bad">✗</span> ${f.txt}<br><i style="color:#999;font-size:14px">${f.detail}</i></p>`;
    });
    
    if(factors.length===1) t+=`<p><b>Tổng đánh giá:</b> Mức độ <b style="color:var(--amber)">CẢNH GIÁC NHẸ</b>. Năm nay có lúc vất vả, đau đầu nhưng tựu chung vẫn nằm trong tầm kiểm soát. Chỉ cần tỉnh táo trong giai đoạn tháng 3, 6, 9 âm lịch (đó thường là thời điểm Kỵ bùng phát mạnh nhất).</p>`;
    else if(factors.length<=3) t+=`<p><b>Tổng đánh giá:</b> Mức độ <b class="bad">CẨN TRỌNG</b>. Chồng ${factors.length} tầng Kỵ/Sát cảnh báo một năm nhiều sóng gió. Đương số cần: (1) Hạn chế đầu tư mạo hiểm, (2) Chú ý sức khỏe, khám định kỳ, (3) Tránh kiện tụng tranh chấp, (4) Không cho vay số lớn, không bảo lãnh ai.</p>`;
    else t+=`<p><b>Tổng đánh giá:</b> Mức độ <b class="bad">LƯU Ý ĐẶC BIỆT</b> Chồng ${factors.length} tầng Kỵ Sát. Đây là năm nhiều thử thách. Đương số phải: (1) Thu mình, không khởi sự gì mới, (2) Hạn chế di chuyển xa, (3) Kiểm tra sức khỏe toàn diện, (4) Nên tĩnh tâm, hành thiện tích đức, không mạo hiểm, (5) Tuyệt đối không mạo hiểm tài chính.</p>`;
    
    if(rescues.length){
      t+=`<p><span class="good"><b>✓ Đường giải cứu:</b></span> ${rescues.join('; ')}. Tuy trong hung vẫn có cánh cửa thoát hiểm. Đương số nên bám vào các lĩnh vực có Hóa Lộc, Hóa Khoa chiếu để tìm đường sáng. `;
      if(hoaLQK.length>=3)t+=`<b class="good">Đặc biệt: Đủ Tam Hóa Khoa-Quyền-Lộc hội tụ, sức cứu giải vô cùng mạnh mẽ! Phùng hung hóa cát, lội ngược dòng ngoạn mục.</b>`;
      t+=`</p>`;
    } else if(factors.length>=2) {
      t+=`<p><span class="bad">Không tìm thấy tổ hợp Cát tinh đủ mạnh hội chiếu Mệnh để hóa giải.</span> Đương số bắt buộc phải chủ động phòng ngừa, giảm thiểu rủi ro bằng hành động thực tế, không thể trông chờ vào may mắn.</p>`;
    }
  }
  return`<div class="phan-box"><h3 style="color:var(--gold);margin-top:0;font-size:18px;">☵ XEM HẠN NĂM ${xY}</h3>${t}<div style="margin:20px 0;padding:15px;background:rgba(196,162,101,0.1);border:1px dashed var(--gold);border-radius:4px;text-align:center;"><h4 style="color:var(--gold);margin-bottom:10px;font-size:16px;">🔍 XUẤT BẢN FULL PDF & TƯ VẤN CHUYÊN SÂU</h4><p style="font-size:15px;margin-bottom:10px;">Bản miễn phí chỉ phản ánh 70% bức tranh tổng thể. Hãy mở khóa Báo Cáo VIP (15 trang) để xem chi tiết từng năm, hoặc đặt lịch tư vấn 1-1 đả thông bế tắc.</p><button onclick="document.getElementById(\'paymentModal\').style.display=\'flex\'" style="display:inline-block;background:var(--gold);color:#000;border:none;padding:10px 16px;text-decoration:none;font-weight:bold;margin-right:10px;border-radius:4px;font-size:14px;margin-bottom:5px;cursor:pointer;">🔓 Mở Khóa Báo Cáo VIP (50k)</button><a href="https://www.facebook.com/groups/1451929442272843" target="_blank" style="display:inline-block;background:transparent;color:var(--gold);border:1px solid var(--gold);padding:9px 16px;text-decoration:none;font-weight:bold;border-radius:4px;font-size:14px;margin-bottom:5px;">👥 Tham gia Group Tử Vi</a></div></div>`;
}

const GRID=[5,6,7,8,4,null,null,9,3,null,null,10,2,1,0,11];
let SEL=null;