from main import app
from flask_pymongo import PyMongo
from bson import json_util
from flask import Blueprint, session, abort, request, jsonify
from flask import current_app
from utils.config import http_error_dict
from validator import validate
from utils.environment import get_environment

serverConfig = get_environment("Server")
user_data = Blueprint("user_data", __name__)

mongo = PyMongo(app)
db = mongo.db.usuarios
# Rest API to validate a user
@user_data.route("/login", methods=["POST"])
def get_user_by_password():
    try:
        logger = current_app.logger
        logger.info("url=/api/login")
        # Obtaining the data of an application
        rules = {"user": "required", "password": "required"}

        data = request.json

        if validate(data, rules):
            # Getting results from the request
            mongo_data, code = get_user_data(data)
            return jsonify(mongo_data), code
        else:
            abort(400)

    except Exception as e:
        logger.info(f"Response={e}")
        abort(http_error_dict[type(e).__name__])

def get_user_data(username):
    user = db.find()
    response = json_util.dumps(user)
    return response, 200