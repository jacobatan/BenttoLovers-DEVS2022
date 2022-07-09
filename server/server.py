from flask import Flask

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

app = Flask(__name__)


@app.route('/')
def index():
    return "Hello World!"


@app.route('/<difficulty>')
def diff(difficulty):
    result = db.collection("difficulty").document(difficulty).get()
    return result.to_dict()


if __name__ == "__main__":
    app.run(debug=True)
