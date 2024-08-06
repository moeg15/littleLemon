import './stlyes/headerstyles.css'
import {Link} from "react-router-dom"
export default function Header(){
  return(
    <>
    <nav>
    <img src="../../logo.jpg" alt="a lemon" />
    <ul>
      <li><Link to={"/"}>home</Link></li>
      <li><Link to={"/about"}>about</Link></li>
      <li><Link to={"/menu"}>menu</Link></li>
      <li><Link to={"/reservation"}>reservation</Link></li>
      <li><Link to={"/orderOnline"}>order online</Link></li>
      <li><Link to={"/login"}>login</Link></li>
    </ul>
    </nav>
    
    </>
  )
}