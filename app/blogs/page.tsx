import React from 'react';
import BlogCard from '@/components/BlogCard';
import blogs from '@/config/sample-blogs';

interface Blog {
  slug: string;
  title: string;
  description: string;
  content: string;
  imageUrl?: string;
}

interface BlogListProps {
  blogs: Blog[];
}

const BlogList: React.FC = () => {
  return (
    <div className="py-14">
      <h1 className="text-3xl font-bold text-center mb-8">Our Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} blog={{ slug: blog.slug, title: blog.title, description: blog.description, imgUrl: blog.imgUrl }} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
