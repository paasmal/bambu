export default function Correo({ footer, color = 'black', fondo = 'none', ancho = 2 }) {
    return (
      <svg
        height={20}
        width={20}
        viewBox='-3 -3 30 30'
        fill={fondo}
        stroke={color}
        strokeWidth={ancho}
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' />
        <path d='M22 6l-10 7L2 6' />
      </svg>
    )
  }