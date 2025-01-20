import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const topics = [
  {
    text: "JavaScript",
    img: "/js.png",
    desc: "This is the JavaScript forums",
    slug: "js-discuss",
  },
  {
    text: "Python",
    img: "/python.png",
    desc: "Explore Python programming and its vast libraries.",
    slug: "py-discuss",
  },
  {
    text: "Java",
    img: "/java.png",
    desc: "Discuss Java development, from core concepts to advanced frameworks.",
    slug: "java-discuss",
  },
  {
    text: "Web Development",
    img: "/html.png",
    desc: "Learn about Web development, a powerful systems programming.",
    slug: "web-discuss",
  },
  {
    text: "CSS",
    img: "/css.png",
    desc: "Master the fundamentals of web development with HTML and CSS.",
    slug: "css-discuss",
  },
  {
    text: "React",
    img: "/react.png",
    desc: "Dive into React, a popular JavaScript library for building user interfaces.",
    slug: "react-discuss",
  },
];

const page = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold my-5">Discussion Forums</h1>
      <div className="flex flex-wrap justify-center">
        {topics?.map((topic) => (
          <div
            className="w-1/3 gap-2 p-2 m-4 bg-slate-300 rounded-md flex justify-center flex-col items-center cursor-pointer"
            key={topic.slug}
          >
            <Image
              src={topic.img}
              width={topic.img == "/python.png" ? 60 : 100}
              height={topic.img == "/python.png" ? 60 : 100}
              alt=""
            />
            <h1 className="text-2xl">{topic.text}</h1>
            <p className="text-center">{topic.desc}</p>
            <Link href={`/forum/${topic.slug}`}>
              <Button variant="outline">Discuss now!</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
