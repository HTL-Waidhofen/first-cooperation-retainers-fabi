document.getElementById('contactform').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
    } else {
      alert('Your request has been successfully sent.');
    }
  });
  
  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }