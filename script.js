//mobile navigation

const mobileMenuButton = document.querySelector(".mobile-nav-btn");
const mobileNavigation = document.querySelector(".nav-list");
const navigationLinks = mobileNavigation.querySelectorAll("li");
const staggerItems = document.querySelectorAll(".stagger-item");

window.onload = () => {
  staggerItemsIn(staggerItems);
};

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
    mobileMenuButton.setDirection(1);
    mobileMenuButton.play();
    setTimeout(() => {
      staggerItemsIn(navigationLinks);
    }, 500);
    openNavigation(mobileNavigation);
  } else {
    mobileMenuButton.setDirection(-1);
    mobileMenuButton.play();
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
