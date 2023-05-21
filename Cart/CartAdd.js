import React, { useContext } from 'react'
import MedicineContext from '../Store/medicineContext'

const CartAdd = () => {
   const ctxdata= useContext(MedicineContext)
  return (
    <div>

{
    ctxdata.addedItemToCart.map((item)=>{
return(
    <>
    {item.name}--
    {item.price}---
    {item.quantity}
    </>
)
    })
}

    </div>
  )
}

export default CartAdd