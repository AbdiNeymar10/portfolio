"use client";

import { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Abdi Tolesa</title>
        <meta name="description" content="Professional portfolio" />
      </Head>

      <Layout>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </Layout>
    </>
  );
};

export default Home;
