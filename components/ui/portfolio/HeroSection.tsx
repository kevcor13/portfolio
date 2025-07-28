import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';

export default function HeroSection() {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-[#3e4c42] relative overflow-hidden">
            {/* Elegant background pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-20 w-72 h-72  rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96  rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        {/* Profile Image */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-block"
                        >
                            <div className="w-32 h-32 mx-auto rounded-full bg-black p-1 shadow-2xl">
                                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                                    <span className="text-4xl font-bold text-slate-700">KC</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Name and Title */}
                        <div className="space-y-6">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-5xl md:text-7xl font-light text-[#f9f1e6] tracking-tight"
                            >
                                Kevin Cordero
                            </motion.h1>
                            
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="space-y-4"
                            >
                                <h2 className="text-2xl md:text-3xl text-[#f9f1e6] font-light">
                                   Computer Science Student at University of St. Thomas 
                                </h2>
                                
                                <div className="flex flex-wrap justify-center gap-2">
                                    <Badge variant="outline" className="bg-[#f9f1e6] text-slate-700 border-slate-900">
                                        React
                                    </Badge>
                                    <Badge variant="outline" className="bg-[#f9f1e6] text-slate-700 border-slate-900">
                                        Node.js
                                    </Badge>
                                    <Badge variant="outline" className="bg-[#f9f1e6] text-slate-700 border-slate-900">
                                        TypeScript
                                    </Badge>
                                    <Badge variant="outline" className="bg-[#f9f1e6] text-slate-700 border-slate-900">
                                        Data Structures
                                    </Badge>
                                </div>
                            </motion.div>
                        </div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="text-xl text-[#f9f1e6] max-w-2xl mx-auto leading-relaxed"
                        >
                             I'm passionate about
                            writing clean and efficient code and designing user-friendly applications. My goal is to become a 
                            Software Engineer and contribute to innovative projects that make a difference.
                        </motion.p>

                        {/* Action Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        >
                            <Button
                                size="lg"
                                onClick={() => scrollToSection('projects')}
                                className="bg-black hover:bg-slate-900 text-white px-8 py-6 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                View My Work
                            </Button>
                            
                            <Button
                                size="lg"
                                variant="outline"
                                onClick={() => window.open('/resume.pdf', '_blank')}
                                className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-6 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <Download className="w-5 h-5 mr-2" />
                                Download Resume
                            </Button>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            className="flex justify-center gap-6 pt-8"
                        >
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-white/80 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 text-slate-700 hover:text-slate-900"
                            >
                                <Github className="w-6 h-6" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-white/80 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 text-slate-700 hover:text-slate-900"
                            >
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a
                                href="mailto:john@example.com"
                                className="p-3 rounded-full bg-white/80 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 text-slate-700 hover:text-slate-900"
                            >
                                <Mail className="w-6 h-6" />
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
                onClick={() => scrollToSection('about')}
            >
                <div className="flex flex-col items-center space-y-2 text-slate-500 hover:text-slate-700 transition-colors duration-300">
                    <span className="text-sm font-medium">Scroll to explore</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <ArrowDown className="w-5 h-5" />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}