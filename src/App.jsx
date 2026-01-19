import { useMemo, useState } from "react";
import "./App.css";
import { content } from "./content/content";
import { SectionNav } from "./components/SectionNav";
import { Section } from "./components/Section";

export default function App() {

  const [lang, setLang] = useState("en");

  const t = useMemo(() => {
    return content[lang] ?? content.en;
  }, [lang]);

  return (
    <div className="page">

      {/* Floating navigation dots / menu */}
      <SectionNav items={t.navItems.filter(i => i.href !== "#top")} />

      <main className="main">

        {/* ================= HERO ================= */}

        <Section
          id="top"
          variant="hero"
          className="heroSection"
          style={{
            backgroundImage: `url(${t.hero.background})`,
          }}
        >
          <div className="heroBgOverlay" />
          
          <div className="heroWrapper">

          <div className="heroText">
            <p className="heroSubtitle">{t.hero.subtitle}</p>
            <h1 className="heroTitle">{t.hero.title}</h1>
          </div>

            <img
              src={t.hero.couple}
              alt="Couple"
              className="heroCouple"
            />

          </div>
        </Section>


        {/* ================= VENUE ================= */}

        <Section
          id="venue"
          style={{
            backgroundImage: `url(${t.venue.background})`,
          }}
        >
          <div className="contentBox">

            <h2>{t.venue.title}</h2>
            <p>{t.venue.text}</p>

            <a
              className="primaryButton"
              href={t.venue.mapLink}
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps
            </a>

          </div>
        </Section>


        {/* ================= SCHEDULE ================= */}

        <Section
          id="schedule"
          style={{
            backgroundImage: `url(${t.schedule.background})`,
          }}
        >
          <div className="contentBox">

            <h2>{t.schedule.title}</h2>

            {t.schedule.items.map((item, i) => (
              <div key={i} className="scheduleRow">
                <span>{item.time}</span>
                <span>{item.label}</span>
              </div>
            ))}

          </div>
        </Section>


        {/* ================= RSVP ================= */}

        <Section
          id="rsvp"
          style={{
            backgroundImage: `url(${t.rsvp.background})`,
          }}
        >
          <div className="contentBox">

            <h2>{t.rsvp.title}</h2>
            <p>{t.rsvp.text}</p>

            <a
              className="primaryButton"
              href={t.rsvp.formLink}
              target="_blank"
              rel="noreferrer"
            >
              RSVP Now
            </a>

          </div>
        </Section>


      </main>
    </div>
  );
}
