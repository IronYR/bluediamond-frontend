import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function BlogPost() {
  const { slug } = useParams(); // Get the dynamic title from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the blog post based on the title
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/blogposts/${slug}/`
        );
        if (!response.ok) {
          throw new Error("Post not found");
        }
        const data = await response.json();
        setPost(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <Navbar />
      <section className="container" style={{width:"100vw"}}>
        <div className="min-h-screen flex justify-center">
          <div className="shadow-lg rounded-lg overflow-hidden max-w-5xl w-full mx-4">
            {/* Blog Cover Image */}
            <div className="w-full h-64 sm:h-80 md:h-96 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={post.image} 
                alt="Blog Cover"
              />
            </div>

            {/* Blog Content */}
            <div className="p-6">
              <h1 className="text-3xl sm:text-4xl font-bold  mb-4 ">
                {post.title}
              </h1>
              <p className=" text-lg leading-relaxed">
                {post.content}
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default BlogPost;
