import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Menu color="blue" widths={3} size="massive">
        <Menu.Item as={Link} name="Home" to="/" />

        <Menu.Item as={Link} name="Products" to="/productsapi" />
      </Menu>
      <h1>Makeup App</h1>
    </div>
  );
};

export default Home;
