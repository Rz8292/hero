const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");

// Open Close Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
  burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("is-active");
    navbarMenu.classList.toggle("is-active");
  });
}

// Close Navbar Menu on Click Menu Links
document.querySelectorAll(".menu-link").forEach((link) => {
  link.addEventListener("click", () => {
    burgerMenu.classList.remove("is-active");
    navbarMenu.classList.remove("is-active");
  });
});

// Change Header Background on Scrolling
window.addEventListener("scroll", () => {
  if (this.scrollY >= 85) {
    headerMenu.classList.add("on-scroll");
  } else {
    headerMenu.classList.remove("on-scroll");
  }
});

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    if (navbarMenu.classList.contains("is-active")) {
      navbarMenu.classList.remove("is-active");
    }
  }
});

document.getElementById("theme-toggle").addEventListener("click", function () {
  const rootStyles = document.documentElement.style;
  const themeIcon = document.getElementById("theme-icon");

  const colorWhite = [
    "--color-white-100",
    "--color-white-200",
    "--color-white-300",
    "--color-white-400",
    "--color-white-500",
  ];

  const colorBlack = [
    "--color-black-100",
    "--color-black-200",
    "--color-black-300",
    "--color-black-400",
    "--color-black-500",
    "--color-black-600",
    "--color-black-700",
    "--color-black-800",
  ];

  colorWhite.forEach((color, index) => {
    const currentWhite = getComputedStyle(document.documentElement)
      .getPropertyValue(color)
      .trim();
    const currentBlack = getComputedStyle(document.documentElement)
      .getPropertyValue(colorBlack[index])
      .trim();
    rootStyles.setProperty(color, currentBlack);
    rootStyles.setProperty(colorBlack[index], currentWhite);
  });

  // Toggle red-600 and red-300 specifically
  const red600 = getComputedStyle(document.documentElement)
    .getPropertyValue("--color-red-500")
    .trim();
  const red400 = getComputedStyle(document.documentElement)
    .getPropertyValue("--color-red-300")
    .trim();
  rootStyles.setProperty("--color-red-500", red400);
  rootStyles.setProperty("--color-red-300", red600);


  // Toggle icon color class
  // Toggle icon between fa-moon and fa-sun
  if (themeIcon.classList.contains("fa-moon")) {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
      themeIcon.style.color = "var(--color-white-100)";
  } else {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
    themeIcon.style.color = "var(--color-black-800)";
  }
});
