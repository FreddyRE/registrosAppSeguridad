let objComponent = {
    1 : {title : "Peatones", 
        imgI : "img/peatonesI.png", 
        imgA : "img/peatonesA.png", 
        color:"green",
        camposRegistro:["Apellido paterno", "Apellido materno", "Nombre", "Familia a quien visita", "Departamento", "Comentarios"]
        },
    2 : {title : "Proveedores", 
        imgI : "img/proveedorI.png", 
        imgA : "img/proveedorA.png", 
        color:"blue",
        camposRegistro:["Apellido paterno", "Apellido materno", "Nombre", "Proveedor", "Departamento", "Comentarios"]
        },
    3 : {title : "Trabajadores", 
        imgI : "img/workerI.png", 
        imgA : "img/workerA.png", 
        color:"orange",
        camposRegistro:["Apellido paterno", "Proveedor", "Departamento", "Comentarios"]
        },
    4 : {title : "Novedades", 
        imgI : "img/advertenciasI.png", 
        imgA : "img/advertenciasA.png", 
        color:"red",
        camposRegistro:["Nombre guardia", "Usuario", "Comentario"]
        }
        
}

let componentDash = new MenuPrincipalComponent(objComponent);
componentDash.buildInterface(document.querySelector(".panels"), document.querySelector('.registro-form'), document.querySelector('.registros-table'))


let newDate = new DatesToWork();
document.querySelector("h1").innerHTML = `${newDate.getDay()} ${newDate.getMonthString()} de ${newDate.getYear()}`

let registroPeatonesDiv = document.querySelector(".registros-table")
let registroPeatonesColumns = ["Nombre", "Familia que visita", "Departamento", "Hora de entrada", "Hora de salida"]
const registroPeatones = new registrosDashboard(registroPeatonesColumns, registroPeatonesDiv);
registroPeatones.constructTable("PRUEBAS TABLA REGISTROS ")
