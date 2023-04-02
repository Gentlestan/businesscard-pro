import React from "react"
 export default function Info(){
     return(
         <div>
         <div className="header-img">
            <img className="header-img" src="../images/PicJacket.jpg"/>
         </div>
         <div>
            <h2 className="name">Ohazulike Stanley</h2>
            <h4 className="professional-title">Frontend Developer</h4>
            <p className="site-name">sohazulike.website</p>
        </div>
        
        <div className="btn">
           <button className="emailbtn"><i className="fa-solid fa-envelope"></i> Email </button> 
            <button className="linkednbtn"><i className="fa-brands fa-linkedin"></i> Linkedin</button> 
        </div>
        </div>
         
        
     )
 }