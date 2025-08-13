
// Small helpers for toasts & forms
document.addEventListener('DOMContentLoaded', () => {
  const yearSpans = document.querySelectorAll('[data-year]');
  yearSpans.forEach(s => s.textContent = new Date().getFullYear());

  const form = document.querySelector('#unsubscribeForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]');
      if (!email.value.trim()) return;
      const toastEl = document.getElementById('actionToast');
      if (toastEl) {
        const toast = new bootstrap.Toast(toastEl);
        toast.show();
      }
      // Simulate redirect to Thank You page
      setTimeout(() => {
        window.location.href = 'thank-you.html?reason=unsubscribe';
      }, 1200);
    });
  }
});
