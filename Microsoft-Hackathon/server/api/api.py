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

# Download CSV
df = pd.read_csv('Microsoft-Hackathon/server/All_Majors_1.csv').rename(columns={"Majors-href": "Majors_href"})
splitDF = df[['Departments', 'Majors', 'Majors_href', 'Description']]

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
            columns = request.args.get('columns')

            query = f"SELECT {columns} FROM AllMajors"
            result = conn.execute(text(query))

            rows = result.fetchall()

            rowDF = pd.DataFrame(rows)

            print(rowDF.columns)

            print('printing head: ', rowDF.head(10))

    return df.to_json()

@app.route("/all", methods=['GET'])
def getAllData():
    with app.app_context():
        with db.engine.connect() as conn:
            splitDF.to_sql("AllMajors", conn, if_exists="replace")

            query = f"SELECT * FROM dbo.AllMajors"
            result = conn.execute(text(query))

            rows = result.fetchall()

            resultDF = pd.DataFrame(rows)

            print(resultDF.head(10))

            return resultDF.head(10).to_json()



if __name__ == '__main__':
    app.run(debug=True)