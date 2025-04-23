import seaborn as sns
import matplotlib.pyplot as plt

from utils.limpiar_datos import limpiar_datos

df = limpiar_datos()

heatmap_data = df.groupby('Genre')[['NA_Sales', 'EU_Sales', 'JP_Sales', 'Other_Sales']].mean()

# Ajustar tamaño del gráfico
plt.figure(figsize=(12, 8))

# Crear heatmap
sns.heatmap(
    heatmap_data, 
    annot=True,  # Muestra valores en las celdas
    fmt=".2f",   # Formato: 2 decimales
    cmap="YlOrRd",  # Paleta de colores (amarillo-naranja-rojo)
    linewidths=0.5  # Líneas divisorias
)

# Personalizar
plt.title('Ventas Promedio por Género y Región (en millones)', fontsize=14)
plt.xlabel('Región', fontsize=12)
plt.ylabel('Género', fontsize=12)
plt.xticks(rotation=45)  # Rotar etiquetas del eje X

plt.show()