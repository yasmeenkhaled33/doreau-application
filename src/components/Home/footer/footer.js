import "./footer.css"
import photo from "./../../../images/fram.png"


export default function Footer() {
    return (
        <div className="footer">
            <div style={{position:"absolute",top:"30%",color:"white",left:"10%",zIndex:888}}>
                <div style={{width:"60px",height:"60px"}}>
                    <img style={{width:"100%",height:"100%"}} src={photo} alt="img"/>
                </div>
                <h1 style={{fontSize:"60px",fontWeight:"300",marginBottom:"20px"}}>Subscribe to our newsletter</h1>
                <p style={{fontSize:"24",lineHeight:"29px",fontWeight:"400"}}>Subscribe to our newletter to get the latest deals<br/> right to your inbox</p>
                <div className="footerinput">
                    <input placeholder="Email address"></input>
                    <button className="blackbtn">subscribe</button>
                </div>
            </div>
        </div>
    )
}