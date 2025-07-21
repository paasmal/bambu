import { useRouter } from 'next/router'

import Direccion from './icons/Direccion'
import Horario from './icons/Horario'
import Telefono from './icons/Telefono'
import Correo from './icons/Correo'

export default function Footer() {
    const router = useRouter()

    return (
        <footer>
            <div className='izq'>
                <div className='logo'>
                    <img  className='img1' src='/logoSoloPanda.jpg' />
                    <img  className='img2' src='/logoComp.jpg' />
                </div>
                <div className='contacto'>
                    <Direccion color='black' />
                    <p>González Suárez y Ramayana</p>
                </div>
                <div className='contacto'>
                    <Horario color='black' />
                    <p>Lunes - Viernes (08:30 - 17:30)</p>
                </div>
                <div className='contacto'>
                    <Telefono color='black' />
                    <p>0990011159</p>
                </div>
                <div className='contacto'>
                    <Correo color='black' />
                    <p>info@bambu.ec</p>
                </div>
                <p className='test' onClick={() => router.push('/vtest')}>Medidor de Velocidad</p>
            </div>
            <div className='der'>
                <p className='t1'>Normas y regulaciones</p>
                <p className='enlaces' onClick={() => window.open('https://www.arcotel.gob.ec/')}>Arcotel</p>
                <p className='enlaces' onClick={() => router.push('/documentos/guia-parental')}>Guia control parental (Arcotel)</p>
                <p className='enlaces' onClick={() => router.push('/documentos/resolucion-parental')}>Resolución guia control parental</p>
                <p className='enlaces' onClick={() => router.push('/documentos/resolucion-arcotel')}>Resolución Arcotel 2022-0123</p>
                <p className='enlaces' onClick={() => router.push('/documentos/senadi')}>Disposiciones SENADI</p>
                <p className='enlaces' onClick={() => router.push('/documentos/seguridad-informatica')}>Guia de seguridad informática</p>
                <p className='enlaces' onClick={() => router.push('/documentos/adulto-mayor')}>Ley adulto mayor</p>
                <p className='enlaces' onClick={() => router.push('/documentos/ley-discapacidades')}>Ley organica de discapacidades</p>
                <p className='enlaces' onClick={() => router.push('/documentos/calidad-internet')}>Normas de calidad internet</p>
                <p className='enlaces' onClick={() => router.push('/documentos/abonados')}>Reglamento de abonados</p>
                <p className='enlaces' onClick={() => router.push('/documentos/contratos-adhesion')}>Normas técnicas de contratos de adhesión</p>
            </div>
            
            <style jsx>{`
                footer{
                    /* border-top: 10px solid #008F39; */
                    /* background: #008F39; */
                    /* background-image: repeating-linear-gradient(-45deg, hsla(0, 0%, 100%, .1), hsla(0, 0%, 100%, .1) 15px, transparent 0, transparent 30px); */
                    margin-top: 20px;
                    height: 400px;
                    width: 100%;
                    padding: 30px;
                    display: flex;
                    /* justify-content: center;
                    align-items: center;   */
                }

                .izq, .der{
                    width: 50%;
                }

                .logo{
                    display: flex;
                    align-items: center;
                    margin-bottom: 24px;
                }

                .img1{
                    height: 70px;
                    border-radius: 15px;
                }

                .img2{
                    height: 65px;
                    border-radius: 15px;
                }

                .contacto{
                    margin-left: 10px;
                    display: flex;
                    align-items: center;
                    margin-bottom: 6px;
                }

                .contacto p{
                    margin: -2px 0 0 8px;
                    font-weight: 300;
                }

                .label{
                    padding: 0 5px 0 3px;
                }

                .t1{
                    color: #008F39;
                    font-size: 20px;
                    font-weight: bold;
                    margin-bottom: 15px;
                }

                .enlaces{
                    font-size: 17px;
                    font-weight: 300;
                    margin-bottom: 5px;
                    cursor: pointer;
                }

                .enlaces:hover{
                    color: #008F39;
                }

                .test{
                    margin: 25px 0 0 10px;
                    width: 190px;
                    background: #777;
                    padding: 5px 10px;
                    color: white;
                    font-weight: 400;
                    text-align: center;
                    border-radius: 6px;
                    cursor: pointer;
                }

                @media screen and (max-width: 768px){
                    footer{
                        margin-top: 20px;
                        height: auto;
                        width: 100%;
                        padding: 16px;
                        flex-direction: column-reverse;
                    }

                    .izq, .der{
                        width: 100%;
                    }

                    .der{
                        margin-bottom: 30px;
                    }
                }
            `}</style>
        </footer>
    )
}