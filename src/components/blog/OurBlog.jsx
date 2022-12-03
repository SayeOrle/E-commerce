import React from "react";
import BlogCard from "./BlogCard";

function OurBlog() {
  return (
    <div className="my-8 h-full ">
      <div className="container">
        <div className="text-center p-7">
          <h2 className="text-3xl font-semibold">From Our Blog</h2>
          <p>Summer Collection New Morden Design</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-x-5 place-items-center" >
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>

        </div>
      </div>
    </div>
  );
}

export default OurBlog;
