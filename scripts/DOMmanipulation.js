let addButton = document.getElementById('addButton');
let itemList = document.getElementById('options');

// Add item button click
addButton.addEventListener('click', addItem);

// Add item
function addItem(e) {
   e.preventDefault();

   // Get input value
   let newItem = document.getElementById('item').value;

   // Create new option element
   let option = document.createElement('option');

   // Add text node with input value
   option.appendChild(document.createTextNode(newItem));

   // need to add name attribute
   option.setAttribute('name', 'interests');

   // add value attribute with provided text
   option.setAttribute('value', newItem);

   // Append li to list
   itemList.appendChild(option);
}
