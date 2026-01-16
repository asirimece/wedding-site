// src/App.jsx
import { useMemo, useState } from "react";
import "./App.css";
import { content } from "./content/content";
import { HamburgerMenu } from "./components/HamburgerMenu";
import { PhotoSection } from "./components/PhotoSection";
import { InfoSection } from "./components/InfoSection";
import { Section } from "./components/Section";

export default function App() {
  // i18n-ready: keep it as state; for now only "en" is filled.
  const [lang, setLang] = useState("en");

  const t = useMemo(() => {
    const pack = content[lang] ?? content.en;
    return pack;
  }, [lang]);

  return (
    <div className="page">
      <HamburgerMenu
        lang={lang}
        setLang={setLang}
        items={t.navItems}
        languages={content}
      />

      <main className="main">
        {/* HERO: PHOTO then INFO (mobile). Desktop will become split via CSS later. */}
        <Section id="top" variant="hero">
          <div className="stack">
            <PhotoSection
              image={t.hero.photo}
              alt={t.hero.photoAlt}
              height="hero"
            />
            <InfoSection
              title={t.hero.title}
              subtitle={t.hero.subtitle}
              body={t.hero.body}
              ctas={t.hero.ctas}
              frameVariant="invitation"
            />
          </div>
        </Section>

        {/* PHOTO break */}
        <Section id="photo-1" variant="photoBreak">
          <PhotoSection
            image={t.breaks.one.photo}
            alt={t.breaks.one.photoAlt}
            height="break"
          />
        </Section>

        {/* INFO: Schedule */}
        <Section id="schedule" variant="info">
          <InfoSection
            title={t.schedule.title}
            subtitle={t.schedule.subtitle}
            body={t.schedule.body}
            list={t.schedule.items}
            frameVariant="frame"
          />
        </Section>

        {/* PHOTO break */}
        <Section id="photo-2" variant="photoBreak">
          <PhotoSection
            image={t.breaks.two.photo}
            alt={t.breaks.two.photoAlt}
            height="break"
          />
        </Section>

        {/* INFO: Venue + map */}
        <Section id="venue" variant="info">
          <InfoSection
            title={t.venue.title}
            subtitle={t.venue.subtitle}
            body={t.venue.body}
            map={t.venue.map}
            frameVariant="frame"
          />
        </Section>

        {/* INFO: Travel */}
        <Section id="travel" variant="info">
          <InfoSection
            title={t.travel.title}
            subtitle={t.travel.subtitle}
            body={t.travel.body}
            list={t.travel.items}
            frameVariant="frame"
          />
        </Section>

        {/* INFO: FAQ */}
        <Section id="faq" variant="info">
          <InfoSection
            title={t.faq.title}
            subtitle={t.faq.subtitle}
            faq={t.faq.items}
            frameVariant="frame"
          />
        </Section>

        {/* INFO: Speech signup */}
        <Section id="speech" variant="info">
          <InfoSection
            title={t.speech.title}
            subtitle={t.speech.subtitle}
            body={t.speech.body}
            ctas={t.speech.ctas}
            frameVariant="frame"
          />
        </Section>

        {/* Final RSVP / contact */}
        <Section id="rsvp" variant="info">
          <InfoSection
            title={t.final.title}
            subtitle={t.final.subtitle}
            body={t.final.body}
            ctas={t.final.ctas}
            frameVariant="invitation"
          />
        </Section>

        <footer className="footer">
          <p className="footerText">{t.footer}</p>
        </footer>
      </main>
    </div>
  );
}
