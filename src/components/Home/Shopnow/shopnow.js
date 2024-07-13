import "./shopnow.css"
import "./../../../App.css"
import photo1 from "./../../../images/image 693.png"
import photo2 from "./../../../images/Mask group (2).png"

const data=[
    {
        id:1,
        image:photo2,
        title:"Dorreau’s Bestsellers",
        details:"The brand in demand, exclusively at Dorreau."
    },{
        id:1,
        image:photo1,
        title:"A New Taste of Luxury",
        details:"A New Taste of Luxury"
    }
]

export default function Shopnow() {
    return (
        <div className="container main" style={{display:"flex",marginBottom:"60px",alignItems:"center",justifyContent:"space-between"}}>
            {data.map((el,i)=>{
                return(
                    <div key={i} className="divv" style={{width:"49%"}}>
                        <div style={{width:"100%",height:"500px"}}>
                            <img style={{width:"100%",height:"100%"}} src={el.image} alt="img"/>
                        </div>
                        <div style={{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center"}}>
                            <h3>{el.title}</h3>
                            <button className="blackbtn btnn">shop now</button>
                        </div>
                        <p>{el.details}</p>
                    </div>
                )
            })}
        </div>
    )
}