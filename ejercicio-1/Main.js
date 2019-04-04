import Alumno from "./Alumno.js";
import Tabla from "./Tabla.js";

class Main{
    constructor(){
        let tabla = new Tabla(document.querySelector("#tabla"));
        // localStorage.removeItem("alumno");
        document.querySelector("#btnAdd").addEventListener("click", () => {
            let form = document.querySelector("#form");

            if (form.checkValidity() === true) {
                let cuenta = document.querySelector("#cuenta").value;
                let nombre = document.querySelector("#nombre").value;
        
                let objAlumno = {
                  cuenta: cuenta,
                  nombre: nombre,
                  asistencia: "0"
                };

                let a = new Alumno(objAlumno);
                tabla.addAlumno(objAlumno);
            }

            form.classList.add("was-validated")
        });

        document.querySelector("#btnAsist").addEventListener("click", () => {
            let cuenta = document.querySelector("#cuenta").value;

            tabla.addAsistencia(cuenta);        
        });
    }
}

let m = new Main();