import React from 'react'






function Giftgrid({data}) {
    return (
        <div className='card animate__animated animate__zoomInDown'>
        
           <img src={data.url} alt={data.title} />
           <p>{data.title}</p>
        </div>
    )
}

export default Giftgrid
