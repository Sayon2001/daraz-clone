import React, { useEffect } from 'react'

const NotFound = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className='flex justify-between text-red-400'>
            <h1>404 Page Not Found!</h1>
        </div>
    )
}

export default NotFound