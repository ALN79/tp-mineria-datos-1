# Trabajo Practico Numero 1 
# Mineria de Datos

## Pasos para la instalación:
1. Clonar el repositorio
```bash
git clone https://github.com/ALN79/tp-mineria-datos-1.git

cd tp-mineria-datos-1

code .
```
2. Crear y Activar el entorno virtual uv
```bash
uv venv
```

3. Descargar las dependencias
```bash
uv sync
```

4. Seleccionar el interprete de python en el entorno virtual
```bash
Ctrl + Shift + P
```
```bash
Python: Select Interpreter
```
```bash
Python 3.13.2 64-bit ('venv': venv)
```
Una vez se cambio el interprete es necesario borrar o matar la terminal y crear otra, esto se hace presionando el icono de basura en la terminal de VSCode y luego el icono de + para crear una nueva terminal. 

### Ya estaria el proyecto listo para usar.

## Ejecución del proyecto:

### Grafico de Torta: Ventas Globales por Género:
```bash
python -m graficos.VentasGlobales
```
### Grafico de Mapa de Calor: Ventas Por Región y Género:
```bash
python -m graficos.heatmap
```
### Grafico de Barras: Cantidad de Juegos por Género Y Empresa:
```bash
python -m graficos.GeneroxEmpresa
```

