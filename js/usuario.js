
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

fetch("", {
    method: 'POST',
    body: datos
})
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    