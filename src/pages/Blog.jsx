import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BlogCard = ({ title, image, description, category, slug }) => {
  return (
    <a
      href={`/blog/${slug}`}
      className="group flex flex-col justify-between rounded-xl border border-border bg-accent p-6"
    >
      <div>
        <div className="flex aspect-[3/2] text-clip rounded-xl">
          <div className="flex-1">
            <div className="relative size-full origin-bottom transition duration-300 group-hover:scale-105">
              <img
                src={image}
                alt={title}
                className="size-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
        {title}
      </div>
      <div className="mb-8 line-clamp-2 text-sm text-zinc-600 md:mb-12 md:text-base lg:mb-9">
        {description}
      </div>
      <div>
        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-zinc-200 text-zinc-800 hover:bg-black/80">
          {category}
        </div>
      </div>
    </a>
  );
};

const BlogPage = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Test",
      image: "/public/hero-image.jpg",
      description: "Hello",
      category: "Test",
    },
    {
      id: 2,
      title: "Next test",
      image: "/public/hero-image.jpg",
      description: "Hello",
      category: "Test",
    },
    {
      id: 3,
      title: "Next test",
      image: "/public/hero-image.jpg",
      description: "Hello",
      category: "Test",
    },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch blogs from the server
    fetch("http://127.0.0.1:8000/api/blogposts/")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Navbar />
      <section className="py-32">
        <div className="container">
          <div className="mb-8 md:mb-10 lg:mb-12">
            <h2 className="mb-6 w-full text-4xl font-medium md:mb-14 md:text-5xl lg:mb-16 lg:text-6xl">
              Our Featured Insights...
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:gap-6 2xl:grid-cols-3">
            {blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                title={blog.title}
                slug={blog.slug}
                image={blog.image}
                description={blog.description}
                category={blog.category}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogPage;
