// // Get all the images and overlays
// const images = document.querySelectorAll('.image');
// const overlays = document.querySelectorAll('.overlay');

// // Loop through each image and add a click event listener
// images.forEach((image, index) => {
//   image.addEventListener('click', () => {
//     // Show the overlay for the clicked image
//     overlays[index].style.display = 'block';
//   });
// });

// // Loop through each overlay and add a click event listener
// overlays.forEach((overlay, index) => {
//   overlay.addEventListener('click', () => {
//     // Hide the overlay for the clicked image
//     overlay.style.display = 'none';
//   });
// });
// Get all the images and overlays
// Get all the images and overlays
const images = document.querySelectorAll('.image');
const overlays = document.querySelectorAll('.overlay');

// Loop through each image and add a click event listener
images.forEach((image, index) => {
  image.addEventListener('click', () => {
    // Show the overlay for the clicked image
    overlays[index].style.display = 'flex';
    // Add the clicked image to the overlay
    const img = document.createElement('img');
    img.src = image.src.replace('small', 'large');
    overlays[index].appendChild(img);
    // Zoom the image
    img.addEventListener('click', () => {
      img.classList.toggle('zoomed');
    });
  });
});

// Loop through each overlay and add a click event listener
overlays.forEach((overlay, index) => {
  overlay.addEventListener('click', () => {
    // Hide the overlay for the clicked image
    overlay.style.display = 'none';
    // Remove the image from the overlay
    const img = overlay.querySelector('img');
    overlay.removeChild(img);
  });
});
