class Empleado {
    constructor(id, cui, nit, nombres, apellidos, fecha, direccion, sexo, telefono, iggs, cargo) {
        this.id = id;
        this.cui = cui;
        this.nit = nit;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.fecha = fecha;
        this.direccion = direccion;
        this.sexo = sexo;
        this.telefono = telefono;
        this.iggs = iggs;
        this.cargo = cargo; 
    }
}

// class UI {
//     addEmpleado(empleado) {
//         const listaempleado = document.getElementById('empleado-list');
//         const elemento = document.createElement('div');
//         elemento.innerHTML = `
//             <div class="card text-center mb-4">
//                 <div class="card-body">
//                     <strong>Product</strong>: ${empleado.id} -
//                     <strong>Price</strong>: ${empleado.cui} - 
//                     <strong>Year</strong>: ${empleado.nit}
//                     <a href="#" class="btn btn-danger" name="delete">Delete</a>
//                 </div>
//             </div>
//         `;
//     listaempleado.appendChild(elemento);
//   }
// }


function captura() {

        const id = document.getElementById("id").value;
        const cui = document.getElementById("cui").value;
        const nit = document.getElementById("nit").value;
        const nombres = document.getElementById("nombres").value;
        const apellidos = document.getElementById("apellidos").value;
        const fecha = document.getElementById("fecha").value;
        const direccion = document.getElementById("direccion").value;
        const sexo = document.getElementById("estadoSexo").value;
        const telefono = document.getElementById("telefono").value;
        const iggs = document.getElementById("iggs").value;
        const cargo = document.getElementById("estadoCargo").value;
    
    if (id == '') {
        alert("El campo id no puede quedarse vacio");
        document.getElementById("id").focus();
    } else {
        if (cui == '') {
            alert("Ingresar su cui");
            document.getElementById("cui").focus();
        }
    }
    if (nit == '') {
        alert("Ingresar su nit");
        document.getElementById("nit").focus();
    } else {
        if (nombres == '') {
            alert("Ingresar los nombres");
            document.getElementById("nombres").focus();
        }
    }
    if (apellidos == '') {
        alert("Ingresar los apellidos");
        document.getElementById("apellidos").focus();
    } else {
        if (fecha == '') {
            alert("Ingresar fecha de nacimiento");
            document.getElementById("fecha").focus();
        }
    }
    if (direccion == '') {
        alert("Ingresar su dirección");
        document.getElementById("direccion").focus();
    } else {
        if (sexo == 'Sel. una opción') {
            alert("Seleccione sexo");
            document.getElementById("sexo").focus();
        }
    }
    if (telefono == '') {
        alert("Ingresar su numero");
        document.getElementById("telefono").focus();
    } else {
        if (iggs == '') {
            alert("Agrege su carnet de iggs");
            document.getElementById("iggs").focus();
        }
    }
    if (cargo == 'Sel. una opción') {
        alert("Seleccione un cargo");
        document.getElementById("cargo").focus();
    }

    const empleado = new Empleado(id, cui, nit, nombres, apellidos, fecha,
        direccion, sexo, telefono, iggs, cargo);
    localStorage.setItem("Id", id);
    localStorage.setItem("Cui", cui);
    localStorage.setItem("Nit", nit);
    localStorage.setItem("Nombres", nombres);
    localStorage.setItem("Apellidos", apellidos);
    localStorage.setItem("Fechas", fecha);
    localStorage.setItem("Direccion", direccion);
    localStorage.setItem("Sexo", sexo);
    localStorage.setItem("Telefono", telefono);
    localStorage.setItem("Iggs", iggs);
    localStorage.setItem("Cargo", cargo);

    document.getElementById("id").value = "";
    document.getElementById("cui").value = "";
    document.getElementById("nit").value = "";
    document.getElementById("nombres").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("sexo").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("iggs").value = "";
    document.getElementById("cargo").value = "";

        // const ui = new UI();
        // ui.addEmpleado(empleado);
        //console.log(id, cui, nit, nombres, apellidos, fecha, direccion, sexo, telefono, iggs, cargo)
    console.log(empleado)
};

function eliminar() {
    localStorage.setItem("Id", id);
    localStorage.setItem("Cui", cui);
    localStorage.setItem("Nit", nit);
    localStorage.setItem("Nombres", nombres);
    localStorage.setItem("Apellidos", apellidos);
    localStorage.setItem("Fechas", fecha);
    localStorage.setItem("Direccion", direccion);
    localStorage.setItem("Sexo", sexo);
    localStorage.setItem("Telefono", telefono);
    localStorage.setItem("Iggs", iggs);
    localStorage.setItem("Cargo", cargo);

    
}