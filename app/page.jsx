import Image from "next/image"
import iphone from './assets/iphone.png'
import PS  from './assets/PS.png'
import handfree from './assets/handfree.png'
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


<div>

<div className="sub-container">

<div className="sub-one-container flex justify-start ">

<div className="station-container flex justify-end items-end"><Image src={PS} className="play-station"/></div>
<div className="station-detail mt-20">

<h1>Playstation 5</h1>
<p>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience</p>

</div>
</div>

 
<div className="sub-two-container flex">

<div className="sub-two-one">

<div><Image src={handfree} className="handfree"/></div>

</div>
<div className="sub-two-one"></div>

</div>

</div>
<div></div>




</div>


  </div>
  </>
)

export default page