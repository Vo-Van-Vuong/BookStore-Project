import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import ProdcutList from './components/ProductList/PodcutList';
import Banner from './components/Banner/Banner';
function App() {
  return (
    <div className="App">
      <Header />
      <div style={{padding: "10px"}}>
        <Banner/>
        <ProdcutList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
