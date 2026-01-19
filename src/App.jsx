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


        {/* ================= SEIT ================= */}

        <Section
          id="seit"
          style={{
            backgroundImage: `url(${t.seit.background})`,
          }}
        >
          <div className="contentBox seitBox">
            <div className="seitLeft">
              <h2 className="seitTitle">{t.seit.title}</h2>
              <p className="seitSubtitle">{t.seit.subtitle}</p>
              
              {t.seit.text.split("\n").map((paragraph, i) => (
                <p key={i} className="seitText">
                  {paragraph.trim()}
                </p>
              ))}
            </div>

            <div className="seitRight">
              <img src={t.seit.couple} alt="Couple" />
            </div>
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

            <img
              src={t.schedule.img}
              alt="Img"
              className="scheduleImg"
            />

          </div>
        </Section>

    
        {/* ================= INFO ================= */}

        <Section
          id="info"
          style={{
            backgroundImage: `url(${t.info.background})`,
          }}
        >
          <div className="contentBox">

          <div className="infoText">
            <p className="infoSubtitle">{t.info.subtitle}</p>
            <h1 className="infoTitle">{t.info.title}</h1>
          </div>

          </div>
        </Section>


        {/* ================= Q&A ================= */}

        <Section
          id="qa"
          style={{
            backgroundImage: `url(${t.qa.background})`,
          }}
        >
          <div className="contentBox">

          <div className="qaText">
            <p className="qaSubtitle">{t.qa.subtitle}</p>
            <h1 className="qaTitle">{t.qa.title}</h1>
          </div>

          </div>
        </Section>


        {/* ================= TENT ================= */}

        <Section
          id="tent"
          style={{
            backgroundImage: `url(${t.tent.background})`,
          }}
        >
          <div className="contentBox">

          <div className="tentText">
            <p className="tentSubtitle">{t.tent.subtitle}</p>
            <h1 className="tentTitle">{t.tent.title}</h1>
          </div>

          </div>
        </Section>


        {/* ================= HOTEL ================= */}

        <Section
          id="hotel"
          style={{
            backgroundImage: `url(${t.hotel.background})`,
          }}
        >
          <div className="contentBox">

          <div className="hotelText">
            <p className="hotelSubtitle">{t.hotel.subtitle}</p>
            <h1 className="hotelTitle">{t.hotel.title}</h1>
          </div>

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
                RSVP
              </a>
  
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




      </main>
    </div>
  );
}
