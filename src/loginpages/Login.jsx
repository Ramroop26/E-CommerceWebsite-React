// // src/components/AuthForm.js
// import React, { useState } from 'react';
// import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

// const AuthForm = () => {
//   const [isLogin, setIsLogin] = useState(true);

//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`${isLogin ? 'Logging in' : 'Registering'}...`);
//   };

//   return (
//     <Container className="d-flex justify-content-center align-items-center vh-100">
//       <Row>
//         <Col>
//           <Card style={{ width: '24rem' }}>
//             <Card.Body>
//               <h3 className="text-center mb-4">{isLogin ? 'Login' : 'Register'}</h3>
//               <Form onSubmit={handleSubmit}>
//                 {!isLogin && (
//                   <>
//                     <Form.Group className="mb-3" controlId="formUsername">
//                       <Form.Label>Username</Form.Label>
//                       <Form.Control type="text" placeholder="Enter username" required />
//                     </Form.Group>
//                   </>
//                 )}

//                 <Form.Group className="mb-3" controlId="formEmail">
//                   <Form.Label>Email address</Form.Label>
//                   <Form.Control type="email" placeholder="Enter email" required />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formPassword">
//                   <Form.Label>Password</Form.Label>
//                   <Form.Control type="password" placeholder="Password" required />
//                 </Form.Group>

//                 {!isLogin && (
//                   <Form.Group className="mb-3" controlId="formConfirmPassword">
//                     <Form.Label>Confirm Password</Form.Label>
//                     <Form.Control type="password" placeholder="Confirm password" required />
//                   </Form.Group>
//                 )}

//                 <Button variant="primary" type="submit" className="w-100">
//                   {isLogin ? 'Login' : 'Register'}
//                 </Button>
//               </Form>

//               <div className="text-center mt-3">
//                 {isLogin ? (
//                   <p>
//                     Don't have an account?{' '}
//                     <span
//                       onClick={toggleForm}
//                       style={{ color: 'blue', cursor: 'pointer' }}
//                     >
//                       Register
//                     </span>
//                   </p>
//                 ) : (
//                   <p>
//                     Already have an account?{' '}
//                     <span
//                       onClick={toggleForm}
//                       style={{ color: 'blue', cursor: 'pointer' }}
//                     >
//                       Login
//                     </span>
//                   </p>
//                 )}
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default AuthForm;
