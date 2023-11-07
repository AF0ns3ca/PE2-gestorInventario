import { inventory } from "./products.js";
import { listProducts } from "./listProducts.js";
import { totalPrice } from "./totalPrice.js";

export const insertProducts = () => {
  //Capturar los valores introducidos por el usuario
  const itemName = document.getElementById("product-title");
  const itemAuthor = document.getElementById("product-author");
  const itemQuantity = document.getElementById("product-quantity");
  const itemPrice = document.getElementById("product-price");

  //validar que los campos no estén vacios
  if (
    itemName.value &&
    itemAuthor.value &&
    !isNaN(parseInt(itemQuantity.value)) &&
    !isNaN(parseFloat(itemPrice.value))
  ) {
    if (parseFloat(itemPrice.value) <= 0 || parseInt(itemQuantity.value) <= 0) {
      alert("Introduzca valores válidos");
    } else {
      //crear un nuevo objeto
      const newProduct = {
        id: inventory.length + 1,
        nombre: itemName.value,
        autor: itemAuthor.value,
        cantidad: parseInt(itemQuantity.value),
        precio: parseFloat(itemPrice.value),
      };

      itemName.value = "";
      itemAuthor.value = "";
      itemQuantity.value = "";
      itemPrice.value = "";
      //Agregar el nuevo producto al inventario
      inventory.push(newProduct);

      //limpiar la tabla antes de la nueva inserción
      const cleanTable = document.getElementById("inventTable");
      cleanTable.innerHTML = "";
      console.log(newProduct);
      listProducts();
      totalPrice();
    }
  }
  // });
};
