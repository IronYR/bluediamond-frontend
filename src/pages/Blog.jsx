import React from "react";

const BlogCard = ({ post }) => {
  return (
    <a
      href={`/blog/${post.slug}`}
      className="flex flex-col overflow-clip rounded-xl border border-border cursor-pointer"
    >
      <div>
        <img
          src={post.image}
          alt={post.title}
          className="aspect-[16/9] h-full w-full object-cover object-center"
        />
      </div>
      <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
        <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-xl lg:mb-6">
          {post.title}
        </h3>
        <p className="mb-3 text-gray-400 md:mb-4 lg:mb-6">{post.description}</p>
        <p className="flex items-center hover:underline">
          Read more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right ml-2 size-4"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </p>
      </div>
    </a>
  );
};

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BlogPage = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Test",
      image: "/static/hero-image.jpg",
      description: "Hello",
      category: "Test",
    },
    {
      id: 2,
      title: "Next test",
      image: "/static/hero-image.jpg",
      description: "Hello",
      category: "Test",
    },
    {
      id: 3,
      title: "Next test",
      image: "/static/hero-image.jpg",
      description: "Hello",
      category: "Test",
    },
  ]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch blogs from the server
    fetch("/api/api/blogposts/")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <Navbar/>
      <section className="py-32 container" style={{width:"100vw"}}>
        <div className="container flex flex-col items-center gap-16 lg:px-16">
          <div className="text-center">
            <h2 className="mb-3 text-pretty text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
              Our Featured Insights...
            </h2>
            <p className="mb-8 text-white md:text-base lg:max-w-2xl lg:text-lg">
              Explore the latest articles and insights from our blog.
            </p>

          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default BlogPage;
