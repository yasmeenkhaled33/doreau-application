import { Outlet } from "react-router-dom";
import Footer from "../Home/footer/footer";
import Header1 from "../Home/header/header1";
import Header2 from "../Home/header/header2";
import Header3 from "../Home/header/header3";
import Blackfooter from "../Home/blackfooter/blackfooter";

const Layout = () => {
    return (
        <>
            <Header1 />
            <Header2 />
            <Header3 />

            <Outlet/>

            <Footer />
            <Blackfooter/>
        </>
    )
}

export default Layout;