import { inventory } from "./products.js";


//Metodo que mostrará el precio total del inventario cada vez que sea llamado
export const totalPrice = () => {
  const total = document.getElementById("total-price-label");
    let totalPrice = 0;
    inventory.forEach(item => {
        totalPrice += (item.cantidad*item.precio)
    })
    total.innerHTML = `$${totalPrice.toLocaleString()}`;
}

