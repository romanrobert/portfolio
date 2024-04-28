const blob = document.querySelector(".blob");

window.addEventListener("mousemove", (e) => {
  var blobWidth = blob.offsetWidth;
  var blobHeight = blob.offsetHeight;
  let x = e.clientX - blobWidth / 2;
  let y = e.clientY - blobHeight / 2;

  setTimeout(() => {
    blob.style.left = `${x}px`;
    blob.style.top = `${y}px`;
  }, 100);
});

// const getRandomNumber = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// const updateBlobPosition = () => {
//   blobs.forEach((blob) => {
//     blob.style.setProperty("--position-x", `${getRandomNumber(1, 100)}vw`);
//     blob.style.setProperty("--position-y", `${getRandomNumber(1, 20)}vh`);
//   });
// };

// const updateBlobMovement = () => {
//   blobs.forEach((blob) => {
//     blob.style.setProperty("--animate-to-y", `${getRandomNumber(1, 50)}vh`);
//     blob.style.setProperty("--animate-to-x", `${getRandomNumber(1, 100)}vw`);
//   });
// };

// updateBlobPosition();

// setInterval(updateBlobMovement, 20000);
