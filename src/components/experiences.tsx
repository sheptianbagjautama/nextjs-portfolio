"use client";

import { useSectionInView } from "@/lib/useInView";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Experience = () => {
  const { ref } = useSectionInView("#experiences", 0.5);

  return (
    <motion.section
      ref={ref}
      className="max-w-[45rem] text-justify mt-32 leading-8 mb-28 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="experience"
    >
      <div className="container mx-auto">
        <Fade
          direction="up"
          delay={400}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <SectionHeading>My Experience</SectionHeading>
        </Fade>

        <div className="lg:text-justify">
          <div className="flex-1">
            <div className="text-lg mt-12 xl:mt-3">
              <div className="flex justify-start flex-col">
                <Fade
                  direction="up"
                  delay={600}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <div className="flex flex-col justify-center items-center dark:text-white/70 text-gray-700">
                    <Image
                      src="/nv.png"
                      alt=""
                      width={300}
                      height={70}
                      quality={100}
                      priority={true}
                      className="dark:bg-white p-4 rounded-lg"
                    />
                    <a
                      href="https://www.nextvibes.com/"
                      target="_blank"
                      className="pt-3 text-sm md:text-xl font-bold underline"
                    >
                      PT Nextibes Mitra Global
                    </a>
                    <p className="pt-3 text-sm md:text-xl">
                      Mei 2019 - Until Now (5 Years 5 Month)
                    </p>
                  </div>
                  <p className="mt-6 leading-relaxed text-sm sm:text-lg text-gray-700 dark:text-white/70">
                    At this company, I work as a{" "}
                    <span className="font-bold">Full Stack Developer</span>. My
                    responsibilities include creating, maintaining, fixing, and
                    integrating applications with Shopify.com, Shopee.co.id,
                    Tokopedia.com, and Accurate.id. The main technologies used
                    are{" "}
                    <span className="font-bold">
                      C# ASP.NET Web API, Angular, SQL Server, PHP, and MySQL.
                    </span>
                  </p>

                  <p className="pt-3 leading-relaxed text-sm sm:text-lg text-gray-700 dark:text-white/70">
                    We have also successfully developed a product called{" "}
                    <span className="font-bold">
                      <a
                        className="font-bold underline"
                        href="https://cuan.co/"
                        target="_blank"
                      >
                        cuan.co
                      </a>
                      .{" "}
                      <a
                        className="font-bold underline"
                        href="https://cuan.co/"
                        target="_blank"
                      >
                        cuan.co
                      </a>{" "}
                      is a web-based application specifically designed for
                      jewelry and gold businesses in Indonesia{" "}
                    </span>
                    . We have built many features, including sales, buyback,
                    inventory, service, reporting, stock-taking, barcode
                    printing, tray mutations, inventory adjustments, warehouse
                    stock, reports, and recapitulation. It supports multiple
                    branches, and many companies or gold shops use{" "}
                    <a
                      className="font-bold underline"
                      href="https://cuan.co/"
                      target="_blank"
                    >
                      cuan.co
                    </a>{" "}
                    . You can check the landing page at the following link{" "}
                    <a
                      className="font-bold underline"
                      href="https://cuan.co/"
                      target="_blank"
                    >
                      cuan.co
                    </a>
                    .{" "}
                  </p>
                  <p className="pt-3 leading-relaxed text-sm sm:text-lg text-gray-700 dark:text-white/70">
                    I was also tasked with developing a mobile app for cuan.co,
                    although it hasn’t been published yet.{" "}
                    <span className="font-bold">
                      The technology used is React Native, with ASP.NET Web API
                      for the backend
                    </span>
                    . Some of the features I’ve built include managing sales
                    drafts, searching for items using barcode scanning, and
                    uploading images for the needs of the{" "}
                    <a
                      className="font-bold underline"
                      href="https://cuan.co/"
                      target="_blank"
                    >
                      cuan.co
                    </a>{" "}
                    website.
                    <span className="font-bold">
                      There are also several other projects that use Laravel,
                      jQuery, and Vue.js
                    </span>
                  </p>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
