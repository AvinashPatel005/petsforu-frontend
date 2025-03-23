import React from 'react'
function Rating({ rating }) {
    return (
        <div className='flex gap-[1px]'>
            {
                Array(Math.floor(rating)).fill().map((_, i) => (<i key={i} className="bi bi-star-fill text-xs text-yellow-400"></i>))
            }
            {
                rating !== Math.floor(rating) && <i className="bi bi-star-half text-xs text-yellow-400"></i>
            }
            {
                Array(5 - Math.ceil(rating)).fill().map((_, i) => (<i key={i} className="bi bi-star text-xs text-yellow-400 "></i>))
            }
        </div>
    )
}

export default Rating
