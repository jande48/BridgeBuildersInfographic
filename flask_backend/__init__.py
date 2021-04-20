from flask import Flask, render_template, request
import json, os
#from pickleFuncs import postPickle, getPickle
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

environment = 'prod'

if environment == 'dev':
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
else: 
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')
db = SQLAlchemy(app)

class JSONmodelObject(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    JSONinDB =  db.Column(db.String(1000))


@app.route('/')
def main_infographic():
    return render_template('index.html')

@app.route('/auth', methods = ['POST'])
def auth():
    JSON_sent = request.get_json()
    password = os.environ.get('BridgeBuildersPassword')

    if JSON_sent['password'] == password:
        return json.dumps('1')
    else:
        return json.dumps('0')
    
    return json.dumps('1')

@app.route('/getPostPickle', methods = ['GET', 'POST'])
def pickle():
    if request.method == 'POST':
        JSON_sent = request.get_json()
        dbJSONresult = JSONmodelObject.query.first()
        dbJSONresult.JSONinDB = json.dumps(JSON_sent)
        db.session.add(dbJSONresult)
        db.session.commit()
        return json.dumps(request.get_json())
    if request.method == 'GET':
        dbJSONresult = JSONmodelObject.query.first()
        return dbJSONresult.JSONinDB


if __name__ == '__main__':
    app.run(debug=True)