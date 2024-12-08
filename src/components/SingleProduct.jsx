import React from 'react'
import { useParams } from 'react-router-dom'
import p1 from '../assets/images/p1.jpg'
import p2 from '../assets/images/p2.jpg'
import p3 from '../assets/images/p3.jpg'
import p4 from '../assets/images/p4.jpg'
import p5 from '../assets/images/p5.jpg'
import p6 from '../assets/images/p6.jpg'
import { FaRegStar, FaStar } from "react-icons/fa";

const SingleProduct = () => {
    const { id } = useParams();
    const data = [
        {
            id: 1,
            title: 'Winter Stockings',
            image: p1,
            price: '1000',
            discount: '10%',
        },
        {
            id: 2,
            title: 'Heel Protector',
            image: p2,
            price: '1500',
            discount: '5%',
        },
        {
            id: 3,
            title: 'Pei Mei Skincare Vitamin C Serum',
            image: p3,
            price: '1500',
            discount: '15%',
        },
        {
            id: 4,
            title: 'HoneyComb Stainless Steel Knife Net',
            image: p4,
            price: '2000',
            discount: '12%',
        },
        {
            id: 5,
            title: 'Premium Kojic Acid Lightining Soap',
            image: p5,
            price: '500',
            discount: '15%',
        },
        {
            id: 6,
            title: '12 Packets Millet Biscuits',
            image: p6,
            price: '800',
            discount: '8%',
        }, {
            id: 7,
            image: "https://img.drz.lazcdn.com/g/kf/S8e231ddd1b654223a5986ae7191553daM.jpg_400x400q80.jpg_.webp",
            title: 'OZ Naturals Vitamin C Facial Serum With Hyaluronic Acid & Vitamin E -30ml/By Baisnabi Cosmetics',
            price: 300,
            discount: '5%',
            star: 4
        }, {
            id: 8,
            image: "https://img.drz.lazcdn.com/static/np/p/14450f357872cc1db3ca89b1a23d9aaa.jpg_400x400q80.jpg_.webp",
            title: 'LCD Writing Tab 8.5 Inch With Pen Writing Pad',
            price: 350,
            discount: '61%',
            star: 3
        }, {
            id: 9,
            image: "https://img.drz.lazcdn.com/static/np/p/d0b5a4c58a4a9620e4c926bb2930115c.jpg_400x400q80.jpg_.webp",
            title: '3D Decor Crystal Ball LED Night Light',
            price: 800,
            discount: '57%',
            star: 4,
        }, {
            id: 10,
            image: "https://img.drz.lazcdn.com/static/np/p/09d2a80d74f95e56167e3dfea8280c21.jpg_400x400q80.jpg_.webp",
            title: '5 Pair Reusable Non-Slip Printed Stainless Steel Chopsticks',
            price: 500,
            discount: '60%',
            star: 5
        }, {
            id: 11,
            image: "https://img.drz.lazcdn.com/static/np/p/ea6ee82f51ceb713756107cd277a44e5.jpg_400x400q80.jpg_.webp",
            title: 'Adjustable Ring for Men',
            price: 150,
            discount: '43%',
            star: 4
        }, {
            id: 12,
            image: "https://img.drz.lazcdn.com/static/np/p/6a1dfed19938060ec983cbfa0d3841b0.jpg_400x400q80.jpg_.webp",
            title: 'Electric Blanket with Heat Controller: King, Double, SIngle',
            price: 2400,
            discount: '33%',
            star: 5
        }, {
            id: 13,
            image: "https://img.drz.lazcdn.com/static/np/p/f9ba51bf729ff619d699c422d093a7c9.jpg_400x400q80.jpg_.webp",
            title: 'M10 Wireless TWS Earbuds | 2 Hour Charging Time | 15hrs Back up | Glossy Finish',
            price: 1499,
            discount: '65%',
            star: 4
        }, {
            id: 14,
            image: 'https://img.drz.lazcdn.com/static/np/p/a22733f7eddfae729641d20debbe3024.png_400x400q80.png_.webp',
            title: 'Korean Winter Cute Printed Socks For Kids - 0 To 3 Yrs - 5 Pairs',
            price: 590,
            discount: '24%',
            star: 3
        }, {
            id: 15,
            image: 'https://img.drz.lazcdn.com/static/np/p/12ab6c08dede54a89c2c59e1ba2884c9.jpg_400x400q80.jpg_.webp',
            title: 'Reusable Latex Hand Gloves For Kitchen',
            price: 350,
            discount: '49%',
            star: 5
        }, {
            id: 16,
            image: 'https://img.drz.lazcdn.com/static/np/p/7718d09ca818e72005ce7b771b9926b2.jpg_400x400q80.jpg_.webp',
            title: '12pcs Plastic Wall Hooks',
            price: 500,
            discount: '30%',
            star: 2
        }, {
            id: 17,
            image: 'https://img.drz.lazcdn.com/static/np/p/056f12bcadf7a04adac4ee566c29a1d3.jpg_400x400q80.jpg_.webp',
            title: 'Bubble Gun With 10 Holes For Children, Automatic Continuous Bubble Blower With Lights, Outdoor Toys For Boys & Girls',
            price: 1500,
            discount: '49%',
            star: 4
        }, {
            id: 18,
            image: 'https://img.drz.lazcdn.com/static/np/p/c3e52194567210da9d9eae05cf37f122.jpg_400x400q80.jpg_.webp',
            title: '8 In 1 Type C To USB-C 4K HDMI Adapter USB 3.0 Multiport Cable Hub',
            price: 2849,
            discount: '44%',
            star: 5
        }
    ]
    return (
        <div className='bg-white mx-40 mt-10 border-2 border-black w-[1188px] h-[780px]'>
            {
                data.map((item, index) => {

                    if (item.id === parseInt(id)) {
                        const fullStar = [];
                        for (let i = 0; i < item.star; i++) {
                            fullStar.push(<FaStar key={i} className='text-yellow-500' />);
                        }

                        const emptyStar = [];
                        for (let i = 0; i < (5 - item.star); i++) {
                            emptyStar.push(<FaRegStar key={i} className='text-yellow-500' />)
                        }

                        return (
                            <div key={index} className='flex'>
                                <div>
                                    <img src={item.image} alt="" />
                                </div>
                                <div>
                                    <h3 className='text-semibold text-lg'>{item.title}</h3>
                                    <div className='leading-3'>
                                        {
                                            item.star &&
                                            <div className='flex'>
                                                {fullStar} {emptyStar}
                                            </div>
                                        }
                                        <span className='text-lg text-[#F57224] font-semibold'>Rs. {item.price - (parseInt(item.discount) * (item.price)) / 100}</span>
                                        <div className='flex gap-1 text-xs text-semibold'>
                                            <span className='line-through text-[#808080]'>{item.price}</span>
                                            <span>-{item.discount}</span>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default SingleProduct