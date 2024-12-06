import React from 'react'
import Logo from '../assets/images/Daraz-Emblem.png'
import BgGrad from '../assets/images/imgBggrad.jpg'
import Truck from '../assets/images/truck.png'
import LtdTime from '../assets/images/limitedtime.png'
import DownloadQr from '../assets/images/downloadQr.jpg'
import AppStore from '../assets/images/appstore.png'
import GooglePlay from '../assets/images/googleplay.png'
import { FaStar } from "react-icons/fa";

const DownloadCard = () => {
    return (
        <>
            <div style={{ background: "linear-gradient(90deg,#fff,hsla(0,0%,100%,0)),linear-gradient(179.27deg,#ffedd6 .83%,#ffc3e3 46.78%,#fff 99.57%),linear-gradient(0deg,#fff,#fff)" }} className='w-[16rem] h-[21.40rem] flex flex-col items-center'>
                <div className='flex items-center my-2'>
                    <img src={Logo} className='w-[4rem] h-[2.25rem] mr-[-8px]' alt="" />
                    <h3 className='text-[1rem] font-[600] text-[#6C1D00] mr-2'>Download the App</h3>
                </div>
                <div className="w-[12rem]  relative">
                    <img src={BgGrad} alt="" />
                    <div className='flex justify-center absolute top-0  w-full'>
                        <div className='flex flex-col  w-full'>
                            <div className='text-xs flex items-center text-white mt-1 ml-4'>
                                <FaStar />
                                <p>4.8 Rated</p>
                            </div>
                            <div className='flex flex-col gap-2 justify-center'>
                                <div className='flex justify-center  mt-2 mb-2 text-sm text-white font-semibold'>
                                    <h3>Download App</h3>
                                </div>
                                <div className='flex gap-4 items-center justify-center '>
                                    <img src={Truck} className='w-[2.5rem] h-[2.5rem]' alt="" />
                                    <p className='text-sm font-semibold text-white leading-4'>Free<br />Delivery</p>
                                </div>
                                <div className='flex gap-4 items-center justify-center'>
                                    <img src={LtdTime} className='w-[2.5rem] h-[2.5rem]' alt="" />
                                    <p className='text-sm font-semibold text-white leading-4'>Limited<br />Time</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex justify-center gap-3 my-2'>
                    <div className='w-[5.5rem]'>
                        <img src={DownloadQr} alt="" />
                    </div>
                    <div className='flex flex-col gap-2 justify-center w-[5.5rem]'>
                        <img src={AppStore} alt="" />
                        <img src={GooglePlay} alt="" />
                    </div>

                </div>
                <div className='flex justify-start w-full pl-5 text-[0.7rem] text-bold text-black'>
                    <p>Download the App Now!</p>
                </div>
            </div>
        </>
    )
}

export default DownloadCard
