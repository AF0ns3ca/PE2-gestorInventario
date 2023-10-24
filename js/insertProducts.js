import { inventory } from "./products.js";
import { listProducts } from "./listProducts.js";

/*exportamos la funcion */

export const insertProducts = () => {
    const productForm = document.getElementById('product-form-events');
    productForm.addEventListener("submit",function(e) {

        e.preventDefault();/*le quitamos las propiedades a la etiqueta form,no lo tratamos como formulario si no como algo que tiene 3 inputs */

        //Capturar los valores introducidos por el usuario
        const productName = document.getElementById('product-name').value
        const productQuantity = parseInt(document.getElementById('product-quantity').value)
        const productPrice = parseFloat(document.getElementById('product-price').value)


        //validar que los campos no estén vacios
        if (productName && !isNaN(productQuantity) && !isNaN(productPrice)) {
            // vamos a almacenar los tres valores en un objeto, las tres const
            //crear un nuevo objeto
            const newProduct = {
                id: inventory.length + 1,
                nombre: productName,
                cantidad: productQuantity,
                precio: productPrice
            }
            //Agregar el nuevo producto al inventario
            inventory.push(newProduct)
            
            //limpiar los campos del formulario
            productForm.reset()
            //limpiar la tabla antes de la nueva inserción
            const cleanTable = document.getElementById("clear-table");
            cleanTable.innerHTML = "";

            listProducts()

        }
    });

}