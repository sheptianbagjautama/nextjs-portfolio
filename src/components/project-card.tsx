import { ProjectInfo } from "@/lib/types";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type ProjectProps = ProjectInfo;

const Project = ({
  title,
  description,
  imageUrl,
  link,
  tags,
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="h-[32rem] bg-white  max-w-[50rem] sm:max-w-[42rem] border border-black-5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[24rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white/70 dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-md font-semibold">{title}</h3>
          <p className="mt-2 text-sm  leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-2">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>
          {link != "#" && (
            <Link
              href={link}
              className="text-xs w-36 justify-center mt-4 group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 dark:bg-white/10 active:scale-105 transition dark:text-white/60"
              target="_blank"
            >
              Link / Github
            </Link>
          )}
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked"
          quality={95}
          width={400}
          height={100}
          className="absolute sm:block sm:top-8 sm:-right-32 sm:left-auto sm:rounded-t-lg shadow-2xl
          m-auto left-0 right-0 bottom-0
          text-center
          sm:pb-0
          sm:transition
          sm:group-hover:scale-[1.04]
          sm:group-hover:-translate-x-3
          sm:group-hover:translate-y-3
          sm:group-hover:-rotate-2

          sm:group-even:group-hover:translate-x-3
          sm:group-even:group-hover:translate-y-3
          sm:group-even:group-hover:rotate-2

          sm:group-even:right-[initial] 
          sm:group-even:-left-32
          
          "
        />
      </section>
    </motion.div>
  );
};

export default Project;
