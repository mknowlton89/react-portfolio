import React from 'react';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { TopNav } from '../../components/top-nav/top-nav';
import { Footer } from '../../components/Footer/Footer';

export function Projects() {
    return (
        <div className="page-wrapper">
            <TopNav />
            <ProjectCard />
            <Footer />
        </div>
    )
}