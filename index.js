const stock = [
    {
        Marca: "Peugeot",
        Modelo: "206",
        Puertas: 4,
        Precio: 200000,   /* FALTAN DECIMALES */
    },
    {
        Marca: "Peugeot",
        Modelo: "208",
        Puertas: 5,
        Precio: 250000,   /* FALTAN DECIMALES */
    },
    {
        Marca: "Honda",
        Modelo: "Titan",
        Cilindrada: "125c",
        Precio: 60000,   /* FALTAN DECIMALES */
    },
    {
        Marca: "Yamaha",
        Modelo: "YBR",
        Cilindrada: "160c",
        Precio: 80500,   /* FALTAN DECIMALES   0,5 */
    },
];

class Stock {
    constructor(marca, precio, modelo) {
      this.marca = marca;
      this.precio = precio;
      this.modelo = modelo;
    }
}


class Auto extends Stock {
    constructor(puertas, marca, precio, modelo) {
        super(marca, precio, modelo);
        this.puertas = puertas;
    }

    printAuto() {
        let keysAuto = Object.keys(stock[0]);
        let parejaDeDatos0 = keysAuto[0] + ": " + this.marca + " // ";
        let parejaDeDatos1 = keysAuto[1] + ": " + this.modelo + " // ";
        let parejaDeDatos2 = keysAuto[2] + ": " + this.puertas + " // ";
        let parejaDeDatos3 = keysAuto[3] + ": " + this.precio;

        console.log(parejaDeDatos0 + parejaDeDatos1 + parejaDeDatos2 + parejaDeDatos3 );
    }
}

class Moto extends Stock {
    constructor(cilindrada, marca, precio, modelo) {
        super(marca, precio, modelo);
        this.cilindrada = cilindrada;
    }

    printMoto() {
        let keysMoto = Object.keys(stock[2]);
        let parejaDeDatos0 = keysMoto[0] + ": " + this.marca + " // ";
        let parejaDeDatos1 = keysMoto[1] + ": " + this.modelo + " // ";
        let parejaDeDatos2 = keysMoto[2] + ": " + this.cilindrada + " // ";
        let parejaDeDatos3 = keysMoto[3] + ": " + this.precio;

        console.log(parejaDeDatos0 + parejaDeDatos1 + parejaDeDatos2 + parejaDeDatos3 );
    }
}


const miAuto1 = new Auto("4", "Peugeot", 200000, "206");
miAuto1.printAuto();

const miMoto1 = new Moto("125c", "Honda", 60000, "Titán");
miMoto1.printMoto();

const miAuto2 = new Auto("5", "Peugeot", "$250000", "208");
miAuto2.printAuto();

const miMoto2 = new Moto("160c", "Yamaha", "$80500", "YBR");
miMoto1.printMoto();

console.log("=============================");

function valor () {
    let arrayPrecios = [];
    for (i=0; i < stock.length; i++) {
        function agregar() {arrayPrecios.push(stock[i].Precio)};
        agregar();
    }
    let precioMasAlto = Math.max.apply(null, arrayPrecios);
    let precioMasBajo = Math.min.apply(null, arrayPrecios);

    let preciosEnOrden = (arrayPrecios.sort(function(a,b){return a - b;})).reverse();

    function ordenarNombresPorPrecio () {

        console.log("Vehículos ordenados por precio de mayor a menor:");
        /*console.log(preciosEnOrden);*/

        for (i=0; i<preciosEnOrden.length; i++) {

            /*console.log(preciosEnOrden[i]);*/
            /*console.log(Object.values(stock[0]));*/
            for (x=0; x<stock.length; x++){

                if ( Object.values(stock[x]).includes(preciosEnOrden[i]) ) {
                    console.log(Object.values(stock[x])[0] + " " + Object.values(stock[x])[1]);
                }
            }
        }
    }

    function nombrePorPrecio () {

        for (i=0; i<stock.length; i++) {

            if (Object.values(stock[i]).includes(precioMasAlto)) {
                console.log("Vehículo más caro: " + Object.values(stock[i])[0] + " " + Object.values(stock[i])[1]);
            }
            if (Object.values(stock[i]).includes(precioMasBajo)) {
                console.log("Vehículo más barato: " + Object.values(stock[i])[0] + " " + Object.values(stock[i])[1]);
            }
            if (Object.values(stock[i]).includes("Yamaha")) { /* ACA TNDRIA QUE SER SOLO LA LETRA "Y" */
                console.log("Vehículo que contiene en el modelo la letra ‘Y’: " + Object.values(stock[i])[0] + " " + Object.values(stock[i])[1] + " " + Object.values(stock[i])[3]);
            }
        }
    }
    nombrePorPrecio();

    console.log("=============================");

    ordenarNombresPorPrecio();
}
valor();









