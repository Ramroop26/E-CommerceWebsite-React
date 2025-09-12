import Header from "./component/Header";
import Manu from "./component/Manu";

import { Outlet } from "react-router-dom";




const Layout=()=>{
    return(

        <>
   <Manu/>
   <Header/>

    <Outlet/>
  

   
   
        </>
    )
}
export default Layout;