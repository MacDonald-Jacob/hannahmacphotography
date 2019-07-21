/**
 * This file contains the code to save some user data using Local Storage
 */

// store user data
function storeUserData() {
   let name = document.getElementById('name').value;
   let email = document.getElementById('email').value;
   let comments = document.getElementById('comments').innerHTML;

   if (typeof Storage !== 'undefined') {
      var user = {
         firstName: name,
         email: email,
         comments: comments
      };
      user = JSON.stringify(user);
      localStorage.setItem('user', user);
   } else {
      alert('Sorry, your browser does not support web storage...');
   }
}

function retrieveUserData() {
   if (typeof Storage !== 'undefined') {
      var user = localStorage.getItem('user');

      var users = JSON.parse(user);
      let welcomeMessage = `Welcome, ${users.firstName}`;
      document.getElementById('welcomeMessage').innerHTML = welcomeMessage;
   } else {
      alert('Sorry, your browser does not support web storage...');
   }
}

// display user's name if it's there
window.addEventListener('load', retrieveUserData);
// document.getElementById('submit').addEventListener('click', storeUserData);
