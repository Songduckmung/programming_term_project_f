// script.js

document.addEventListener('DOMContentLoaded', function() {
  const thumbnails = document.querySelectorAll('.thumbnail-container img');
  const mainImage = document.querySelector('.main-image');

  thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
          mainImage.src = this.src;
      });
  });

  const sizeButtons = document.querySelectorAll('.size-options .sizes button');
  sizeButtons.forEach(button => {
      button.addEventListener('click', function() {
          sizeButtons.forEach(btn => btn.classList.remove('selected'));
          this.classList.add('selected');
      });
  });
});
