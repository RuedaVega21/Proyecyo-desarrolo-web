from main import app
from flask_pymongo import PyMongo
from bson import json_util

mongo = PyMongo(app)
db = mongo.db.movies

def get_user_data(username):
    user = db.find()
    response = json_util.dumps(user)
    return response