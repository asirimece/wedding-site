import { useMemo, useState } from "react";
import "./sections.css";
import "./layouts.css";
import { content } from "./content/content";
import { SectionNav } from "./components/SectionNav";
import { Section } from "./components/Section";
import { SplitLayout } from "./components/layouts/SplitLayout";
import { TextLayout } from "./components/layouts/TextLayout";

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
            <h1 className="heroTitle nowrap-desktop">{t.hero.title}</h1>
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
          style={{ backgroundImage: `url(${t.seit.background})` }}
        >
          <SplitLayout
            title={t.seit.title}
            subtitle={t.seit.subtitle}
            text={t.seit.text}
            image={t.seit.couple}
          />
        </Section>


        {/* ================= SCHEDULE ================= */}
        <Section
          id="schedule"
          style={{ backgroundImage: `url(${t.schedule.background})` }}
        >
          <div className="contentBox contentBox--split contentBox--schedule">

            {/* LEFT column: title + subtitle + image */}
            <div className="splitLeft scheduleLeft">
              <h2 className="sectionTitle scheduleTitle nowrap-desktop">{t.schedule.title}</h2>
              {t.schedule.subtitle && (
                <p className="sectionSubtitle scheduleSubtitle">{t.schedule.subtitle}</p>
              )}

              <img src={t.schedule.img} alt="" className="scheduleImg" />
            </div>

            {/* RIGHT column: schedule list */}
            <div className="splitRight scheduleRight">
              <div className="scheduleLines">
                {t.schedule.items.map((item, i) => (
                  <div key={i} className="scheduleRow2">
                    <div className="scheduleTime2">{item.time}</div>
                    <div className="scheduleLabel2">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Section>

    
        {/* ================= INFO ================= */}
        <Section
          id="info"
          style={{
            backgroundImage: `url(${t.qa.background})`, /* BG NOT WORKING?? */
          }}
        >
          <div className="contentBox infoBox">

            <h2 className="sectionTitle">{t.info.title}</h2>

            <div className="infoGrid">

              {t.info.items.map((item, i) => (
                <div key={i} className="infoCard">

                  <img
                    src={item.icon}
                    alt=""
                    className="infoIcon"
                  />

                  <h3 className="infoCardTitle">{item.title}</h3>
                  <p className="infoCardText">{item.text}</p>

                </div>
              ))}

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
          <div className="contentBox qaBox">

            <h2 className="sectionTitle">{t.qa.title}</h2>

            <div className="qaGrid">

              {t.qa.items.map((item, i) => (
                <div key={i} className="qaCard">

                  <img
                    src={item.icon}
                    alt=""
                    className="qaIcon"
                  />

                  <h3 className="qaCardTitle">{item.title}</h3>
                  <p className="qaCardText">{item.text}</p>

                </div>
              ))}

            </div>

          </div>
        </Section>


        {/* ================= TENT ================= */}
        <Section
          id="tent"
          style={{ backgroundImage: `url(${t.tent.background})` }}
        >
          <div className="contentBox contentBox--split contentBox--schedule">

            {/* LEFT column: title + subtitle + image */}
            <div className="splitLeft scheduleLeft">
              <h2 className="sectionTitle scheduleTitle nowrap-desktop">{t.tent.title}</h2>
              <p className="sectionSubtitle scheduleSubtitle">{t.tent.subtitle}</p>

              <img src={t.tent.img} alt="" className="tentImg" />
            </div>

            {/* RIGHT column: schedule list */}
            <div className="splitRight scheduleRight">
              <div className="tentText">
                <p className="tentSubtitle">{t.tent.subtitle}</p>
                <h1 className="tentTitle nowrap-desktop">{t.tent.title}</h1>
              </div>
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
            <h1 className="hotelTitle nowrap-desktop">{t.hotel.title}</h1>
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
