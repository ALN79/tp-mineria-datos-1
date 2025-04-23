import { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import Loader from './Loader';

export default function TortaGrafico() {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/data/ventas_globales_pie.json')
            .then(res => res.json())
            .then(data => {
                setChartData({
                    labels: data.labels,
                    values: data.values
                });
            });
    }, []);

    if (!chartData) return <p><Loader/></p>;

    return (
        <Plot
            data={[
                {
                    type: 'pie',
                    labels: chartData.labels,
                    values: chartData.values,
                    textinfo: 'label+percent',
                    insidetextorientation: 'radial',
                }
            ]}
            layout={{
                title: 'Distribución de Ventas Globales por Empresa',
                height: 400,
                width: 500
            }}
        />
    );
}
