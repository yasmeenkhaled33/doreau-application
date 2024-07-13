import "./blackfooter.css"
import "./../../../App.css"
import photo from "./../../../images/Frame (2).png"
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { GiPencilRuler } from "react-icons/gi";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";


export default function Blackfooter() {
    return (
        <div style={{textAlign:"center",padding:"50px",backgroundColor:"black",marginBottom:"30px",paddingBottom:"30px"}}>
            <div className="black" style={{width:"100%",marginBottom:"50px",color:"white",backgroundColor:"black",display:"flex",alignItems:"start",justifyContent:"space-around"}}>
                <div style={{width:"170px",height:"35px",transform:"translateY(20px)"}}>
                    <img style={{width:"100%",height:"100%"}} src={photo} alt="img"/>
                </div>
                <div>
                    <h4>Categories</h4>
                    <h5 >Night clothes</h5>
                    <h5>Tight</h5>
                    <h5>Pregnant clothes</h5>
                    <h5>Pants</h5>
                    <h5>T-shirt</h5>
                    <h5>Shirt</h5>
                    <h5>Dress Big size</h5>
                    <h5>Pajama</h5>
                    <h5>Modest dress Body</h5>
                    <h5>Topcoat & trench </h5>
                    <h5>coat (winter)</h5>
                </div>
                <div>
                    <h4>Account</h4>
                    <h5>My Account</h5>
                    <h5>Order History</h5>
                    <h5>Favorites</h5>
                </div>
                <div>
                    <h4>Contact </h4>
                    <div style={{display:"flex",alignItems:"center"}}>
                        <BsTelephone/>
                        <h5 style={{paddingLeft:"7px"}}>+123 4 5678 91011</h5>
                    </div>
                    <div style={{display:"flex",alignItems:"center"}}>
                        <MdOutlineEmail/>
                        <h5 style={{paddingLeft:"7px"}}>email@support.com</h5>
                    </div>
                    <div style={{display:"flex",alignItems:"center"}}>
                        <CiLocationOn/>
                        <h5 style={{paddingLeft:"7px"}}>Address 1</h5>
                    </div>
                </div>
                <div>
                    <h4>Follow us</h4>
                    <div style={{display:"flex",justifyContent:"space-around"}}>
                        <GiPencilRuler/>
                        <CiInstagram/>
                        <FaLinkedinIn/>
                        <CiFacebook/>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="footerfooter" style={{display:"flex",marginTop:"20px",paddingBottom:"20px",justifyContent:"space-between",color:"white"}}>
                <p>Terms & Conditions</p>
                <p>Copyright Ⓒ 2024 Dorreau.com</p>
            </div>
        </div>
    )
}

// Night clo Topcoat & trench coat (winter)