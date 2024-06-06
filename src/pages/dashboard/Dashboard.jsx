import React from 'react'
import { Link } from 'react-router-dom'
import Listings from '../../components/Listings'
import TopSellers from '../../components/TopSellers'
import Stats from '../../components/Stats'
import RecentActivity from '../../components/RecentActivity'

const data = {
  topsellers : [
    { image: '/images/user-01.webp', },
    { image: '/images/user-02.webp', },
    { image: '/images/user-03.webp', }, 
    { image: '/images/user-04.webp', }, 
  ]
}

function Dashboard() {
  return (
    <>
      <div className='flex flex-row flex-wrap mb-10'>
        <div className="w-full lg:w-[70%] lg:pr-8">
          <div className="relative mb-10 rounded-xl min-h-[300px] lg:p-12 p-5 shadow-[0px_20px_20px_rgba(0,0,0,0.25)]">
            <img 
              src="/images/leap.jpg" 
              alt="leap image"
              className='w-full h-full object-cover rounded-xl absolute top-0 left-0 z-0' 
            />
            <div className="w-full h-full object-cover rounded-xl absolute top-0 left-0 z-10 bg-slate-950 bg-opacity-75 mix-blend-multiply"></div>
            <div className="relative z-30">
              <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-color-primary mb-3'>Create and Sell Extraordinary Products</h2>
              <p className=' text-slate-100 text-xl mb-6'>The word's first and largest handmade product marketplace.</p>
              <div className="flex flex-wrap gap-4">
                <Link to={'/'} className='bg-white text-color-primary px-6 py-3 rounded-lg font-semibold tracking-wider hover:bg-transparent hover:text-white border-2 border-transparent hover:border-white'>
                  Explore More
                </Link>
                <Link to={'/'} className='bg-transparent text-white px-6 py-3 rounded-lg font-semibold tracking-wider hover:bg-color-primary hover:text-white border-2 border-white hover:border-color-primary'>
                  Top Sellers
                </Link>
              </div>
            </div>
          </div>
          <Listings />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
            <div>
              <TopSellers 
                title="Top Sellers"
                data={data.topsellers}
              />
            </div>
            <div>
              <TopSellers 
                title="Top Sellers"
                data={data.topsellers}
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[30%] mt-6 lg:mt-0">
          <Stats />

          <RecentActivity />
        </div>

      </div>
    


    </>
  )
}

export default Dashboard