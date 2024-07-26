import * as React from 'react';
import '../style.css';
import Header from "./component/Header";
import logo from '../assets/icons/download.png';
import { Route, Link, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Product from "./pages/Product";
import Footer from "./component/Footer/Footer";
import Login from "./pages/Login";
import SwitchLanguage from "./pages/SwitchLanguage";
import Accessibility from "./pages/Accessibility";
import Banner from './component/Banner';

interface IApp{text:string;
}
export const Sum=(a:number,b:number)=>{
  return a+b;
}
const App:React.FunctionComponent<IApp> = ()=> {
const objClasses={"parent":["aegov-banner","banner-top"],
"child":["banner-content flex flex-wrap md:flex-nowrap items-center md:justify-center gap-3"],
"subchild":["banner-link aegov-link link-underline"],
"svgchild":["w-5 h-5 rtl:-scale-x-100"]
}
  return (
    <div>

    <Banner cls="jkhkj" note="hgjgkujhkjhukjhkjkjk" action="kjhjkhgjgbjhvgvgvh"/>

       {/* <h1>{text}</h1> */}

      {/* <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Accessibility" element={<Accessibility />} />
          <Route path="/SwitchLanguage" element={<SwitchLanguage />} />
        </Routes>
        <Footer />
      </BrowserRouter> */}
    </div>
  )
};
export default App;
