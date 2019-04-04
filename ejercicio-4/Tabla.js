import Movimiento from "./Movimiento";

export default class Tabla{
    constructor(tabla){
        this._tabla = tablas;
        this._movimientos = [];

    }

    _initTables(){
        let lsMovimeintos = JSON.parse(localStorage.getItem("movimiento"));

        if (lsMovimeintos === null) {
            return;
        }

        lsMovimeintos.forEach((e, index) => {
            this._addToTable(new Movimiento(e));
        });
    }

    findLastSaldo(){
        let foundAt = 0;
        let saldo = JSON.parse(localStorage.getItem("movimiento"));
        saldo.forEach((e,index) => {
            foundAt = e.saldo;
        })

        return foundAt;
    }

    _addToTable(movimiento){
        let row = this._tabla.insertRow(-1);

        let cellTipo = row.insertCell(0);
        let cellMonto = row.insertCell(1);

        cellTipo.innerHTML = movimiento.tipo;
        cellMonto.innerHTML = movimiento.monto;



        movimiento.saldo = findLastSaldo();

        if(tipo === "Retiro"){
            if(movimiento.saldo < movimiento.monto){
                Swal.fire({
                    type: "error",
                    title: "error",
                    text: "El saldo es insuficiente"
                })
            }else{
                movimiento.saldo = parseInt(movimiento.saldo) - parserInt(movimiento.monto);
                localStorage.setItem("saldo", jason.stringify(movimiento.saldo))
            }
        }else if(tipo ==="Deposito"){
            movimiento.saldo = parseInt(movimiento.saldo) + parserInt(movimiento.monto);
            localStorage.setItem("saldo", jason.stringify(movimiento.saldo))
        }

        localStorage.setItem("movimiento", jason.stringify(movimiento.saldo))

        let objMovimiento ={
            tipo: tipo.movimiento,
            monto: monto.movimiento,
            saldo: saldo.movimiento
        }

        this._alumnos.push(objMovimiento);
    }

    addMovimiento(movimiento){
        localStorage.setItem
        this._addToTable(movimiento);
        localStorage.setItem("movimiento",JSON.stringify(this._movimientos));
        Swal.fire({
            type: "success",
            title: "Listo",
            text: "El usuario ha sido registrado"
        })
    }
}
}