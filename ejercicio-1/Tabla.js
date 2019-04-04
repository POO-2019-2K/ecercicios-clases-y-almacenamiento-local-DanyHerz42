import Alumno from "./Alumno.js";

export default class Tabla{
    constructor(tabla){
        this._tabla = tabla;
        this._alumnos = [];
        this._initTables();
    }

    _findAlumno(cuenta){
        let foundAt = -1;
        this._alumnos.forEach((e,index) => {
            if(e.cuenta === cuenta){
                foundAt = index;
                return;
            }
        })

        return foundAt
    }

    

    _initTables(){
        let lsAlumnos = JSON.parse(localStorage.getItem("alumno"));

        if (lsAlumnos === null) {
            return;
        }

        lsAlumnos.forEach((e, index) => {
            this._addToTable(new Alumno(e));
        });
    }

    addAsistencia(cuenta){
        let foundAt = -1;
        this._alumnos.forEach((e,index) => {
            if(e.cuenta === cuenta){
                e.asistencia++;
            }
        })
        
        console.log(localStorage.getItem("alumno"))
        localStorage.setItem("alumno",JSON.stringify(this._alumnos));
        this._initTables();
    }

    _addToTable(alumno){
        let row = this._tabla.insertRow(-1);

        let cellCuenta = row.insertCell(0);
        let cellNombre = row.insertCell(1);
        let cellAsistencia = row.insertCell(2);

        cellCuenta.innerHTML = alumno.cuenta;
        cellNombre.innerHTML = alumno.nombre;
        cellAsistencia.innerHTML = alumno.asistencia;

        let objAlumno ={
            cuenta: alumno.cuenta,
            nombre: alumno.nombre,
            asistencia: alumno.asistencia
        }

        this._alumnos.push(objAlumno);
    }

    addAlumno(alumno){
        let f = this._findAlumno(alumno.cuenta)

        if(f >= 0){
            Swal.fire({
                type: "error",
                title: "Error",
                text: "El usuario ya esta registrado"
            })
            return;
        }

        this._addToTable(alumno);
        localStorage.setItem("alumno",JSON.stringify(this._alumnos));
        Swal.fire({
            type: "success",
            title: "Listo",
            text: "El usuario ha sido registrado"
        })
    }
}