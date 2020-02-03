const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');

const opacity = .4;

// set First img opacity
imgs[0].style.opacity = opacity;

imgs.forEach(function(img){
  img.addEventListener('click', imgClick)
});

function imgClick(e) {

  // reset opacity
  imgs.forEach(function(img){
    return img.style.opacity = 1
  });

  // Change current image to src of clicked image
  current.src = e.target.src;
  
  // Add fade in class
  current.classList.add('fade-in');

  // Remove fade-in class after .5seconds
  setTimeout(function(){
    current.classList.remove('fade-in')
  },500);
  e.target.style.opacity = opacity 
}