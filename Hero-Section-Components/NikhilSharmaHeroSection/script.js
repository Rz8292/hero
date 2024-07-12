document.addEventListener("DOMContentLoaded", function () {
  const toggleModeButton = document.getElementById("toggleMode");
  const socialOverlay = document.getElementById("socialOverlay");
  const projectsOverlay = document.getElementById("projectsOverlay");
  const openSocialOverlayButton = document.getElementById("openSocialOverlay");
  const openProjectsOverlayButton = document.getElementById(
    "openProjectsOverlay"
  );
  const closeButtons = document.querySelectorAll(".close");

  toggleModeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });

  openSocialOverlayButton.addEventListener("click", function () {
    socialOverlay.style.display = "flex";
  });

  openProjectsOverlayButton.addEventListener("click", function () {
    projectsOverlay.style.display = "flex";
  });

  closeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      socialOverlay.style.display = "none";
      projectsOverlay.style.display = "none";
    });
  });
});
