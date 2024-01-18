const blobs = document.querySelectorAll(".blob");

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const updateBlobPosition = () => {
  blobs.forEach((blob) => {
    blob.style.setProperty("--position-x", `${getRandomNumber(1, 100)}vw`);
    blob.style.setProperty("--position-y", `${getRandomNumber(1, 20)}vh`);
  });
};

const updateBlobMovement = () => {
  blobs.forEach((blob) => {
    blob.style.setProperty("--animate-to-y", `${getRandomNumber(1, 50)}vh`);
    blob.style.setProperty("--animate-to-x", `${getRandomNumber(1, 100)}vw`);
  });
};

updateBlobPosition();

setInterval(updateBlobMovement, 20000);
