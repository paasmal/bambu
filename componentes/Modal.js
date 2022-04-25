export default function Modal({ children, onCerrar }){
    return(
        <div className='modal'>
            <div className='card'>
                <p onClick={onCerrar} className='cerrar'>X</p>
                {children}
            </div>

            <style jsx>{`
                .modal{
                    background: rgba(0, 0, 0, 0.5);
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .card{
                    position: relative;
                    background: white;
                    height: 350px;
                    width: 32%;
                    padding: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    border-radius: 20px;
                }

                .cerrar{
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    background: black;
                    color: white;
                    font-size: 20px;
                    font-weight: bold;
                    padding: 6px 12px 7px 12px;
                    border-radius: 20px;
                    cursor: pointer;
                }

                @media screen and (max-width: 768px){
                    .card{
                        width: 90%;
                    }
                }
            `}</style>
        </div>
    )
}