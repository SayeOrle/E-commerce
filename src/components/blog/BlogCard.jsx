import React from 'react'

function BlogCard() {
  return (
    <div className='max-w-[24rem] w-full h-[25rem] border-2 border-gray-300 hover:scale-105 transition-all'>
        <div className='mb-5'>
            <img className='object-cover' src="https://e-commerce-udemy.netlify.app/img/blogs/blog1.jpg" alt="" />
        </div>
        <div className='text-center flex flex-col gap-1'>
            <span className='opacity-70 text-sm'>25 Feb, 2021 - 0 Comments</span>
            <a href="" className='text-xl font-semibold'>Aliquam hendrerit mi metus</a>
            <a href="" className='underline underline-offset-4 hover:text-[#1367fe]'>Read More</a>
        </div>
    </div>
  )
}

export default BlogCard