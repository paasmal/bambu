export default function Horario({ color = 'black', ancho = 2 }) {
    return (
        <svg
            height={20}
            width={20}
            viewBox='-3 -3 27 27'
            fill="none"
            fillRule="evenodd"
            stroke={color}
            strokeWidth={ancho}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4.5 2.5h12a2 2 0 012 2v12a2 2 0 01-2 2h-12a2 2 0 01-2-2v-12a2 2 0 012-2zM2.5 6.5h16M5.5 9.5v6M7.5 9.5v6M9.5 9.5v6M11.5 9.5v6M13.5 9.5v6M15.5 9.5v6" />
        </svg>
      )
}