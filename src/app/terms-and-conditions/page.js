import React from 'react'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";

export const metadata = {
    title: "RoundX Transport | Terms and Conditions",
    description: "Read the Terms and Conditions of RoundX Transport. Learn about our policies, customer obligations, pricing, payments, and liability for vehicle shipping services across the USA.",
    keywords: [
        "RoundX Transport",
        "Terms and Conditions",
        "Vehicle Shipping Terms",
        "Freight Shipping Policies",
        "USA Vehicle Transport",
        "Shipping Liability",
        "Cancellation Policy"
    ],
    openGraph: {
        title: "RoundX Transport | Terms and Conditions",
        description: "View the detailed Terms and Conditions for RoundX Transport, covering vehicle shipping, pricing, payments, liability, and cancellation policies.",
        url: "https://roundxtransport.com/terms-and-conditions",
        siteName: "RoundX Transport",
        images: [
            {
                url: "https://roundxtransport.com/og-image-terms.png",
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

const TermsAndConditions = () => {
    return (
        <div>
            <div className={'content'} style={{paddingTop: 120}}>
                <Header/>
            </div>
            <div className={'content'}>
                <div className="terms-header">
                    <h1 className="terms-title">Terms and Conditions</h1>
                    <p className="terms-subtitle">Please read these terms and conditions carefully before using our vehicle shipping services.</p>
                    <div className="terms-meta">
                        <span className="terms-date">Last Updated: January 2025</span>
                        <span className="terms-version">Version 1.0</span>
                    </div>
                </div>

                <div className="toc-modern">
                    <h2 className="toc-title">Table of Contents</h2>
                    <nav className="toc-nav">
                        <a href="#general-terms" className="toc-link">
                            <span className="toc-number">1</span>
                            <span className="toc-text">General Terms and Precautionary Guidelines</span>
                        </a>
                        <a href="#communication" className="toc-link">
                            <span className="toc-number">2</span>
                            <span className="toc-text">Communication</span>
                        </a>
                        <a href="#price" className="toc-link">
                            <span className="toc-number">3</span>
                            <span className="toc-text">Price and Extra Charges</span>
                        </a>
                        <a href="#time-frame" className="toc-link">
                            <span className="toc-number">4</span>
                            <span className="toc-text">Time Frame</span>
                        </a>
                        <a href="#payment" className="toc-link">
                            <span className="toc-number">5</span>
                            <span className="toc-text">Payment</span>
                        </a>
                        <a href="#inspection" className="toc-link">
                            <span className="toc-number">6</span>
                            <span className="toc-text">Pre/Post Inspections</span>
                        </a>
                        <a href="#liability" className="toc-link">
                            <span className="toc-number">7</span>
                            <span className="toc-text">Liability</span>
                        </a>
                        <a href="#cancellation" className="toc-link">
                            <span className="toc-number">8</span>
                            <span className="toc-text">Cancellation Policy</span>
                        </a>
                    </nav>
                </div>

                <div id="general-terms" className="terms-section">
                    <div className="terms-section-header">
                        <span className="section-number">1</span>
                        <h2 className="terms-section-title">General Terms and Precautionary Guidelines</h2>
                    </div>
                    <div className="terms-content">
                        <p className="terms-text">1.1 The customer(s) agrees to and understands that <strong>RoundX Transport</strong> will broker the shipment of the Vehicle(s)/Unit(s), the relevant information of which is provided by the customer to a licensed and insured Carrier(s) within the US. In simpler terms, when a customer authorizes RoundX Transport to broker their shipment to a carrier, they have granted permission to search for a suitable carrier to transport their Vehicle(s)/Unit(s) for the agreed-upon fee. However, this authorization does not imply that RoundX Transport is contractually liable for the availability of drivers, potential delays, or any unforeseen mishaps that may occur during the shipping process.</p>
                        <p className="terms-text">1.2 The customer(s) understand that RoundX Transport does not have tracking devices to provide live or real-time updates or ETAs. Instead, updates are obtained manually from the Carrier and relayed to the customer. Furthermore, delays may occur due to bad weather conditions, road traffic, blockades, mechanical issues, or other unforeseen circumstances.</p>
                        <p className="terms-text">1.3 The driver can only collect and/or deliver your shipped vehicle(s)/unit(s) door-to-door if semi-trucks have access at both the collection and delivery locations. If semi-trucks do not have access at either end, you must arrange to meet the driver at a nearby area (e.g., Commercial/public parking lot, rest areas, wide public streets, or service station) that is more accessible and does not risk blocking traffic or violating DOT Trucking and Motorcoaches laws and regulations.</p>
                        <p className="terms-text">1.4 In the event that the shipped vehicle(s)/unit(s) are inoperable or stationary, RoundX Transport will not provide or compensate for any towing services required to move the shipped vehicle(s)/unit(s) from or to an accessible area. The customer and/or any of their associates or representatives are responsible for ensuring that the shipped vehicle(s)/unit(s) are positioned in a location accessible for loading and unloading by the carrier. Any additional costs or arrangements required to facilitate this will be the customer's sole responsibility.</p>
                        <p className="terms-text">1.5 The customer understands and agrees that RoundX Transport may use pictures of the shipped vehicle(s)/unit(s) for showcasing purposes on its official website, social media pages, and other platforms. RoundX Transport commits to ensuring that these images will not reveal the customer's identity, location, or any other information that could lead to the identification of the customer. Furthermore, these images will not be used in any activity deemed foul, harmful, or violating applicable cyber laws and regulations.</p>
                        <p className="terms-text">1.6 If the Customer and/or any of their associates or representatives are unable or unwilling to accept delivery of the shipped vehicle(s)/unit(s) for any reason at the agreed-upon time and location, the shipped vehicle(s)/unit(s) may be placed in a storage facility at the customer's expense. The customer understands and agrees to pay all costs incurred by the storage facility, including but not limited to storage fees, handling charges, and any other associated expenses.</p>
                        <p className="terms-text">1.7 RoundX Transport verifies the carrier's cargo and liability insurance through the Federal Motor Carrier Safety Administration (FMCSA).</p>
                    </div>
                </div>

                <div id="communication" className="terms-section">
                    <div className="terms-section-header">
                        <span className="section-number">2</span>
                        <h2 className="terms-section-title">Communication</h2>
                    </div>
                    <div className="terms-content">
                        <p className="terms-text">2.1 Operating hours are Monday through Friday, 09:00 AM – 10:00 PM EST/EDT, and Saturday and Sunday, 10:00 AM – 10:00 PM EST/EDT. Our lines of communication remain open during these hours, and we can be reached by phone, email, SMS, and through our website Chat tool.</p>
                        <p className="terms-text">2.2 The customer(s) agree to and understand that they will be contacted via phone, email, and SMS for notifications, including shipment updates, driver assignment, collection, delivery, and any missing information or documentation relevant to the shipment.</p>
                        <p className="terms-text">2.3 The customer(s) agree that their name, contact information, address, and other relevant information may be shared with the carrier or their representative(s) on a need-to-know basis to facilitate effective and efficient transportation of their vehicle(s)/unit(s).</p>
                        <p className="terms-text">2.4 All communications regarding dates, times, and estimated times of arrival (ETAs) are to be considered estimates only. These details are subject to change based on circumstances beyond the carrier's control, such as traffic, weather conditions, or other unforeseen factors. Agents will update the customer on any schedule changes promptly.</p>
                    </div>
                </div>

                <div id="price" className="terms-section">
                    <div className="terms-section-header">
                        <span className="section-number">3</span>
                        <h2 className="terms-section-title">Price and Extra Charges</h2>
                    </div>
                    <div className="terms-content">
                        <p className="terms-text">3.1 Quotes or the price of bookings are valid for 5 calendar days and intended for shipments within 10 calendar days from the date of the quote or booking confirmation. Should the shipping date exceed these periods, the price may change according to market demand.</p>
                        <p className="terms-text">3.2 Quotes/prices include all costs associated with the transportation of the vehicle(s)/unit(s), including door-to-door service, GST, tolls, and insurance.</p>
                        <p className="terms-text">3.3 The Carrier may demand a "Dry Run Fee" of up to $200 if notice was given to the Customer but loading/unloading could not occur at the agreed date and time.</p>
                        <p className="terms-text">3.4 The Carrier may demand a "Detention Fee" not exceeding $75 per hour if the Customer provides faulty information or does not show up at the agreed-upon time and location.</p>
                        <p className="terms-text">3.5 RoundX Transport is not responsible or liable for any direct or indirect losses due to shipment delays or market price changes.</p>
                        <p className="terms-text">3.6 Shipments to ports, terminals, or specialized areas requiring a TWIC card may result in potential changes to the original price.</p>
                    </div>
                </div>

                <div id="time-frame" className="terms-section">
                    <div className="terms-section-header">
                        <span className="section-number">4</span>
                        <h2 className="terms-section-title">Time Frame</h2>
                    </div>
                    <div className="terms-content">
                        <p className="terms-text">4.1 Shipments of Sedans, Hatchbacks, Convertibles, Minibuses, Minivans, Trucks, Vans, SUVs, Sport, Coupés, Luxury, Vintage, Electric, Hybrid, Muscle, Compact, and Station Wagons are estimated to be assigned a Carrier within 1–5 business days from the first available pickup date.</p>
                        <p className="terms-text">4.2 Shipments of Heavy Equipment, towing services, Campers, Motor Homes, Mini-Trucks, Microcars, Off-Road Vehicles, RVs, ATVs, UTVs, PTVs, LSVs, Motorcycles, and Buggies are estimated within 1–7 business days.</p>
                        <p className="terms-text">4.3 Expedited Shipment options with guaranteed pick-up dates are available by contacting Customer Care.</p>
                        <p className="terms-text">4.4 Shipments requiring a TWIC card may experience delays outside the estimated time frame. RoundX Transport is not liable for these delays.</p>
                    </div>
                </div>

                <div id="payment" className="terms-section">
                    <div className="terms-section-header">
                        <span className="section-number">5</span>
                        <h2 className="terms-section-title">Payment</h2>
                    </div>
                    <div className="terms-content">
                        <p className="terms-text">5.1 All payments must be settled in full before vehicle(s)/unit(s) pickup.</p>
                        <p className="terms-text">5.2 Payments through Credit Card or PayPal incur a 4% processor fee.</p>
                        <p className="terms-text">5.3 Credit/Debit card payments require verification with matching driver license information.</p>
                        <p className="terms-text">5.4 Payments via Corporate, Personal, or Cashiers Checks are settled after the check clears.</p>
                        <p className="terms-text">5.5 Remaining balances can be paid in cash or certified funds at delivery.</p>
                        <p className="terms-text">5.6 No charge-backs or attempts to reverse payments can be claimed from RoundX Transport.</p>
                        <p className="terms-text">5.7 Claims against the carrier do not allow withholding payment for transportation services.</p>
                    </div>
                </div>

                <div id="inspection" className="terms-section">
                    <div className="terms-section-header">
                        <span className="section-number">6</span>
                        <h2 className="terms-section-title">Pre/Post Inspections</h2>
                    </div>
                    <div className="terms-content">
                        <p className="terms-text">6.1 Customers must ensure vehicle(s)/unit(s) are ready and available, with keys and proper documentation.</p>
                        <p className="terms-text">6.2 Loose parts must be removed or secured. Customers are responsible for damages caused by loose parts.</p>
                        <p className="terms-text">6.3 Collection and delivery inspections must be conducted and noted on the Bill of Lading (BOL).</p>
                        <p className="terms-text">6.4 Up to 100 lbs per vehicle of personal items are allowed, placed safely below window level.</p>
                        <p className="terms-text">6.5 Carriers may refuse or charge extra for items above 100 lbs at $1 per extra pound.</p>
                        <p className="terms-text">6.6 Customers must declare all extra items during booking. Failure may result in cancellation, delays, or extra charges.</p>
                        <p className="terms-text">6.7 Carrier responsibility ends once shipment is delivered and BOL is signed.</p>
                    </div>
                </div>

                <div id="liability" className="terms-section">
                    <div className="terms-section-header">
                        <span className="section-number">7</span>
                        <h2 className="terms-section-title">Liability</h2>
                    </div>
                    <div className="terms-content">
                        <p className="terms-text">7.1 RoundX Transport is not responsible for loss or damage of personal items included in shipments.</p>
                        <p className="terms-text">7.2 RoundX Transport is not responsible for agreements made directly between customer and carrier.</p>
                        <p className="terms-text">7.3 Carrier is not liable for mechanical damage during loading/unloading or transit.</p>
                        <p className="terms-text">7.4 Carrier is liable for documented external body damages noted on BOL.</p>
                        <p className="terms-text">7.5 Customers must notify RoundX Transport within 24 hours of delivery for damage claims.</p>
                        <p className="terms-text">7.6 If customers were not present during delivery, RoundX Transport and carrier are not liable for reported damages.</p>
                        <p className="terms-text">7.7 RoundX Transport holds no insurance obligations; all liability lies with the carrier and its insurance provider.</p>
                        <p className="terms-text">7.8 RoundX Transport will forward damage reports to the carrier and may mediate at discretion.</p>
                        <p className="terms-text">7.9 RoundX Transport, carrier, and insurance are not liable for damages caused by natural disasters.</p>
                        <p className="terms-text">7.10 RoundX Transport acts as a neutral third party and may not resolve disputes between customer and carrier.</p>
                        <p className="terms-text">7.11 RoundX Transport cannot be held liable if carrier credentials are later found to be invalid or outdated.</p>
                    </div>
                </div>

                <div id="cancellation" className="terms-section">
                    <div className="terms-section-header">
                        <span className="section-number">8</span>
                        <h2 className="terms-section-title">Cancellation Policy</h2>
                    </div>
                    <div className="terms-content">
                        <p className="terms-text">8.1 If shipment is not assigned a driver within the agreed time, customers can opt out without penalties and receive a full refund.</p>
                        <p className="terms-text">8.2 Opt-out requests must be submitted in writing via email or SMS; verbal requests are not valid.</p>
                        <p className="terms-text">8.3 If a carrier is assigned, cancellation may result in additional charges deducted from the deposit.</p>
                        <p className="terms-text">8.4 Refunds will be processed within 2 business days of receiving written notification.</p>
                        <p className="terms-text">8.5 RoundX Transport reserves the right to refuse service or cancel the agreement legally.</p>
                        <p className="terms-text">8.6 For shipments outside mainland USA, marine carrier assignment may result in additional charges if opted out after assignment.</p>
                    </div>
                </div>
            </div>
            <QuoteForm form={true}/>
            <Footer/>
        </div>
    )
}

export default TermsAndConditions
