formulario.addEventListener('submit', function(e){
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var datos = new FormData(formulario);

var raw = JSON.stringify({
    "cantidad": datos.get('cantidad'),
    "fecha": datos.get('fecha'),
    "planilla_id": datos.get('planilla_id'),
    "empleado_id": datos.get('empleado_id'),
    "valor_calculo": datos.get('valor_calculo')
});

var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};

fetch("http://127.0.0.1:5000/api/hora_extra/crear/", requestOptions)
.then(response => response.json())
.then(result => console.log(result))
.catch(error => console.log('error', error));
});