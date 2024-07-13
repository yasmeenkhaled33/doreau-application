import "./../../../App.css"
import "./header.css"
import { CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import {icon} from "./../../../features/listslice"

const list=["New in","Ramadan","Brands","Closing","Shoes","Bags","Accessories","Jewelry","Homeware","sale"]

export default function Header3() {
    const count = useSelector((state) => state.result.result)
    const dispatch = useDispatch()
    return (
        <div className="container space" style={{paddingTop:"30px"}}>
            <div className={count==="true"?"opened mainss":"mainss"} style={{display:"flex",alignItems:"center"}}>
                <div  className={count==="true"?"open":"smallonly"} onClick={()=>{dispatch(icon())}}>
                    <IoIosClose fontSize={40} />
                </div> 
                <h2 className={count==="true"?"openn":"smallonly"} style={{color:"#333332"}}>Menu</h2> 
                {list.map((el,i)=>{
                    return(
                        <li className={i===9?"red":"gray"} style={{listStyle:"none",padding:"10px 10px",cursor:"pointer",fontSize:"16px"}} key={i}>{el}</li>
                    )
                })}
                <div className={count==="true"?"openn":"smallonly"} onClick={()=>dispatch(icon())}>
                    <Link to="/signin">
                        <div style={{display:"flex",color:"black",alignItems:"center",paddingRight:"20px"}}>
                            <button className="blackbtn" >Sign in</button>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="inputt" style={{display:"flex",width:"400px",paddingLeft:"10px",height:"50px",borderRadius:"20px",alignItems:"center",justifyContent:"start",border:"2px solid #ccc"}}>
                <CiSearch style={{fontWeight:"bold",fontSize:"20px"}}/>
                <input style={{color:"#909fba"}} placeholder="Search..."/>
            </div>
        </div>
    )
}