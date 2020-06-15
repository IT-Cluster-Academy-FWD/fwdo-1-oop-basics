const $addUser = document.getElementById('add-user');
const $sortUsers = document.getElementById('sort-users');
const $usersList = document.getElementById('users-list');
const $inputs = $addUser.getElementsByTagName('input');
const $sortBy = document.getElementById('sort-by');
const users = [];

class User {
  constructor(fullName, age, email, passport) {
    this.fullName = fullName;
    this.age = age;
    this.email = email;
    this.passport = passport;
  }

  getInfo() {
    return `
      <i>Full name</i>: ${this.fullName}<br> 
      <i>Age</i>: ${this.age}<br> 
      <i>Email</i>: ${this.email}<br>
      <i>Passport</i> ${this.passport}<br>
    `;
  }
}

$addUser.addEventListener('submit', (event) => {
  event.preventDefault();
  const $li = document.createElement('li');
  const user = new User();

  for (const $input of $inputs) {
    if ($input.name in user) {
      user[$input.name] = $input.value;
    }
  }

  $usersList.appendChild($li);
  $li.innerHTML = user.getInfo();
  users.push(user);
});

$sortUsers.addEventListener('submit', (event) => {
  event.preventDefault();
  $usersList.innerHTML = '';
  
  users.sort((a, b) => {
    if (a[$sortBy.value] <= b[$sortBy.value]) {
      return -1;
    }
    
    if (a[$sortBy.value] >= b[$sortBy.value]) {
      return 1;
    }

    return 0;
  });

  for (const user of users) {
    const $li = document.createElement('li');
    $li.innerHTML = user.getInfo();
    $usersList.appendChild($li);
  }
});

