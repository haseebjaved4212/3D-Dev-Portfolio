"use client";

import { motion } from "framer-motion";
import HeroCanvas from "./canvas/HeroCanvas";

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto flex flex-col">
            <div
                className="absolute inset-0 top-[120px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row items-start gap-5 z-10 pointer-events-none"
            >
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#915eff]" />
                    <div className="w-1 sm:h-80 h-40 violet-gradient" />
                </div>

                <div>
                    <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
                        Hi, I'm <span className="text-[#915eff]">Haseeb</span>
                    </h1>
                    <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100">
                        I develop 3D visuals, user <br className="sm:block hidden" />
                        interfaces and web applications
                    </p>
                </div>
            </div>

            <div className="w-full h-full absolute inset-0 z-0">
                <HeroCanvas />
            </div>

            <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className="w-3 h-3 rounded-full bg-secondary mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
