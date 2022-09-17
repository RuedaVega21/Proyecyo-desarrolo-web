# Backend

* **El archivo de configuracion va en la carpeta ssl que por seguridad esta incluida en el .gitignore, por lo que se debe crear en el repositorio local**
* Para agregar una nueva libreria agregarlo en requirements.sh
* Cada servicio nuevo expuesto debe ser registrado en el archivo main.py
* Para la obtencion de variables de entorno utilizar get_environment() con el nombre de la llave que se requiera
* De preferencia colocar los comentarios en inglés (deepl.com es una buena opcion para traducirlos)

## Comando para construir el backend
* docker stop planilla_back; docker rm planilla_back; docker image rm planilla_back; docker build . -t planilla_back; docker run -d -p 44490:443/tcp --restart=always --name planilla_back planilla_back

El backend se consulta en http://localhost:44490/api/servicio