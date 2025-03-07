const backToTopButton = document.getElementById("backToTop");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 200) {
    backToTopButton.style.display = "block";
    menuToggle.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
    menuToggle.style.display = "none";
    navMenu.style.display = "none";
  }
};

menuToggle.addEventListener("click", function () {
  navMenu.style.display = navMenu.style.display === "block" ? "none" : "block";
});

backToTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
