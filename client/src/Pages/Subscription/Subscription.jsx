import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import "./Subscription.css";
import { useNavigate } from "react-router-dom";
import axios from "axios"

const Subscription = () => { 
  const handleFree = () => {
    alert('Its is free and already given')
  }
  const handleOpenRazorpay = (data) => {

    const options = {
        key:'rzp_test_j44SRCoxhCji7e',
        amount: Number(data.amount),
        currency: data.currency,
        order_id: data.id,
        name: 'SHOPPING APP',//
        description: 'XYZ',//
        handler: function (response) {
            console.log(response, "34")
            axios.post('http://localhost:5000/verfiy', { response: response })
                .then(res => {
                    console.log(res, "37")
                    // your orders
                })
                .catch(err => {
                    console.log(err)
                })
        }

    }
    const rzp = new window.Razorpay((options));

    rzp.open()

}

  const handlePayment = (amount) => {
    const _data = { amount: amount }
    axios.post('http://localhost:5000/orders', _data)
        .then(res => {
            console.log(res.data, "29")
            handleOpenRazorpay(res.data.data)
        })
        .catch(err => {
            console.log(err)
        })
}

  return (
    <div>
      <h1 className='heading'>
        Welcome to Subsciption page
        </h1>
        <div className='main'>
        <div className='cards'>
          <div className='details'>
            <b className='free'>Free</b>
            <p>1 Question per day</p>
            <p>Price: <span className='symbol'> &#8377;0</span></p>
          </div>
          <button className='button' onClick={handleFree}>BUY NOW</button>
        </div>

        <div className='cards  borders'>
          <div className='details'>
            <b className='free'>Silver</b>
            <p>5 Question per day</p>
            <p>Price: <span className='symbol'> &#8377;100</span></p>
          </div>
          <button className='button'onClick={() => handlePayment(100)}>BUY NOW</button>
        </div>

        <div className='cards borders'>
          <div className='details'>
            <b className='free'>Gold</b>
            <p>Unlimited Question </p>
            <p>Price:<span className='symbol'> &#8377;1000</span> </p>
          </div>
          <button className='button' onClick={() => handlePayment(1000)}>BUY NOW</button>
        </div>
        </div>

    </div>
  )
}

export default Subscription;