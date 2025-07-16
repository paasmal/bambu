export default function Direccion({ color = 'black', ancho = 1.5 }) {
    return (
        <svg
            height={20}
            width={20}
            viewBox='0 0 21 21'
            fill='none'
            stroke={color}
            strokeWidth={ancho}
            strokeLinecap='round'
            strokeLinejoin='round'
            transform='translate(4 2)'  
        >
            <path d='M6.5 16.54c4-4.45 6-7.785 6-10.007C12.5 3.201 9.814.5 6.5.5s-6 2.701-6 6.033c0 2.222 2 5.558 6 10.008z' />
            <circle cx={6.5} cy={6.5} r={2.5} />
      </svg>
    )
}