
import Image from "next/image"
import logo from "./Assets/logo.png"
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
const Navbar  = () => {
  return (
    <div>
        
        <div className='main-navbar-container flex justify-center items-center gap-20'>
   
   <div ><Image src={logo} className="logo"/></div>
  <div className="relative inline-block input"><input type="text" placeholder="Search" className="inp" />
  <CiSearch className="icon" /> </div>

  <div>
 
 <ul className="flex list-none text-2xl gap-20 nav-link">

<li>Home</li>
<li>About Us</li>
<li>Contact</li>
<li>Blog</li>

 </ul>


  </div>
  <div className="hidden"><FaBars/></div>
<div>

<ul className="flex justify-center icon-con items-center gap-9 text-3xl icon-container">
<li><FaRegHeart /></li>
<li><FaShoppingCart />

</li>
<li><FaUserAlt />
</li>
</ul>

</div>
<div>



</div>


        </div>

    </div>
  )
}

export default Navbar