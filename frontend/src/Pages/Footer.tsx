import React from 'react'

const Footer = () => {
  return (
    <div className='bg-orange-500 py-10'>
        {/* mx-auto to ensure they all aline */}
        {/* item-center aligns things vertically */}
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
            <span className='text-3xl text-white font-bold tracking-tight flex gap-4'>
                KeneEats.com
            </span>
            <span className='text-white font-bold tracking-tight flex gap-4'>
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
            </span>


        </div>
    </div>
  )
}

export default Footer