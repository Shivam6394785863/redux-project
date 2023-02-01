import React from "react";
import pic from "./bond.jpg";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
export default function Shop() {
  const dispatch = useDispatch()
  const action = bindActionCreators(actionCreators,dispatch)
  return (
    <>
        <div className="card">
          <img src={pic} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Mens overcoat</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary w-100" onClick={()=>action.addToCart(1)}>
              Add to Cart
            </a>
            <a href="#" className="btn btn-primary mt-2 w-100" onClick={()=>action.removeFromCart(1)}>
              Remove From Cart
            </a>
          </div>
      </div>
    </>
  );
}
