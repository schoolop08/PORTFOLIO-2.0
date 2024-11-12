// Select the checkbox input
const themeCheckbox = document.getElementById('checkbox');
themeCheckbox.checked = true;
themeCheckbox.addEventListener('change', () => {
    document.documentElement.classList.toggle('light-theme', !themeCheckbox.checked);
});
