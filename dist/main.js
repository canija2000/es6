"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));
var _impuestos = _interopRequireDefault(require("./impuestos.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// import cliente e impuesto

// crear instanacia de cliente e impuesto

var impuesto = new _impuestos["default"](3000000, 500000);
var cliente = new _cliente["default"]('Juan', impuesto);

// calcular impuesto
var impuestojuan = new _impuestos["default"](30000009393, 5003445);
var clientejuan = new _cliente["default"]('Juan', impuestojuan);
console.log(" cliente juan :  ".concat(clientejuan.calcularImpuesto()));
console.log(" cliente :  ".concat(cliente.calcularImpuesto()));