import "./Featured.css"
import "./../../../App.css"
import photo1 from "./../../../images/Mask group (5).png"
import photo2 from "./../../../images/Mask group (6).png"

export default function Featured() {
    return (
        <div className="container">
            <h2 style={{textAlign:"start",fontSize:"30px",fontWeight:"normal"}}>Featured</h2>
            <div className="maindetail" style={{width:"100%"}}>
                <div className="topsec" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <div className="divimg" style={{width:"50%",height:"500px"}}>
                        <img style={{width:"100%",height:"100%"}} src={photo1} alt="img"/>
                    </div>
                    <div className="divimg" style={{width:"50%",textAlign:"left",transform:"translateX(30px)"}}>
                        <h4 style={{fontSize:"20px",fontWeight:"normal",marginBottom:"20px"}}>An invitation to fall in love with <br/>fashion,ancora.</h4>
                        <p >Discover the all-new collection.</p>
                        <button  className="blackbtn">shop now</button>
                    </div>
                </div>
                <div className="bottomsec" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                <div className="divimg divdetail" style={{width:"50%",textAlign:"right",transform:"translateX(-30px)"}}>
                        <h4 style={{fontSize:"20px",fontWeight:"normal",marginBottom:"20px"}}>An invitation to fall in love with <br/>fashion, ancora.</h4>
                        <p>Discover the all-new collection.</p>
                        <button className="blackbtn">shop now</button>
                    </div>
                    <div className="divimg" style={{width:"50%",height:"500px"}}>
                        <img style={{width:"100%",height:"100%"}} src={photo2} alt="img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}