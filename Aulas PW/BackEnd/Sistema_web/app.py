from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def hello():
    user = "Gabriel Henrique"
    return render_template('index.html', user = user)

@app.route('/sobre')
def sobre():
    user = "Gabriel Henrique"
    return render_template('sobre.html', user = user)

if __name__ == "__main__":
    # app.run(port=8000) Mudar a porta
    app.run(debug = True)