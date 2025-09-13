import ban4 from '../images/ban4.webp';
import ban2 from '../images/ban2.webp';
import ban3 from '../images/ban3.webp';
import ban1 from '../images/ban1.webp';
import ban6 from '../images/ban6.webp';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from 'react';
import axios from 'axios';



const Home = () => {
  const [mydata, setMydata] = useState([]);

  const loadData = async () => {
    let api = "http://localhost:3000/products";
    const response = await axios.get(api);
    console.log(response.data);
    setMydata(response.data);
  }

  useEffect(() => {
    loadData();
  }, [])
const ans= mydata.map((key)=>{
   return(
    <>
        <Card style={{ width: '18rem', margin:"10px" }}>
      <Card.Img variant="top" src={key.images}  height="200" />
      <Card.Body>
        <Card.Title>{key.brand}</Card.Title>
        <Card.Text>
           {key.name}
           <br />
           <span style={{color:"red"}}>Category : {key.category}</span> 
           <br />
           <span style={{color:"navy" , fontWeight:"bold"}}>Price : {key.price}</span> 
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>

    </>
   )
})


  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img src={ban1} width="100%" height="500" />
          <Carousel.Caption>
            <h2>Nike Shoe Store</h2>
            <h1> <b id='sh'>Shoe</b> <b id='par'>Collections</b></h1>
            <button id='btn'>Buy Now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={ban2} width="100%" height="500" />
          <Carousel.Caption>
            <h2>Nike Shoe Store</h2>
            <h1> <b id='sh'>Shoe</b> <b id='par'>Collections</b></h1>
            <button id='btn'>Buy Now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={ban3} width="100%" height="500" />
          <Carousel.Caption>
            <h2>Nike Shoe Store</h2>
            <h1> <b id='sh'>Shoe</b> <b id='par'>Collections</b></h1>
            <button id='btn'>Buy Now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={ban4} width="100%" height="500" />
          <Carousel.Caption>
            <h2>Nike Shoe Store</h2>
            <h1> <b id='sh'>Shoe</b> <b id='par'>Collections</b></h1>
            <button id='btn'>Buy Now</button>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img src={ban6} width="100%" height="500" />
          <Carousel.Caption>
            <h2>Nike Shoe Store</h2>
            <h1> <b id='sh'>Shoe</b> <b id='par'>Collections</b></h1>
            <button id='btn'>Buy Now</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h1>Nike Shoe Store</h1>
      <h1> Out Top Collections</h1>




      <div id='topshoes' style={{ width: "90%", margin: "auto" }}>

        {ans}

      </div>


    </>
  )
}
export default Home;