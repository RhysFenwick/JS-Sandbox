fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('site-header-container').innerHTML = data;
  });

