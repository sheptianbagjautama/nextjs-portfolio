"use client";

import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

// Animations
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

const Intro = () => {
  return (
    <section id="home" className="mb-28 max-w-[75rem] text-center sm:mb-0">
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
              src="/boy.png"
              width={480}
              height={480}
              alt=""
              quality={100}
              priority={true}
              className="rounded-full shadow-xl object-cover"
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
        <h1 className="mb-10 mt-4 px-4 text-2xl sm:text-4xl">
          <span className="font-medium !leading-[1.5]">
            Grow your business with a new website.
          </span>
          <p className="text-[14px]">
            Frontend is a full-service creative studio createing beautiful
            digital experiences and products.
          </p>
        </h1>
      </Fade>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="flex sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
      >
        <Link
          href="#"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 dark:bg-white/10 active:scale-105 transition"
        >
          Connect <Mail color="#9ca3af" />
        </Link>

        <a
          href="#"
          target="_blank"
          className="bg-gray-900 p-4 text-white flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <BsLinkedin />
        </a>
        <a
          href="#"
          target="_blank"
          className="bg-gray-900 p-4 text-white flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
