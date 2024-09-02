import React from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import matter from "gray-matter";
import fs from 'fs'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import OnThisPage from "@/components/OnThisPage";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";

const BlogPost = async ({ params }: { params: { slug: string } }) => {
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .use(rehypeAutolinkHeadings)
    .use(rehypeSlug)
    .use(rehypePrettyCode, {
      theme: 'material-theme-darker',
      transformers: [
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 3_000,
        }),
      ],
    })

  const filePath = `content/${params.slug}.md`;
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const {data, content} = matter(fileContent)
  const htmlContent = (await processor.process(content)).toString();

  return (
    <div className="max-w-full w-full mx-auto px-4 py-8 md:py-12 flex lg:justify-between justify-center">
      <article className="prose lg:prose-xl dark:prose-invert w-full lg:w-[60%]">
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="content" />
      </article>
      <div className="mt-8 hidden lg:block lg:w-[30%] md:mt-12">
        <OnThisPage htmlContent={htmlContent} />
      </div>
    </div>
  );
};

export default BlogPost;