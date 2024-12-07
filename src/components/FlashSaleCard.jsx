import React from 'react'
import { FaStarHalfAlt, FaStar } from "react-icons/fa";

const Card = ({ product }) => {

    return (
        <>
            {
                product.map((item, index) => {

                    const fullStar = [];
                    for (let i = 0; i < item.star; i++) {
                        fullStar.push(<FaStar key={i} className='text-yellow-500' />);
                    }

                    const emptyStar = [];
                    for (let i = 0; i < (5 - item.star); i++) {
                        emptyStar.push(<FaStarHalfAlt key={i} className='text-yellow-500' />)
                    }

                    return (
                        <div key={index} className='w-[12rem] hover:shadow-2xl my-2 p-2 cursor-pointer'>
                            <div className='flex flex-col items-center'>
                                <img className='h-[10.5rem]' src={item.image} alt="" />
                            </div>
                            <h3 className='text-ellipsis whitespace-nowrap overflow-hidden text-semibold text-lg'>{item.title}</h3>
                            <div className='leading-3'>
                                <span className='text-lg text-[#F57224] font-semibold'>Rs. {item.price - (parseInt(item.discount) * (item.price)) / 100}</span>
                                {
                                    item.star &&
                                    <span>-{item.discount}</span>

                                }
                                {
                                    item.star ?
                                        <div className='flex'>
                                            {fullStar} {emptyStar}
                                        </div>
                                        :
                                        <div className='flex gap-1 text-xs text-semibold'>
                                            <span className='line-through text-[#808080]'>{item.price}</span>
                                            <span>-{item.discount}</span>
                                        </div>
                                }
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Card
