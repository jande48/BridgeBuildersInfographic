from flask import Flask, render_template, request
import json, os
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



if __name__ == '__main__':
    app.run(debug=True)