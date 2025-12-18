// ===== HEADER LOADER =====

/**
 * Загружает header из отдельного файла и вставляет его в начало body
 * Используется для модульности кода
 */
async function loadHeader() {
  try {
    const response = await fetch('./components/header.html');
    if (!response.ok) {
      console.error('Не удалось загрузить header');
      return;
    }
    const headerHTML = await response.text();
    const headerElement = document.querySelector('header');
    if (headerElement) {
      headerElement.outerHTML = headerHTML;
    } else {
      document.body.insertAdjacentHTML('afterbegin', headerHTML);
    }
  } catch (error) {
    console.error('Ошибка при загрузке header:', error);
  }
}

// Загружаем header при загрузке DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadHeader);
} else {
  loadHeader();
}

