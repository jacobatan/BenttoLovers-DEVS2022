from flask import Flask

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from firebase_admin import storage
from uuid import uuid4


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

    link = "https://firebasestorage.googleapis.com/v0/b/devs-2022.appspot.com/o/{}?alt=media&token={}".format(
        fileName, token)
    print(link)
    print(blob.public_url)
    resultSnap = db.collection('user').document("vWMxQsVn4G5f5UNatjcE").get()
    result = resultSnap.to_dict()
    videoLinks = result['videoLinks']
    videoLinks.append("google.com")
    db.collection('user').document(
        "vWMxQsVn4G5f5UNatjcE").update({"videoLinks": videoLinks})

    return result


if __name__ == "__main__":
    app.run(debug=True)
