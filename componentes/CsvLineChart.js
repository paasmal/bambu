// components/TrafficChart.js
import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

// --- Función de ayuda para parsear valores de tráfico ---
const parseTrafficValue = (valueString) => {
  if (!valueString || typeof valueString !== 'string') {
    return 0; // O manejar el error como prefieras
  }

  // Elimina espacios en blanco y convierte a minúsculas para un manejo consistente
  const cleanedValue = valueString.trim().toLowerCase();

  // Expresión regular para extraer el número y la unidad
  const match = cleanedValue.match(/^([\d.]+)\s*(gb\/s|mb\/s|kb\/s|b\/s)$/);

  if (!match) {
    console.warn(`No se pudo parsear el valor de tráfico: ${valueString}`);
    return 0;
  }

  const value = parseFloat(match[1]);
  const unit = match[2];

  // Convierte todo a Mb/s para una base común
  switch (unit) {
    case 'gb/s':
      return value * 1024; // 1 Gb/s = 1024 Mb/s
    case 'mb/s':
      return value;
    case 'kb/s':
      return value / 1024; // 1 Mb/s = 1024 Kb/s
    case 'b/s': // Bytes por segundo (raro para tráfico de red, usualmente es bits)
      return (value * 8) / (1024 * 1024); // Convertir Bytes a Bits, luego a Megabits
    default:
      return 0;
  }
};

// --- Función de ayuda para formatear los valores del eje Y o Tooltip ---
const formatTrafficValue = (valueInMbps) => {
  if (valueInMbps >= 1024) {
    return `${(valueInMbps / 1024).toFixed(2)} Gb/s`;
  }
  return `${valueInMbps.toFixed(2)} Mb/s`;
};

function CsvLineChart() {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCsvData = async () => {
      setLoading(true);
      setError(null);
      try {
        const csvFilePath = '/trafico.csv'; // <--- ASEGÚRATE DE QUE LA RUTA COINCIDA
        const response = await fetch(csvFilePath);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status} al cargar el CSV.`);
        }
        const csvText = await response.text();

        Papa.parse(csvText, {
          header: true,
          dynamicTyping: false, // Importante: desactiva dynamicTyping para manejar el parseo nosotros
          skipEmptyLines: true,
          complete: (results) => {
            if (results.errors.length) {
              console.error("Errores al parsear el CSV:", results.errors);
              setError("Errores al parsear el CSV. Consulta la consola.");
              setLoading(false);
              return;
            }

            const transformedData = results.data.map(row => ({
              // Formatear la fecha para el eje X
              name: new Date(row.Fecha).toLocaleString('es-EC', { hour: '2-digit', minute: '2-digit', hour12: false }),
              // Parsear y convertir Traffic IN/OUT a Mb/s
              'Traffic IN': parseTrafficValue(row['Traffic IN']),
              'Traffic OUT': parseTrafficValue(row['Traffic OUT']),
            }));

            setChartData(transformedData);
            setLoading(false);
          },
          error: (parseError) => {
            console.error("Error de PapaParse:", parseError);
            setError("Error al procesar el archivo CSV.");
            setLoading(false);
          }
        });

      } catch (e) {
        console.error("Error al cargar el CSV:", e);
        setError(e.message || "No se pudo cargar el archivo CSV.");
        setLoading(false);
      }
    };

    loadCsvData();
  }, []); // Se ejecuta solo una vez al montar

  if (loading) return <div>Cargando gráfico de tráfico desde CSV...</div>;
  if (error) return <div>Error: {error}</div>;
  if (chartData.length === 0) return <div>No hay datos disponibles en el CSV para el gráfico.</div>;

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          {/* Usamos el formato de hora para el eje X */}
          <XAxis dataKey="name" />
          {/* Usamos la función formatTrafficValue para las etiquetas del eje Y */}
          <YAxis tickFormatter={formatTrafficValue} />
          {/* Usamos la función formatTrafficValue para los tooltips */}
          <Tooltip formatter={formatTrafficValue} />
          <Legend />

          <Line
            type="monotone"
            dataKey="Traffic IN" // Nombre de la columna en tu CSV
            stroke="#8884d8"
            activeDot={{ r: 8 }}
            name="Tráfico de Entrada" // Nombre amigable para la leyenda/tooltip
          />
          <Line
            type="monotone"
            dataKey="Traffic OUT" // Nombre de la columna en tu CSV
            stroke="#82ca9d"
            activeDot={{ r: 8 }}
            name="Tráfico de Salida" // Nombre amigable para la leyenda/tooltip
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CsvLineChart;