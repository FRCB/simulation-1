import React, { Component } from 'react';
import Product from '../Product/Product.js';

export default class Dashboard extends Component {
    render() {
        console.log(this.props)
        let mappedProducts = this.props.inventoryList.map((e, i) => {
            return (
                <div key={i}>
                    <Product
                        id={e.id}
                        imageURL={e.imageurl}
                        productName={e.productname}
                        price={e.price}
                    />
                </div>
            )
        })

        return (
            <div>
                Dashboard
                {mappedProducts}
            </div>
        );
    }
}

