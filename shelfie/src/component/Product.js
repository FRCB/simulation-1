import React, { Component } from 'react';
import axios from 'axios';


export default class Product extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleBtn: false,
            urlEdit: '',
            productNameEdit: '',
            priceEdit: ''
        }
        this.deleteProduct = this.deleteProduct.bind(this)
        this.editProduct = this.editProduct.bind(this)
        this.toggleEdit = this.toggleEdit.bind(this)
    }

    deleteProduct(id) {
        axios.delete(`api/product/${id}`).then(res => {
            this.setState({ products: res.data })
        }).then(this.props.toRefresh())
    }

    toggleEdit() {
        if (this.state.toggleBtn) {
            this.editProduct(this.props.id, this.state.urlEdit, this.state.productNameEdit, this.state.priceEdit)
        }
        this.setState({ toggleBtn: !this.state.toggleBtn })
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
        }).then(this.props.toRefresh())
    }

    render() {

        return (
            <div>
                <hr />
                <h3>Product</h3>
                {
                    this.state.toggleBtn
                        ?
                        <div>
                            <input
                                value={this.state.urlEdit}
                                onChange={(e) => this.setState({ urlEdit: e.target.value })} />
                            <input
                                value={this.state.productNameEdit}
                                onChange={(e) => this.setState({ productNameEdit: e.target.value })} />
                            <input
                                value={this.state.priceEdit}
                                onChange={(e) => this.setState({ priceEdit: e.target.value })} />
                        </div>
                        :
                        <div>
                            <img src={this.props.imageURL} alt='product' />
                            <h3>{this.props.productName}</h3>
                            <h3>${this.props.price}</h3>
                        </div>
                }
                <button
                    onClick={() => this.deleteProduct(this.props.id)} >
                    Delete
                </button>
                <button
                    onClick={() => this.toggleEdit()}>{this.state.toggleBtn ? "Save" : "Edit"}
                </button>
            </div >
        );
    }
}
