import React, {useState,useEffect } from 'react'
import {useNavigate,useParams } from 'react-router-dom';
import {DLT,ADD,REMOVE} from '../Redux/Action/action';
import { useSelector,useDispatch } from "react-redux";
const CardDetails = () => {
  const [data,setData]=useState([]);
  const {id}=useParams();

  const getData=useSelector((state)=>state.cartReducer.carts)
  console.log(getData);

  const compare=()=>{
    let comparedata=getData.filter((e)=>{
      return e.id==id;
    });
    console.log(comparedata);
    setData(comparedata);
  }
  
  /*remove quntity*/
  const remove=(item)=>{
    dispatch(REMOVE(item));
  }

  /*add data*/
  const send=(e)=>{
    dispatch(ADD(e));
  }

  const history=useNavigate();
  /*card delete*/
  const dispatch=useDispatch();
  const del=(id)=>{
    dispatch(DLT(id))
    history("/")
  }

  useEffect(()=>{
    compare();
  },[id]);
  return (
    <>
     <div className='container'>
       <h2 className='text-center'>Iteme Details page</h2>
     </div>
     <section className='container'>
       <div className='itemDetails'>
        {
          data.map((item,index)=>{
            return(
              <>
              <div className='item-img'>
              <img src={item.imgdata}/>
             </div>
             <div className='details'>
              <table>
               <tr>
                <td>
                 <p><strong>Restorent</strong>{item.rname}</p>
                 <p><strong>Price</strong>{item.price}</p>
                 <p><strong>Dishes</strong>{item.address}</p>
                 <p><strong>Quantity</strong>{item.qnty}</p>
                 <p><strong>Total</strong>{item.price*item.qnty}</p>
                 <div className="mt-5 d-flex justify-content-center">
                  <button onClick={item.qnty<=1? ()=>del(item.id):()=>remove(item)}>-</button>
                   <p>{item.qnty}</p>
                  <button onClick={()=>send(item)}>+</button>
                 </div>
                </td>
                <td>
                  <p><strong>Rating :</strong> <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}> {item.rating}★	</span></p>
                  <p><strong>Order Review :</strong> <span >{item.somedata}	</span></p>
                  <p onClick={()=>del(item.id)}><strong>Remove :</strong> <span ><i className='fas fa-trash' onClick="" style={{color:"red",fontSize:20,cursor:"pointer"}}></i>	</span></p>
                </td>
               </tr>
              </table>
             </div>        
              </>
            )
          })
        }
        
       </div>
     </section>
    </>
  )
}

export default CardDetails