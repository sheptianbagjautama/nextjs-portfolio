"use client";

import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

// Animations
import { useSectionInView } from "@/lib/useInView";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { HiDownload } from "react-icons/hi";

const Intro = () => {
  const { ref } = useSectionInView("#home", 0.5);
  return (
    <section
      ref={ref}
      id="home"
      className="max-w-[75rem] scroll-mt-28 text-center sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              damping: 10,
              duration: 0.2,
            }}
          >
            <Image
              src="/tian.png"
              width={480}
              height={480}
              alt=""
              quality={100}
              priority={true}
              className="rounded-full shadow-xl object-cover max-w-sm md:max-w-md"
              // className="object-cover"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              damping: 10,
              duration: 0.2,
            }}
            className="text-6xl absolute bottom-8 right-12"
          >
            <Image src="/hand.png" alt="" width={60} height={60} />
          </motion.span>
        </div>
      </div>

      <Fade
        direction="up"
        delay={400}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        <h1 className="mb-10 mt-4 md:px-4 px-10 text-xl sm:text-4xl">
          <span className="md:font-medium !leading-[1.5]">
            Hello, I&apos;m Tian. I&apos;m a fullstack developer
          </span>
          <p className="text-sm md:text-lg">
            with 5 years of experience. I enjoy building sites & apps.
          </p>
        </h1>
      </Fade>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="flex flex-wrap sm:flex-row items-center justify-center gap-4 px-4  text-sm md:text-lg font-normal"
      >
        <Link
          href="https://wa.me/+6287824392239"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 dark:bg-white/10 active:scale-105 transition dark:text-white/60"
          target="_blank"
        >
          Contact me here{""}
          <BsWhatsapp className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="/cv.pdf"
          download
          // target="_blank"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 dark:bg-white/10 active:scale-105 transition dark:text-white/60"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          href="https://www.linkedin.com/in/sheptian-bagja-utama-988a7515a/"
          target="_blank"
          className=" bg-gray-900 p-4 text-white flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <span className="sm:hidden">LinkedIn</span>
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/sheptianbagjautama"
          target="_blank"
          className=" bg-gray-900 p-4 text-white flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <span className="sm:hidden">Github</span>
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
