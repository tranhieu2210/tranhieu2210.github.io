let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');
let aw1 = document.querySelector('.cart-total .btn');
let aw2 = document.querySelector('.order .btn')


document.querySelectorAll('.popular .box-container .box').forEach(box => {
  box.onclick = () => {
    preveiwContainer.style.display = 'flex';
    let name = box.getAttribute('data-name');
    previewBox.forEach(preview => {
      let target = preview.getAttribute('data-target');
      if (name == target) {
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close => {
  close.querySelector('.fa-times').onclick = () => {
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});

aw1.addEventListener('click', function () {
  alert("Đặt hàng thành công")
  window.location = '/project-restaurant/index.html';
})

aw2.addEventListener('click', function () {
  alert("Đặt hàng thành công")
  window.location = '/project-restaurant/index.html';
})