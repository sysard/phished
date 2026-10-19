document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");

  setTimeout(() => {
    const warning = document.getElementById("warning");

    warning.style.transition = "opacity 0.6s ease";
    warning.style.opacity = "0";

    setTimeout(() => {
      warning.remove();

      const content = document.getElementById("content");
      content.style.display = "block";

      const steps = document.querySelectorAll(".step");

      let delay = 0;

      steps.forEach((step) => {
        setTimeout(() => {
          step.classList.add("visible");

          step.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });

          // Show animated dots for trap images
          if (step.classList.contains("the-trap-image")) {
            const loader = document.createElement("div");
            loader.className = "waiting-loader";
            loader.textContent = "⏳";

            step.appendChild(loader);

            // Remove after 7 seconds
            setTimeout(() => {
              loader.remove();
            }, 7000);
          }
        }, delay);

        // Timing
        if (step.classList.contains("the-trap-image")) {
          delay += 7000;
        } else if (step.classList.contains("xfast")) {
          delay += 1500;
        } else {
          delay += 2600;
        }
      });

      document.body.style.overflow = "auto";
    }, 600);
  }, 1500);
});
