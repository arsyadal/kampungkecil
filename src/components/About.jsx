import React from 'react'
import { MapPin, Clock, Phone } from 'lucide-react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <div className="about-image-wrapper">
          <div className="experience-tag">
            <h3>4.9/5</h3>
            <p>10rb+ Ulasan</p>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" 
            alt="Interior Restoran" 
            className="about-secondary-img"
          />
        </div>

        <div className="about-content">
          <span className="section-subtitle">Tentang Kami</span>
          <h2 className="section-title">Nuansa Kampung <br />di Jantung Kota Cikarang</h2>
          <p className="about-desc">
            Kampung Kecil Cikarang menghadirkan pengalaman kuliner yang tak terlupakan dengan mengusung konsep kemiripan nuansa pedesaan yang asri. Kami menyajikan hidangan pilihan dengan bumbu rahasia yang telah turun temurun.
          </p>
          
          <div className="info-cards">
            <div className="info-card">
              <MapPin className="info-icon" />
              <div>
                <h4>Alamat</h4>
                <p>Jalan raya pilar Sukatani, Kp. Kandang No.190, Sukaraya, Bekasi.</p>
              </div>
            </div>
            
            <div className="info-card">
              <Clock className="info-icon" />
              <div>
                <h4>Jam Operasional</h4>
                <p>Setiap Hari: 10.00 - 22.00</p>
              </div>
            </div>

            <div className="info-card">
              <Phone className="info-icon" />
              <div>
                <h4>Hubungi Kami</h4>
                <p>0811-1770-793</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
