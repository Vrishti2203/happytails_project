import React from "react";
import { Link } from "react-router-dom";
import teddy from "../asset/teddy.jpg";
import frisbee from "../asset/frisbee.jpg";
import treat from "../asset/treat.jpg";

function Product2() {
  return (
    <div style={{background:"#FFF8F1", minHeight:"100vh", padding:"40px"}}>
      <h1 style={{color:"#003B2D"}}> Our Collections</h1>
      <p>Safe, fun, and made for happy dogs!</p>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(3, 1fr)",
        gap:"20px",
        marginTop:"30px"
      }}>
        
        {/* Card 1 */}
        <div style={{background:"#fff", padding:"20px", borderRadius:"10px"}}>
          <img src={teddy} alt="Teddy" style={{width:"100%", borderRadius:"10px"}}/>
          <h3 style={{color:"#003B2D"}}>Teddy Bear Toy</h3>
          <p style={{color:"#444444"}}>₹499</p>
          <button style={{
            background:"#FF8C42",
            padding:"10px 20px",
            border:"none",
            borderRadius:"8px",
            color:"white",
            cursor:"pointer"
          }}>Add to Cart</button>
        </div>

        {/* Card 2 */}
        <div style={{background:"#fff", padding:"20px", borderRadius:"10px"}}>
          <img src={frisbee} alt="Frisbee" style={{width:"100%", borderRadius:"10px"}}/>
          <h3 style={{color:"#003B2D"}}>Zoom Frisbee</h3>
          <p style={{color:"#444444"}}>₹299</p>
          <button style={{
            background:"#FF8C42",
            padding:"10px 20px",
            border:"none",
            borderRadius:"8px",
            color:"white",
            cursor:"pointer"
          }}>Add to Cart</button>
        </div>

        {/* Card 3 */}
        <div style={{background:"#fff", padding:"20px", borderRadius:"10px"}}>
          <img src={treat} alt="Treat" style={{width:"100%", borderRadius:"10px"}}/>
          <h3 style={{color:"#003B2D"}}>Treat Twist</h3>
          <p style={{color:"#444444"}}>₹499</p>
          <button style={{
            background:"#FF8C42",
            padding:"10px 20px",
            border:"none",
            borderRadius:"8px",
            color:"white",
            cursor:"pointer"
          }}>Add to Cart</button>
        </div>

        {/* Next Page Button */}
      <Link to="/product1">
        <button style={{
          background:"#FF8C42",
          padding:"10px 20px",
          borderRadius:"8px",
          border:"none",
          color:"white",
          cursor:"pointer",
          marginTop:"40px"
        }}>
          Previous Page ←
        </button>
      </Link>

      </div>
    </div>
  );
}

export default Product2;
