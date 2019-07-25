var addButton = document.getElementById('addButton');
var itemList = document.getElementById('interests');

// Add item button click
addButton.addEventListener('click', addItem);

// Add item
function addItem(e) {
   // Get input value
   var newItem = document.getElementById('item').value;

   // Create new option element
   var li = document.createElement('option');

   // Add text node with input value
   li.appendChild(document.createTextNode(newItem));

   // Append text node
   deleteBtn.appendChild(document.createTextNode('X'));

   // Append li to list
   itemList.appendChild(li);
}

// Remove item
function removeItem(e) {
   if (e.target.classList.contains('delete')) {
      if (confirm('Are You Sure?')) {
         var li = e.target.parentElement;
         itemList.removeChild(li);
      }
   }
}

// Filter Items
function filterItems(e) {
   // convert text to lowercase
   var text = e.target.value.toLowerCase();
   // Get lis
   var items = itemList.getElementsByTagName('li');
   // Convert to an array
   Array.from(items).forEach(function(item) {
      var itemName = item.firstChild.textContent;
      if (itemName.toLowerCase().indexOf(text) != -1) {
         item.style.display = 'block';
      } else {
         item.style.display = 'none';
      }
   });
}
