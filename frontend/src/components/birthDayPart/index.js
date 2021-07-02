import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "./birthDayPart.css";
import ShowPlaces from "../showPlaces";
const BirthDayParty = () => {
  const history = useHistory();
  const [places, setPlaces] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/places/type/birthDayParty`)
      .then((result) => {
        if (result.status == 200) {
          setPlaces(result.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
<div className="funeralsPlace">
        <ShowPlaces places={places} />
      </div>    </>
  );
};

export default BirthDayParty;