import React from "react";

const Header = () => {
  return (
    <header className="text-center p-4 mb-4 position-fixed top-5px" style={{ background: `url('/images/header.png') no-repeat center/cover`, height: "250px",zIndex:"99",width:"80%",backgroundPosition:"contain" }}>
      <h1 className="text-warning">Discover My Amazing Art Space!</h1>
      <p className="about">Explore my services and portfolio below</p>
    </header>
  );
};

export default Header;