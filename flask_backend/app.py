from flask import Flask, render_template, request
import json, os, pickle
from pickleFuncs import postPickle, getPickle

app = Flask(__name__)

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
        #print(JSON_sent)
        postPickle(request.get_json())
        return json.dumps(request.get_json())
    if request.method == 'GET':
        pickle = getPickle()
        return json.dumps(pickle)


if __name__ == '__main__':
    app.run(debug=True)