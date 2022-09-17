# byCript Admin
import bcrypt
from flask import Blueprint, session, abort, request, jsonify
from flask import current_app
from utils.config import http_error_dict
from validator import validate
from utils.environment import get_environment
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
            sql_data = {
                "data" : [],
                "status" : "Success",
                "detail" : ""
            }
            code = 200
            return jsonify(sql_data), code
        else:
            abort(400)

    except Exception as e:
        logger.info(f"Response={e}")
        abort(http_error_dict[type(e).__name__])