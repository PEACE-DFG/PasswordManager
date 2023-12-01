document.addEventListener('DOMContentLoaded', () => {
  displayPasswords();
});

function savePassword() {
  const website = document.getElementById('website').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (website && username && password) {
      const savedPasswords = JSON.parse(localStorage.getItem('passwords')) || [];
      savedPasswords.push({ website, username, password });
      localStorage.setItem('passwords', JSON.stringify(savedPasswords));

      displayPasswords();
      clearForm();
  } else {
      alert('Please fill in all fields.');
  }
}

function displayPasswords() {
  const passwordList = document.getElementById('passwords');
  passwordList.innerHTML = '';

  const savedPasswords = JSON.parse(localStorage.getItem('passwords')) || [];

  savedPasswords.forEach(password => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<strong>Website:</strong> ${password.website} | <strong>Username:</strong> ${password.username} | <strong>Password:</strong> ${password.password}`;
      passwordList.appendChild(listItem);
  });
}

function clearForm() {
  document.getElementById('website').value = '';
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
}
