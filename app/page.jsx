import Image from "next/image"
import iphone from './assets/iphone.png'
import PS  from './assets/PS.png'
import handfree from './assets/handfree.png'
import vision from './assets/vision.png'
import macbook from './assets/macbook.png'
import { IoIosArrowForward } from "react-icons/io";
import mactwo from './assets/mactwo.png'
import handsfreetwo from './assets/handsfreetwo.png'
import visiontwo from './assets/visiontwo.png'
import { IoIosArrowBack } from "react-icons/io";
import Computers from './assets/Computers.png'
import Headphones from './assets/Headphones.png'
import Phones from './assets/Phones.png'
import Gaming from './assets/Gaming.png'
import watch from './assets/watch.png'
import Cameras from './assets/Cameras.png'
import cardphone from './assets/cardphone.png'
import cardcamera from './assets/cardcamera.png'
import cardwatch from './assets/cardwatch.png'
import galaxyimage from './assets/galaxyimage.png'
import ipad from './assets/ipad.png'
import galaxyphone from './assets/galaxyphone.png'
import cardairdots from './assets/cardairdots.png'
import cardhandsfree from './assets/cardhandsfree.png'
import subone from './assets/subone.png'

import { CiHeart } from "react-icons/ci";
const page = () => (
  <>
  <div>

<div className="first-container flex justify-center gap-24">


<div className="first-sub-container flex justify-center items-center" >
<div className="info">
<h6>Pro.Beyond.</h6>
<h1>I Phone 14 <span>Pro</span></h1>
<p>Created to change everything for the better. For everyone</p>
<button>Shop Now</button>
</div>
</div>

<div className="second-sub-container flex justify-center items-center overflow-hidden">
<Image src={iphone} className='iphone'/>
  
</div>
</div>


{/* second main section  */}


<div className="flex  most-main flex-wrap">

<div className="sub-container ">

<div className="sub-one-container flex justify-start ">

<div className="station-container flex justify-end items-end"><Image src={PS} className="play-station"/></div>
<div className="station-detail mt-20 gap">

<h1>Playstation 5</h1>
<p>Incredibly powerful CPUs, GPUs,  and an SSD with integrated I/O will redefine your PlayStation experience</p>

</div>
</div>

 
<div className="sub-two-container flex">

<div className="sub-two-one flex grey">

<div className="station-container"><Image src={handfree} className="handfree"/></div>
<div className="station-container"><Image src={handsfreetwo} className="handfree-2"/></div>
<div className="free-detail flex justify-center flex-col items-start">

<h1 className="yes">Apple Airpods <span>Max</span></h1>



<h1 className="no">Apple Airpods <span>Max</span></h1>
<p>Computational audio. Listen, it's powerful</p>

</div>
</div>
<div className="sub-two-one flex vision-color">

<div className="vision-container flex justify-centera items-center "><Image src={vision} className="vision"/></div>
<div className="station-container vision-pack"><Image src={visiontwo} className="vision-2"/></div>

<div className="free-detail flex justify-center flex-col items-start">

<h1 className="text-white yes">Apple Vision  <span>Pro</span></h1>
<p>An immersive way to experience entertainment</p>

</div>
</div>

</div>

</div>
<div className="sub-container-two-main flex ">


<div className="sub-one-main-two flex justify-center items-center ">

<div className="free-detail flex justify-center flex-col items-start p-40">

<h1>Macbook <span>Air</span></h1>
<p>The new 15‑inch MacBook Air makes  room for more of what you love with a  spacious Liquid Retina display.</p>
<div className="shop-btn"><button>Shop Now</button></div>
</div>

</div>
<div className="sub-two-main-two flex justify-center items-center">
  <div className="flex  items-center">
    <Image src={macbook} className="mac" />
    
    <Image src={mactwo} className="mac-2" />
  </div>
</div>

</div>


</div>


{/* second section start  */}


<div className="flex items-center flex-col justify-between head-third-main">

<div className="flex justify-between items-center w-[100%] browse-container p-0 mt-5">

<h1 className="text-3xl browse">Browse By Category</h1>
<div className="flex gap-10 justify-center items-center"><IoIosArrowBack className="text-3xl browse-icon" />   <IoIosArrowForward className="text-3xl browse-icon"  /> </div>


</div>

<div className="product-third-container flex  justify-between flex-wrap  ">

<div className="p-container flex flex-col items-center justify-center gap-5"><Image src={Phones}/>  <h1 className="text-2xl ">Phones</h1></div>
<div className="p-container flex flex-col items-center justify-center gap-5"><Image src={Headphones}/>  <h1 className="text-2xl ">HeadPhones</h1></div>
<div className="p-container flex flex-col items-center justify-center gap-5"><Image src={Gaming}/>  <h1 className="text-2xl ">Gaming</h1></div>
<div className="p-container flex flex-col items-center justify-center gap-5"><Image src={watch}/>  <h1 className="text-2xl ">Watch</h1></div>
<div className="p-container flex flex-col items-center justify-center gap-5"><Image src={Computers}/>  <h1 className="text-2xl ">Computers</h1></div>
<div className="p-container flex flex-col items-center justify-center gap-5"><Image src={Cameras}/>  <h1 className="text-2xl ">Gaming</h1></div>


</div>


<div className="second-head gap-10 flex justify-start items-center w-[100%] mt-14 bg-white  border-black">


<button className="for-underline"><h1 className='text-3xl'>New Arrival</h1></button>
<h1 className='text-2xl'>Bestseller</h1>
<h1  className='text-2xl'>Featured Products</h1>
</div>






<div className="main-one-card-container w-[100%] mt-16 flex flex-wrap justify-between">

<div className="card-container">

<div className="w-[100%] h-7  flex justify-end p-4"><CiHeart className="heart" /></div>
<div className="flex justify-center items-center mt-12"><Image src={cardphone} className="w-56 product"/></div>
<div className="w-[100%] flex justify-center items-center mt-5">

<h1 className="text-2xl text-center product-name">Apple Iphone 14 Pro Max <br /> 128GB Deep Purple </h1>

</div>
<div className="w-[100%] flex justify-center items-center">
<span className="text-3xl mt-6 price"><b>$900</b></span>
</div>
<div className="w-[100%] mt-7 buy-btn flex justify-center items-center">
  <button>Buy Now</button>
</div>
</div>



<div className="card-container">

<div className="w-[100%] h-7  flex justify-end p-4"><CiHeart className="heart" /></div>
<div className="flex justify-center items-center mt-12"><Image src={cardcamera} className="w-56 product"/></div>
<div className="w-[100%] flex justify-center items-center mt-5">

<h1 className="text-2xl text-center product-name">Apple Iphone 14 Pro Max <br /> 128GB Deep Purple </h1>

</div>
<div className="w-[100%] flex justify-center items-center">
<span className="text-3xl mt-6 price"><b>$900</b></span>
</div>
<div className="w-[100%] mt-7 buy-btn flex justify-center items-center">
  <button>Buy Now</button>
</div>
</div>




<div className="card-container">

<div className="w-[100%] h-7  flex justify-end p-4"><CiHeart className="heart" /></div>
<div className="flex justify-center items-center mt-12"><Image src={cardwatch} className="w-56 product"/></div>
<div className="w-[100%] flex justify-center items-center mt-5">

<h1 className="text-2xl text-center product-name">Apple Iphone 14 Pro Max <br /> 128GB Deep Purple </h1>

</div>
<div className="w-[100%] flex justify-center items-center">
<span className="text-3xl mt-6 price"><b>$900</b></span>
</div>
<div className="w-[100%] mt-7 buy-btn flex justify-center items-center">
  <button>Buy Now</button>
</div>
</div>




<div className="card-container">

<div className="w-[100%] h-7  flex justify-end p-4"><CiHeart className="heart" /></div>
<div className="flex justify-center items-center mt-12"><Image src={cardhandsfree} className="w-56 product"/></div>
<div className="w-[100%] flex justify-center items-center mt-5">

<h1 className="text-2xl text-center product-name">Apple Iphone 14 Pro Max <br /> 128GB Deep Purple </h1>

</div>
<div className="w-[100%] flex justify-center items-center">
<span className="text-3xl mt-6 price"><b>$900</b></span>
</div>
<div className="w-[100%] mt-7 buy-btn flex justify-center items-center">
  <button>Buy Now</button>
</div>
</div>


</div>
<div className="main-one-card-container w-[100%]  flex flex-wrap justify-between mt-10">

<div className="card-container">

<div className="w-[100%] h-7  flex justify-end p-4"><CiHeart className="heart" /></div>
<div className="flex justify-center items-center mt-12"><Image src={cardairdots} className="w-56 product"/></div>
<div className="w-[100%] flex justify-center items-center mt-5">

<h1 className="text-2xl text-center product-name">Apple Iphone 14 Pro Max <br /> 128GB Deep Purple </h1>

</div>
<div className="w-[100%] flex justify-center items-center">
<span className="text-3xl mt-6 price"><b>$900</b></span>
</div>
<div className="w-[100%] mt-7 buy-btn flex justify-center items-center">
  <button>Buy Now</button>
</div>
</div>



<div className="card-container">

<div className="w-[100%] h-7  flex justify-end p-4"><CiHeart className="heart" /></div>
<div className="flex justify-center items-center mt-12"><Image src={galaxyimage} className="w-56 product"/></div>
<div className="w-[100%] flex justify-center items-center mt-5">

<h1 className="text-2xl text-center product-name">Apple Iphone 14 Pro Max <br /> 128GB Deep Purple </h1>

</div>
<div className="w-[100%] flex justify-center items-center">
<span className="text-3xl mt-6 price"><b>$900</b></span>
</div>
<div className="w-[100%] mt-7 buy-btn flex justify-center items-center">
  <button>Buy Now</button>
</div>
</div>




<div className="card-container">

<div className="w-[100%] h-7  flex justify-end p-4"><CiHeart className="heart" /></div>
<div className="flex justify-center items-center mt-12"><Image src={galaxyphone} className="w-56 product"/></div>
<div className="w-[100%] flex justify-center items-center mt-5">

<h1 className="text-2xl text-center product-name">Apple Iphone 14 Pro Max <br /> 128GB Deep Purple </h1>

</div>
<div className="w-[100%] flex justify-center items-center">
<span className="text-3xl mt-6 price"><b>$900</b></span>
</div>
<div className="w-[100%] mt-7 buy-btn flex justify-center items-center">
  <button>Buy Now</button>
</div>
</div>




<div className="card-container">

<div className="w-[100%] h-7  flex justify-end p-4"><CiHeart className="heart" /></div>
<div className="flex justify-center items-center mt-12"><Image src={ipad} className="w-56 product"/></div>
<div className="w-[100%] flex justify-center items-center mt-5">

<h1 className="text-2xl text-center product-name">Apple Iphone 14 Pro Max <br /> 128GB Deep Purple </h1>

</div>
<div className="w-[100%] flex justify-center items-center">
<span className="text-3xl mt-6 price"><b>$900</b></span>
</div>
<div className="w-[100%] mt-7 buy-btn flex justify-center items-center">
  <button>Buy Now</button>
</div>
</div>


</div>
</div>

<div className="second-main-card-container flex ">
 <div className="sub-second-main">

<div className="w-[100%] overflow-hidden h-[25rem] flex justify-center items-center "><Image src={subone} className="w-[25rem] mt-20 overflow-hidden"/></div>

<div className="nested-for-detail flex flex-col items-start justify-start gap-8">

<h1 className="text-3xl">Popular Products</h1>
<p>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
<button>Shop Now</button>
</div>
 </div>
 <div className="sub-second-main">

<div className="w-[100%] overflow-hidden h-[25rem] flex justify-center items-center "><Image src={subone} className="w-[25rem] mt-20 overflow-hidden"/></div>

<div className="nested-for-detail flex flex-col items-start justify-start gap-8">

<h1 className="text-3xl">Popular Products</h1>
<p>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
<button>Shop Now</button>
</div>
 </div>


 <div className="sub-second-main">

<div className="w-[100%] overflow-hidden h-[25rem] flex justify-center items-center "><Image src={subone} className="w-[25rem] mt-20 overflow-hidden"/></div>

<div className="nested-for-detail flex flex-col items-start justify-start gap-8">

<h1 className="text-3xl">Popular Products</h1>
<p>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
<button>Shop Now</button>
</div>
 </div>


 <div className="sub-second-main">

<div className="w-[100%] overflow-hidden h-[25rem] flex justify-center items-center "><Image src={subone} className="w-[25rem] mt-20 overflow-hidden"/></div>

<div className="nested-for-detail flex flex-col items-start justify-start gap-8">

<h1 className="text-3xl">Popular Products</h1>
<p>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
<button>Shop Now</button>
</div>
 </div>
</div>

  </div>
 

  </>
)

export default page