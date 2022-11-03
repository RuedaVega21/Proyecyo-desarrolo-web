formulario.addEventListener('submit', function(e){
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var datos = new FormData(formulario);

    if(document.getElementById('cantidad').checked){
        var raw = JSON.stringify({
            "nombre": datos.get('nombre'),
            "cantidad": parseFloat(datos.get('canpor')),
            "porcentaje": "null",
            "fecha_aplicacion": datos.get('fecha_aplicacion'),
        });
    } else if(document.getElementById('porcentaje').checked){
        var raw = JSON.stringify({
            "nombre": datos.get('nombre'),
            "cantidad": "null",
            "porcentaje": parseFloat(datos.get('canpor')),
            "fecha_aplicacion": datos.get('fecha_aplicacion'),
        });
    }

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("http://127.0.0.1:5000/api/bono/crear/", requestOptions)
    .then(response => response.json())
    .then(result => ingresar(result))
    .catch(error => console.log('error', error));

    function ingresar(result) {
        console.log(result.status)
        if (result.status == "Success") {
            alert("Bono creado");
            window.location.href = "generar_bonos.html";
        }else{ 
            alert(result.detail)
        }
    }
});

            