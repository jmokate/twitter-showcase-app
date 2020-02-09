import React from "react";
import { Container, Button } from "react-bootstrap";

function Home() {
  const homeIMG =
    "https://images.unsplash.com/photo-1517816428104-797678c7cf0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";

  return (
    <div>
      <Container className='btn-container'>
        <Button variant='outline-primary' className='home-btn'>
          Home
        </Button>
        <Button variant='outline-primary' className='search-btn'>
          Search
        </Button>
        <Button variant='outline-primary' className='random-btn'>
          Random Tweets
        </Button>
      </Container>
      <img className='homeIMG' src={homeIMG} alt='megaphone' />
    </div>
  );
}

export default Home;
