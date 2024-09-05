import React from 'react'

const AuxBar = () => {

    const data =[
        "For You",
        "Trending",
        "Friends",
        "Filter",
        "All",
        "Posts",
        "Swiss Events"
    ]

  return (
    <div
        className='w-full rounded-xl bg-[#1D2939] p-8'
    >

    {
        data.map((cur, id) => (
            <p
                key={id}
                className={`mb-8 font-bold text-xl ${(id === 0 || id === 4) ? "text-[#D6594B]" : "text-white"}`}
            >
                {cur}
            </p>
        ))
    }

    </div>
  )
}

export default AuxBar