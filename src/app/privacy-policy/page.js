import React from 'react'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";

export const metadata = {
    title: "RoundX Transport | Privacy Policy",
    description: "Read the Privacy Policy of RoundX Transport, a nationwide transport company in the USA. Learn how we collect, use, and protect your information.",
    keywords: [
        "RoundX Transport",
        "Privacy Policy",
        "Nationwide Transport USA",
        "Vehicle Shipping Privacy",
        "Freight Shipping Privacy",
        "Data Protection",
        "Information Security"
    ],
    openGraph: {
        title: "RoundX Transport | Privacy Policy",
        description: "Learn how RoundX handles your information with transparency and security. Our privacy practices for nationwide transport services in the USA.",
        url: "https://roundxtransport.com/privacy-policy",
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

const PrivacyPolicy = () => {
    return (
        <div>
            <div className={'content'} style={{paddingTop: 120}}>
                <Header/>
            </div>
            <div className={'content'}>
                <div className="terms-header">
                    <h1 className="terms-title">Privacy Policy</h1>
                    <p className="terms-subtitle">Learn how RoundX Transport collects, uses, and protects your personal information with transparency and security.</p>
                    <div className="terms-meta">
                        <span className="terms-date">Last Updated: January 2025</span>
                        <span className="terms-version">Version 1.0</span>
                    </div>
                </div>

                <div className="toc-modern">
                    <h2 className="toc-title">Table of Contents</h2>
                    <nav className="toc-nav">
                        <a href="#effective-date" className="toc-link">
                            <span className="toc-number">1</span>
                            <span className="toc-text">Effective Date</span>
                        </a>
                        <a href="#info-collection" className="toc-link">
                            <span className="toc-number">2</span>
                            <span className="toc-text">Information Collection, Use, and Sharing</span>
                        </a>
                        <a href="#access-control" className="toc-link">
                            <span className="toc-number">3</span>
                            <span className="toc-text">Your Access to and Control Over Information</span>
                        </a>
                        <a href="#security" className="toc-link">
                            <span className="toc-number">4</span>
                            <span className="toc-text">Security</span>
                        </a>
                        <a href="#notification" className="toc-link">
                            <span className="toc-number">5</span>
                            <span className="toc-text">Notification of Changes</span>
                        </a>
                        <a href="#other-provisions" className="toc-link">
                            <span className="toc-number">6</span>
                            <span className="toc-text">Other Provisions as Required by Law</span>
                        </a>
                    </nav>
                </div>

                <div id="effective-date" className="terms-section">
                    <div className="terms-section-header">
                        <span className="section-number">1</span>
                        <h2 className="terms-section-title">Effective Date</h2>
                    </div>
                    <div className="terms-content">
                        <p className="terms-text">This privacy notice discloses the privacy practices for <strong>RoundX Transport</strong> (roundxtransport.com). This privacy notice applies solely to information collected by this website, except where stated otherwise. It will notify you of the following:</p>
                        <ul className="terms-list">
                            <li>What information we collect;</li>
                            <li>With whom it is shared;</li>
                            <li>How it can be corrected;</li>
                            <li>How it is secured;</li>
                            <li>How policy changes will be communicated; and</li>
                            <li>How to address concerns over misuse of personal data.</li>
                        </ul>
                    </div>
                </div>

                <div id="info-collection" className="terms-section">
                    <div className="terms-section-header">
                        <span className="section-number">2</span>
                        <h2 className="terms-section-title">Information Collection, Use, and Sharing</h2>
                    </div>
                    <div className="terms-content">
                        <p className="terms-text">We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact. We will not sell or rent this information to anyone.</p>
                        <p className="terms-text">We will use your information to respond to you regarding the reason you contacted us. We will not share your information with any third party outside of our organization, except as necessary to fulfill your request, e.g., to ship an order.</p>
                        <p className="terms-text">Your mobile phone information will not be shared with third parties/affiliates for marketing or promotional purposes.</p>
                        <p className="terms-text">Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy.</p>
                    </div>
                </div>

                <div id="access-control" className="terms-section">
                    <div className="terms-section-header">
                        <span className="section-number">3</span>
                        <h2 className="terms-section-title">Your Access to and Control Over Information</h2>
                    </div>
                    <div className="terms-content">
                        <p className="terms-text">You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address or phone number provided:</p>
                        <ul className="terms-list">
                            <li>See what data we have about you, if any.</li>
                            <li>Change/correct any data we have about you.</li>
                            <li>Have us delete any data we have about you.</li>
                            <li>Express any concern you have about our use of your data.</li>
                        </ul>
                    </div>
                </div>

                <div id="security" className="terms-section">
                    <div className="terms-section-header">
                        <span className="section-number">4</span>
                        <h2 className="terms-section-title">Security</h2>
                    </div>
                    <div className="terms-content">
                        <p className="terms-text">We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.</p>
                        <p className="terms-text">Wherever we collect sensitive information (such as credit card data), that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a closed lock icon in your browser or "https" at the beginning of the web page address.</p>
                        <p className="terms-text">While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (e.g., billing or customer service) are granted access to personally identifiable information. The computers/servers storing this information are kept in a secure environment.</p>
                    </div>
                </div>

                <div id="notification" className="terms-section">
                    <div className="terms-section-header">
                        <span className="section-number">5</span>
                        <h2 className="terms-section-title">Notification of Changes</h2>
                    </div>
                    <div className="terms-content">
                        <p className="terms-text">Whenever material changes are made to the privacy notice, we will notify consumers through updates on our website or via email.</p>
                    </div>
                </div>

                <div id="other-provisions" className="terms-section">
                    <div className="terms-section-header">
                        <span className="section-number">6</span>
                        <h2 className="terms-section-title">Other Provisions as Required by Law</h2>
                    </div>
                    <div className="terms-content">
                        <p className="terms-text">Additional provisions or practices may be required by law, international treaties, or industry practices. Special attention should be given to the California Online Privacy Protection Act (CalOPPA), which may require disclosures for "Do Not Track" signals.</p>
                        <p className="terms-text">If you feel that we are not abiding by this privacy policy, you should contact us immediately via:</p>
                        <ul className="terms-list">
                            <li>Phone: <a href="tel:+18182338475" className="terms-link">(818) 233-8475</a></li>
                            <li>Email: <a href="mailto:operations@roundxtransport.com" className="terms-link">operations@roundxtransport.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <QuoteForm form={true}/>
            <Footer/>
        </div>
    )
}

export default PrivacyPolicy
