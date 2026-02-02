import { useMemo, useState, useEffect } from "react";
import "./sections.css";
import "./layouts.css";
import "./animations.css";
import { content } from "./content/content";
import { SectionNav } from "./components/SectionNav";
import { Section } from "./components/Section";
import { SplitLayout } from "./components/layouts/SplitLayout";
import { TextLayout } from "./components/layouts/TextLayout";
import { LanguageSwitch } from "./components/LanguageSwitch";
import { RSVP } from "./RSVP";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { ContactLink } from "./components/ContactLink";


export default function App() {

  useScrollReveal();

  const [lang, setLang] = useState(() => {
    return localStorage.getItem("lang") || "de";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useMemo(() => {
    return {
      ...content.de,
      ...(content[lang] || {}),
    };
  }, [lang]);


  const [tentIndex, setTentIndex] = useState(0);

  /* RSVP contact state */
  const [showPhone, setShowPhone] = useState(false);

  const handleContactClick = () => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
      window.open("https://wa.me/41764772276", "_blank");
    } else {
      setShowPhone((prev) => !prev);
    }
  };

  const tentImages = useMemo(() => {
    const arr = t?.tent?.images;
    if (Array.isArray(arr) && arr.length) return arr;

    const single = t?.tent?.img;
    if (typeof single === "string" && single.length) return [single];

    return [];
  }, [t]);

  /* Reset slider when language changes */
  useEffect(() => {
    setTentIndex(0);
  }, [lang]);


  return (
    <>
    <LanguageSwitch lang={lang} onChange={setLang} />

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
            <p className="heroSubtitle reveal animate-slide-up delay-1">{t.hero.subtitle}</p>
            <h1 className="heroTitle reveal nowrap-desktop animate-slide-up delay-2">{t.hero.title}</h1>
          </div>

            <img
              src={t.hero.couple}
              alt="Couple"
              className="heroCouple animate-slide-up-centered delay-3"
            />

          </div>
        </Section>


        {/* ================= SEIT ================= */}
        <Section
          id="seit"
          style={{ backgroundImage: `url(${t.seit.background})` }}
        >
          <div className="contentBox contentBox--seit reveal animate-slide-up delay-1">

            {/* HEADER */}
            <div className="seitHeader reveal animate-slide-down delay-2">
              <h2 className="sectionTitle">{t.seit.title}</h2>
            </div>

            {/* SPLIT */}
            <div className="seitSplit">

              {/* LEFT — TEXT */}
              <div className="seitLeft reveal animate-slide-down delay-4">
                <p className="seitText">{t.seit.text}</p>
              </div>

              {/* RIGHT — IMAGE */}
              <div className="seitRight reveal animate-slide-up delay-3">
                <img
                  src={t.seit.couple}
                  alt=""
                  className="seitImg"
                />
              </div>

            </div>

          </div>
        </Section>


        {/* ================= SCHEDULE ================= */}
        <Section
          id="schedule"
          style={{ backgroundImage: `url(${t.schedule.background})` }}
        >
          <div className="contentBox contentBox--schedule reveal animate-slide-up delay-1">

            {/* FULL WIDTH HEADER */}
            <div className="scheduleHeader reveal animate-slide-down delay-2">
              <h2 className="sectionTitle reveal nowrap-desktop">{t.schedule.title}</h2>
              {t.schedule.subtitle && (
                <p className="sectionSubtitle">{t.schedule.subtitle}</p>
              )}
            </div>

            {/* BODY */}
            <div className="scheduleBody">

              {/* IMAGE COLUMN */}
              <div className="scheduleImageWrap reveal animate-slide-up delay-3">
                <img src={t.schedule.img} alt="" className="scheduleImg" />
              </div>

              {/* TABLE COLUMN */}
              <div className="scheduleTableWrap reveal animate-slide-down delay-4">
                <div className="scheduleLines">
                  {t.schedule.items.map((item, i) => (
                    <div key={i} className="scheduleRow2">
                      <div className="scheduleTime2">{item.time}</div>

                      <div>
                        <div className="scheduleLabel2">{item.label}</div>
                        {item.subtext && (
                          <div className="scheduleSubtext">{item.subtext}</div>
                        )}
                      </div>

                    </div>
                  ))}
                </div>
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
          <div className="contentBox infoBox reveal animate-slide-up delay-1">

            <h2 className="sectionTitle infoTitle reveal animate-slide-down delay-3">{t.info.title}</h2>

            <div className="infoGrid">

              {t.info.items.map((item, i) => (
                <div key={i} className="infoCard reveal animate-slide-up delay-4">

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
          <div className="contentBox qaBox reveal animate-slide-up delay-1">

            <h2 className="sectionTitle qaTitle reveal animate-slide-down delay-2">{t.qa.title}</h2>

            <div className="qaGrid reveal animate-slide-down delay-4">

              {t.qa.items.map((item, i) => (
                <div key={i} className="qaCard reveal animate-slide-up delay-3">

                  <img
                    src={item.icon}
                    alt=""
                    className="qaIcon"
                  />

                  <h3 className="qaCardTitle">{item.title}</h3>
                  <p className="qaCardText">{item.text}
                    {item.type === "contact" && (
                      <>
                        <ContactLink
                          name="Johanna (DE)"
                          phone="491761234567"
                          lang={lang}
                        />

                        <ContactLink
                          name="Aurélien (FR)"
                          phone="33612345678"
                          lang={lang}
                        />
                      </>
                    )}
                  </p>

                </div>
              ))}

            </div>

          </div>
        </Section>

        {/* ================= REISE ================= */}
        <Section
          id="reise"
          style={{
            backgroundImage: `url(${t.reise.background})`,
          }}
        >
          <div className="contentBox reiseBox reveal animate-slide-up delay-1">

            <h2 className="sectionTitle reiseTitle reveal animate-slide-down delay-2">{t.reise.title}</h2>

            <div className="reiseGrid reveal animate-slide-down delay-4">

              {t.reise.items.map((item, i) => (
                <div key={i} className="reiseCard">

                  <img
                    src={item.icon}
                    alt=""
                    className="reiseIcon"
                  />

                  <h3 className="reiseCardTitle">{item.title}</h3>
                  <p className="reiseCardText">{item.text}</p>
                    {item.bullets && (
                      <ul className="reiseBullets">
                        {item.bullets.map((line, idx) => (
                          <li key={idx}>{line}</li>
                        ))}
                      </ul>
                    )}
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
          <div className="contentBox contentBox--tent reveal animate-slide-up delay-1">

            {/* FULL WIDTH HEADER */}
            <div className="tentHeader reveal animate-slide-down delay-2">
              <h2 className="sectionTitle">{t.tent.title}</h2>
              <p className="sectionSubtitle tentSubtitle">
                {t.tent.subtitle}
              </p>
            </div>

            {/* SPLIT BODY */}
            <div className="tentBody">

              {/* LEFT SIDE — IMAGE + BROCHURE */}
              <div className="splitLeft tentLeft">

                {/* SLIDER */}
                {tentImages.length > 0 && (
                  <div className="tentSlider">

                    {tentImages.length > 1 && (
                      <button
                        type="button"
                        className="tentArrow left"
                        onClick={() =>
                          setTentIndex((prev) =>
                            prev === 0 ? tentImages.length - 1 : prev - 1
                          )
                        }
                        aria-label="Previous image"
                      >
                        ‹
                      </button>
                    )}

                    <img
                      src={tentImages[tentIndex]}
                      alt=""
                      className="tentImg"
                    />

                    {tentImages.length > 1 && (
                      <button
                        type="button"
                        className="tentArrow right"
                        onClick={() =>
                          setTentIndex((prev) =>
                            prev === tentImages.length - 1 ? 0 : prev + 1
                          )
                        }
                        aria-label="Next image"
                      >
                        ›
                      </button>
                    )}

                  </div>
                )}

                {/* BROCHURE TEXT */}
                {t.tent.imageText && (
                  <p className="tentImageText">
                    {t.tent.imageText.split("{{BROCHURE}}").map((part, idx) => (
                      <span key={idx}>
                        {part}
                        {idx === 0 && t.tent.brochureUrl && (
                          <>
                            <a
                              href={t.tent.brochureUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="tentBrochureLink"
                            >
                              Broschüre
                            </a>
                          </>
                        )}
                      </span>
                    ))}
                  </p>
                )}

              </div>

              {/* RIGHT SIDE — TEXT BLOCKS */}
              <div className="splitRight tentRight">
                <div className="tentContent">

                  {t.tent.blocks.map((block, i) => (
                    <div key={i} className="tentBlock">

                      <div className="tentEntryHeader">
                        <h3 className="tentBlockTitle">{block.subtitle}</h3>
                        <div className="tentLine" />
                      </div>

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
          <div className="contentBox hotelBox reveal animate-slide-up delay-1">

            {/* HEADER */}
            <div className="hotelHeader reveal animate-slide-down delay-2">
              <h2 className="sectionTitle">{t.hotel.title}</h2>
              <p className="sectionSubtitle">{t.hotel.subtitle}</p>
            </div>

            {/* LIST */}
            <div className="hotelList">

              {t.hotel.blocks.map((block, i) => (
                <div key={i} className="hotelEntry">

                  {/* Title row with line */}
                  <div className="hotelEntryHeader">
                    <h3 className="hotelName">{block.subtitle}</h3>
                    <div className="hotelLine" />
                  </div>

                  {/* URL */}
                  {block.url && (
                    <a
                      href={block.url}
                      target="_blank"
                      rel="noreferrer"
                      className="hotelUrl"
                    >
                      {block.url}
                    </a>
                  )}

                  {/* Text */}
                  <p className="hotelText">
                    {block.textTop}
                  </p>

                  {/* Optional bullets */}
                  {block.bullets && (
                    <ul className="hotelBullets">
                      {block.bullets.map((line, idx) => (
                        <li key={idx}>{line}</li>
                      ))}
                    </ul>
                  )}
                  {block.textBottom && (
                    <p className="hotelText">
                      {block.textBottom}
                    </p>
                  )}
                </div>
              ))}

            </div>

          </div>
        </Section>


        {/* ================= MAP ================= */}
        <Section
          id="map"
          style={{ backgroundImage: `url(${t.map.background})` }}
        >
          <div className="contentBox mapBox reveal animate-slide-up delay-1">

            {/* HEADER */}
            <div className="mapHeader reveal animate-slide-down delay-2">
              <h2 className="sectionTitle">{t.map.title}</h2>
              <p className="sectionSubtitle">{t.map.subtitle}</p>
            </div>

            {/* LIST */}
            <div className="mapList">

              {t.map.blocks.map((block, i) => (
                <div key={i} className="mapEntry">

                  {/* Title row with line */}
                  <div className="mapEntryHeader">
                    <h3 className="mapName">{block.subtitle}</h3>
                    <div className="mapLine" />
                  </div>

                  {/* Main text */}
                  <p className="mapText">
                    {block.textTop}
                  </p>

                  {/* Optional bullets */}
                  {block.bullets && (
                    <ul className="mapBullets">
                      {block.bullets.map((line, idx) => (
                        <li key={idx}>{line}</li>
                      ))}
                    </ul>
                  )}

                  {/* Bottom text */}
                  {block.textBottom && (
                    <p className="mapText">
                      {block.textBottom}
                    </p>
                  )}

                  {/* MAP LINK — MUST BE LAST */}
                  {block.mapUrl && (
                    <a
                      href={block.mapUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mapInlineLink"
                    >
                      🗺️ Unsere Map ansehen →
                    </a>
                  )}

                </div>
              ))}

            </div>

          </div>
        </Section>


        {/* ================= RSVP ================= */}
        <Section id="rsvp" className="section--rsvp">
          <div className="rsvpSplit">

            {/* LEFT IMAGE */}
            <div className="rsvpLeft">
              <img src={t.rsvp.image} alt="" className="rsvpImg" />
            </div>

            {/* RIGHT CONTENT */}
            <div
              className="rsvpRight"
              style={{ backgroundImage: `url(${t.rsvp.background})` }}
            >
              <div className="rsvpInner">

                {/* TITLE */}
                <h2 className="rsvpTitle">
                  {t.rsvp.title.split("{{DATE}}").map((part, i) => (
                    <span key={i}>
                      {part}
                      {i === 0 && (
                        <span className="rsvpDate">
                          {t.rsvp.date}
                        </span>
                      )}
                    </span>
                  ))}
                </h2>

                {/* BUTTON STACK */}
                <div className="rsvpButtons">

                  {/* RSVP LINK BUTTON */}
                  <a
                    className="rsvpButton"
                    href={t.rsvp.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    RSVP
                  </a>

                  {/* CONTACT BUTTON */}
                  <a
                    className="rsvpButton"
                    onClick={handleContactClick}
                    role="button"
                  >
                    KONTAKTIERE UNS
                  </a>

                  {/* Desktop phone reveal */}
                  {showPhone && (
                    <div className="rsvpPhoneReveal">
                      {t.rsvp.phone}
                    </div>
                  )}

                </div>

                {/* MOVE RSVP COMPONENT BELOW BUTTON STACK */}
                <div className="rsvpFormWrapper">
                  <RSVP />
                </div>


              </div>
            </div>

          </div>
        </Section>


      </main>
    </div>
    </>
  );
}
