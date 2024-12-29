// login.js
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.email === email && user.password === password) {
      alert('Login successful!');
      window.location.href = 'todos.html';
    } else {
      alert('Invalid credentials!');
    }
  });
  