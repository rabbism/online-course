import React from 'react'
import './Cart.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Cart(props) {
  const cart = props.cart
  const total = cart.reduce((total, data) => total + data.price, 0)

  const formatNumber = (num) => {
    const toFixedNum = num.toFixed(2)
    const formattedNum = Number(toFixedNum)
    return formattedNum
  }

  

  let grandTotal = total

  return (
    <div className='cart'>
      <h4 className="text-center" >Your Cart</h4>
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center ">
          Course Ordered
    <span class="badge badge-primary badge-pill  ml-2">{cart.length}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Course Fees
    <span class="badge badge-primary badge-pill ml-2">{formatNumber(total)}</span>
        </li>
       
        
        <li class="list-group-item d-flex justify-content-between align-items-center">
        Total Fees
  <span class="badge badge-primary badge-pill ml-2">{formatNumber(grandTotal)}</span>
        </li>
      </ul>
    </div>
  )
}

export default Cart