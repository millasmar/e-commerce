import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import RemoveProducts from "../components/RemoveProducts";
import axios from "axios";

function RemoveProductsContainer() {
  const history = useHistory();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/products")
      .then((res) => res.data)
      .then((products) => {
        console.log("products con categories: ", products);
        return products;
      })
      .then((products) => setProducts([...products]))
      .catch((err) => console.log(err));
  }, []);

  /*  const handleRemove = (e) => {
  const id = e.target.name
  console.log(id);

    axios.delete(`http://localhost:1337/api/products/${id}`)
      .then((res) => res.data)
      .catch(err=>console.log(err))
  };*/

  return <RemoveProducts products={products} setProducts={setProducts} />;
}

export default RemoveProductsContainer;
