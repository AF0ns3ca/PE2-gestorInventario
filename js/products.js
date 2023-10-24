//este archivo sirve como "base de datos"
export {inventory};

const getRandomQuantity = () =>{
    return Math.floor(Math.random()*30)+1;
    //floor es para redondear, ponemos 30 para generar hasta 20 los numeros random
    
}
const inventory = [
    { id: 1, nombre: "Mistborn", autor: "Brandon Sanderson", cantidad: getRandomQuantity(), precio: 29.95 },
    { id: 2, nombre: "The Way of Kings", autor: "Brandon Sanderson", cantidad: getRandomQuantity(), precio: 29.95 },
    { id: 3, nombre: "The Eye of the World", autor: "Robert Jordan", cantidad: getRandomQuantity(), precio: 29.95 },
    { id: 4, nombre: "Mistborn", autor:"Brandon Sanderson", cantidad: getRandomQuantity(), precio: 29.95 },
    { id: 5, nombre: "Mistborn", autor:"Brandon Sanderson", cantidad: getRandomQuantity(), precio: 29.95 },
    { id: 6, nombre: "Mistborn", autor:"Brandon Sanderson", cantidad: getRandomQuantity(), precio: 29.95 },
    { id: 7, nombre: "Mistborn", autor:"Brandon Sanderson", cantidad: getRandomQuantity(), precio: 29.95 },
    { id: 8, nombre: "Mistborn", autor:"Brandon Sanderson", cantidad: getRandomQuantity(), precio: 29.95 },
    { id: 9, nombre: "Mistborn", autor:"Brandon Sanderson", cantidad: getRandomQuantity(), precio: 29.95 },
    { id: 10, nombre: "Mistborn", autor:"Brandon Sanderson", cantidad: getRandomQuantity(), precio: 29.95 },
]