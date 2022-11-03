    formulario.addEventListener('submit', function(e){
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var datos = new FormData(formulario);

    var raw = JSON.stringify({
    "bonos": datos.get('select1'),
    "empleado_id": datos.get('select'),
    });

    var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("http://127.0.0.1:8000/api/actualizarBonoEmpleado", requestOptions)
    .then(response => response.json())
    .then(result => ingresar(result))
    .catch(error => console.log('error', error));

    function ingresar(result) {
        console.log(result.status)
        if (result.status == "Success") {
            alert("Bono creado");
            window.location.href = "generar_bono.html";
        }else{ 
            alert(result.detail)
        }
    }
});