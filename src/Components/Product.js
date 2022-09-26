import React from 'react'

export const Product = () => {
  return (
    
  //Develope and Create by Sortcoder Team
    <div>
    <div className="product-container">
    <div className="container">
        {/*
- SIDEBAR
*/}
        <div class="sidebar  has-scrollbar" data-mobile-menu="">

            <div class="sidebar-category">

                <div class="sidebar-top">
                    <h2 class="sidebar-title">Category</h2>

                    <button class="sidebar-close-btn" data-mobile-menu-close-btn="">
                        <ion-icon name="close-outline" role="img" class="md hydrated" aria-label="close outline"></ion-icon>
                    </button>
                </div>

                <ul class="sidebar-menu-category-list">

                    <li class="sidebar-menu-category">

                        <button class="sidebar-accordion-menu" data-accordion-btn="">

                            <div class="menu-title-flex">
                                <img src="./assets/images/icons/dress.svg" alt="clothes" width="20" height="20" class="menu-title-img"/>

                                    <p class="menu-title">Clothes</p>
                            </div>

                            <div>
                                <ion-icon name="add-outline" class="add-icon md hydrated" role="img" aria-label="add outline"></ion-icon>
                                <ion-icon name="remove-outline" class="remove-icon md hydrated" role="img" aria-label="remove outline"></ion-icon>
                            </div>

                        </button>

                        <ul class="sidebar-submenu-category-list" data-accordion="">

                            <li class="sidebar-submenu-category">
                                <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">Shirt</p>
                                    <data value="300" class="stock" title="Available Stock">300</data>
                                </a>
                            </li>

                            <li class="sidebar-submenu-category">
                                <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">shorts &amp; jeans</p>
                                    <data value="60" class="stock" title="Available Stock">60</data>
                                </a>
                            </li>

                            <li class="sidebar-submenu-category">
                                <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">jacket</p>
                                    <data value="50" class="stock" title="Available Stock">50</data>
                                </a>
                            </li>

                            <li class="sidebar-submenu-category">
                                <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">dress &amp; frock</p>
                                    <data value="87" class="stock" title="Available Stock">87</data>
                                </a>
                            </li>

                        </ul>

                    </li>

                    <li class="sidebar-menu-category">

                        <button class="sidebar-accordion-menu" data-accordion-btn="">

                            <div class="menu-title-flex">
                                <img src="./assets/images/icons/shoes.svg" alt="footwear" class="menu-title-img" width="20" height="20"/>

                                    <p class="menu-title">Footwear</p>
                            </div>

                            <div>
                                <ion-icon name="add-outline" class="add-icon md hydrated" role="img" aria-label="add outline"></ion-icon>
                                <ion-icon name="remove-outline" class="remove-icon md hydrated" role="img" aria-label="remove outline"></ion-icon>
                            </div>

                        </button>

                        <ul class="sidebar-submenu-category-list" data-accordion="">

                            <li class="sidebar-submenu-category">
                                <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">Sports</p>
                                    <data value="45" class="stock" title="Available Stock">45</data>
                                </a>
                            </li>

                            <li class="sidebar-submenu-category">
                                <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">Formal</p>
                                    <data value="75" class="stock" title="Available Stock">75</data>
                                </a>
                            </li>

                            <li class="sidebar-submenu-category">
                                <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">Casual</p>
                                    <data value="35" class="stock" title="Available Stock">35</data>
                                </a>
                            </li>

                            <li class="sidebar-submenu-category">
                                <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">Safety Shoes</p>
                                    <data value="26" class="stock" title="Available Stock">26</data>
                                </a>
                            </li>

                        </ul>

                    </li>

                    <li class="sidebar-menu-category">

                        <button class="sidebar-accordion-menu" data-accordion-btn="">

                            <div class="menu-title-flex">
                                <img src="./assets/images/icons/jewelry.svg" alt="clothes" class="menu-title-img" width="20" height="20"/>

                                    <p class="menu-title">Jewelry</p>
                            </div>

                            <div>
                                <ion-icon name="add-outline" class="add-icon md hydrated" role="img" aria-label="add outline"></ion-icon>
                                <ion-icon name="remove-outline" class="remove-icon md hydrated" role="img" aria-label="remove outline"></ion-icon>
                            </div>

                        </button>

                        <ul class="sidebar-submenu-category-list" data-accordion="">

                            <li class="sidebar-submenu-category">
                                <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">Earrings</p>
                                    <data value="46" class="stock" title="Available Stock">46</data>
                                </a>
                            </li>

                            <li class="sidebar-submenu-category">
                                <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">Couple Rings</p>
                                    <data value="73" class="stock" title="Available Stock">73</data>
                                </a>
                            </li>

                            <li class="sidebar-submenu-category">
                                <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">Necklace</p>
                                    <data value="61" class="stock" title="Available Stock">61</data>
                                </a>
                            </li>

                        </ul>

                    </li>

                    <li class="sidebar-menu-category">

                        <button class="sidebar-accordion-menu" data-accordion-btn="">

                            <div class="menu-title-flex">
                                <img src="./assets/images/icons/perfume.svg" alt="perfume" class="menu-title-img" width="20" height="20"/>

                                    <p class="menu-title">Perfume</p>
                            </div>

                            <div>
                                <ion-icon name="add-outline" class="add-icon md hydrated" role="img" aria-label="add outline"></ion-icon>
                                <ion-icon name="remove-outline" class="remove-icon md hydrated" role="img" aria-label="remove outline"></ion-icon>
                            </div>

                        </button>

                        <ul class="sidebar-submenu-category-list" data-accordion="">

                            <li class="sidebar-submenu-category">
                                <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">Clothes Perfume</p>
                                    <data value="12" class="stock" title="Available Stock">12 pcs</data>
                                </a>
                            </li>

                            <li class="sidebar-submenu-category">
                                <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">Deodorant</p>
                                    <data value="60" class="stock" title="Available Stock">60 pcs</data>
                                </a>
                            </li>

                            <li class="sidebar-submenu-category">
                                <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">jacket</p>
                                    <data value="50" class="stock" title="Available Stock">50 pcs</data>
                                </a>
                            </li>

                            <li class="sidebar-submenu-category">
                                <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">dress &amp; frock</p>
                                    <data value="87" class="stock" title="Available Stock">87 pcs</data>
                                </a>
                            </li>

                        </ul>

                    </li>

                    <li class="sidebar-menu-category">

                        <button class="sidebar-accordion-menu" data-accordion-btn="">

                            <div class="menu-title-flex">
                                <img src="./assets/images/icons/cosmetics.svg" alt="cosmetics" class="menu-title-img" width="20" height="20"/>

                                    <p class="menu-title">Cosmetics</p>
                            </div>

                            <div>
                                <ion-icon name="add-outline" class="add-icon md hydrated" role="img" aria-label="add outline"></ion-icon>
                                <ion-icon name="remove-outline" class="remove-icon md hydrated" role="img" aria-label="remove outline"></ion-icon>
                            </div>

                        </button>

                        <ul class="sidebar-submenu-category-list" data-accordion="">

                            <li class="sidebar-submenu-category">
                                <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">Shampoo</p>
                                    <data value="68" class="stock" title="Available Stock">68</data>
                                </a>
                            </li>

                            <li class="sidebar-submenu-category">
                                <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">Sunscreen</p>
                                    <data value="46" class="stock" title="Available Stock">46</data>
                                </a>
                            </li>

                            <li class="sidebar-submenu-category">
                                <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">Body Wash</p>
                                    <data value="79" class="stock" title="Available Stock">79</data>
                                </a>
                            </li>

                            <li class="sidebar-submenu-category">
                                <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">Makeup Kit</p>
                                    <data value="23" class="stock" title="Available Stock">23</data>
                                </a>
                            </li>

                        </ul>

                    </li>

                    <li class="sidebar-menu-category">

                        <button class="sidebar-accordion-menu" data-accordion-btn="">

                            <div class="menu-title-flex">
                                <img src="./assets/images/icons/glasses.svg" alt="glasses" class="menu-title-img" width="20" height="20"/>

                                    <p class="menu-title">Glasses</p>
                            </div>

                            <div>
                                <ion-icon name="add-outline" class="add-icon md hydrated" role="img" aria-label="add outline"></ion-icon>
                                <ion-icon name="remove-outline" class="remove-icon md hydrated" role="img" aria-label="remove outline"></ion-icon>
                            </div>

                        </button>

                        <ul class="sidebar-submenu-category-list" data-accordion="">

                            <li class="sidebar-submenu-category">
                                <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">Sunglasses</p>
                                    <data value="50" class="stock" title="Available Stock">50</data>
                                </a>
                            </li>

                            <li class="sidebar-submenu-category">
                                <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">Lenses</p>
                                    <data value="48" class="stock" title="Available Stock">48</data>
                                </a>
                            </li>

                        </ul>

                    </li>

                    <li class="sidebar-menu-category">

                        <button class="sidebar-accordion-menu" data-accordion-btn="">

                            <div class="menu-title-flex">
                                <img src="./assets/images/icons/bag.svg" alt="bags" class="menu-title-img" width="20" height="20"/>

                                    <p class="menu-title">Bags</p>
                            </div>

                            <div>
                                <ion-icon name="add-outline" class="add-icon md hydrated" role="img" aria-label="add outline"></ion-icon>
                                <ion-icon name="remove-outline" class="remove-icon md hydrated" role="img" aria-label="remove outline"></ion-icon>
                            </div>

                        </button>

                        <ul class="sidebar-submenu-category-list" data-accordion="">

                            <li class="sidebar-submenu-category">
                                <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">Shopping Bag</p>
                                    <data value="62" class="stock" title="Available Stock">62</data>
                                </a>
                            </li>

                            <li class="sidebar-submenu-category">
                                <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">Gym Backpack</p>
                                    <data value="35" class="stock" title="Available Stock">35</data>
                                </a>
                            </li>

                            <li class="sidebar-submenu-category">
                                <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">Purse</p>
                                    <data value="80" class="stock" title="Available Stock">80</data>
                                </a>
                            </li>

                            <li class="sidebar-submenu-category">
                                <a href="#" class="sidebar-submenu-title">
                                    <p class="product-name">Wallet</p>
                                    <data value="75" class="stock" title="Available Stock">75</data>
                                </a>
                            </li>

                        </ul>

                    </li>

                </ul>

            </div>

            <div class="product-showcase">

                <h3 class="showcase-heading">best sellers</h3>

                <div class="showcase-wrapper">

                    <div class="showcase-container">

                        <div class="showcase">

                            <a href="#" class="showcase-img-box">
                                <img src="./assets/images/products/1.jpg" alt="baby fabric shoes" width="75" height="75" class="showcase-img"/>
                            </a>

                            <div class="showcase-content">

                                <a href="#">
                                    <h4 class="showcase-title">baby fabric shoes</h4>
                                </a>

                                <div class="showcase-rating">
                                    <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
                                    <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
                                    <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
                                    <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
                                    <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
                                </div>

                                <div class="price-box">
                                    <del>$5.00</del>
                                    <p class="price">$4.00</p>
                                </div>

                            </div>

                        </div>

                        <div class="showcase">

                            <a href="#" class="showcase-img-box">
                                <img src="./assets/images/products/2.jpg" alt="men's hoodies t-shirt" class="showcase-img" width="75" height="75"/>
                            </a>

                            <div class="showcase-content">

                                <a href="#">
                                    <h4 class="showcase-title">men's hoodies t-shirt</h4>
                                </a>
                                <div class="showcase-rating">
                                    <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
                                    <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
                                    <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
                                    <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
                                    <ion-icon name="star-half-outline" role="img" class="md hydrated" aria-label="star half outline"></ion-icon>
                                </div>

                                <div class="price-box">
                                    <del>$17.00</del>
                                    <p class="price">$7.00</p>
                                </div>

                            </div>

                        </div>

                        <div class="showcase">

                            <a href="#" class="showcase-img-box">
                                <img src="./assets/images/products/3.jpg" alt="girls t-shirt" class="showcase-img" width="75" height="75"/>
                            </a>

                            <div class="showcase-content">

                                <a href="#">
                                    <h4 class="showcase-title">girls t-shirt</h4>
                                </a>
                                <div class="showcase-rating">
                                    <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
                                    <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
                                    <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
                                    <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
                                    <ion-icon name="star-half-outline" role="img" class="md hydrated" aria-label="star half outline"></ion-icon>
                                </div>

                                <div class="price-box">
                                    <del>$5.00</del>
                                    <p class="price">$3.00</p>
                                </div>

                            </div>

                        </div>

                        <div class="showcase">

                            <a href="#" class="showcase-img-box">
                                <img src="./assets/images/products/4.jpg" alt="woolen hat for men" class="showcase-img" width="75" height="75"/>
                            </a>

                            <div class="showcase-content">

                                <a href="#">
                                    <h4 class="showcase-title">woolen hat for men</h4>
                                </a>
                                <div class="showcase-rating">
                                    <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
                                    <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
                                    <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
                                    <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
                                    <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
                                </div>

                                <div class="price-box">
                                    <del>$15.00</del>
                                    <p class="price">$12.00</p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
        <div className="product-box">
            {/*
- PRODUCT MINIMAL
*/}
            <div className="product-minimal">
                <div className="product-showcase">
                    <h2 className="title">New Arrivals</h2>
                    <div className="showcase-wrapper has-scrollbar">
                        <div className="showcase-container">
                            <div className="showcase">
                                <a href="https://www.sortcoder.tech/about" className="showcase-img-box">
                                    <img src="./assets/images/products/clothes-1.jpg" alt="relaxed short full sleeve t-shirt" width={70} className="showcase-img" />
                                </a>
                                <div className="showcase-content">
                                    <a href="https://www.sortcoder.tech/about">
                                        <h4 className="showcase-title">Relaxed Short full Sleeve T-Shirt</h4>
                                    </a>
                                    <a href="https://www.sortcoder.tech/about" className="showcase-category">Clothes</a>
                                    <div className="price-box">
                                        <p className="price">$45.00</p>
                                        <del>$12.00</del>
                                    </div>
                                </div>
                            </div>
                            <div className="showcase">
                                <a href="https://www.sortcoder.tech/about" className="showcase-img-box">
                                    <img src="./assets/images/products/clothes-2.jpg" alt="girls pink embro design top" className="showcase-img" width={70} />
                                </a>
                                <div className="showcase-content">
                                    <a href="https://www.sortcoder.tech/about">
                                        <h4 className="showcase-title">Girls pnk Embro design Top</h4>
                                    </a>
                                    <a href="https://www.sortcoder.tech/about" className="showcase-category">Clothes</a>
                                    <div className="price-box">
                                        <p className="price">$61.00</p>
                                        <del>$9.00</del>
                                    </div>
                                </div>
                            </div>
                            <div className="showcase">
                                <a href="https://www.sortcoder.tech/about" className="showcase-img-box">
                                    <img src="./assets/images/products/clothes-3.jpg" alt="black floral wrap midi skirt" className="showcase-img" width={70} />
                                </a>
                                <div className="showcase-content">
                                    <a href="https://www.sortcoder.tech/about">
                                        <h4 className="showcase-title">Black Floral Wrap Midi Skirt</h4>
                                    </a>
                                    <a href="https://www.sortcoder.tech/about" className="showcase-category">Clothes</a>
                                    <div className="price-box">
                                        <p className="price">$76.00</p>
                                        <del>$25.00</del>
                                    </div>
                                </div>
                            </div>
                            <div className="showcase">
                                <a href="https://www.sortcoder.tech/about" className="showcase-img-box">
                                    <img src="./assets/images/products/shirt-1.jpg" alt="pure garment dyed cotton shirt" className="showcase-img" width={70} />
                                </a>
                                <div className="showcase-content">
                                    <a href="https://www.sortcoder.tech/about">
                                        <h4 className="showcase-title">Pure Garment Dyed Cotton Shirt</h4>
                                    </a>
                                    <a href="https://www.sortcoder.tech/about" className="showcase-category">Mens Fashion</a>
                                    <div className="price-box">
                                        <p className="price">$68.00</p>
                                        <del>$31.00</del>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="showcase-container">
                            <div className="showcase">
                                <a href="https://www.sortcoder.tech/about" className="showcase-img-box">
                                    <img src="./assets/images/products/jacket-5.jpg" alt="men yarn fleece full-zip jacket" className="showcase-img" width={70} />
                                </a>
                                <div className="showcase-content">
                                    <a href="https://www.sortcoder.tech/about">
                                        <h4 className="showcase-title">MEN Yarn Fleece Full-Zip Jacket</h4>
                                    </a>
                                    <a href="https://www.sortcoder.tech/about" className="showcase-category">Winter wear</a>
                                    <div className="price-box">
                                        <p className="price">$61.00</p>
                                        <del>$11.00</del>
                                    </div>
                                </div>
                            </div>
                            <div className="showcase">
                                <a href="https://www.sortcoder.tech/about" className="showcase-img-box">
                                    <img src="./assets/images/products/jacket-1.jpg" alt="mens winter leathers jackets" className="showcase-img" width={70} />
                                </a>
                                <div className="showcase-content">
                                    <a href="https://www.sortcoder.tech/about">
                                        <h4 className="showcase-title">Mens Winter Leathers Jackets</h4>
                                    </a>
                                    <a href="https://www.sortcoder.tech/about" className="showcase-category">Winter wear</a>
                                    <div className="price-box">
                                        <p className="price">$32.00</p>
                                        <del>$20.00</del>
                                    </div>
                                </div>
                            </div>
                            <div className="showcase">
                                <a href="https://www.sortcoder.tech/about" className="showcase-img-box">
                                    <img src="./assets/images/products/jacket-3.jpg" alt="mens winter leathers jackets" className="showcase-img" width={70} />
                                </a>
                                <div className="showcase-content">
                                    <a href="https://www.sortcoder.tech/about">
                                        <h4 className="showcase-title">Mens Winter Leathers Jackets</h4>
                                    </a>
                                    <a href="https://www.sortcoder.tech/about" className="showcase-category">Jackets</a>
                                    <div className="price-box">
                                        <p className="price">$50.00</p>
                                        <del>$25.00</del>
                                    </div>
                                </div>
                            </div>
                            <div className="showcase">
                                <a href="https://www.sortcoder.tech/about" className="showcase-img-box">
                                    <img src="./assets/images/products/shorts-1.jpg" alt="better basics french terry sweatshorts" className="showcase-img" width={70} />
                                </a>
                                <div className="showcase-content">
                                    <a href="https://www.sortcoder.tech/about">
                                        <h4 className="showcase-title">Better Basics French Terry Sweatshorts</h4>
                                    </a>
                                    <a href="https://www.sortcoder.tech/about" className="showcase-category">Shorts</a>
                                    <div className="price-box">
                                        <p className="price">$20.00</p>
                                        <del>$10.00</del>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-showcase">
                    <h2 className="title">Trending</h2>
                    <div className="showcase-wrapper  has-scrollbar">
                        <div className="showcase-container">
                            <div className="showcase">
                                <a href="https://www.sortcoder.tech/about" className="showcase-img-box">
                                    <img src="./assets/images/products/sports-1.jpg" alt="running & trekking shoes - white" className="showcase-img" width={70} />
                                </a>
                                <div className="showcase-content">
                                    <a href="https://www.sortcoder.tech/about">
                                        <h4 className="showcase-title">Running &amp; Trekking Shoes - White</h4>
                                    </a>
                                    <a href="https://www.sortcoder.tech/about" className="showcase-category">Sports</a>
                                    <div className="price-box">
                                        <p className="price">$49.00</p>
                                        <del>$15.00</del>
                                    </div>
                                </div>
                            </div>
                            <div className="showcase">
                                <a href="https://www.sortcoder.tech/about" className="showcase-img-box">
                                    <img src="./assets/images/products/sports-2.jpg" alt="trekking & running shoes - black" className="showcase-img" width={70} />
                                </a>
                                <div className="showcase-content">
                                    <a href="https://www.sortcoder.tech/about">
                                        <h4 className="showcase-title">Trekking &amp; Running Shoes - black</h4>
                                    </a>
                                    <a href="https://www.sortcoder.tech/about" className="showcase-category">Sports</a>
                                    <div className="price-box">
                                        <p className="price">$78.00</p>
                                        <del>$36.00</del>
                                    </div>
                                </div>
                            </div>
                            <div className="showcase">
                                <a href="https://www.sortcoder.tech/about" className="showcase-img-box">
                                    <img src="./assets/images/products/party-wear-1.jpg" alt="womens party wear shoes" className="showcase-img" width={70} />
                                </a>
                                <div className="showcase-content">
                                    <a href="https://www.sortcoder.tech/about">
                                        <h4 className="showcase-title">Womens Party Wear Shoes</h4>
                                    </a>
                                    <a href="https://www.sortcoder.tech/about" className="showcase-category">Party wear</a>
                                    <div className="price-box">
                                        <p className="price">$94.00</p>
                                        <del>$42.00</del>
                                    </div>
                                </div>
                            </div>
                            <div className="showcase">
                                <a href="https://www.sortcoder.tech/about" className="showcase-img-box">
                                    <img src="./assets/images/products/sports-3.jpg" alt="sports claw women's shoes" className="showcase-img" width={70} />
                                </a>
                                <div className="showcase-content">
                                    <a href="https://www.sortcoder.tech/about">
                                        <h4 className="showcase-title">Sports Claw Women's Shoes</h4>
                                    </a>
                                    <a href="https://www.sortcoder.tech/about" className="showcase-category">Sports</a>
                                    <div className="price-box">
                                        <p className="price">$54.00</p>
                                        <del>$65.00</del>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="showcase-container">
                            <div className="showcase">
                                <a href="https://www.sortcoder.tech/about" className="showcase-img-box">
                                    <img src="./assets/images/products/sports-6.jpg" alt="air tekking shoes - white" className="showcase-img" width={70} />
                                </a>
                                <div className="showcase-content">
                                    <a href="https://www.sortcoder.tech/about">
                                        <h4 className="showcase-title">Air Trekking Shoes - white</h4>
                                    </a>
                                    <a href="https://www.sortcoder.tech/about" className="showcase-category">Sports</a>
                                    <div className="price-box">
                                        <p className="price">$52.00</p>
                                        <del>$55.00</del>
                                    </div>
                                </div>
                            </div>
                            <div className="showcase">
                                <a href="https://www.sortcoder.tech/about" className="showcase-img-box">
                                    <img src="./assets/images/products/shoe-3.jpg" alt="Boot With Suede Detail" className="showcase-img" width={70} />
                                </a>
                                <div className="showcase-content">
                                    <a href="https://www.sortcoder.tech/about">
                                        <h4 className="showcase-title">Boot With Suede Detail</h4>
                                    </a>
                                    <a href="https://www.sortcoder.tech/about" className="showcase-category">boots</a>
                                    <div className="price-box">
                                        <p className="price">$20.00</p>
                                        <del>$30.00</del>
                                    </div>
                                </div>
                            </div>
                            <div className="showcase">
                                <a href="https://www.sortcoder.tech/about" className="showcase-img-box">
                                    <img src="./assets/images/products/shoe-1.jpg" alt="men's leather formal wear shoes" className="showcase-img" width={70} />
                                </a>
                                <div className="showcase-content">
                                    <a href="https://www.sortcoder.tech/about">
                                        <h4 className="showcase-title">Men's Leather Formal Wear shoes</h4>
                                    </a>
                                    <a href="https://www.sortcoder.tech/about" className="showcase-category">formal</a>
                                    <div className="price-box">
                                        <p className="price">$56.00</p>
                                        <del>$78.00</del>
                                    </div>
                                </div>
                            </div>
                            <div className="showcase">
                                <a href="https://www.sortcoder.tech/about" className="showcase-img-box">
                                    <img src="./assets/images/products/shoe-2.jpg" alt="casual men's brown shoes" className="showcase-img" width={70} />
                                </a>
                                <div className="showcase-content">
                                    <a href="https://www.sortcoder.tech/about">
                                        <h4 className="showcase-title">Casual Men's Brown shoes</h4>
                                    </a>
                                    <a href="https://www.sortcoder.tech/about" className="showcase-category">Casual</a>
                                    <div className="price-box">
                                        <p className="price">$50.00</p>
                                        <del>$55.00</del>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-showcase">
                    <h2 className="title">Top Rated</h2>
                    <div className="showcase-wrapper  has-scrollbar">
                        <div className="showcase-container">
                            <div className="showcase">
                                <a href="https://www.sortcoder.tech/about" className="showcase-img-box">
                                    <img src="./assets/images/products/watch-3.jpg" alt="pocket watch leather pouch" className="showcase-img" width={70} />
                                </a>
                                <div className="showcase-content">
                                    <a href="https://www.sortcoder.tech/about">
                                        <h4 className="showcase-title">Pocket Watch Leather Pouch</h4>
                                    </a>
                                    <a href="https://www.sortcoder.tech/about" className="showcase-category">Watches</a>
                                    <div className="price-box">
                                        <p className="price">$50.00</p>
                                        <del>$34.00</del>
                                    </div>
                                </div>
                            </div>
                            <div className="showcase">
                                <a href="https://www.sortcoder.tech/about" className="showcase-img-box">
                                    <img src="./assets/images/products/jewellery-3.jpg" alt="silver deer heart necklace" className="showcase-img" width={70} />
                                </a>
                                <div className="showcase-content">
                                    <a href="https://www.sortcoder.tech/about">
                                        <h4 className="showcase-title">Silver Deer Heart Necklace</h4>
                                    </a>
                                    <a href="https://www.sortcoder.tech/about" className="showcase-category">Jewellery</a>
                                    <div className="price-box">
                                        <p className="price">$84.00</p>
                                        <del>$30.00</del>
                                    </div>
                                </div>
                            </div>
                            <div className="showcase">
                                <a href="https://www.sortcoder.tech/about" className="showcase-img-box">
                                    <img src="./assets/images/products/perfume.jpg" alt="titan 100 ml womens perfume" className="showcase-img" width={70} />
                                </a>
                                <div className="showcase-content">
                                    <a href="https://www.sortcoder.tech/about">
                                        <h4 className="showcase-title">Titan 100 Ml Womens Perfume</h4>
                                    </a>
                                    <a href="https://www.sortcoder.tech/about" className="showcase-category">Perfume</a>
                                    <div className="price-box">
                                        <p className="price">$42.00</p>
                                        <del>$10.00</del>
                                    </div>
                                </div>
                            </div>
                            <div className="showcase">
                                <a href="https://www.sortcoder.tech/about" className="showcase-img-box">
                                    <img src="./assets/images/products/belt.jpg" alt="men's leather reversible belt" className="showcase-img" width={70} />
                                </a>
                                <div className="showcase-content">
                                    <a href="https://www.sortcoder.tech/about">
                                        <h4 className="showcase-title">Men's Leather Reversible Belt</h4>
                                    </a>
                                    <a href="https://www.sortcoder.tech/about" className="showcase-category">Belt</a>
                                    <div className="price-box">
                                        <p className="price">$24.00</p>
                                        <del>$10.00</del>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="showcase-container">
                            <div className="showcase">
                                <a href="https://www.sortcoder.tech/about" className="showcase-img-box">
                                    <img src="./assets/images/products/jewellery-2.jpg" alt="platinum zircon classic ring" className="showcase-img" width={70} />
                                </a>
                                <div className="showcase-content">
                                    <a href="https://www.sortcoder.tech/about">
                                        <h4 className="showcase-title">platinum Zircon Classic Ring</h4>
                                    </a>
                                    <a href="https://www.sortcoder.tech/about" className="showcase-category">jewellery</a>
                                    <div className="price-box">
                                        <p className="price">$62.00</p>
                                        <del>$65.00</del>
                                    </div>
                                </div>
                            </div>
                            <div className="showcase">
                                <a href="https://www.sortcoder.tech/about" className="showcase-img-box">
                                    <img src="./assets/images/products/watch-1.jpg" alt="smart watche vital plus" className="showcase-img" width={70} />
                                </a>
                                <div className="showcase-content">
                                    <a href="https://www.sortcoder.tech/about">
                                        <h4 className="showcase-title">Smart watche Vital Plus</h4>
                                    </a>
                                    <a href="https://www.sortcoder.tech/about" className="showcase-category">Watches</a>
                                    <div className="price-box">
                                        <p className="price">$56.00</p>
                                        <del>$78.00</del>
                                    </div>
                                </div>
                            </div>
                            <div className="showcase">
                                <a href="https://www.sortcoder.tech/about" className="showcase-img-box">
                                    <img src="https://media6.ppl-media.com/mediafiles/blogs/good_vibes_onion_hairfall_control_shampoo_with_keratin_for_shine_corn_for_hair_health_wheat_protein_for_strength_and_soy_for_moisture_300_ml_1_7_display_1622120911_4dbc60cc_1_b0fe1a2b49.jpg" alt="shampoo conditioner packs" className="showcase-img" width={70} />
                                </a>
                                <div className="showcase-content">
                                    <a href="https://www.sortcoder.tech/about">
                                        <h4 className="showcase-title">shampoo conditioner packs</h4>
                                    </a>
                                    <a href="https://www.sortcoder.tech/about" className="showcase-category">cosmetics</a>
                                    <div className="price-box">
                                        <p className="price">$20.00</p>
                                        <del>$30.00</del>
                                    </div>
                                </div>
                            </div>
                            <div className="showcase">
                                <a href="https://www.sortcoder.tech/about" className="showcase-img-box">
                                    <img src="./assets/images/products/jewellery-1.jpg" alt="rose gold peacock earrings" className="showcase-img" width={70} />
                                </a>
                                <div className="showcase-content">
                                    <a href="https://www.sortcoder.tech/about">
                                        <h4 className="showcase-title">Rose Gold Peacock Earrings</h4>
                                    </a>
                                    <a href="https://www.sortcoder.tech/about" className="showcase-category">jewellery</a>
                                    <div className="price-box">
                                        <p className="price">$20.00</p>
                                        <del>$30.00</del>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*
- PRODUCT FEATURED
*/}
            <div className="product-featured">
                <h2 className="title">Deal of the day</h2>
                <div className="showcase-wrapper has-scrollbar">
                    <div className="showcase-container">
                        <div className="showcase">
                            <div className="showcase-banner">
                                <img src="https://cdn.cliqueinc.com/posts/296206/best-haircare-brands-296206-1636502327589-main.700x0c.jpg" alt="shampoo, conditioner & facewash packs" className="showcase-img" />
                            </div>
                            <div className="showcase-content">
                                <div className="showcase-rating">
                                    <ion-icon name="star" />
                                    <ion-icon name="star" />
                                    <ion-icon name="star" />
                                    <ion-icon name="star-outline" />
                                    <ion-icon name="star-outline" />
                                </div>
                                <a href="https://www.sortcoder.tech/about">
                                    <h3 className="showcase-title">shampoo, conditioner &amp; facewash packs</h3>
                                </a>
                                <p className="showcase-desc">
                                    Lorem ipsum dolor sit amet consectetur Lorem ipsum
                                    dolor dolor sit amet consectetur Lorem ipsum dolor
                                </p>
                                <div className="price-box">
                                    <p className="price">$150.00</p>
                                    <del>$200.00</del>
                                </div>
                                <button className="add-cart-btn">add to cart</button>
                                <div className="showcase-status">
                                    <div className="wrapper">
                                        <p>
                                            already sold: <b>20</b>
                                        </p>
                                        <p>
                                            available: <b>40</b>
                                        </p>
                                    </div>
                                    <div className="showcase-status-bar" />
                                </div>
                                <div className="countdown-box">
                                    <p className="countdown-desc">
                                        Hurry Up! Offer ends in:
                                    </p>
                                    <div className="countdown">
                                        <div className="countdown-content">
                                            <p className="display-number">360</p>
                                            <p className="display-text">Days</p>
                                        </div>
                                        <div className="countdown-content">
                                            <p className="display-number">24</p>
                                            <p className="display-text">Hours</p>
                                        </div>
                                        <div className="countdown-content">
                                            <p className="display-number">59</p>
                                            <p className="display-text">Min</p>
                                        </div>
                                        <div className="countdown-content">
                                            <p className="display-number">00</p>
                                            <p className="display-text">Sec</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="showcase-container">
                        <div className="showcase">
                            <div className="showcase-banner">
                                <img src="./assets/images/products/jewellery-1.jpg" alt="Rose Gold diamonds Earring" className="showcase-img" />
                            </div>
                            <div className="showcase-content">
                                <div className="showcase-rating">
                                    <ion-icon name="star" />
                                    <ion-icon name="star" />
                                    <ion-icon name="star" />
                                    <ion-icon name="star-outline" />
                                    <ion-icon name="star-outline" />
                                </div>
                                <h3 className="showcase-title">
                                    <a href="https://www.sortcoder.tech/about" className="showcase-title">Rose Gold diamonds Earring</a>
                                </h3>
                                <p className="showcase-desc">
                                    Lorem ipsum dolor sit amet consectetur Lorem ipsum
                                    dolor dolor sit amet consectetur Lorem ipsum dolor
                                </p>
                                <div className="price-box">
                                    <p className="price">$1990.00</p>
                                    <del>$2000.00</del>
                                </div>
                                <button className="add-cart-btn">add to cart</button>
                                <div className="showcase-status">
                                    <div className="wrapper">
                                        <p> already sold: <b>15</b> </p>
                                        <p> available: <b>40</b> </p>
                                    </div>
                                    <div className="showcase-status-bar" />
                                </div>
                                <div className="countdown-box">
                                    <p className="countdown-desc">Hurry Up! Offer ends in:</p>
                                    <div className="countdown">
                                        <div className="countdown-content">
                                            <p className="display-number">360</p>
                                            <p className="display-text">Days</p>
                                        </div>
                                        <div className="countdown-content">
                                            <p className="display-number">24</p>
                                            <p className="display-text">Hours</p>
                                        </div>
                                        <div className="countdown-content">
                                            <p className="display-number">59</p>
                                            <p className="display-text">Min</p>
                                        </div>
                                        <div className="countdown-content">
                                            <p className="display-number">00</p>
                                            <p className="display-text">Sec</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*
- PRODUCT GRID
*/}
            <div className="product-main">
                <h2 className="title">New Products</h2>
                <div className="product-grid">
                    <div className="showcase">
                        <div className="showcase-banner">
                            <img src="./assets/images/products/jacket-3.jpg" alt="Mens Winter Leathers Jackets" width={300} className="product-img default" />
                            <img src="./assets/images/products/jacket-4.jpg" alt="Mens Winter Leathers Jackets" width={300} className="product-img hover" />
                            <p className="showcase-badge">15%</p>
                            <div className="showcase-actions">
                                <button className="btn-action">
                                    <ion-icon name="heart-outline" />
                                </button>
                                <button className="btn-action">
                                    <ion-icon name="eye-outline" />
                                </button>
                                <button className="btn-action">
                                    <ion-icon name="repeat-outline" />
                                </button>
                                <button className="btn-action">
                                    <ion-icon name="bag-add-outline" />
                                </button>
                            </div>
                        </div>
                        <div className="showcase-content">
                            <a href="https://www.sortcoder.tech/about" className="showcase-category">jacket</a>
                            <a href="https://www.sortcoder.tech/about">
                                <h3 className="showcase-title">Mens Winter Leathers Jackets</h3>
                            </a>
                            <div className="showcase-rating">
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star-outline" />
                                <ion-icon name="star-outline" />
                            </div>
                            <div className="price-box">
                                <p className="price">$48.00</p>
                                <del>$75.00</del>
                            </div>
                        </div>
                    </div>
                    <div className="showcase">
                        <div className="showcase-banner">
                            <img src="./assets/images/products/shirt-1.jpg" alt="Pure Garment Dyed Cotton Shirt" className="product-img default" width={300} />
                            <img src="./assets/images/products/shirt-2.jpg" alt="Pure Garment Dyed Cotton Shirt" className="product-img hover" width={300} />
                            <p className="showcase-badge angle black">sale</p>
                            <div className="showcase-actions">
                                <button className="btn-action">
                                    <ion-icon name="heart-outline" />
                                </button>
                                <button className="btn-action">
                                    <ion-icon name="eye-outline" />
                                </button>
                                <button className="btn-action">
                                    <ion-icon name="repeat-outline" />
                                </button>
                                <button className="btn-action">
                                    <ion-icon name="bag-add-outline" />
                                </button>
                            </div>
                        </div>
                        <div className="showcase-content">
                            <a href="https://www.sortcoder.tech/about" className="showcase-category">shirt</a>
                            <h3>
                                <a href="https://www.sortcoder.tech/about" className="showcase-title">Pure Garment Dyed Cotton Shirt</a>
                            </h3>
                            <div className="showcase-rating">
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star-outline" />
                                <ion-icon name="star-outline" />
                            </div>
                            <div className="price-box">
                                <p className="price">$45.00</p>
                                <del>$56.00</del>
                            </div>
                        </div>
                    </div>
                    <div className="showcase">
                        <div className="showcase-banner">
                            <img src="./assets/images/products/jacket-5.jpg" alt="MEN Yarn Fleece Full-Zip Jacket" className="product-img default" width={300} />
                            <img src="./assets/images/products/jacket-6.jpg" alt="MEN Yarn Fleece Full-Zip Jacket" className="product-img hover" width={300} />
                            <div className="showcase-actions">
                                <button className="btn-action">
                                    <ion-icon name="heart-outline" />
                                </button>
                                <button className="btn-action">
                                    <ion-icon name="eye-outline" />
                                </button>
                                <button className="btn-action">
                                    <ion-icon name="repeat-outline" />
                                </button>
                                <button className="btn-action">
                                    <ion-icon name="bag-add-outline" />
                                </button>
                            </div>
                        </div>
                        <div className="showcase-content">
                            <a href="https://www.sortcoder.tech/about" className="showcase-category">Jacket</a>
                            <h3>
                                <a href="https://www.sortcoder.tech/about" className="showcase-title">MEN Yarn Fleece Full-Zip Jacket</a>
                            </h3>
                            <div className="showcase-rating">
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star-outline" />
                                <ion-icon name="star-outline" />
                            </div>
                            <div className="price-box">
                                <p className="price">$58.00</p>
                                <del>$65.00</del>
                            </div>
                        </div>
                    </div>
                    <div className="showcase">
                        <div className="showcase-banner">
                            <img src="./assets/images/products/clothes-3.jpg" alt="Black Floral Wrap Midi Skirt" className="product-img default" width={300} />
                            <img src="./assets/images/products/clothes-4.jpg" alt="Black Floral Wrap Midi Skirt" className="product-img hover" width={300} />
                            <p className="showcase-badge angle pink">new</p>
                            <div className="showcase-actions">
                                <button className="btn-action">
                                    <ion-icon name="heart-outline" />
                                </button>
                                <button className="btn-action">
                                    <ion-icon name="eye-outline" />
                                </button>
                                <button className="btn-action">
                                    <ion-icon name="repeat-outline" />
                                </button>
                                <button className="btn-action">
                                    <ion-icon name="bag-add-outline" />
                                </button>
                            </div>
                        </div>
                        <div className="showcase-content">
                            <a href="https://www.sortcoder.tech/about" className="showcase-category">skirt</a>
                            <h3>
                                <a href="https://www.sortcoder.tech/about" className="showcase-title">Black Floral Wrap Midi Skirt</a>
                            </h3>
                            <div className="showcase-rating">
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                            </div>
                            <div className="price-box">
                                <p className="price">$25.00</p>
                                <del>$35.00</del>
                            </div>
                        </div>
                    </div>
                    <div className="showcase">
                        <div className="showcase-banner">
                            <img src="./assets/images/products/shoe-2.jpg" alt="Casual Men's Brown shoes" className="product-img default" width={300} />
                            <img src="./assets/images/products/shoe-2_1.jpg" alt="Casual Men's Brown shoes" className="product-img hover" width={300} />
                            <div className="showcase-actions">
                                <button className="btn-action">
                                    <ion-icon name="heart-outline" />
                                </button>
                                <button className="btn-action">
                                    <ion-icon name="eye-outline" />
                                </button>
                                <button className="btn-action">
                                    <ion-icon name="repeat-outline" />
                                </button>
                                <button className="btn-action">
                                    <ion-icon name="bag-add-outline" />
                                </button>
                            </div>
                        </div>
                        <div className="showcase-content">
                            <a href="https://www.sortcoder.tech/about" className="showcase-category">casual</a>
                            <h3>
                                <a href="https://www.sortcoder.tech/about" className="showcase-title">Casual Men's Brown shoes</a>
                            </h3>
                            <div className="showcase-rating">
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                            </div>
                            <div className="price-box">
                                <p className="price">$99.00</p>
                                <del>$105.00</del>
                            </div>
                        </div>
                    </div>
                    <div className="showcase">
                        <div className="showcase-banner">
                            <img src="./assets/images/products/watch-3.jpg" alt="Pocket Watch Leather Pouch" className="product-img default" width={300} />
                            <img src="./assets/images/products/watch-4.jpg" alt="Pocket Watch Leather Pouch" className="product-img hover" width={300} />
                            <p className="showcase-badge angle black">sale</p>
                            <div className="showcase-actions">
                                <button className="btn-action">
                                    <ion-icon name="heart-outline" />
                                </button>
                                <button className="btn-action">
                                    <ion-icon name="eye-outline" />
                                </button>
                                <button className="btn-action">
                                    <ion-icon name="repeat-outline" />
                                </button>
                                <button className="btn-action">
                                    <ion-icon name="bag-add-outline" />
                                </button>
                            </div>
                        </div>
                        <div className="showcase-content">
                            <a href="https://www.sortcoder.tech/about" className="showcase-category">watches</a>
                            <h3>
                                <a href="https://www.sortcoder.tech/about" className="showcase-title">Pocket Watch Leather Pouch</a>
                            </h3>
                            <div className="showcase-rating">
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star-outline" />
                                <ion-icon name="star-outline" />
                            </div>
                            <div className="price-box">
                                <p className="price">$150.00</p>
                                <del>$170.00</del>
                            </div>
                        </div>
                    </div>
                    <div className="showcase">
                        <div className="showcase-banner">
                            <img src="./assets/images/products/watch-1.jpg" alt="Smart watche Vital Plus" className="product-img default" width={300} />
                            <img src="./assets/images/products/watch-2.jpg" alt="Smart watche Vital Plus" className="product-img hover" width={300} />
                            <div className="showcase-actions">
                                <button className="btn-action">
                                    <ion-icon name="heart-outline" />
                                </button>
                                <button className="btn-action">
                                    <ion-icon name="eye-outline" />
                                </button>
                                <button className="btn-action">
                                    <ion-icon name="repeat-outline" />
                                </button>
                                <button className="btn-action">
                                    <ion-icon name="bag-add-outline" />
                                </button>
                            </div>
                        </div>
                        <div className="showcase-content">
                            <a href="https://www.sortcoder.tech/about" className="showcase-category">watches</a>
                            <h3>
                                <a href="https://www.sortcoder.tech/about" className="showcase-title">Smart watche Vital Plus</a>
                            </h3>
                            <div className="showcase-rating">
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star-outline" />
                            </div>
                            <div className="price-box">
                                <p className="price">$100.00</p>
                                <del>$120.00</del>
                            </div>
                        </div>
                    </div>
                    <div className="showcase">
                        <div className="showcase-banner">
                            <img src="./assets/images/products/party-wear-1.jpg" alt="Womens Party Wear Shoes" className="product-img default" width={300} />
                            <img src="./assets/images/products/party-wear-2.jpg" alt="Womens Party Wear Shoes" className="product-img hover" width={300} />
                            <p className="showcase-badge angle black">sale</p>
                            <div className="showcase-actions">
                                <button className="btn-action">
                                    <ion-icon name="heart-outline" />
                                </button>
                                <button className="btn-action">
                                    <ion-icon name="eye-outline" />
                                </button>
                                <button className="btn-action">
                                    <ion-icon name="repeat-outline" />
                                </button>
                                <button className="btn-action">
                                    <ion-icon name="bag-add-outline" />
                                </button>
                            </div>
                        </div>
                        <div className="showcase-content">
                            <a href="https://www.sortcoder.tech/about" className="showcase-category">party wear</a>
                            <h3>
                                <a href="https://www.sortcoder.tech/about" className="showcase-title">Womens Party Wear Shoes</a>
                            </h3>
                            <div className="showcase-rating">
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star-outline" />
                                <ion-icon name="star-outline" />
                            </div>
                            <div className="price-box">
                                <p className="price">$25.00</p>
                                <del>$30.00</del>
                            </div>
                        </div>
                    </div>
                    <div className="showcase">
                        <div className="showcase-banner">
                            <img src="./assets/images/products/jacket-1.jpg" alt="Mens Winter Leathers Jackets" className="product-img default" width={300} />
                            <img src="./assets/images/products/jacket-2.jpg" alt="Mens Winter Leathers Jackets" className="product-img hover" width={300} />
                            <div className="showcase-actions">
                                <button className="btn-action">
                                    <ion-icon name="heart-outline" />
                                </button>
                                <button className="btn-action">
                                    <ion-icon name="eye-outline" />
                                </button>
                                <button className="btn-action">
                                    <ion-icon name="repeat-outline" />
                                </button>
                                <button className="btn-action">
                                    <ion-icon name="bag-add-outline" />
                                </button>
                            </div>
                        </div>
                        <div className="showcase-content">
                            <a href="https://www.sortcoder.tech/about" className="showcase-category">jacket</a>
                            <h3>
                                <a href="https://www.sortcoder.tech/about" className="showcase-title">Mens Winter Leathers Jackets</a>
                            </h3>
                            <div className="showcase-rating">
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star-outline" />
                            </div>
                            <div className="price-box">
                                <p className="price">$32.00</p>
                                <del>$45.00</del>
                            </div>
                        </div>
                    </div>
                    <div className="showcase">
                        <div className="showcase-banner">
                            <img src="./assets/images/products/sports-2.jpg" alt="Trekking & Running Shoes - black" className="product-img default" width={300} />
                            <img src="./assets/images/products/sports-4.jpg" alt="Trekking & Running Shoes - black" className="product-img hover" width={300} />
                            <p className="showcase-badge angle black">sale</p>
                            <div className="showcase-actions">
                                <button className="btn-action">
                                    <ion-icon name="heart-outline" />
                                </button>
                                <button className="btn-action">
                                    <ion-icon name="eye-outline" />
                                </button>
                                <button className="btn-action">
                                    <ion-icon name="repeat-outline" />
                                </button>
                                <button className="btn-action">
                                    <ion-icon name="bag-add-outline" />
                                </button>
                            </div>
                        </div>
                        <div className="showcase-content">
                            <a href="https://www.sortcoder.tech/about" className="showcase-category">sports</a>
                            <h3>
                                <a href="https://www.sortcoder.tech/about" className="showcase-title">Trekking &amp; Running Shoes - black</a>
                            </h3>
                            <div className="showcase-rating">
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star-outline" />
                                <ion-icon name="star-outline" />
                            </div>
                            <div className="price-box">
                                <p className="price">$58.00</p>
                                <del>$64.00</del>
                            </div>
                        </div>
                    </div>
                    <div className="showcase">
                        <div className="showcase-banner">
                            <img src="./assets/images/products/shoe-1.jpg" alt="Men's Leather Formal Wear shoes" className="product-img default" width={300} />
                            <img src="./assets/images/products/shoe-1_1.jpg" alt="Men's Leather Formal Wear shoes" className="product-img hover" width={300} />
                            <div className="showcase-actions">
                                <button className="btn-action">
                                    <ion-icon name="heart-outline" />
                                </button>
                                <button className="btn-action">
                                    <ion-icon name="eye-outline" />
                                </button>
                                <button className="btn-action">
                                    <ion-icon name="repeat-outline" />
                                </button>
                                <button className="btn-action">
                                    <ion-icon name="bag-add-outline" />
                                </button>
                            </div>
                        </div>
                        <div className="showcase-content">
                            <a href="https://www.sortcoder.tech/about" className="showcase-category">formal</a>
                            <h3>
                                <a href="https://www.sortcoder.tech/about" className="showcase-title">Men's Leather Formal Wear shoes</a>
                            </h3>
                            <div className="showcase-rating">
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star-outline" />
                            </div>
                            <div className="price-box">
                                <p className="price">$50.00</p>
                                <del>$65.00</del>
                            </div>
                        </div>
                    </div>
                    <div className="showcase">
                        <div className="showcase-banner">
                            <img src="./assets/images/products/shorts-1.jpg" alt="Better Basics French Terry Sweatshorts" className="product-img default" width={300} />
                            <img src="./assets/images/products/shorts-2.jpg" alt="Better Basics French Terry Sweatshorts" className="product-img hover" width={300} />
                            <p className="showcase-badge angle black">sale</p>
                            <div className="showcase-actions">
                                <button className="btn-action">
                                    <ion-icon name="heart-outline" />
                                </button>
                                <button className="btn-action">
                                    <ion-icon name="eye-outline" />
                                </button>
                                <button className="btn-action">
                                    <ion-icon name="repeat-outline" />
                                </button>
                                <button className="btn-action">
                                    <ion-icon name="bag-add-outline" />
                                </button>
                            </div>
                        </div>
                        <div className="showcase-content">
                            <a href="https://www.sortcoder.tech/about" className="showcase-category">shorts</a>
                            <h3>
                                <a href="https://www.sortcoder.tech/about" className="showcase-title">Better Basics French Terry Sweatshorts</a>
                            </h3>
                            <div className="showcase-rating">
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star-outline" />
                                <ion-icon name="star-outline" />
                            </div>
                            <div className="price-box">
                                <p className="price">$78.00</p>
                                <del>$85.00</del>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}
