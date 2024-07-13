import "./details.css"
import "./../../App.css"
import photo from "./../../images/Mask group (9).png"
import photo1 from "./../../images/Mask group (10).png"
import photo2 from "./../../images/Mask group (11).png"
import photo3 from "./../../images/Mask group (12).png"
import { CiHeart } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import Pricelist from "./pricelist"
import { LuSettings2 } from "react-icons/lu";
import { useState } from "react"
import { Link } from "react-router-dom"


const datalist=[
    {
        title:"Shop women",
        mainphoto:photo,
        data:[
            {
                id:1,
                title:"Women linen jacket",
                price:"35 JOD",
                img:photo1
            },
            {
                id:2,
                title:"Women linen jacket",
                price:"35 JOD",
                img:photo2
            },
            {
                id:3,
                title:"Women linen jacket",
                price:"35 JOD",
                img:photo3
            },
            {
                id:4,
                title:"Women linen jacket",
                price:"35 JOD",
                img:photo1
            },
            {
                id:5,
                title:"Women linen jacket",
                price:"35 JOD",
                img:photo2
            },
            {
                id:6,
                title:"Women linen jacket",
                price:"35 JOD",
                img:photo3
            },
        ]
    }
]

export default function Details () {
    const[classname,setclassname]=useState(null)
    function handel() {
        if(classname==="appear") {
            setclassname(null)
        }
    }
    return (
        <div>
            {
                datalist.map((el,index)=>{
                    return(
                        <div key={index} onClick={handel}>
                            <div style={{position:"relative",width:"100%",height:"600px"}}>
                                <img style={{width:"100%",height:"100%"}} src={el.mainphoto} alt="img"/>
                                <h1 style={{position:"absolute",width:"100%",fontSize:"150px",textAlign:"center",fontWeight:"300",color:"white",bottom:"0px",marginBottom:"30px"}}>{el.title}</h1>
                            </div>
                            <div className="container" style={{marginTop:"30px"}}>
                                <div style={{display:"flex",alignItems:"center",justifyContent:"end"}}>
                                    <div className="smallmedia" style={{width:"75px",cursor:"pointer",height:"30px",display:"flex",alignItems:"center",justifyContent:"end"}}>
                                        <h5 style={{marginRight:"5px",fontSize:"15px",fontWeight:"normal"}}>sort by</h5>
                                        <FaAngleDown />
                                    </div>
                                    <div className="onlysmall">
                                        <div className="smallmedia" onClick={()=>{setclassname("appear")}} style={{width:"60px",cursor:"pointer",height:"30px",display:"flex",alignItems:"center",justifyContent:"end"}}>
                                            <h5 style={{marginRight:"5px",fontSize:"15px",fontWeight:"normal"}}>filter</h5>
                                            <LuSettings2 />
                                        </div>
                                    </div>
                                    
                                </div>
                                <div style={{display:"flex",cursor:"pointer",position:"relative",marginTop:"10px",alignItems:"start",justifyContent:"space-between"}}>
                                    <div className={classname!==null?"leftside appear":"leftside"} style={{width:"40%",marginRight:"30px"}}>
                                        <Pricelist/>
                                    </div>
                                    <div className="rightside" style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
                                        {el.data.map((item,i)=>{
                                            return(
                                            // <Link to="/product">
                                                <div key={i} className="product" style={{paddingBottom:"0px",color:"black"}}>
                                                    <Link to={`/product/${item.id}`}>
                                                    <div style={{position:"relative",width:"100%",height:"70%",marginBottom:"20px"}}>
                                                        <img src={item.img} style={{width:"100%",height:"100%"}} alt="img"/>
                                                        <div style={{position:"absolute",cursor:"pointer",top:"20px",right:"20px",backgroundColor:"white",width:"30px",height:"30px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%"}}>
                                                            <CiHeart color="#8191ab" style={{fontSize:"25px"}} />
                                                        </div>
                                                    </div>
                                                    <p style={{color:"black"}}>{item.title}</p>
                                                    <h4 style={{marginBottom:"0px",color:"black"}}>{item.price}</h4>
                                                    </Link>
                                                </div>
                                            // </Link>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            
            
        </div>
    )
}