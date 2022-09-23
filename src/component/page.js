import React from "react";
import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import {DLT,ADD,REMOVE} from '../Redux/Action/action';
function Page() {
  const getData = useSelector((state) => state.cartReducer.carts);
  console.log(getData);
 
  //delte fucnction
  const dispatch=useDispatch();
  const del=(id)=>{
    dispatch(DLT(id))
  }
  /*increment*/
  const send=(e)=>{
    dispatch(ADD(e));
  }
  /*remove quntity*/
  const remove=(item)=>{
    dispatch(REMOVE(item));
  }
  return (
    <>
      <div className="mt-5">
        <h3>Page</h3>
        <div className="container">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Product</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Inc</th>
                <th>Quntity</th>
                <th>Dec</th>
                <th>Total Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
            {
                getData.map((item,index)=>{
                    return(
                        <>
                        <tr kye={index}>
                        <td>{index+1}</td>
                        <td><img src={item.imgdata} style={{width:"100px",height:"100px"}} alt="product"/></td>
                        <td>{item.rname}</td>
                        <td>{item.price}</td>
                        <td><i class="fas fa-plus-circle" onClick={()=>send(item)}></i></td>
                        <td>{item.qnty}</td>
                        <td><i class="fas fa-minus-circle" onClick={item.qnty<=1? ()=>del(item.id):()=>remove(item)}></i></td>
                        <td>{item.price*item.qnty}</td>
                        <td><i class="fas fa-trash-alt" onClick={()=>del(item.id)}></i></td>
                      </tr>
                        </>
                    )
                })
            }
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}
export default Page;
