import React, { useState,useEffect } from "react";
import Hamburger from "hamburger-react";
import axios from "axios";
import Card from 'react-bootstrap/Card'
const Weddings = () => {
  const [isOpen, setOpen] = useState(false);


  useEffect(() => {

    axios.post(`http://localhost:5000/places/weddings`)
    .then((result) => {
      if (result.status == 200) {
        console.log(result.data);
        setOpen(result.data[0].Img)
      }
    })
    .catch((err) => {
      
    });
    
  },[])

  return (
    <>
    <div style={{backgroundImage:`${isOpen}`,height:"200px"}}></div>
      <Card>
    <Card.Img variant="top" src={isOpen} style={{height:"200px"}} />
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
  <Card>
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
    <Card.Img variant="bottom" src="holder.js/100px180" />
  </Card>
  
    </>
  );
};
export default Weddings;
