import { inventory } from "./products.js";
import { listProducts } from "./listProducts.js";



export const totalPrice = () => {
    let totalPrice = 0;
    inventory.forEach(item => {
        totalPrice += (item.cantidad*item.precio)
    })
    alert("Precio total Inventario: $ "+totalPrice.toFixed(2)) 
    let totalPriceRow = `
    <tr>
      <td colspan="3">Precio total inventario:</td>
      <td>${totalPrice.toFixed(2)}€</td>
    </tr>
  `;
}

