# import seaborn as sns
# import matplotlib.pyplot as plt

# top_publishers = df['Publisher'].value_counts().head(10).index
# df_filtered = df[df['Publisher'].isin(top_publishers)]

#* para ver los top publishers
# # print(top_publishers)
#* para ver los datos filtrados
# # print(df_filtered.head())

# # agrupo genero y empresa
# genre_publisher = df_filtered.groupby(['Publisher', 'Genre']).size().unstack().fillna(0)

#* para ver los datos agrupados de genero y empresa
# print(genre_publisher)

# plt.figure(figsize=(14, 8))
# genre_publisher.plot(kind='bar', stacked=False, colormap='viridis', edgecolor='black')
# plt.title('Distribución de Géneros por Empresa', fontsize=16)
# plt.xlabel('Empresa (Publisher)', fontsize=12)
# plt.ylabel('Número de Juegos', fontsize=12)
# plt.xticks(rotation=45, ha='right')
# plt.legend(title='Género', bbox_to_anchor=(1.05, 1))
# plt.tight_layout()
# plt.savefig('genre_by_publisher.png', dpi=300)  # Guardar para React
# plt.show()