import React from 'react'
import ReactDOM from 'react-dom/client'

document.addEventListener('DOMContentLoaded', () => {
  // 绑定赞助按钮点击事件
  // 绑定导航栏赞助按钮和CTA赞助按钮
document.querySelectorAll('a[href="/pricing?tab=vip"], .btn.secondary').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.modal-mask').style.display = 'flex';
  });
});

  // 关闭按钮事件
  document.querySelector('.close-btn').addEventListener('click', () => {
    document.querySelector('.modal-mask').style.display = 'none';
  });

  // 点击蒙层关闭
  document.querySelector('.modal-mask').addEventListener('click', (e) => {
    if(e.target === document.querySelector('.modal-mask')) {
      document.querySelector('.modal-mask').style.display = 'none';
    }
  });
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 保留React根组件 */}
  </React.StrictMode>
)