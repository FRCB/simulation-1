import React, { Component } from 'react';
import axios from 'axios';
import Product from './Product';
import Header from './Header';


export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inventoryList: [],
        }
        this.toRefresh = this.toRefresh.bind(this)
    }

    componentDidMount() {
        axios.get('/api/inventory').then((res) => {
            this.setState({ inventoryList: res.data })
        })
    }

    toRefresh() {
        axios.get('/api/inventory').then((res) => {
            this.setState({ inventoryList: res.data })
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
                        toRefresh={this.toRefresh}
                    />
                </div>
            )
        })

        return (
            <div>
                <Header />
                <div>
                    <h2>Dashboard</h2>
                    {mappedProducts}
                </div>
            </div >
        );
    }
}