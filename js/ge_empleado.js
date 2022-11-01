formulario.addEventListener('submit', function(e){
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var datos = new FormData(formulario);

var raw = JSON.stringify({
    "apellido_primero": datos.get('apellido1'),
    "apellido_segundo": datos.get('apellido2'),
    "carnet_igss": datos.get('iggs'),
    "dpi": datos.get('dpi'),
    "estado": datos.get('estadoEstado'),
    "fecha_nacimiento": datos.get('fecha'),
    "jornada": datos.get('estadoJornada'),
    "nit": datos.get('nit'),
    "nombre_primero": datos.get('nombre1'),
    "nombre_segundo": datos.get('nombre2'),
    "telefono1": datos.get('telefono1'),
    "telefono2": datos.get('telefono2'),
    "puesto_id" : datos.get('estadoCargo')
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };
    
    fetch("http://127.0.0.1:5000/api/empleado/crear/", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result.data.apellido_primero))
    .catch(error => console.log('error', error));
});