import React from 'react'
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Link from "next/link";
import { getLatestArticles, formatDate } from "@/lib/articles";
import Image from "next/image";

export const metadata = {
    title: "RoundX transport | Reliable Vehicle Shipping Across the USA",
    description: "Get instant quotes for car, motorcycle, and freight transport. Fast, affordable, and secure auto shipping tailored to your needs. FMCSA licensed and insured vehicle shipping services nationwide.",
    keywords: [
        "vehicle shipping",
        "car shipping",
        "auto transport",
        "vehicle transport",
        "car transport",
        "auto shipping",
        "vehicle shipping quote",
        "car shipping services",
        "nationwide vehicle shipping"
    ],
    openGraph: {
        title: "RoundX transport | Reliable Vehicle Shipping Across the USA",
        description: "Get instant quotes for car, motorcycle, and freight transport. Fast, affordable, and secure auto shipping tailored to your needs.",
        url: "https://roundxtransport.com",
        siteName: "RoundX transport",
        type: "website",
    },
    alternates: {
        canonical: "roundxtransport.com "
    }
};

const  Home  = () => {
  const latestArticles = getLatestArticles(3);
  
  return (
      <>
        <div style={{position: "relative", padding: 0, height:'100vh', overflow: 'hidden'}}>
          {/*<video  autoPlay*/}
          {/*        muted*/}
          {/*        loop*/}
          {/*        playsInline*/}
          {/*        preload="auto" */}
          {/*        id="myVideo">*/}
          {/*  <source src='/video.mp4' type="video/mp4"/>*/}
          {/*</video>*/}
            <img style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: -1
            }} src={'/hero.png'}></img>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%)',
            zIndex: 0
          }}></div>
          <img className={'videoScreen'} src={'/wallpaper.png'} alt={'wallpaper'}/>
          <div className="content" style={{paddingTop: 120, position: 'relative', zIndex: 1, height: '100%'}}>
            <Header/>
            <div className={'row-hero'}>
              <div style={{ maxWidth: '700px' }}>
                <div className="hero-text">
                  <h1>RoundX – Reliable Vehicle Shipping Across the USA</h1>
                </div>
                <div className="hero-text2">
                  <h2>Get instant quotes for car, motorcycle, and freight transport. Fast, affordable, and secure auto shipping tailored to your needs.</h2>
                </div>
                <Link href='/quote' className='button-get-started'>
                  <span>Get Your Instant Quote</span>
                </Link>
                <div className={'reviews-section'}>
                  <div className={'content'}>
                    <div className={'list-reviews'}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          {/* Why Choose Us Section - SEO Optimized */}
          <section className={'why-choose-section'}>
            <h2 className={'section-title'}>Why Choose RoundX for Your Vehicle Shipping Needs?</h2>
            <div className={'features-grid'}>
              <div className={'feature-card feature-card-1'}>
                <div className={'feature-icon feature-icon-1'}>
                  <img src={'/icons/done.svg'} alt={'Verified Service'}/>
                </div>
                <h3>FMCSA Licensed & Insured</h3>
                <p>We are fully licensed and insured by the Federal Motor Carrier Safety Administration, ensuring your vehicle is protected throughout the entire shipping process.</p>
                  </div>
              <div className={'feature-card feature-card-2'}>
                <div className={'feature-icon feature-icon-2'}>
                  <img src={'/icons/car.svg'} alt={'Fast Delivery'}/>
                </div>
                <h3>Fast & Reliable Delivery</h3>
                <p>Our network of professional carriers ensures your vehicle arrives on time. Most shipments are completed within 1-7 business days depending on distance.</p>
                  </div>
              <div className={'feature-card feature-card-3'}>
                <div className={'feature-icon feature-icon-3'}>
                  <img src={'/icons/connect.svg'} alt={'24/7 Support'}/>
                </div>
                <h3>24/7 Customer Support</h3>
                <p>Our dedicated team is available around the clock to answer your questions and provide updates on your vehicle shipment status.</p>
                  </div>
              <div className={'feature-card feature-card-4'}>
                <div className={'feature-icon feature-icon-4'}>
                  <img src={'/icons/distance.svg'} alt={'Nationwide Coverage'}/>
                </div>
                <h3>Nationwide Coverage</h3>
                <p>We provide vehicle shipping services to all 50 states, including Alaska and Hawaii, with door-to-door delivery options available.</p>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className={'how-it-works-section'}>
            <h2 className={'section-title'}>How Our Vehicle Shipping Process Works</h2>
            <div className={'process-steps'}>
              <div className={'process-step process-step-1'}>
                <div className={'step-number step-number-1'}>1</div>
                <h3>Get Your Free Quote</h3>
                <p>Fill out our quick online form with your vehicle details, pickup and delivery locations. Receive an instant, transparent quote with no hidden fees.</p>
              </div>
              <div className={'process-step process-step-2'}>
                <div className={'step-number step-number-2'}>2</div>
                <h3>Schedule Pickup</h3>
                <p>Once you confirm your booking, we'll match you with a licensed carrier and schedule a convenient pickup time that works for you.</p>
              </div>
              <div className={'process-step process-step-3'}>
                <div className={'step-number step-number-3'}>3</div>
                <h3>Vehicle Inspection</h3>
                <p>Our carrier will conduct a thorough inspection and document the condition of your vehicle before loading it onto the transport truck.</p>
              </div>
              <div className={'process-step process-step-4'}>
                <div className={'step-number step-number-4'}>4</div>
                <h3>Safe Delivery</h3>
                <p>Your vehicle is safely transported and delivered to your specified location. Final inspection ensures everything arrives in perfect condition.</p>
              </div>
            </div>
          </section>

          {/* Services Section - SEO Enhanced */}
          <section className={'services-section'}>
            <h2 className={'section-title'}>Comprehensive Vehicle Shipping Services Across America</h2>
            <p className={'section-subtitle'}>RoundX offers a full range of auto transport solutions to meet all your vehicle shipping needs</p>
            <div className={'service-list'}>
              <div className={'service-list-item service-item-1'}>
                <h3 className={'service-list-item-title'}>Open Auto Transport</h3>
                <p className={'service-list-item-desc'}>
                  Our most popular and cost-effective option. Open carriers can transport up to 10 vehicles at once, making it the most affordable choice for standard vehicles. Perfect for everyday cars, SUVs, and trucks.
                </p>
              </div>
              <div className={'service-list-item service-item-2'}>
                <h3 className={'service-list-item-title'}>Enclosed Auto Transport</h3>
                <p className={'service-list-item-desc'}>
                  Premium protection for luxury, classic, or exotic vehicles. Enclosed transport provides complete protection from weather, road debris, and other elements. Ideal for high-value vehicles requiring extra care.
                </p>
              </div>
              <div className={'service-list-item service-item-3'}>
                <h3 className={'service-list-item-title'}>Motorcycle & Powersports Shipping</h3>
                <p className={'service-list-item-desc'}>
                  Specialized transport for motorcycles, ATVs, UTVs, scooters, and other powersports vehicles. Our carriers use proper tie-down equipment and have experience handling two-wheeled vehicles safely.
                </p>
              </div>
              <div className={'service-list-item service-item-4'}>
                <h3 className={'service-list-item-title'}>Expedited Shipping</h3>
                <p className={'service-list-item-desc'}>
                  Need your vehicle shipped urgently? Our expedited service guarantees faster pickup and delivery times. Perfect for time-sensitive moves or when you need your vehicle quickly.
                </p>
              </div>
            </div>
          </section>

          {/* News/Blog Section - SEO Optimized */}
          {/*<section className={'blog-preview-section'}>*/}
          {/*  <div className={'blog-preview-header'}>*/}
          {/*    <div className={'blog-header-badge'}>*/}
          {/*      <span>Latest News</span>*/}
          {/*    </div>*/}
          {/*    <h2 className={'section-title'}>Vehicle Shipping News & Insights</h2>*/}
          {/*    <p className={'section-subtitle'}>Stay informed with expert tips, industry updates, and helpful guides for vehicle shipping and auto transport</p>*/}
          {/*  </div>*/}
          {/*  <div className={'blog-grid-modern'}>*/}
          {/*    {latestArticles.map((article, index) => (*/}
          {/*      <article key={article.id} className={`blog-card-modern blog-card-${index + 1}`}>*/}
          {/*        <Link href={`/blog/${article.slug}`} className={'blog-image-link'}>*/}
          {/*          <div className={'blog-image-wrapper'}>*/}
          {/*            <Image*/}
          {/*              src={article.image}*/}
          {/*              alt={article.title}*/}
          {/*              width={400}*/}
          {/*              height={280}*/}
          {/*              className={'blog-featured-image'}*/}
          {/*              loading="lazy"*/}
          {/*            />*/}
          {/*            <div className={'blog-image-overlay'}>*/}
          {/*              <div className={'blog-read-indicator'}>*/}
          {/*                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">*/}
          {/*                  <path d="M5 12h14M12 5l7 7-7 7"/>*/}
          {/*                </svg>*/}
          {/*              </div>*/}
          {/*            </div>*/}
          {/*            <div className={'blog-category-overlay'}>*/}
          {/*              <span className={'blog-category-badge'}>{article.category}</span>*/}
          {/*            </div>*/}
          {/*          </div>*/}
          {/*        </Link>*/}
          {/*        <div className={'blog-card-body'}>*/}
          {/*          <div className={'blog-post-meta'}>*/}
          {/*            <span className={'blog-date'}>{formatDate(article.date)}</span>*/}
          {/*            <span className={'blog-meta-separator'}>•</span>*/}
          {/*            <span className={'blog-read-time'}>{article.readTime}</span>*/}
          {/*          </div>*/}
          {/*          <h3>*/}
          {/*            <Link href={`/blog/${article.slug}`}>{article.title}</Link>*/}
          {/*          </h3>*/}
          {/*          <p className={'blog-excerpt'}>{article.excerpt}</p>*/}
          {/*          <Link href={`/blog/${article.slug}`} className={'blog-read-more'}>*/}
          {/*            <span>Read Article</span>*/}
          {/*            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">*/}
          {/*              <path d="M5 12h14M12 5l7 7-7 7"/>*/}
          {/*            </svg>*/}
          {/*          </Link>*/}
          {/*        </div>*/}
          {/*      </article>*/}
          {/*    ))}*/}
          {/*  </div>*/}
          {/*  <div className={'blog-preview-footer'}>*/}
          {/*    <Link href={'/blog'} className={'blog-see-all-link'}>*/}
          {/*      <span>View All Articles</span>*/}
          {/*      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">*/}
          {/*        <path d="M5 12h14M12 5l7 7-7 7"/>*/}
          {/*      </svg>*/}
          {/*    </Link>*/}
          {/*  </div>*/}
          {/*</section>*/}

          {/* FAQ Section - SEO Rich */}
          <section className={'faq-section'}>
            <h2 className={'section-title'}>Frequently Asked Questions About Vehicle Shipping</h2>
            <div className={'faq-grid'}>
              <div className={'faq-item faq-item-1'}>
                <h3>How much does it cost to ship a car?</h3>
                <p>Car shipping costs vary based on distance, vehicle size, transport type (open or enclosed), and season. On average, expect to pay between $500-$1,500 for cross-country shipping. Get an instant free quote to see your exact price.</p>
              </div>
              <div className={'faq-item faq-item-2'}>
                <h3>How long does vehicle shipping take?</h3>
                <p>Shipping times depend on distance. Local moves (under 500 miles) typically take 1-3 days, while cross-country shipments (2,000+ miles) usually take 5-7 business days. Expedited options are available for faster delivery.</p>
              </div>
              <div className={'faq-item faq-item-3'}>
                <h3>Is my vehicle insured during transport?</h3>
                <p>Yes, all our carriers are required to carry cargo insurance. We verify each carrier's insurance through FMCSA. Your vehicle is protected from pickup to delivery.</p>
              </div>
              <div className={'faq-item faq-item-4'}>
                <h3>Can I track my vehicle during shipment?</h3>
                <p>While we don't have real-time GPS tracking, our team provides regular updates via phone, email, or SMS. You'll be notified when your vehicle is picked up, in transit, and delivered.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className={'cta-section'}>
            <div className={'cta-content'}>
              <h2>Ready to Ship Your Vehicle?</h2>
              <p>Get an instant, free quote today. No credit card required. Our team is standing by to help you with your vehicle shipping needs.</p>
              <div className="cta-button-wrapper">
                <Link href='/quote' className='cta-button'>
                  <span>Get Your Free Quote Now</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
              <div className="cta-features">
                <div className="cta-feature">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>100% Free Quote</span>
                </div>
                <div className="cta-feature">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>No Credit Card</span>
                </div>
                <div className="cta-feature">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Instant Response</span>
              </div>
            </div>
          </div>
          </section>
        </div>
        <Footer/>
      </>
  )
}

export default Home
