import React, { useState } from "react";
import { Card, Button, Icon } from "semantic-ui-react";

const DisplayItem = ({
  name,
  brand,
  price,
  imageUrl,
  description,
  id,
  onAdd,
}) => {
  const [flag, setFlag] = useState(false);

  const onClickHandler = (e) => {
    e.preventDefault();
    setFlag(true);
    onAdd(id);
  };
  return (
    <Card fluid key={id} color="teal">
      <Card.Content header={name} meta={brand} description={description} />
      <Button icon onClick={onClickHandler} disabled={flag ? true : false}>
        <Icon name="plus" />
      </Button>
    </Card>
  );
};

export default DisplayItem;
