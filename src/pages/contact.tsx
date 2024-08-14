// import ContactForm from "@/components/ContactForm";
import Image from "next/image";

export default function Contact() {
  return (
    <div className='flex min-h-screen flex-col'>
      <div className="grid grid-cols-12">
        <div className="flex flex-col col-span-6">
          <div className="lg:px-9 px-5">
            <h1 className="text-7xl">CONTACT</h1>
          </div>
          <section className="lg:my-16 lg:px-9 px-5">
            <div className="flex">
              <p className="mr-5">EMAIL</p>
              <a href="mailto:andrew.sleighweb@gmail.com" target="_blank" className="font-bold uppercase opacity-80 hover-line">andrew.sleighweb@gmail.com</a>
            </div>
          </section>

          <section className="lg:mt-16 mt-8 lg:px-9 px-5 grid grid-cols-12">
            <div className="lg:col-span-8">
              {/* <ContactForm /> */}
            </div>
            </section>
        </div>
        <div className="absolute top-0 right-0 h-dvh w-1/2 aspect-[10/13] col-span-6">
          <Image
            fill
            style={{
              objectFit: 'cover', // cover, contain, none
            }}
            src={"https://res.cloudinary.com/dr34kiiow/image/upload/v1709557882/abm/brutalist-5880149_1280_tyorhd.jpg"}
          alt="Brutalism Web Designer"
          />

        </div>
      </div>

    </div>
  )
}