formulario.addEventListener('submit', function(e){
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var datos = new FormData(formulario);

    var raw = JSON.stringify({
        "correo": datos.get('txtCorreo'),
        "contraseña": datos.get('txtContra')
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://127.0.0.1:8000/api/login", requestOptions)
    .then(response => response.json())
    .then(result => ingresar(result))
    .catch(error => console.log('error', error));

    function ingresar(result) {
        console.log(result.status)
        if (result.status == "Success") {
            window.location.href = "pagina.html";
        }else{ 
            alert(result.detail)
        }
    }
});

