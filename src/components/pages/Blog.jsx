import React from 'react'
import BlogCard from "../blog/BlogCard"
function Blog() {
  return (
    <div className='pt-[123.99px] sm:pt-[139.98px]'>
        <div className='container w-full gap-4 mt-10 grid place-items-center'
        style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          }}
        >
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>

        </div>
    </div>
  )
}

export default Blog