export default function Atras({ color = 'black', linea = 2 }) {
    return (
        <svg
            width={30}
            height={24}
            viewBox='0 0 24 24'
            fill='none'
            stroke={color}
            strokeWidth={linea}
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <path d='M19 12H5M12 19l-7-7 7-7' />
        </svg>
    )
}