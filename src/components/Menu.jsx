import React from 'react'
import './Menu.css'

// Import the generated assets
import cumiImg from '../assets/cumi_kremes_1773587522463.png'
import bebekImg from '../assets/bebek_sambel_matah_1773587540565.png'
import liwetImg from '../assets/nasi_liwet_1773587559724.png'
import ayamImg from '../assets/ayam_bakar_madu_buncis_1773587577578.png'

const menuItems = [
  {
    id: 1,
    name: 'Cumi Kremes',
    price: 'Rp 45.000',
    desc: 'Cumi segar digoreng renyah dengan balutan kremes gurih.',
    img: cumiImg,
    tag: 'Populer'
  },
  {
    id: 2,
    name: 'Bebek Sambel Matah',
    price: 'Rp 55.000',
    desc: 'Bebek goreng empuk disajikan dengan sambal matah khas Bali.',
    img: bebekImg,
    tag: 'Favorit'
  },
  {
    id: 3,
    name: 'Paket Nasi Liwet',
    price: 'Rp 145.000',
    desc: 'Paket komplit nasi liwet wangi untuk porsi keluarga.',
    img: liwetImg,
    tag: 'Signature'
  },
  {
    id: 4,
    name: 'Ayam Bakar Madu',
    price: 'Rp 38.000',
    desc: 'Ayam bakar dengan olesan madu murni dan bumbu rempah pilihan.',
    img: ayamImg,
    tag: 'Manis Gurih'
  }
]

const Menu = () => {
  return (
    <section id="menu" className="section menu">
      <div className="container">
        <div className="menu-header">
          <span className="section-subtitle">Menu Andalan</span>
          <h2 className="section-title">Cita Rasa Nusantara</h2>
          <p className="menu-intro">Pilihan menu terbaik yang selalu menjadi favorit pelanggan setia Kampung Kecil.</p>
        </div>

        <div className="menu-grid">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-card">
              <div className="menu-img-box">
                <span className="menu-tag">{item.tag}</span>
                <img src={item.img} alt={item.name} />
              </div>
              <div className="menu-info">
                <div className="menu-title-row">
                  <h3>{item.name}</h3>
                  <span className="price">{item.price}</span>
                </div>
                <p>{item.desc}</p>
                <button className="btn-text">Pesan via WhatsApp</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu
