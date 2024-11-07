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
          <h2>About Us</h2>
          <h3>Redefining the future of technology</h3>
        </div>
      </header>

      <main className="cont-main">
        <div className="cont-main-info">
          <h2>Our Mission</h2>
          <p>We're on a relentless pursuit to revolutionize tecnology, creating inovative solutions that challenge the status quo and improve lives across the globe.</p>
          <button className='btn-main'>Discover More 👉</button>
        </div>

        <div className="cont-main-autor">
          <h2>Our Team</h2>
          <div className="cont-main-team">
            <div className="card-team">
              <img src="https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg" alt="" />
              <h3>Alex Johnson</h3>
              <h4>Visionary CEO</h4>
            </div>
            <div className="card-team">
              <img src="https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg" alt="" />
              <h3>Albert Valdemora</h3>
              <h4>Design Guru</h4>
            </div>
            <div className="card-team">
              <img src="https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg" alt="" />
              <h3>Taylor Swift</h3>
              <h4>Tech Innovator</h4>
            </div>
          </div>
        </div>

        <div className="cont-main-values">
          <h2>Our Core Values</h2>
          <div className="cont-values">
            <div className="values-info">
              <h4>Innovation</h4>
              <p>Pushing boundaries and embracing the unknown</p>
            </div>
            <div className="values-info">
              <h4>Innovation</h4>
              <p>Pushing boundaries and embracing the unknown</p>
            </div>
            <div className="values-info">
              <h4>Innovation</h4>
              <p>Pushing boundaries and embracing the unknown</p>
            </div>
            <div className="values-info">
              <h4>Innovation</h4>
              <p>Pushing boundaries and embracing the unknown</p>
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
