type Blogs = {
  slug: string;
  title: string;
  content: string;
  description: string;
  imgUrl: string;
};

const blogs: Blogs[] = [
  {
    slug: "understanding-react-hooks",
    title: "Understanding React Hooks",
    content: ``,
    description:
      "An in-depth guide to understanding and using React hooks in your projects.",
    imgUrl: "/react-hooks-tutorial.webp",
  },
  {
    slug: "mastering-javascript-es6-features",
    title: "Mastering JavaScript ES6 Features",
    content: ``,
    description:
      "Learn about the new features introduced in ECMAScript 6 and how they can improve your JavaScript code.",
    imgUrl: "/es6-js.webp",
  },
  {
    slug: "css-grid-vs-flexbox",
    title: "CSS Grid vs. Flexbox: When to Use Which?",
    content: ``,
    description:
      "A comparison between CSS Grid and Flexbox, explaining their strengths and when to use each.",
    imgUrl: "/css-grid-vs-flexbox.webp",
  },
  {
    slug: "introduction-to-typescript",
    title: "Introduction to TypeScript",
    content: ``,
    description:
      "A beginner-friendly introduction to TypeScript, its features, and why you should consider using it.",
    imgUrl: "/typescript.webp",
  },
  {
    slug: "optimizing-react-performance",
    title: "Optimizing React Performance",
    content: ``,
    description:
      "Best practices and techniques for optimizing the performance of your React applications.",
    imgUrl: "/react-performance-optimal.webp",
  },
  {
    slug: "mastering-backend-development",
    title: "Mastering Backend Development",
    content: ``,
    description:
      "A Comprehensive Guide  from JavaScript fundamentals to advanced database operations. ",
    imgUrl: "/backend-development.webp",
  },
  {
    slug: "generative-ai-tutorial",
    title: "Generative AI: Concepts, Theory, and Examples",
    content: ``,
    description:
      "Mastering generative AI concepts, theory, and examples.",
    imgUrl: "/generative-ai.webp",
  },
  {
    slug: "qbasic-tutorial",
    title: "QBASIC Programming: A Beginner-Friendly Guide",
    content: ``,
    description:
      "A Comprehensive Guide to learn and master QBasic from scratch.",
    imgUrl: "/qbasic.webp",
  },
];

export default blogs;
