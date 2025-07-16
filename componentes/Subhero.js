import InstaIcon from './icons/InstaIcon'
import FibraIcon from './icons/FibraIcon'
import SoporteIcon from './icons/SoporteIcon'
import DescuentoIcon from './icons/DescuentoIcon'

export default function Subhero(){
    return(
        <section>
            <div className='top-bar'></div>
            <div className='cont'>
                <div className='item'>
                    <InstaIcon />
                    <p>Instalación inmediata</p>
                </div>
                <div className='item'>
                    <FibraIcon />
                    <p>Conexión 100% fibra óptica</p>
                </div>
                <div className='item'>
                    <SoporteIcon />
                    <p>Soporte 24 horas</p>
                </div>
                <div className='item'>
                    <DescuentoIcon />
                    <p>100% descuento en la instalación</p>
                </div>
            </div>
            <div className='bottom-bar'></div>

            <style jsx>{`
                .top-bar{
                    position: relative;
                    background: linear-gradient(90deg,rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 1) 100%);
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
                    padding: 0 180px;
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
                    width: 205px;
                    padding: 0 14px;
                    color: #008F39;
                    font-size: 16px;
                    font-weight: 400;
                    text-align: center;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 10px;
                }

                p{
                    margin-left: 10px;
                    font-weight: 500;
                    text-align: left;
                }

                @media screen and (max-width: 768px){
                }
            `}</style>
        </section>
    )
}