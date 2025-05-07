import React,{useState,useEffect} from 'react'
import Slider from '../components/Slider' //silider in the top of the home page
import Cardscg from '../components/Cardscg'
import CgDiv from '../components/CgDiv'
import ProductsC from '../components/ProductsC'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'


const Home = () => {
 
    return (
        <>
        <Helmet>
            <title>WEB CLOTHING</title>
        </Helmet>
             <div>
               <Slider/>
                 <div className="cards">
                         <Cardscg title='Women'/>
                         <Cardscg title='Men'/>
                         <Cardscg title='Watch'/>                
                 </div>
                <CgDiv/>
                <ProductsC/>
        </div>
        </>
    )
}

export default Home
