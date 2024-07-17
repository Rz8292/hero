"use strict";

document.querySelectorAll(".navbar .btn").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document
      .querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelector(".send").addEventListener("click", function () {
  location.reload();

  setTimeout(function () {
    window.location.href = "/";
  }, 1000);
});