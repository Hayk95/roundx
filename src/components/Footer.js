import React from 'react';
import Link from "next/link";



const Footer =()=> {
    return (
        <footer className='footer'>
            <div className={'content'}>
                <div className={'footer-row'}>

                    <ul >
                        <li>
                            <Link href={'/'}>
                                <div className={'footer-logo'}>
                                    <img src={'/logo.png'} alt="logo"/>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href='/terms-and-conditions'>
                                Terms & conditions
                            </Link>
                        </li>
                        <li>
                            <Link href='/privacy-policy'>
                                Privacy policy
                            </Link>
                        </li>
                        <li>
                            <Link href='/request-shipment-cost'>
                                Request Shipment Cost
                            </Link>
                        </li>
                        <li>
                            <Link href='/cookie-preferences'>
                                Cookie preferences
                            </Link>
                        </li>
                    </ul>
                    {/*<div className={'footer-item'}>*/}
                    {/*    <div className={'footer-logo'}>*/}
                    {/*        <img src={Logo}/>*/}
                    {/*    </div>*/}

                    {/*</div>*/}
                    {/*<div className={'footer-item'}>*/}
                    {/*    <ul>*/}
                    {/*        <li>Cross country shipping</li>*/}
                    {/*        <li>Door-to-door shipping</li>*/}
                    {/*        <li>Enclosed auto transport</li>*/}
                    {/*        <li>Expedited car shipping</li>*/}
                    {/*        <li>Motorcycle shipping</li>*/}
                    {/*        <li>Open auto transport</li>*/}
                    {/*    </ul>*/}

                    {/*</div>*/}
                    {/*<div className={'footer-item'}>*/}
                    {/*    <ul>*/}
                    {/*        <li>Terms & conditions</li>*/}
                    {/*        <li>Privacy policy</li>*/}
                    {/*        <li>Copyright</li>*/}
                    {/*        <li>Terms of use</li>*/}
                    {/*        <li>Cookie preferences</li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                    {/*<div className={'footer-item'}>*/}
                    {/*    <div className={'fmsca-item'}>*/}
                    {/*        <div className={'fmcsaIcon'}>*/}
                    {/*            <img src={fmscaIcon} alt={'fmsca Icon'}/>*/}
                    {/*        </div>*/}
                    {/*        <div className={'fmsca-info'}>*/}
                    {/*            <p>MC: 1698663</p>*/}
                    {/*            <p>DOT: 4346042</p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className={'footer-social'}>*/}
                    {/*        <div className={'social-item'}>*/}
                    {/*            <img src={xIcon} alt={'x Icon'}/>*/}
                    {/*        </div>*/}
                    {/*        <div className={'social-item'}>*/}
                    {/*            <img src={linkdinIcon} alt={'linkdin Icon'}/>*/}
                    {/*        </div>*/}
                    {/*        <div className={'social-item'}>*/}
                    {/*            <img src={instagramIcon} alt={'instagram Icon'}/>*/}
                    {/*        </div>*/}
                    {/*        <div className={'social-item'}>*/}
                    {/*            <img src={fbIcon} alt={'fb Icon'}/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*</div>*/}

                </div>
            </div>
            <div className={'footer-bottom'}>
                <p>© ROUNDX TRANSPORT 2026 ALL RIGHTS RESERVED</p>
            </div>
        </footer>

    );
}
export default Footer
