document.addEventListener("DOMContentLoaded", () => {
  const now = new Date();
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit'
  };
  const el = document.getElementById("datetime");
  if (el) {
    el.textContent = now.toLocaleDateString('ko-KR', options);
  }
});
