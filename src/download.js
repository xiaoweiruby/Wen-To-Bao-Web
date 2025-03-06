document.addEventListener('DOMContentLoaded', function() {
  const downloadBtn = document.getElementById('download-btn');
  const downloadModal = document.querySelector('.download-modal');
  const closeBtn = downloadModal.querySelector('.close-btn');

  // 点击下载按钮显示弹窗
  downloadBtn.addEventListener('click', function(e) {
    e.preventDefault();
    downloadModal.style.display = 'flex';
  });

  // 点击关闭按钮隐藏弹窗
  closeBtn.addEventListener('click', function() {
    downloadModal.style.display = 'none';
  });

  // 点击弹窗外部区域关闭弹窗
  downloadModal.addEventListener('click', function(e) {
    if (e.target === downloadModal) {
      downloadModal.style.display = 'none';
    }
  });
});