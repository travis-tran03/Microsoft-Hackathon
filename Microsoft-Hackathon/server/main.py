import Flask
import marshmallow

app = Flask(__name__)

@app.route("/")
def HelloWorld():
    return "<p>Hello World!</p>"