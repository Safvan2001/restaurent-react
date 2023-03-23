import React from 'react'
import { useState,useEffect } from 'react'
import RestCard from './RestCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RestaurentlistAction } from '../actions/restaurentAction';
import { useDispatch,useSelector } from 'react-redux';


function Restaurentlist() {
   //  const [allrestaurent,setallrestaurent]=useState([])
// const dispatch = useDispatch()





 // function to api call for data inside json file
//  const getrestaurentdata=async ()=>{
//     await fetch('/restaurants.json').then(data=>{data.json().then(result=>{
//         // console.log(result);
//         setallrestaurent(result.restaurants)
//       //   console.log();
//     })
//  })
// }
//  console.log(allrestaurent);





const dispatch=useDispatch()
const result = useSelector(state=>state.restaurantReducer)
const {restaurantList}=result

 useEffect(()=>{
   // getrestaurentdata()
dispatch(RestaurentlistAction())

 },[])
 
    return (

   

    <Row>
   {
      restaurantList.map(item=>(
         <RestCard data={item}/>
      ))
   }
    </Row>
  )
}

export default Restaurentlist