import "./product.css"
import "./../../App.css"
import photo1 from "./../../images/Mask group (10).png"
import photo2 from "./../../images/Rectangle 40130.png"
import photo4 from "./../../images/Rectangle 653.png"
import Rating from '@mui/material/Rating';
import { CiHeart } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react"
import { num } from "../../features/cartslice"
import { useDispatch } from "react-redux"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Link } from "react-router-dom"
import { push } from "../../features/productcartslice"
import { add } from "../../features/totalpriceslice"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "700px",
    bgcolor: 'background.paper',
    borderRadius:5,
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

const data=[
    {
        title:"Essnce Women's Solid Color",
        images:[photo1,photo2,photo4],
        rate:3.5,
        price:"88.00 JOD",
        colors:["#395273","#B2011B","#51534F","#4E3629"],
        size:["S","M","L","XL"],
        details:"Color: Baby Pink Style: Casual Pattern Type: Plain Neckline: Round Neck Sleeve Length: Long Sleeve Sleeve Type: Regular Sleeve Length: Regular Fit Type: Slim Fit Fabric: High Stretch Material: Fabric Composition: 95% Polyester, 5% Elastane Care Instructions: Machine wash or professional dry clean Sheer: No",
        reviews:[
            {
            title:"yasmeen khaled",
            details:"Really impressed by the fast delivery and the quality of seeds and amazing people. Really impressed by the fast delivery and the quality of seeds and amazing people.",
            rate:3,
            date:"3omar - June 10, 2021"
            },
            {
            title:"yasmeen khaled",
            details:"Really impressed by the fast delivery and the quality of seeds and amazing people. Really impressed by the fast delivery and the quality of seeds and amazing people.",
            rate:3,
            date:"3omar - June 10, 2021"
            },
            {
            title:"yasmeen khaled",
            details:"Really impressed by the fast delivery and the quality of seeds and amazing people. Really impressed by the fast delivery and the quality of seeds and amazing people.",
            rate:3,
            date:"3omar - June 10, 2021"
            },
    ],
    pages:4
    }
]

