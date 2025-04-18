import Vista from "./Vista";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  
  useEffect(() =>{
    AOS.init({duration: 1000});
  } ,[])

  return (
    <Vista />
  );
}

export default App;
