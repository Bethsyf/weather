import Head from "next/head";
import React, { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.scss";

interface Props {
  title?: string;
  children?: ReactNode;
}
const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title || "Weather App"}</title>
        <meta name="author" content="Bethsy Falcon" />
        <meta
          name="description"
          content={`Información sobre el clima ${title}`}
        />
        <meta name="keywords" content={`${title}, clima`} />
      </Head>

      <Navbar />
      <h3 className={styles.title}>Digita tu Ciudad y Conoce el Clima</h3>
      <main className={styles.container}>{children}</main>
    </>
  );
};

export default Layout;