/* ============================================
   BAGICHA — Registration Form (js/register.js)
   ============================================ */

function showFieldError(input, errorId, message) {
  input.classList.add('error');
  const errorEl = document.getElementById(errorId);
  if (errorEl) { errorEl.textContent = message; errorEl.classList.add('visible'); }
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registerForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    form.querySelectorAll('.form-group__input').forEach(input => input.classList.remove('error'));
    form.querySelectorAll('.form-group__error').forEach(err => err.classList.remove('visible'));

    const name = document.getElementById('regName');
    if (!name.value.trim()) { showFieldError(name, 'regNameError', 'Please enter your full name'); valid = false; }

    const email = document.getElementById('regEmail');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) { showFieldError(email, 'regEmailError', 'Please enter a valid email'); valid = false; }

    const phone = document.getElementById('regPhone');
    if (phone.value.trim().length < 10) { showFieldError(phone, 'regPhoneError', 'Please enter a valid phone number'); valid = false; }

    const password = document.getElementById('regPassword');
    if (password.value.length < 6) { showFieldError(password, 'regPasswordError', 'Password must be at least 6 characters'); valid = false; }

    const confirm = document.getElementById('regConfirmPassword');
    if (confirm.value !== password.value) { showFieldError(confirm, 'regConfirmError', 'Passwords do not match'); valid = false; }

    if (valid) {
      showToast('Registration successful! 🎉 Welcome to Bagicha!');
      form.reset();
      setTimeout(() => { window.location.href = 'index.html'; }, 2000);
    }
  });
});
