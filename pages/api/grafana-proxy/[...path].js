// pages/api/grafana-proxy/[...path].js
import { createProxyMiddleware } from 'http-proxy-middleware'

// Configura la URL base de tu Grafana desde las variables de entorno
const GRAFANA_BASE_URL = 'http://131.161.221.23:3333' //process.env.GRAFANA_BASE_URL;
// Si necesitas autenticación con API Key de Grafana
const GRAFANA_API_KEY = 'f26e2576-0f9e-4a82-aad7-2b658eb11a49' //process.env.GRAFANA_API_KEY;

// La configuración de la API Route de Next.js
export const config = {
  api: {
    bodyParser: false, // Desactiva el body parser de Next.js, ya que el proxy manejará el cuerpo de la solicitud
    externalResolver: true, // Indica que este API Route usa un resolver externo (el proxy)
  },
};

// Crea la instancia del proxy
const proxy = createProxyMiddleware({
  target: GRAFANA_BASE_URL,
  changeOrigin: true, // Cambia el encabezado 'Origin' a la URL del target
  pathRewrite: (path, req) => {
    // Reescribe la ruta quitando '/api/grafana-proxy'
    // La parte '...path' en Next.js ya nos da la ruta después de '/api/grafana-proxy'
    const newPath = path.replace('/api/grafana-proxy', '');
    return newPath;
  },
  // Este es el middleware CRUCIAL para solucionar los errores de X-Frame-Options y Mixed Content
  onProxyRes: function (proxyRes, req, res) {
    // 1. Eliminar o modificar cabeceras que bloquean la incrustación
    delete proxyRes.headers['x-frame-options'];

    // Si Grafana usa Content-Security-Policy, deberías modificarla:
    if (proxyRes.headers['content-security-policy']) {
      // Modifica 'frame-ancestors' para permitir tu dominio.
      // Reemplaza 'www.bambu.ec' con tu dominio real.
      proxyRes.headers['content-security-policy'] = proxyRes.headers['content-security-policy']
        .replace(/frame-ancestors\s+'none'/, `frame-ancestors 'self' https://www.bambu.ec`)
        .replace(/frame-ancestors\s+'self'/, `frame-ancestors 'self' https://www.bambu.ec`); // En caso de que ya permita 'self'
      
      // O, si estás seguro de las implicaciones de seguridad y quieres simplicidad:
      // delete proxyRes.headers['content-security-policy'];
    }

    // Asegurarse de que el Content-Type se mantenga para que el navegador interprete correctamente (HTML, CSS, JS, etc.)
    // La librería ya suele encargarse de esto, pero es una buena verificación.
  },
  onProxyReq: function (proxyReq, req, res) {
    // Añadir cabeceras de autenticación si Grafana las requiere (ej. API Key)
    if (GRAFANA_API_KEY) {
      proxyReq.setHeader('Authorization', `Bearer ${GRAFANA_API_KEY}`);
    }
    // Asegurarse de que el host sea el de Grafana para que Grafana responda correctamente
    proxyReq.setHeader('Host', new URL(GRAFANA_BASE_URL).host);
  },
  // Opcional: logLevel para depuración
  // logLevel: 'debug',
});

// Exporta el proxy como el manejador de la API Route
export default function handler(req, res) {
  proxy(req, res, (err) => {
    if (err) {
      console.error('Proxy error:', err);
      res.status(500).send('Proxy Error');
    }
  });
}