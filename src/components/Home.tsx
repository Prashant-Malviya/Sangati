import { useEffect, useRef, useState } from "react";

const Home = () => {


  // const [color, setColor] = useState("red");

  const headingRef = useRef<HTMLHeadingElement | null>(null);

  const handleHeading = ()=>{
    if(headingRef.current){
      const h1 = headingRef.current;
      h1.style.color = "orange"
    }
  }

  return (
    <div>
      
     {/* <h1 style={{color:color}}>Home</h1>
     <button onClick={()=>setColor("blue")}>Test</button> */}
     <h1 ref={headingRef}>Home</h1>
     <button onClick={handleHeading}>Test</button>
    </div>
  );
};

export default Home;
