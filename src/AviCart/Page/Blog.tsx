

import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
// import Card from "../Card.tsx/Card";
import Footer from "../Footer/Footer";
import { Context } from "../Context/Context";
import { useContext } from "react";
import Blog1 from "../PageDetails/Blog1";


export default function AviKartClone() {
  let { loading } = useContext<UseType>(Context);
  return (
    <>
      <div className="">
        <Header />
        <div className="flex ">
          
          <Blog1/>
         
        </div>
        <Footer />
      </div>
    </>
  );
}
