import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import AdminHome from './pages/admin/AdminHome';
import BestSellProduct from './pages/BestSellProduct';
import UploadPage from './pages/admin/UploadPage';
import BasketPage from './pages/BasketPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
  <Router>
    <Route path={["/", "/home"]} exact component={Home} />
    <Route path="/basket" exact component={BasketPage} />
    <Route path="/product-page" exact component={BestSellProduct} />
    <Route path="/product/id" exact component={ProductDetailPage} />
    <Route path="/admin-home" exact component={AdminHome} />
    <Route path="/login" exact component={LoginPage} />
    <Route path="/upload" exact component={UploadPage} />
  </Router>

  );
}

export default App;
