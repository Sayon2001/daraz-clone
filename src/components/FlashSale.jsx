import React from 'react'
import p1 from '../assets/images/p1.jpg'
import p2 from '../assets/images/p2.jpg'
import p3 from '../assets/images/p3.jpg'
import p4 from '../assets/images/p4.jpg'
import p5 from '../assets/images/p5.jpg'
import p6 from '../assets/images/p6.jpg'
import FlashSaleCard from './FlashSaleCard'

const FlashSale = () => {
    const data = [
        {
            title: 'Winter Stockings',
            image: p1,
            price: '1000',
            discount: '10%',
        },
        {
            title: 'Heel Protector',
            image: p2,
            price: '1500',
            discount: '5%',
        },
        {
            title: 'Pei Mei Skincare Vitamin C Serum',
            image: p3,
            price: '1500',
            discount: '15%',
        },
        {
            title: 'HoneyComb Stainless Steel Knife Net',
            image: p4,
            price: '2000',
            discount: '12%',
        },
        {
            title: 'Premium Kojic Acid Lightining Soap',
            image: p5,
            price: '500',
            discount: '15%',
        },
        {
            title: '12 Packets Millet Biscuits',
            image: p6,
            price: '800',
            discount: '8%',
        }
    ]
    return (
        <div className='mt-4'>
            <h2 className='text-xl font-semibold'>Flash Sale</h2>
            <div className='bg-white'>
                <div className='flex justify-between items-center m-2 font-semibold text-sm text-[#F57224]'>
                    <p>On Sale Now</p>
                    <p className='border-2 border-[#F57224] p-1 m-2'>SHOP ALL PRODUCTS</p>
                </div>
                <hr className='h-1' />
                <div className='grid grid-cols-6'>
                    <FlashSaleCard product={data} />
                </div>
            </div>

        </div>
    )
}

export default FlashSale
