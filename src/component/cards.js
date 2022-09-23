import React,{useState} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardsData from "./cardsData";
import {ADD} from '../Redux/Action/action';
import { useDispatch } from "react-redux";
const Cards = () => {
  const [data, setData] = useState(CardsData);
 
  const dispatch=useDispatch();
   
  const send=(e)=>{
    console.log(e);
    dispatch(ADD(e));
  }
  return (
    <>
      <div className="container mt-3">
        <h3 className="text-center mt-5">Add to Cart</h3>
        <div className="row">
          {data.map((item, index) => {
            return (
              <>
                <div className="col-lg-3 mt-5 mb-3">
                  <Card className="cards" style={{ width: "18rem", padding:"11px 10px", marginRight:"10px" }}>
                    <Card.Img variant="top" src={item.imgdata} style={{height:'16rem'}} />
                    <Card.Body>
                      <Card.Title>{item.rname}</Card.Title>
                      <Card.Text>
                       Price:{item.price}
                      </Card.Text>
                      <div className="button_div d-flex justify-content-center">
                        <Button variant="primary" onClick={()=>send(item)}>Add to Cart </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cards;
