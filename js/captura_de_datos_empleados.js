class Empleado {
    constructor(id, cui, nit, nombres, apellidos, fecha, direccion, sexo, telefono, iggs, estadoCargo, 
        sueldo, horas, horas_totales, horas_extras, estadoLaboral, estadoJornada, estadoDescuento) {
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
        this.sueldo = sueldo;
        this.horas = horas;
        this.horas_extras = horas_extras;
        this.horas_totales = horas_totales;
        this.estadoLaboral = estadoLaboral;
        this.estadoJornada = estadoJornada;
        this.estadoDescuento = estadoDescuento;
    }
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
        const sueldo = document.getElementById("sueldo").value;
        const horas = document.getElementById("horas").value;
        const horas_totales = document.getElementById("horas_totales").value;
        const horas_extras = document.getElementById("horas_extras").value;
        const estadoLaboral = document.getElementById("estadoLaboral").value;
        const estadoJornada = document.getElementById("estadoJornada").value;
        const estadoDescuento = document.getElementById("estadoDescuento").value;

    
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
    if (sueldo == '') {
        alert("Ingrese el sueldo");
        document.getElementById("sueldo").focus();
    }
    if (horas == '') {
        alert("Ingresar sus horas trabajadas");
        document.getElementById("horas").focus();
    } else {
        if (horas_totales == '') {
            alert("Ingrese el total de horas trabajadas");
            document.getElementById("horas_totales").focus();
        }
    }
    if (estadoLaboral == 'Sel. una opción') {
        alert("Debe seleccionar una opción");
        document.getElementById("estadoLaboral").focus();
    } else {
        if (estadoJornada == 'Sel. una opción') {
            alert("Debe colocar su jornada");
            document.getElementById("estadoJornada").focus();
        }
    }
    if (estadoDescuento == 'Sel. una opción') {
            alert("Si no tiene descuento seleccione la opción ninguna");
            document.getElementById("estadoDescuento").focus();
    }

        var empleado = new Empleado(id, cui, nit, nombres, apellidos, fecha,
            direccion, sexo, telefono, iggs, estadoCargo, sueldo,
            horas, horas_totales, horas_extras, estadoLaboral, estadoJornada, estadoDescuento);
    
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
    localStorage.setItem("Sueldo", sueldo);
    localStorage.setItem("Horas", horas);
    localStorage.setItem("Horas_totales", horas_totales);
    localStorage.setItem("Horas_extras", horas_extras);
    localStorage.setItem("EstadoLaboral", estadoLaboral);
    localStorage.setItem("EstadoJornada", estadoJornada);
    localStorage.setItem("EstadoDescuento", estadoDescuento);
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
    var SUELDO = localStorage.getItem("Sueldo");
    var HORAS = localStorage.getItem("Horas");
    var HORAS_TOTALES = localStorage.getItem("Horas_totales");
    var HORAS_EXTRAS = localStorage.getItem("Horas_extras");
    var ESTADOLABORAL = localStorage.getItem("EstadoLaboral");
    var ESTADOJORNADA = localStorage.getItem("EstadoJornada");
    var ESTADODESCUENTO = localStorage.getItem("EstadoDescuento");


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
    document.getElementById("SUELDO").innerHTML = SUELDO;
    document.getElementById("HORAS").innerHTML = HORAS;
    document.getElementById("HORAS_TOTALES").innerHTML = HORAS_TOTALES;
    document.getElementById("HORAS_EXTRAS").innerHTML = HORAS_EXTRAS;
    document.getElementById("ESTADOLABORAL").innerHTML = ESTADOLABORAL;
    document.getElementById("ESTADOJORNADA").innerHTML = ESTADOJORNADA;
    document.getElementById("ESTADODESCUENTO").innerHTML = ESTADODESCUENTO;
}

