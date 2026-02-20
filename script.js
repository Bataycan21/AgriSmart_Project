// Shared JavaScript for AgriSmart pages

document.addEventListener("DOMContentLoaded", () => {
  // Handle Time In/Out buttons
  const timeInBtn = document.getElementById("timeInBtn");
  const timeOutBtn = document.getElementById("timeOutBtn");

  if (timeInBtn) {
    timeInBtn.addEventListener("click", () => {
      alert("Time In logged successfully!");
      // Example: update DOM
      const timeInDisplay = document.querySelector(".main-content p strong");
      if (timeInDisplay) {
        timeInDisplay.textContent = "Timed In: " + new Date().toLocaleTimeString();
      }
    });
  }

  if (timeOutBtn) {
    timeOutBtn.addEventListener("click", () => {
      alert("Time Out logged successfully!");
      // Example: update DOM
      const timeOutDisplay = document.querySelector(".main-content p:nth-of-type(2) strong");
      if (timeOutDisplay) {
        timeOutDisplay.textContent = "Time Out: " + new Date().toLocaleTimeString();
      }
    });
  }

  // Handle task completion toggle
  const tasks = document.querySelectorAll(".main-content ul li");
  tasks.forEach(task => {
    task.addEventListener("click", () => {
      task.classList.toggle("completed");
      if (task.classList.contains("completed")) {
        alert(`Task "${task.textContent}" marked as completed.`);
      } else {
        alert(`Task "${task.textContent}" marked as pending.`);
      }
    });
  });

  // Handle E-Learning course buttons
  const courseButtons = document.querySelectorAll(".course .btn");
  courseButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      alert(`Course action: ${btn.textContent}`);
    });
  });

  // Optional: highlight active sidebar link
  const links = document.querySelectorAll(".sidebar a");
  links.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });
});
