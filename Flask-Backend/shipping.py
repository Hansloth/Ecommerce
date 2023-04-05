from flask import Flask, request
import time, random

app = Flask(__name__)

#Set route to /bank/process
@app.route('/shipping/process', methods = ['POST'])
def home():
    info = request.get_json()
    print(">>>>>", info)
    #Sleep is to show async behavior for ProcessOrder microservice
    time.sleep(5)
    return {"label":random.randrange(1000000,100000000)}, 201

#Program only runs if it is main
if __name__ == '__main__':
    app.run(host="localhost", port=5554,debug=True,threaded=True)