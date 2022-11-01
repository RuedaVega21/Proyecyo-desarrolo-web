function captura() {
        const id = document.getElementById("id").value;
        const dpi = document.getElementById("dpi").value;
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
        if (dpi == '') {
            alert("Ingresar su dpi");
            document.getElementById("dpi").focus();
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
    
        var empleado = new Empleado(id, dpi, nit, nombres, apellidos, fecha,
            direccion, sexo, telefono, iggs, estadoCargo,estadoJornada);
    
    localStorage.setItem("Id", id);
    localStorage.setItem("Dpi", dpi);
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

    // var jsonempleado = JSON.stringify(empleado);
    // console.log(jsonempleado)
};
