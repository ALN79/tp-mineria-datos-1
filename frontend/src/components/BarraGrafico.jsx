import { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import Loader from './Loader';

export default function BarraGrafico() {
    const [barData, setBarData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/data/genero_por_empresa.json')
            .then(res => res.json())
            .then(setBarData);
    }, []);

    if (!barData) return <p><Loader/></p>;

    const plotData = barData.genres.map((genre, idx) => ({
        x: barData.publishers,
        y: barData.data.map(row => row[idx]),
        name: genre,
        type: 'bar'
    }));

    return (
        <Plot
            data={plotData}
            layout={{
                barmode: 'stack',
                title: 'Distribución de Géneros por Empresa',
                xaxis: { title: 'Empresa' },
                yaxis: { title: 'Cantidad de juegos' },
                height: 500,
                width: 900
            }}
        />
    );
}
