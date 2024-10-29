import Image from "next/image"
import flogo from "./Assets/flogo.png"


const Footer = () => {
  return (
<div className="footer"> 

  
<div className="footer-main-container flex flex-wrap justify-between  h-[100%]  ">

<div className="mt-[3rem] footer-one" >
<ul className="flex flex-col gap-12 justify-center ">

<li><Image src={flogo} className="footer-logo"/></li>
<li className="description-footer text-2xl">We are a residential interior design firm located in Portland. <br /> Our boutique-studio offers more than</li>
</ul>
</div>

<div className="mt-[3rem] footer-two" >
<ul className="flex flex-col gap-5 justify-center">

<li><h1 className="text-[2.3rem] text-white">Services</h1></li>
<li className="description-footer text-2xl">Bonus Programs</li>
<li className="description-footer text-2xl">Gifts Cards</li>
<li className="description-footer text-2xl">Credits And Payments</li>
<li className="description-footer text-2xl">Services Contracts</li>
<li className="description-footer text-2xl">Non Crash Account</li>
<li className="description-footer text-2xl">Payment</li>


</ul>
</div>

<div className="mt-[3rem]" >
<ul className="flex flex-col gap-5 justify-center">

<li><h1 className="text-[2.3rem] text-white">Assistance to the buyer</h1></li>
<li className="description-footer text-2xl">Find an Order</li>
<li className="description-footer text-2xl">Term of delivery</li>
<li className="description-footer text-2xl">Exchange and return</li>
<li className="description-footer text-2xl">Guarantee</li>
<li className="description-footer text-2xl">Frequently asked questions</li>
<li className="description-footer text-2xl">Terms of use of the site</li>

</ul>
</div>


</div>


<div className="w-[100%] my flex justify-center items-center credit">
  <h1 className="text-2xl ">Complete responsive developed by  Muhammad Khalid GiAiC  Sunday Morning (Sir Anas)</h1>
</div>




</div>



)
}

export default Footer