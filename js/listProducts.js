import { inventory } from "./products.js";
import { totalPrice } from "./totalPrice.js";
export let foundItemID;
const itemName = document.getElementById("product-title");
const itemAuthor = document.getElementById("product-author");
const itemQuantity = document.getElementById("product-quantity");
const itemPrice = document.getElementById("product-price");
export const listProducts = () => {
  const cleanTable = document.getElementById("inventTable");
  cleanTable.innerHTML = "";
  inventory.forEach((item) => {
    const row = cleanTable.insertRow();

    //Cell creation
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);

    //Cell data insertion
    cell1.innerHTML = `${item.nombre}`;
    cell2.innerHTML = `${item.autor}`;
    cell3.innerHTML = `${item.cantidad} uds`;
    cell4.innerHTML = `$ ${item.precio}`;

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Borrar";
    deleteButton.addEventListener("click", () => {
      /*con este boton se borrará el producto */
      //popup confirmacion de cada producto, alerta que lo hace, en el caso de que se acpete entra en el if, sino no entra
      if (confirm(`¿Estas seguro de que deseas borrar "${item.nombre}"?`)) {
        //encuentra el indice del producto a eliminar, dentro del forEach se compara el product con el item correspondiente de inventory
        const index = inventory.findIndex((product) => product.id === item.id);
        //Si el indice resultante no es -1, es que ha habido una coincidencia. Si hay coincidencia se puede borrar
        if (index !== -1) {
          inventory.splice(index, 1);
          
        }
        if (document.getElementById("btn-form").classList.contains("hidden")) {
          document.getElementById("btn-save").classList.toggle("hidden");
          document.getElementById("btn-form").classList.toggle("hidden");
        }
        itemName.value = "";
      itemAuthor.value = "";
      itemQuantity.value = "";
      itemPrice.value = "";
      }
      cleanTable.innerHTML = "";
      listProducts();
      totalPrice();
    });
    cell5.appendChild(deleteButton); //con esta linea estamos insertando el boton delete en la celda correspondiente

    const editButton = document.createElement("button");
    editButton.innerText = "Editar";
    editButton.addEventListener("click", () => {
      window.location.href = "#add-form";
      foundItemID = item.id;
      /*con este boton se editará el producto */
      itemName.value = item.nombre;
      itemAuthor.value = item.autor;
      itemQuantity.value = item.cantidad;
      itemPrice.value = item.precio;
      console.log("Item encontrado: " + foundItemID);
      if(document.getElementById("btn-save").classList.contains("hidden")){
        document.getElementById("btn-save").classList.toggle("hidden");
        document.getElementById("btn-form").classList.toggle("hidden");
      }
      totalPrice();
    });
    cell5.appendChild(editButton);
  });
};

// export const selectRow = () => {
//   inventory.forEach((element, i) => {
//     cleanTable.rows[i].onclick = () => {
//       inventory.forEach((element, i) => {
//         cleanTable.rows[i].classList.remove("found");
//       });
//       cleanTable.rows[i].classList.toggle("found");
//     };
//   });
// };
