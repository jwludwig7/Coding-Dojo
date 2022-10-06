from timeit import repeat
from flask import Flask, render_template
app = Flask(__name__) 

@app.route("/")
def inital_render():
    return "go to http://localhost/play to see somthing cool!!"


@app.route("/play")         
def block_render():
    return render_template("index.html")

@app.route("/play/<number_boxes>")
def block_mult(number_boxes):
    mult = int(number_boxes)
    return render_template("index2.html", mult=mult)

@app.route("/play/<number_boxes>/<color_chg>")
def box_color(number_boxes,color_chg):
    mult = int(number_boxes)
    colorChange = color_chg
    return render_template("index3.html", mult=mult, colorChange=colorChange)

if __name__=="__main__":    
    app.run(debug=True)   
