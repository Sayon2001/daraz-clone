import React from 'react'

const Card = ({ product }) => {
    return (
        <>
            {
                product.map((item, index) => {
                    return (
                        <div key={index} className='w-[12rem] hover:shadow-2xl my-2 p-2 cursor-pointer'>
                            <div className='flex flex-col items-center'>
                                <img className='h-[10.5rem]' src={item.image} alt="" />
                            </div>
                            <h3 className='text-ellipsis whitespace-nowrap overflow-hidden text-semibold text-lg'>{item.title}</h3>
                            <div className='leading-3'>
                                <p className='text-lg text-[#F57224] font-semibold'>Rs. {item.price - (parseInt(item.discount) * (item.price)) / 100}</p>
                                <div className='flex gap-1 text-xs text-semibold'>
                                    <p className='line-through'>{item.price}</p>
                                    <p>-{item.discount}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Card
