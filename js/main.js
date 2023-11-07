import { listProducts } from "./listProducts.js";
import { searchProducts } from "./searchProduct.js";
import { insertProducts } from "./insertProducts.js";
import { saveEditProducts } from "./editProduct.js";
import { totalPrice } from "./totalPrice.js";
import { sortAuthor, sortPrice, sortQuantity, sortTitle } from "./sortProducts.js";

/**
 * Autor: Alvaro Fonseca Hernandez
 * GitHub: https://github.com/AF0ns3ca/PE2-gestorInventario.git
 */

//Listamos los productos
document.addEventListener("DOMContentLoaded", listProducts);
document.addEventListener("DOMContentLoaded", totalPrice);

document.addEventListener("DOMContentLoaded", () => {
  //Button for searching in the inventory table
  const btnSearch = document.getElementById("btn-search");
  btnSearch.addEventListener("click", () => {
    searchProducts();
  });

  const btnForm = document.getElementById("btn-form");
  btnForm.addEventListener("click", () => {
    insertProducts();
  });

  const btnSave = document.getElementById("btn-save");

  btnSave.addEventListener("click", () => {
    saveEditProducts();
    //Aparecera el boton guardar o añadir según sea el caso
    document.getElementById("btn-save").classList.toggle("hidden");
    document.getElementById("btn-form").classList.toggle("hidden");
  });

  //Filtros, para filtrar por cada uno de los campos hacer click en el encabezado de la tabla de cada elemento, mas informacion en sortProducts.js
  const titleSort = document.getElementById("title-sort");
  titleSort.addEventListener("click", () => {
    sortTitle();
  });

  const authorSort = document.getElementById("author-sort");
  authorSort.addEventListener("click", () => {
    sortAuthor();
  });

  const quantitySort = document.getElementById("quantity-sort");
  quantitySort.addEventListener("click", () => {
    sortQuantity();
  });

  const priceSort = document.getElementById("price-sort");
  priceSort.addEventListener("click", () => {
    sortPrice();
  });

});
