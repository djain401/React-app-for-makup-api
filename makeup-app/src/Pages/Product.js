import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayItem from "../Components/DisplayItem";
import { Card } from "semantic-ui-react";

const Product = () => {
  const [makeup, setMakeup] = useState([]);
  const [myMakeup, setMyMakeup] = useState();

  const addItem = (id) => {
    setMyMakeup({
      name: makeup[id].name,
      brand: makeup[id].brand,
      price: makeup[id].price,
      imageUrl: makeup[id].image_link,
      description: makeup[id].description,
    });
  };

  useEffect(() => {
    axios.get("http://localhost:3001/productsapi").then((response) => {
      console.log(response.data);
      setMakeup(response.data);
    });
  }, []);

  useEffect(() => {
    if (myMakeup) {
      axios.post("http://localhost:3001/product", myMakeup).then((response) => {
        console.log(response.data);
      });
    }
  }, [myMakeup]);

  return (
    <section className="product-container">
      <h1>Product List</h1>

      <Card.Group itemsPerRow={3} centered>
        {makeup.map((product, index) => {
          return (
            <DisplayItem
              name={product.name}
              brand={product.brand}
              price={product.price}
              imageUrl={product.image_link}
              description={product.description}
              id={index}
              onAdd={addItem}
            />
          );
        })}
      </Card.Group>
    </section>
  );
};

export default Product;
