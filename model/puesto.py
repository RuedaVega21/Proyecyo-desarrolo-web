from main import app
from bson import json_util
from flask import Blueprint, session, abort, request, jsonify
from flask import current_app
from utils.config import http_error_dict
from validator import validate
from utils.environment import get_environment
from flask_pymongo import PyMongo
from bson.objectid import ObjectId

serverConfig = get_environment("Server")
prueba_data = Blueprint("prueba_data", __name__)

mongo = PyMongo(app)
db = mongo.db.puesto

def get_puesto(id):
    puesto = db.find_one({"_id": ObjectId(id)})
    
    return puesto

def delete_puesto(id):
    puesto = db.find_one_and_delete({"_id":ObjectId(id)})
    
    return puesto

def create_puesto(sueldo, precio, nombre, horas, factor_hora_extra, bonos):
    puesto = db.insert_one({"sueldo": sueldo, "precio": precio, "nombre": nombre, "horas": horas, "factor_hora_extra": factor_hora_extra, "bonos": bonos})
    
    return puesto

def update_puesto(id, sueldo, precio, nombre, horas, factor_hora_extra, bonos):
    puesto = db.find_one({"_id":ObjectId(id)})

    puesto = db.update_one({"_id":ObjectId(id)}, {"$set": {"sueldo": sueldo, "precio": precio, "nombre": nombre, "horas": horas, "factor_hora_extra": factor_hora_extra, "bonos": bonos}})
    
    return puesto