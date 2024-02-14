

interface Work{
  workSet: "design" | "dev"
}
interface PostCardProps{
  title: string;
  text: string;
  imgSrc: string;
  works: Work [];
  tags: [];
}

export default function PostCard({title, text, tags, works}:PostCardProps) {
  return (
    <div>
      <article className="lg:px-10 px-5 flex flex-col">
        <h2>{title}</h2>
        <div className="mt-5">
          <p>{text}</p>
        </div>
        <div className="lg:mt-9 mt-5">
          <ul>
            {
              works.map((w, i) => (
                <li key={i}>{w}</li>
              ))
            }
          </ul>
        </div>
        <div className="lg:mt-9 mt-5">
          <ul>
            {
              tags.map((t, i) => (
              <li key={i}>{t}</li>
            ))}

          </ul>
        </div>
      </article>
      <div>
        image
      </div>
    </div>
  )
}