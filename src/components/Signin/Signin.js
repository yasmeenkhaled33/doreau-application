import "./../../App.css"
import photo from "./../../images/image 141 (2).png"
import photo1 from "./../../images/fram.png"
import photo2 from "./../../images/Frame (1).png"
import "./signin.css"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import { Link } from "react-router-dom"

export default function Signin() {
    return (
        <div className="mainsec" style={{width:"100%",height:"100vh",display:"flex",justifyConten:"center"}}>
            <div className="left" style={{width:"45%",position:"relative",backgroundColor:"white",paddingBottom:"50px"}}>
                <div style={{position:"absolute",top:"40px",left:"124px"}}>
                    <img src={photo2} alt=""/>
                    <h1 style={{fontSize:"80px",fontWeight:"500",marginTop:"17px"}}>Sign in</h1>
                    <input className="widi" style={{width:"500px",fontWeight:"400",marginBottom:"0px",fontSize:"14px",height:"50px"}} placeholder="Email or phone number"/>
                    <input className="widi" style={{width:"500px",fontWeight:"400",marginBottom:"0px",fontSize:"14px",height:"50px"}} placeholder="Password"/>
                    <button className="mainbutton widi"> sign in</button>
                    <div style={{display:"flex",justifyContent:"space-between",marginTop:"20px"}}>
                        <div style={{display:"flex",alignItems:"center"}}>
                            <input type="checkbox" style={{cursor:"pointer",width:"20px",height:"20px",borderRadius:"3px",backgroundColor:"black"}}/>
                            <p style={{paddingLeft:"15px"}}>Remember me</p>
                        </div>
                        <div>
                            <h4 style={{cursor:"pointer"}}>Frogot password?</h4>
                        </div>
                    </div>
                    <p style={{textAlign:"center",color:"#5F6879"}}>Or continue with your social profile</p>
                    <div style={{textAlign:"center"}}>
                        <FacebookRoundedIcon style={{cursor:"pointer",width:"70px",height:"70px",borderRadius:"50%",color:"#475EA9"}}/>
                        <GoogleIcon style={{cursor:"pointer",border:"1px solid #909FBA",color:"#777 ",width:"40px",height:"40px",borderRadius:"50%",padding:"10px",marginLeft:"20px"}}/>
                        <AppleIcon style={{cursor:"pointer",color:"white",backgroundColor:"black",marginLeft:"20px",width:"40px",height:"40px",padding:"10px",borderRadius:"50%"}}/>
                    </div>
                    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <p style={{textAlign:"center"}}>Don’t have an account?</p>
                        <Link to="/register">
                            <h4 style={{cursor:"pointer",paddingLeft:"2px",color:"black"}}> Register</h4>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="right" style={{width:"55%",height:"100vh"}}>
                <div style={{height:"100%",width:"100%",position:"relative"}}>
                    <img  style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}} src={photo1} alt="" />
                    <img src={photo} alt="" style={{width:"100%",height:"100%"}} />
                </div>
            </div>
        </div>
    )
}
