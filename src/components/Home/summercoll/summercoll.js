import "./summercoll.css"
import "./../../../App.css"


export default function Summercoll () {
    return(
        <div style={{width:"100%",height:"570px",position:"relative"}} className="summer">
            <div style={{position:"absolute",bottom:"100px",left:"50%",width:"80%",textAlign:"center",transform:"translateX(-50%)"}}>
                <h1 style={{color:"white",marginBottom:"-10px",fontSize:"130px",fontWeight:"300"}}>Summer collection</h1>
                <button className="whitebtn">shop now</button>
            </div>
        </div>
    )
}