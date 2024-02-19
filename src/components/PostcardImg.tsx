import Image from "next/image";

interface PImgProps{
  imgSrc: string
  alt: string
}


export default function PostcardImg({imgSrc, alt}: PImgProps){
  return (
    <Image src={imgSrc} alt={alt}
      fill
      className="shadow-md"
    // sizes="(min-width: 808px) 50vw, 100vw"
    style={{
      objectFit: 'cover', // cover, contain, none
    }}
    />

  )
}