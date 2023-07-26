// JavaScript (gallery.js)
document.addEventListener('DOMContentLoaded', function () {
    const thumbnails = document.querySelectorAll('#thumbnails img');
    const featuredImage = document.querySelector('#featuredImage img');
    const caption = document.querySelector('#featuredImage figcaption');
  
    thumbnails.forEach(function (thumbnail) {
      thumbnail.addEventListener('click', function () {
        // Change the featured image and caption
        featuredImage.src = thumbnail.src.replace('-small', '-large');
        caption.textContent = thumbnail.alt;
  
        // Change the background color to a random color
        const randomColor = getRandomColor();
        document.querySelector('#gallery').style.background = randomColor;
      });
    });
  
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  });
  