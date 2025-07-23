import InstaIcon from './icons/InstaIcon'
import FibraIcon from './icons/FibraIcon'
import SoporteIcon from './icons/SoporteIcon'
import DescuentoIcon from './icons/DescuentoIcon'

import useScreenWidth from '../utils/useScreenWidth'

export default function Subhero(){
    const screenWidth = useScreenWidth()

    return(
        <section>
            <div className='top-bar'></div>
            <div className='cont'>
                <div className='item'>
                    <div className='icono'>
                        <InstaIcon size={screenWidth > 768 ? 40 : 38} />
                    </div>
                    <p>Instalación inmediata</p>
                </div>
                <div className='item'>
                    <div className='icono'>
                        <FibraIcon size={screenWidth > 768 ? 40 : 38} />
                    </div>
                    <p>Conexión 100% fibra óptica</p>
                </div>
                <div className='item'>
                    <div className='icono'>
                        <SoporteIcon size={screenWidth > 768 ? 40 : 38} />
                    </div>
                    <p>Soporte 24 horas</p>
                </div>
                <div className='item'>
                    <div className='icono'>
                        <DescuentoIcon size={screenWidth > 768 ? 40 : 38} />
                    </div>
                    <p>100% descuento en la instalación</p>
                </div>
            </div>
            <div className='bottom-bar'></div>

            <style jsx>{`
                .top-bar{
                    position: relative;
                    background: #A7F0BA;
                    margin-left: 40%;
                    width: 60%;
                    height: 5px;
                    z-index: 4;
                }

                .cont{
                    background: #008F39;
                    background-image: repeating-linear-gradient(-45deg, hsla(0, 0%, 100%, .1), hsla(0, 0%, 100%, .1) 15px, transparent 0, transparent 30px);
                    width: 100%;
                    height: 130px;
                    padding: 0 150px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .bottom-bar{
                    background: #A7F0BA;
                    width: 60%;
                    height: 5px;
                }

                .item{
                    background: white;
                    height: 60px;
                    width: 220px;
                    padding: 0 16px;
                    color: #008F39;
                    font-size: 16px;
                    text-align: center;
                    display: flex;
                    align-items: center;
                    border-radius: 10px;
                }

                p{
                    margin-left: 12px;
                    font-weight: 500;
                    text-align: left;
                }

                @media screen and (max-width: 768px){
                    .top-bar{
                        margin-left: 40%;
                        width: 60%;
                        height: 4px;
                    }

                    .cont{
                        height: auto;
                        padding: 18px 16px;
                        flex-wrap: wrap;
                    }

                    .bottom-bar{
                        width: 60%;
                        height: 4px;
                    }

                    .item{
                        height: 48px;
                        width: calc((100vw - 46px) / 2);
                        padding: 0 12px;
                        font-size: 13px;
                        border-radius: 6px;
                    }

                    p{
                        margin-left: 8px;
                        font-weight: 400;
                    }

                    .item:first-child, .item:nth-child(2){
                        margin-bottom: 14px;
                    }

                    .item:first-child, .item:nth-child(3){
                        margin-right: 14px;
                    }
                }
            `}</style>
        </section>
    )
}