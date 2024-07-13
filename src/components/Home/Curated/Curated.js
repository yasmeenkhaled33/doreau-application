import "./Curated.css"
import "./../../../App.css"
import photo from "./../../../images/Group 1000003475.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Slidesettings } from "./swipersettings";
import 'swiper/css';

const data=[
    {
        id:1,
        image:photo,
        title:"women lines jacket",
        details:"women lines jackets",
        price:"35AED"
    },
    {
        id:1,
        image:photo,
        title:"women lines jacket",
        details:"women lines jackets",
        price:"35AED"
    },
    {
        id:1,
        image:photo,
        title:"women lines jacket",
        details:"women lines jackets",
        price:"35AED"
    },
    {
        id:1,
        image:photo,
        title:"women lines jacket",
        details:"women lines jackets",
        price:"35AED"
    },
]

export default function Curated() {
    return (
        <div className="container" style={{marginTop:"30px",marginBottom:"100px",position:"relative"}}>
            <div style={{width:"100%",marginBottom:"30px"}}>
                <h2 style={{textAlign:"start",fontSize:"30px",fontWeight:"normal"}}>Curated for you</h2>
                <button style={{position:"absolute"}} className="blackbtn addition">see more</button>
            </div>
            <div className="bigscreen" style={{width:"100%",cursor:"pointer",display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                {data.map((el,i)=>{
                    return(
                        <div key={i} style={{width:"23%",textAlign:"left"}}>
                            <div style={{width:"100%",height:"300px"}}>
                                <img style={{width:"100%",height:"100%"}} src={el.image} alt="img"/>
                            </div>
                            <h3 style={{marginBottom:"10px"}}>{el.title}</h3>
                            <p style={{color:"blue"}}>{el.details}</p>
                            <h2 style={{marginTop:"10px",fontSize:"20px"}}>{el.price}</h2>
                        </div>
                    )
                })}
            </div>  
            <section>
                <div className="smallscreen" style={{}}>
                    <Swiper {...Slidesettings}>
                        {data.map((el,i)=>{
                            return(
                                <SwiperSlide style={{cursor:"pointer"}}>
                                    <div key={i} style={{width:"100%",textAlign:"left"}}>
                                        <div style={{width:"90%",height:"300px"}}>
                                            <img style={{width:"100%",height:"100%"}} src={el.image} alt="img"/>
                                        </div>
                                        <h3 style={{marginBottom:"10px"}}>{el.title}</h3>
                                        <p style={{color:"blue"}}>{el.details}</p>
                                        <h2 style={{marginTop:"10px",fontSize:"20px"}}>{el.price}</h2>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                    <button className="blackbtn" style={{position:"absolute",left:"40%"}}>see more</button>
                </div>
            </section>
        </div>
    )
}