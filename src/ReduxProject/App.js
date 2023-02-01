import React from "react";
import Navbar from "./Navbar";
import Shop from "./Shop";
import SubTotal from "./SubTotal";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="continer">
        <div className="row">
          <div className="col-3">
            <Shop />
          </div>
          <div className="col-3"></div> 
          <div className="col-3">
            <SubTotal/>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </>
  );
}
