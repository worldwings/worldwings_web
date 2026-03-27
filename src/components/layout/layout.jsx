import React, { useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import EnquiryModal from "../common/enquiry_modal/enquiry_modal";
import CustomButton from "../ui/custom_button/custom_button";
import styles from "./layout.module.scss";
import { Headphones, Headset, Whatsapp } from "react-bootstrap-icons";
import { Image } from "react-bootstrap";

const EnquireButton = ({ setShow }) => {
  return <div className={styles.enquireButton}>
    <CustomButton variant={2} onClick={() => setShow(true)}>
      <Headset /> <b>Enquire Now</b>
    </CustomButton>
  </div>
}
const WhatsappButton = ({ setShow }) => {
  return <div className={styles.WhatsappButton}>
    <Image src="/assets/whatsapp-icon.png" alt="whatsapp" width={50} />
  </div>
}

const Layout = ({ children }) => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.Layout}>

      <Header setShowModal={setShow} />
      {children}
      <EnquireButton setShow={setShow} />
      <WhatsappButton />

      <Footer />
      <EnquiryModal show={show} setShow={setShow} />
    </div>
  );
};

export default Layout;
