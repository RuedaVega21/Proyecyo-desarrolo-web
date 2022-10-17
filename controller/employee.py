from flask import Blueprint, request, jsonify
from flask import current_app
from validator import validate
from utils.environment import get_environment
from model.empleado import create_empleado, get_empleado, delete_empleado, update_empleado

serverConfig = get_environment("Server")
# Obtaining token api key
employee_data = Blueprint("employee_data", __name__)

@employee_data.route("/crearEmpleado", methods=["POST"])
def post_employee():
    try:
        logger = current_app.logger
        logger.info("url=/api/post_employee")
        # Obtaining the data of an application
        rules = {
            "nombre_primero": "required",
            "nombre_segundo": "required",
            "apellido_primero" : "required",
            "apellido_segundo" : "required",
            "fecha_nacimiento" : "required|date",
            "telefono1" :"required|size:8",
            "telefono2" : "required|size:8",
            "id_puesto" : "required"
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
            id_puesto = data["id_puesto"]
            response_data = create_empleado(nombre_primero, nombre_segundo, apellido_primero, apellido_segundo, fecha_nacimiento, telefono1, telefono2, id_puesto)
            return jsonify(response_data), 200
        else:
            return jsonify({"message":"Rules not followed"}), 400

    except Exception as e:
        logger.info(f"Response={e}")
        return jsonify({"message":"Error during creation"}), 409

@employee_data.route("/verEmpleado", methods=["POST"])
def get_employee():
    try:
        logger = current_app.logger
        logger.info("url=/api/get_employee")

        rules = {
            "id" : "required"
        }

        data = request.json

        if validate(data, rules):
            # Getting results from the request
            id = data["id"]
            response_data, code = get_empleado(id)
            if len(response_data) > 0:
                return jsonify(response_data), code
            else:
                return jsonify({"message":"No employee found"}), 404
        else:
            return jsonify({"message":"Missing field"}), 400

    except Exception as e:
        logger.info(f"Response={e}")
        return jsonify({"message":"Error during get"}), 409

@employee_data.route("/actualizarEmpleado", methods=["PUT"])
def put_employee():
    try:
        logger = current_app.logger
        logger.info("url=/api/put_employee")
        # Obtaining the data of an application
        rules = {
            "nombre_primero": "required",
            "nombre_segundo": "required",
            "apellido_primero" : "required",
            "apellido_segundo" : "required",
            "fecha_nacimiento" : "required|date",
            "telefono1" :"required|size:8",
            "telefono2" : "required|size:8",
            "id_puesto" : "required"
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
            id_puesto = data["id_puesto"]
            response_data = update_empleado(id,nombre_primero, nombre_segundo, apellido_primero, apellido_segundo, fecha_nacimiento, telefono1, telefono2,id_puesto)
            return jsonify(response_data), 200
        else:
            return jsonify({"message":"Rules not followed"}), 400

    except Exception as e:
        logger.info(f"Response={e}")
        return jsonify({"message":"Error during update"}), 409

@employee_data.route("/eliminarEmpleado", methods=["POST"])
def del_employee():
    try:
        logger = current_app.logger
        logger.info("url=/api/del_employee")

        rules = {
            "id" : "required"
        }

        data = request.json

        if validate(data, rules):
            # Getting results from the request
            id = data["id"]
            response_data, code = delete_empleado(id)
            return jsonify(response_data), code
        else:
            return jsonify({"message":"Missing field"}), 400

    except Exception as e:
        logger.info(f"Response={e}")
        return jsonify({"message":"Error during delete"}), 409