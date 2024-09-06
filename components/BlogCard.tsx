import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "./ui/card";

type TBlogCard = {
  slug: string;
  title: string;
  description: string;
  imgUrl: string;
};

interface BlogCardProps {
  blog: TBlogCard;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-shadow hover:shadow-lg">
      <div className="relative w-full pt-[56.25%]">
        <Image
          src={blog.imgUrl ? blog.imgUrl : "/image.webp"}
          alt={blog.title}
          layout="fill"
          sizes="(100vw, 100vh)"
          objectFit="cover"
          className="absolute top-0 left-0"
        />
      </div>
      <CardHeader className="flex-grow">
        <CardTitle className="text-xl md:text-2xl mb-2">{blog.title}</CardTitle>
        <CardDescription className="text-sm md:text-base">
          {blog.description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Link href={`/blogpost/${blog.slug}`} passHref>
          <Button className="w-full sm:w-auto">Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
