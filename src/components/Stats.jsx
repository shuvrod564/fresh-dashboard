import React from 'react'
import { GoArrowRight } from 'react-icons/go'
import { Link } from 'react-router-dom'

function Stats() {
  return (
    <div className='relative p-6 md:p-8 rounded-lg bg-[rgb(147,238,76)]'>
        <h2 className="text-xl lg:text-2xl font-bold mb-5">My Stats</h2>
        <div className="grid grid-cols-2 gap-2">
            <div>
                <p className="mb-0 font-semibold">Today</p>
                <p className="mb-0 font-semibold text-lg">4 Orders</p>
            </div>
            <div>
                <p className="mb-0 font-semibold">This Month</p>
                <p className="mb-0 font-semibold text-lg">173 Orders</p>
            </div>
        </div>
        <div className="mt-5">
            <Link to={"/"} className='font-medium inline-flex items-center gap-2 hover:underline'>Go to my orders <GoArrowRight className='text-lg' /></Link>
        </div>
    </div>
  )
}

export default Stats