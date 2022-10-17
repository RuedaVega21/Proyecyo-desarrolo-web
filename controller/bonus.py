from flask import Blueprint, request, jsonify
from flask import current_app
from validator import validate
from utils.environment import get_environment
from model.bono import create_bono, get_bono, delete_bono, update_bono

serverConfig = get_environment("Server")
# Obtaining token api key
bonus_data = Blueprint("bonus_data", __name__)

@bonus_data.route("/crearBono", methods=["POST"])
def post_bonus():
    try:
        logger = current_app.logger
        logger.info("url=/api/post_bonus")
        # Obtaining the data of an application
        rules = {
            "nombre": "required",
            "cantidad": "integer",
            "porcentaje" : "required",
            "fecha_aplicacion" : "required|date",
            "id_empleado" : "required"
        }

        data = request.json

        if validate(data, rules):
            # Getting results from the request
            nombre = data["nombre"]
            cantidad = data["cantidad"]
            porcentaje = data["porcentaje"]
            fecha_aplicacion = data["fecha_aplicacion"]
            id_empleado = data["id_empleado"]

            response_data = create_bono(nombre, cantidad, porcentaje, fecha_aplicacion, id_empleado)
            return jsonify(response_data), 200
        else:
            return jsonify({"message":"Rules not followed"}), 400

    except Exception as e:
        logger.info(f"Response={e}")
        return jsonify({"message":"Error during creation"}), 409

@bonus_data.route("/verBono", methods=["POST"])
def get_bonus():
    try:
        logger = current_app.logger
        logger.info("url=/api/get_bonus")

        rules = {
            "id" : "required"
        }

        data = request.json

        if validate(data, rules):
            # Getting results from the request
            id = data["id"]
            response_data, code = get_bono(id)
            if len(response_data) > 0:
                return jsonify(response_data), code
            else:
                return jsonify({"message":"No bonus found"}), 404
        else:
            return jsonify({"message":"Missing field"}), 400

    except Exception as e:
        logger.info(f"Response={e}")
        return jsonify({"message":"Error during get"}), 409

@bonus_data.route("/actualizarBono", methods=["PUT"])
def put_bonus():
    try:
        logger = current_app.logger
        logger.info("url=/api/put_bonus")
        # Obtaining the data of an application
        rules = {
            "id" : "required",
            "nombre": "required",
            "cantidad": "integer",
            "porcentaje" : "required",
            "fecha_aplicacion" : "required|date",
            "id_empleado" : "required"
        }

        data = request.json

        if validate(data, rules):
            # Getting results from the request
            id = data["id"]
            nombre = data["nombre"]
            cantidad = data["cantidad"]
            porcentaje = data["porcentaje"]
            fecha_aplicacion = data["fecha_aplicacion"]
            id_empleado = data["id_empleado"]
            response_data = update_bono(id,nombre, cantidad, porcentaje, fecha_aplicacion, id_empleado)
            return jsonify(response_data), 200
        else:
            return jsonify({"message":"Rules not followed"}), 400

    except Exception as e:
        logger.info(f"Response={e}")
        return jsonify({"message":"Error during update"}), 409

@bonus_data.route("/eliminarBono", methods=["POST"])
def del_bonus():
    try:
        logger = current_app.logger
        logger.info("url=/api/del_bonus")

        rules = {
            "id" : "required"
        }

        data = request.json

        if validate(data, rules):
            # Getting results from the request
            id = data["id"]
            response_data, code = delete_bono(id)
            return jsonify(response_data), code
        else:
            return jsonify({"message":"Missing field"}), 400

    except Exception as e:
        logger.info(f"Response={e}")
        return jsonify({"message":"Error during delete"}), 409