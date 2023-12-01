from flask import Flask, Blueprint, jsonify, request
from urllib import parse
from sqlalchemy import create_engine, text
from sqlalchemy.exc import SQLAlchemyError
import pyodbc
from dotenv import load_dotenv
from flask_sqlalchemy import SQLAlchemy
import os
from extensions import db
import pandas as pd
import pandas.io.sql as psql
from flask_cors import CORS

# Connect to Databsae
load_dotenv("Microsoft-Hackathon/server/.env")

connectionString = os.environ.get("AZURESQLCONNECTIONSTRING")

params = parse.quote_plus(connectionString)

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mssql+pyodbc:///?odbc_connect=%s' % params
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

'''
EXAMPLE HOW TO USE SQLALCHEMY WITH AZURE SQL DATABASE

with app.app_context(): MUST USE LINE
    with db.engine.connect() as conn: MUST USE LINE TO EXECUTE RAW SQL
        result = conn.execute(text("SELECT * FROM AllMajors")) DO THE SQL QUERYU

        PRINT ALL CURSOR RESULTS
        for row in result:
            print(row.Department)
'''

@app.route("/major", methods=['GET'])
def helloWorld():
    with app.app_context():
        with db.engine.connect() as conn:
            query = "SELECT * FROM AllMajors"
            result = conn.execute(text(query))

            #names = [x[0] for x in result.Department]
            rows = result.fetchall()

            df = pd.DataFrame(rows)

            print('printing head: ', df.head(10))

    return df['Majors'].to_json()

if __name__ == '__main__':
    app.run(debug=True)