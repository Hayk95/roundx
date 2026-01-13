import React from 'react'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";

export const metadata = {
    title: "Request Shipment Cost | RoundX Transport",
    description: "Request a detailed shipment cost estimate for your vehicle transportation needs. Get transparent pricing for open and enclosed auto transport services across the USA.",
    keywords: [
        "RoundX Transport",
        "Request Shipment Cost",
        "Vehicle Shipping Quote",
        "Transportation Cost",
        "Auto Transport Pricing",
        "Vehicle Shipping Rates",
        "Freight Shipping Cost"
    ],
    openGraph: {
        title: "Request Shipment Cost | RoundX Transport",
        description: "Get a detailed cost estimate for your vehicle shipment. Transparent pricing for all transportation services across America.",
        url: "https://roundxtransport.com/request-shipment-cost",
        siteName: "RoundX Transport",
        images: [
            {
                url: "https://roundxtransport.com/og-image.png",
                width: 1200,
                height: 630,
            },
        ],
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
    },
};

const RequestShipmentCost = () => {
    return (
        <div>
            <div className={'content'} style={{paddingTop: 120}}>
                <Header/>
            </div>
            <div className={'content'}>
                <div className="shipment-cost-header">
                    <h1 className="shipment-cost-title">Request Shipment Cost</h1>
                    <p className="shipment-cost-subtitle">Get an accurate, transparent quote for your vehicle transportation needs. Fill out the form below to receive your instant shipping estimate.</p>
                </div>

                <div className="transportation-info">
                    <div className="transportation-info-grid">
                        <div className="transportation-card">
                            <div className="transportation-icon">
                                <span className="dollar-icon">$</span>
                            </div>
                            <h3>Open Auto Transport</h3>
                            <p>Most cost-effective option for standard vehicles. Open carriers transport multiple vehicles simultaneously, making it the most affordable choice for cars, SUVs, and trucks.</p>
                            <div className="transportation-price-range">
                                <span className="price-label">Starting from:</span>
                                <span className="price-value">$500</span>
                            </div>
                        </div>

                        <div className="transportation-card">
                            <div className="transportation-icon">
                                <span className="dollar-icon">$</span>
                            </div>
                            <h3>Enclosed Auto Transport</h3>
                            <p>Premium protection for luxury, classic, or exotic vehicles. Complete protection from weather and road elements. Ideal for high-value vehicles requiring extra care.</p>
                            <div className="transportation-price-range">
                                <span className="price-label">Starting from:</span>
                                <span className="price-value">$800</span>
                            </div>
                        </div>

                        <div className="transportation-card">
                            <div className="transportation-icon">
                                <span className="dollar-icon">$</span>
                            </div>
                            <h3>Expedited Shipping</h3>
                            <p>Fast-track service for urgent shipments. Guaranteed faster pickup and delivery times. Perfect for time-sensitive moves or when you need your vehicle quickly.</p>
                            <div className="transportation-price-range">
                                <span className="price-label">Starting from:</span>
                                <span className="price-value">$1,200</span>
                            </div>
                        </div>

                        <div className="transportation-card">
                            <div className="transportation-icon">
                                <span className="dollar-icon">$</span>
                            </div>
                            <h3>Motorcycle & Powersports</h3>
                            <p>Specialized transport for motorcycles, ATVs, UTVs, and other powersports vehicles. Proper tie-down equipment and experienced handling for safe transport.</p>
                            <div className="transportation-price-range">
                                <span className="price-label">Starting from:</span>
                                <span className="price-value">$300</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pricing-factors">
                    <h2 className="pricing-factors-title">Factors That Affect Shipping Cost</h2>
                    <div className="factors-grid">
                        <div className="factor-item">
                            <div className="factor-number">1</div>
                            <div className="factor-content">
                                <h3>Distance</h3>
                                <p>The distance between pickup and delivery locations is the primary factor. Longer distances typically cost more, but cost per mile decreases as distance increases.</p>
                            </div>
                        </div>
                        <div className="factor-item">
                            <div className="factor-number">2</div>
                            <div className="factor-content">
                                <h3>Vehicle Size & Type</h3>
                                <p>Larger vehicles like SUVs, trucks, and vans require more space and may cost more. Standard sedans are typically the most affordable to transport.</p>
                            </div>
                        </div>
                        <div className="factor-item">
                            <div className="factor-number">3</div>
                            <div className="factor-content">
                                <h3>Transport Method</h3>
                                <p>Open transport is the most cost-effective option, while enclosed transport provides extra protection at a higher price point for luxury vehicles.</p>
                            </div>
                        </div>
                        <div className="factor-item">
                            <div className="factor-number">4</div>
                            <div className="factor-content">
                                <h3>Vehicle Condition</h3>
                                <p>Inoperable vehicles require special equipment for loading and unloading, which can add to the shipping cost. Operable vehicles are less expensive to ship.</p>
                            </div>
                        </div>
                        <div className="factor-item">
                            <div className="factor-number">5</div>
                            <div className="factor-content">
                                <h3>Season & Demand</h3>
                                <p>Shipping costs can fluctuate based on seasonal demand. Summer months and peak moving seasons often see higher prices due to increased demand.</p>
                            </div>
                        </div>
                        <div className="factor-item">
                            <div className="factor-number">6</div>
                            <div className="factor-content">
                                <h3>Pickup & Delivery Location</h3>
                                <p>Urban areas with easy access typically cost less than remote locations. Door-to-door service may have different pricing than terminal-to-terminal.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cost-includes">
                    <h2 className="cost-includes-title">What's Included in Your Quote</h2>
                    <div className="includes-grid">
                        <div className="include-item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 13l4 4L19 7"/>
                            </svg>
                            <span>Door-to-door service (where accessible)</span>
                        </div>
                        <div className="include-item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 13l4 4L19 7"/>
                            </svg>
                            <span>Full insurance coverage</span>
                        </div>
                        <div className="include-item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 13l4 4L19 7"/>
                            </svg>
                            <span>Professional FMCSA licensed carrier</span>
                        </div>
                        <div className="include-item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 13l4 4L19 7"/>
                            </svg>
                            <span>24/7 customer support</span>
                        </div>
                        <div className="include-item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 13l4 4L19 7"/>
                            </svg>
                            <span>No hidden fees or surprise charges</span>
                        </div>
                        <div className="include-item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 13l4 4L19 7"/>
                            </svg>
                            <span>Transparent pricing</span>
                        </div>
                    </div>
                </div>
            </div>
            <QuoteForm form={true}/>
            <Footer/>
        </div>
    )
}

export default RequestShipmentCost

