function obtenerUsuarios() {
    var listaUsuarios = JSON.parse(localStorage.getItem('listausuariosLs'));

    if (listaUsuarios == null) {
        listaUsuarios = ['1', 'Sebas', 'Rueda', 'jruedav@miumg.edu.gt', 'sebas', '1999-27-12', '1']
    }
    return listaUsuarios;
}

function ValidarUsuario(Correo, Contra) {
    var listaUsuarios = obtenerUsuarios();
    var Acesso = false;

    for (var i = 0; i < listaUsuarios.length; i++){
        if (Correo == listaUsuarios[i][3] && Contra == listaUsuarios[i][4]) {
            Acesso = true;
            sessionStorage.setItem('usuarioActivo', listaUsuarios[i][1] + ' ' + listaUsuarios[i][2]);
            sessionStorage.setItem('rolActivo', listaUsuarios[i][6]);
        }
            
    }
    return Acesso;
}
