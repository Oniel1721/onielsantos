import TechList from "@/components/TechList";
import ExperienceList from "@/components/ExperienceList";
import Testimonials from "@/components/Testimonials";
import Profile from "@/components/Profile";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Main from "@/components/Main";

export default function Home() {
  return (
    <>
      <Main>
        <Section title="">
          <Profile />
        </Section>
        <Section title="">
          <TechList />
        </Section>
        <Section title="Experience">
          <ExperienceList />
        </Section>
        <Section title="Testimonials">
          <Testimonials />
        </Section>
      </Main>
      <Footer />
    </>
  );
}
