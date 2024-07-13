import "./mycart.css"
import "./../../App.css"
import { useDispatch, useSelector } from 'react-redux'
import photo from "./../../images/Mask group (11).png"
import { useState } from "react"
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import photo2 from "./../../images/Group 1000003421.png"
import { Link } from "react-router-dom"
import { CiHeart } from "react-icons/ci";
import { remove } from "../../features/productcartslice"
import { removeprice } from "../../features/totalpriceslice"
import { del } from "../../features/cartslice"
const data=[
    {
        id:1,
        title:"Women linen jacket",
        price:"35 JOD",
        img:photo
    },
    {
        id:2,
        title:"Women linen jacket",
        price:"35 JOD",
        img:photo
    },
    {
        id:3,
        title:"Women linen jacket",
        price:"35 JOD",
        img:photo
    },
    {
        id:4,
        title:"Women linen jacket",
        price:"35 JOD",
        img:photo
    }]

export default function Mycart() {
    const totalpri=useSelector((state)=>state.totalprice.totalprice)
    const[number,setnum]=useState(1)
    const numcart = useSelector((state) => state.cart.numshop)
    const productcart = useSelector((state) => state.cartproduct.cartshop)
    const dispatch=useDispatch()

    function handeldelete(el) {
        dispatch(remove(el))
        dispatch(removeprice(el.price))
        dispatch(del())
    }

    return(
        <div className="container margintop" style={{marginBottom:"30px"}}>
            <h2 style={{fontSize:"30px",fontWeight:"400"}}>My cart ({numcart})</h2>
            <div className="main" style={{display:"flex"}}>
                <div >
                    <div style={{marginBottom:"20px"}}>
                        {productcart.map((el,i)=>{
                            return(
                                <div className="smallscr" style={{display:"flex",marginBottom:"20px",justifyContent:"space-between",width:"800px",padding:"20px",height:"170px",border:"1px solid rgb(144, 159, 186)",borderRadius:"20px"}}>
                                    <div>
                                        <div style={{display:"flex",alignItems:"start",justifyContent:"start"}}>
                                            <div style={{width:"120px",height:"170px",marginRight:"20px"}}>
                                                <img style={{width:"100%",height:"100%",borderRadius:"20px"}} src={el.images[0]} alt="img"/>
                                            </div>
                                            <div>
                                                <p style={{color:"#777"}}>{el.title}</p>
                                                <h3 style={{marginTop:"10px"}}>{el.price}</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <div style={{width:"80px",height:"50px",borderRadius:"100px",marginRight:"20px",border:"1px solid #909FBA",display:"flex",alignItems:"center",justifyContent:"center"}}>
                                                <div>{number}</div>
                                                <div style={{marginLeft:"15px"}}>
                                                    <div style={{color:"#909FBA",cursor:"pointer"}} onClick={()=>{setnum(number+1)}}><IoIosArrowUp /></div>
                                                    <div style={{color:"#909FBA",cursor:"pointer"}} onClick={()=>{setnum(number-1)}}><IoIosArrowDown /></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div onClick={()=>{handeldelete(el)}} style={{color:"#909FBA",cursor:"pointer",marginTop:"20px",fontSize:"20px",display:"flex",alignItems:"center"}}>
                                            <p>remove</p>
                                            <MdDeleteOutline />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                <Link to="/details">
                    <div style={{marginTop:"20px", cursor:"pointer  "}}>
                        <img src={photo2} alt="img"/>
                    </div>
                </Link>
                </div>
                <div style={{padding:"20px",marginLeft:"30px",width:"350px",height:"400px",border:"1px solid rgb(144, 159, 186)",borderRadius:"20px"}}>
                    <h1  style={{fontWeight:"700",fontSize:"30px"}}>Summary</h1>
                    <h3 style={{fontSize:"20px",fontWeight:"400"}}>Have a coupon?  </h3>
                    <div style={{position:"relative"}}>
                        <input className="widiid" style={{width:"100%",fontWeight:"400",marginBottom:"0px",fontSize:"14px",height:"50px"}} placeholder="coupon"/>
                        <button style={{border:"none",position:"absolute",top:"0px",right:"0px",backgroundColor:"transparent",textAlign:"right",fontSize:"20px",fontWeight:"500"}}>Apply</button>
                    </div>
                    <div style={{display:"flex",marginTop:"30px",justifyContent:"space-between",alignItems:"center"}}>
                        <p>Subtotal</p>
                        <div>{totalpri} JOD</div>
                    </div>
                    <div style={{display:"flex",marginTop:"20px",justifyContent:"space-between",alignItems:"center"}}>
                        <p>Shipping</p>
                        <div style={{color:"red",fontWeight:"500",fontSize:"20px"}}>Free</div>
                    </div>
                    <hr/>
                    <div style={{display:"flex",marginTop:"20px",justifyContent:"space-between",alignItems:"center"}}>
                        <p>Total:</p>
                        <div>{totalpri} JOD</div>
                    </div>
                    <button className="blackbtn fullwidth">Checkout</button>
                </div>

            </div>
            <div>
                <h2 style={{fontSize:"30px",fontWeight:"400"}}>Related products</h2>
                <div style={{display:"flex",justifyContent:"space-around"}}>
                    {
                        data.map((el,i)=>{
                            return(
                                <div key={i} style={{width:"23%"}}>
                                    <div style={{height:"400px",marginBottom:"20px",position:"relative"}}>
                                        <img style={{width:"100%",height:"100%"}} src={el.img} alt="img"/>
                                        <div style={{position:"absolute",cursor:"pointer",top:"20px",right:"20px",backgroundColor:"white",width:"30px",height:"30px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%"}}>
                                            <CiHeart color="#8191ab" style={{fontSize:"25px"}} />
                                        </div>
                                    </div>
                                    <p>{el.title}</p>
                                    <p>{el.price}</p>
                                </div>
                            )
                        })
                    }
                </div>
                
            </div>
        </div>
    )
}