import React from 'react'
import Search from '@/components/Search'
const index = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold'>
        I have made this using Nextjs and used Contentful for data management.
        Kindly select the Posts tab for the posts
      </h1>

      <Search />
    </div>
  )
}

export default index