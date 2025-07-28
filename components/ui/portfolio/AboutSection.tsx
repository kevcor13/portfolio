import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, WifiCog , Globe, Users } from 'lucide-react';

export default function AboutSection() {
    const skills = [
        { name: 'Java', level: 95, category: 'backend' },
        { name: 'JavaScript', level: 90, category: 'frontend' },
        { name: 'TypeScript', level: 90, category: 'frontend' },
        { name: 'CSS', level: 88, category: 'backend' },
        { name: 'React', level: 85, category: 'frontend' },
        { name: 'Node.js', level: 85, category: 'backend' },
        { name: 'Python', level: 68, category: 'backend' },
        { name: 'Figma', level: 60, category: 'design' },
    ];

    const services = [
        {
            icon: Code,
            title: 'Full Stack Development',
            description: 'Building end-to-end web applications with modern technologies and best practices.',
        },
        {
            icon: WifiCog,
            title: 'IT support',
            description: 'Currently exploring and developing my skills in IT support. I help find optimal solutions troubleshoot softwares, and make sure everything is running smoothly ',
        },
        {
            icon: Globe,
            title: 'Web Development',
            description: 'Develop web application that give solutions or personal projects such as Booking websites, business websites, etc.',
        },
        {
            icon: Users,
            title: 'Team Leadership',
            description: 'Leading a hispanic community to succeed in their career as well as following their faith in the college campus. ',
        },
    ];

    return (
        <section id="about" className="py-24 bg-[#f9f1e6]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6">
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                    I am a passionate Computer Science student with a strong foundation in software development, data structures and algorithms, interesting in building a career in software engineering. I strive 
                        to create solutions that are functional and efficient. 
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Skills Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-semibold text-slate-800 mb-6">Technical Skills</h3>
                        <div className="space-y-6">
                            {skills.map((skill, index) => (
                                <div key={skill.name} className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-700 font-medium">{skill.name}</span>
                                        <span className="text-slate-500 text-sm">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-slate-200 rounded-full h-2">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="bg-gradient-to-r from-gray-400 to-slate-900 h-2 rounded-full"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Services Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-semibold text-slate-800 mb-6">What I Do</h3>
                        <div className="grid gap-6">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-0 bg-slate-50">
                                        <CardContent className="p-0">
                                            <div className="flex items-start space-x-4">
                                                <div className="p-3 bg-black rounded-xl">
                                                    <service.icon className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-semibold text-slate-800 mb-2">
                                                        {service.title}
                                                    </h4>
                                                    <p className="text-slate-600 leading-relaxed">
                                                        {service.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Stats Section 
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    {[
                        { number: '50+', label: 'Projects Completed' },
                        { number: '5+', label: 'Years Experience' },
                    ].map((stat, index) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
                                {stat.number}
                            </div>
                            <div className="text-slate-600">{stat.label}</div>
                        </div>
                    ))}
                </motion.div> */}
            </div>
        </section>
    );
}