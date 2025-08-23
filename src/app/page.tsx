import Hero from "@/components/hero/hero";
import Image from "next/image";
import QuickIntro from "../components/quick-intro/quick-intro";
import ServiceList from "@/components/services/service-list";
import WhyChooseUs from "@/components/choose-us/choose-us";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickIntro />
      <ServiceList />
      <WhyChooseUs />
    </>
  );
}
