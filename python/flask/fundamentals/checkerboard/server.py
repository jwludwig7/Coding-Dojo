from flask import Flask, render_template 
app = Flask(__name__)



@app.route('/')
def int_render():         
    return "yerrrrrrrr" 

@app.route('/<x>/<y>/<change_color_x>/<change_color_y>')
def checker_board(x,y,change_color_x,change_color_y):
    input1 = int(x)
    input2 = int(y)
    ccx = change_color_x
    ccy = change_color_y
    return render_template("index.html", input1=input1, input2=input2, ccx=ccx, ccy=ccy)



if __name__=="__main__": 
    app.run(debug=True)

