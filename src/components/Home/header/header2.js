import "./header.css"
import "./../../../App.css"
import photo from "./../../../images/Frame (1).png"
import photo2 from "./../../../images/download.png"
import { FaAngleDown } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { BsList } from "react-icons/bs";
import { useSelector, useDispatch } from 'react-redux'
import {icon} from "./../../../features/listslice"
import { useState } from "react";

const list=["Women","men","Home","Jewelry"]

export default function Header2() { 
    const [active,setactive]=useState(null)
    const count = useSelector((state) => state.result.result)
    const numcart = useSelector((state) => state.cart.numshop)

    const dispatch = useDispatch()
    return(
        <div className="container" style={{paddingTop:"25px",position:"relative",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <div className="absolut" style={{display:"flex",alignItems:"center",justifyContent:"space-between",listStyle:"none"}}>
                {list.map((el,i)=>{
                    return(
                        <Link to="/details">
                            <div className={active===i?"activee":""} onClick={()=>{setactive(i)}}>
                                <li style={{padding:"10px 10px",color:"black",cursor:"pointer",fontSize:"23px"}} key={i}>{el}</li>
                            </div>
                        </Link>
                    )
                })}
            </div>
            <div className="list" onClick={()=>{dispatch(icon())}}>
                <BsList />
            </div>
            <div>
                <img src={photo} alt="img"/>
            </div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                    <div className="none" style={{width:"35px",height:"35px",display:"flex",alignItems:"center"}}>
                        <img style={{width:"100%",borderRadius:"3px"}} src={photo2} alt="img"/>
                    </div>
                    <div className={count==="true"?"active":"none"}  style={{display:"flex",cursor:"pointer",alignItems:"center",paddingLeft:"20px",paddingRight:"20px"}}>
                        <p style={{fontWeight:"bold"}}>En</p>
                        <FaAngleDown />
                    </div>
                <Link to="/signin">
                    <div className="none" style={{display:"flex",color:"black",alignItems:"center",paddingRight:"20px"}}>
                        <FaRegUser />
                        <p>login</p>
                    </div>
                </Link>
                <div style={{paddingRight:"20px",cursor:"pointer"}}>
                    <CiHeart fontSize={"30px"}  />
                </div>
                <Link to="/mycart">
                    <div className="bag" style={{cursor:"pointer",textAlign:"center",position:"relative"}}>
                        <div style={{position:"absolute",width:"20px",height:"20px",borderRadius:"50%",color:"white",backgroundColor:"black",top:"-13px",right:"-10px",zIndex:"7"}}>{numcart}</div>
                        <IoBagOutline fontSize={"25px"} />
                    </div>
                </Link>
            </div>
        </div>
    )
}