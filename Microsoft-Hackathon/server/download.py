import pandas as pd

df = pd.read_csv('Microsoft-Hackathon/server/All_Majors_1.csv')
testDF = df[['Departments', 'Majors', 'Majors-href', 'Description']]

print(testDF.info())

'''
ALTER TABLE AllMajors
RENAME COLUMN Department TO Departments
'''

'''
ALTER TABLE AllMajors
ADD COLUMN Majors-href varchar(255) AFTER Majors;
'''

'''
(['web-scraper-order', 'web-scraper-start-url', 'Departments',
       'Departments-href', 'Majors', 'Majors-href', 'Description'],
      dtype='object')
'''