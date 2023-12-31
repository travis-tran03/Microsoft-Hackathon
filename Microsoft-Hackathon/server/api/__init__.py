from flask import Flask, Blueprint, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

from sqlalchemy import create_engine, text
from sqlalchemy.exc import SQLAlchemyError

import pyodbc
from urllib import parse

import pandas as pd
import pandas.io.sql as psql

from dotenv import load_dotenv
import os

from .extensions import db
from .azureapi import azureapi

def create_app():
    # Download CSV
    df = pd.read_csv('Microsoft-Hackathon/server/All_Majors_1.csv').rename(columns={"Majors-href": "Majors_href"})
    splitDF = df[['Departments', 'Majors', 'Majors_href', 'Description']]

    # Connect to Databsae
    #load_dotenv("Microsoft-Hackathon/server/.env")

    #connectionString = os.environ.get("AZURESQLCONNECTIONSTRING")

    #params = parse.quote_plus(connectionString)

    # Initialize Flask app
    app = Flask(__name__)
    CORS(app)

    '''
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mssql+pyodbc:///?odbc_connect=%s' % params
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)
    '''
    '''
    EXAMPLE HOW TO USE SQLALCHEMY WITH AZURE SQL DATABASE

    with app.app_context(): MUST USE LINE
        with db.engine.connect() as conn: MUST USE LINE TO EXECUTE RAW SQL
            result = conn.execute(text("SELECT * FROM AllMajors")) DO THE SQL QUERYU

            PRINT ALL CURSOR RESULTS
            for row in result:
                print(row.Department)
    '''
    # API Routes
    @app.route("/find", methods=['POST'])
    def findMajor():
        with app.app_context():
            # Example call: http://{domain}:PORTS/find?user_text="I am here today and alive."
            #userText = request.args.get('user_text')
            userText = request.json['user_text']
                
            # Implement AI Sevices Function here
            results = azureapi(userText)
            
            return results
        
    @app.route("/get", methods='GET')
    def get():
        return jsonify("Hello World")
        
    @app.route("/")
    def page():
        return "Hello World"

    '''
    @app.route("/get", methods=['GET'])
    def getColumns():
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

                query = f"SELECT * FROM AllMajors"
                result = conn.execute(text(query))

                rows = result.fetchall()

                resultDF = pd.DataFrame(rows)

                print(resultDF.head(10))

                return resultDF.head(10).to_json()
    '''


    return app