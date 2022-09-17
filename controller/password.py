# byCript Admin
import bcrypt
from flask import Blueprint, session, abort, request, jsonify
from flask import current_app
from utils.config import http_error_dict
from validator import validate
from utils.environment import get_environment
from model.user import get_user_data

serverConfig = get_environment("Server")
# Obtaining token api key
pass_data = Blueprint("pass_data", __name__)

# Rest API to validate a user
@pass_data.route("/login", methods=["POST"])
def get_user_by_password():
    try:
        logger = current_app.logger
        logger.info("url=/api/login")
        # Obtaining the data of an application
        rules = {"user": "required", "password": "required"}

        data = request.json

        if validate(data, rules):
            # Getting results from the request
            mongo_data, code = db_login(data)
            return jsonify(mongo_data), code
        else:
            abort(400)

    except Exception as e:
        logger.info(f"Response={e}")
        abort(http_error_dict[type(e).__name__])

def db_login(request_data):
    response = {}
    try:
        username = request_data["user"]
        password = request_data["password"]

        array_user = get_user_data(username)
        if len(array_user) > 0:
            user = array_user[0]
            pass_user = user["password"]

            pass_bytes = bytes(password, encoding="utf-8")
            pass_user_bytes = bytes(pass_user, encoding="utf-8")
            if bcrypt.checkpw(pass_bytes, pass_user_bytes):
                array_user[0].pop("password")
                data = array_user
                status = "Success"
                code = 200
            else:
                detail = "Incorrect pin"
                data = ""

        else:
            detail = "No operator with the phone number was found."
    except Exception as e:
        status = "Error"
        detail = str(e)

    response["data"] = data
    response["status"] = status
    response["detail"] = detail
    return response