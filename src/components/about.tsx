"use client";

import { useSectionInView } from "@/lib/useInView";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const About = () => {
  const { ref } = useSectionInView("#about", 0.5);

  return (
    <motion.section
      ref={ref}
      className="max-w-[45rem] text-justify mt-32 leading-8 mb-28 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="container mx-auto">
        <Fade
          direction="up"
          delay={400}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <SectionHeading>About Me </SectionHeading>
        </Fade>

        <div className="grid md:grid-cols-2 lg:text-justify">
          {/* <div className="flex flex-row lg:text-justify"> */}
          <div className="flex-1">
            <div className="text-lg mt-12 xl:mt-3">
              <div className="flex justify-start flex-col">
                {/* <Fade
                  direction="up"
                  delay={400}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <h3 className="font-bold mt-6">Our mission</h3>
                </Fade> */}

                <Fade
                  direction="up"
                  delay={600}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <p className="mt-2 leading-relaxed text-sm sm:text-lg text-gray-700 dark:text-white/70">
                    You can call me Tian , I am someone who{" "}
                    <span className="font-bold">enjoys programming</span>. I buy
                    courses and eBooks from various sources, one of them being
                    Udemy, though I usually learn for free from YouTube.{" "}
                    <span className="font-bold">
                      I&apos;m always eager to learn new things.
                    </span>{" "}
                    Currently, I&apos;ve been working at PT. Nextvibes Mitra
                    Global for the
                    <span className="font-bold">
                      {" "}
                      past 5 years as a Full Stack Developer
                    </span>
                    , and{" "}
                    <span className="font-bold">
                      I&apos;m looking for a full-time position as a Software
                      Developer.
                    </span>
                  </p>
                </Fade>

                {/* <Fade
                  direction="up"
                  delay={800}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <h3 className="font-bold mt-6">Our Vission</h3>
                </Fade> */}

                <Fade
                  direction="up"
                  delay={1000}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <p className="mt-2 leading-relaxed text-sm sm:text-lg text-gray-700 dark:text-white/70">
                    When I&apos;m not coding, I enjoy watching movies. Every
                    day, I dedicate time to{" "}
                    <span className="font-bold">learning new things</span>,
                    especially in the field of programming.
                  </p>
                </Fade>
              </div>
            </div>
          </div>

          {/* Right Image */}

          <div>
            <Fade
              direction="right"
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <Image
                src="/tian2.png"
                alt="About Me"
                width={600}
                height={600}
                quality={100}
                priority={true}
                className="mt-8 object-cover"
              />{" "}
            </Fade>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
