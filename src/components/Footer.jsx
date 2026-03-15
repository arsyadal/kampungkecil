import React from 'react'
import { Utensils } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="logo white">
            <Utensils className="logo-icon" size={28} />
            <span>Kampung Kecil</span>
          </div>
          <p>Restoran keluarga dengan cita rasa khas Nusantara yang menyajikan menu-menu terbaik di tengah kenyamanan suasana 'saung'.</p>
        </div>

        <div className="footer-links">
          <h4>Tautan</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4>Cabang Lainnya</h4>
          <ul>
            <li>Kampung Kecil Bekasi</li>
            <li>Kampung Kecil Karawang</li>
            <li>Kampung Kecil Jakarta</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Kampung Kecil Cikarang. Seluruh Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
