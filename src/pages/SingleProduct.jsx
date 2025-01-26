import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import p1 from '../assets/images/p1.jpg'
import p2 from '../assets/images/p2.jpg'
import p3 from '../assets/images/p3.jpg'
import p4 from '../assets/images/p4.jpg'
import p5 from '../assets/images/p5.jpg'
import p6 from '../assets/images/p6.jpg'
import { FaRegStar, FaStar } from "react-icons/fa";
import { CiCircleInfo, CiLocationOn, CiMobile1 } from "react-icons/ci";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { TbNumber14Small } from "react-icons/tb";
import { IoBanOutline } from "react-icons/io5";
import DownloadQr from '../assets/images/downloadQr.jpg'
import DarazLogo from '../assets/images/darazfooterimg.png'





const SingleProduct = () => {



    const { id } = useParams();
    const [count, setCount] = useState(1);
    const [myData, setMyData] = useState([])
    const [image, setImage] = useState('');

    const data = [
        {
            id: 1,
            title: 'Winter Stockings',
            image: [p1, "https://imgs.search.brave.com/9QUnbK3_u5yhgfZvU2Ubbo_4xhy2bqazxan6PeUBpSM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzhlLzNj/LzBhLzhlM2MwYWUz/MWI4OTk4ODljMGUx/NjUyNzM1OGUyMjEx/LmpwZw", "https://imgs.search.brave.com/D7c2ZeOUdyOHIaPt_8W4dP1QYRLm1bB4GaXufNbzLFI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzEwL2Vj/L2JjLzEwZWNiY2Nj/ZDIyOWJiZTAxOTI4/ZDQzZDNkMzlmZGEw/LmpwZw"],
            price: '1000',
            discount: '10%',
        },
        {
            id: 2,
            title: 'Heel Protector',
            image: [p2],
            price: '1500',
            discount: '5%',
        },
        {
            id: 3,
            title: 'Pei Mei Skincare Vitamin C Serum',
            image: [p3],
            price: '1500',
            discount: '15%',
        },
        {
            id: 4,
            title: 'HoneyComb Stainless Steel Knife Net',
            image: [p4],
            price: '2000',
            discount: '12%',
        },
        {
            id: 5,
            title: 'Premium Kojic Acid Lightining Soap',
            image: [p5],
            price: '500',
            discount: '15%',
        },
        {
            id: 6,
            title: '12 Packets Millet Biscuits',
            image: [p6],
            price: '800',
            discount: '8%',
        }, {
            id: 7,
            image: ["https://img.drz.lazcdn.com/g/kf/S8e231ddd1b654223a5986ae7191553daM.jpg_400x400q80.jpg_.webp"],
            title: 'OZ Naturals Vitamin C Facial Serum With Hyaluronic Acid & Vitamin E -30ml/By Baisnabi Cosmetics',
            price: 300,
            discount: '5%',
            star: 4
        }, {
            id: 8,
            image: ["https://img.drz.lazcdn.com/static/np/p/14450f357872cc1db3ca89b1a23d9aaa.jpg_400x400q80.jpg_.webp"],
            title: 'LCD Writing Tab 8.5 Inch With Pen Writing Pad',
            price: 350,
            discount: '61%',
            star: 3
        }, {
            id: 9,
            image: ["https://img.drz.lazcdn.com/static/np/p/d0b5a4c58a4a9620e4c926bb2930115c.jpg_400x400q80.jpg_.webp"],
            title: '3D Decor Crystal Ball LED Night Light',
            price: 800,
            discount: '57%',
            star: 4,
        }, {
            id: 10,
            image: ["https://img.drz.lazcdn.com/static/np/p/09d2a80d74f95e56167e3dfea8280c21.jpg_400x400q80.jpg_.webp"],
            title: '5 Pair Reusable Non-Slip Printed Stainless Steel Chopsticks',
            price: 500,
            discount: '60%',
            star: 5
        }, {
            id: 11,
            image: ["https://img.drz.lazcdn.com/static/np/p/ea6ee82f51ceb713756107cd277a44e5.jpg_400x400q80.jpg_.webp"],
            title: 'Adjustable Ring for Men',
            price: 150,
            discount: '43%',
            star: 4
        }, {
            id: 12,
            image: ["https://img.drz.lazcdn.com/static/np/p/6a1dfed19938060ec983cbfa0d3841b0.jpg_400x400q80.jpg_.webp"],
            title: 'Electric Blanket with Heat Controller: King, Double, SIngle',
            price: 2400,
            discount: '33%',
            star: 5
        }, {
            id: 13,
            image: ["https://img.drz.lazcdn.com/static/np/p/f9ba51bf729ff619d699c422d093a7c9.jpg_400x400q80.jpg_.webp"],
            title: 'M10 Wireless TWS Earbuds | 2 Hour Charging Time | 15hrs Back up | Glossy Finish',
            price: 1499,
            discount: '65%',
            star: 4
        }, {
            id: 14,
            image: ['https://img.drz.lazcdn.com/static/np/p/a22733f7eddfae729641d20debbe3024.png_400x400q80.png_.webp'],
            title: 'Korean Winter Cute Printed Socks For Kids - 0 To 3 Yrs - 5 Pairs',
            price: 590,
            discount: '24%',
            star: 3
        }, {
            id: 15,
            image: ['https://img.drz.lazcdn.com/static/np/p/12ab6c08dede54a89c2c59e1ba2884c9.jpg_400x400q80.jpg_.webp'],
            title: 'Reusable Latex Hand Gloves For Kitchen',
            price: 350,
            discount: '49%',
            star: 5
        }, {
            id: 16,
            image: ['https://img.drz.lazcdn.com/static/np/p/7718d09ca818e72005ce7b771b9926b2.jpg_400x400q80.jpg_.webp'],
            title: '12pcs Plastic Wall Hooks',
            price: 500,
            discount: '30%',
            star: 2
        }, {
            id: 17,
            image: ['https://img.drz.lazcdn.com/static/np/p/056f12bcadf7a04adac4ee566c29a1d3.jpg_400x400q80.jpg_.webp'],
            title: 'Bubble Gun With 10 Holes For Children, Automatic Continuous Bubble Blower With Lights, Outdoor Toys For Boys & Girls',
            price: 1500,
            discount: '49%',
            star: 4
        }, {
            id: 18,
            image: ['https://img.drz.lazcdn.com/static/np/p/c3e52194567210da9d9eae05cf37f122.jpg_400x400q80.jpg_.webp'],
            title: '8 In 1 Type C To USB-C 4K HDMI Adapter USB 3.0 Multiport Cable Hub',
            price: 2849,
            discount: '44%',
            star: 5
        }
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
        setMyData(data.filter(item => item.id === parseInt(id)));
    }, [id]);

    useEffect(() => {
        if (myData.length > 0) {
            setImage(myData[0].image[0] || p1);
        }
    }, [myData]);

    if (myData.length === 0) {
        return <div>Loading...</div>;
    }

    const item = myData[0];

    console.log("My data: ", myData);

    const fullStar = [];
    for (let i = 0; i < item.star; i++) {
        fullStar.push(<FaStar key={i} className='text-yellow-500' />);
    }

    const emptyStar = [];
    for (let i = 0; i < (5 - item.star); i++) {
        emptyStar.push(<FaRegStar key={i} className='text-yellow-500' />)
    }

    return (
        <div className='h-[100vh]'>
            <div className='bg-white mx-40 mt-10 w-[1188px]'>
                <div className='flex gap-2 justify-between'>
                    <div className='p-2'>
                        <img src={image} alt="" className='w-[22rem] h-[21rem]' />
                        <div className="slider-container w-[20rem] h-[2rem] mt-4 flex gap-4 justify-center">
                            {
                                item.image.map((item, index) => {
                                    return (
                                        <div key={index} className='w-[3rem] h-[3rem]' onMouseEnter={() => setImage(item)}>
                                            <img src={item} alt="" className='w-full h-full' />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='p-2 w-[34rem]'>
                        <h3 className='text-semibold text-2xl mb-2 '>{item.title}</h3>
                        <div>
                            {
                                item.star &&
                                <div className='flex my-6'>
                                    {fullStar} {emptyStar}
                                </div>
                            }
                            <hr />
                            <div className='my-6'>
                                <span className='text-4xl text-[#F57224] font-semibold'>Rs. {item.price - (parseInt(item.discount) * (item.price)) / 100}</span>
                                <div className='flex gap-1 text-sm text-semibold'>
                                    <span className='line-through text-[#A6A6A6]'>Rs. {item.price}</span>
                                    <span>-{item.discount}</span>

                                </div>
                            </div>
                            <hr />
                            <div className='flex gap-4 mt-6'>
                                <p className='text-[#757575] text-lg'>Color Family</p>
                                <button className='border-2 border-[#A6A6A6] p-1 rounded-sm hover:bg-[#f5f5f5]'>Black</button>
                            </div>
                            <div className='flex gap-4 mt-6'>
                                <p className='text-[#757575] text-lg'>Quantity</p>
                                <div className='flex gap-3 items-center'>

                                    {count && count == 1 ? (

                                        <button className='border-2 border-[#f5f5f5] p-1 text-lg font-semibold w-[2rem] bg-[#EFF0F5] cursor-default' >-</button>
                                    ) : (
                                        <button className='border-2 border-[#f5f5f5] p-1 text-lg font-semibold w-[2rem] bg-[#EFF0F5]' onClick={() => { setCount(count - 1) }}>-</button>
                                    )

                                    }

                                    <p>{count}</p>
                                    <button className='border-2 border-[#f5f5f5] p-1 text-lg font-semibold w-[2rem] bg-[#EFF0F5]' onClick={() => { setCount(count + 1) }}>+</button>
                                </div>
                            </div>
                            <div className='mt-6 flex gap-2 mb-4'>
                                <button className='bg-[#2ABBE8] text-white p-2 w-48 cursor-pointer hover:bg-[#4aa9c7]'>Buy Now</button>
                                <button className='bg-[#F57224] text-white p-2 w-48 cursor-pointer hover:bg-[#d97e49]'>Add to Cart</button>
                            </div>

                        </div>
                    </div>
                    <div className='bg-[#f5f5f5] w-[330px]'>
                        <div className='p-2'>

                            <div className='flex justify-between'>
                                <p className='text-xs font-bold text-[#797979]'>Delivery Options</p>
                                <CiCircleInfo />
                            </div>
                            <div className='flex gap-4 mt-2'>
                                <div className='flex items-center gap-2'>
                                    <p className='text-2xl text-[#9A9A9A]'><CiLocationOn /></p>
                                    <p className='text-sm text-[#2D2D2D] font-semibold'>Bagmati,kathmandu Metro 22 - Newroad Area, Newroad</p>
                                </div>
                                <button className='text-[#4C8FFD] text-sm'>CHANGE</button>
                            </div>
                            <hr className='mt-2' />
                            <div className='flex gap-4 items-center mt-2'>
                                <div className='flex gap-2'>
                                    <p className='text-2xl text-[#9A9A9A]'><MdOutlineDeliveryDining /></p>
                                    <div>
                                        <p className='text-sm font-semibold text-[#2D2D2D]'>Standard Delivery</p>
                                        <p className='text-xs text-[#2D2D2D]'>Guaranteed by 11-15 Dec</p>
                                    </div>
                                </div>
                                <p className='ml-12'>Rs.70</p>
                            </div>
                            <div className='flex gap-2 mt-4'>
                                <p className='text-2xl text-[#9A9A9A]'><GiMoneyStack /></p>
                                <p className='text-sm font-semibold text-[#2D2D2D]'>Cash on Delivery Available</p>
                            </div>
                            <hr className='mt-2' />
                            <div>
                                <div className='flex justify-between items-center mt-2'>
                                    <p className='text-xs font-bold text-[#797979]'>Return & Warranty</p>
                                    <CiCircleInfo />
                                </div>
                                <div className='flex gap-2 mt-4'>
                                    <p className='text-2xl text-[#9A9A9A]'><TbNumber14Small /></p>
                                    <p className='text-sm font-semibold text-[#2D2D2D]'>14 Days Free Returns</p>
                                </div>
                                <div className='flex gap-2 mt-6'>
                                    <p className='text-2xl text-[#9A9A9A]'><IoBanOutline /></p>
                                    <p className='text-sm font-semibold text-[#2D2D2D]' >Warranty not available</p>
                                </div>
                                <hr className='mt-2' />
                                <div className='mt-2 flex gap-2'>
                                    <img className='w-[6rem]' src={DownloadQr} alt="" />
                                    <div className='flex flex-col justify-center gap-2 bg-white rounded-md p-2 w-[14rem] text-[#B3B3B3]'>
                                        <img className='w-[2rem]' src={DarazLogo} alt="" />
                                        <p className='text-xs'>Download App to enjoy
                                            <br />exclusive discounts!</p>
                                    </div>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <p><CiMobile1 /></p>
                                    <p className='text-[0.6rem]'>Scan with Mobile</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div >
    )
}

export default SingleProduct