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
db = mongo.db.bono

def get_bono(id):
    bono = db.find_one({"_id": ObjectId(id)})
    
    return bono

def delete_bono(id):
    bono = db.find_one_and_delete({"_id":ObjectId(id)})
    
    return bono

def create_bono( bono_id,   nombre,   cantidad,   porcentaje,   fecha_aplicacion,  empleado_id ):
    bono = db.insert_one({ "bono_id":bono_id,   "nombre":nombre,   "cantidad":cantidad,   "porcentaje":porcentaje,   "fecha_aplicacion":fecha_aplicacion,  "empleado_id":empleado_id })
    return bono

def update_bono(id,bono_id,   nombre,   cantidad,   porcentaje,   fecha_aplicacion,  empleado_id):
    

    bono = db.update_one({"_id":ObjectId(id)}, {"$set": { "bono_id":bono_id,   "nombre":nombre,   "cantidad":cantidad,   "porcentaje":porcentaje,   "fecha_aplicacion":fecha_aplicacion,  "empleado_id":empleado_id  } })
    
    return bono