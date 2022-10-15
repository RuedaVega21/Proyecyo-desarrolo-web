class Planilla {
    constructor(id, nombre, sueldo, estadoCargo, horas, horas_totales, horas_extras,
        estadoLaboral, estadoJornada, estadoDescuento) {
        this.id = id;
        this.nombre = nombre;
        this.sueldo = sueldo;
        this.estadoCargo = estadoCargo;
        this.horas = horas;
        this.horas_extras = horas_extras;
        this.horas_totales = horas_totales;
        this.estadoLaboral = estadoLaboral;
        this.estadoJornada = estadoJornada;
        this.estadoDescuento = estadoDescuento;
    }
}

function captura() {

        var id = document.getElementById("id").value;
        var nombre = document.getElementById("nombre").value;
        var sueldo = document.getElementById("sueldo").value;
        var estadoCargo = document.getElementById("estadoCargo").value;
        var horas = document.getElementById("horas").value;
        var horas_totales = document.getElementById("horas_totales").value;
        var horas_extras = document.getElementById("horas_extras").value;
        var estadoLaboral = document.getElementById("estadoLaboral").value;
        var estadoJornada = document.getElementById("estadoJornada").value;
        var estadoDescuento = document.getElementById("estadoDescuento").value;
    
    if (id == '') {
        alert("El campo id no puede quedarse vacio");
        document.getElementById("id").focus();
    } else {
        if (nombre == '') {
            alert("Debe ingresar el nombre del trabajador");
            document.getElementById("nombre").focus();
        }
    }
    if (sueldo == '') {
        alert("Ingrese el sueldo");
        document.getElementById("sueldo").focus();
    } else {
        if (estadoCargo == 'Sel. una opción') {
            alert("Debe seleccionar una opción");
            document.getElementById("estadoCargo").focus();
        }
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

        var planilla = new Planilla(id, nombre, sueldo, estadoCargo,
            horas, horas_totales, horas_extras, estadoLaboral, estadoJornada, estadoDescuento);
    
    localStorage.setItem("Id", id);
    localStorage.setItem("Nombre", nombre);
    localStorage.setItem("Sueldo", sueldo);
    localStorage.setItem("EstadoCargo", estadoCargo);
    localStorage.setItem("Horas", horas);
    localStorage.setItem("Horas_totales", horas_totales);
    localStorage.setItem("Horas_extras", horas_extras);
    localStorage.setItem("EstadoLaboral", estadoLaboral);
    localStorage.setItem("EstadoJornada", estadoJornada);
    localStorage.setItem("EstadoDescuento", estadoDescuento);
        
        //console.log(id, nombre, sueldo, estadoCargo, horas, horas_totales, horas_extras, estadoLaboral, estadoJornada, estadoDescuento)
        console.log(planilla)
    
};

function mostrar() {
    var ID = localStorage.getItem("Id");
    var NOMBRE = localStorage.getItem("Nombre");
    var SUELDO = localStorage.getItem("Nit");
    var ESTADOCARGO = localStorage.getItem("Nombres");
    var HORAS = localStorage.getItem("Apellidos");
    var HORAS_TOTALES = localStorage.getItem("Fecha");
    var HORAS_EXTRAS = localStorage.getItem("Sexo");
    var ESTADOLABORAL = localStorage.getItem("Telefono");
    var ESTADOJORNADA = localStorage.getItem("Iggs");
    var ESTADODESCUENTO = localStorage.getItem("Cargo");

    document.getElementById("ID").innerHTML = ID;
    document.getElementById("NOMBRE").innerHTML = NOMBRE;
    document.getElementById("SUELDO").innerHTML = SUELDO;
    document.getElementById("ESTADOCARGO").innerHTML = ESTADOCARGO;
    document.getElementById("HORAS").innerHTML = HORAS;
    document.getElementById("HORAS_TOTALES").innerHTML = HORAS_TOTALES;
    document.getElementById("HORAS_EXTRAS").innerHTML = HORAS_EXTRAS;
    document.getElementById("ESTADOLABORAL").innerHTML = ESTADOLABORAL;
    document.getElementById("ESTADOJORNADA").innerHTML = ESTADOJORNADA;
    document.getElementById("ESTADODESCUENTO").innerHTML = ESTADODESCUENTO;
}