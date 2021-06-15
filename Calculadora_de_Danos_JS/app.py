from flask import Flask, render_template, request

app = Flask(__name__)

@app.raute('/',method=('GET','POST'))
def home():
    pass
    return render_template()

if __name__ == '__main__':
    app.run(debug=True)