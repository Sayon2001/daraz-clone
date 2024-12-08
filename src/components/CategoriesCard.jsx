import React from 'react'


const CategoriesCard = ({ product }) => {
    return (
        <div className='grid grid-cols-8'>
            {
                product.map((item, index) => {
                    return (

                        <div key={index} className='m-1 p-1 flex flex-col items-center hover:shadow-2xl gap-1'>
                            <img className='h-[5rem]' src={item.image} alt="" />
                            <h3 className='text-sm font-semibold'>{item.title}</h3>
                        </div>

                    )
                })
            }
        </div>
    )
}

export default CategoriesCard
