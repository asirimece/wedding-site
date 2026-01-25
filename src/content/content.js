export const content = {
  en: {

    navItems: [
      { label: "Top", href: "#top" },
      { label: "Schedule", href: "#schedule" },
      { label: "Venue", href: "#venue" },
      { label: "RSVP", href: "#rsvp" },
    ],

    hero: {
      background: "/backgrounds/hero-bg.png",
      couple: "/photos/hero.png",
      title: "NORA & ROMAIN",
      subtitle: "6 JUNI 2026, Nîmes, Frankreich",
    },

    seit: {
      background: "/backgrounds/seit-bg.png",
      couple: "/photos/seit.png",
      title: "WIE ALLES BEGANN",
      subtitle: "SEIT 2012",
      text: "Wir haben uns im August 2012 auf einer Tanzfläche in Barcelona kennengelernt – ein zufälliger Moment, der alles verändert hat.\n Seitdem haben wir zusammen getanzt, gelacht und Wege gefunden, die uns immer näher zueinander gebracht haben.\n Jetzt freuen wir uns darauf, mit euch unseren nächsten Schritt zu feiern.",
    },

    schedule: {
      background: "/backgrounds/schedule-bg.png",
      img: "/photos/schedule-img.png",
      title: "UNSER HOCHZEITSTAG",
      subtitle: "06. Juni 2026",
      items: [
        { time: "2:45 PM", label: "Ankunft & Welcome Drinks" },
        { time: "3:30 PM", label: "Zeremonie" },
        { time: "4:30 PM", label: "Apéro & Fotos" },
        { time: "7:00 PM", label: "Abendessen & Party" },
      ],
    },

    info: {
      title: "EIN PAAR INFOS...",
      background: "/backgrounds/info-bg.png",
      items: [
        {
          icon: "/icons/location.gif",
          title: "Die Hochzeitslocation",
          text: "Hier möchten wir mit euch anstoßen, lachen und unvergessliche Momente erleben. Damit ihr leicht dorthin findet, hier die Adresse:\n Domaine des Jardins de Campagne, 30100 Nîmes \n {{MAP}}auf dem Gelände der steht euch ein großer Parkplatz kostenlos zur Verfügung.",
          mapUrl: "https://maps.google.com/?q=Domaine+des+Jardins+de+Campagne+30100+Nîmes"
        },
        {
          icon: "/icons/drink.gif",
          title: "Dress Code",
          text: "Das Wichtigste: Ihr fühlt euch wohl und genießt den Tag mit uns.\n Helle Farben und leichte Stoffe passen perfekt zur Location. Für den Abend kann eine leichte Weste angenehm sein. Unser Farb‑Schema (ihr müsst euch nicht daran halten):"
        },
        {
          icon: "/icons/gift.gif",
          title: "Geschenke",
          text: "Eure Anwesenheit ist unser größtes Geschenk. Falls ihr uns dennoch etwas schenken möchtet, freuen wir uns über einen Beitrag zu unseren Flitterwochen."
        },
      ],
    },

    qa: {
      background: "/backgrounds/qa-bg.png",
      img: "/photos/qa-img.png",
      title: "HÄUFIG GESTELLTEN FRAGEN",
      subtitle: " ",
      text: " ",
      items: [
        {
          icon: "/icons/kid.gif",
          title: "Können wir Kinder mitnehmen?",
          text: "Wir möchten die gemeinsame Zeit mit unseren Freunden und unserer Familie in einer entspannten Atmosphäre voll auskosten. Unsere Feier ist daher ohne Kinder geplant. Solltet ihr eine besondere Situation haben, meldet euch gern direkt bei uns – wir finden gemeinsam eine Lösung."
        },
        {
          icon: "/icons/surprise.gif",
          title: "Überraschung geplant?",
          text: "Wie schön! Damit alles gut in den Ablauf passt, meldet euch bitte kurz bei unserer Ansprechperson – so bleibt die Überraschung (z.B. Rede, Spiel, etc.) für uns erhalten und lässt sich ideal einplanen.\n Johanna (DE): +49 xxx x xx x \n Aurélien (FR): +41 76 445 32 86"
        },
        {
          icon: "/icons/hotel.gif",
          title: "Unterkunft",
          text: "Ihr könnt selbstverständlich die Unterkunft wählen, die am besten zu euch passt.\n Damit ihr euch leichter orientieren könnt, haben wir zwei Empfehlungen vorbereitet – ein Hotel und eine Übernachtungsmöglichkeit direkt vor Ort.\n Für alle, die die Region weiter erkunden möchten, gibt es außerdem einen kleinen Guide mit zusätzlichen Tipps."
        },
      ],
    },

    tent: {
      background: "/backgrounds/tent-bg.png",
      img: "/photos/tent-img.png",
      title: "LES TENTES DU BONHEUR",
      subtitle: "Unser Vorschlag für alle Gäste, die “sous les étoiles” übernachten möchten",
      imageText: "Mehr Infos & Fotos findet ihr in dieser {{BROCHURE}}.",
      brochureUrl: "public/pdfs/tent-brochure.pdf",
      blocks: [
    {
      subtitle: "Worum geht es?",
      text: "Für alle Gäste, die von Freitag, 05. Juni bis Sonntag, 07 Juni auf dem Gelände übernachten möchten, bieten wir liebevoll eingerichtete Tipis im Garten an. \n Die “Premium Zelte” befinden sich direkt auf dem Grundstück und verfügen über Zugang zu geteilten Duschen und Toiletten. Der Pool und der Garten können während des Aufenthalts frei genutzt werden."
    },
    {
      subtitle: "Preis:",
      text: "Der Preis beträgt EUR 350 für 2 Nächte für 2 Personen (inkl. Frühstück)."
    },
    {
      subtitle: "Reservierung",
      text: "Die Buchung erfolgt direkt über den Dienstleister. Bitte melde dich per Email bei lestentesdubonheuratxxxxx.com. \n Wichtig: vergesse nicht die Referenz “Nora&Romain 2026” einzugeben."
    }
  ]
    },

    hotel: {
      background: "/backgrounds/hotel-bg.png",
      img: "/photos/hotel-img.png",
      title: "BEST WESTERN - MARQUIS DE LA BAUME",
      subtitle: "Für alle Gäste, die lieber im Hotel übernachten möchten",
      imageText: "Mehr Infos unter: {{URL}}",
      hotelUrl: "www.hotel-marquis-de-la-baume.com",
      blocks: [
    {
      subtitle: "Reservierung",
      text: "Die Buchung erfolgt direkt über das Hotel. Für Verfügbarkeit und Preise wendet euch bitte direkt an das Hotel Marquis de la Baume.\n Mit dem Code „Romain&Nora 2026“ erhaltet ihr – je nach Zimmerkategorie und Datum – einen reduzierten Übernachtungspreis.\n Kontakt Hotel:  E‑Mail oder Telefon gemäss Website."
    },
    {
      subtitle: "Hotel Info",
      text: "Für alle Gäste, die eine komfortable Unterkunft bevorzugen, empfehlen wir das Best Western Marquis de la Baume in Nîmes.\n Das charmante 4‑Sterne-Hotel befindet sich in einem historischen Stadthaus aus dem 17. Jahrhundert im Herzen der Altstadt und bietet eine romantische Atmosphäre rund um einen Innenhof, moderne Zimmer und ein reichhaltiges Frühstück.\n Das Hotel liegt 15 km vom Veranstaltungsort entfernt und ist ein idealer Ausgangspunkt, um die Schönheit von Nîmes zu entdecken– von der Arena bis zur Maison Carrée, alles nur wenige Gehminuten entfernt.",
    },
  ]
    },

    rsvp: {
      background: "/backgrounds/rsvp-bg.png",
      title: "RSVP",
      text: "BITTE BIS ZUM 28. FEBRUAR 2026 ZUSAGEN - DIREKT ÜBER DEN LINK",
      formLink: "https://example.com/rsvp",
    },

    venue: {
      background: "/backgrounds/venue-bg.png",
      title: "Venue",
      text: "Château de Villary, 30900 Nîmes, France",
      mapLink: "https://www.google.com/maps?q=Château+de+Villary",
    }, 
  }
};
