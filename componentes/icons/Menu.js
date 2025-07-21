export default function Menu({ equis }){

    return(
        <div>
            <span></span>
            <span></span>
            <span></span>

            <style jsx>{`
                div{
                    -webkit-tap-highlight-color: rgba(0,0,0,0);
                    cursor: pointer;
                }

                span{
                    display: block;
                    background: black;
                    width: 22px;
                    height: 3px;
                    border-radius: 3px;
                    margin-bottom: 5px;
                    transform-origin: 0.5px 0px;
                    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
                    transform: ${equis && 'rotate(45deg) translate(1px, -1px)'}; 
                }

                span:last-child{
                    margin-bottom: 0;
                }

                span:nth-last-child(2){
                    opacity: ${equis ? 0 : 1};
                    transform: ${equis && 'rotate(0deg) scale(0.2, 0.2)'};
                }

                span:last-child{
                    transform:  ${equis && 'rotate(-45deg) translate(0px, -1px)'};
                }

                @media screen and (min-width: 1024px) {
                    div{
                        top: 20px;
                        right: 30px;
                    }

                    span{
                        width: 26px;
                        transform: ${equis && 'rotate(45deg) translate(2px, -2px)'}; 
                    }

                    span:last-child{
                        transform:  ${equis && 'rotate(-45deg) translate(-1px, 1px)'};
                    }
                }
            `}</style>
        </div>
    )
}