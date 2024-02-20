

// calculo de impuestos

class Impuestos {
    constructor(monto_bruto_anual, deducciones) {
        this._monto_bruto_anual = monto_bruto_anual;
        this._deducciones = deducciones;
    }
    // get monto bruto anual
    get getMontoBrutoAnual() {
        return this._monto_bruto_anual;
    }
    // set monto bruto anual
    set setMontoBrutoAnual(nuevoMontoBrutoAnual) {
        this._monto_bruto_anual = nuevoMontoBrutoAnual;
    }

    // get deducciones
    get getDeducciones() {
        return this._deducciones;
    }
    // set deducciones
    
    set setDeducciones(nuevasDeducciones) {
        this._deducciones = nuevasDeducciones;
    }
}

// exportar clase impuestos

export default Impuestos;