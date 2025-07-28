'use client';
import React, { useEffect } from 'react';
import HeroSection from '../components/ui/portfolio/HeroSection';
import AboutSection from '../components/ui/portfolio/AboutSection';
import ProjectsSection from '../components/ui/portfolio/ProjectSection';
import ContactSection from '../components/ui/portfolio/ContactSection';

export default function Portfolio() {
    useEffect(() => {
        // Smooth scroll behavior
        document.documentElement.style.scrollBehavior = 'smooth';
        
        return () => {
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, []);

    return (
        <div className="min-h-screen">
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
        </div>
    );
}