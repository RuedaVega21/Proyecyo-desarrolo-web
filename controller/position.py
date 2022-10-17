from flask import Blueprint, request, jsonify
from flask import current_app
from validator import validate
from utils.environment import get_environment
from model.puesto import create_puesto, get_puesto, delete_puesto, update_puesto

serverConfig = get_environment("Server")
# Obtaining token api key
position_data = Blueprint("position_data", __name__)

@position_data.route("/crearPuesto", methods=["POST"])
def post_position():
    try:
        logger = current_app.logger
        logger.info("url=/api/post_position")
        # Obtaining the data of an application
        rules = {
            "nombre": "required|text",
            "sueldo": "required",
            "horas" : "required",
            "bonos" : "required",
            "precio" : "required",
            "factor_hora_extra" :"required"
        }

        data = request.json

        if validate(data, rules):
            # Getting results from the request
            nombre = data["nombre"]
            sueldo = data["sueldo"]
            horas = data["horas"]
            bonos = data["bonos"]
            precio = data["precio"]
            factor_hora_extra = data["factor_hora_extra"]
            response_data = create_puesto(sueldo, precio, nombre, horas, factor_hora_extra, bonos)
            return jsonify(response_data), 200
        else:
            return jsonify({"message":"Rules not followed"}), 400

    except Exception as e:
        logger.info(f"Response={e}")
        return jsonify({"message":"Error during creation"}), 409

@position_data.route("/verPuesto", methods=["POST"])
def get_position():
    try:
        logger = current_app.logger
        logger.info("url=/api/get_position")

        rules = {
            "id" : "required"
        }

        data = request.json

        if validate(data, rules):
            # Getting results from the request
            id = data["id"]
            response_data, code = get_puesto(id)
            if len(response_data) > 0:
                return jsonify(response_data), code
            else:
                return jsonify({"message":"No position found"}), 404
        else:
            return jsonify({"message":"Missing field"}), 400

    except Exception as e:
        logger.info(f"Response={e}")
        return jsonify({"message":"Error during get"}), 409

@position_data.route("/actualizarPuesto", methods=["PUT"])
def put_position():
    try:
        logger = current_app.logger
        logger.info("url=/api/put_position")
        # Obtaining the data of an application
        rules = {
            "id" : "required",
            "nombre": "required|text",
            "sueldo": "required",
            "horas" : "required",
            "bonos" : "required",
            "precio" : "required",
            "factor_hora_extra" :"required"
        }

        data = request.json

        if validate(data, rules):
            # Getting results from the request
            id = data["id"]
            nombre = data["nombre"]
            sueldo = data["sueldo"]
            horas = data["horas"]
            bonos = data["bonos"]
            precio = data["precio"]
            factor_hora_extra = data["factor_hora_extra"]
            response_data = update_puesto(id,sueldo, precio, nombre, horas, factor_hora_extra, bonos)
            return jsonify(response_data), 200
        else:
            return jsonify({"message":"Rules not followed"}), 400

    except Exception as e:
        logger.info(f"Response={e}")
        return jsonify({"message":"Error during update"}), 409

@position_data.route("/eliminarPuesto", methods=["POST"])
def del_position():
    try:
        logger = current_app.logger
        logger.info("url=/api/del_position")

        rules = {
            "id" : "required"
        }

        data = request.json

        if validate(data, rules):
            # Getting results from the request
            id = data["id"]
            response_data, code = delete_puesto(id)
            return jsonify(response_data), code
        else:
            return jsonify({"message":"Missing field"}), 400

    except Exception as e:
        logger.info(f"Response={e}")
        return jsonify({"message":"Error during update"}), 409