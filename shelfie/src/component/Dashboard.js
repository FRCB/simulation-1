import React, { Component } from 'react';
import axios from 'axios';
import Product from './Product';


export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inventoryList: [],
        }
    }

    componentDidMount() {
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
                    />
                </div>
            )
        })

        return (
            <div>
                <div>
                    <h2>Dashboard</h2>
                    {mappedProducts}
                </div>
            </div>
        );
    }
}