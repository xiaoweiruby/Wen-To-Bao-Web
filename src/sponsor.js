// 获取DOM元素
const modalMask = document.querySelector('.modal-mask');
const closeBtn = document.querySelector('.close-btn');
const sponsorBtns = document.querySelectorAll('.btn.secondary');

// 打开弹窗
function openModal() {
  modalMask.classList.add('active');
}

// 关闭弹窗
function closeModal() {
  modalMask.classList.remove('active');
}

// 绑定事件监听器
sponsorBtns.forEach(btn => {
  btn.addEventListener('click', openModal);
});

closeBtn.addEventListener('click', closeModal);

// 点击遮罩层关闭弹窗
modalMask.addEventListener('click', (e) => {
  if (e.target === modalMask) {
    closeModal();
  }
});