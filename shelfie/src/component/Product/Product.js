import React from 'react';

export default function Product(props) {
    console.log(props)

    return (
        < div >
            Product
        < h2 > <img src={props.imageURL} /> </h2 >
            <h3>{props.productName}</h3>
            <h3>${props.price}</h3>
            <button
                onClick={() => props.deleteProduct(props.id)} >
                Delete
            </button>
            <button>Edit</button>
        </div >
    )
};