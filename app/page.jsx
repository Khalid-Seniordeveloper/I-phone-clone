import Image from "next/image"
import iphone from './assets/iphone.png'
import PS  from './assets/PS.png'
import handfree from './assets/handfree.png'
import vision from './assets/vision.png'
import macbook from './assets/macbook.png'

import mactwo from './assets/mactwo.png'
import handsfreetwo from './assets/handsfreetwo.png'
import visiontwo from './assets/visiontwo.png'
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
<div className="station-container"><Image src={visiontwo} className="vision-2"/></div>

<div className="free-detail flex justify-center flex-col items-start">

<h1 className="text-white yes">Apple <br /> Vision  <span>Pro</span></h1>
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


  </div>
  </>
)

export default page