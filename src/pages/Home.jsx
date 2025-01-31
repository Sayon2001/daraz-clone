import React, { useEffect } from 'react'
import SimpleSlider from '../components/SimpleSlider'
import DownloadCard from '../components/DownloadCard'
import FlashSale from '../components/FlashSale'
import Categories from '../components/Categories'
import JustForYou from '../components/JustForYou'
import Footer from '../components/Footer'

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <>

            <div className='mx-40 w-[76rem] h-[22rem] flex gap-2'>
                <SimpleSlider />
                <DownloadCard />
            </div>
            <div className='mx-40'>
                <FlashSale />
            </div>
            <div className="mx-40 mt-6">
                <Categories />
            </div>
            <div className="mx-40 mt-6">
                <JustForYou />
            </div>

        </>
    )
}

export default Home
