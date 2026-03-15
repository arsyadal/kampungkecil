import React from 'react'
import { ArrowRight, UtensilsCrossed } from 'lucide-react'
import heroImg from '../assets/hero_restaurant_1773587504119.png'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <img src={heroImg} alt="Kampung Kecil Cikarang" className="hero-bg" />
      
      <div className="container hero-content animate">
        <div className="badge">
          <UtensilsCrossed size={16} />
          <span>Restoran Indonesia No. 1 di Cikarang</span>
        </div>
        <h1>Rasakan Kehangatan <br /><span>Masakan Tradisional</span></h1>
        <p>Nikmati hidangan otentik Sunda dengan suasana asri di 'saung' yang nyaman. Sempurna untuk momen spesial bersama keluarga.</p>
        
        <div className="hero-btns">
          <a href="#menu" className="btn btn-primary">
            Lihat Menu <ArrowRight size={18} style={{ marginLeft: '8px' }} />
          </a>
          <a href="https://wa.me/08111770793" className="btn btn-outline" style={{ border: '2px solid white', color: 'white' }}>
            Reservasi Sekarang
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
