import React from 'react'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Cookie Preferences | RoundX Transport",
    description: "Manage your cookie preferences for RoundX Transport. Control how we use cookies to enhance your experience on our vehicle shipping website.",
    keywords: [
        "RoundX Transport",
        "Cookie Preferences",
        "Cookie Policy",
        "Privacy Settings",
        "Website Cookies",
        "Data Privacy"
    ],
    openGraph: {
        title: "Cookie Preferences | RoundX Transport",
        description: "Manage your cookie preferences and control how we use cookies to improve your experience on our vehicle shipping website.",
        url: "https://roundxtransport.com/cookie-preferences",
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

const CookiePreferences = () => {
    return (
        <div>
            <div className={'content'} style={{paddingTop: 120}}>
                <Header/>
            </div>
            <div className={'content'}>
                <div className="terms-header">
                    <h1 className="terms-title">Cookie Preferences</h1>
                    <p className="terms-subtitle">Manage your cookie preferences and control how we use cookies to enhance your experience on our website.</p>
                    <div className="terms-meta">
                        <span className="terms-date">Last Updated: January 2025</span>
                        <span className="terms-version">Version 1.0</span>
                    </div>
                </div>

                <div className="toc-modern">
                    <h2 className="toc-title">Table of Contents</h2>
                    <nav className="toc-nav">
                        <a href="#what-are-cookies" className="toc-link">
                            <span className="toc-number">1</span>
                            <span className="toc-text">What Are Cookies?</span>
                        </a>
                        <a href="#cookie-types" className="toc-link">
                            <span className="toc-number">2</span>
                            <span className="toc-text">Types of Cookies We Use</span>
                        </a>
                        <a href="#cookie-preferences" className="toc-link">
                            <span className="toc-number">3</span>
                            <span className="toc-text">Manage Your Cookie Preferences</span>
                        </a>
                        <a href="#third-party" className="toc-link">
                            <span className="toc-number">4</span>
                            <span className="toc-text">Third-Party Cookies</span>
                        </a>
                        <a href="#cookie-management" className="toc-link">
                            <span className="toc-number">5</span>
                            <span className="toc-text">How to Manage Cookies</span>
                        </a>
                        <a href="#updates" className="toc-link">
                            <span className="toc-number">6</span>
                            <span className="toc-text">Updates to This Policy</span>
                        </a>
                    </nav>
                </div>

                <div id="what-are-cookies" className="terms-section">
                    <div className="terms-section-header">
                        <span className="section-number">1</span>
                        <h2 className="terms-section-title">What Are Cookies?</h2>
                    </div>
                    <div className="terms-content">
                        <p className="terms-text">Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.</p>
                        <p className="terms-text">Cookies help us understand how you interact with our website, remember your preferences, and improve your overall experience. They can be "session cookies" (temporary and deleted when you close your browser) or "persistent cookies" (remain on your device until they expire or are deleted).</p>
                    </div>
                </div>

                <div id="cookie-types" className="terms-section">
                    <div className="terms-section-header">
                        <span className="section-number">2</span>
                        <h2 className="terms-section-title">Types of Cookies We Use</h2>
                    </div>
                    <div className="terms-content">
                        <p className="terms-text">We use different types of cookies on our website:</p>
                        <ul className="terms-list">
                            <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of these cookies.</li>
                            <li><strong>Performance Cookies:</strong> These cookies collect information about how visitors use our website, such as which pages are visited most often. This helps us improve the website's performance and user experience.</li>
                            <li><strong>Functionality Cookies:</strong> These cookies allow the website to remember choices you make (such as your username, language, or region) and provide enhanced, personalized features.</li>
                            <li><strong>Targeting/Advertising Cookies:</strong> These cookies are used to deliver advertisements that are relevant to you and your interests. They also help limit the number of times you see an advertisement.</li>
                        </ul>
                    </div>
                </div>

                <div id="cookie-preferences" className="terms-section">
                    <div className="terms-section-header">
                        <span className="section-number">3</span>
                        <h2 className="terms-section-title">Manage Your Cookie Preferences</h2>
                    </div>
                    <div className="terms-content">
                        <p className="terms-text">You can control and manage cookies in various ways. Please note that removing or blocking cookies may impact your user experience and parts of our website may no longer be fully accessible.</p>
                        
                        <div className="cookie-controls">
                            <div className="cookie-control-item">
                                <div className="cookie-control-header">
                                    <h3>Essential Cookies</h3>
                                    <span className="cookie-status required">Required</span>
                                </div>
                                <p className="cookie-description">These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you such as setting your privacy preferences, logging in, or filling in forms.</p>
                            </div>

                            <div className="cookie-control-item">
                                <div className="cookie-control-header">
                                    <h3>Performance Cookies</h3>
                                    <label className="cookie-toggle">
                                        <input type="checkbox" defaultChecked />
                                        <span className="cookie-toggle-slider"></span>
                                    </label>
                                </div>
                                <p className="cookie-description">These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are most and least popular.</p>
                            </div>

                            <div className="cookie-control-item">
                                <div className="cookie-control-header">
                                    <h3>Functionality Cookies</h3>
                                    <label className="cookie-toggle">
                                        <input type="checkbox" defaultChecked />
                                        <span className="cookie-toggle-slider"></span>
                                    </label>
                                </div>
                                <p className="cookie-description">These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.</p>
                            </div>

                            <div className="cookie-control-item">
                                <div className="cookie-control-header">
                                    <h3>Targeting/Advertising Cookies</h3>
                                    <label className="cookie-toggle">
                                        <input type="checkbox" />
                                        <span className="cookie-toggle-slider"></span>
                                    </label>
                                </div>
                                <p className="cookie-description">These cookies may be set through our site by our advertising partners. They may be used to build a profile of your interests and show you relevant adverts on other sites.</p>
                            </div>
                        </div>

                        <div className="cookie-actions">
                            <button className="cookie-save-btn">Save Preferences</button>
                            <button className="cookie-accept-all-btn">Accept All Cookies</button>
                            <button className="cookie-reject-all-btn">Reject All</button>
                        </div>
                    </div>
                </div>

                <div id="third-party" className="terms-section">
                    <div className="terms-section-header">
                        <span className="section-number">4</span>
                        <h2 className="terms-section-title">Third-Party Cookies</h2>
                    </div>
                    <div className="terms-content">
                        <p className="terms-text">In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website, deliver advertisements on and through the website, and so on.</p>
                        <p className="terms-text">These third-party cookies are used to understand how visitors interact with our website and may be used to show you relevant advertisements on other websites. We do not control these third-party cookies, and you should check the third party's website for more information about how they use cookies.</p>
                    </div>
                </div>

                <div id="cookie-management" className="terms-section">
                    <div className="terms-section-header">
                        <span className="section-number">5</span>
                        <h2 className="terms-section-title">How to Manage Cookies</h2>
                    </div>
                    <div className="terms-content">
                        <p className="terms-text">Most web browsers allow you to control cookies through their settings preferences. However, limiting cookies may impact your ability to use our website. Here's how to manage cookies in popular browsers:</p>
                        <ul className="terms-list">
                            <li><strong>Google Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
                            <li><strong>Mozilla Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                            <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                            <li><strong>Microsoft Edge:</strong> Settings → Privacy, search, and services → Cookies and site permissions</li>
                        </ul>
                        <p className="terms-text">You can also visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="terms-link">www.allaboutcookies.org</a> for more information about cookies and how to manage them.</p>
                    </div>
                </div>

                <div id="updates" className="terms-section">
                    <div className="terms-section-header">
                        <span className="section-number">6</span>
                        <h2 className="terms-section-title">Updates to This Policy</h2>
                    </div>
                    <div className="terms-content">
                        <p className="terms-text">We may update this Cookie Preferences page from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Cookie Preferences page on this page and updating the "Last Updated" date.</p>
                        <p className="terms-text">If you have any questions about our use of cookies or this Cookie Preferences page, please contact us:</p>
                        <ul className="terms-list">
                            <li>Phone: <a href="tel:+18182338475" className="terms-link">(818) 233-8475</a></li>
                            <li>Email: <a href="mailto:operations@roundxtransport.com" className="terms-link">operations@roundxtransport.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default CookiePreferences

