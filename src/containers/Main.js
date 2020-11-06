import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Route, Redirect, Switch } from "react-router-dom";
import RegisterContainer from "./registerContainer";
import LoginContainer from "./LoginContainer";
import AdminConfigsContainer from "./AdminConfigsContainer";
import { useSelector, useDispatch } from "react-redux";
import ProductsContainer from "../containers/ProductsContainer";
import CartContainer from "./CartContainer";
import { fetchIsLogged, login, loggUser } from "../store/action-creators/login";
import ProductContainer from "../containers/ProductContainer";
import { createCart } from "../store/action-creators/cart";
import axios from "axios";

function App() {
  const dispatch = useDispatch();
  const islogged = useSelector((state) => {
    return state.login.logged;
  });

  useEffect(() => {
    //axios.defaults.withCredentials = true;

    axios
      .get("http://localhost:1337/api/user/verificate")
      .then((res) => res.data)
      .then((user) => {
        console.log(user);
        return dispatch(loggUser(user));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <Switch>
          <Route path='/register' component={RegisterContainer} />
          <Route path='/login' component={LoginContainer} />
          <Route exact path='/' component={ProductsContainer} />
          <Route exact path='/products' component={ProductsContainer} />
          <Route path='/cart' component={CartContainer} />
          <Route path='/configs' component={AdminConfigsContainer} />
          <Route path='/products/:productId' component={ProductContainer} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
