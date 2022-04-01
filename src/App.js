import React from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import ManajemenProduk from './Pages/ManajemenProduk';
import ProductPage from './Pages/ProductPage';
import {getCategory,getProduct} from '../src/redux/actions'
import ProductDetail from './Pages/ProductDetail';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  componentDidMount(){
    this.props.getProduct()
    this.props.getCategory()
  }
  render() { 
    return ( 
      <>
      <Routes>
        <Route path='/product-page' element={<ProductPage/>} />
        <Route path='/manajemen-produk' element={<ManajemenProduk/>}/>
        <Route path='/product-detail' element={<ProductDetail/>}/>
      </Routes>
      </>
     );
  }
}
 
export default connect(null,{getCategory,getProduct}) (App);