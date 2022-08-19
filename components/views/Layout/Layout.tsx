import Head from "next/head";
import React, { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";

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
      
      <main >{children}</main>
    </>
  );
};

export default Layout;