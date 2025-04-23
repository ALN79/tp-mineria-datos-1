from flask import Flask, jsonify, send_from_directory
import json
import os
from flask_cors import CORS 
from utils.limpiar_datos import limpiar_datos
import pandas as pd

app = Flask(__name__)
CORS(app) 

# Endpoint para servir los datos de ventas globales
@app.route('/data/ventas_globales_pie.json')
def ventas_globales_pie():
    # Lógica para generar los datos del pie chart
    df = limpiar_datos()
    publisher_sales = df.groupby('Genre')['Global_Sales'].sum().sort_values(ascending=False)
    pie_data = {
        'labels': list(publisher_sales.head(10).index),
        'values': list(publisher_sales.head(10).values)
    }
    return jsonify(pie_data)

# Endpoint para servir los datos del heatmap
@app.route('/data/heatmap_ventas.json')
def heatmap_ventas():
    # Lógica para generar los datos del heatmap
    df = limpiar_datos()
    heatmap_data = df.groupby('Genre')[['NA_Sales', 'EU_Sales', 'JP_Sales', 'Other_Sales']].mean()
    heatmap_json = {
        'z': heatmap_data.values.tolist(),
        'x': heatmap_data.columns.tolist(),
        'y': heatmap_data.index.tolist()
    }
    return jsonify(heatmap_json)

# Endpoint para servir los datos del bar chart
@app.route('/data/genero_por_empresa.json')
def genero_por_empresa():
    # Lógica para generar los datos del bar chart
    df = limpiar_datos()
    top_publishers = df['Publisher'].value_counts().head(10).index
    df_filtered = df[df['Publisher'].isin(top_publishers)]
    genre_publisher = df_filtered.groupby(['Publisher', 'Genre']).size().unstack().fillna(0)

    bar_data = {
        'publishers': genre_publisher.index.tolist(),
        'genres': genre_publisher.columns.tolist(),
        'data': genre_publisher.values.tolist()
    }
    return jsonify(bar_data)

# Sirve los archivos estáticos (para servir imágenes si es necesario)
@app.route('/static/<path:filename>')
def static_files(filename):
    return send_from_directory(os.path.join(app.root_path, 'public'), filename)

if __name__ == '__main__':
    app.run(debug=True)
