import Image from "next/image"
import iphone from './assets/iphone.png'
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


{/* main section part 2 grid ka manjan  */}



<div className="main-container flex">

  <div className="sub-main-one">

<div className="box one"></div>
<div className="box"></div>
<div className="box"></div> 
<div className="box"></div> 

  </div>
<div className="sub-main-two"></div>
</div >


  </div>
  </>
)

export default page