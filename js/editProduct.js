import { inventory } from "./products.js";
import { listProducts } from "./listProducts.js";
import { foundItemID } from "./listProducts.js";
import { totalPrice } from "./totalPrice.js";

const itemName = document.getElementById("product-title");
const itemAuthor = document.getElementById("product-author");
const itemQuantity = document.getElementById("product-quantity");
const itemPrice = document.getElementById("product-price");
export const saveEditProducts = () => {
  console.log(foundItemID);
  if (parseFloat(itemPrice.value) <= 0 || parseFloat(itemQuantity.value) <= 0) {
    alert("Introduzca un precio valido");
    itemName.value = "";
    itemAuthor.value = "";
    itemQuantity.value = "";
    itemPrice.value = "";
  } else {
    const itemEdited = {
      id: foundItemID,
      nombre: itemName.value,
      autor: itemAuthor.value,
      cantidad: parseFloat(itemQuantity.value),
      precio: parseFloat(itemPrice.value),
    };
    console.log(itemEdited);
    inventory.forEach((item, i) => {
      if (item.id === foundItemID) {
        inventory.splice(i, 1, itemEdited);
      }
      listProducts();
      totalPrice();
    });
    itemName.value = "";
    itemAuthor.value = "";
    itemQuantity.value = "";
    itemPrice.value = "";
  }
};
