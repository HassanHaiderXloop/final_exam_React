import React from 'react'
import { useNavigate } from 'react-router-dom'

const ThankYou = () => {

    const navigator =    useNavigate();
    function handleRemoveAll(){
        fetch(
            `http://localhost:8081/cart/delete/all`,
            // `http://localhost:5000/job/post`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              }
            },
            {
              mode: "cors",
            }
          )
            .then((data) => {
                navigator('/');
    
            })
    }
  return (
    <div>
        <p className='text-center text-6xl pt-4 '>
            Thanks You
        </p>
        <div className='text-center pt-4' >
        <button 
            className='bg-green-400 sm:rounded-md px-3 py-1  text-yellow-100 hover:bg-green-700'
            onClick={()=>{handleRemoveAll()}}
            >
            Start Over</button>
            </div>
    </div>
  )
}

export default ThankYou
