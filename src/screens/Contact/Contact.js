import React from 'react';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { TopNav } from '../../components/top-nav/top-nav';
import { Footer } from '../../components/Footer/Footer';
// import './styles.css';

export function Contact() {
    return (
        <div className="page-wrapper">
            <TopNav />
            <PageTitle title="Let's Chat" />
            <ContactForm />
            <Footer />
        </div>
    )
};
