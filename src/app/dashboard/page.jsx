import React from 'react'
// import Posts from '@/components/Posts'
import dynamic from 'next/dynamic'

const Posts =  dynamic(() => import("../../components/Posts"), {
  ssr: false,
})

const Page = () => {
  return (
    <div>
       <Posts />
    </div>
  )
}

export default Page
