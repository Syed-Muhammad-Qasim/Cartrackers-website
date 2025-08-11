import { Star, User } from "lucide-react";
import React, { useState, useEffect } from "react";

const Section10 = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const defaultBlogPosts = [
      {
        id: 1,
        image: "Image1section10.jpg",
        date: "15 MAY",
        author: "Malen",
        comments: 3,
        title: "Efficient repairs, reliable Results, every time here",
        readMore: "READ MORE",
      },
      {
        id: 2,
        image: "Image2section10.jpg",
        date: "15 MAY",
        author: "Malen",
        comments: 3,
        title: "We'll get your car back on the road",
        readMore: "READ MORE",
      },
      {
        id: 3,
        image: "Image3section10.jpg",
        date: "15 MAY",
        author: "Malen",
        comments: 3,
        title: "Quality repairs for your car at affordable prices",
        readMore: "READ MORE",
      },
    ];

    const savedBlogPosts = localStorage.getItem("cartracker-blog-posts");
    if (savedBlogPosts) {
      try {
        const parsedBlogPosts = JSON.parse(savedBlogPosts);
        console.log("Blog posts loaded from localStorage:", parsedBlogPosts);
        setBlogPosts(parsedBlogPosts);
      } catch (error) {
        console.error("Error parsing blog posts:", error);
        setBlogPosts(defaultBlogPosts);
        localStorage.setItem(
          "cartracker-blog-posts",
          JSON.stringify(defaultBlogPosts)
        );
      }
    } else {
      console.log(
        "No saved blog posts found, using defaults:",
        defaultBlogPosts
      );
      setBlogPosts(defaultBlogPosts);
      localStorage.setItem(
        "cartracker-blog-posts",
        JSON.stringify(defaultBlogPosts)
      );
    }
  }, []);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-orange-500 text-lg">
              <Star className="inline-block w-4 h-4 fill-orange-400" />
            </span>
            <span className="text-orange-500 font-semibold uppercase tracking-wide">
              BLOGS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Latest Blog & News
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />

                <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-2 rounded-md">
                  <div className="text-center">
                    <div className="text-lg font-bold">
                      {post.date.split(" ")[0]}
                    </div>
                    <div className="text-sm">{post.date.split(" ")[1]}</div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <span className="text-orange-400">
                      <User className="w-4 h-4" />
                    </span>
                    <span>Post By {post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-orange-400"></span>
                    <span>Comments({post.comments})</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight hover:text-orange-500 transition-colors duration-300">
                  {post.title}
                </h3>

                <button className="text-gray-500 font-semibold hover:text-orange-600 transition-colors duration-300 flex items-center gap-2">
                  {post.readMore}
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section10;
