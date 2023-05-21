import React, { useContext } from "react";
import MedicineContext from "../Store/medicineContext";
import "./displayData.css";

const DisplayData = () => {
  const ctxdata = useContext(MedicineContext);

  const addToCartFunc=(item)=>{
ctxdata.addToCartCtxFunc(item)
  }
  return (
    <div>
      {ctxdata.medicineFormValues.map((item) => {
        return (
          <div className="displayData">
            <div className="data">{item.name}</div>
            <div className="data">{item.discription}</div>
            <div className="data">{item.price}</div>
            <div className="data">{item.quantity}</div>
            <button
              className="data"
              onClick={() => {
                addToCartFunc({...item,quantity:1});
              }}
            >
              Add
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayData;
