formulario.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('funciona')
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
});

var raw = JSON.stringify({
    "apellido_primero": Headers.get('apellido1'),
    "apellido_segundo": Headers.get('apellido2'),
    "carnet_igss": Headers.get('iggs'),
    "dpi": Headers.get('dpi'),
    "estado": Headers.get('estadoEstado'),
    "fecha_nacimiento": Headers.get('fecha'),
    "jornada": Headers.get('estadoJornada'),
    "nit": Headers.get('nit'),
    "nombre_primero": Headers.get('nombre1'),
    "nombre_segundo": Headers.get('nombre2'),
    "puesto_id": Headers.get('id'),
    "telefono1": Headers.get('telefono1'),
    "telefono2": Headers.get('telefono2'),
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };
    
    fetch("{{url}}/api/empleado/crear/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));