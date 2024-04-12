const main = document.querySelector('main');
const root = document.querySelector(':root');
const input = document.getElementById('input');
const resultInput = document.getElementById('result');
const copyButton = document.getElementById('copyToClipboard');

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "];

document.querySelectorAll('.charKey').forEach((charKeyBtn) => {
    charKeyBtn.addEventListener('click', () => {
        const value = charKeyBtn.dataset.value;
        input.value += value;
    })
})

document.getElementById('clear').addEventListener('click', () => {
    input.value = '';
    input.focus();

    resultInput.value = '';
    if(copyButton.innerText === 'Copied!') {
        copyButton.innerText = 'Copy';
        copyButton.classList.remove('success');
    }

    if(resultInput.classList.contains('error')) {
        resultInput.classList.remove('error');
    }
})

input.addEventListener('keydown', (ev) => {
    ev.preventDefault()
    if(allowedKeys.includes(ev.key)) {
        input.value += ev.key;
        return;
    }

    if(ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1);
    }
    if(ev.key === 'Enter') {
        calculate();
    }
})

document.getElementById('equal').addEventListener('click', calculate)

function calculate() {
    resultInput.value = 'ERROR';
    resultInput.classList.add('error');
    const result = eval(input.value);
    resultInput.value = result;
    resultInput.classList.remove('error');
}

copyButton.addEventListener('click', (ev) => {
    const button = ev.currentTarget;
    if(button.innerText === 'Copy') {
        button.innerText = 'Copied!';
        button.classList.add('success');
        navigator.clipboard.writeText(resultInput.value); //copiar o texto para área de transferência
    } else {
        button.innerText = 'Copy';
        button.classList.remove('success');
    }
})



document.getElementById('themeSwitcher').addEventListener('click', () => {
    if(main.dataset.theme === 'dark'){
        root.style.setProperty('--bg-color', '#f1f5f9');
        root.style.setProperty('--border-color', '#aaa');
        root.style.setProperty('--font-color', '#212529');
        root.style.setProperty('--primary-color', '#212529');
        main.dataset.theme = 'Light';
    } else {
        root.style.setProperty('--bg-color', '#151414');
        root.style.setProperty('--border-color', '#666');
        root.style.setProperty('--font-color', '#f1f5f9');
        root.style.setProperty('--primary-color', '#e5e5e5');
        main.dataset.theme = 'dark';
    }
})