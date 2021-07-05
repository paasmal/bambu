export default function Header() {
    return (
        <div>
            <img src='/logo.jpg' alt='Bambu Logo' />

            <style jsx>{`
                div{
                    height: 70px;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.15);           
                }
                img{
                    margin-top: -5px;
                    height: 56px;
                }
            `}</style>
        </div>
    )
}