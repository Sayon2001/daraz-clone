import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from 'react-icons/io5';
import Logo from '../assets/images/logo.png'

const NavBar = () => {
    return (
        <>
            <div className=' bg-[#F85606] h-32 w-full' id='menu1'>
                <div className='mx-40'>
                    <ul className=' h-6 flex justify-end gap-5 text-white text-xs items-center font-semibold'>
                        <li>SAVE MORE ON APP</li>
                        <li>BECOME SELLER</li>
                        <li>HELP & SUPPORT</li>
                        <li>LOGIN</li>
                        <li>SIGN UP</li>
                    </ul>
                </div>
                <nav className='flex gap-40 items-center h-[75px] mx-40 '>
                    <div className='w-[127px] h-[40px]'>
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div className='flex relative'>
                        <input className='w-[43rem] h-[2.8rem] rounded-md p-4' type="search" name="search-bar" id="search-bar" placeholder="Search in Daraz" />
                        <div className='w-[45px] h-[45px] grid place-items-center text-2xl rounded-md absolute right-12 top-0'>
                            <CiSearch className='cursor-pointer text-[#FF5D06]' />
                        </div>
                        <div className=' text-white text-4xl grid place-items-center mx-2'>
                            <IoCartOutline />
                        </div>
                    </div>
                </nav>
            </div>

        </>
    )
}

export default NavBar
