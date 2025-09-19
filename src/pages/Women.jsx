import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addTocart } from "../cartSlice";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../CSS/Home.css";

const Women = () => {
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();

  const loadData = async () => {
    try {
      let api = "http://localhost:3000/products";
      const response = await axios.get(api);
      console.log("API Data:", response.data);
      setMydata(response.data);
    } catch (error) {
      console.error("API Error:", error.message);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // सिर्फ women category वाले products
  const womenProducts = mydata
    .filter((item) => item.category.toLowerCase() === "women")
    .map((key) => (
      <Card style={{ width: "18rem", margin: "10px" }} key={key.id}>
        <Card.Img variant="top" src={key.images} height="200" />
        <Card.Body>
          <Card.Title>{key.brand}</Card.Title>
          <Card.Text>
            {key.name}
            <br />
            <span style={{ color: "red" }}>Category : {key.category}</span>
            <br />
            <span style={{ color: "navy", fontWeight: "bold" }}>
              Price : {key.price}
            </span>
          </Card.Text>
          <Button
            variant="primary"
            onClick={() =>
              dispatch(
                addTocart({
                  id: key.id,
                  name: key.name,
                  brand: key.brand,
                  category: key.category,
                  price: key.price,
                  images: key.images,
                  qnty: 1,
                })
              )
            }
          >
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    ));

  return (
    <>
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>
        👠 Women Collection
      </h2>
      <div
        id="topshoes"
        style={{ width: "90%", margin: "auto", display: "flex", flexWrap: "wrap" }}
      >
        {womenProducts.length > 0 ? womenProducts : <h4>No Women Products Found</h4>}
      </div>
    </>
  );
};

export default Women;
