let chartInstance = null;

document.getElementById('btnLaso').addEventListener('click', () => {
    const name = document.getElementById('lName').value.trim() || 'Vô Danh';
    const dob = document.getElementById('lDob').value;
    const hour = parseInt(document.getElementById('lHour').value);
    
    if(!dob) { alert('Vui lòng nhập ngày sinh!'); return; }
    
    const [yy, mm, dd] = dob.split('-').map(Number);
    
    // Tính Ngũ Trụ
    const truList = calculateNguTru(dd, mm, yy, hour);
    const counts = countNguHanh(truList);
    const { khuyet, nhuoc } = analyzeKhuyet(counts);
    
    // Hiển thị Thông tin
    document.getElementById('user-info').innerHTML = `<b>${name}</b> - Ngày sinh: ${dd}/${mm}/${yy} (${hour}h)`;
    
    // Hiển thị Bảng Ngũ Trụ
    const tbody = document.getElementById('tru-table');
    tbody.innerHTML = '';
    truList.forEach(t => {
        const canColor = COLOR_NH[NH_CAN[t.can]];
        const chiColor = COLOR_NH[NH_CHI[t.chi]];
        tbody.innerHTML += `
            <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
                <td style="padding:8px;font-weight:bold;color:var(--dimmer);">${t.name}</td>
                <td style="padding:8px;color:${canColor};font-weight:bold;">${t.can} (${NH_CAN[t.can]})</td>
                <td style="padding:8px;color:${chiColor};font-weight:bold;">${t.chi} (${NH_CHI[t.chi]})</td>
            </tr>
        `;
    });
    
    // Vẽ Biểu Đồ
    const ctx = document.getElementById('nguHanhChart').getContext('2d');
    if (chartInstance) chartInstance.destroy();
    
    chartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Kim', 'Mộc', 'Thủy', 'Hỏa', 'Thổ'],
            datasets: [{
                label: 'Số lượng chữ',
                data: [counts['Kim'], counts['Mộc'], counts['Thủy'], counts['Hỏa'], counts['Thổ']],
                backgroundColor: 'rgba(196, 162, 101, 0.4)',
                borderColor: 'rgba(196, 162, 101, 1)',
                pointBackgroundColor: ['#D4AF37', '#4CAF50', '#2196F3', '#F44336', '#795548'],
                pointRadius: 6,
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: { color: 'rgba(255, 255, 255, 0.2)' },
                    grid: { color: 'rgba(255, 255, 255, 0.2)' },
                    pointLabels: { color: '#fff', font: { size: 14, weight: 'bold' } },
                    ticks: { display: false, min: 0, max: Math.max(...Object.values(counts)) + 1 }
                }
            },
            plugins: { legend: { display: false } }
        }
    });

    // Kết luận
    const resultDiv = document.getElementById('khuyet-result');
    let html = '';
    if (khuyet.length > 0) {
        html += `<h3 style="color:var(--cinnabar);margin-bottom:10px;">⚠️ BẢN MỆNH KHUYẾT: ${khuyet.join(', ')}</h3>`;
        khuyet.forEach(k => {
            html += `<p style="margin-bottom:8px;font-size:15px;color:#eee;">- ${MSG_KHUYET[k]}</p>`;
        });
    } else if (nhuoc.length > 0) {
        html += `<h3 style="color:var(--gold);margin-bottom:10px;">⚠️ BẢN MỆNH NHƯỢC: ${nhuoc.join(', ')}</h3>`;
        nhuoc.forEach(k => {
            html += `<p style="margin-bottom:8px;font-size:15px;color:#eee;">- ${MSG_KHUYET[k]}</p>`;
        });
    } else {
        html += `<h3 style="color:#4CAF50;margin-bottom:10px;">✅ BẢN MỆNH CÂN BẰNG</h3>
                 <p>Ngũ hành của bạn khá cân bằng, tuy nhiên vẫn có thể bổ sung năng lượng theo Dụng Thần.</p>`;
    }
    resultDiv.innerHTML = html;

    // Chuyển Tab
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelector('.tab[data-tab="ketqua"]').classList.add('active');
    document.getElementById('pane-nhap').classList.add('hide');
    document.getElementById('pane-ketqua').classList.remove('hide');
});

// Xử lý Tabs
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.dataset.tab;
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        ['nhap', 'ketqua'].forEach(id => {
            const pane = document.getElementById('pane-' + id);
            if(pane) {
                if(id === target) pane.classList.remove('hide');
                else pane.classList.add('hide');
            }
        });
    });
});

// Chụp ảnh
document.getElementById('btnDownload').addEventListener('click', () => {
    const btn = document.getElementById('btnDownload');
    const ogText = btn.innerHTML;
    btn.innerHTML = '⏳ Đang tạo ảnh...';
    
    html2canvas(document.getElementById('capture-area'), {
        backgroundColor: '#111',
        scale: 2,
        useCORS: true
    }).then(canvas => {
        btn.innerHTML = '✅ Đã tạo xong';
        setTimeout(() => btn.innerHTML = ogText, 2000);
        
        canvas.toBlob(blob => {
            const file = new File([blob], 'KhuyetMenh.png', {type: 'image/png'});
            if (navigator.canShare && navigator.canShare({ files: [file] })) {
                navigator.share({ files: [file], title: 'Ngũ Trụ Khuyết Mệnh' })
                .catch(e => fallback(blob));
            } else {
                fallback(blob);
            }
        }, 'image/png');
    }).catch(err => {
        btn.innerHTML = '❌ Lỗi';
        setTimeout(() => btn.innerHTML = ogText, 2000);
    });
});

function fallback(blob) {
    const link = document.createElement('a');
    link.download = 'NguTruKhuyetMenh.png';
    link.href = URL.createObjectURL(blob);
    link.click();
}
