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
db = mongo.db.familiar

def get_familiar(id):
    familiar = db.find_one({"_id": ObjectId(id)})
    
    return familiar

def delete_familiar(id):
    familiar = db.find_one_and_delete({"_id":ObjectId(id)})
    
    return familiar

def create_familiar(  familiar_id,  nombre_primero,nombre_segundo,   apellido_primero,   apellido_segundo,   telefono1,   telefono2,   parentesco,   empleado_id):
    familiar = db.insert_one({   "familiar_id":familiar_id,   "nombre_primero":nombre_primero,   "nombre_segundo": nombre_segundo,   "apellido_primero": apellido_primero,   "apellido_segundo": apellido_segundo,   "telefono1": telefono1,   "telefono2": telefono2,   "parentesco": parentesco,   "empleado_id": empleado_id })
    
    return familiar

def update_familiar(id, familiar_id,  nombre_primero,nombre_segundo,   apellido_primero,   apellido_segundo,   telefono1,   telefono2,   parentesco,   empleado_id):
    

    familiar = db.update_one({"_id":ObjectId(id)}, {"$set": {"familiar_id":familiar_id,   "nombre_primero":nombre_primero,   "nombre_segundo": nombre_segundo,   "apellido_primero": apellido_primero,   "apellido_segundo": apellido_segundo,   "telefono1": telefono1,   "telefono2": telefono2,   "parentesco": parentesco,   "empleado_id": empleado_id} })
    
    return familiar