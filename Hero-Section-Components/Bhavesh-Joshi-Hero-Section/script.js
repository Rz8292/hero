function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".btn").addEventListener("click", () => {
      window.open("https://github.com/bhaveshj2611/cyclus", "_blank");
  });
});