export default function Product () {
    const[mainphoto,setmainphoto]=useState(0)
    const[color,setcolor]=useState(0)
    const[number,setnum]=useState(1)
    const[heart,setheart]=useState("")
    const[active,setactive]=useState(null)
    const dispatch=useDispatch()
    const [open, setOpen] = useState(false);
    
    function array(n) {
        const result=[]
        for(let i=1;i<=n;i++) {
            result.push(i)
        }
        return result
    }
    function handelheart() {
        if(heart==="") {
            setheart("active")
        }else {
            setheart("")
        }
    }
    function handelclick(el) {
        dispatch(num())
        setOpen(true)
    }
    const handleClose = (el) => {
        setOpen(false);
        dispatch(push(el))
        dispatch(add(el.price))
    };
    return(
        <div className="container" style={{marginTop:"20px"}}>
            {data.map((el,i)=>{
                return(
                    <div key={i} style={{width:"100%"}}>
                        <div className="top" style={{display:"flex",marginBottom:"20px",alignItems:"start",justifyContent:"start"}}>
                            <div className="photos" style={{display:"flex",alignItems:"start",justifyContent:"end",width:"55%"}}>
                                <div className="collimgs" style={{width:"25%"}}>
                                    {el.images.map((item,index)=>{
                                        return(
                                            <div >
                                                <div className={mainphoto===index?"border":""} key={index} onClick={()=>{setmainphoto(index)}}  style={{width:"60px",height:"80px",borderRadius:"8px",marginBottom:"10px"}}>
                                                    <img style={{width:"100%",height:"100%"}} src={item} alt="img"/>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div>
                                    <div style={{width:"600px",height:"900px"}}>
                                        <img style={{width:"100%",height:"100%"}} src={el.images[mainphoto]} alt="img"/>
                                    </div>
                                </div>
                            </div>
                            <div className="details" style={{marginLeft:"30px" ,width:"600px" }}>
                                <Rating name="read-only" value={el.rate} readOnly precision={0.5} color="black"/>
                                <div style={{fontWeight:"300",fontSize:"30px"}}>{el.title}</div>
                                <h3>{el.price}</h3>
                                <p style={{display:"flex",alignItems:"center",justifyContent:"start "}}>
                                    <div style={{marginRight:"10px"}}>Add to list</div>
                                    <div onClick={handelheart} style={{cursor:"pointer"}} className={heart==="active"?"active":""}><CiHeart fontSize={"25px"}/></div>
                                </p>
                                <h4 style={{marginBottom:"10px"}}>color</h4>
                                <div style={{display:"flex",alignItems:"center",justifyContent:"start"}}>
                                    {el.colors.map((item,index)=>{
                                        return(
                                            <div key={index} onClick={()=>{setcolor(index)}}>
                                                <div className={color===index?"okcolor":""} style={{width:"30px",cursor:"pointer",height:"30px",marginRight:"10px",borderRadius:"50%",backgroundColor:`${item}`}}></div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <h4 style={{marginBottom:"10px"}}>size</h4>
                                <div style={{display:"flex",alignItems:"center",justifyContent:"start"}}>
                                    {el.size.map((item,index)=>{
                                        return(
                                            <div onClick={()=>{setactive(index)}} className={index===active?"activeclass":""} key={index} style={{width:"60px",height:"50px",borderRadius:"50%",display:"flex",alignItems:"center",marginRight:"10px",fontSize:"20px",justifyContent:"center",border:"1px solid #909FBA"}}>
                                                {item}
                                            </div>
                                        )
                                    })}
                                </div>
                                <div style={{display:"flex",alignItems:"end",marginTop:"30px",justifyContent:"start"}}>
                                    <div style={{width:"80px",height:"50px",borderRadius:"100px",marginRight:"20px",border:"1px solid #909FBA",display:"flex",alignItems:"center",justifyContent:"center"}}>
                                        <div>{number}</div>
                                        <div style={{marginLeft:"15px"}}>
                                            <div style={{color:"#909FBA",cursor:"pointer"}} onClick={()=>{setnum(number+1)}}><IoIosArrowUp /></div>
                                            <div style={{color:"#909FBA",cursor:"pointer"}} onClick={()=>{setnum(number-1)}}><IoIosArrowDown /></div>
                                        </div>
                                    </div>
                                    <button onClick={()=>{handelclick(el)}} className="blackbtn prod">Add to cart</button>
                                </div>
                                <h4 style={{marginBottom:"10px"}}>Details</h4>
                                <div>{el.details}</div>
                            </div>
                        </div>
                        <hr/>
                        <div className="center" style={{display:"flex",marginTop:"30px",justifyContent:"space-between",alignItems:"start"}}>
                            <div>
                                <div style={{fontSize:"20px",fontWeight:"500",marginBottom:"17px"}}>Customer Reviews</div>
                                <p style={{fontSize:"19px"}}>Average Rating</p>
                                <div style={{display:"flex",alignItems:"center"}}>
                                    <h1 style={{fontSize:"50px"}}>{el.rate}</h1>
                                    <Rating name="read-only" value={el.rate} readOnly precision={0.5} color="black"/>
                                </div>
                            </div>
                            <div style={{display:"flex",cursor:"pointer"}}>
                                <div style={{marginRight:"15px"}}><FaRegPenToSquare /></div>
                                <div>write a review</div>
                            </div>
                        </div>
                        <div className="bottom" style={{marginBottom:"20px"}}>
                            {el.reviews.map((item,index)=>{
                                return(
                                    <div key={index}>
                                        <hr/>
                                        <div  style={{display:"flex",alignItems:"start",justifyContent:"space-between"}}>
                                            <div>
                                                <h3 style={{fontWeight:"400"}}>review title</h3>
                                                <div style={{marginBottom:"20px",color:"#777",fontSize:"13px"}}>{item.details}</div>
                                            </div>
                                            <div>
                                                <Rating name="read-only" value={item.rate} readOnly precision={0.5} color="black"/>
                                                <p>{item.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div style={{display:"flex",alignItems:"center",marginBottom:"30px",justifyContent:"center",color:"#909FBA"}}>
                            <IoIosArrowBack />
                            {array(el.pages).map((item,index)=>{
                                return(
                                    <div style={{marginRight:"15px",marginLeft:"15px"}} key={index}>{item}</div>
                                )
                            })}
                            <IoIosArrowForward />
                        </div>
                        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: 500 }}>
                <h2 id="child-modal-title">Added to cart</h2>
                <div style={{display:"flex",alignItems:"start",justifyContent:"left"}}>
                    <div style={{width:"200px",height:"250px",marginRight:"20px"}}>
                        <img style={{width:"100%",height:"100%"}} src={el.images[mainphoto]} alt="img"/>
                    </div>
                    <div>
                        <p>{el.title}</p>
                        <h3>{el.price}</h3>
                    </div>
                </div>
                {/* <p id="child-modal-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p> */}
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                    <button onClick={()=>{handleClose(el)}} className="whitebtn buttonn">Continue shopping</button>
                    <Link to="/mycart">
                        <button onClick={()=>{handleClose(el)}} className="blackbtn">checkout</button>
                    </Link>
                </div>
                </Box>
            </Modal>
            </div>
                    </div>
                )
            })}
           
        </div>
    )
}