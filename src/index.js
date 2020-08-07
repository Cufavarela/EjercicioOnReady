class Stock {
    constructor(marca, precio, modelo) {
        this.marca = marca;
        this.precio = precio;
        this.modelo = modelo;
        this.propiedades = [];
        this.precioFormateado = "$" + precio.toFixed(2).toLocaleString();
        this.nombre = this.marca + " " + this.modelo;
        this.agregarPropiedad("Marca", this.marca);
        this.agregarPropiedad("Modelo", this.modelo);
        this.agregarPropiedad("Precio", this.precioFormateado);
    }

    agregarPropiedad(etiqueta, variable) {
        this.propiedades.push({
            "etiqueta": etiqueta,
            "valor": variable
        });
    }

    imprimirPropiedades() {
        console.log(this.propiedades.map(propiedad => propiedad.etiqueta+": "+propiedad.valor).join(" // "));
    }
}

class Auto extends Stock {
    constructor(marca, precio, modelo, puertas) {
        super(marca, precio, modelo);
        this.puertas = puertas;
        this.agregarPropiedad("Puertas", this.puertas);
    }
}

class Moto extends Stock {
    constructor(marca, precio, modelo, cilindrada) {
        super(marca, precio, modelo);
        this.cilindrada = cilindrada;
        this.agregarPropiedad("Cilindrada", this.cilindrada);
    }
}

function encontrarUnModeloConLetra(letra, modelos) {
    letra = letra.toUpperCase();
    const modeloConLetra = modelos.reduce((modelo, item) => {
        return item.modelo[0] === letra ? item : modelo
    }, null);

    if(modeloConLetra !== null) {
        console.log("Vehículo que contiene en el modelo la letra ‘"+ letra +"’: " + modeloConLetra.nombre + ' ' + modeloConLetra.precioFormateado);
    }
}

export function mapearInventario(data) {
    const inventario = data.map(item =>
        item.tipo === "Auto"
            ? new Auto(item.marca, item.precio, item.modelo, item.puertas)
            : new Moto(item.marca, item.precio, item.modelo, item.cilindrada));

    inventario.map(item => item.imprimirPropiedades());
    inventario.sort((a, b) => (a.precio < b.precio) ? 1 : -1);
    console.log("=============================");
    console.log("Vehículo más caro: " + inventario[0].nombre);
    console.log("Vehículo más barato: " + inventario[inventario.length-1].nombre);
    encontrarUnModeloConLetra("Y", inventario);
    console.log("=============================");
    console.log("Vehículos ordenados por precio de mayor a menor:");
    inventario.map(item => { console.log(item.nombre); });
}