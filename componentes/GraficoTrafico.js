import { useState, useEffect } from 'react'
import Papa from 'papaparse'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

//Función de ayuda para parsear valores de tráfico
const parseTrafficValue = (valueString) => {
  if (!valueString || typeof valueString !== 'string') return 0

  const cleanedValue = valueString.trim().toLowerCase()
  const match = cleanedValue.match(/^([\d.]+)\s*(gb\/s|mb\/s|kb\/s|b\/s|gb|mb|kb|b)$/)

  if (!match) {
    console.warn(`No se pudo parsear el valor de tráfico: ${valueString}`)
    return 0
  }

  const value = parseFloat(match[1])
  const unit = match[2]

// Convertir todo a Mb/s para una base común
  switch (unit) {
    case 'gb/s':
    case 'gb':
    return value * 1024
    case 'mb/s':
    case 'mb':
    return value;
    case 'kb/s':
    case 'kb':
    return value / 1024
    case 'b/s':
    case 'b':
    return (value * 8) / (1024 * 1024)
    default:
    return 0
  }
}

//Función de ayuda para formatear los valores del eje Y
const formatTrafficValue = (valueInMbps) => {
  if (valueInMbps === null || isNaN(valueInMbps)) return 'N/A'
  if (valueInMbps >= 1024) return `${(valueInMbps / 1024).toFixed(2)} Gb/s`
  return `${valueInMbps.toFixed(2)} Mb/s`
}

export default function GraficoTrafico(){
  const [chartData, setChartData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  //Capacidad contratada
  const CONTRATADA_VALUE_GBPS = 2.4
  const CONSTANT_CAPACITY_MBPS = parseTrafficValue(`${CONTRATADA_VALUE_GBPS} Gb/s`)

  useEffect(() => {
    const loadCsvData = async () => {
      setLoading(true)
      setError(null)
      try {
        const csvFilePath = '/trafico.csv' // <--- Ruta archivo .csv
        const response = await fetch(csvFilePath)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status} al cargar el CSV.`)
        }
        const csvText = await response.text()

        Papa.parse(csvText, {
          header: true,
          dynamicTyping: false,
          skipEmptyLines: true,
          complete: (results) => {
            if (results.errors.length) {
              console.error('Errores al parsear el CSV:', results.errors)
              setError('Errores al parsear el CSV. Consulta la consola.')
              setLoading(false)
              return
            }

            const transformedData = results.data.map(row => {
              // Maneja el caso donde la fila esté vacía o mal formada
              if (!row.Fecha || !row['Uso Down'] || !row['Uso UP']) {
                  return null
              }

              return {
                // Formatear la fecha/hora para el eje X
                name: new Date(row.Fecha).toLocaleString('es-EC', { 
                  day: 'numeric', month: 'numeric', year: 'numeric',
                  hour: '2-digit', minute: '2-digit', hour12: false
                }),
                // Parsear y convertir a Mb/s las columnas de uso
                'Uso Down': parseTrafficValue(row['Uso Down']),
                'Uso UP': parseTrafficValue(row['Uso UP']),
                // Agregar el valor de la capacidad contratada (constante) para cada punto
                'Capacidad Contratada': CONSTANT_CAPACITY_MBPS, 
              }
            }).filter(Boolean) // Filtra cualquier fila que haya sido 'null'

            setChartData(transformedData)
            setLoading(false)
          },
          error: (parseError) => {
            console.error('Error de PapaParse:', parseError)
            setError('Error al procesar el archivo CSV.')
            setLoading(false)
          }
        })

      } catch (e) {
        console.error('Error al cargar el CSV:', e)
        setError(e.message || 'No se pudo cargar el archivo CSV.')
        setLoading(false)
      }
    }

    loadCsvData()
  }, [CONSTANT_CAPACITY_MBPS]) // Se re-ejecuta si la constante cambia

  if (loading) return <div>Cargando gráfico de uso de tráfico...</div>
  if (error) return <div>Error: {error}</div>
  if (chartData.length === 0) return <div>No hay datos disponibles en el CSV para el gráfico.</div>

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart
          data={chartData}
          margin={{ top: 15, right: 15, left: 5, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis tickFormatter={formatTrafficValue} />
          <Tooltip formatter={formatTrafficValue} />
          <Legend />

          <Line
            type="monotone"
            dataKey="Uso Down"
            stroke="#008F39"
            strokeWidth={3}
            dot={{ r: 2 }}
            activeDot={{ r: 6 }}
            name="Capacidad Usada"
          />
          {/* <Line
            type="monotone"
            dataKey="Uso UP"
            stroke="#82ca9d"
            activeDot={{ r: 8 }}
            name="Uso de Subida"
          /> */}
          <Line
            type='monotone'
            dataKey='Capacidad Contratada' // La clave que agregamos en el mapeo
            stroke='#000000' //ffc658'
            strokeWidth={2}
            activeDot={{ r: 6 }}
            strokeDasharray="10 5" // Hace que la línea sea punteada
            name='Capacidad Contratada'
            dot={false} // No mostrar puntos en esta línea
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}