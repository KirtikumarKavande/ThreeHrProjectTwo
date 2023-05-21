import React, { useContext, useRef, useState } from "react";
import "./medicineForm.css";
import MedicineContext from "../Store/medicineContext";
import DisplayData from "../DisplayData/DisplayData";
import CartAdd from "../Cart/CartAdd";

const MedicineForm = () => {
  const [isShow, setIsShow] = useState(false);

  const ctxdata = useContext(MedicineContext);
  console.log(ctxdata);
  const name = useRef();
  const discription = useRef();
  const price = useRef();
  const quantity = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      name: name.current.value,
      discription: discription.current.value,
      price:Number (price.current.value),
      quantity:Number (quantity.current.value),
    };
    name.current.value = "";
    discription.current.value = "";
    price.current.value = "";
    quantity.current.value = "";

    ctxdata.getMedicineFormValueFunc(obj);
  };

  return (
    <div>
      <button
        onClick={() => {
          setIsShow(!isShow);
        }}
      >
        Cart
      </button>
      {isShow && <CartAdd />}
      <form onSubmit={handleSubmit}>
        <div className="ContainerForm">
          <div>
            <input placeholder="Medicine Name" ref={name} />
          </div>
          <div>
            <input placeholder="description" ref={discription} />
          </div>
          <div>
            <input placeholder="Price" ref={price} />
          </div>
          <div>
            <input placeholder="Quantity" ref={quantity} />
          </div>
          <button type="submit">Add Product</button>
        </div>
      </form>
      <DisplayData />
    </div>
  );
};

export default MedicineForm;
