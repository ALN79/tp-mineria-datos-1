import seaborn as sns
import matplotlib.pyplot as plt
from utils.limpiar_datos import limpiar_datos

df = limpiar_datos()

publisher_sales = df.groupby('Publisher')['Global_Sales'].sum().sort_values(ascending=False)

#* para ver los datos agrupados por ventas globales x empresa
print(publisher_sales)

top_publishers = publisher_sales.head(10)

#* para ver los top publishers de ventas globales
print(top_publishers)

plt.figure(figsize=(10, 8))
colors = plt.cm.tab20.colors  # Paleta de colores

# Gráfico de torta
plt.pie(
    top_publishers.values,
    labels=top_publishers.index,
    autopct='%1.1f%%',  # Porcentajes con 1 decimal
    startangle=90,      # Ángulo inicial
    colors=colors,
    wedgeprops={'edgecolor': 'white', 'linewidth': 0.5},  # Bordes blancos
    textprops={'fontsize': 9}
)

plt.title('Distribución de Ventas Globales por Empresa', fontsize=14)
plt.axis('equal')  # Torta circular (no ovalada)
plt.tight_layout()
plt.savefig('sales_by_publisher_pie.png', dpi=300, bbox_inches='tight')  # Guardar imagen
plt.show()