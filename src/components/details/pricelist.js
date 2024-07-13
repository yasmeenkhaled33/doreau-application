import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import "./details.css"
import { FaAngleDown } from "react-icons/fa";

const list =["Women Tops, Blouses & Tee", "Women Dresses", "Women Bottoms", "Women Denim", "Women Beachwear", "Women Co-ords", "Women Knitwear", "Women Jumpsuits & Bodysuits", "Women Outerwear", "Women Sweatshirts","Women Suits"]
const list2=["Deal of the day","20% off","50% off"]
export default function Pricelist () {
    return(
        <div className='bigsec' style={{padding:"10px"}}>
            <h4 style={{fontSize:"20px",fontWeight:"400"}}>price range</h4>
            <Box sx={{ width: 300 }}>
                <Slider
                onChange={(e) => console.log(e.target.value)}
                    size="small"
                    defaultValue={[30,70]}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    color='black'
                />
            </Box>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <h4 style={{fontSize:"20px",fontWeight:"400"}}>category</h4>
                <FaAngleDown />
            </div>
            <div>
                {list.map((el,index)=>{
                    return(
                        <div key={index} style={{display:"flex",justifyContent:"space-between"}}>
                            <div style={{display:"flex",justifyContent:"start",alignItems:"center"}}>
                                <input type='checkbox'/>
                                <p>{el}</p>
                            </div>
                            <h5 style={{color:"#acb7cb",marginTop:"12.5px",marginBottom:"12.5px"}}>(24)</h5>
                        </div>
                    )
                })}
            </div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <h4 style={{fontSize:"20px",fontWeight:"400"}}>Sales and promotion</h4>
                <FaAngleDown />
            </div>
            <div>
                {list2.map((el,index)=>{
                    return(
                        <div key={index} style={{display:"flex",justifyContent:"space-between"}}>
                            <div style={{display:"flex",justifyContent:"start",alignItems:"center"}}>
                                <input type='checkbox'/>
                                <p>{el}</p>
                            </div>
                            <h5 style={{color:"#acb7cb",marginTop:"12.5px",marginBottom:"12.5px"}}>(24)</h5>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}