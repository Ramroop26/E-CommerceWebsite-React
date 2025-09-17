import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.webp';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';
import axios from "axios";

import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../CSS/Manu.css";



const Menu = () => {

  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const navigate = useNavigate();
  

  const CartData= useSelector(state=>state.mycart.cart);
  const CartLength= CartData.length;
  



  const handleSubmit = async (e) => {
    e.preventDefault();
    let api = `http://localhost:3000/admin/?adminid=${email}`;

    const response = await axios.get(api);
    console.log(response.data);

    if (response.data.length >= 1) {
      if (response.data[0].password == password) {
        navigate("/admin")
      }
      else {
        alert("Invalid Password");
      }
    }
    else {
      alert("Invalid Email!");
    }
  }


  return (
    <>


      <div id='mainmenu'>
        <div id="logo">
          <img src={logo} width="100" height="40" />
        </div>
        <div id='navbar'>
          <Navbar >
            <Container >
              <Nav className="me-auto">
                
                <Nav.Link as={Link} to="home" id='home'>Home</Nav.Link>
                <Nav.Link href="#man" id='man'>Man</Nav.Link>
                <Nav.Link href="#women" id='women'>Women</Nav.Link>
                <Nav.Link href="#kids" id='kids'>Kids</Nav.Link>
                <Nav.Link href="#customize" id='customize'>Customize</Nav.Link>
                <Nav.Link href="#contact" id='contacts'>Contacts</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>

        <div id="rightmen">
          <div className="cart-wrapper">
            <FaShoppingCart className="cart-icon" onClick={()=>{navigate("/mycart")}} style={{cursor:"pointer"}}  />
            <span className="cart-count">{CartLength}</span>
          </div>
          <span className="cart-text">Cart</span>
        </div>



        <div id='adminbtn'>
          <Button
            onClick={handleShow}
            style={{   color: "white", position: "relative", backgroundColor:"rgb(28, 28, 28)" }} >
            Admin Login
          </Button>
        </div>


      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Admin Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Login
            </Button>
          </Form>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


    </>
  )
}
export default Menu;