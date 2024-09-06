// import ProfileSetup from '@/components/profileSetup'
import dynamic from 'next/dynamic'
import React from 'react'

const ProfileSetup = dynamic(() => import ("../../components/profileSetup.jsx"), {
  ssr: false,
})

const Page = () => {
  return (
    <div>
       <ProfileSetup/>
    </div>
  )
}

export default Page
