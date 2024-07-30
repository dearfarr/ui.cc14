const translations = {
    ru: {
        title: "Выберите язык",
        buttonText: "Применить",
        feedbackText: "Язык изменен на Русский",
        modalMessage: "Добро пожаловать! Вы выбрали русский язык."
    },
    en: {
        title: "Choose Language",
        buttonText: "Apply",
        feedbackText: "Language changed to English",
        modalMessage: "Welcome! You selected English."
    }
};

// Загрузка сохраненного языка при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language') || 'ru';
    document.getElementById('languageSelect').value = savedLanguage;
    updateContent(savedLanguage);
});

document.getElementById('applyButton').addEventListener('click', function() {
    const selectedLanguage = document.getElementById('languageSelect').value;
    localStorage.setItem('language', selectedLanguage);
    updateContent(selectedLanguage);
    showModal(translations[selectedLanguage].modalMessage);
});

function updateContent(language) {
    document.getElementById('title').textContent = translations[language].title;
    document.getElementById('applyButton').textContent = translations[language].buttonText;
    document.getElementById('feedback').textContent = translations[language].feedbackText;
}

function showModal(message) {
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modalMessage');
    const closeModal = document.getElementById('closeModal');

    modalMessage.textContent = message;
    modal.style.display = "block";

    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}
