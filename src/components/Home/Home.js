import "./../../App.css"
import Shopnow from "./Shopnow/shopnow"
import Hero from "./hero/hero"
import Topcat from "./topcat/topcat"
import Summercoll from "./summercoll/summercoll"
import Featured from "./Featured/Featured"
import Curated from "./Curated/Curated"
import Homecoll from "./homecoll/homecoll"

export default function Home() {
    return(
        <>
            <Hero/>
            <Topcat/>
            <Shopnow/>
            <Summercoll/>
            <Featured/>
            <Curated/>
            <Homecoll/>
        </>
    )
}