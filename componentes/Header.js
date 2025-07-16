import { useRouter } from 'next/router'

export default function Header({ onScrollPlanes, onScrollContacto, onOpenGonet, gonet }) {
    const router = useRouter()

    return (
        <header className='header'>
            {
                !gonet ? 
                    <img onClick={() => router.push('/')} src='/logo.png' alt='Bambu Logo' />
                    : <img onClick={() => router.push('/')} src='/logoGonet.png' alt='Gonet Logo' />
            }
            <nav>
                <p>BAMBU</p>
                <p onClick={onScrollPlanes}>PLANES</p>
                <p onClick={onScrollContacto}>CONTACTO</p>
                <p onClick={onOpenGonet}>GONET</p>
                <p>CALIDAD</p>
            </nav>
            <p className='at-client'>Atención al Cliente</p>

            <style jsx>{`
                header{
                    position: relative;
                    height: 60px;
                    padding: 0 100px 0 90px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    z-index: 4;
                }

                img{
                    margin-top: -2px;
                    height: 40px;
                    cursor: pointer;
                }

                nav{
                    display: flex;
                }

                nav p{
                    margin: 0 20px;
                    padding: 10px;
                    color: ${!gonet ? 'black' : 'white'};
                    cursor: pointer;
                }

                nav p:hover{
                    color: #008F39;
                }

                .at-client{
                    background: ${!gonet ? '#008F39' : 'white'};
                    padding: 6px 12px 6px 12px;
                    color: ${!gonet ? 'white' : '#008F39'};
                    font-size: 14px;
                    border-radius: 10px;
                    cursor: pointer;
                }
                
            `}</style>
        </header>
    )
}