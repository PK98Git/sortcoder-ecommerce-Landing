import React from 'react'

const Testimonial = () => {
  return (
    
  //Develope and Create by Sortcoder Team
    <div>
    <div>
    <div className="container">
        <div className="testimonials-box">
            {/*
- TESTIMONIALS
*/}
            <div className="testimonial">
                <h2 className="title">testimonial</h2>
                <div className="testimonial-card">
                    <img src="https://www.sortcoder.tech/logo.png" alt="alan doe" className="testimonial-banner" width={80} height={80} />
                    <p className="testimonial-name">Sortcoder</p>
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
                <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/jump-%7C-summer-collection-design-template-48b98fecacb530c1f2c0ea8648787319_screen.jpg?ts=1587100472" alt="summer collection" className="cta-banner" />
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
    </div>
  )
}

export default Testimonial