import "./hero.css"
import "./../../../App.css"


export default function Hero() {
    return (
        <div className="mainsec" style={{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div className="mainsec" style={{color:"white",textAlign:"center"}}>
                <h1 className="herohead">Spring collection</h1>
                <p >Comfortable polyester blend fabric Contrast floral prints all over Round neck and short sleeves Cut-out back with adjustable self-tie straps</p>
                <button className="whitebtn">shop now</button>
            </div>
        </div>
    )
}