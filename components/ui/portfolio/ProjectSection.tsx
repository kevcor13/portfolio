import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { Project } from '@/entities/Project';

export default function ProjectsSection() {
    const [projects, setProjects] = useState([]);
    const [activeFilter, setActiveFilter] = useState('all');

    useEffect(() => {
        loadProjects();
    }, []);

    const loadProjects = async () => {
        try {
            const data = await Project.list('-completion_date');
            setProjects(data);
        } catch (error) {
            console.error('Error loading projects:', error);
        }
    };

    const categories = ['all', 'web', 'mobile', 'design', 'ai'];
    
    const filteredProjects = activeFilter === 'all' 
        ? projects 
        : projects.filter(project => project.category === activeFilter);

    return (
        <section id="projects" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6">
                        Featured Projects
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto mb-8"></div>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        A collection of projects that showcase my skills and passion for creating 
                        exceptional digital experiences.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="group"
                        >
                            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image_url || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80'}
                                        alt={project.title}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                                            {project.demo_url && (
                                                <Button
                                                    size="sm"
                                                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/20"
                                                    onClick={() => window.open(project.demo_url, '_blank')}
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                </Button>
                                            )}
                                            {project.github_url && (
                                                <Button
                                                    size="sm"
                                                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/20"
                                                    onClick={() => window.open(project.github_url, '_blank')}
                                                >
                                                    <Github className="w-4 h-4" />
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <CardContent className="p-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <Badge className="bg-purple-100 text-purple-800 border-purple-200">
                                                {project.category}
                                            </Badge>
                                            {project.completion_date && (
                                                <div className="flex items-center text-sm text-slate-500">
                                                    <Calendar className="w-4 h-4 mr-1" />
                                                    {new Date(project.completion_date).getFullYear()}
                                                </div>
                                            )}
                                        </div>
                                        
                                        <h3 className="text-xl font-semibold text-slate-800 group-hover:text-purple-600 transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        
                                        <p className="text-slate-600 leading-relaxed">
                                            {project.description}
                                        </p>
                                        
                                        {project.technologies && (
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map((tech, techIndex) => (
                                                    <Badge
                                                        key={techIndex}
                                                        variant="outline"
                                                        className="bg-slate-50 text-slate-700 border-slate-200"
                                                    >
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-16"
                    >
                        <div className="text-6xl mb-4">🚀</div>
                        <h3 className="text-2xl font-semibold text-slate-800 mb-2">No projects yet</h3>
                        <p className="text-slate-600">
                            Add your first project to start building your portfolio.
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    );
}