import Hero from "@/components/hero/hero";
import Image from "next/image";
import CTA from "../components/cta/cta-dr";
import ServiceList from "@/components/services/service-list";

export default function Home() {
  return (
    <>
      <Hero />
      <CTA />
      <ServiceList/>
    </>
  );
}
