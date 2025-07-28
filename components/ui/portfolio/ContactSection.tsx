import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email',
            value: 'kevincordero11.kc@gmail.com',
            link: 'mailto:kevincordero11.kc@gmail.com'
        },
        {
            icon: Phone,
            title: 'Phone',
            value: '+1 (763) 221-5615',
            link: 'tel:+15551234567'
        },
    ];

    const socialLinks = [
        {
            icon: Github,
            name: 'GitHub',
            url: 'https://github.com/kevcor13',
            color: 'hover:text-gray-900'
        },
        {
            icon: Linkedin,
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/kevin-cordero-850ab9292/',
            color: 'hover:text-blue-600'
        },
    ];

    return (
        <section id="contact" className="py-24 bg-[#3e4c42] text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-light mb-6 text-[#f9f1e6]">
                        Contact Me 
                    </h2>
                    <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
                    <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
                        I'm always excited to take on new challenges and collaborate on innovative projects. 
                        
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-semibold text-[#f9f1e6] mb-6">Get In Touch</h3>
                            <p className="text-white leading-relaxed mb-8">
                                Send me a message and I'll respond as soon as possible.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {contactInfo.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-colors duration-300">
                                        <CardContent className="p-6">
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center space-x-4 text-white hover:text-purple-400 transition-colors duration-300"
                                            >
                                                <div className="p-3 bg-black rounded-xl">
                                                    <item.icon className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold">{item.title}</h4>
                                                    <p className="text-slate-300">{item.value}</p>
                                                </div>
                                            </a>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>

                        <div className="pt-8">
                            <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className={`p-3 bg-slate-800 rounded-xl transition-all duration-300 ${social.color} hover:bg-slate-700 hover:scale-110`}
                                    >
                                        <social.icon className="w-6 h-6" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <Card className="bg-slate-800/50 border-slate-700">
                            <CardContent className="p-8">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium mb-2 text-[#f9f1e6]">Name</label>
                                            <Input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="bg-slate-900/50 border-slate-600 text-white placeholder-slate-400 focus:border-purple-400"
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2 text-[#f9f1e6]">Email</label>
                                            <Input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="bg-slate-900/50 border-slate-600 text-white placeholder-slate-400 focus:border-purple-400"
                                                placeholder="your.email@example.com"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-[#f9f1e6]">Message</label>
                                        <Textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="bg-slate-900/50 border-slate-600 text-white placeholder-slate-400 focus:border-purple-400"
                                            placeholder="Tell me about your project..."
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full bg-black hover:from-purple-500 hover:to-blue-600 text-white font-semibold py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        <Send className="w-5 h-5 mr-2" />
                                        Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}