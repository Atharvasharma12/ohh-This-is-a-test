import React from 'react'
import "./Item.css"


const Item=({data}) => {
    
return(
        <>

            <div className="item" id='itmes'>
                <img src={data.url} alt="" />
                <h3>{data.name}</h3>
                <h4>{data.rate}</h4>
                <button class="AddToCart"  >Add To Cart</button>
                
            </div>
        
        </>
    )
}
export default Item
