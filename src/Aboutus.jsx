import React, { useState } from 'react'
import AboutUsData from './Api/AboutUsData.js'

const Aboutus = () => {
    const [aboutdata, setAboutUsData]= useState(AboutUsData);

  return (
    <>
   <section className="common-section our-services">
       <div className="container mb-5">
           <div className="row">
               <div className="col-12 col-lg-5 text-center our-services-leftside-img">
                   <img src="./images/hero3.jpg" alt="aboutImg" />
               </div>
               {/* section right side data */}
               <div className="col-12 col-lg-7 our-serives-list">
                   <h3 className="mini-title">
                       -- availbale @ google and ios app store only
                   </h3>
                   <h1 className="main-heading">how to use the app?</h1>
                   {aboutdata.map((curElem) =>{
                       const{id, title, info}=curElem;
                       return(<>
                       <div className="row our-serives-info" key={id}>
                       <div className="col-1 our-serives-number">{id} </div>
                       <div className="col-10 our-serives-data">
                           <h2>{title} </h2>
                           <p className="main-hero-para">{info}</p>
                       </div>
                   </div></>)
                        

                   })}
                  
                   <br />
                   <button className='btn-style btn-border'>learn more</button>

               </div>
           </div>
       </div>
   </section>
      
    </>
  )
}

export default Aboutus
