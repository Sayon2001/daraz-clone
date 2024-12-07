import React from 'react'
import AppStoreDownload from '../assets/images/availableonappstore.png'
import PlayStoreDownload from '../assets/images/availableonplaystore.png'
import HuaweiStoreDownload from '../assets/images/availableonhuaweistore.png'
import DarazFooterImg from '../assets/images/darazfooterimg.png'
import '../App.css'
import CashOnDelivery from '../assets/images/codlogo.png'
import Visa from '../assets/images/visalogo.png'
import MasterCard from '../assets/images/mastercardlogo.png'
import Esewa from '../assets/images/esewa.png'
import Imepay from '../assets/images/imepay.png'
import VerifiedByLogo from '../assets/images/dsslogo.png'

const Footer = () => {
    return (
        <>
            <div className='flex gap-36 footer mx-40 mt-14'>
                <div className='text-[#0F136D]'>
                    <h3 className='text-lg mb-2 font-medium'>Customer Care</h3>
                    <ul className='text-xs leading-2 font-medium'>
                        <li>Help Center</li>
                        <li>How to Buy</li>
                        <li>Returns & Refunds</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className='text-[#0F136D]'>
                    <h3 className='text-lg mb-2 font-medium'>Daraz</h3>
                    <ul className='text-xs leading-2 font-medium'>
                        <li>About Daraz</li>
                        <li>Careers</li>
                        <li>Daraz Blog</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Digital Payments</li>
                        <li>Daraz Customer University</li>
                        <li>Daraz Affiliate Program</li>
                        <li>Review & Win</li>
                        <li>Meet the Winners</li>
                        <li>Daraz University</li>
                        <li>Sell on Daraz</li>
                        <li>Code of Conduct</li>
                    </ul>

                </div>
                <div className='flex gap-6' id='footer'>
                    <div className='flex gap-2'>
                        <div className='w-[3rem]'>
                            <img src={DarazFooterImg} alt="" />
                        </div>
                        <div>
                            <p className='text-[1rem] text-[#F36F37] font-medium'>Happy Shopping</p>
                            <p className='text-sm text-[#0F136D] font-medium'>Download App</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='grid grid-cols-2 gap-2'>
                            <img src={AppStoreDownload} alt="" />
                            <img src={PlayStoreDownload} alt="" />
                        </div>
                        <div>
                            <img src={HuaweiStoreDownload} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white h-[8rem] mt-10'>
                <div className='mx-40 h-full'>
                    <div className='flex h-full items-center gap-40 footerlogo'>

                        <div>
                            <p>Payment Methods</p>
                            <div className='flex gap-3'>
                                <img src={CashOnDelivery} alt="" />
                                <img src={Visa} alt="" />
                                <img src={MasterCard} alt="" />
                                <img src={Esewa} alt="" />
                                <img src={Imepay} alt="" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>Verified by</p>
                            </div>
                            <div>
                                <img src={VerifiedByLogo} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer