export default class Alumno{
    constructor(objAlumno){
        this._nombre = objAlumno.nombre;
        this._cuenta = objAlumno.cuenta;
        this._asistencia = objAlumno.asistencia;
    }

    get nombre(){
        return this._nombre;
    }

    get cuenta(){
        return this._cuenta;
    }

    get asistencia(){
        return this._asistencia;
    }
}