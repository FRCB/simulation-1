import React, { Component } from 'react';
import axios from 'axios';
import Edit from './Edit.js';
import Header from './Header.js';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inventoryList: [],
        }
        this.deleteProduct = this.deleteProduct.bind(this)
        this.editProduct = this.editProduct.bind(this)
    }

    componentDidMount() {
        axios.get('/api/inventory').then((res) => {
            this.setState({ inventoryList: res.data })
        })
    }

    deleteProduct(id) {
        axios.delete(`api/product/${id}`).then(res => {
            this.setState({ products: res.data })
        })
    }

    editProduct(id, imageurl, productname, price) {
        const body = {
            imageurl: imageurl,
            productname: productname,
            price: price
        }
        axios.put(`/api/products/${id}`, body).then(res => {
            console.log(res.data)
            this.setState({ products: res.data })
        })
    }

    render() {
        let mappedProducts = this.state.inventoryList.map((e, i) => {
            return (
                <div key={i}>
                    <Edit
                        id={e.id}
                        imageURL={e.imageurl}
                        productName={e.productname}
                        price={e.price}
                        deleteProduct={this.deleteProduct}
                        editProduct={this.editProduct}
                    />
                </div>
            )
        })

        return (
            <div>
                <div>
                    <Header />
                </div>
                <br />
                <div>
                    <h2>Dashboard</h2>
                    {mappedProducts}
                </div>
            </div>
        );
    }
}

