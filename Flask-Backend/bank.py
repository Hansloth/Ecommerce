from flask import Flask, request

app = Flask(__name__)

#Set route to /bank/process
@app.route('/bank/process', methods = ['POST'])
def home():
    info = request.get_json()
    print(">>>>>", info)
    return {"confirmation":271828182846}, 201

#Program only runs if it is main
if __name__ == '__main__':
    app.run(host="localhost", port=5555,debug=True,threaded=True)