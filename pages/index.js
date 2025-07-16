import { useState, useEffect, useRef } from 'react'

import AppLayout from '../componentes/AppLayout'
import Header from '../componentes/Header'
import Hero from '../componentes/Hero'
import Subhero from '../componentes/Subhero'
import Planes from '../componentes/Planes'
import ModuloContacto from '../componentes/ModuloContacto'
import Footer from '../componentes/Footer'

export default function Home() {
  const planesRef = useRef(null)
  const contactoRef = useRef(null)
  const [gonet, setGonet] = useState(false)

  const handleScroll = () => {
    if(window.pageYOffset > 200) setGonet(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToPlanes = () => {
    planesRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContacto = () => {
    contactoRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <AppLayout>
        <Header
          onScrollPlanes={() => scrollToPlanes()}
          onScrollContacto={() => scrollToContacto()}
          onOpenGonet={() => setGonet(!gonet)}
          gonet={gonet}
        />
        <Hero onScrollPlanes={() => scrollToPlanes()} />
        <Subhero />
        <Planes reference={planesRef} />
        <ModuloContacto reference={contactoRef} />
        <Footer />
        <div className='cont-gonet'>
          <div className='gonet'>
            <img src='/portada-gonet.png' />
            <div className='clo' onClick={() => setGonet(false)}>
              <p>X</p>
            </div>
          </div>
        </div>
        
      <style jsx>{`
        .cont-gonet{
          position: absolute;
          top: 0;
          left: ${!gonet ? '-100%' : '0'};
          width: 100%;
          display: flex;
          justify-content: center;
          transition: .75s;
          z-index: 3;
        }

        .gonet{
          position: relative;
          width: 100%;
          height: 565px;
        }

        .gonet img{
          width: 100%;
          height: 100%;
        }

        .clo{
          position: absolute;
          top: 60px;
          right: 100px;
          background: #000;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 8px;
          cursor: pointer;
        }

        .clo p{
          width: 32px;
          line-height: 32px;
          color: white;
          font-size: 19px;
          font-weight: 400;
          text-align: center;
        }

        @media screen and (max-width: 768px){
        }
      `}</style>
    </AppLayout>
  )
}
