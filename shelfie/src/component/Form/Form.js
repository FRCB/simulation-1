import React, { Component } from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            urlInput: '',
            productNameInput: '',
            priceInput: ''
        }
        this.handleCancel = this.handleCancel.bind(this)
    }

    handleCancel() {
        this.setState({ urlInput: '', productNameInput: '', priceInput: '' })
    }


    render() {
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
                <button>Add</button>
            </div>
        );
    }
}