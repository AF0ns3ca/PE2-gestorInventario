import { inventory } from "./products.js";
import { listProducts } from "./listProducts.js";

export const insertProducts = () => {
    const itemForm = document.getElementById('item-form-events');
    itemForm.addEventListener("submit",function(e) {

        e.preventDefault();/*le quitamos las propiedades a la etiqueta form,no lo tratamos como formulario si no como algo que tiene 3 inputs */

        //Capturar los valores introducidos por el usuario
        const itemName = document.getElementById('product-title').value
        const itemAuthor = document.getElementById('product-author').value
        const itemQuantity = parseInt(document.getElementById('product-quantity').value)
        const itemPrice = parseFloat(document.getElementById('product-price').value)


        //validar que los campos no estén vacios
        if (itemName && itemAuthor && !isNaN(itemQuantity) && !isNaN(itemPrice)) {
            // vamos a almacenar los tres valores en un objeto, las tres const
            //crear un nuevo objeto
            const newProduct = {
                id: inventory.length + 1,
                nombre: itemName,
                autor: itemAuthor,
                cantidad: itemQuantity,
                precio: itemPrice
            }
            //Agregar el nuevo producto al inventario
            inventory.push(newProduct)
            
            //limpiar los campos del formulario
            itemForm.reset()
            //limpiar la tabla antes de la nueva inserción
            const cleanTable = document.getElementById("inventTable");
            cleanTable.innerHTML = "";
            console.log(newProduct);
            listProducts()

        }
    });

}