import { inventory } from "./products.js";

export const listProducts = () => {
  const table = document.getElementById("inventory-table-events");
  const cleanTable = document.getElementById("clear-table");
  inventory.forEach((item) => {
    const row = cleanTable.insertRow();

    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);

    cell1.innerHTML = item.nombre;

    cell2.innerHTML = item.cantidad;

    cell3.innerHTML = item.precio;

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Borrar";
    deleteButton.addEventListener("click", () => {
      /*con este boton se borrará el producto */
      //popup confirmacion de cada producto, alerta que lo hace, en el caso de que se acpete entra en el if, sino no entra
      if(confirm(`¿Estas seguro de que deseas borrar "${item.nombre}"?`)){
        //encuentra el indice del producto a eliminar, dentro del forEach se compara el product con el item correspondiente de inventory
        const index = inventory.findIndex(product => product.id === item.id);
        //Si el indice resultante no es -1, es que ha habido una coincidencia. Si hay coincidencia se puede borrar
        if(index !== -1){
          inventory.splice(index, 1);
        }
      }
      cleanTable.innerHTML="";
      listProducts();
    });
    cell4.appendChild(deleteButton); //con esta linea estamos insertando el boton delete en la celda correspondiente

    const editButton = document.createElement("button");
    editButton.innerText = "Editar";
    editButton.addEventListener("click", () => {
      /*con este boton se editará el producto */
    });
    cell4.appendChild(editButton);




  });
};
