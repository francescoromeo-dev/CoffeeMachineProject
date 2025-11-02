//SCRIPT PER IL FORM DI REGISTRAZIONE

function togglePassword(fieldId) {
    const passwordInput = document.getElementById(fieldId);
    const toggleButtons = document.querySelectorAll('.password-toggle');
    const toggle = passwordInput.nextElementSibling;

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggle.textContent = '🙈';
    } else {
        passwordInput.type = 'password';
        toggle.textContent = '👁️';
    }
}

// Password strength checker
const passwordInput = document.getElementById('password');
const strengthBar = document.getElementById('strengthBar');
const strengthText = document.getElementById('strengthText');

passwordInput.addEventListener('input', function () {
    const password = this.value;
    const strength = calculatePasswordStrength(password);

    strengthBar.className = 'strength-fill';

    if (password.length === 0) {
        strengthText.textContent = '';
        return;
    }

    if (strength < 3) {
        strengthBar.classList.add('strength-weak');
        strengthText.textContent = 'Debole';
        strengthText.style.color = '#ff4757';
    } else if (strength < 5) {
        strengthBar.classList.add('strength-medium');
        strengthText.textContent = 'Media';
        strengthText.style.color = '#ffa502';
    } else {
        strengthBar.classList.add('strength-strong');
        strengthText.textContent = 'Forte';
        strengthText.style.color = '#26de81';
    }
});

function calculatePasswordStrength(password) {
    let strength = 0;

    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;

    return strength;
}

// Form validation
document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const terms = document.getElementById('terms').checked;

    if (password !== confirmPassword) {
        alert('Le password non coincidono!');
        return;
    }

    if (!terms) {
        alert('Devi accettare i termini e condizioni!');
        return;
    }

    if (password.length < 8) {
        alert('La password deve essere di almeno 8 caratteri!');
        return;
    }

    alert('Registrazione completata! Qui andresti ad implementare la logica di registrazione.');
});