import { inventory } from "./products.js";
export const searchProducts = () => {
  let productFound = false;
  cleanClasses();
  const cleanTable = document.getElementById("inventTable");
  const searchBar = document.getElementById("search");
  const selectFilter = document.getElementById("select-group").value;
  //const radioAutor = document.getElementById('radio-author');
  if(searchBar.value !== ""){
    inventory.forEach((item, i) => {
        if (selectFilter === "title") {
          //if(radioTitle.checked){
          if (item.nombre.toLowerCase() === searchBar.value.toLowerCase()) {
            cleanTable.rows[i].classList.add("found");
            productFound = true;
          }
        } else if (selectFilter === "author") {
          //else if(radioAutor.checked){
          if (item.autor.toLowerCase() === searchBar.value.toLowerCase()) {
            cleanTable.rows[i].classList.add("found");
            productFound = true;
          }
        }
      });
      productFound ? null : alert("No hay coincidencias");
      searchBar.value = "";
  } else {
    alert("Ingrese un valor para buscar");
  }
};

const cleanClasses = () => {
  const cleanTable = document.getElementById("inventTable");
  inventory.forEach((item, i) => {
    cleanTable.rows[i].classList.remove("found");
  });
};
