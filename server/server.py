from flask import Flask, request

import firebase_admin
import itertools
from firebase_admin import credentials
from firebase_admin import firestore
from firebase_admin import storage
from uuid import uuid4

db = firestore.client()

app = Flask(__name__)


@app.route('/')
def index():
    return "Hello World!"


@app.route('/<difficulty>', methods=['GET'])
def diff(difficulty):
    result = db.collection("difficulty").document(difficulty).get()
    return result.to_dict()


@app.route('/file/upload/<id>')
def upload(id):
    # the name of the file on the site + magic
    fileName = "sample.mp3"
    bucket = storage.bucket()
    blob = bucket.blob(fileName)

    # custom token
    token = uuid4()
    metadata = {"firebaseStorageDownloadTokens": token}
    blob.metadata = metadata

    # uploading and making the file public
    blob.upload_from_filename(fileName)
    blob.make_public()

    # link to the mp3 file
    link = "https://firebasestorage.googleapis.com/v0/b/devs-2022.appspot.com/o/{}?alt=media&token={}".format(
        fileName, token)
    # print(blob.public_url)

    # handles updating the users video links
    result = db.collection('user').document(id).get().to_dict()
    videoLinks = result['videoLinks']
    videoLinks.append(link)
    db.collection('user').document(id).update({"videoLinks": videoLinks})
    return result


@app.route('/<id>/score', methods = ['GET', 'POST'])
def score(id):
    resultSnap = db.collection('user').document(id).get()
    result = resultSnap.to_dict()
    return result

if __name__ == "__main__":
    app.run(debug=True)
