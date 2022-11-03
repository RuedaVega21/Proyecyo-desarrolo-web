formulario.addEventListener('submit', function(e){
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var datos = new FormData(formulario);

if(document.getElementById('Sumar').checked){
    var raw = JSON.stringify({
        "cantidad": parseFloat(datos.get('cantidad')),
        "fecha": datos.get('fecha'),
        "empleado_id": datos.get('select'),
    });
} else if(document.getElementById('Restar').checked){
    var raw = JSON.stringify({
        "cantidad": - parseFloat(datos.get('cantidad')),
        "fecha": datos.get('fecha'),
        "empleado_id": datos.get('select'),
    });
}

var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};

fetch("http://127.0.0.1:5000/api/hora_extra/crear/", requestOptions)
    .then(response => response.json())
    .then(result => ingresar(result))
    .catch(error => console.log('error', error));

    function ingresar(result) {
        console.log(result.status)
        if (result.status == "Success") {
            alert("Hora creada");
            window.location.href = "generar_horaextra.html";
        }else{ 
            alert(result.detail)
        }
    }
});