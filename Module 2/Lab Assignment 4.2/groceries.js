let groceryList = [];

// Wait until DOM is loaded
window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#addBtn").addEventListener("click", addBtnClick);
   document.querySelector("#clearBtn").addEventListener("click", clearBtnClick);

   // Load the grocery list from localStorage
   groceryList = loadList();

   if (groceryList.length > 0) {
      // Display list
      for (let item of groceryList) {
         showItem(item);
      }
   }
   else {
      // No list to display
      enableClearButton(false);
   }
});

// Enable or disable the Clear button
function enableClearButton(enabled) {
   document.querySelector("#clearBtn").disabled = !enabled;
}

// Show item at end of the ordered list
function showItem(item) {
   let list = document.querySelector("ol");
   list.innerHTML += `<li>${item}</li>`;
}

// Add item to grocery list
function addBtnClick() {
   let itemTextInput = document.querySelector("#item");
   let item = itemTextInput.value.trim();
   if (item.length > 0) {
      enableClearButton(true);
      showItem(item);
      groceryList.push(item);

      // Save groceryList to localStorage
      saveList(groceryList);
   }

   // Clear input
   itemTextInput.value = '';
}

// Clear the list
function clearBtnClick() {
   enableClearButton(false);
   groceryList = [];
   let list = document.querySelector("ol");
   list.innerHTML = "";

   // Remove the grocery list from localStorage
   clearList();
}

// Complete the functions below
function loadList() {
   const storedList = localStorage.getItem("list");
   if (storedList) {
      return (storedList).split(",");
   } else {
      return [];
   }

}

function saveList(groceryList) {
   localStorage.setItem("list", groceryList.join(","));

}

function clearList() {
   localStorage.removeItem("list");
}