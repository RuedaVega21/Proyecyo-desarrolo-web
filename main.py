from logging import root
from flask import Flask, render_template, session, abort, redirect, url_for, request
from flask.logging import create_logger
from logging.config import dictConfig
from os import getenv
from base64 import b64decode
from json import dumps
from jinja2.utils import url_quote
from werkzeug.exceptions import BadRequest, Unauthorized, Conflict, ServiceUnavailable
from utils.environment import load_environment, get_environment

#
#   Create app and load ENV
#
#load_environment("/usr/src/app/ssl/config-back-json")
load_environment("/home/esgodra/dataFiles/Documentos/GitHub/Proyecyo-desarrolo-web/ssl/config-back-json")

serverConfig = get_environment("Server")
dictConfig({
    'version': 1,
    'formatters': {'default': {
        'format': '[%(asctime)s] %(levelname)s: %(module)s: %(message)s',
    }},
    'handlers': {'wsgi': {
        'class': 'logging.StreamHandler',
        'stream': 'ext://flask.logging.wsgi_errors_stream',
        'formatter': 'default'
    }},
    'root': {
        'level': 'INFO',
        'handlers': ['wsgi']
    }
})
app = Flask(__name__)
app.config['SESSION_COOKIE_NAME'] = serverConfig['SessionName']
app.secret_key = b64decode(serverConfig['Secret'])
rooturl = serverConfig['AppRoot']

logger = create_logger(app)
logger.info(f"ENV_MODE: {serverConfig['EnvMode']}")
logger.info(f"ROOT: {rooturl}")
logger.info(f"SESSION: {app.config['SESSION_COOKIE_NAME']}")

type_response = "application/json"

##########################
#                        #
# Add Custom Controllers #
#                        #
##########################

from controller.password import pass_data
app.register_blueprint(pass_data, url_prefix=rooturl)

@app.errorhandler(BadRequest)
def handle_bad_request(e):
    """Return JSON instead of HTML for HTTP errors."""
    # start with the correct headers and status code from the error
    response = e.get_response()
    # replace the body with JSON
    response.data = dumps({
        "status": "Error",
        "detalle": e.name,
        "data": {},
    })
    response.content_type = type_response
    return response

@app.errorhandler(Unauthorized)
def handle_unauthorized(e):
    """Return JSON instead of HTML for HTTP errors."""
    # start with the correct headers and status code from the error
    response = e.get_response()
    # replace the body with JSON
    response.data = dumps({
        "status": "Error",
        "detalle": e.name,
        "data": {},
    })
    response.content_type = type_response
    return response

@app.errorhandler(Conflict)
def handle_conflict(e):
    """Return JSON instead of HTML for HTTP errors."""
    # start with the correct headers and status code from the error
    response = e.get_response()
    # replace the body with JSON
    response.data = dumps({
        "status": "Error",
        "detalle": e.name,
        "data": {},
    })
    response.content_type = type_response
    return response


@app.errorhandler(ServiceUnavailable)
def handle_service_unavailable(e):
    """Return JSON instead of HTML for HTTP errors."""
    # start with the correct headers and status code from the error
    response = e.get_response()
    # replace the body with JSON
    response.data = dumps({
        "status": "Error",
        "detalle": e.name,
        "data": {},
    })
    response.content_type = type_response
    return response

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=443, ssl_context='adhoc')