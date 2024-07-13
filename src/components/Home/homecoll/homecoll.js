import "./homecoll.css"
import "./../../../App.css"
import photo1 from "./../../../images/Group 1000003447 (1).png"
import photo2 from "./../../../images/Group 1000003461 (2).png"

export default function Homecoll() {
    return(
        <div className="layout" style={{width:"100%",marginBottom:"40px",position:"relative",height:"400px"}}>
            <img className="image" style={{width:"100%",height:"100%",zIndex:"1"}} src={photo1} alt=""/>
            <div className="lay" style={{position:"absolute",textAlign:"center",top:"10%",left:"20%",zIndex:"99"}}>
                <h1 style={{fontSize:"130px",marginBottom:"0px",color:"white",fontWeight:"400"}}>Home collection</h1>
                <img src={photo2} alt="img" style={{cursor:"pointer"}}/>
            </div>
        </div>
    )
}