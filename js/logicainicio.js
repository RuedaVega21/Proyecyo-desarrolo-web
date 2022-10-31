document.querySelector('#btnIngresar').addEventListener('click', inicarSesion());

function inicarSesion(){
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
    "user": "Sebas_213",
    "password": ""
});

var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};

fetch("http://localhost:44490/api/login", requestOptions)
    .then(response => response(text))
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    
    response = JSON.parse(response.text)
    if (response.status == "Success") {
        ingresar();
    }
}

function ingresar() {
    var rol = sessionStorage.getItem('rolActivo');
    console.log(rol);
    switch (rol) {
        case '1':
            console.log("pagina");
            window.location.href = 'pagina.html';
            break;
        default:
            console.log("index");
            window.location.href = 'index.html';
            break;
    }
}
