import React, { useState, useEffect } from "react";

export default function BlogLanding() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Test",
      image: "/hero-image.jpg",
      description: "Hello",
      category: "Test",
    },
    {
      id: 2,
      title: "Next test",
      image: "/hero-image.jpg",
      description: "Hello",
      category: "Test",
    },
    {
      id: 3,
      title: "Next test",
      image: "/hero-image.jpg",
      description: "Hello",
      category: "Test",
    },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
    <div className="py-12">
      <section>
        <div className="container px-6 py-10 mx-auto">
          <div>
            <h1 className="text-white text-3xl md:text-6xl pb-8 text-center">
              Our Featured <span className="text-blue-500">Insights</span>
            </h1>
          </div>{" "}
          <div className="lg:flex lg:-mx-6">
            <div className="lg:w-3/4 lg:px-6 hover:cursor-pointer">
              <a href={"/blog/"+blogs[0].slug}>
                <img
                  className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
                  src={
                    blogs[0].image ||
                    "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  }
                  alt=""
                />

                <div>
                  <h1 className="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800 dark:text-white hover:text-gray-500 hover:underline">
                    {blogs[0].title}
                  </h1>
                </div>
              </a>
            </div>

            <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
              {blogs.map((blog, idx) => {
                if (idx == 0) {
                  return;
                }
                return (
                  <>
                    <div>
                      <h3 className="text-blue-500 capitalize">
                        Blog Category
                      </h3>

                      <a
                        href={"/blog/" + blog.slug}
                        className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400"
                      >
                        {blog.title}
                      </a>
                    </div>
                    <hr className="my-6 border-gray-200 dark:border-gray-700" />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
