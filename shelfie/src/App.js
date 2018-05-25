import React, { Component } from 'react';
import axios from 'axios'
import Dashboard from './component/Dashboard/Dashboard.js';
import Form from './component/Form/Form.js';
import Header from './component/Header/Header.js';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inventoryList: [
        //   {
        //     id: 1,
        //     imageURL: <img src='http://static.shoplightspeed.com/shops/613182/files/006379003/image.jpg' alt="Granita Mid Top Sneakers" />,
        //     productName: 'Granita Mid Top Sneakers',
        //     price: '55'
        //   },
        //   {
        //     id: 2,
        //     imageURL: <img src='https://static.wixstatic.com/media/2bf098_9ab538cbc4a741638fd1c43e9b8225e6~mv2.jpg_256' alt="Fancy Mode Leather Jacket" />,
        //     productName: 'Fancy Mode Leather Jacket',
        //     price: '224'
        //   },
        //   {
        //     id: 3,
        //     imageURL: <img src='https://www.ridersline.com.au/shop/1832-atmn_list/draggin-womens-twista.jpg' alt="Women Motocycle Pants" />,
        //     productName: 'Women Motocycle Pants',
        //     price: '99'
        //   }
      ]
    }
  }

  componentDidMount() {
    axios.get('/api/inventory').then((res) => {
      this.setState({
        inventoryList: res.data
      })
    })
  }

  render() {

    return (
      <div>
        <Dashboard
          inventoryList={this.state.inventoryList}
        />
        <Form />
        <Header />
      </div>
    );
  }
}
