import React from 'react'

function Product ({ ProductList }) {
    return (
        <>
            <div className="container">
                {
                    ProductList.map((product, i)=>{
                        
                    })
                }
            </div>
        </>
    )
}

export default Product