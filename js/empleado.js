fetch("http://localhost:44490/api/login", requestOptions)
    .then(response => response(text))
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    
    response = JSON.parse(response.text)
    if (response.status == "Success") {
        ingresar();
    }
