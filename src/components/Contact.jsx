import React from 'react'
import { Send, Instagram, Facebook, MessageCircle } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info-section">
            <span className="section-subtitle">Hubungi Kami</span>
            <h2 className="section-title">Kunjungi Kami <br />Hari Ini</h2>
            <p className="contact-text">
              Punya pertanyaan atau ingin melakukan reservasi? Tim kami siap membantu Anda memberikan pengalaman terbaik.
            </p>

            <div className="social-links">
              <a href="#" className="social-icon"><Instagram /></a>
              <a href="#" className="social-icon"><Facebook /></a>
              <a href="https://wa.me/08111770793" className="social-icon"><MessageCircle /></a>
            </div>

            <div className="map-wrapper">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d107.1470907!3d-6.194559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69830500803473%3A0xe5a3c18b10e5d050!2sKampung%20Kecil%20Cikarang!5e0!3m2!1sid!2sid!4v1710512345678!5m2!1sid!2sid" 
                width="100%" 
                height="300" 
                style={{ border: 0, borderRadius: '20px' }} 
                allowFullScreen="" 
                loading="lazy" 
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>

          <div className="contact-form-wrapper glass">
            <h3>Kirim Pesan</h3>
            <form className="contact-form">
              <div className="form-group">
                <label>Nama Lengkap</label>
                <input type="text" placeholder="Masukkan nama Anda" />
              </div>
              <div className="form-group">
                <label>Nomor Telepon</label>
                <input type="tel" placeholder="0812..." />
              </div>
              <div className="form-group">
                <label>Pesan Anda</label>
                <textarea rows="5" placeholder="Tuliskan pesan atau detail reservasi..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">
                Kirim via WhatsApp <Send size={18} style={{ marginLeft: '10px' }} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
