import Nav from './pages/nav/Navigation'
import Sliders from './pages/slider/Sliders'
import Announcemets from './pages/announcmenet/Announcemets';
import './app.scss'
import Catagories from './pages/catgories/Catagories';
import Products from './pages/products/Products';
import Footer from './pages/footer/Footer';
import ProductList from './pages/products/productsList/ProductList';
import Item from './pages/item/Item';
import Login from './pages/signin/Login';
import Register from './pages/signup/Register';
import Cart from './pages/cart/Cart';
import Home from './pages/home/Home';
import Stripe from './pages/stripe/Stripe';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom'
import Product from './pages/products/product/Product';
import {useSelector} from 'react-redux'

function App() {
  const user = false
  const people=localStorage.getItem("persist:root")
  var como
  var commonPeople
  if(people){
    como=JSON.parse(people).user
    commonPeople=JSON.parse(como).currentUser
    
  
  }
  return (
    <div className="App">
      <Router>
    <Switch>
      
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/products/:catagory">
          <ProductList/>
        </Route>
        <Route path="/product/:id">
          <Item/>
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
      
        <Route path="/register">
          {commonPeople?<Redirect to="/"/>:<Register/>}
        </Route>
        <Route path="/login">
        {commonPeople?<Redirect to="/"/>:<Login/>}
       <Login/>
        </Route>
    </Switch>
    </Router>
      {/* <Home/>
<Nav/>
 {//<Register/>
    <ProductList/>
       <Announcemets/>
     <Nav/> 
      <Sliders/> 
     <Catagories/>
     <Products/>
     <Footer/> */}
    </div>
  );
}

export default App;
