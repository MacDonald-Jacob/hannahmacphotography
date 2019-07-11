/**********************************************************
 * This file will contain the code for obtaining all photos
 * relavent to their corresponding pages.
 */

function loadPhotos(elementName) {
   // grab folder name (code from Ryan Kinal @
   // https://stackoverflow.com/questions/3151436/how-can-i-get-the-current-directory-name-in-javascript)
   let loc = window.location.pathname;
   let dir = loc.substring(0, loc.lastIndexOf('/'));

   // grab photos from folder and load into an array
   let folderName = `${dir}/images/`;
   console.log(`"${folderName}"`);

   var xhr = new XMLHttpRequest();
   xhr.open('GET', '/favicon.png');
   xhr.responseType = 'blob'; //force the HTTP response, response-type header to be blob
   xhr.onload = function() {
      photoFolder = xhr.response; //xhr.response is now a blob object
   };
   xhr.send();

   console.log(photoFolder);

   let photoArray = [1, 2, 3, 4, 5]; //photoFolder.getFiles();

   // for scaling pictures (maybe)
   let height = 50;
   let width = 50;

   // use array to generate html
   let html = '';
   for (let i = 0; i < photoArray.length; i++) {
      html += `<img src="${photoArray[i]}" alt="${dir + (i + 1)}.jpg" />`;
   }

   document.getElementById(elementName).innerHTML = html;
}

window.addEventListener('onload', loadPhotos('bridalGallery'));
