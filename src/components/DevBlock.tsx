import { devWork } from "@/utils/content";
import PostCard from "./PostCard";

export default function DevBlock() {
  return(
    <div className="grid grid-cols-3 gap-5">
      {
        devWork.map(({title, text, imgSrc, link, design, dev, tags}, i) => (
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