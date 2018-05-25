import React, { Component } from 'react';
import axios from 'axios';
import Product from '../Product/Product.js';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct(id) {
        axios.delete(`api/product/${id}`).then(res => {
            this.setState({ products: res.data })
        })
    }

    render() {
        let mappedProducts = this.props.inventoryList.map((e, i) => {
            return (
                <div key={i}>
                    <Product
                        id={e.id}
                        imageURL={e.imageurl}
                        productName={e.productname}
                        price={e.price}
                        deleteProduct={this.deleteProduct}
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

