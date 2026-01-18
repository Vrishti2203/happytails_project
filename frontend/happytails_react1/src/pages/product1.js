import { Link } from "react-router-dom";
import React, { useContext } from "react";
import ball from "../asset/ball.jpg";
import rope from "../asset/rope.jpg";
import bone from "../asset/bone.jpg";
import { CartContext } from "../context/CartContext";

function Product1() {

  const { addToCart } = useContext(CartContext);

  return (
    <div style={{background:"#FFF8F1", minHeight:"100vh", padding:"40px"}}>

      <h1 style={{color:"#003B2D"}}>Our Collections</h1>
      <p>Safe, fun, and made for happy dogs!</p>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(3, 1fr)",
        gap:"20px",
        marginTop:"30px"
      }}>

        {/* Card 1 */}
        <div style={{background:"#fff", padding:"20px", borderRadius:"10px"}}>
          <img src={ball} alt="Ball" style={{width:"100%", borderRadius:"10px"}}/>
          <h3 style={{color:"#003B2D"}}>PawBounce Ball</h3>
          <p style={{color:"#444444"}}>₹299</p>

          <button 
            onClick={() => addToCart({id:1, name:"PawBounce Ball", price:299})}
            style={{
              background:"#FF8C42",
              padding:"10px 20px",
              border:"none",
              borderRadius:"8px",
              color:"white",
              cursor:"pointer"
            }}
          >
            Add to Cart
          </button>
        </div>

        {/* Card 2 */}
        <div style={{background:"#fff", padding:"20px", borderRadius:"10px"}}>
          <img src={rope} alt="Rope" style={{width:"100%", borderRadius:"10px"}}/>
          <h3 style={{color:"#003B2D"}}>Tangle Rope</h3>
          <p style={{color:"#444444"}}>₹199</p>

          <button 
            onClick={() => addToCart({id:2, name:"Tangle Rope", price:199})}
            style={{
              background:"#FF8C42",
              padding:"10px 20px",
              border:"none",
              borderRadius:"8px",
              color:"white",
              cursor:"pointer"
            }}
          >
            Add to Cart
          </button>
        </div>

        {/* Card 3 */}
        <div style={{background:"#fff", padding:"20px", borderRadius:"10px"}}>
          <img src={bone} alt="Bone" style={{width:"100%", borderRadius:"10px"}}/>
          <h3 style={{color:"#003B2D"}}>Snuggle Bone</h3>
          <p style={{color:"#444444"}}>₹199</p>

          <button 
            onClick={() => addToCart({id:3, name:"Snuggle Bone", price:199})}
            style={{
              background:"#FF8C42",
              padding:"10px 20px",
              border:"none",
              borderRadius:"8px",
              color:"white",
              cursor:"pointer"
            }}
          >
            Add to Cart
          </button>
        </div>

      </div>

      {/* Next Page Button */}
      <Link to="/product2">
        <button style={{
          background:"#FF8C42",
          padding:"10px 20px",
          borderRadius:"8px",
          border:"none",
          color:"white",
          cursor:"pointer",
          marginTop:"40px"
        }}>
          Next Page →
        </button>
      </Link>

    </div>
  );
}

export default Product1;
