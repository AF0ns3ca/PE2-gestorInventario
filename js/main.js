import { listProducts } from "./listProducts.js";
import { searchProducts } from "./searchProduct.js";
import { insertProducts } from "./insertProducts.js";
import { saveEditProducts } from "./editProduct.js";
import { totalPrice } from "./totalPrice.js";

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
    document.getElementById("btn-save").classList.toggle("hidden");
    document.getElementById("btn-form").classList.toggle("hidden");
  });
});
