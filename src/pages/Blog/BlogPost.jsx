import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { blogData } from '../../data/blogData';
import { Hero } from '../../components/ui';

const BlogPost = () => {
  const { slug } = useParams();
  const blog = blogData.find(post => post.slug === slug);

  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero
        title={blog.title}
        subtitle={`${blog.category} • ${blog.date}`}
      />

      <article className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{blog.author}</p>
                    <p className="text-sm text-gray-500">{blog.readTime}</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-blue-600">{blog.category}</span>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">{blog.excerpt}</p>
              
              {/* This is where the full blog content would go */}
              <p className="text-gray-600 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Points to Consider</h2>
              <ul className="list-disc pl-6 mb-6">
                <li className="text-gray-600 mb-2">Important consideration one</li>
                <li className="text-gray-600 mb-2">Critical factor to keep in mind</li>
                <li className="text-gray-600 mb-2">Additional point for reference</li>
              </ul>

              <blockquote className="border-l-4 border-blue-600 pl-4 italic my-6">
                "A relevant quote or important highlight from the article could go here, drawing attention to key information."
              </blockquote>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;