import pandas as pd

def limpiar_datos(): # Esta función limpia los datos para solo utilizar los que necesitamos

    datasetVideoGames = pd.read_csv('./data/vgsales.csv')

    df = datasetVideoGames[["Genre", "NA_Sales", "EU_Sales", "JP_Sales", "Other_Sales", "Global_Sales", "Publisher" ]]

    return df