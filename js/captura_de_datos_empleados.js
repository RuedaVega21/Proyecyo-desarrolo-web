class Empleado {
    constructor(id, cui, nit, nombres, apellidos, fecha, 
        direccion, sexo, telefono, iggs, estadoCargo, estadoJornada) {
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
        this.estadoCargo = estadoCargo; 
        this.estadoJornada = estadoJornada; }
}

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
        const estadoCargo = document.getElementById("estadoCargo").value;
        const estadoJornada = document.getElementById("estadoJornada").value;

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
    if (estadoCargo == 'Sel. una opción') {
        alert("Seleccione un cargo");
        document.getElementById("estadoCargo").focus();
    }
    
    if (estadoJornada == 'Sel. una opción') {
            alert("Debe colocar su jornada");
            document.getElementById("estadoJornada").focus();
        }
    


        var empleado = new Empleado(id, cui, nit, nombres, apellidos, fecha,
            direccion, sexo, telefono, iggs, estadoCargo,estadoJornada);
    
    localStorage.setItem("Id", id);
    localStorage.setItem("Cui", cui);
    localStorage.setItem("Nit", nit);
    localStorage.setItem("Nombres", nombres);
    localStorage.setItem("Apellidos", apellidos);
    localStorage.setItem("Fecha", fecha);
    localStorage.setItem("Direccion", direccion);
    localStorage.setItem("Sexo", sexo);
    localStorage.setItem("Telefono", telefono);
    localStorage.setItem("Iggs", iggs);
    localStorage.setItem("EstadoCargo", estadoCargo);
    localStorage.setItem("EstadoJornada", estadoJornada);
    console.log(empleado)

    var jsonempleado = JSON.stringify(empleado);
    console.log(jsonempleado)
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
    var ESTADOCARGO = localStorage.getItem("EstadoCargo");
    var ESTADOJORNADA = localStorage.getItem("EstadoJornada");

    document.getElementById("ID").innerHTML = ID;
    document.getElementById("CUI").innerHTML = CUI;
    document.getElementById("NIT").innerHTML = NIT;
    document.getElementById("NOMBRES").innerHTML = NOMBRES;
    document.getElementById("APELLIDOS").innerHTML = APELLIDOS;
    document.getElementById("FECHA").innerHTML = FECHA;
    document.getElementById("SEXO").innerHTML = SEXO;
    document.getElementById("TELEFONO").innerHTML = TELEFONO;
    document.getElementById("IGGS").innerHTML = IGGS;
    document.getElementById("ESTADOCARGO").innerHTML = ESTADOCARGO;
    document.getElementById("ESTADOJORNADA").innerHTML = ESTADOJORNADA;
}

