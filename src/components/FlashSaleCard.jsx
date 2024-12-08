import React from 'react'
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

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
                        emptyStar.push(<FaRegStar key={i} className='text-yellow-500' />)
                    }

                    return (
                        <>
                            <Link to={`/singleProduct/${item.id}`}>
                                <div key={index} className='w-[12rem] hover:shadow-2xl my-2 p-2 cursor-pointer'>
                                    <div className='flex flex-col items-center'>
                                        <img className='h-[10.5rem]' src={item.image} alt="" />
                                    </div>
                                    <h3 className='text-ellipsis whitespace-nowrap overflow-hidden text-semibold text-lg'>{item.title}</h3>
                                    <div className='leading-3'>
                                        <span className='text-lg text-[#F57224] font-semibold'>Rs. {item.price - (parseInt(item.discount) * (item.price)) / 100}</span>
                                        {
                                            item.star &&
                                            <span className='text-xs ml-1'>-{item.discount}</span>

                                        }
                                        {
                                            item.star ?
                                                <div className='flex text-xs'>
                                                    {fullStar} {emptyStar}
                                                </div>
                                                :
                                                <div className='flex gap-1 text-xs text-semibold'>
                                                    <span className='line-through text-[#808080]'>{item.price}</span>
                                                    <span className='text-xs'>-{item.discount}</span>
                                                </div>
                                        }
                                    </div>
                                </div>
                            </Link>
                        </>
                    )
                })
            }
        </>
    )
}

export default Card
