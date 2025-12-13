const banner = document.getElementById("cookieBanner");
const btn = document.getElementById("acceptCookies");

// Проверяем, принимал ли пользователь cookie раньше
if (localStorage.getItem("cookiesAccepted")) {
  banner.style.display = "none";
}

btn.addEventListener("click", () => {
  localStorage.setItem("cookiesAccepted", "true");
  banner.style.display = "none";
});
