import React from 'react'

const data =[
    {
        title: "Bonsai 001",
        image: "/images/plants/product-01.jpg",
    },
    {
        title: "Bonsai 001",
        image: "/images/plants/product-01.jpg",
    },
    {
        title: "Bonsai 001",
        image: "/images/plants/product-01.jpg",
    }, 
]

function Listings() {
  return (
    <div>
        <h2 className='text-xl md:text-2xl lg:text-3xl font-bold text-color-primary mb-4'>My Listings</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                data.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className="shadow p-3 rounded-xl text-center"> 
                                <img src={item.image} alt={item.title} />
                                <h3 className='text-base sm:text-xl font-bold text-gray-600'>{item.title}</h3>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Listings