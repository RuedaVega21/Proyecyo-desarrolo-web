from main import app
from bson import json_util
from flask import Blueprint, session, abort, request, jsonify
from flask import current_app
from utils.config import http_error_dict
from validator import validate
from utils.environment import get_environment
from flask_pymongo import PyMongo
from bson.objectid import ObjectId


mongo = PyMongo(app)
db = mongo.db.descuento

def get_descuento(id):
    descuento = db.find_one({"_id": ObjectId(id)})
    
    return descuento

def delete_descuento(id):
    descuento = db.find_one_and_delete({"_id":ObjectId(id)})
    
    return descuento

def create_descuento( descuento_id, nombre, porcentaje,   fecha_aplicacion,   cantidad,   empleado_id ):
    descuento = db.insert_one({ "descuento_id":descuento_id,   "nombre":nombre,   "porcentaje":porcentaje,   "fecha_aplicacion":fecha_aplicacion,   "cantidad": cantidad,   "empleado_id":empleado_id })
    return descuento

def update_descuento(id,descuento_id, nombre, porcentaje,   fecha_aplicacion,   cantidad,   empleado_id):
    

    descuento = db.update_one({"_id":ObjectId(id)}, {"$set": { "descuento_id":descuento_id,   "nombre":nombre,   "porcentaje":porcentaje, "fecha_aplicacion":fecha_aplicacion, "cantidad": cantidad,   "empleado_id":empleado_id } })
    
    return descuento