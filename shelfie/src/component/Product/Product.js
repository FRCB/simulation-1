import React from 'react';

export default function Product(props) {
    return (
        <div>
            Product
            <h2>{props.imageURL}</h2>
            <h3>{props.productName}</h3>
            <h3>${props.price}</h3>
        </div>
    )
};