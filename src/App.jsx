import React from "react";
import AllMemes from "./AllMemes";
import CurrentMeme from "./CurrentMeme";
import Header from "./Header";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import "./Styles.css";
function App(){
 return( 
   <BrowserRouter>
   <Header/>
 <Routes>
  <Route path="/" element={<AllMemes/>}/>
  <Route path=":id" element={<CurrentMeme/>}/>
 </Routes>
 </BrowserRouter>
 
 )
}
export default App;