"use client";

import { useSectionInView } from "@/lib/useInView";
import SectionHeading from "./section-heading";
import SubmitBtn from "./submit-btn";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  const { ref } = useSectionInView("#contact");
  return (
    <motion.section id="contact" ref={ref} className="mb-8">
      <Fade
        direction="up"
        delay={400}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        <SectionHeading>Contact Me</SectionHeading>
      </Fade>

      <Fade
        direction="up"
        delay={600}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        <p className="text-gray-700 -mt-6 dark:text-white/80">
          Feel free to contact me directly through this form
        </p>
      </Fade>

      <Fade
        direction="up"
        delay={800}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        <form className="mt-10 flex flex-col dark:text-black">
          <input
            name="senderEmail"
            required
            maxLength={500}
            placeholder="Your email"
            type="email"
            className="h-14 px-4 rounded-lg borderBlack dark:text-white  dark:bg-white/10 outline-none"
          />

          <textarea
            name="message"
            placeholder="Your message"
            required
            maxLength={200}
            className="h-52 my-3 rounded-lg resize-none borderBlack dark:text-white p-4 dark:bg-white/10"
          />
          <div className="self-center">
            <SubmitBtn text="Submit" />
          </div>
        </form>
      </Fade>
    </motion.section>
  );
};

export default Contact;
