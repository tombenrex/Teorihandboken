//Tagit hjälp av GPT
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
  navMenu.style.display = "none";
};

menuToggle.addEventListener("click", function () {
  navMenu.style.display = navMenu.style.display === "block" ? "none" : "block";
});

backToTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Skrivit själv
function loadIndex() {
  const indexMenu = document.getElementById("index-menu");
  const navLinks = document.querySelectorAll("#navMenu a");
  navLinks.forEach((link) => {
    const indexP = document.createElement("li");
    indexP.innerHTML = `<a href="${link.href}">${link.textContent}</a>`;
    indexMenu.append(indexP);
  });
}

loadIndex();
