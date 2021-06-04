import React from 'react';
import { Hero } from '../../components/hero/hero';
import './styles.css';
import { TopNav } from '../../components/top-nav/top-nav';
import { Footer } from '../../components/Footer/Footer';

export function Home() {
    return (
        <div className="page-wrapper">
            <TopNav />
            <Hero />
            <Footer />
        </div>
    )
};
