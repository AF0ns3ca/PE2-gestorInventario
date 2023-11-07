import { inventory } from "./products.js";
import { listProducts } from "./listProducts.js";



export const totalPrice = () => {
  const total = document.getElementById("total-price-label");
    let totalPrice = 0;
    inventory.forEach(item => {
        totalPrice += (item.cantidad*item.precio)
    })
    total.innerHTML = `$${totalPrice.toLocaleString()}`;
}

