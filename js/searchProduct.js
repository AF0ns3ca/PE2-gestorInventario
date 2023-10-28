import { inventory } from "./products.js";
export const searchProducts = () => {
    cleanClasses();
    const cleanTable = document.getElementById("inventTable");
    const searchBar = document.getElementById("search");
    const radioTitle = document.getElementById('radio-title');
    const radioAutor = document.getElementById('radio-author');
    inventory.forEach((item, i) => {
      if(radioTitle.checked){
        if (item.nombre.toLowerCase() === searchBar.value.toLowerCase()) {
          cleanTable.rows[i].classList.add("found");
          console.log(radioTitle.checked);
        }
      } else if(radioAutor.checked){
        if (item.autor.toLowerCase() === searchBar.value.toLowerCase()) {
          cleanTable.rows[i].classList.add("found");
          console.log(radioAutor.checked);
        }
      }
    });
    searchBar.value = "";
  }

const cleanClasses = () => {
    const cleanTable = document.getElementById("inventTable");
    inventory.forEach((item, i) => {
        cleanTable.rows[i].classList.remove("found");
    });
};