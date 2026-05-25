export const content = {
  de: {

    navItems: [
      { label: "Top", href: "#top" },
      { label: "Schedule", href: "#schedule" },
      { label: "Venue", href: "#venue" },
      { label: "RSVP", href: "#rsvp" },
    ],

    hero: {
      background: "/backgrounds/hero-bg.webp",
      couple: "/photos/hero.png",
      title: "NORA & ROMAIN",
      subtitle: "6 JUNI 2026 IN NÎMES, FRANKREICH",
    },

    seit: {
      background: "/backgrounds/seit-bg.png",
      couple: "/photos/seit.png",
      title: "WIE ALLES BEGANN",
      subtitle: " ",
      text: "Wir haben uns im August 2012 auf einer Tanzfläche in Barcelona kennengelernt – ein zufälliger Moment, der alles verändert hat.\n\n" +
            "Seitdem ist viel passiert.\n"+
            "Das Leben zeigte sich uns in vielen Farben – mal laut und leicht, mal ruhiger und ernster. Es wurde gelacht, geweint, innegehalten und getanzt.\n\n" + 
            "Egal welche Melodie spielen wird:\n"+
            "Wir möchten unser Leben miteinander teilen und füreinander da sein. Deshalb möchten wir uns nun dieses Versprechen geben.\n\n"+
            "Dass wir diesen Tag mit euch teilen dürfen, bedeutet uns sehr viel. Ihr habt uns begleitet, geprägt und getragen. Umso schöner ist es, diesen nächsten Schritt mit euch feiern zu dürfen.",
    },

    schedule: {
      background: "/backgrounds/schedule-bg.png",
      img: "/photos/schedule-img.webp",
      title: "UNSER HOCHZEITSTAG",
      subtitle: "06. Juni 2026",
      items: [
        { time: "3:30 PM", label: "Ankunft & Welcome Drinks" },
        { time: "4:15 PM", label: "Zeremonie" },
        { time: "5:15 PM", label: "Apéro & Fotos", subtext: "Feine häppchen & Drinks, während wir schöne Momente festhalten"},
        { time: "8:00 PM", label: "Abendessen & Party", subtext: "Ein gemütlicher Abend mit feinem Essen, liebevollen Toast & viel Tanz!"},
      ],
    },

    info: {
      title: "EIN PAAR INFOS",
      background: "/backgrounds/info-bg.png",
      items: [
        {
          icon: "/icons/location.gif",
          title: "Die Hochzeitslocation",
          text: "Hier möchten wir mit euch anstoßen, lachen und unvergessliche Momente erleben. Damit ihr leicht dorthin findet, hier die Adresse:\n Domaine des Jardins de Campagne, 30100 Nîmes {{MAP}} \n auf dem Gelände steht euch ein großer Parkplatz kostenlos zur Verfügung.",
          mapUrl: "https://maps.google.com/?q=Domaine+des+Jardins+de+Campagne+30100+Nîmes"
        },
        {
          icon: "/icons/drink.gif",
          title: "Dress Code",
          text: "Das Wichtigste: Ihr fühlt euch wohl und genießt den Tag mit uns.\n Helle Farben und leichte Stoffe passen perfekt zur Location. Für den Abend kann eine leichte Weste angenehm sein. Unser Farb-Schema (ihr müsst euch nicht daran halten):",
          colorImage: "/photos/farbe.png"
        },
        {
          icon: "/icons/gift.gif",
          title: "Geschenke",
          text: "Eure Anwesenheit ist für uns das schönste Geschenk. Falls ihr uns darüber hinaus eine Freude machen möchtet, freuen wir uns über einen Beitrag zu unseren Flitterwochen.",
          bankLabel: "Kontodaten anzeigen",
          bankHideLabel: "Kontodaten ausblenden",
          copyLabel: "IBAN kopieren",
          copiedLabel: "IBAN kopiert",
          address: "Friedheimstrasse 21, 8057 Zürich",
          accountName: "Descloux R. o. Roeckel N.",
          iban: "CH75 0070 0114 9043 6979 8",
        },
      ],
    },

    qa: {
      background: "/backgrounds/qa-bg.png",
      img: "/photos/qa-img.png",
      title: "HÄUFIG GESTELLTE FRAGEN",
      subtitle: " ",
      text: " ",
      items: [
        {
          icon: "/icons/kid.gif",
          title: "Können wir Kinder mitnehmen?",
          text: "Wir möchten diesen besonderen Tag gemeinsam entspannt mit euch feiern. Unsere Idee ist deshalb eine Feier unter Erwachsenen.\n"+
                "Wenn ihr eure Kinder mitbringen möchtet oder es für euch sonst schwierig ist, ist das natürlich kein Problem. Bitte gebt uns einfach im RSVP an."
        },
        {
          icon: "/icons/surprise.gif",
          title: "Überraschung geplant?",
          text: "Wie schön! Damit alles gut in den Ablauf passt, meldet euch bitte kurz bei unserer Ansprechperson – so bleibt die Überraschung (z.B. Rede, Spiel, etc.) für uns erhalten und lässt sich ideal einplanen.",
          type: "contact"
        },
        {
          icon: "/icons/hotel.gif",
          title: "Unterkunft",
          text: "Ihr könnt selbstverständlich die Unterkunft wählen, die am besten zu euch passt.\n"+
                "Damit ihr euch leichter orientieren könnt, haben wir drei Empfehlungen vorbereitet – zwei Hotels und eine Übernachtungsmöglichkeit direkt vor Ort.\n"+
                "Für alle, die die Region weiter erkunden möchten, gibt es außerdem einen kleinen Guide mit zusätzlichen Tipps."
        },
      ],
    },

    reise: {
      background: "/backgrounds/reise-bg.png",
      img: "/photos/reise-img.png",
      title: "ANREISE UND AUFENTHALT",
      subtitle: " ",
      text: " ",
      items: [
        {
          icon: "/icons/car.png",
          title: "Auto",
          text: "Für alle, die gerne unterwegs Stopps einlegen oder flexibel sein möchten.\nFalls ihr kein Auto zur Verfügung habt, meldet euch gerne bei uns – wir helfen euch, Mitfahrgelegenheiten unter unseren Gästen zu koordinieren."
        },
        {
          icon: "/icons/fly.png",
          title: "Flugzeug",
          text: "Nahegelegene Flughäfen sind Montpellier oder Marseille. Von Basel gibt es bspw. günstige Verbindungen (ab ca. 79 CHF hin & zurück). Ab beiden Flughäfen erreicht ihr Nîmes gut mit Zug, Mietwagen, oder meldet euch bei uns wir klären ob ein Pick-up möglich ist."        
        },
        {
          icon: "/icons/zug.png",
          title: "Zug",
          text: "Nîmes ist gut mit dem Zug erreichbar, Beispielhafte Verbindungen:\n",
          bullets: [
          "Karlsruhe – Strasbourg – Nîmes",
          "Genf – Lyon – Nîmes"
        ]
        },
      ],
    },

    tent: {
      background: "/backgrounds/tent-bg.png",
      images: [
        "/photos/tent-img-1.png",
        "/photos/tent-img-2.png",
        "/photos/tent-img-3.png",
        "/photos/tent-img-4.png",
        "/photos/tent-img-5.png",
      ],
      title: "ÜBERNACHTEN – GLAMPING",
      subtitle: "Unser Vorschlag für alle Gäste, die “sous les étoiles” übernachten möchten",
      imageText: "Mehr Infos & Fotos findet ihr in dieser {{BROCHURE}}.",
      brochureUrl: "/pdfs/tent-brochure.pdf",
      blocks: [
    {
      subtitle: "Worum geht es?",
      text: "Für alle Gäste, die von Freitag, 05. Juni bis Sonntag, 07 Juni auf dem Gelände übernachten möchten. Die “Premium Zelte” befinden sich im Park des Geländes und verfügen über Zugang zu Duschen und Toiletten.\n"+
            "Der Pool und der Garten können während des Aufenthalts frei genutzt werden.\n"+
            "Der Preis beträgt EUR 300 für 2 Nächte für 2 Personen (inkl. Frühstück)."
    },
    {
      subtitle: "Reservierung",
      text: "Die Buchung erfolgt direkt über den Dienstleister. Bitte melde dich per E-Mail bei <a href=\"mailto:tentesdubonheur@gmail.com\">tentesdubonheur@gmail.com</a>\n"+
            "Wichtig: Gib die Referenz “Nora&Romain 2026” ein."
    }
  ]
    },

    hotel: {
      background: "/backgrounds/hotel-bg.png",
      title: "WEITERE IDEEN FÜR ÜBERNACHT&shy;UNGEN",
      subtitle: "Für alle Gäste, die lieber im Hotel übernachten möchten",
      blocks: [
        {
          subtitle: "Hotel Best Western Marquis de la Baume****",
          url: "https://www.hotel-marquis-de-la-baume.com",

          textTop:
            "Das Hotel ist in Nîmes und ca. 20 Minuten mit dem Auto vom Hochzeitsfest entfernt.\n\n" +
            "Spezialpreise mit der Referenz “Nora&Romain 2026”:\nNur gültig für einen Aufenthalt von vier Nächten.\n",
          bullets: [
            "Zimmer Standard Double Bed: EUR 98/Zimmer/Nacht",
            "Zimmer Classic Queen Size Bed: EUR 108/Zimmer/Nacht"
          ],
          textBottom: "Reservierung per Tel (+33 4 66 76 28 42) oder per E-Mail (<a href=\"mailto:contact@hotelmarquisdelabaume.com\">contact@hotelmarquisdelabaume.com</a>)"
        },
        {
          subtitle: "Domaine du Prieuré d’Estagel",
          url: "https://www.domaineduprieure-estagel.com",

          textTop:
            "Die Unterkunft ist ca. 5 Minuten (mit dem Auto) von der Hochzeitslocation entfernt.\n"+
            "Preise ab EUR 170 / Nacht.\n\n"+
            "Für eine Reservierung siehe Webseite oder Booking.com."
        }
      ]
    },

    map: {
      background: "/backgrounds/map-bg.png",
      title: "UNSERE REISE-MAP FÜR EUCH",
      blocks: [
        {
          textTop:
            "Für unsere Hochzeit in Nîmes haben wir eine kleine Inspiration-Map für euch zusammengestellt.\n"+
            "Dies ist eine Einladung zum Entdecken – für alle, die den Weg zu unserer Hochzeit mit schönen Stopps verbinden oder ihren Aufenthalt im Süden verlängern möchten.\n\n"+
            "Auf der Karte findet ihr:\n"+
            "Stopps auf dem Weg nach und in Nîmes – Orte in der Provence – Spots an der Côte d’Azur\n\n",
          bullets: [
            "🍽️ Restaurants",
            "📚 Museen",
            "🍷 Weingüter & Bars",
            "🌸 Gärten",
            "🛏️ Aussergewöhnliche Hotels",
            "🌄 Naturspots",
            "🏛️ Sehenswürdigkeiten & besondere Orte",
            "💍 Unsere Hochzeitslocation & Parkmöglichkeiten"
          ],
          textBottom: 
            "Die Icons helfen euch bei der Orientierung – wählt einfach aus, was zu eurer Route, eurer Reisezeit und eurer Stimmung passt.\n"+
            "Wir freuen uns, wenn diese Karte euch nicht nur zu unserer Hochzeit führt, sondern auch zu eigenen kleinen Erinnerungen unterwegs ❤️ \n\n",
          mapUrl: "https://maps.app.goo.gl/gUftbYhKf3hoYiia7",
          mapLabel: "🗺️ Unsere Map ansehen →"
        },
      ]
    },

    rsvp: {
      image: "/photos/rsvp-left.webp",
      background: "/backgrounds/rsvp-bg.png",
      title:
        "BITTE BIS ZUM\n" +
        "{{DATE}}\n" +
        "ZUSAGEN — DIREKT ÜBER DEN LINK",
      date: "28. FEBRUAR 2026",
      phone: "+41 76 477 22 76",
      link: "https://forms.gle/FSarnovDvNYGPsi77",
      contactLabel: "KONTAKTIERE UNS"
    },

  },



  fr: {

  navItems: [
    { label: "Accueil", href: "#top" },
    { label: "Programme", href: "#schedule" },
    { label: "Lieu", href: "#venue" },
    { label: "RSVP", href: "#rsvp" },
  ],

  hero: {
    background: "/backgrounds/hero-bg.webp",
    couple: "/photos/hero.png",
    title: "NORA & ROMAIN",
    subtitle: "6 JUIN 2026 À NÎMES, FRANCE",
  },

  seit: {
    background: "/backgrounds/seit-bg.webp",
    couple: "/photos/seit.png",
    title: "NOTRE HISTOIRE",
    text:
      "Nous nous sommes rencontrés en août 2012, sur une piste de danse à Barcelone – un moment totalement imprévu, qui a pourtant tout changé.\n\n" +
      "Depuis, beaucoup de choses se sont passées. La vie nous est apparue dans toutes ses couleurs – parfois légère et éclatante, parfois plus sérieuse ou plus douce. Il y a eu des rires, des larmes, des moments qui nous ont fait grandir, et beaucoup de danse.\n\n" +
      "Quelle que soit la mélodie jouée: nous voulons partager notre vie et être là l’un pour l’autre. C’est pourquoi nous souhaitons aujourd’hui nous faire cette promesse.\n\n" +
      "Pouvoir partager ce jour avec vous compte énormément pour nous. Vous nous avez accompagnés, inspirés et soutenus. Et c’est une joie d’autant plus grande de pouvoir célébrer cette nouvelle étape à vos côtés."
  },

  schedule: {
    background: "/backgrounds/schedule-bg.webp",
    img: "/photos/schedule-img.webp",
    title: "NOTRE JOURNÉE DE MARIAGE",
    subtitle: "06 Juin 2026",
    items: [
      { time: "3:30 PM", label: "Arrivée & Welcome Drinks" },
      { time: "4:15 PM", label: "Cérémonie" },
      { time: "5:15 PM", label: "Apéritif & Photos", subtext: "De délicieux amusebouche et quelques verres, pendant que nous immortalisons de beaux moments."},
      { time: "8:00 PM", label: "Repas & Fête", subtext: "Une soirée conviviale, avec un bon repas, des discours remplis d’amour... et beaucoup de danse!"},
    ],
  },

  info: {
    title: "QUELQUES INFORMATIONS",
    background: "/backgrounds/info-bg.webp",
    items: [
      {
        icon: "/icons/location.gif",
        title: "Lieu du mariage",
        text:
          "C’est ici que nous trinquerons, rirons et partagerons ensemble des moments inoubliables.\n" +
          "Pour vous y rendre facilement, voici l’adresse :\n" +
          "Domaine des Jardins de Campagne, 30100 Nîmes\n" +
          "{{MAP}}Un grand parking gratuit est disponible sur place.",
        mapUrl: "https://maps.google.com/?q=Domaine+des+Jardins+de+Campagne+30100+Nîmes"
      },
      {
        icon: "/icons/drink.gif",
        title: "Dress Code",
        text:
          "L’essentiel: que vous vous sentiez bien et que vous profitiez pleinement de cette journée avec nous.\n" +
          "Des couleurs claires et des tissus légers se marient parfaitement avec la beauté du lieu. Pour la soirée, une petite veste peut être agréable. Notre palette de couleurs (vous n’êtes pas obligés de vous y tenir):",
        colorImage: "/photos/farbe.png"
      },
      {
        icon: "/icons/gift.gif",
        title: "Cadeaux",
          text:
            "Votre présence est pour nous le plus beau des cadeaux.\n" +
            "Si vous souhaitez malgré tout nous faire plaisir, une participation à notre voyage de noces nous ferait très plaisir.",
          bankLabel: "Voir les détails du compte",
          bankHideLabel: "Masquer les détails du compte",
          copyLabel: "Copier l'IBAN",
          copiedLabel: "IBAN copié",  
          address: "Friedheimstrasse 21, 8057 Zürich",
          accountName: "Descloux R. o. Roeckel N.",
          iban: "CH75 0070 0114 9043 6979 8",
      },
    ],
  },

  qa: {
    background: "/backgrounds/qa-bg.webp",
    img: "/photos/qa-img.png",
    title: "QUESTIONS FRÉQUEMMENT POSÉES",
    subtitle: " ",
    text: " ",
    items: [
      {
        icon: "/icons/kid.gif",
        title: "Puis-je venir avec mes enfants?",
        text:
          "Nous aimerions célébrer cette journée spéciale dans une atmosphère détendue. C’est pourquoi nous avons imaginé une fête principalement entre adultes.\n" +
          "Cependant, si vous souhaitez venir avec vos enfants ou si c’est plus simple pour vous, aucun souci. Merci de simplement l’indiquer dans votre RSVP."
      },
      {
        icon: "/icons/surprise.gif",
        title: "Une surprise de prévue?",
        text:
          "Quelle belle attention !\n" +
          "Pour que tout s’intègre harmonieusement dans le déroulement de la journée, merci de contacter l’une de nos personnes de référence.\n"+
          "Cela permettra de garder la surprise intacte (discours, animation, petit jeu, etc.) tout en veillant à ce que le moment choisi s’accorde bien avec le programme.",
        type: "contact"
      },
      {
        icon: "/icons/hotel.gif",
        title: "Où puis-je loger?",
        text:
          "Vous êtes bien sûr libres de choisir l’hébergement qui vous convient le mieux.\n" +
          "Pour faciliter votre recherche, nous avons sélectionné trois options: Deux hôtels et une possibilité de logement directement sur place.\n" +
          "Et pour celles et ceux qui souhaitent profiter un peu plus de la région, nous avons également préparé un petit guide avec des recommandations supplémentaires."
      },
    ],
  },

  reise: {
    background: "/backgrounds/reise-bg.png",
    img: "/photos/reise-img.png",
    title: "ACCÉS ET HÉBERGEMENT",
    subtitle: " ",
    text: " ",
    items: [
      {
        icon: "/icons/car.png",
        title: "En voiture",
        text: "Idéal pour tous ceux qui souhaitent faire quelques arrêts en route ou rester pleinement flexibles.\nSi vous n’avez pas de voiture, n’hésitez pas à nous contacter: nous vous aiderons volontiers à organiser des co‑voiturages entre nos invités."
      },
      {
        icon: "/icons/fly.png",
        title: "En avion",
        text: "Les aéroports les plus proches sont Montpellier et Marseille. Depuis Bâle, il existe par exemple des vols à prix avantageux (dès env. 79 CHF aller-retour).\n"+
              "Depuis les deux aéroports, vous pouvez rejoindre Nîmes facilement en train, en voiture de location ou, si besoin, en nous contactant: nous verrons s’il est possible d’organiser un transfert."        
      },
      {
        icon: "/icons/zug.png",
        title: "En train",
        text: "Nîmes est bien desservie par le rail.Voici quelques exemples de trajets:",
        bullets: [
        "Karlsruhe – Strasbourg – Nîmes",
        "Genf – Lyon – Nîmes"
      ]
      },
    ],
  },

  tent: {
      background: "/backgrounds/tent-bg.png",
      images: [
        "/photos/tent-img-1.png",
        "/photos/tent-img-2.png",
        "/photos/tent-img-3.png",
        "/photos/tent-img-4.png",
        "/photos/tent-img-5.png",
      ],
    title: "DORMIR SUR PLACE – GLAMPING",
    subtitle: "Pour tous les invités souhaitant passer la nuit sous les étoiles",
    imageText: "Plus d’informations et de photos dans cette {{BROCHURE}}.",
    brochureUrl: "/pdfs/tent-brochure.pdf",

    blocks: [
      {
        subtitle: "De quoi s’agit-il ?",
        text:
          "Notre suggestion pour tous les invités qui souhaitent passer la nuit sous les étoiles et profiter pleinement du domaine du vendredi 5 Juin au dimanche 7 Juin.\n"+
          "Les tentes « Premium » sont installées dans le parc du domaine et disposent d’un accès aux douches et aux toilettes. Le jardin et la piscine peuvent être utilisés librement pendant tout votre séjour.\n"+
          "Tarif: 300 € pour 2 nuits / 2 personnes (petit-déjeuner inclus)."
      },
      {
        subtitle: "Réservation",
        text:
          "La réservation se fait directement auprès du prestataire.\n" +
          "Merci d’envoyer un e-mail à: <a href=\"mailto:tentesdubonheur@gmail.com\">tentesdubonheur@gmail.com</a>\n"+
          "Important: veuillez indiquer la référence « Nora&Romain 2026 » dans votre demande."
      }
    ]
  },

  hotel: {
      background: "/backgrounds/hotel-bg.png",
      title: "AUTRES IDÉES D'HÉBER&shy;GEMENT",
      subtitle: "Pour les invités qui préfèrent dormir à l’hôtel",
      blocks: [
        {
          subtitle: "Hotel Best Western Marquis de la Baume****",
          url: "https://www.hotel-marquis-de-la-baume.com",

          textTop:
            "L’hôtel se situe à Nîmes, à environ 20 minutes en voiture du lieu du mariage.\n\n" +
            "Tarifs spéciaux avec la référence « Nora&Romain 2026 »:\nOffre valable uniquement pour un séjour de quatre nuits :\n",
          bullets: [
            "Chambre Standard (lit double): EUR 98/chambre/nuit",
            "Chambre Classic (lit Queen Size): EUR 108/chambre/nuit"
          ],
          textBottom: "Réservation par Tél. (+33 4 66 76 28 42) our par e-mail (<a href=\"mailto:contact@hotelmarquisdelabaume.com\">contact@hotelmarquisdelabaume.com</a>)"
        },
        {
          subtitle: "Domaine du Prieuré d’Estagel",
          url: "https://www.domaineduprieure-estagel.com",

          textTop:
            "Cette option se trouve à environ 5 minutes en voiture du lieu du mariage.\n"+
            "Prix à partir de EUR 170 / nuit.\n\n"+
            "Pour réserver, veuillez consulter directement le site web de l’établissement ou Booking.com."
        }
      ]
    },

    map: {
      background: "/backgrounds/map-bg.png",
      title: "NOTRE CARTE DE VOYAGE POUR VOUS",
      blocks: [
        {
          textTop:

            "Nous avons préparé pour vous une petite carte d’inspiration.\n"+
            "Une invitation à la découverte - pour celles et ceux qui souhaitent ponctuer leur trajet de jolis arrêts ou prolonger leur séjour dans le Sud.\n"+
            "Sur cette carte, vous trouverez:\n"+
            "Etapes sur le chemin vers ou dans Nîmes – Lieux à découvrir en Provence – Spots en Côte d’Azur\n\n",
      bullets: [
        "🍽️ Restaurants",
        "📚 Musées",
        "🍷 Domaines viticoles & Bars",
        "🌸 Jardins",
        "🛏️ Hôtels insolites",
        "🌄 Spots nature",
        "🏛️ Sites touristiques & lieux exceptionnels",
        "💍 Notre lieu de mariage & parkings"
      ],
          textBottom: 
            "Les icônes vous aideront à vous orienter – il vous suffit de choisir ce qui correspond à votre itinéraire, à votre période de voyage et à vos envies du moment.\n"+
            "Nous espérons que cette carte ne vous mènera pas seulement à notre mariage, mais aussi vers vos propres petits souvenirs en chemin ❤️ \n\n",
          mapUrl: "https://maps.app.goo.gl/gUftbYhKf3hoYiia7",
          mapLabel: "🗺️ Découvrir notre carte →"
        },
      ]
    },

    rsvp: {
      image: "/photos/rsvp-left.webp",
      background: "/backgrounds/rsvp-bg.png",
      title:
        "MERCI DE CONFIRMER VOTRE PRÉSENCE D'ICI AU\n" +
        "{{DATE}}\n" +
        "DIRECTEMENT VIA LE LIEN",
      date: "28 FÉVRIER 2026",
      phone: "+41 76 477 22 76",
      link: "https://forms.gle/FSarnovDvNYGPsi77",
      contactLabel: "CONTACTEZ-NOUS"
    },

}

};
