import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import HoodiesCollection from "./Components/ProductCollection/HoodiesCollection/HoodiesCollection";
import SweaterCollection from "./Components/ProductCollection/SweaterCollection/SweaterCollection";
import SweaterDetailsPage from "./Components/ProductCollection/SweaterCollection/SweaterDetailsPage";
import HoodieDetailPage from "./Components/ProductCollection/HoodiesCollection/HoodieDetailPage";
import AddProduct from './Components/Admin/AddProducts/AddProduct';
import LoginSignup from "./Components/LoginSignup/LoginSignup";
import WomenShoesCollection from "./Components/ProductCollection/WomenShoesCollection/WomenShoesCollection";
import ShoesDetailsPage from "./Components/ProductCollection/WomenShoesCollection/ShoesDetailsPage/ShoesDetailsPage";
import ManJacketCollection from "./Components/ProductCollection/ManJacketCollection/ManJacketCollection";
// import Login from "./Components/LoginSignup/Login";
import MenJacketDetailPage from './Components/ProductCollection/ManJacketCollection/MenJacketDetailPage';
import { UserContextProvider } from './Components/LoginSignup/context/userContext';
import ShoppingaCart from './Components/ShoppingCart/ShoppingaCart';
import Login from './Components/Login/Login/Login';


function App() {
  
  return (
    <div className="App">
      <UserContextProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/addProduct">
              <AddProduct />
            </Route>
            <Route path="/login">
              <LoginSignup />
            </Route>
            {/* <Route path="/login">
              <Login />
            </Route> */}
            <Route path="/mens/jacket">
              <ManJacketCollection />
            </Route>
            <Route path="/mensJacketDetail/:id">
              <MenJacketDetailPage />
            </Route>
            <Route path="/women/sweater">
              <SweaterCollection />
            </Route>
            <Route path="/sweaterDetail/:id">
              <SweaterDetailsPage />
            </Route>
            <Route path="/women/hoodie">
              <HoodiesCollection />
            </Route>
            <Route path="/hoodieDetail/:id">
              <HoodieDetailPage />
            </Route>
            <Route path="/women/shoes">
              <WomenShoesCollection />
            </Route>
            <Route path="/shoesDetails/:id">
              <ShoesDetailsPage />
            </Route>
            <Route path="/shoppingCart">
              <ShoppingaCart />
            </Route>
          </Switch>
        </Router>
      
      </UserContextProvider>
    </div>
  );
}

export default App;
