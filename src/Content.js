import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
 // For minor custom styles
import Stats from "./components/Stats";
import Services from "./components/Services";
import Footer from "./components/Footer";

const Content = () => {
  return (
    
    <div className="display-flex"style={{ marginTop:"350px",position:"relative"}}>
      <Services /> 
         <Stats />
        <Footer />
      </div>
  );
};

export default Content;