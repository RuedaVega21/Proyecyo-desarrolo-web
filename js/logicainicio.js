// document.querySelector('#btnIngresar').addEventListener('click', inicarSesion());

function inicarSesion(){
    var Correo = '';
    var Contra = '';
    var Acesso = false;

    Correo = document.querySelector('#txtCorreo').value;
    Contra = document.querySelector('#txtContra').value;

    Acesso = ValidarUsuario(Correo, Contra);
    
    if (Acesso == true) {
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