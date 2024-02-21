import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className='flex min-h-screen flex-col'>
      <div className="lg:px-9 px-5">
        <h1 className="text-7xl">CONTACT</h1>
      </div>
      <section className="lg:my-16 lg:px-9 px-5">
        <div className="flex">
          <p className="mr-5">EMAIL</p>
          <a href="mailto:contact@andrewbe.me" target="_blank" className="font-bold uppercase opacity-80 hover-line">CONTACT@ANDREWBE.ME</a>
        </div>
      </section>

      <section className="lg:mt-16 mt-8 lg:px-9 px-5 grid grid-cols-12">
        <div className="lg:col-span-4">
          <ContactForm />
        </div>
      </section>

    </div>
  )
}