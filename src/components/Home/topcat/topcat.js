import "./topcat.css"
import "./../../../App.css"
import photo1 from "./../../../images/Rectangle 40347.png"
import photo2 from "./../../../images/Rectangle 40348.png"
import photo3 from "./../../../images/Rectangle 40349.png"
import photo4 from "./../../../images/Rectangle 40350.png"
import photo5 from "./../../../images/Rectangle 40351.png"
import photo6 from "./../../../images/Rectangle 40352.png"
import photo7 from "./../../../images/Rectangle 40353.png"
import photo8 from "./../../../images/Rectangle 40354.png"

const data=[
    {
        name:"shoes",
        img:photo1
    },
    {
        name:"Shirts",
        img:photo2
    },
    {
        name:"Dresses",
        img:photo3
    },
    {
        name:"Jewelry",
        img:photo4
    },
    {
        name:"Bags",
        img:photo5
    },
    {
        name:"Curtains",
        img:photo6
    },
    {
        name:"Tables",
        img:photo7
    },
    {
        name:"Carpets",
        img:photo8
    }
]

export default function Topcat() {
    return(
        <div className="container" style={{width:"100vw",height:"50vh",marginTop:"35px",backgroundColor:"white",textAlign:"center",color:"#333332"}}>
            <h1>Top categories</h1>
            <div style={{display:"flex",textAlign:"center",flexWrap:"wrap",alignItems:"center"}}>
                {data.map((el,i)=>{
                    return(
                        <div key={i} style={{textAlign:"center",padding:"20px",cursor:"pointer"}}>
                            <div style={{width:"130px",marginBottom:"20px",height:"130px",borderRadius:"50%",overflow:"hidden"}}>
                                <img style={{width:"100%",height:"100%"}} src={el.img} alt={el.name}/>
                            </div>
                            <p>{el.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}