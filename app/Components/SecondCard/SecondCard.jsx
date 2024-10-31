import Image from "next/image"

const SecondCard = (props) => {
  return (
    <div className="sub-second-main" style={{ backgroundColor: props.bgColor }}>

    <div className="w-[100%] overflow-hidden h-[25rem] flex justify-center items-center"  ><Image src={props.pic} className="w-[25rem] mt-20 overflow-hidden"/></div>
    
    <div className="nested-for-detail flex flex-col items-start justify-start gap-8">
    
    <h1 className="text-3xl" style={{ color: props.Color }}>{props.title}</h1>
    <p>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
    <button className="btn-border"  style={{ color: props.btncolor,
      border : props.btnborder
     }}>Shop Now</button>
    </div>
     </div>
  )
}

export default SecondCard