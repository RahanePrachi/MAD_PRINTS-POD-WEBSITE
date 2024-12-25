import React from 'react'

const Review = () => {
  return (
    <div className="flex flex-col gap-12 p-4 border rounded-lg border-[#9F9F9F] max-w-full m-5 bg-white overflow-auto h-[75vh]">
      <div >
        <p className="font-poppins font-semibold text-3xl">
          Done
        </p>
      </div>
      <div className='flex flex-col justify-center items-center gap-3'>
        <div className='font-poppins font-semibold text-5xl '>Thank you! Your order is <span className='text-[#2ECC71]'>Placed</span> .</div>
        <div className='font-poppins font-normal'>We’ve sent the order details to <span className='font-bold'>johnkevin@gmail.com  & 90123456789</span> </div>
        
      </div>

      <div className='flex justify-center items-center'>
      <button className="mt-4 font-segoe text-white bg-[#000088] py-2 px-4 rounded-lg flex items-center justify-center lg:w-[400px]">continue to Order</button>
      </div>
    </div>
  )
}

export default Review
