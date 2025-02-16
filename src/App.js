import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"; // For minor custom styles
import Aside from "./components/Aside";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Content from "./Content";
import Contact from "./pages/Contact";
import Forms from "./components/Forms";
// import Comments from "./pages/Comments";
import UserProfile from "./pages/UserProfile";
import UsersList from "./pages/UsersList";


 function App() {
  return (
     <BrowserRouter>
         <div className="d-flex bg-dark min-height-100em"style={{minHeight:"100em"}}>
      <Aside />
      <div className="container bg-dark text-white "style={{ marginLeft: "20%",overflowY:"auto",width:"79%",WebkitScrollBarVisibility:"hidden"}}>
        <Header />

       <Routes>
         <Route path="/" element={<Menu />}>
           <Route index element={<Content />} />
           <Route path="Forms" element={<Forms />} />
           <Route path="Contact" element={<Contact />} />
           <Route path="UserProfile" element={<UserProfile userId= {2} />}/>
           <Route path="UsersList" element={<UsersList  />} />
         </Route>
       </Routes>
         </div> 
       </div>    
     </BrowserRouter>
  
);
}

  
 const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)

export default App;
  
