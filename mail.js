const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  console.log("email sent");
});

window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};
