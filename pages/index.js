import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Resume from '../components/Resume';
import Footer from '../components/Footer';

import info from '../data/info';
import projects from '../data/projects';
import skills from '../data/skills';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <Hero info={info} />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Resume resumeUrl={info.resumeUrl} />
      </main>

      <Footer name={info.name} />
    </>
  );
}
