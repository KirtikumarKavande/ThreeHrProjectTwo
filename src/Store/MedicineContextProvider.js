import React, { useState } from 'react'
import MedicineContext from './medicineContext'

const MedicineContextProvider = (props) => {
const[medicine,setMedicine]=useState([])
const[addedItemToCart,setAddedItemToCart]=useState([])

const getMedicineFormValueFunc=(item)=>{
setMedicine([...medicine,item])

}
const addToCartCtxFunc=(item)=>{
    let quantity=0
    const index = obj.medicineFormValues.findIndex((object) => {
        return object.id === item.id;
      });
      const existingCartItem = obj.medicineFormValues[index];
      if (existingCartItem) {
        let updatedItem = {
            ...existingCartItem,
            quantity: quantity + item.quantity,
          };
        const newUpdatedObj = [...obj.medicineFormValues];    
        newUpdatedObj[index] = updatedItem;
        setAddedItemToCart(newUpdatedObj);
        }else{
            setAddedItemToCart([...addedItemToCart,item])

        }
  

}
const obj={
    medicineFormValues:medicine,
    getMedicineFormValueFunc:getMedicineFormValueFunc,
    addToCartCtxFunc:addToCartCtxFunc,
    addedItemToCart:addedItemToCart

}

  return (
    <div>
<MedicineContext.Provider value={obj}>{props.children}</MedicineContext.Provider>

    </div>
  )
}

export default MedicineContextProvider