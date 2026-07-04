// ربط عناصر الواجهة بمتغيرات الجافا سكريبت
const themeColorInput = document.getElementById('theme-color');
const textInput = document.getElementById('text-input');
const demoButton = document.getElementById('demo-button');

// الاستماع لتغيير اللون وتطبيقه حياً
themeColorInput.addEventListener('input', (event) => {
    const selectedColor = event.target.value;
    demoButton.style.backgroundColor = selectedColor;
});

// الاستماع لتغيير النص وتطبيقه حياً
textInput.addEventListener('input', (event) => {
    const newText = event.target.value;
    demoButton.textContent = newText || 'زر تفاعلي';
});
