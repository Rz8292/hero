document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  const form = document.getElementById("contactForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formMessage = document.getElementById("formMessage");

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (name === "" || email === "" || message === "") {
      formMessage.textContent = "Please fill in all required fields.";
      formMessage.style.color = "red";
      formMessage.style.display = "block";
      return;
    }

    formMessage.textContent =
      "Thank you for your message. I will get back to you soon.";
    formMessage.style.color = "green";
    formMessage.style.display = "block";
    form.reset();
  });
});
