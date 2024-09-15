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
      className="max-w-[45rem] text-center mt-32 leading-8 mb-28 sm:mb-40 scroll-mt-28"
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

        <div className="grid md:grid-cols-2 lg:text-start">
          <div className="flex-1">
            <div className="text-lg mt-12 xl:mt-3">
              <div className="flex justify-start flex-col">
                <Fade
                  direction="up"
                  delay={400}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <h3 className="font-bold mt-6">Our mission</h3>
                </Fade>

                <Fade
                  direction="up"
                  delay={600}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <p className="mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                </Fade>

                <Fade
                  direction="up"
                  delay={800}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <h3 className="font-bold mt-6">Our Vission</h3>
                </Fade>

                <Fade
                  direction="up"
                  delay={1000}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <p className="mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                </Fade>
              </div>
            </div>
          </div>

          {/* Right Image */}

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
              className=" mt-8 object-cover"
            />{" "}
          </Fade>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
