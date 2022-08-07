import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import GraphicArt from "./pages/GraphicArt";
import WebDesign from "./pages/WebDesign";
import TextileCrafts from "./pages/TextileCrafts";
import Contact from "./pages/Contact";

function App() {
  return (
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
        <Route path="/" element={<Homepage/>} exact/>
          <Route path="/graphicart" element={<GraphicArt/>}/>
          <Route path="/webdesign" element={<WebDesign/>}/>
          <Route path="/textilecrafts" element={<TextileCrafts/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
  );
}

export default App;
