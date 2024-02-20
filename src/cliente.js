

// crear clase cliente

class Cliente {
    constructor(nombre, impuesto) {
        this._nombre = nombre;
        this.impuesto = impuesto;
    }
    // get nombre
    get getNombre() {
        return this._nombre;
    }
    // set nombre
    set setNombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }
    // calcular impuesto
    calcularImpuesto() {
    
        return ((this.impuesto.getMontoBrutoAnual-this.impuesto.getDeducciones) * 21 / 100);
    }
}


// exportar clase cliente

export default Cliente;

