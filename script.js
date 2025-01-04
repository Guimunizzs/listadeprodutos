document.addEventListener("DOMContentLoaded", () => {
  const products = [];

  const formContainer = document.getElementById("form-container");
  const listContainer = document.getElementById("list-container");
  const productForm = document.getElementById("product-form");
  const productList = document.getElementById("product-list");

  document.getElementById("new-product").addEventListener("click", () => {
    formContainer.style.display = "block";
    listContainer.style.display = "none";
    productForm.reset();
  });

  productForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const price = parseFloat(document.getElementById("price").value);

    products.push({ name, price });
    products.sort((a, b) => a.price - b.price);

    renderProducts();
    formContainer.style.display = "none";
    listContainer.style.display = "block";
  });

  function renderProducts() {
    productList.innerHTML = products
      .map(
        (product) => `
          <tr>
            <td>${product.name}</td>
            <td>R$ ${product.price.toFixed(2)}</td>
          </tr>
        `
      )
      .join("");
  }
});
