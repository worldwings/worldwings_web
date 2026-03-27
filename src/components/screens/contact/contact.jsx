import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { GeoAlt, Envelope, Telephone, ArrowRight } from 'react-bootstrap-icons';
import CustomContainer from '@/components/ui/custom_container/custom_container';
import PageBanner from '@/components/common/page_banner/page_banner';
import styles from './contact.module.scss';

const faqs = [
    {
        question: "Do I need any kayaking experience?",
        answer: "Our studio provides a wide range of creative services, including design, branding, web development, graphic design, and video production."
    },
    {
        question: "Is kayaking safe for non-swimmers?",
        answer: "Yes, we provide all necessary safety equipment including life jackets, and our guides are fully trained in water rescue."
    },
    {
        question: "What should I bring on a kayaking trip?",
        answer: "We recommend bringing comfortable water-resistant clothing, sunscreen, a hat, and a reusable water bottle."
    },
    {
        question: "What happens if the weather is bad?",
        answer: "If conditions are unsafe, we will reschedule your trip or provide a full refund according to our weather policy."
    }
];

const ContactScreen = () => {
    const [openFaq, setOpenFaq] = useState(0);

    const toggleFaq = (index) => {
        if (openFaq === index) {
            setOpenFaq(null);
        } else {
            setOpenFaq(index);
        }
    };

    return (
        <>
            <Head>
                <title>Contact Us - World Wings</title>
                <meta name="description" content="Get in touch with World Wings for all your travel needs." />
            </Head>

            <PageBanner title="Contact Us" image="/blog/blog-2.jpg" />

            <div className={styles.contactPage}>
                <CustomContainer>
                    {/* FORM SECTION */}
                    <div className={styles.formSection}>
                        <div className={styles.formContainer}>
                            <h2>Your info</h2>
                            
                            <form className={styles.contactForm}>
                                <div className={styles.formLayout}>
                                    <div className={styles.leftCol}>
                                        <div className={styles.inputGroup}>
                                            <label>Full name</label>
                                            <input type="text" placeholder="Enter your full name" />
                                        </div>
                                        <div className={styles.inputGroup}>
                                            <label>Email</label>
                                            <input type="email" placeholder="Your mail address" />
                                        </div>
                                        <div className={styles.inputGroup}>
                                            <label>Company Name</label>
                                            <input type="text" placeholder="Your company name" />
                                        </div>
                                        <div className={styles.inputGroup}>
                                            <label>Website</label>
                                            <input type="url" placeholder="Your website" />
                                        </div>
                                    </div>
                                    
                                    <div className={styles.rightCol}>
                                        <div className={styles.inputGroup}>
                                            <label>Your Enquiry*</label>
                                            <textarea placeholder="Enter your message here"></textarea>
                                        </div>
                                        <div className={styles.submitWrap}>
                                            <button type="button" className={styles.submitBtn}>Get Started</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* INFO CARDS */}
                    <div className={styles.infoCardsSection}>
                        <div className={styles.infoCard}>
                            <div className={styles.iconWrap}>
                                <GeoAlt />
                            </div>
                            <h3>Our Location</h3>
                            <p>123 Main Street, Apt 4B Springfield, IL 62704, UK</p>
                        </div>
                        <div className={styles.infoCard}>
                            <div className={styles.iconWrap}>
                                <Envelope />
                            </div>
                            <h3>Email Us</h3>
                            <p>Our support team is here to assist you</p>
                            <a href="mailto:support@touriza.com">support@touriza.com</a>
                        </div>
                        <div className={styles.infoCard}>
                            <div className={styles.iconWrap}>
                                <Telephone />
                            </div>
                            <h3>Call Us</h3>
                            <p>Our customer support team is available</p>
                            <a href="tel:+111112542174">+1 (111) 125- 42174</a>
                        </div>
                    </div>

                    {/* MAP SECTION */}
                    <div className={styles.mapSection}>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d2483.288961634382!2d-0.12210538422998492!3d51.50330057963467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2suk!4v1680101968560!5m2!1sen!2suk" 
                            width="100%" 
                            height="450" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Maps London Eye"
                        ></iframe>
                    </div>

                    {/* FAQ SECTION */}
                    <div className={styles.faqSection}>
                        <div className={styles.faqImageWrap}>
                            <Image 
                                src="/blog/blog-1.jpg" 
                                alt="Have questions" 
                                fill
                                className={styles.faqImage}
                            />
                        </div>
                        <div className={styles.faqContent}>
                            <h2>Have questions?</h2>
                            <div className={styles.accordion}>
                                {faqs.map((faq, index) => {
                                    const isOpen = openFaq === index;
                                    return (
                                        <div 
                                            key={index} 
                                            className={`${styles.accordionItem} ${isOpen ? styles.open : ''}`}
                                            onClick={() => toggleFaq(index)}
                                        >
                                            <div className={styles.accordionHeader}>
                                                <h4>{faq.question}</h4>
                                                <div className={styles.iconCircle}>
                                                    <ArrowRight className={styles.arrowIcon} />
                                                </div>
                                            </div>
                                            <div className={styles.accordionBody}>
                                                <p>{faq.answer}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </CustomContainer>
            </div>
        </>
    );
};

export default ContactScreen;
