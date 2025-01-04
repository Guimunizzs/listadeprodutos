document.addEventListener("DOMContentLoaded", () => {
  const products = [];

  const formContainer = document.getElementById("form-container");
  const listContainer = document.getElementById("list-container");
  const productForm = document.getElementById("product-form");
  const productList = document.getElementById("product-list");
});

document.getElementById("new-product").addEventListener("click", () => {
  formContainer.style.display = "block";
  listContainer.style.display = "none";
});

productForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const price = parseFloat(document.getElementById("price").value);
});
