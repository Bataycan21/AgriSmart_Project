document.addEventListener("DOMContentLoaded", () => {
  // LOGIN FORM HANDLER
  const loginForm = document.querySelector(".login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      localStorage.setItem("isLoggedIn", "true");
      // Example role check
      const email = loginForm.querySelector("input[type='email']").value;
      if (email.startsWith("admin@")) {
        localStorage.setItem("role", "admin");
        window.location.href = "dashboard.html"; // could be admin-dashboard.html
      } else {
        localStorage.setItem("role", "worker");
        window.location.href = "dashboard.html"; // could be worker-dashboard.html
      }
    });
  }

  // REGISTER FORM HANDLER
  const registerForm = document.querySelector(".register-form");
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Account created successfully! Redirecting to login...");
      window.location.href = "login.html";
    });
  }

  // SESSION CHECK FOR DASHBOARD PAGES
  const protectedPages = ["dashboard.html", "time-in-out.html", "tasks.html", "attendance.html", "elearning.html"];
  const currentPage = window.location.pathname.split("/").pop();

  if (protectedPages.includes(currentPage)) {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (!loggedIn) {
      alert("You must log in first!");
      window.location.href = "login.html";
    }
  }
});

// LOGOUT REDIRECT FUNCTION
function redirectLogin() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("role");
  window.location.href = "login.html";
}
