import Link from "next/link";
import DDBlock from "./DDBlock";
import PostcardImg from "./PostcardImg";
import React, { useState } from 'react';




interface PostCardProps{
  title: string;
  text: string;
  imgSrc: string;
  link: string;
  design: boolean;
  dev: boolean;
  tags: string[];
}

export default function PostCard({ title, link, text, tags, design, dev, imgSrc }: PostCardProps) {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  return (
    <div className="flex flex-col my-8">
      <div className="aspect-[389/143] relative">
        <PostcardImg imgSrc={imgSrc} alt={title} />
      </div>
      <article className={`flex flex-col grow py-5 relative postcard-article ${hovered ? `link--hovered` : ``}`}>

        <div className="items-center">
          <h2 className="uppercase text-3xl">{title}</h2>
          {/* <div className="lg:mt-5 mt-8">
            <p>{text}</p>
          </div> */}
        </div>

        <div className="mt-2">
          <DDBlock design={design} dev={dev} />
          {/* <ul className="flex flex-row">
            {tags.map((tag,i) => (
              <li key={i} className="text-xxs uppercase font-bold tracking-wide mr-2">{tag}</li>
            ))}

          </ul> */}
        </div>
        <footer>
          <a
            href={`${link}`}
            target="_blank"
            className="text-xs uppercase font-bold tracking-wider postcard-article__link opacity-80 hover:opacity-100"
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}>
            VIEW</a>
        </footer>
      </article>

    </div>
  )
}