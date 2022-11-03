formulario.addEventListener('submit', function(e){
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var datos = new FormData(formulario);

    var raw = JSON.stringify({
        "factor_hora_extra": parseFloat(datos.get('factor_hora_extra')),
        "horas": parseFloat(datos.get('horas')),
        "nombre": datos.get('nombre'),
        "precio": parseFloat(datos.get('precio')),
        "sueldo": parseFloat(datos.get('sueldo'))
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };
    
    fetch("http://127.0.0.1:5000/api/puesto/crear/", requestOptions)
    .then(response => response.json())
    .then(result => ingresar(result))
    .catch(error => console.log('error', error));

    function ingresar(result) {
        console.log(result.status)
        if (result.status == "Success") {
            alert("Puesto creado");
            window.location.href = "generar_puesto.html";
        }else{ 
            alert(result.detail)
        }
    }
});
