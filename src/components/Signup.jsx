import React from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

const Signup = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#f7f9fc', textAlign: 'center' }}>
      <Row className="w-100">
        <Col md={6} lg={4} className="mx-auto">
          <Card className="shadow-lg rounded-3">
            <Card.Body className="p-4">
              <h2 className="text-center mb-4" style={{ color: '#0d6efd', fontWeight: 'bold' }}>Signup</h2>
              <Form style={{}}>
                <Form.Group controlId="formBasicName" className="mb-3" style={{ marginLeft: '51px' }}>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your full name"
                    className="rounded-2"
                    style={{ borderColor: '#ced4da', margin: '5px', padding: '5px' }}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    className="rounded-2"
                    style={{ borderColor: '#ced4da', margin: '5px', padding: '5px' }}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mb-4" style={{ marginLeft: '29px' }}>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    className="rounded-2"
                    style={{ borderColor: '#ced4da', margin: '5px', padding: '5px' }}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 py-2 rounded-2"
                  style={{
                    background: 'linear-gradient(45deg, #0d6efd, #6610f2)',
                    border: 'none',
                    transition: '0.3s',
                    padding: '5px',
                    width: '80px',
                    marginLeft: '50px',
                    marginTop: '5px',
                  }}
                  onMouseOver={(e) => e.target.style.background = '#6610f2'}
                  onMouseOut={(e) => e.target.style.background = 'linear-gradient(45deg, #0d6efd, #6610f2)'}
                >
                  Signup
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
