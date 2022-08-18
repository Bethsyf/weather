import Image from "next/image";
import Link from "next/link";
import React from "react";
import weather from "../../../assets/weather.png";
import styles from "./Navbar.module.scss";
const Navbar = () => {
  return (
    <>
      <header className={styles.container}>
        <Link href="/">
        <a >
          <Image src={weather} alt="logo-app" width={150} height={150} />
          </a>
        </Link>
      </header>
    </>
  );
};

export default Navbar;