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
            backgroundImage: `url(${t.info.background})`, /* BG NOT WORKING?? */
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
                  <p className="infoCardText">
                    {item.text.split("{{MAP}}").map((part, idx) => (
                      <span key={idx}>
                        {part}
                        {idx === 0 && item.mapUrl && (
                          <>
                            {" "}
                            (
                            <a
                              href={item.mapUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="infoLink"
                            >
                              siehe Google Maps
                            </a>
                            ){" "}
                          </>
                        )}
                      </span>
                    ))}
                  </p>
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
          <div className="contentBox contentBox--tent">

            {/* FULL WIDTH HEADER */}
            <div className="tentHeader">
              <h2 className="sectionTitle">{t.tent.title}</h2>
              <p className="sectionSubtitle tentSubtitle">
                {t.tent.subtitle}
              </p>
            </div>

            {/* SPLIT CONTENT */}
            <div className="tentBody">

              <div className="splitLeft tentLeft">
                <img src={t.tent.img} alt="" className="tentImg" />
                  {t.tent.imageText && (
                    <p className="tentImageText">
                      {t.tent.imageText.split("{{BROCHURE}}").map((part, idx) => (
                        <span key={idx}>
                          {part}
                          {idx === 0 && t.tent.brochureUrl && (
                            <a
                              href={t.tent.brochureUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="tentBrochureLink"
                            >
                            Broschüre
                            </a>
                          )}
                        </span>
                      ))}
                    </p>
                  )}
              </div>
              
              <div className="splitRight tentRight">
                <div className="tentContent">

                {t.tent.blocks.map((block, i) => (
                  <div key={i} className="tentBlock">

                    <h3 className="tentBlockTitle">
                      {block.subtitle}
                    </h3>

                    <p className="tentBlockText">
                      {block.text}
                    </p>

                  </div>
                ))}

              </div>

              </div>

            </div>

          </div>
        </Section>


        {/* ================= HOTEL ================= */}
        <Section
          id="hotel"
          style={{ backgroundImage: `url(${t.hotel.background})` }}
        >
          <div className="contentBox contentBox--hotel">

            {/* FULL WIDTH HEADER */}
            <div className="hotelHeader">
              <h2 className="sectionTitle">{t.hotel.title}</h2>
              <p className="sectionSubtitle hotelSubtitle">
                {t.hotel.subtitle}
              </p>
            </div>

            {/* SPLIT CONTENT */}
            <div className="hotelBody">

              <div className="splitLeft hotelLeft">
                <img src={t.hotel.img} alt="" className="hotelImg" />
                  {t.hotel.imageText && (
                    <p className="hotelImageText">
                      {t.hotel.imageText.split("{{URL}}").map((part, idx) => (
                        <span key={idx}>
                          {part}
                          {idx === 0 && t.hotel.hotelUrl && (
                            <a
                              href={t.hotel.hotelUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="hotelLink"
                            >
                            www.hotel-marquis-de-la-baume.com
                            </a>
                          )}
                        </span>
                      ))}
                    </p>
                  )}
              </div>
              
              <div className="splitRight hotelRight">
                <div className="hotelContent">

                {t.hotel.blocks.map((block, i) => (
                  <div key={i} className="hotelBlock">

                    <h3 className="hotelBlockTitle">
                      {block.subtitle}
                    </h3>

                    <p className="hotelBlockText">
                      {block.text}
                    </p>

                  </div>
                ))}

              </div>

              </div>

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
      



      </main>
    </div>
  );
}
