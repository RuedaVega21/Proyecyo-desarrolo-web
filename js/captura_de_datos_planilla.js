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

        const id = document.getElementById("id").value;
        const nombre = document.getElementById("nombre").value;
        const sueldo = document.getElementById("sueldo").value;
        const estadoCargo = document.getElementById("estadoCargo").value;
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

    const planilla = new Planilla(id, nombre, sueldo, estadoCargo,
        horas, horas_totales, horas_extras, estadoLaboral, estadoJornada, estadoDescuento);
        
        //console.log(id, nombre, sueldo, estadoCargo, horas, horas_totales, horas_extras, estadoLaboral, estadoJornada, estadoDescuento)
        console.log(planilla)
    
    
};