import pandas as pd


df = pd.read_csv('./data/vgsales.csv')

print(df.head())


# # para guardar en json
# import json

#* esto para guardar en json
# Nombre_Grafico.to_json('nombre_grafico.json', orient='records')

#* esto para react en un componente
# import nombrecomponente from './nombrecomponente.json'
