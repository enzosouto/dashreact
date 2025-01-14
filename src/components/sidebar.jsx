import React from 'react'

const sidebar = () => {

    const menuItems = [
        { name: 'Início', icon: 'https://cdn-icons-png.flaticon.com/512/25/25694.png', path: 'index.html' },
        { name: 'Instagram', icon: 'https://static.vecteezy.com/system/resources/thumbnails/023/986/521/small_2x/instagram-logo-instagram-logo-transparent-instagram-icon-transparent-free-free-png.png', path: 'instagram.html' },
        { name: 'Facebook', icon: 'https://img.icons8.com/ios11/512/facebook-new.png', path: 'facebook.html' },
        { name: 'Pinterest', icon: 'https://cdn-icons-png.flaticon.com/512/25/25698.png', path: 'pinterest.html' },
        { name: 'LinkedIn', icon: 'https://img.icons8.com/ios11/512/linkedin.png', path: 'linkedin.html' },
        { name: 'Google', icon: 'https://cdn4.iconfinder.com/data/icons/picons-social/57/09-google-3-512.png', path: 'google.html' },
        { name: 'TikTok', icon: 'https://cdn-icons-png.flaticon.com/512/3046/3046120.png', path: 'tiktok.html' }
      ];
  
      return (
    <div>
        <aside className="sidebar">
        <div className="logo-container">
          <img 
            src="https://logodownload.org/wp-content/uploads/2023/01/governo-federal-2023-logo-lula.png" 
            alt="Logo Governo Federal" 
            className="logo" 
          />
        </div>
        <nav>
          <ul className="menu">
            {menuItems.map((item, index) => (
              <li key={index} className={`menu-item ${index === 0 ? 'active' : ''}`}>
                <a 
                  href={item.path} 
                  style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '12px' }}
                >
                  <img src={item.icon} alt={item.name} className="icon" />
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
        
    </div>
  )
}

export default sidebar