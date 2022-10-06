from flask import Flask, render_template, request, redirect, session 

app = Flask(__name__)   
app.secret_key = "password is password"


@app.route('/')         
def counter():
    if "count" in session:
        session["count"] += 1
    else:
        session["count"] = 1


    return render_template("index.html")  

@app.route("/count", methods=["POST"])
def amount_counts():
    if request.form["adjust"]=="reset":
        session["count"] = 0
    elif request.form["adjust"]=="add":
        session["count"] += 1

    return redirect("/")


@app.route("/destroy")
def destroy():
    session.clear()
    return redirect("/")


if __name__=="__main__":      
    app.run(debug=True)   

