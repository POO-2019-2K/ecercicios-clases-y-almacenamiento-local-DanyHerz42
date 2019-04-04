class Main{
    constructor(){
        // let tabla = new tabla(document.querySelector("#tabla"));
        console.log("joo");

        document.querySelector("#btnAdd").addEventListener("click", () =>{
            let monto = document.querySelector("#monto").value;
            let tipo = document.querySelector("#tipo").value;

            if (form.checkValidity() === true  && tipo !== "0" && monto === null) {
                let objMovimiento = {
                  monto: monto,
                  tipo: tipo,
                  saldo: 0 
                };
                
                let movimiento = new Movimiento(objMovimiento);
        
                tabla.addMovimiento(objMovimiento);
              }else{
                  Swal.fire({
                    type: "error",
                    title: "Error",
                    text: "Información incorrecta"
                  });
              }
        
              form.classList.add("was-validated");
        });
    }
}

let m = new Main();