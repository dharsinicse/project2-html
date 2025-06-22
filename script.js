document.querySelectorAll('.buy').forEach(btn =>
  btn.onclick = () => {
    const title = btn.closest('.cart-item').querySelector('strong').innerText;
    alert(`Thank you for purchasing "${title}"!`);
  }
);
