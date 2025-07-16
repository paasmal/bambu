export default function Header() {
    return (
        <section>
            <img src='/logoGonet.png' alt='Gonet Logo' />
            <div></div>

            <style jsx>{`
                section{
                    position: relative;
                    height: 70px;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;        
                }

                div{
                    position: absolute;
                    content: '';
                    width: 100%;
                    height: 55px;
                    background: #71C575;
                    z-index: 2;
                }

                img{
                    position: absolute;
                    height: 65px;
                    z-index: 3;
                    -webkit-filter: drop-shadow(3px 0 0 white) drop-shadow(0 2px 0 white) drop-shadow(-3px 0 0 white) drop-shadow(0 -2px 0 white);
                    filter: drop-shadow(3px 0 0 white) drop-shadow(0 2px 0 white) drop-shadow(-3px 0 0 white) drop-shadow(0 -2px 0 white);
                }
            `}</style>
        </section>
    )
}