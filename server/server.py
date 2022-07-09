from flask import Flask

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from firebase_admin import storage

cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred, {'storageBucket': 'devs-2022.appspot.com'})
db = firestore.client()

app = Flask(__name__)


@app.route('/')
def index():
    return "Hello World!"


@app.route('/<difficulty>', methods=['GET'])
def diff(difficulty):
    result = db.collection("difficulty").document(difficulty).get()
    return result.to_dict()


@app.route('/file/upload')
def upload():
    fileName = "sample.mp3"
    bucket = storage.bucket()
    blob = bucket.blob(fileName)
    blob.upload_from_filename(fileName)
    blob.make_public()
    blob.download_to_filename(fileName)
    return "done!"


if __name__ == "__main__":
    app.run(debug=True)
