"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import { socialLinks } from "@/constants";
import { Mail, Linkedin, Github, Instagram, Twitter } from "lucide-react";
import ComputerCanvas from "./canvas/ComputerCanvas";

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e: any) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setLoading(true);

        // Simulate sending email
        setTimeout(() => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");

            setForm({
                name: "",
                email: "",
                message: "",
            });
        }, 1000);
    };

    return (
        <section id="contact" className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10`}>
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="flex-[0.75] bg-black-100/40 backdrop-blur-sm border border-white/10 p-8 rounded-2xl"
            >
                <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Get in touch</p>
                <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact.</h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-12 flex flex-col gap-8"
                >
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Name</span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your good name?"
                            className="bg-tertiary/50 backdrop-blur-sm py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-white/10 font-medium focus:border-primary transition-colors"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Email</span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your web address?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Message</span>
                        <textarea
                            rows={7}
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What you want to say?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none"
                        />
                    </label>

                    <button
                        type="submit"
                        className="bg-tertiary/80 backdrop-blur-sm border border-white/10 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-primary transition-colors"
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>

                <div className="mt-10 flex gap-6 justify-center sm:justify-start">
                    <a href={socialLinks.github} target="_blank" rel="noreferrer" className="text-secondary hover:text-white transition-colors"><Github size={30} /></a>
                    <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-secondary hover:text-white transition-colors"><Linkedin size={30} /></a>
                    <a href={socialLinks.twitter} target="_blank" rel="noreferrer" className="text-secondary hover:text-white transition-colors"><Twitter size={30} /></a>
                    <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="text-secondary hover:text-white transition-colors"><Instagram size={30} /></a>
                    <a href={`mailto:${socialLinks.email}`} className="text-secondary hover:text-white transition-colors"><Mail size={30} /></a>
                </div>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                {/* 3D Earth or similar could go here. For now, a placeholder or just empty space with stars */}
                <ComputerCanvas />
            </motion.div>
        </section>
    );
};

export default Contact;
