//este archivo sirve como "base de datos"
export {inventory};

const getRandomQuantity = () =>{
    return Math.floor(Math.random()*30)+1;
    //floor es para redondear, ponemos 30 para generar hasta 20 los numeros random
    
}
const inventory = [
    { id: 1, nombre: "Mistborn", autor: "Brandon Sanderson", cantidad: getRandomQuantity(), precio: 29.95 },
    { id: 2, nombre: "The Way of Kings", autor: "Brandon Sanderson", cantidad: getRandomQuantity(), precio: 32.95 },
    { id: 3, nombre: "The Eye of the World", autor: "Robert Jordan", cantidad: getRandomQuantity(), precio: 20.95 },
    { id: 4, nombre: "Game of Thrones", autor:"George R.R. Martin", cantidad: getRandomQuantity(), precio: 22.95 },
    { id: 5, nombre: "Tress of the Emerald See", autor:"Brandon Sanderson", cantidad: getRandomQuantity(), precio: 20.95 },
    { id: 6, nombre: "The Poppy War", autor:"R.F. Kuang", cantidad: getRandomQuantity(), precio: 18.95 },
    { id: 7, nombre: "The Hunger Games", autor:"Suzanne Collins", cantidad: getRandomQuantity(), precio: 15.95 },
    { id: 8, nombre: "Warbreaker", autor:"Brandon Sanderson", cantidad: getRandomQuantity(), precio: 19.95 },
    { id: 9, nombre: "Lord of Chaos", autor:"Robert Jordan", cantidad: getRandomQuantity(), precio: 20.95 },
    { id: 10, nombre: "The Hobbit", autor:"J.R.R. Tolkien", cantidad: getRandomQuantity(), precio: 22.95 },
    
]