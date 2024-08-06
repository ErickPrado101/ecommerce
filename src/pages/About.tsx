import heroImg from '../assets/img/about-hero.jpg';
import { AboutSection } from '../components/sections/AboutSection.tsx';
import { ContactSection } from '../components/sections/ContactSection.tsx';
import { DesignServicesSection } from '../components/sections/DesignServicesSection.tsx';
import { NewNostalgiaSection } from '../components/sections/NewNostalgiaSection.tsx';
import { ProcessSection } from '../components/sections/ProcessSection.tsx';
import { AboutLinks } from '../constants/data.ts';

export default function About() {
  return (
    <>
      <section className="pt-36 mb-20 flex flex-wrap items-center lg:justify-end max-container relative">
        <div className="lg:absolute left-4 px-6 sm:px-10 lg:px-14 max-w-2xl z-10">
          <h1 className="text-5xl md:text-6xl lg:text-[4.95rem] opacity-85 leading-[0.9] font-light mb-4 animate-slideUp">
            Uma Ode ao Lar          </h1>
          <p className="py-3 sm:text-lg font-sans font-medium opacity-75 animate-[opacityWeak_0.3s_ease-in-out_0.6s_backwards]">
            Nossa abordagem intencional é projetada para oferecer móveis novos e vintage que inspirem curiosidade em seu lar.
          </p>
          <nav className="pt-4 pb-8 lg:mt-8">
            <ul className="flex flex-col gap-4 animate-[slideUp_0.3s_ease-in-out_0.3s_backwards]">
              {AboutLinks.map(link => (
                <li
                  key={link.id}
                  className="text-sm lg:text-base uppercase font-sans font-medium"
                >
                  <a
                    href={link.id}
                    className="opacity-50 hover:opacity-80 pb-[1px] relative border-anime"
                  >
                    {link.section}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="max-w-[1056px] appear-item relative">
          <img
            src={heroImg}
            alt="duas jarras marrons, estilo vintage"
            height={700}
            width={1056}
          />
        </div>
      </section>
      <AboutSection />
      <NewNostalgiaSection />
      <ProcessSection />
      <ContactSection />
      <DesignServicesSection />
    </>
  );
}
