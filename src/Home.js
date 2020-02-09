import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

function Home() {
  const homeIMG =
    "https://images.unsplash.com/photo-1517816428104-797678c7cf0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";

  return (
    <Container className='btn-container'>
      <Row>
        <Col>
          <Button variant='outline-primary' size='lg' className='home-btn'>
            Home
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant='outline-primary' size='lg' className='search-btn'>
            Search
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant='outline-primary' size='lg' className='random-btn'>
            Random Tweets
          </Button>
        </Col>
      </Row>

      <img
        class='img-responsive'
        className='homeIMG'
        src={homeIMG}
        alt='megaphone'
      />
    </Container>
  );
}

export default Home;
