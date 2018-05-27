import React, { Component } from 'react';
import axios from 'axios';
import Product from './Product.js';
import Header from './Header.js';
import Add from './Add.js'

export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inventoryList: [
                //   {
                //     id: 1,
                //     imageURL: <img src='http://static.shoplightspeed.com/shops/613182/files/006379003/image.jpg' alt="Granita Mid Top Sneakers" />,
                //     productName: 'Granita Mid Top Sneakers',
                //     price: 55
                //   },
                //   {
                //     id: 2,
                //     imageURL: <img src='https://static.wixstatic.com/media/2bf098_9ab538cbc4a741638fd1c43e9b8225e6~mv2.jpg_256' alt="Fancy Mode Leather Jacket" />,
                //     productName: 'Fancy Mode Leather Jacket',
                //     price: 224
                //   },
                //   {
                //     id: 3,
                //     imageURL: <img src='https://www.ridersline.com.au/shop/1832-atmn_list/draggin-womens-twista.jpg' alt="Women Motocycle Pants" />,
                //     productName: 'Women Motocycle Pants',
                //     price: 99
                //   },
                // {
                //     id: 3,
                //     imageURL: <img src='https://summitsports.scene7.com/is/image/SummitSports/462810_462810_1?$256$' alt="Body Glove Borasco Womens Tank Top" />,
                //     productName: 'Body Glove Borasco Womens Tank Top',
                //     price: 14
                //   }
            ],
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
                    <Product
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

