# byCript
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
    logger = current_app.logger
    response = {}
    data = ""
    status = "Error"
    detail = ""
    code = 409
    try:
        username = request_data["user"]
        password = request_data["password"]
        #Getting data from mongo
        array_user = get_user_data(username)
        logger.info(array_user)
        #Validating if user exists
        if len(array_user) > 0:
            pass_user = array_user["password"]

            pass_bytes = bytes(password, encoding="utf-8")
            pass_user_bytes = bytes(pass_user, encoding="utf-8")
            #Comparing password
            if bcrypt.checkpw(pass_bytes, pass_user_bytes):
                array_user.pop("password")
                data = array_user
                status = "Success"
                code = 200
            else:
                detail = "Incorrect password"
                data = ""

        else:
            detail = "No user with this username was found."
    except Exception as e:
        status = "Error"
        detail = str(e)

    response["data"] = data
    response["status"] = status
    response["detail"] = detail
    return response, code