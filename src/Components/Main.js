import React from 'react'

const Main = () => {
    return (
        <div>

            <main>
                {/*
- BANNER
    */}
               
                {/*
- CATEGORY
    */}
                {/*
- PRODUCT
    */}
            
                {/*
- TESTIMONIALS, CTA & SERVICE
    */}
                <div>
                    <div className="container">
                        <div className="testimonials-box">
                            {/*
      - TESTIMONIALS
    */}
                            <div className="testimonial">
                                <h2 className="title">testimonial</h2>
                                <div className="testimonial-card">
                                    <img src="./assets/images/testimonial-1.jpg" alt="alan doe" className="testimonial-banner" width={80} height={80} />
                                    <p className="testimonial-name">Alan Doe</p>
                                    <p className="testimonial-title">CEO &amp; Founder Invision</p>
                                    <img src="./assets/images/icons/quotes.svg" alt="quotation" className="quotation-img" width={26} />
                                    <p className="testimonial-desc">
                                        Lorem ipsum dolor sit amet consectetur Lorem ipsum
                                        dolor dolor sit amet.
                                    </p>
                                </div>
                            </div>
                            {/*
      - CTA
    */}
                            <div className="cta-container">
                                <img src="./assets/images/cta-banner.jpg" alt="summer collection" className="cta-banner" />
                                <a href="https://www.sortcoder.tech/about" className="cta-content">
                                    <p className="discount">25% Discount</p>
                                    <h2 className="cta-title">Summer collection</h2>
                                    <p className="cta-text">Starting @ $10</p>
                                    <button className="cta-btn">Shop now</button>
                                </a>
                            </div>
                            {/*
      - SERVICE
    */}
                            <div className="service">
                                <h2 className="title">Our Services</h2>
                                <div className="service-container">
                                    <a href="https://www.sortcoder.tech/about" className="service-item">
                                        <div className="service-icon">
                                            <ion-icon name="boat-outline" />
                                        </div>
                                        <div className="service-content">
                                            <h3 className="service-title">Worldwide Delivery</h3>
                                            <p className="service-desc">For Order Over $100</p>
                                        </div>
                                    </a>
                                    <a href="https://www.sortcoder.tech/about" className="service-item">
                                        <div className="service-icon">
                                            <ion-icon name="rocket-outline" />
                                        </div>
                                        <div className="service-content">
                                            <h3 className="service-title">Next Day delivery</h3>
                                            <p className="service-desc">UK Orders Only</p>
                                        </div>
                                    </a>
                                    <a href="https://www.sortcoder.tech/about" className="service-item">
                                        <div className="service-icon">
                                            <ion-icon name="call-outline" />
                                        </div>
                                        <div className="service-content">
                                            <h3 className="service-title">Best Online Support</h3>
                                            <p className="service-desc">Hours: 8AM - 11PM</p>
                                        </div>
                                    </a>
                                    <a href="https://www.sortcoder.tech/about" className="service-item">
                                        <div className="service-icon">
                                            <ion-icon name="arrow-undo-outline" />
                                        </div>
                                        <div className="service-content">
                                            <h3 className="service-title">Return Policy</h3>
                                            <p className="service-desc">Easy &amp; Free Return</p>
                                        </div>
                                    </a>
                                    <a href="https://www.sortcoder.tech/about" className="service-item">
                                        <div className="service-icon">
                                            <ion-icon name="ticket-outline" />
                                        </div>
                                        <div className="service-content">
                                            <h3 className="service-title">30% money back</h3>
                                            <p className="service-desc">For Order Over $100</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*
- BLOG
    */}
                <div className="blog">
                    <div className="container">
                        <div className="blog-container has-scrollbar">
                            <div className="blog-card">
                                <a href="https://www.sortcoder.tech/about">
                                    <img src="./assets/images/blog-1.jpg" alt="Clothes Retail KPIs 2021 Guide for Clothes Executives" width={300} className="blog-banner" />
                                </a>
                                <div className="blog-content">
                                    <a href="https://www.sortcoder.tech/about" className="blog-category">Fashion</a>
                                    <a href="https://www.sortcoder.tech/about">
                                        <h3 className="blog-title">Clothes Retail KPIs 2021 Guide for Clothes Executives.</h3>
                                    </a>
                                    <p className="blog-meta">
                                        By <cite>Mr Admin</cite> / <time dateTime="2022-04-06">Apr 06, 2022</time>
                                    </p>
                                </div>
                            </div>
                            <div className="blog-card">
                                <a href="https://www.sortcoder.tech/about">
                                    <img src="./assets/images/blog-2.jpg" alt="Curbside fashion Trends: How to Win the Pickup Battle." className="blog-banner" width={300} />
                                </a>
                                <div className="blog-content">
                                    <a href="https://www.sortcoder.tech/about" className="blog-category">Clothes</a>
                                    <h3>
                                        <a href="https://www.sortcoder.tech/about" className="blog-title">Curbside fashion Trends: How to Win the Pickup Battle.</a>
                                    </h3>
                                    <p className="blog-meta">
                                        By <cite>Mr Robin</cite> / <time dateTime="2022-01-18">Jan 18, 2022</time>
                                    </p>
                                </div>
                            </div>
                            <div className="blog-card">
                                <a href="https://www.sortcoder.tech/about">
                                    <img src="./assets/images/blog-3.jpg" alt="EBT vendors: Claim Your Share of SNAP Online Revenue." className="blog-banner" width={300} />
                                </a>
                                <div className="blog-content">
                                    <a href="https://www.sortcoder.tech/about" className="blog-category">Shoes</a>
                                    <h3>
                                        <a href="https://www.sortcoder.tech/about" className="blog-title">EBT vendors: Claim Your Share of SNAP Online Revenue.</a>
                                    </h3>
                                    <p className="blog-meta">
                                        By <cite>Mr Selsa</cite> / <time dateTime="2022-02-10">Feb 10, 2022</time>
                                    </p>
                                </div>
                            </div>
                            <div className="blog-card">
                                <a href="https://www.sortcoder.tech/about">
                                    <img src="./assets/images/blog-4.jpg" alt="Curbside fashion Trends: How to Win the Pickup Battle." className="blog-banner" width={300} />
                                </a>
                                <div className="blog-content">
                                    <a href="https://www.sortcoder.tech/about" className="blog-category">Electronics</a>
                                    <h3>
                                        <a href="https://www.sortcoder.tech/about" className="blog-title">Curbside fashion Trends: How to Win the Pickup Battle.</a>
                                    </h3>
                                    <p className="blog-meta">
                                        By <cite>Mr Pawar</cite> / <time dateTime="2022-03-15">Mar 15, 2022</time>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>



        </div>
    )
}

export default Main