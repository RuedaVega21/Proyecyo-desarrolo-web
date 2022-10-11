function captura() {
    var id = document.getElementById("id").value;
    var cui = document.getElementById("cui").value;
    var nit = document.getElementById("nit").value;
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var fecha = document.getElementById("fecha").value;
    var direccion = document.getElementById("direccion").value;
    var sexo = document.getElementById("estadoSexo").value;
    var telefono = document.getElementById("telefono").value;
    var iggs = document.getElementById("iggs").value;
    var cargo = document.getElementById("estadoCargo").value;

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
    if (sexo == '') {
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
    if (cargo == '') {
        alert("Seleccione un cargo");
        document.getElementById("cargo").focus();
    }

    console.log(id, cui, nit, nombres, apellidos, fecha, direccion, sexo, telefono, iggs, cargo)
}