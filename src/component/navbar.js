import React,{useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useSelector,useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import {NavLink} from 'react-router-dom';
import {DLT} from '../Redux/Action/action';
function Navbars() {
  
  const getData=useSelector((state)=>state.cartReducer.carts)
  console.log(getData);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //delte fucnction
  const dispatch=useDispatch();
  const del=(id)=>{
    dispatch(DLT(id))
  }

  /*price total*/
  const [price,setPrice]=useState(0);
  const total=()=>{
    let price=0;
    getData.map((ele,i)=>{
       price=ele.price*ele.qnty+price;
    });
    setPrice(price); 
  }
  useEffect(()=>{
   total();
  },[total])
  return (
    <>
      <Navbar bg="dark" variant="dark" className="fixed-top">
        <Container>
          <Link to="/" class="text-decoration-none text-white mx-3">
            Add to Cart
          </Link>
          <Nav className="me-auto">
            <Link to="/cart" class="text-decoration-none text-white mx-3">
              Home
            </Link>
            <Link to="/page" class="text-decoration-none text-white mx-3">
              Page
          </Link>
          </Nav>
          <Badge
            badgeContent={getData.length}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i class="fa-solid fa-cart-shopping text-white"></i>
          </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          className="menu"
        >
       
        {
          getData.length ?
          <div className="card_details" style={{width:"400px"}}>
           <Table>
             <thead>
               <tr>
                <th>Photos</th>
                <th>Restorent</th>
               </tr>
               <tr>
               </tr>
             </thead>
             <tbody>
              {
                  getData.map((e)=>{
                    return(
                      <>
                        <tr>
                         <td>
                         <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                          <img src={e.imgdata} style={{width:"5rem",height:"5rem"}} alt="" />
                         </NavLink>
                         </td>
                         <td>
                           <p>{e.rname}</p>
                           <p><strong>Price:</strong>₹ {e.price}</p>
                           <p><strong>Quantity:</strong>{e.qnty}</p>
                         </td>
                         <td>
                         <p style={{color:"red",fontSize:20,}} onClick={()=>del(e.id)}>
                            <i className="fas fa-trash"></i>
                           </p> 
                         </td>
                        </tr>
                      </>
                    )
                  })
              }
              <p className="text-center"><strong>Total:₹ {price}</strong></p>
             </tbody>
           </Table>
          </div>:
          <div className="cart-details">
           <i className="fas fa-close smallclose"></i>
           <p>Your Cart is Empty</p>
         </div>
        }
        </Menu>
      </Navbar>
    </>
  );
}

export default Navbars;
