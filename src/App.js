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


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/addProduct">
            <AddProduct />
          </Route>
          <Route path="/loginSignup">
            <LoginSignup />
          </Route>
          <Route path="/mens/jacket">
            <ManJacketCollection />
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
