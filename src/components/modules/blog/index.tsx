"use client";
import { Button } from "@/components/ui/button";
import { IBlog } from "@/types";
import { useEffect, useState } from "react";

const BlogSection = () => {
  const [blog, setBlog] = useState<IBlog[]>([]);

  console.log(blog);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/blogData.json");
        const result = await response.json();
        setBlog(result);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full px-24 container mx-auto">
      <h1 className="text-3xl font-medium mt-10">Latest Blog Posts</h1>
      {blog.map((blog) => (
        <div key={blog?.id} className="mt-10 w-[750px]">
          <h1 className="text-2xl mb-1 font-medium">{blog.title}</h1>
          <p className=" mb-4 text-gray-600">{blog.date}</p>
          <p className="text-gray-700">{blog.description}</p>
          <Button className=" text-orange-400 mt-3" variant="outline">
            Read more...
          </Button>
        </div>
      ))}
    </div>
  );
};

export default BlogSection;
