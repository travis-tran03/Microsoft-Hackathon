import requests
from dotenv import load_dotenv
import os

def azureapi(input):
    load_dotenv("Microsoft-Hackathon/server/.env")

    service_name = "mhservice"
    api_version = "2023-11-01"
    admin_key = os.getenv("ADMIN_KEY")
    index_name = "azuresql-index3"


    url = f"https://{service_name}.search.windows.net/indexes/{index_name}/docs?api-version={api_version}&search={input}"


    # Define headers
    headers = {
        "Content-Type": "application/json",
        "api-key": admin_key
    }

    # Make a GET request
    response = requests.get(url, headers=headers)

    results = []

    for i in range (3):
        try:
            results.append(response.json()["value"][i]["Majors"])

        except:
            print ("")

    return results