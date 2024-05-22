function main() {
  const spanElement = document.getElementById('text');
  fetch('/api/hello')
    .then(response => response.text())
    .then(text => {
      spanElement.innerText = text;
    });
}

main();
