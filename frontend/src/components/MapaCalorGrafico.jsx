import { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

export default function MapaCalorGrafico() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/data/heatmap_ventas.json')
            .then(res => res.json())
            .then(setData);
    }, []);

    if (!data) return <p>Cargando heatmap...</p>;

    return (
        <Plot
            data={[
                {
                    z: data.z,
                    x: data.x,
                    y: data.y,
                    type: 'heatmap',
                    colorscale: 'YlOrRd'
                }
            ]}
            layout={{
                title: 'Ventas Promedio por Género y Región',
                height: 500,
                width: 700
            }}
        />
    );
}
