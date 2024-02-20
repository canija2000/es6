

// import cliente e impuesto

import Cliente from './cliente.js';
import Impuestos from './impuestos.js';


// crear instanacia de cliente e impuesto

const impuesto = new Impuestos(3000000, 500000);
const cliente = new Cliente('Juan', impuesto);

// calcular impuesto
let impuestojuan = new Impuestos(30000009393, 5003445);
let clientejuan = new Cliente('Juan', impuestojuan);

console.log(` cliente juan :  ${clientejuan.calcularImpuesto()}`);
console.log(` cliente :  ${cliente.calcularImpuesto()}`);


