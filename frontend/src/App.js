import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './pages/Home';
import PruductPage from './pages/ProductPage';

function App() {
  return (
    /*<div className="App">
      <Header />
      <div style={{padding: "10px"}}>
        <TopBanner/>
        <Banner/>
        <ProdcutList />
      </div>
      <Footer />
  </div> */
  <Router>
    <Route path={["/", "/home"]} exact component={Home} />
    <Route path="/product-page" exact component={PruductPage} />
  </Router>

  );
}

export default App;
