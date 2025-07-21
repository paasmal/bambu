import { useRouter } from 'next/router'
import { useState } from 'react'

import Menu from './icons/Menu'

export default function Header({ onScrollPlanes, onScrollContacto, onOpenGonet, gonet }) {
    const router = useRouter()
    const [equis, setEquis] = useState(false)

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
            <div className='mobile-nav'>
                <p className='at-client'>Atención al Cliente</p>
                <div className='po' onClick={() => setEquis(!equis)}>
                    <Menu equis={equis} />
                </div>
            </div>

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

                .po{
                    display: none;
                }

                @media screen and (max-width: 640px){
                    header{
                        height: 56px;
                        padding: 0 16px 0 14px;
                    }

                    img{
                        margin-top: -2px;
                        height: 36px;
                    }

                    nav{
                        position: absolute;
                        top: 55px;
                        right: ${!equis ? '-130px' : '0'};
                        background: white;
                        width: 130px;
                        padding: 5px 0;
                        flex-direction: column;
                        transition: 0.6s;
                        border-radius: 20px 0 0 20px;
                    }   

                    nav p{
                        margin: 0;
                        padding: 8px 18px;
                        color: black;
                        font-size: 15px;
                    }

                    .mobile-nav{
                        display: flex;
                        align-items: center;
                    }

                    .at-client{
                        padding: 5px 10px 5px 10px;
                        font-size: 12px;
                        border-radius: 8px;
                    }

                    .po{
                        display: inline;
                        margin-left: 16px;
                    }
                }
            `}</style>
        </header>
    )
}