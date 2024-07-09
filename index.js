document.addEventListener("DOMContentLoaded", function () {
  const addItemButton = document.getElementById("addItem");
  const input = document.getElementById("item");
  const list = document.querySelector("ol");

  // Function to add a new item to the shopping list
  addItemButton.addEventListener("click", function () {
    const newItem = input.value.trim();
    if (newItem !== "") {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <span>${newItem}</span>
        <div class="shopping-item-controls">
          <button class="delete-btn">Delete</button>
          <button class="purchased-btn">Purchased</button>
        </div>
      `;
      list.appendChild(listItem);
      input.value = "";
    }
  });

  // Event delegation for marking an item as purchased
  list.addEventListener("click", function (event) {
    if (event.target.classList.contains("purchased-btn")) {
      const item = event.target.closest("li");
      item.querySelector("span").classList.toggle("purchased");
      event.target.textContent =
        event.target.textContent === "Purchased" ? "Undo" : "Purchased";
    }
  });

  // Event delegation for deleting an item
  list.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
      const item = event.target.closest("li");
      list.removeChild(item);
    }
  });

  // Function to clear the entire shopping list
  const clearListButton = document.createElement("button");
  clearListButton.textContent = "Clear List";
  clearListButton.addEventListener("click", function () {
    list.innerHTML = "";
  });
  document.body.appendChild(clearListButton);
});
