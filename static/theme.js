const toggleBtn = document.querySelector(".toggle");
const root = document.documentElement; // refers to <html>

// Load previously saved theme from localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
}

// Toggle between light and dark
toggleBtn.addEventListener("click", () => {
  const currentTheme = root.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  root.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme); // save user preference
});
