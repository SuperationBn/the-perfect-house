import React from "react"
import Hero from "../components/hero/Hero";
import InfoCard from "../components/infoCards/InfoCard";
import Layout from "../components/Layout";
import Services from "../components/services/Services";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <InfoCard />
      <Services />
    </Layout>
  );
}
