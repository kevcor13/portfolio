import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Calendar } from 'lucide-react';

export default function ProjectsSection() {
    const [activeFilter, setActiveFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: 'Mechanic Shop Database',
            category: 'web',
            description: 'A management system for client, employee, and appointment tracking. Reduced manual workload by 30%.',
            technologies: ['Python', 'SQLAlchemy', 'Flask'],
            image_url: '../mechanicShopDB.png',
            demo_url: '',
            github_url: 'https://github.com/kevcor13/DB450----final-Project-.git',
            completion_date: '2024-12-01',
        },
        {
            id: 2,
            title: 'Booking Page',
            category: 'web',
            description: 'Program coordinator needed a booking page for students to schedule appointments. Built a booking page using React, Node.js, and Google scripts to make my own APIs, which allowed me to send reminder emails, and save aapointments to a google spreadsheet. ',
            technologies: ['Java', 'Typescript', 'CSS', 'HTML', 'Google Scripts', 'python'],
            image_url: '../calendar.png',
            demo_url: 'https://tinting-booking-client.vercel.app/1221Czt7p3i1K9mnNG_tBFoU0X09U1b8zmS2oW1kBQZQ',
            github_url: 'https://github.com/kevcor13/tinting_booking_client.git',
            completion_date: '2025-12-01',
        },
        
        {
            id: 3,
            title: 'Social Media App',
            category: 'mobile',
            description: 'An Ongoing project to create a social media application with features like user profiles, posts, and comments. Main goal is to create an AI fitness app that will help users reach their fitness goal.',
            technologies: ['React Native', 'TypeScript', 'MongoDB', 'Node.js'],
            image_url: '../socialMediaApp.png',
            demo_url: '',
            github_url: 'https://github.com/kevcor13/AnkyrApp.git',
            completion_date: '2025-06-01',
        },
        
    ];

    const filteredProjects =
        activeFilter === 'all'
            ? projects
            : projects.filter((p) => p.category === activeFilter);

    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-6">Projects</h2>
                <p className="text-center text-gray-600 mb-10">
                    A few things I've built.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <Card key={project.id} className="shadow-md">
                            <img
                                src={project.image_url}
                                alt={project.title}
                                className="w-full h-50 object-cover"
                            />
                            <CardContent className="p-4 space-y-3">
                                <div className="flex justify-between items-center">
                                    <Badge>{project.category}</Badge>
                                    {project.completion_date && (
                                        <span className="text-sm text-gray-500 flex items-center">
                                            <Calendar className="w-4 h-4 mr-1" />
                                            {new Date(project.completion_date).getFullYear()}
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-lg font-semibold">{project.title}</h3>
                                <p className="text-gray-600">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, i) => (
                                        <Badge key={i} variant="outline">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                                <div className="flex gap-2 pt-2">
                                    {project.demo_url && (
                                        <Button
                                            size="sm"
                                            onClick={() => window.open(project.demo_url, '_blank')}
                                        >
                                            <ExternalLink className="w-4 h-4 mr-1" />
                                            Demo
                                        </Button>
                                    )}
                                    {project.github_url && (
                                        <Button
                                            size="sm"
                                            onClick={() => window.open(project.github_url, '_blank')}
                                        >
                                            <Github className="w-4 h-4 mr-1" />
                                            Code
                                        </Button>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-16">
                        <h3 className="text-2xl font-semibold">No projects found</h3>
                        <p className="text-gray-500">Try adding some projects to display here.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
