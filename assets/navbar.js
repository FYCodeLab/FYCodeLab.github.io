fetch("https://fycodelabs.github.io/assets/navbar.html")
  .then(response => response.text())
  .then(data => {
      document.getElementById("navbar-container").innerHTML = data;
  });
