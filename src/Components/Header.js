import React from 'react'

const Header = () => {
  return (
    
  //Develope and Create by Sortcoder Team
    <div>
    <header>
  <div className="header-top">
    <div className="container">
      <ul className="header-social-container">
        <li>
          <a href="https://www.sortcoder.tech/about" className="social-link">
            <ion-icon name="logo-facebook" />
          </a>
        </li>
        <li>
          <a href="https://www.sortcoder.tech/about" className="social-link">
            <ion-icon name="logo-twitter" />
          </a>
        </li>
        <li>
          <a href="https://www.sortcoder.tech/about" className="social-link">
            <ion-icon name="logo-instagram" />
          </a>
        </li>
        <li>
          <a href="https://www.sortcoder.tech/about" className="social-link">
            <ion-icon name="logo-linkedin" />
          </a>
        </li>
      </ul>
      <div className="header-alert-news">
        <p>
          <b>Free Shipping</b>
          This Week Order Over - $55
        </p>
      </div>
      <div className="header-top-actions">
        <select name="currency">
          <option value="usd">USD $</option>
          <option value="eur">EUR €</option>
        </select>
        <select name="language">
          <option value="en-US">English</option>
          <option value="es-ES">Español</option>
          <option value="fr">Français</option>
        </select>
      </div>
    </div>
  </div>
  <div className="header-main">
    <div className="container">
      <a href="https://www.sortcoder.tech/about" className="header-logo">SortCoder
      </a>
      <div className="header-search-container">
        <input type="search" name="search" className="search-field" placeholder="Enter your product name..." />
        <button className="search-btn">
          <ion-icon name="search-outline" />
        </button>
      </div>
      <div className="header-user-actions">
        <button className="action-btn">
          <ion-icon name="person-outline" />
        </button>
        <button className="action-btn">
          <ion-icon name="heart-outline" />
          <span className="count">0</span>
        </button>
        <button className="action-btn">
          <ion-icon name="bag-handle-outline" />
          <span className="count">0</span>
        </button>
      </div>
    </div>
  </div>
  <nav className="desktop-navigation-menu">
    <div className="container">
      <ul className="desktop-menu-category-list">
        <li className="menu-category">
          <a href="https://www.sortcoder.tech/about" className="menu-title">Home</a>
        </li>
        <li className="menu-category">
          <a href="https://www.sortcoder.tech/about" className="menu-title">Categories</a>
          <div className="dropdown-panel">
            <ul className="dropdown-panel-list">
              <li className="menu-title">
                <a href="https://www.sortcoder.tech/about">Electronics</a>
              </li>
              <li className="panel-list-item">
                <a href="https://www.sortcoder.tech/about">Desktop</a>
              </li>
              <li className="panel-list-item">
                <a href="https://www.sortcoder.tech/about">Laptop</a>
              </li>
              <li className="panel-list-item">
                <a href="https://www.sortcoder.tech/about">Camera</a>
              </li>
              <li className="panel-list-item">
                <a href="https://www.sortcoder.tech/about">Tablet</a>
              </li>
              <li className="panel-list-item">
                <a href="https://www.sortcoder.tech/about">Headphone</a>
              </li>
              <li className="panel-list-item">
                <a href="https://www.sortcoder.tech/about">
                  <img src="./assets/images/electronics-banner-1.jpg" alt="headphone collection" width={250} height={119} />
                </a>
              </li>
            </ul>
            <ul className="dropdown-panel-list">
              <li className="menu-title">
                <a href="https://www.sortcoder.tech/about">Men's</a>
              </li>
              <li className="panel-list-item">
                <a href="https://www.sortcoder.tech/about">Formal</a>
              </li>
              <li className="panel-list-item">
                <a href="https://www.sortcoder.tech/about">Casual</a>
              </li>
              <li className="panel-list-item">
                <a href="https://www.sortcoder.tech/about">Sports</a>
              </li>
              <li className="panel-list-item">
                <a href="https://www.sortcoder.tech/about">Jacket</a>
              </li>
              <li className="panel-list-item">
                <a href="https://www.sortcoder.tech/about">Sunglasses</a>
              </li>
              <li className="panel-list-item">
                <a href="https://www.sortcoder.tech/about">
                  <img src="./assets/images/mens-banner.jpg" alt="men's fashion" width={250} height={119} />
                </a>
              </li>
            </ul>
            <ul className="dropdown-panel-list">
              <li className="menu-title">
                <a href="https://www.sortcoder.tech/about">Women's</a>
              </li>
              <li className="panel-list-item">
                <a href="https://www.sortcoder.tech/about">Formal</a>
              </li>
              <li className="panel-list-item">
                <a href="https://www.sortcoder.tech/about">Casual</a>
              </li>
              <li className="panel-list-item">
                <a href="https://www.sortcoder.tech/about">Perfume</a>
              </li>
              <li className="panel-list-item">
                <a href="https://www.sortcoder.tech/about">Cosmetics</a>
              </li>
              <li className="panel-list-item">
                <a href="https://www.sortcoder.tech/about">Bags</a>
              </li>
              <li className="panel-list-item">
                <a href="https://www.sortcoder.tech/about">
                  <img src="./assets/images/womens-banner.jpg" alt="women's fashion" width={250} height={119} />
                </a>
              </li>
            </ul>
            <ul className="dropdown-panel-list">
              <li className="menu-title">
                <a href="https://www.sortcoder.tech/about">Electronics</a>
              </li>
              <li className="panel-list-item">
                <a href="https://www.sortcoder.tech/about">Smart Watch</a>
              </li>
              <li className="panel-list-item">
                <a href="https://www.sortcoder.tech/about">Smart TV</a>
              </li>
              <li className="panel-list-item">
                <a href="https://www.sortcoder.tech/about">Keyboard</a>
              </li>
              <li className="panel-list-item">
                <a href="https://www.sortcoder.tech/about">Mouse</a>
              </li>
              <li className="panel-list-item">
                <a href="https://www.sortcoder.tech/about">Microphone</a>
              </li>
              <li className="panel-list-item">
                <a href="https://www.sortcoder.tech/about">
                  <img src="./assets/images/electronics-banner-2.jpg" alt="mouse collection" width={250} height={119} />
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="menu-category">
          <a href="https://www.sortcoder.tech/about" className="menu-title">Men's</a>
          <ul className="dropdown-list">
            <li className="dropdown-item">
              <a href="https://www.sortcoder.tech/about">Shirt</a>
            </li>
            <li className="dropdown-item">
              <a href="https://www.sortcoder.tech/about">Shorts &amp; Jeans</a>
            </li>
            <li className="dropdown-item">
              <a href="https://www.sortcoder.tech/about">Safety Shoes</a>
            </li>
            <li className="dropdown-item">
              <a href="https://www.sortcoder.tech/about">Wallet</a>
            </li>
          </ul>
        </li>
        <li className="menu-category">
          <a href="https://www.sortcoder.tech/about" className="menu-title">Women's</a>
          <ul className="dropdown-list">
            <li className="dropdown-item">
              <a href="https://www.sortcoder.tech/about">Dress &amp; Frock</a>
            </li>
            <li className="dropdown-item">
              <a href="https://www.sortcoder.tech/about">Earrings</a>
            </li>
            <li className="dropdown-item">
              <a href="https://www.sortcoder.tech/about">Necklace</a>
            </li>
            <li className="dropdown-item">
              <a href="https://www.sortcoder.tech/about">Makeup Kit</a>
            </li>
          </ul>
        </li>
        <li className="menu-category">
          <a href="https://www.sortcoder.tech/about" className="menu-title">Jewelry</a>
          <ul className="dropdown-list">
            <li className="dropdown-item">
              <a href="https://www.sortcoder.tech/about">Earrings</a>
            </li>
            <li className="dropdown-item">
              <a href="https://www.sortcoder.tech/about">Couple Rings</a>
            </li>
            <li className="dropdown-item">
              <a href="https://www.sortcoder.tech/about">Necklace</a>
            </li>
            <li className="dropdown-item">
              <a href="https://www.sortcoder.tech/about">Bracelets</a>
            </li>
          </ul>
        </li>
        <li className="menu-category">
          <a href="https://www.sortcoder.tech/about" className="menu-title">Perfume</a>
          <ul className="dropdown-list">
            <li className="dropdown-item">
              <a href="https://www.sortcoder.tech/about">Clothes Perfume</a>
            </li>
            <li className="dropdown-item">
              <a href="https://www.sortcoder.tech/about">Deodorant</a>
            </li>
            <li className="dropdown-item">
              <a href="https://www.sortcoder.tech/about">Flower Fragrance</a>
            </li>
            <li className="dropdown-item">
              <a href="https://www.sortcoder.tech/about">Air Freshener</a>
            </li>
          </ul>
        </li>
        <li className="menu-category">
          <a href="https://www.sortcoder.tech/about" className="menu-title">Blog</a>
        </li>
        <li className="menu-category">
          <a href="https://www.sortcoder.tech/about" className="menu-title">Hot Offers</a>
        </li>
      </ul>
    </div>
  </nav>
  <div className="mobile-bottom-navigation">
    <button className="action-btn" data-mobile-menu-open-btn>
      <ion-icon name="menu-outline" />
    </button>
    <button className="action-btn">
      <ion-icon name="bag-handle-outline" />
      <span className="count">0</span>
    </button>
    <button className="action-btn">
      <ion-icon name="home-outline" />
    </button>
    <button className="action-btn">
      <ion-icon name="heart-outline" />
      <span className="count">0</span>
    </button>
    <button className="action-btn" data-mobile-menu-open-btn>
      <ion-icon name="grid-outline" />
    </button>
  </div>
  <nav className="mobile-navigation-menu  has-scrollbar" data-mobile-menu>
    <div className="menu-top">
      <h2 className="menu-title">Menu</h2>
      <button className="menu-close-btn" data-mobile-menu-close-btn>
        <ion-icon name="close-outline" />
      </button>
    </div>
    <ul className="mobile-menu-category-list">
      <li className="menu-category">
        <a href="https://www.sortcoder.tech/about" className="menu-title">Home</a>
      </li>
      <li className="menu-category">
        <button className="accordion-menu" data-accordion-btn>
          <p className="menu-title">Men's</p>
          <div>
            <ion-icon name="add-outline" className="add-icon" />
            <ion-icon name="remove-outline" className="remove-icon" />
          </div>
        </button>
        <ul className="submenu-category-list" data-accordion>
          <li className="submenu-category">
            <a href="https://www.sortcoder.tech/about" className="submenu-title">Shirt</a>
          </li>
          <li className="submenu-category">
            <a href="https://www.sortcoder.tech/about" className="submenu-title">Shorts &amp; Jeans</a>
          </li>
          <li className="submenu-category">
            <a href="https://www.sortcoder.tech/about" className="submenu-title">Safety Shoes</a>
          </li>
          <li className="submenu-category">
            <a href="https://www.sortcoder.tech/about" className="submenu-title">Wallet</a>
          </li>
        </ul>
      </li>
      <li className="menu-category">
        <button className="accordion-menu" data-accordion-btn>
          <p className="menu-title">Women's</p>
          <div>
            <ion-icon name="add-outline" className="add-icon" />
            <ion-icon name="remove-outline" className="remove-icon" />
          </div>
        </button>
        <ul className="submenu-category-list" data-accordion>
          <li className="submenu-category">
            <a href="https://www.sortcoder.tech/about" className="submenu-title">Dress &amp; Frock</a>
          </li>
          <li className="submenu-category">
            <a href="https://www.sortcoder.tech/about" className="submenu-title">Earrings</a>
          </li>
          <li className="submenu-category">
            <a href="https://www.sortcoder.tech/about" className="submenu-title">Necklace</a>
          </li>
          <li className="submenu-category">
            <a href="https://www.sortcoder.tech/about" className="submenu-title">Makeup Kit</a>
          </li>
        </ul>
      </li>
      <li className="menu-category">
        <button className="accordion-menu" data-accordion-btn>
          <p className="menu-title">Jewelry</p>
          <div>
            <ion-icon name="add-outline" className="add-icon" />
            <ion-icon name="remove-outline" className="remove-icon" />
          </div>
        </button>
        <ul className="submenu-category-list" data-accordion>
          <li className="submenu-category">
            <a href="https://www.sortcoder.tech/about" className="submenu-title">Earrings</a>
          </li>
          <li className="submenu-category">
            <a href="https://www.sortcoder.tech/about" className="submenu-title">Couple Rings</a>
          </li>
          <li className="submenu-category">
            <a href="https://www.sortcoder.tech/about" className="submenu-title">Necklace</a>
          </li>
          <li className="submenu-category">
            <a href="https://www.sortcoder.tech/about" className="submenu-title">Bracelets</a>
          </li>
        </ul>
      </li>
      <li className="menu-category">
        <button className="accordion-menu" data-accordion-btn>
          <p className="menu-title">Perfume</p>
          <div>
            <ion-icon name="add-outline" className="add-icon" />
            <ion-icon name="remove-outline" className="remove-icon" />
          </div>
        </button>
        <ul className="submenu-category-list" data-accordion>
          <li className="submenu-category">
            <a href="https://www.sortcoder.tech/about" className="submenu-title">Clothes Perfume</a>
          </li>
          <li className="submenu-category">
            <a href="https://www.sortcoder.tech/about" className="submenu-title">Deodorant</a>
          </li>
          <li className="submenu-category">
            <a href="https://www.sortcoder.tech/about" className="submenu-title">Flower Fragrance</a>
          </li>
          <li className="submenu-category">
            <a href="https://www.sortcoder.tech/about" className="submenu-title">Air Freshener</a>
          </li>
        </ul>
      </li>
      <li className="menu-category">
        <a href="https://www.sortcoder.tech/about" className="menu-title">Blog</a>
      </li>
      <li className="menu-category">
        <a href="https://www.sortcoder.tech/about" className="menu-title">Hot Offers</a>
      </li>
    </ul>
    <div className="menu-bottom">
      <ul className="menu-category-list">
        <li className="menu-category">
          <button className="accordion-menu" data-accordion-btn>
            <p className="menu-title">Language</p>
            <ion-icon name="caret-back-outline" className="caret-back" />
          </button>
          <ul className="submenu-category-list" data-accordion>
            <li className="submenu-category">
              <a href="https://www.sortcoder.tech/about" className="submenu-title">English</a>
            </li>
            <li className="submenu-category">
              <a href="https://www.sortcoder.tech/about" className="submenu-title">Español</a>
            </li>
            <li className="submenu-category">
              <a href="https://www.sortcoder.tech/about" className="submenu-title">Frençh</a>
            </li>
          </ul>
        </li>
        <li className="menu-category">
          <button className="accordion-menu" data-accordion-btn>
            <p className="menu-title">Currency</p>
            <ion-icon name="caret-back-outline" className="caret-back" />
          </button>
          <ul className="submenu-category-list" data-accordion>
            <li className="submenu-category">
              <a href="https://www.sortcoder.tech/about" className="submenu-title">USD $</a>
            </li>
            <li className="submenu-category">
              <a href="https://www.sortcoder.tech/about" className="submenu-title">EUR €</a>
            </li>
          </ul>
        </li>
      </ul>
      <ul className="menu-social-container">
        <li>
          <a href="https://www.sortcoder.tech/about" className="social-link">
            <ion-icon name="logo-facebook" />
          </a>
        </li>
        <li>
          <a href="https://www.sortcoder.tech/about" className="social-link">
            <ion-icon name="logo-twitter" />
          </a>
        </li>
        <li>
          <a href="https://www.sortcoder.tech/about" className="social-link">
            <ion-icon name="logo-instagram" />
          </a>
        </li>
        <li>
          <a href="https://www.sortcoder.tech/about" className="social-link">
            <ion-icon name="logo-linkedin" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
</header>

    </div>
  )
}

export default Header