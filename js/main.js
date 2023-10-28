import{listProducts} from "./listProducts.js";
//import{selectRow} from "./listProducts.js";
import{searchProducts} from "./searchProduct.js";
import {insertProducts} from "./insertProducts.js";

/**
 * Autor: Alvaro Fonseca Hernandez
 * GitHub: https://github.com/AF0ns3ca/PE2-gestorInventario.git
 */
//Listamos los productos
document.addEventListener('DOMContentLoaded', listProducts)

document.addEventListener('DOMContentLoaded', () => {
    
    //Button for searching in the inventory table
    const btnSearch = document.getElementById('btn-search');
    btnSearch.addEventListener('click', () => {
        searchProducts();
    });
    // const btnForm=document.getElementById('product-form-events')

    // btnForm.addEventListener('click',() =>{
    //     insertProducts()
    // });

});