// signup.js
document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Mockup: In reality, you would send this data to the backend.
    localStorage.setItem('user', JSON.stringify({ email, password }));
    alert('User signed up successfully!');
    window.location.href = 'login.html';
  });
  