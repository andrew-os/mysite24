import { designWork } from "@/utils/content";
import PostCard from "./PostCard";

export default function DesignBlock() {
  return(
    <div className="lg:grid lg:grid-cols-3 gap-5">
      {
        designWork.map(({title, text, imgSrc, link, design, dev, tags}, i) => (
            <PostCard
              key={i}
              title={title}
              text={text}
              tags={tags}
              imgSrc={imgSrc}
              design={design}
              dev={dev}
              link={link}
            />

        ))
      }
      </div>
  )

}