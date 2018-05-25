import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            urlInput: '',
            productNameInput: '',
            priceInput: ''
        }
        this.handleCancel = this.handleCancel.bind(this)
        this.addProduct = this.addProduct.bind(this)
    }

    handleCancel() {
        this.setState({ urlInput: '', productNameInput: '', priceInput: '' })
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
        { this.props.getAll }
    }

    deleteProduct(id) {
        axios.delete(`api/product/${id}`).then(res => {
            this.setState({ products: res.data })
        })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                Form
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
                    Add to Inventory</button>
            </div>
        );
    }
}