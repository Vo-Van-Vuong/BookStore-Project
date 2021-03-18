import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';

import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import AdminHome from './pages/admin/AdminHome';
import BestSellProduct from './pages/BestSellProduct';
import UploadPage from './pages/admin/UploadPage';
import BasketPage from './pages/BasketPage';
import ProductDetailPage from './pages/ProductDetailPage';
import FormikTest from './pages/FormikTest';
import ByteArrayImage from './pages/admin/ByteArrayImage';

function App() {
  return (
  <Router>
    <Route path={["/", "/home"]} exact component={Home}></Route> 
    <Route path="/basket" exact component={BasketPage}></Route>
    <Route path="/product-page" component={BestSellProduct}></Route>
    <Route path="/product/id" component={ProductDetailPage}></Route>
    <Route path="/admin-home" exact component={AdminHome}></Route>
    <Route path="/login" exact component={LoginPage}></Route>
    <Route path="/formik" component={FormikTest}></Route>
    <Route path="/showimage" component={ByteArrayImage}></Route>
  </Router>

  );
}

export default App;
