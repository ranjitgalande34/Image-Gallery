const displayedImg = document.getElementById('displayedImg');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');
const images = ['image1.webp', 'image2.webp', 'image3.webp', 'image4.jpeg', 'image5.jpeg', 'image6.jpeg', 'image7.jpeg'];
let currentIndex = 0;

function showImage(index) {
  if (index >= 0 && index < images.length) {
    displayedImg.style.opacity = 0; // Fade out
    setTimeout(() => {
      displayedImg.src = images[index];
      displayedImg.style.opacity = 1; // Fade in
    }, 300); // 1s delay for the fade effect

    currentIndex = index;
  }
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

// Initial load
displayedImg.src = images[currentIndex];
