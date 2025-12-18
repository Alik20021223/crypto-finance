// ===== FOOTER LOADER =====

/**
 * Загружает footer из отдельного файла и вставляет его в конец body
 * Используется для модульности кода
 */
async function loadFooter() {
  try {
    const response = await fetch('./components/footer.html');
    if (!response.ok) {
      console.error('Не удалось загрузить footer');
      return;
    }
    const footerHTML = await response.text();
    const footerContainer = document.getElementById('footerContainer');
    if (footerContainer) {
      footerContainer.innerHTML = footerHTML;
    } else {
      document.body.insertAdjacentHTML('beforeend', footerHTML);
    }
  } catch (error) {
    console.error('Ошибка при загрузке footer:', error);
  }
}

// Загружаем footer при загрузке DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadFooter);
} else {
  loadFooter();
}

