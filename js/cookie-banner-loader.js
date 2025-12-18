// ===== COOKIE BANNER LOADER =====

/**
 * Загружает cookie banner из отдельного файла и вставляет его в конец body
 * Используется для модульности кода
 */
async function loadCookieBanner() {
  try {
    // Проверяем, не было ли уже принято согласие
    if (localStorage.getItem("cookiesAccepted")) {
      return; // Не загружаем banner, если согласие уже дано
    }

    const response = await fetch('./components/cookie-banner.html');
    if (!response.ok) {
      console.error('Не удалось загрузить cookie banner');
      return;
    }
    const bannerHTML = await response.text();
    const container = document.getElementById('cookieBannerContainer');
    if (container) {
      container.innerHTML = bannerHTML;
      
      // Инициализируем обработчик после загрузки
      const banner = document.getElementById("cookieBanner");
      const btn = document.getElementById("acceptCookies");
      if (banner && btn) {
        btn.addEventListener("click", () => {
          localStorage.setItem("cookiesAccepted", "true");
          banner.style.display = "none";
        });
      }
    } else {
      document.body.insertAdjacentHTML('beforeend', bannerHTML);
      
      // Инициализируем обработчик после загрузки
      const banner = document.getElementById("cookieBanner");
      const btn = document.getElementById("acceptCookies");
      if (banner && btn) {
        btn.addEventListener("click", () => {
          localStorage.setItem("cookiesAccepted", "true");
          banner.style.display = "none";
        });
      }
    }
  } catch (error) {
    console.error('Ошибка при загрузке cookie banner:', error);
  }
}

// Загружаем cookie banner при загрузке DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadCookieBanner);
} else {
  loadCookieBanner();
}

