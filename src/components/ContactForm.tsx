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
        <label htmlFor="yourname" className="font-semibold" >
          name
        </label>
        <input type="text" name="name" id="yourname" className="border-b border-brandblack bg-brand-grey rounded-main my-4 h-10 pl-4 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary" />
      </p>
      <p className="flex flex-col">
        <label htmlFor="youremail" className="font-semibold" >
          email <span className=" text-xxs relative -mt-1">*</span>
        </label>
        <input type="email" required aria-required name="email" id="youremail" className="border-b border-brandblack bg-brand-grey rounded-main my-4 h-10 pl-4 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary" />
      </p>
      <p className="flex flex-col">
        <label htmlFor="yourmessage" className="font-semibold">
          how can I help? <span className=" text-xxs relative -mt-1">*</span>
        </label>
        <textarea name="message" required aria-required id="yourmessage" className="border border-brandblack h-32 my-10 bg-brand-grey my-4 rounded-main pl-4 pt-1 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary"></textarea>
      </p>
      <p className="flex justify-end mt-14">
        <button type="submit" className="py-6 px-5 bg-primary text-white text-xl rounded-main h-20 w-44 hover:bg-secondary">Send</button>
      </p>
    </form>
  )
}