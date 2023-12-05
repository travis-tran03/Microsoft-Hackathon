import requests

service_name = "mhservice"
api_version = "2023-11-01"
admin_key = "Nc6MjgForLgwp0UbIokY8eZyhXcR5fscArVaeUW8cjAzSeAZZp28"
index_name = "azuresql-index3"
input = "tech"

# Define the API endpoint
url = f"https://{service_name}.search.windows.net/indexes/{index_name}/docs?api-version={api_version}&search={input}"


# Define headers
headers = {
    "Content-Type": "application/json",
    "api-key": admin_key  # Use api-key for authentication
}

# Make a GET request to search
response = requests.get(url, headers=headers)

# Check the response status
if response.status_code == 200:
    # Process and display the search results
    print(response.json())

else:
    print(f"Error: {response.status_code} - {response.text}")
