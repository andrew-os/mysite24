// 'use client';
// import { useState } from 'react';

// export function ContactForm() {
//   const [status, setStatus] = useState(null);
//   const [error, setError] = useState(null);

//   const handleFormSubmit = async (event) => {
//       event.preventDefault();
//       try {
//           setStatus('pending');
//           setError(null);
//           const myForm = event.target;
//           const formData = new FormData(myForm);
//           const res = await fetch('/__forms.html', {
//               method: 'POST',
//               headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//               body: new URLSearchParams(formData).toString()
//           });
//           if (res.status === 200) {
//               setStatus('ok');
//           } else {
//               setStatus('error');
//               setError(`${res.status} ${res.statusText}`);
//           }
//       } catch (e) {
//           setStatus('error');
//           setError(`${e}`);
//       }
//   };

//   return (
//     <form name="contact" onSubmit={handleFormSubmit}>
//         <input type="hidden" name="form-name" value="contact" />
//         <p className="flex flex-col">
//         <label htmlFor="yourname" className="" >
//           NAME
//         </label>
//         <input type="text" name="name" id="yourname" className="border-b border-brandblack bg-brand-grey rounded-main my-4 h-10 pl-1 focus:outline-none focus:border-b-secondary focus:ring-0 focus:ring-secondary" />
//       </p>
//       <p className="flex flex-col">
//         <label htmlFor="youremail" className="" >
//           EMAIL <span className=" text-xxs relative -mt-1">*</span>
//         </label>
//         <input type="email" required aria-required name="email" id="youremail" className="border-b border-brandblack bg-brand-grey rounded-main my-4 h-10 pl-1 focus:outline-none focus:border-b-secondary focus:ring-0 focus:ring-secondary" />
//       </p>
//       <p className="flex flex-col">
//         <label htmlFor="yourmessage" className="">
//           HOW CAN I HELP? <span className=" text-xxs relative -mt-1">*</span>
//         </label>
//         <textarea name="message" required aria-required id="yourmessage" className="border border-brandblack h-32 my-10 bg-brand-grey my-4 rounded-main pl-1 pt-1 focus:outline-none focus:border-secondary focus:ring-0 focus:ring-secondary"></textarea>
//       </p>
//       <p className="flex mt-14 pb-14">
//         <button type="submit" className="text-left border-primary py-3 uppercase font-bold tracking-wider border-b-2 w-36 opacity-80 text-sm hover:opacity-100 hover:border-secondary">Send</button>
//       </p>
//     </form>
//   );
// }

