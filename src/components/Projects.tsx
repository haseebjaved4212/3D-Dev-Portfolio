"use client";

import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/constants";
import { fadeIn, textVariant } from "@/utils/motion";
import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
    live_link,
}: any) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <div
                className="bg-tertiary/40 backdrop-blur-sm border border-white/10 p-5 rounded-2xl sm:w-[360px] w-full"
            >
                <div className="relative w-full h-[230px]">
                    {/* Placeholder for image if not present, using a gradient or a color block */}
                    <div className="w-full h-full object-cover rounded-2xl bg-gradient-to-br from-purple-900 to-indigo-900 flex items-center justify-center text-white font-bold text-xl">
                        {name} Preview
                    </div>
                    {/* If images were available: <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" /> */}

                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
                        <div
                            onClick={() => window.open(live_link, "_blank")}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-black/50 hover:bg-black/80 transition-colors"
                            title="Live Demo"
                        >
                            <ExternalLink className="w-1/2 h-1/2 text-white" />
                        </div>
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-black/50 hover:bg-black/80 transition-colors"
                            title="Source Code"
                        >
                            <Github className="w-1/2 h-1/2 text-white" />
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{name}</h3>
                    <p className="mt-2 text-secondary text-[14px]">{description}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag: any) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className={`text-[14px] ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="work" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <motion.div variants={textVariant(0.1)}>
                <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">My work</p>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Projects.</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    Following projects showcases my skills and experience through
                    real-world examples of my work. Each project is briefly described with
                    links to code repositories and live demos in it. It reflects my
                    ability to solve complex problems, work with different technologies,
                    and manage projects effectively.
                </motion.p>
            </div>

            <div className="mt-20 flex flex-wrap gap-7 justify-center">
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
