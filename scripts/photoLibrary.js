/**********************************************************
 * This file will contain the code for obtaining all photos
 * relavent to their corresponding pages.
 */

function loadPhotos() {
   // grab photos from folder and load into an array
   photoArray = Folder('./images/').getFiles();

   // grab folder name (code from Ryan Kinal @
   // https://stackoverflow.com/questions/3151436/how-can-i-get-the-current-directory-name-in-javascript)
   var loc = window.location.pathname;
   var dir = loc.substring(0, loc.lastIndexOf('/'));

   // for scaling pictures (maybe)
   let height = 50;
   let width = 50;

   // use array to generate html
   let html = '';
   for (let i = 0; i < photoArray.length(); i++) {
      html += `<img src="${photoArray[i]}" alt="${dir + i}.jpg" />`;
   }

   // return html to load for needed page
   return html;
}
