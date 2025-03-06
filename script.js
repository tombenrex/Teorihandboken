const backToTopButton = document.getElementById("backToTop");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

// Show floating buttons when user scrolls down 200px
window.onscroll = function () {
  if (document.documentElement.scrollTop > 200) {
    backToTopButton.style.display = "block";
    menuToggle.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
    menuToggle.style.display = "none";
    navMenu.style.display = "none"; // Hide menu when scrolling up
  }
};

// Toggle Navigation Menu
menuToggle.addEventListener("click", function () {
  navMenu.style.display = navMenu.style.display === "block" ? "none" : "block";
});

// Smooth scroll to top when "Back to Top" button is clicked
backToTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
