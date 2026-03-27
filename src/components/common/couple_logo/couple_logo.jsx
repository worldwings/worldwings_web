import React from "react";
import styles from "./couple_logo.module.scss";
import Link from "next/link";
import { Image } from "react-bootstrap";

const Logo = ({ isWhite = true }) => {
  return (
    <Link href="/" className={styles.CoupleLogo}>
      <Image src={isWhite ? "/logo/white logo.png" : "/logo/logo.png"} width={200} alt="logo" />
    </Link>
  );
};

export default Logo;
