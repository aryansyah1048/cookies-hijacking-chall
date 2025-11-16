document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Set cookie default
  document.cookie = "admin=Salah; path=/;";

  // Arahkan ke dashboard
  window.location.href = "dashboard.html";
});
