formulario.addEventListener('submit', function(e){
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var datos = new FormData(formulario);

var raw = JSON.stringify({
    "nombre_primero": datos.get('nombre_primero'),
    "nombre_segundo": datos.get('nombre_segundo'),
    "apellido_primero": datos.get('apellido_primero'),
    "apellido_segundo": datos.get('apellido_segundo'),
    "telefono1": datos.get('telefono1'),
    "telefono2": datos.get('telefono2'),
    "parentesco": datos.get('parentesco'),
    "empleado_id": datos.get('select'),
});

var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};

fetch("http://127.0.0.1:5000/api/familiar/crear/", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
});