import ExperienceList from "@/components/ExperienceList";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Profile from "@/components/Profile";
import Section from "@/components/Section";
import TechList from "@/components/TechList";
import Testimonials from "@/components/Testimonials";

export default async function Home() {
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
