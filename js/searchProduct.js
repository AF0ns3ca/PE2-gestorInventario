import { inventory } from "./products.js";

//Metodo para buscar dentro del array del inventario. Se podrá buscar en funcion de dos valores, titulo y autor
export const searchProducts = () => {
  let productFound = false;
  cleanClasses();
  const cleanTable = document.getElementById("inventTable");
  const searchBar = document.getElementById("search");
  const selectFilter = document.getElementById("select-group").value;
  if(searchBar.value !== ""){
    inventory.forEach((item, i) => {
        if (selectFilter === "title") {
          if (item.nombre.toLowerCase() === searchBar.value.toLowerCase()) {
            cleanTable.rows[i].classList.add("found");
            productFound = true;
          }
        } else if (selectFilter === "author") {
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
