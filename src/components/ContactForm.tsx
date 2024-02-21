export default function ContactForm() {
  return (
    // eslint-disable-next-line react/no-unknown-property
    <form  name="contact" method="POST" data-netlify="true" action="/success" netlify-honeypot="bot-field">
      <input type="hidden" name="subject" value="andrewbeme web enquiry"  />
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>
      <p className="flex flex-col">
        <label htmlFor="yourname" className="" >
          NAME
        </label>
        <input type="text" name="name" id="yourname" className="border-b border-brandblack bg-brand-grey rounded-main my-4 h-10 pl-1 focus:outline-none focus:border-b-secondary focus:ring-0 focus:ring-secondary" />
      </p>
      <p className="flex flex-col">
        <label htmlFor="youremail" className="" >
          EMAIL <span className=" text-xxs relative -mt-1">*</span>
        </label>
        <input type="email" required aria-required name="email" id="youremail" className="border-b border-brandblack bg-brand-grey rounded-main my-4 h-10 pl-1 focus:outline-none focus:border-b-secondary focus:ring-0 focus:ring-secondary" />
      </p>
      <p className="flex flex-col">
        <label htmlFor="yourmessage" className="">
          HOW CAN I HELP? <span className=" text-xxs relative -mt-1">*</span>
        </label>
        <textarea name="message" required aria-required id="yourmessage" className="border border-brandblack h-32 my-10 bg-brand-grey my-4 rounded-main pl-1 pt-1 focus:outline-none focus:border-secondary focus:ring-0 focus:ring-secondary"></textarea>
      </p>
      <p className="flex mt-14 pb-14">
        <button type="submit" className="text-left border-primary py-3 uppercase font-bold tracking-wider border-b-2 w-36 opacity-80 text-sm hover:opacity-100 hover:border-secondary">Send</button>
      </p>
    </form>
  )
}