import React, { useEffect } from 'react'
import './style.css'
import { Footer } from '../pie/Footer'
import { useParams } from 'react-router-dom'

export const AboutUs = () => {

  const parametro = useParams();  

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [parametro]); 

  return (
    <div className='container-about'>
      <header className='cont-header'>
        <div className='cont-info'>
          <h2>ScreenNest</h2>
          <h3>Descubre | Explora | Disfruta.</h3>
        </div>
      </header>

      <main className="cont-main">
        <div className="cont-main-info">
          <h2>Nuestra Misión</h2>
          <p>Ofrecer una plataforma accesible y visualmente atractiva para que los usuarios puedan descubrir y disfrutar de sus películas favoritas, mejorando la experiencia de navegación mediante tecnologías modernas.</p>
        </div>

        <div className="cont-main-autor text-center">
          <h2>Desarrollador Principal</h2>
          <div className="cont-main-team mt-5">
            <div className="card-team text-center">
              <img src="https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg" alt="" />
              <h3>Albert Valdemora</h3>
              <p>Desarrollador Front-end apasionado por crear experiencias visuales únicas y mejorar la interacción usuario-aplicación.</p>
            </div>
          </div>
        </div>

        <div className="cont-main-values text-center">
          <h2>Características Principales</h2>
          <div className="cont-values">
            <div className="values-info">
              <h4>🎥 Explora Películas</h4>
              <p>Accede a un extenso catálogo de películas organizadas en un diseño limpio y atractivo.</p>
            </div>
            <div className="values-info">
              <h4>🔍 Búsqueda y Filtrado Avanzado</h4>
              <p>Encuentra películas por título, género, año de lanzamiento y más.</p>
            </div>
            <div className="values-info">
              <h4>📄 Detalles Completos</h4>
              <p>Obtén información detallada de cada película, incluyendo sinopsis, reparto y calificación.</p>
            </div>
            <div className="values-info">
              <h4>📱 Diseño Responsivo</h4>
              <p>Experimenta una navegación fluida en cualquier dispositivo, desde computadoras de escritorio hasta smartphones.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className='cont-footer'>
        <Footer />
      </footer>
    </div>
  )
}
