import React from 'react'
import Card from './FlashSaleCard'

const JustForYou = () => {
    const data = [{
        image: "https://img.drz.lazcdn.com/g/kf/S8e231ddd1b654223a5986ae7191553daM.jpg_400x400q80.jpg_.webp",
        title: 'OZ Naturals Vitamin C Facial Serum With Hyaluronic Acid & Vitamin E -30ml/By Baisnabi Cosmetics',
        price: 300,
        discount: '5%',
        star: 4
    }, {
        image: "https://img.drz.lazcdn.com/static/np/p/14450f357872cc1db3ca89b1a23d9aaa.jpg_400x400q80.jpg_.webp",
        title: 'LCD Writing Tab 8.5 Inch With Pen Writing Pad',
        price: 350,
        discount: '61%',
        star: 3.5
    }, {
        image: "https://img.drz.lazcdn.com/static/np/p/d0b5a4c58a4a9620e4c926bb2930115c.jpg_400x400q80.jpg_.webp",
        title: '3D Decor Crystal Ball LED Night Light',
        price: 800,
        discount: '57%'
    }, {
        image: "https://img.drz.lazcdn.com/static/np/p/09d2a80d74f95e56167e3dfea8280c21.jpg_400x400q80.jpg_.webp",
        title: '5 Pair Reusable Non-Slip Printed Stainless Steel Chopsticks',
        price: 500,
        discount: '60%'
    }, {
        image: "https://img.drz.lazcdn.com/static/np/p/ea6ee82f51ceb713756107cd277a44e5.jpg_400x400q80.jpg_.webp",
        title: 'Adjustable Ring for Men',
        price: 150,
        discount: '43%'
    }, {
        image: "https://img.drz.lazcdn.com/static/np/p/6a1dfed19938060ec983cbfa0d3841b0.jpg_400x400q80.jpg_.webp",
        title: 'Electric Blanket with Heat Controller: King, Double, SIngle',
        price: 2400,
        discount: '33%'
    }, {
        image: "https://img.drz.lazcdn.com/static/np/p/f9ba51bf729ff619d699c422d093a7c9.jpg_400x400q80.jpg_.webp",
        title: 'M10 Wireless TWS Earbuds | 2 Hour Charging Time | 15hrs Back up | Glossy Finish',
        price: 1499,
        discount: '65%'
    }, {
        image: 'https://img.drz.lazcdn.com/static/np/p/a22733f7eddfae729641d20debbe3024.png_400x400q80.png_.webp',
        title: 'Korean Winter Cute Printed Socks For Kids - 0 To 3 Yrs - 5 Pairs',
        price: 590,
        discount: '24%'
    }, {
        image: 'https://img.drz.lazcdn.com/static/np/p/12ab6c08dede54a89c2c59e1ba2884c9.jpg_400x400q80.jpg_.webp',
        title: 'Reusable Latex Hand Gloves For Kitchen',
        price: 350,
        discount: '49%'
    }, {
        image: 'https://img.drz.lazcdn.com/static/np/p/7718d09ca818e72005ce7b771b9926b2.jpg_400x400q80.jpg_.webp',
        title: '12pcs Plastic Wall Hooks',
        price: 500,
        discount: '30%'
    }, {
        image: 'https://img.drz.lazcdn.com/static/np/p/056f12bcadf7a04adac4ee566c29a1d3.jpg_400x400q80.jpg_.webp',
        title: 'Bubble Gun With 10 Holes For Children, Automatic Continuous Bubble Blower With Lights, Outdoor Toys For Boys & Girls',
        price: 1500,
        discount: '49%'
    }, {
        image: 'https://img.drz.lazcdn.com/static/np/p/c3e52194567210da9d9eae05cf37f122.jpg_400x400q80.jpg_.webp',
        title: '8 In 1 Type C To USB-C 4K HDMI Adapter USB 3.0 Multiport Cable Hub',
        price: 2849,
        discount: '44%'
    }
    ]
    return (
        <div>
            <h2 className='text-xl font-semibold'>Just For You</h2>
            <div className='grid grid-cols-6 bg-white mt-4'>
                <Card product={data} />
            </div>
            <div className='flex justify-center mt-6'>
                <button className='text-xl font-normal w-[20vw] text-[#1A9CB8] border-2 border-[#1A9CB8]'>LOAD MORE</button>
            </div>
        </div>
    )
}

export default JustForYou
