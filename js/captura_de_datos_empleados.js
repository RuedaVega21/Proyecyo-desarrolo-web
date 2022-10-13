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

    var empleado = new Empleado(id, cui, nit, nombres, apellidos, fecha,
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
    console.log(empleado)
};

function mostrar() {
    var ID = localStorage.getItem("Id");
    var CUI = localStorage.getItem("Cui");
    var NIT = localStorage.getItem("Nit");
    var NOMBRES = localStorage.getItem("Nombres");
    var APELLIDOS = localStorage.getItem("Apellidos");
    var FECHA = localStorage.getItem("Fecha");
    var SEXO = localStorage.getItem("Sexo");
    var TELEFONO = localStorage.getItem("Telefono");
    var IGGS = localStorage.getItem("Iggs");
    var CARGO = localStorage.getItem("Cargo");

    document.getElementById("ID").innerHTML = ID;
    document.getElementById("CUI").innerHTML = CUI;
    document.getElementById("NIT").innerHTML = NIT;
    document.getElementById("NOMBREs").innerHTML = NOMBRES;
    document.getElementById("APELLIDOS").innerHTML = APELLIDOS;
    document.getElementById("FECHA").innerHTML = FECHA;
    document.getElementById("SEXO").innerHTML = SEXO;
    document.getElementById("TELEFONO").innerHTML = TELEFONO;
    document.getElementById("IGGS").innerHTML = IGGS;
    document.getElementById("CARGO").innerHTML = CARGO;
}

function eliminar() {
    localStorage.removeItem("id");
    localStorage.removeItem("cui");
    localStorage.removeItem("nit");
    localStorage.removeItem("nombres");
    localStorage.removeItem("apellidos");
    localStorage.removeItem("fecha");
    localStorage.removeItem("direccion")
    localStorage.removeItem("sexo");
    localStorage.removeItem("telefono");
    localStorage.removeItem("iggs");
    localStorage.removeItem("cargo");
};