from flask import Flask, request

import firebase_admin
import itertools
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

app = Flask(__name__)

@app.route('/')
def index():
    return "Hello World!"

@app.route('/difficulty/<id>')
def diff(id):
    data = {"words": ["pain", "hate"]}
    db.collection("difficulty").document(" ultra hard").set(data)
    return id

@app.route('/<id>/score', methods = ['GET', 'POST'])
def score(id):
    resultSnap = db.collection('user').document(id).get()
    result = resultSnap.to_dict()
    return result

if __name__ == "__main__":
    app.run(debug=True)
