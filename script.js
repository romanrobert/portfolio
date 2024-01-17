//Blob directions

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

const mobileMenuButton = document.querySelector(".mobile-nav-btn");
const mobileNavigation = document.querySelector(".nav-list");
const navigationLinks = mobileNavigation.querySelectorAll("li");

let windowWidth = window.innerWidth;

window.addEventListener("resize", () => {
  windowWidth = window.innerWidth;
  if (windowWidth > 560) {
    resetStyle(navigationLinks);
  }
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (windowWidth < 560) {
      staggerItemsOut(navigationLinks);
      closeNavigation(mobileNavigation);
    }
  });
});

mobileMenuButton.addEventListener("click", () => {
  if (mobileNavigation.style.opacity !== "1") {
    setTimeout(() => {
      staggerItemsIn(navigationLinks);
    }, 500);
    openNavigation(mobileNavigation);
  } else {
    staggerItemsOut(navigationLinks);
    closeNavigation(mobileNavigation);
  }
});

const staggerItemsIn = (items) => {
  items.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = "1";
      item.style.transform = "translateX(0rem)";
    }, index * 200);
  });
};

const staggerItemsOut = (items) => {
  items.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = "0";
      item.style.transform = "translateX(2rem)";
    }, index * 200);
  });
};

const openNavigation = (el) => {
  el.style.transform = "translateX(0)";
  el.style.opacity = "1";
};

const closeNavigation = (el) => {
  setTimeout(() => {
    el.style.transform = "";
    el.style.opacity = "";
  }, 750);
};

const resetStyle = (items) => {
  items.forEach((item) => {
    item.style.opacity = "";
    item.style.transform = "";
  });
};
