document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
  
    // Dummy credentials for test login
    if (email === "admin@learnhub.com" && password === "1234") {
      alert("Login Successful!");
      window.location.href = "index.html"; // redirect to homepage
    } else {
      alert("Invalid email or password. Try again!");
    }
  });
  