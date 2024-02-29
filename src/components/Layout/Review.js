import React from "react";
import { NavLink } from "react-router-dom";

const Review = () => {
  return (
    <div style={{margin:'7rem 0 0 2rem'}}>
        <h1  className="bg-dark p-2 text-white text-center">Costumer Reviews</h1>
        <div style={{display:'flex',justifyContent:'space-around',margin:'0rem 2rem 3rem 2rem',padding:'2rem',textAlign:'center',fontFamily:'sans-serif'}}>
      <div >
        <div>
            <img 
            src="/images/user.png"
            style={{width:"10rem"}}
            />
        </div>
        <div>
           <h4 style={{fontSize:'1.3rem'}}>it is a good website</h4>
        </div>
      </div>
      <div>
        <div>
            <img 
            src="/images/user.png"
            style={{width:"10rem"}}
            />
        </div>
        <div>
           <h4 style={{fontSize:'1.3rem'}}>it is a good website</h4>
        </div>
      </div>
      <div>
        <div>
            <img 
            src="/images/user.png"
            style={{width:"10rem"}}
            />
        </div>
        <div>
           <h4 style={{fontSize:'1.3rem'}}>it is a good website</h4>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Review
