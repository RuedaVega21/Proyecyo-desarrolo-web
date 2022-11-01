formulario.addEventListener('submit', function(e){
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var datos = new FormData(formulario);

    var raw = JSON.stringify({
        "factor_hora_extra": datos.get('factor_hora_extra'),
        "horas": datos.get('horas'),
        "nombre": datos.get('nombre'),
        "precio": datos.get('precio'),
        "sueldo": datos.get('sueldo')
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };
    
    fetch("http://127.0.0.1:5000/api/puesto/crear/", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
});
