import React from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '../../data/blogData';
import { Hero } from '../../components/ui';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero
        title="Our Blog"
        subtitle="Stay informed with the latest news and insights in international education"
      />

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.map((blog) => (
              <Link 
                to={`/blog/${blog.slug}`} 
                key={blog.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-blue-600 font-medium">{blog.category}</span>
                    <span className="text-sm text-gray-500">{blog.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{blog.date}</span>
                    <span className="text-sm text-gray-600">{blog.author}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;