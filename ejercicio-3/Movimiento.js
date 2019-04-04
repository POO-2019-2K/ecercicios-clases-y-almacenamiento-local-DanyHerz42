export default class Movimiento{
    constructor(objMovimiento){
        this._monto = objMovimiento.monto;
        this._tipo = objMovimiento.tipo;
        this._saldo = objMovimiento.saldo;
    }

    get monto(){
        return this._monto;
    }

    get tipo(){
        return this._tipo;
    }

    get saldo(){
        return this._saldo;
    }

} 