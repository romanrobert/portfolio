gsap.registerPlugin(ScrollTrigger);

const splitTypes = document.querySelectorAll("h2");
const scrollBasedItems = document.querySelectorAll(".scroll-based-item");

splitTypes.forEach((char, i) => {
  const text = new SplitType(char, { types: "chars, words" });

  gsap.from(text.words, {
    scrollTrigger: {
      trigger: char,
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      markers: false,
    },
    opacity: 0.1,
    stagger: 0.1,
  });
});

scrollBasedItems.forEach((item, i) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top 70%",
      end: "top 10%",
      scrub: true,
      markers: false,
    },
    opacity: 0.1,
    y: -32,
    transformOrigin: "top",
    stagger: 0.1,
  });
});

const lenis = new Lenis();

lenis.on("scroll", (e) => {});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
