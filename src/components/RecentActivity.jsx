import React from 'react'
import { Link } from 'react-router-dom' 

const data = [
    {
        title: "Togetes erecta",
        desc: "Lorem ipsum dolor",
        date: "3 months ago",
        thumbnail: "/images/user-01.webp"
    },
    {
        title: "Cathaanthus roseus",
        desc: "Lorem ipsum dolor",
        date: "3 months ago",
        thumbnail: "/images/Cathaanthus-roseus.jpg"
    },
    {
        title: "Scrophulariaceae",
        desc: "Lorem ipsum dolor",
        date: "3 months ago",
        thumbnail: "/images/Scrophulariaceae.jpg"
    },
    {
        title: "Furr Plant with leaves",
        desc: "Lorem ipsum dolor",
        date: "3 months ago",
        thumbnail: "/images/Furr-Plant-with-leaves.jpg"
    },
    {
        title: "Ageratum houstonianum",
        desc: "Lorem ipsum dolor",
        date: "3 months ago",
        thumbnail: "/images/Ageratum-houstonianum.jpg"
    },
    {
        title: "William David",
        desc: "Lorem ipsum dolor",
        date: "3 months ago",
        thumbnail: "/images/Lues.jpg"
    },
    {
        title: "American Marigold",
        desc: "Lorem ipsum dolor",
        date: "3 months ago",
        thumbnail: "/images/American-Marigold.jpg"
    },
]

function RecentActivity() {
  return (
    <div className='mt-8'>
        <div className="flex items-center justify-between mb-4">
            <h2 className='text-lg md:text-xl lg:text-2xl font-bold text-color-primary m-0'>Recent Activity</h2>
            <Link to={'/'} className='text-color-muted text-sm font-semibold'>View All</Link>
        </div>
        <ul className="mt-4 flex flex-col gap-4">
            {
                data.map((item, index) =>{
                    return (
                        <li className='flex' key={index}>
                            <div className="col flex gap-4">
                                <img src={item.thumbnail} alt={item.title} className='w-12 h-12 rounded-full' />
                                <div className="col">
                                    
                                    <h3 className='text-base font-bold text-gray-800'>{item.title}</h3>
                                    <p className='text-xs text-gray-400'>
                                        <span>{item.desc}</span>, &nbsp;
                                        <span>{item.date}</span>
                                    </p>
                                </div>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default RecentActivity