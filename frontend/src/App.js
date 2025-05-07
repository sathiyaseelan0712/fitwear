import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import Nav from './components/Nav';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contactus from './pages/Contactus/Contactus';
import Productpage from './pages/Product/Productpage';
import Cartpage from './pages/Cart/Cartpage';
import LoginScreen from './pages/Login/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import ProfileScreen from './components/ProfileScreen';
import Checkout from "./pages/checkout/Checkout";
import Placeorder from './pages/placeorder/Placeorder';
import Order from './pages/Order/Order';
import Users from './pages/Userslist/Users';
import NotFoundPage from './components/Notfoundpage'; //This page return when the url in not match to the route
import Edituser from './pages/Useredit/Edituser';
import Products from './pages/products/products';
import Editproduct from './pages/Editproduct/Editproduct';
import Orders from './pages/Orders/Orders';
import ScrollIntoView from "./components/Scrollintoview";
import './style.css';  

const App = () => {
  return (
    <div className='main'>
      <ChakraProvider>
        <Router>
          <ScrollIntoView>
            <>
              <Nav />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/shop" component={Shop} />
                <Route path="/contactus" component={Contactus} />
                <Route path="/product/:id" component={Productpage} />
                <Route path="/cart/:id?" component={Cartpage} />
                <Route path="/login" component={LoginScreen} />
                <Route path="/register" component={RegisterScreen} />
                <Route path="/profile" component={ProfileScreen} />
                <Route path="/shipping" component={Checkout} />
                <Route path="/placeorder" component={Placeorder} />
                <Route path="/order/:id" component={Order} />
                <Route path="/admin/userlist" component={Users} />
                <Route path="/admin/productlist" component={Products} />
                <Route path="/admin/orderlist" component={Orders} />
                <Route path="/search/:keyword" component={Shop} />
                <Route path="/admin/user/:id/edit" component={Edituser} />
                <Route path="/admin/product/:id/edit" component={Editproduct} />
                <Route component={NotFoundPage} />  
              </Switch>
            </>
          </ScrollIntoView>
        </Router>
      </ChakraProvider>
    </div>
  );
}

export default App;
