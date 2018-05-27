import React, { Component } from 'react';
import axios from 'axios';
import Product from './Product.js';

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
            urlInput: '',
            productNameInput: '',
            priceInput: ''
        }
        this.handleCancel = this.handleCancel.bind(this)
        this.addProduct = this.addProduct.bind(this)
        this.deleteProduct = this.deleteProduct.bind(this)
        this.editProduct = this.editProduct.bind(this)
    }

    componentDidMount() {
        axios.get('/api/inventory').then((res) => {
            this.setState({ inventoryList: res.data })
        })
    }

    addProduct() {
        let body = {
            urlInput: this.state.urlInput,
            productNameInput: this.state.productNameInput,
            priceInput: this.state.priceInput,
        }
        axios.post(`/api/product`, body).then((res) => {
            this.setState({
                products: res.data,
                urlInput: '',
                productNameInput: '',
                priceInput: ''
            })
        })
        // { this.props.getAll }
    }

    handleCancel() {
        this.setState({ urlInput: '', productNameInput: '', priceInput: '' })
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
                    <h3>Header</h3>
                </div>
                <div>
                    <h3>Form</h3>
                    <input
                        type="text"
                        value={this.state.urlInput}
                        onChange={(e) => this.setState({ urlInput: e.target.value })} />
                    <input
                        type="text"
                        value={this.state.productNameInput}
                        onChange={(e) => this.setState({ productNameInput: e.target.value })} />
                    <input
                        type="text"
                        value={this.state.priceInput}
                        onChange={(e) => this.setState({ priceInput: e.target.value })} />
                    <button
                        onClick={this.handleCancel}>
                        Cancel
                    </button>
                    <button
                        onClick={this.addProduct}>
                        Add to Inventory
                </button>
                </div>
                <div>
                    <h3>Dashboard</h3>
                    {mappedProducts}
                </div>
            </div>
        );
    }
}

