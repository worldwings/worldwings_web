import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { GeoAlt, Envelope, Telephone, ArrowRight } from "react-bootstrap-icons";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import PageBanner from "@/components/common/page_banner/page_banner";
import styles from "./contact.module.scss";
import { CONTACT_DETAILS, BRANCHES } from "@/constants/conatct";
import Link from "next/link";
import { toast } from "react-toastify";

const faqs = [
  {
    question: "How do I book a tour package with World Wings?",
    answer:
      "You can explore our wide range of domestic and international tour packages on our website. Once you find a package you like, you can contact us via phone, email, or by filling out the enquiry form on this page to start the booking process.",
  },
  {
    question: "Do you provide visa assistance for international tours?",
    answer:
      "Yes, we provide comprehensive travel documentation services, including visa processing and guidance for all countries, to ensure a hassle-free travel experience.",
  },
  {
    question: "Can I customize my travel itinerary?",
    answer:
      "Absolutely! We specialize in customized tours tailored to your preferences, whether it's a family vacation, a honeymoon, or a corporate retreat. Let us know your requirements, and we'll design the perfect trip for you.",
  },
  {
    question: "What does a typical tour package include?",
    answer:
      "Our tour packages generally include hotel accommodation, guided sightseeing tours, and airport transfers. Please refer to the specific itinerary of your chosen package for detailed inclusions and exclusions.",
  },
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

  const initialValues = {
    name: "",
    city: "",
    email: "",
    phoneNumber: "",
    type: "Contact",
    message: "",
  };

  const [values, setValues] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);

  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    try {
      setIsLoading(true);
      e.preventDefault();
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const enqRes = await res.json();
      setIsSuccess(enqRes.success);
      toast.success("Your query has been submitted successfully!")
      setValues(initialValues)
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong..");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us - World Wings</title>
        <meta
          name="description"
          content="Get in touch with World Wings for all your travel needs."
        />
      </Head>

      <PageBanner title="Contact Us" image="/images/contact-banner.jpg" />

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
                      <input
                        onChange={(e) => {
                          setValues((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }));
                        }}
                        value={values.name}
                        type="text"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Email</label>
                      <input
                        onChange={(e) => {
                          setValues((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }));
                        }}
                        value={values.email}
                        type="email"
                        placeholder="Your mail address"
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Phone Number</label>
                      <input
                        onChange={(e) => {
                          setValues((prev) => ({
                            ...prev,
                            phoneNumber: e.target.value,
                          }));
                        }}
                        value={values.phoneNumber}
                        type="text"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>City of residence</label>
                      <input
                        onChange={(e) => {
                          setValues((prev) => ({
                            ...prev,
                            city: e.target.value,
                          }));
                        }}
                        value={values.city}
                        type="text"
                        placeholder="Your city of residence"
                      />
                    </div>
                  </div>

                  <div className={styles.rightCol}>
                    <div className={styles.inputGroup}>
                      <label>Your Enquiry*</label>
                      <textarea
                        onChange={(e) => {
                          setValues((prev) => ({
                            ...prev,
                            message: e.target.value,
                          }));
                        }}
                        value={values.message}
                        placeholder="Enter your message here"
                      ></textarea>
                    </div>
                    <div className={styles.submitWrap}>
                      <button
                        type="button"
                        className={styles.submitBtn}
                        onClick={handleSubmit}
                      >
                        {isLoading ? "Please Wait..." : "Get Started"}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* INFO CARDS */}
          {BRANCHES.map((branch, branchIndex) => (
            <div key={branchIndex} className={styles.branchSection}>
              <h2 className={styles.branchTitle}>{branch.title}</h2>
              <div className={styles.infoCardsSection}>
                <div className={styles.infoCard}>
                  <div className={styles.iconWrap}>
                    <GeoAlt />
                  </div>
                  <h3>Our Location</h3>
                  <p>
                    {branch.address.map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <div className={styles.iconWrap}>
                    <Envelope />
                  </div>
                  <h3>Email Us</h3>
                  <p>Our support team is here to assist you</p>
                  {branch.emails.map((email, index) => (
                    <div key={index} style={{ marginBottom: "5px" }}>
                      <a href={`mailto:${email}`}>{email}</a>
                    </div>
                  ))}
                </div>
                <div className={styles.infoCard}>
                  <div className={styles.iconWrap}>
                    <Telephone />
                  </div>
                  <h3>Call Us</h3>
                  <p>Our customer support team is available</p>
                  {branch.phones.map((phone, index) => (
                    <div key={index} style={{ marginBottom: "5px" }}>
                      <Link href={`tel:${phone}`}>{phone}</Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* MAP SECTION */}
          <div className={styles.mapSection}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.2923618840864!2d80.2374438!3d13.0806484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52650eda9f6c65%3A0x983e8a5ebc09521e!2sWORLD%20WINGS%20TOURS%20AND%20TRAVELS!5e0!3m2!1sen!2sin!4v1774614029695!5m2!1sen!2sin"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* FAQ SECTION */}
          <div className={styles.faqSection}>
            <div className={styles.faqImageWrap}>
              <Image
                src="/images/couple.webp"
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
                      className={`${styles.accordionItem} ${isOpen ? styles.open : ""}`}
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
