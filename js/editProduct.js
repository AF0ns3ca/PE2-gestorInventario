import { inventory } from "./products.js";
import { listProducts } from "./listProducts.js";
import { foundItemID } from "./listProducts.js";
const itemName = document.getElementById("product-title");
const itemAuthor = document.getElementById("product-author");
const itemQuantity = document.getElementById("product-quantity");
const itemPrice = document.getElementById("product-price");
export const saveEditProducts = () => {
  console.log(foundItemID);
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
  });
  itemName.value = "";
  itemAuthor.value = "";
  itemQuantity.value = "";
  itemPrice.value = "";
};
