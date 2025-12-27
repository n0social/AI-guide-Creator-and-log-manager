// popup.js - Receives data from background and displays guide generation UI

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const text = params.get('text') || '';
  const option = params.get('option') || '';
  if (text && option) {
    document.getElementById('selected-text').textContent = text;
    document.getElementById('selected-option').textContent = option;
    // You can add logic here to call your backend API and display the generated guide
  }
  document.getElementById('go-to-verbshift').addEventListener('click', () => {
    // Open login page with selected text and option as query params
    const url = `https://verbshift.app/login?topic=${encodeURIComponent(text)}&guideType=${encodeURIComponent(option)}`;
    window.open(url, '_blank');
  });
});
