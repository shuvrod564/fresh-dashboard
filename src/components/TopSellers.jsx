import React from 'react'
import { Link } from 'react-router-dom'

function TopSellers(props) {
  return (
    <div className=''>
        <div className="flex items-center justify-between mb-4">
            <h2 className='text-lg md:text-xl lg:text-2xl font-bold text-color-primary m-0'>{props.title}</h2>
            <Link to={'/'} className='text-color-muted text-sm font-semibold'>View All</Link>
        </div>
        <div className="flex shadow-lg border border-slate-100 p-4 rounded-lg bg-white">
            <div className="flex w-1/2"> 
                {
                    props.data.map((item, index)=>{
                        return (
                            <div key={index} className={`
                                w-12 h-12 rounded-full overflow-hidden border-2 border-white
                                ${index == 0 ? '' : ' -ml-4'}
                            `}>
                                <img src={item.image} alt={item.title} />  
                            </div>
                        )
                    })
                }
            </div>
            <div className="w-1/2 border-l-2 border-lime-600 pl-5">
                <p className="text-color-dark font-bold">1,542 plants sold</p>
                <div className="flex items-center justify-between text-color-muted font-medium">
                    <span>10 sellers</span>
                    <span>7 days</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopSellers