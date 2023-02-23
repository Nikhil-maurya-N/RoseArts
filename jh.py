from flask import Flask, render_template, request
import sqlite3

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/search', methods=['POST'])
def search():
    name = request.form['name']

    conn = sqlite3.connect('database.db')
    c = conn.cursor()

    c.execute("SELECT * FROM users WHERE name LIKE ?", (f"%{name}%",))
    results = c.fetchall()

    conn.close()

    return render_template('results.html', results=results)
