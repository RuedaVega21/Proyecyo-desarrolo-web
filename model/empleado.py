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
db = mongo.db.empleado

def get_empleado(id):
    empleado = db.find_one({"_id": ObjectId(id)})
    
    return empleado

def delete_empleado(id):
    puesto = db.find_one_and_delete({"_id":ObjectId(id)})
    
    return puesto

def create_empleado(telefono2, telefono1, puesto_id, nombre_segundo, nombre_primero,nit,jornada,fecha_nacimiento,estado_id,estado,empleado_id,dpi,carnet_igss,apellido_segundo,apellido_primero):
    empleado = db.insert_one({"telefono2":telefono2,"telefono1":telefono1,"puesto_id":puesto_id,"nombre_segundo": nombre_segundo,"nombre_primero":nombre_primero,"nit":nit,"jornada":jornada,"fecha_nacimiento":fecha_nacimiento,"estado_id":estado_id,"estado":estado,"empleado_id":empleado_id,"dpi":dpi,"carnet_igss":carnet_igss,"apellido_segundo":apellido_segundo,"apellido_primero":apellido_primero})
    
    return empleado

def update_empleado(id, telefono2, telefono1, puesto_id, nombre_segundo, nombre_primero,nit,jornada,fecha_nacimiento,estado_id,estado,empleado_id,dpi,carnet_igss,apellido_segundo,apellido_primero):
    empleado = db.update_one({"_id":ObjectId(id)}, {"$set": {"telefono2":telefono2,"telefono1":telefono1,"puesto_id":puesto_id,"nombre_segundo": nombre_segundo,"nombre_primero":nombre_primero,"nit":nit,"jornada":jornada,"fecha_nacimiento":fecha_nacimiento,"estado_id":estado_id,"estado":estado,"empleado_id":empleado_id,"dpi":dpi,"carnet_igss":carnet_igss,"apellido_segundo":apellido_segundo,"apellido_primero":apellido_primero}})
    
    return empleado