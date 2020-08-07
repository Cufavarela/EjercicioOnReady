"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.mapearInventario = mapearInventario;

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stock = function () {
    function Stock(marca, precio, modelo) {
        _classCallCheck(this, Stock);

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

    _createClass(Stock, [{
        key: "agregarPropiedad",
        value: function agregarPropiedad(etiqueta, variable) {
            this.propiedades.push({
                "etiqueta": etiqueta,
                "valor": variable
            });
        }
    }, {
        key: "imprimirPropiedades",
        value: function imprimirPropiedades() {
            console.log(this.propiedades.map(function (propiedad) {
                return propiedad.etiqueta + ": " + propiedad.valor;
            }).join(" // "));
        }
    }]);

    return Stock;
}();

var Auto = function (_Stock) {
    _inherits(Auto, _Stock);

    function Auto(marca, precio, modelo, puertas) {
        _classCallCheck(this, Auto);

        var _this = _possibleConstructorReturn(this, (Auto.__proto__ || Object.getPrototypeOf(Auto)).call(this, marca, precio, modelo));

        _this.puertas = puertas;
        _this.agregarPropiedad("Puertas", _this.puertas);
        return _this;
    }

    return Auto;
}(Stock);

var Moto = function (_Stock2) {
    _inherits(Moto, _Stock2);

    function Moto(marca, precio, modelo, cilindrada) {
        _classCallCheck(this, Moto);

        var _this2 = _possibleConstructorReturn(this, (Moto.__proto__ || Object.getPrototypeOf(Moto)).call(this, marca, precio, modelo));

        _this2.cilindrada = cilindrada;
        _this2.agregarPropiedad("Cilindrada", _this2.cilindrada);
        return _this2;
    }

    return Moto;
}(Stock);

function encontrarUnModeloConLetra(letra, modelos) {
    letra = letra.toUpperCase();
    var modeloConLetra = modelos.reduce(function (modelo, item) {
        return item.modelo[0] === letra ? item : modelo;
    }, null);

    if (modeloConLetra !== null) {
        console.log("Vehículo que contiene en el modelo la letra ‘" + letra + "’: " + modeloConLetra.nombre + ' ' + modeloConLetra.precioFormateado);
    }
}

function mapearInventario(data) {
    var inventario = data.map(function (item) {
        return item.tipo === "Auto" ? new Auto(item.marca, item.precio, item.modelo, item.puertas) : new Moto(item.marca, item.precio, item.modelo, item.cilindrada);
    });

    inventario.map(function (item) {
        return item.imprimirPropiedades();
    });
    inventario.sort(function (a, b) {
        return a.precio < b.precio ? 1 : -1;
    });
    console.log("=============================");
    console.log("Vehículo más caro: " + inventario[0].nombre);
    console.log("Vehículo más barato: " + inventario[inventario.length - 1].nombre);
    encontrarUnModeloConLetra("Y", inventario);
    console.log("=============================");
    console.log("Vehículos ordenados por precio de mayor a menor:");
    inventario.map(function (item) {
        console.log(item.nombre);
    });
}