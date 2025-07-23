import PlanesList from './PlanesList'

export default function ContPlanes({ reference }){
    return(
        <section ref={reference}>
            <p className='title'>Elige tu plan:</p>
            <div className='cont-planes'>
                <PlanesList />
            </div>
            

            <style jsx>{`
                section{
                    padding: 70px 150px 80px 150px;
                }

                .title{
                    font-size: 26px;
                    font-weight: 700;
                }

                .cont-planes{
                    margin-top: 35px;
                    display: flex;
                }

                @media screen and (max-width: 768px){
                    section{
                        padding: 30px 16px 20px 16px;
                    }

                    .title{
                        font-size: 19px;
                        font-weight: 700
                    }

                    .cont-planes{
                        margin-top: 20px;
                        flex-direction: column;
                    }
                }
            `}</style>
        </section>
    )
}