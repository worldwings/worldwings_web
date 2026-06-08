import React from "react";
import styles from "./couple_logo.module.scss";
import Link from "next/link";
import { Image } from "react-bootstrap";
import FONTS from "@/styles/fonts";

const Logo = ({ isWhite = true }) => {
  return (
    <Link href="/" className={styles.CoupleLogo}>
      <Image src={isWhite ? "/logo/white logo.png" : "/logo/logo.png"} width={220} alt="logo" />
      <p className={FONTS.font1}>Approved by Ministry of Tourism, Government of India</p>
    </Link>
  );
};

export default Logo;
