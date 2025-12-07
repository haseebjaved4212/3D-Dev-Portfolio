"use client";

import React from "react";
import { motion } from "framer-motion";
import { services } from "@/constants";
import { fadeIn, textVariant } from "@/utils/motion";

const ServiceCard = ({ index, title, icon: Icon }: any) => (
    <div className="xs:w-[250px] w-full">
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
            <div
                className="bg-tertiary/40 backdrop-blur-sm border border-white/10 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
            >
                <Icon className="w-16 h-16 text-white object-contain" />

                <h3 className="text-white text-[20px] font-bold text-center">
                    {title}
                </h3>
            </div>
        </motion.div>
    </div>
);

const About = () => {
    return (
        <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <motion.div variants={textVariant(0.1)}>
                <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Introduction</p>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                I'm a skilled software developer with experience in TypeScript and
                JavaScript, and expertise in frameworks like React, Next.js, and
                Three.js. I'm a quick learner and collaborate closely with clients to
                create efficient, scalable, and user-friendly solutions that solve
                real-world problems. Let's work together to bring your ideas to life!
            </motion.p>

            <motion.div variants={fadeIn("", "", 0.1, 1)} className="mt-4">
                <a
                    href="/resume.pdf"
                    download="Haseeb_Resume.pdf"
                    className="bg-tertiary/80 backdrop-blur-sm border border-white/10 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-primary transition-colors inline-block"
                >
                    Download Resume
                </a>
            </motion.div>

            <div className="mt-20 flex flex-wrap gap-10 justify-center">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </section>
    );
};

export default About;
