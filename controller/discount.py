from flask import Blueprint, request, jsonify
from flask import current_app
from validator import validate
from utils.environment import get_environment
from model.descuento import create_descuento, get_descuento, delete_descuento, update_descuento

serverConfig = get_environment("Server")
# Obtaining token api key
discount_data = Blueprint("discount_data", __name__)

@discount_data.route("/crearDescuento", methods=["POST"])
def post_discount():
    try:
        logger = current_app.logger
        logger.info("url=/api/post_discount")
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

            response_data = create_descuento(nombre, cantidad, porcentaje, fecha_aplicacion, id_empleado)
            return jsonify(response_data), 200
        else:
            return jsonify({"message":"Rules not followed"}), 400

    except Exception as e:
        logger.info(f"Response={e}")
        return jsonify({"message":"Error during creation"}), 409

@discount_data.route("/verDescuento", methods=["POST"])
def get_discount():
    try:
        logger = current_app.logger
        logger.info("url=/api/get_discount")

        rules = {
            "id" : "required"
        }

        data = request.json

        if validate(data, rules):
            # Getting results from the request
            id = data["id"]
            response_data, code = get_descuento(id)
            if len(response_data) > 0:
                return jsonify(response_data), code
            else:
                return jsonify({"message":"No discount found"}), 404
        else:
            return jsonify({"message":"Missing field"}), 400

    except Exception as e:
        logger.info(f"Response={e}")
        return jsonify({"message":"Error during get"}), 409

@discount_data.route("/actualizarDescuento", methods=["PUT"])
def put_discount():
    try:
        logger = current_app.logger
        logger.info("url=/api/put_discount")
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
            response_data = update_descuento(id,nombre, cantidad, porcentaje, fecha_aplicacion, id_empleado)
            return jsonify(response_data), 200
        else:
            return jsonify({"message":"Rules not followed"}), 400

    except Exception as e:
        logger.info(f"Response={e}")
        return jsonify({"message":"Error during update"}), 409

@discount_data.route("/eliminarDescuento", methods=["POST"])
def del_discount():
    try:
        logger = current_app.logger
        logger.info("url=/api/del_discount")

        rules = {
            "id" : "required"
        }

        data = request.json

        if validate(data, rules):
            # Getting results from the request
            id = data["id"]
            response_data, code = delete_descuento(id)
            return jsonify(response_data), code
        else:
            return jsonify({"message":"Missing field"}), 400

    except Exception as e:
        logger.info(f"Response={e}")
        return jsonify({"message":"Error during delete"}), 409