import React from "react";
import { NavLink } from "react-router-dom";

const Review = () => {
  return (
    <div style={{marginTop:'4rem'}}>
        <h1 style={{fontSize:'2rem',textAlign:'center',fontWeight:'900'}}>Costumer Reviews</h1>
        <div style={{display:'flex',justifyContent:'space-around',margin:'0rem 2rem 3rem 2rem',padding:'2rem',borderTop:'solid',textAlign:'center',fontFamily:'sans-serif'}}>
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
