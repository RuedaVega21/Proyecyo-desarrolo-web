from flask import Blueprint, request, jsonify
from flask import current_app
from validator import validate
from utils.environment import get_environment
from model.familiar import create_familiar, get_familiar, delete_familiar, update_familiar

serverConfig = get_environment("Server")
# Obtaining token api key
relative_data = Blueprint("relative_data", __name__)

@relative_data.route("/crearFamiliar", methods=["POST"])
def post_relative():
    try:
        logger = current_app.logger
        logger.info("url=/api/post_relative")
        # Obtaining the data of an application
        rules = {
            "nombre_primero": "required",
            "nombre_segundo": "required",
            "apellido_primero" : "required",
            "apellido_segundo" : "required",
            "fecha_nacimiento" : "required|date",
            "telefono1" :"required|size:8",
            "telefono2" : "required|size:8",
            "parentesco" : "required",
            "id_empleado" : "required"
        }

        data = request.json

        if validate(data, rules):
            # Getting results from the request
            nombre_primero = data["nombre_primero"]
            nombre_segundo = data["nombre_segundo"]
            apellido_primero = data["apellido_primero"]
            apellido_segundo = data["apellido_segundo"]
            fecha_nacimiento = data["fecha_nacimiento"]
            telefono1 = data["telefono1"]
            telefono2 = data["telefono2"]
            parentesco = data["parentesco"]
            id_empleado = data["id_empleado"]

            response_data = create_familiar(nombre_primero, nombre_segundo, apellido_primero, apellido_segundo, fecha_nacimiento, telefono1, telefono2, parentesco, id_empleado)
            return jsonify(response_data), 200
        else:
            return jsonify({"message":"Rules not followed"}), 400

    except Exception as e:
        logger.info(f"Response={e}")
        return jsonify({"message":"Error during creation"}), 409

@relative_data.route("/verFamiliar", methods=["POST"])
def get_relative():
    try:
        logger = current_app.logger
        logger.info("url=/api/get_relative")

        rules = {
            "id" : "required"
        }

        data = request.json

        if validate(data, rules):
            # Getting results from the request
            id = data["id"]
            response_data, code = get_familiar(id)
            if len(response_data) > 0:
                return jsonify(response_data), code
            else:
                return jsonify({"message":"No relative found"}), 404
        else:
            return jsonify({"message":"Missing field"}), 400

    except Exception as e:
        logger.info(f"Response={e}")
        return jsonify({"message":"Error during get"}), 409

@relative_data.route("/actualizarFamiliar", methods=["PUT"])
def put_relative():
    try:
        logger = current_app.logger
        logger.info("url=/api/put_relative")
        # Obtaining the data of an application
        rules = {
            "nombre_primero": "required",
            "nombre_segundo": "required",
            "apellido_primero" : "required",
            "apellido_segundo" : "required",
            "fecha_nacimiento" : "required|date",
            "telefono1" :"required|size:8",
            "telefono2" : "required|size:8",
            "parentesco" : "required",
            "id_empleado" : "required"
        }

        data = request.json

        if validate(data, rules):
            # Getting results from the request
            id = data["id"]
            nombre_primero = data["nombre_primero"]
            nombre_segundo = data["nombre_segundo"]
            apellido_primero = data["apellido_primero"]
            apellido_segundo = data["apellido_segundo"]
            fecha_nacimiento = data["fecha_nacimiento"]
            telefono1 = data["telefono1"]
            telefono2 = data["telefono2"]
            parentesco = data["parentesco"]
            id_empleado = data["id_empleado"]
            response_data = update_familiar(id,nombre_primero, nombre_segundo, apellido_primero, apellido_segundo, fecha_nacimiento, telefono1, telefono2, parentesco, id_empleado)
            return jsonify(response_data), 200
        else:
            return jsonify({"message":"Rules not followed"}), 400

    except Exception as e:
        logger.info(f"Response={e}")
        return jsonify({"message":"Error during update"}), 409

@relative_data.route("/eliminarFamiliar", methods=["POST"])
def del_relative():
    try:
        logger = current_app.logger
        logger.info("url=/api/del_relative")

        rules = {
            "id" : "required"
        }

        data = request.json

        if validate(data, rules):
            # Getting results from the request
            id = data["id"]
            response_data, code = delete_familiar(id)
            return jsonify(response_data), code
        else:
            return jsonify({"message":"Missing field"}), 400

    except Exception as e:
        logger.info(f"Response={e}")
        return jsonify({"message":"Error during delete"}), 409