import { useContext, useState } from "react";
import Context from "./Context";

const Home = () => {

  const {session,setSession} = useContext(Context)

  return (
   <div>
    <button onClick={()=>setSession("Namaste@gmail.com")}>
    Click Me
    </button>

    <p>{session}</p>
    </div>
  );
};

export default Home;
