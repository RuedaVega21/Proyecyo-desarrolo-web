var formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('funciona')
    var datos = new FormData(formulario);

    console.log(datos.get('usuario'))
    console.log(datos.get('correo'))
})

var raw = JSON.stringify({
    "usuario": datos.get('usuario'),
    "correo": datos.get('correo')
});

fetch("http://localhost:44490/api/login", requestOptions)
    .then(response => response(text))
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    
    response = JSON.parse(response.text)
    if (response.status == "Success") {
        ingresar();
    }
