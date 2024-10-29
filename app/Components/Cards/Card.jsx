"use client"
import Image from "next/image"
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";


const Card = (props) => {
 const [check , setcheck] = useState(false)
const changeColor = ()=>{

    setcheck(!check)
}


let heartIcon;

if (check) {
  heartIcon =  <FaHeart className={`heart text-red-600`} />
  
} else {
  heartIcon = <CiHeart  className="heart"/> 
}



  return ( 



    <div className="card-container">

    <div className="w-[100%] h-7 flex justify-end p-4" onClick={changeColor}>{heartIcon}</div>
    <div className="flex justify-center items-center mt-12"><Image src={props.pic} className="w-56 product"/></div>
    <div className="w-[100%] flex justify-center items-center mt-5">
    
    <h1 className="text-2xl text-center product-name">{props.title}</h1>
    
    </div>
    <div className="w-[100%] flex justify-center items-center">
    <span className="text-3xl mt-6 price"><b>{props.price}</b></span>
    </div>
    <div className="w-[100%] mt-7 buy-btn flex justify-center items-center">
      <button >Buy Now</button>
    </div>
    </div>
  )
    
}

export default Card