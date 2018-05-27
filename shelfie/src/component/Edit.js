import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Product extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleBtn: false,
            urlEdit: '',
            productNameEdit: '',
            priceEdit: ''
        }
    }

    componentDidMount() {
        this.setState({
            urlEdit: this.props.urlEdit,
            productNameEdit: this.props.productNameEdit,
            priceEdit: this.props.priceEdit
        })
    }

    toggle() {
        if (this.state.toggleBtn) {
            this.props.editProduct(this.props.id, this.state.urlEdit, this.state.productNameEdit, this.state.priceEdit)
        }
        this.setState({ toggleBtn: !this.state.toggleBtn })
    }

    render() {
        return (
            <div>
                <hr />
                <h3>Product</h3>
                <div>
                    {this.state.toggleBtn
                        ?
                        <div>
                            <input value={this.state.urlEdit} onChange={(e) => this.setState({ urlEdit: e.target.value })} />
                            <input value={this.state.productNameEdit} onChange={(e) => this.setState({ productNameEdit: e.target.value })} />
                            <input value={this.state.priceEdit} onChange={(e) => this.setState({ priceEdit: e.target.value })} />
                        </div>
                        :
                        <div>
                            <img src={this.props.imageURL} alt='product' />
                            <h3>{this.props.productName}</h3>
                            <h3>${this.props.price}</h3>
                        </div>
                    }
                    <button
                        onClick={() => this.props.deleteProduct(this.props.id)} >
                        Delete
                    </button>
                    <Link to={`/edit/${this.props.id}`}>
                        <button
                            onClick={() => this.toggle()}>
                            {this.state.toggleBtn ? "Save" : "Edit"}
                        </button>
                    </Link>
                </div>
                <hr />
            </div >
        );
    }
}