import React, { useEffect } from "react";
import { contactDetails } from "../Details";
import { useRef } from "react";
import gsap from "gsap";

function Contact() {
  const { email, phone } = contactDetails;
  const h11 = useRef();
  const h12 = useRef();

  useEffect(()=>{
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
  })
  return (
    <main className="container mx-auto max-width section">
      <h1 ref={h11} className="text-center text-2xl md:text-3xl lg:text-6xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
        For any queries, please drop a mail
      </h1>
      <h3 ref={h11} className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-5 md:pt-10 md:pb-6">
        <a href={`mailto:${email}`}>{email}</a>
      </h3>
      <span  className="text-center text-content text-xl font-light block">
        or
      </span>
      <h1 ref={h12} className="text-center text-2xl md:text-3xl lg:text-6xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
        Contact
      </h1>
      <h3 ref={h12} className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-2 md:py-6">
        <a href={`tel:${phone}`}>{phone}</a>
      </h3>
    </main>
  );
}

export default Contact;
