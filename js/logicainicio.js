formulario.addEventListener('submit', function(e){
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var datos = new FormData(formulario);

    var raw = JSON.stringify({
        "correo": datos.get('correo'),
        "nombre_usuario": datos.get('usuario'),
        "empleado_id": datos.get('select')
    });
    
    console.log(raw);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://127.0.0.1:8000/api/crearUsuario", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
});

