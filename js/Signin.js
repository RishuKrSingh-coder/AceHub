function socialSignup(provider) {
    alert('Redirecting to sign up with ' + provider + '...');
    // Replace this with your actual OAuth logic
  }
  function emailSignup() {
    alert('Redirecting to email sign up form...');
    // Replace this with your actual email sign up logic
  }
  document.getElementById('closeSignup').addEventListener('click', function() {
    window.history.back();
  });