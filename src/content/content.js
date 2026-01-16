// src/content/content.js
export const content = {
  en: {
    navItems: [
      { label: "Top", href: "#top" },
      { label: "Schedule", href: "#schedule" },
      { label: "Venue", href: "#venue" },
      { label: "Travel", href: "#travel" },
      { label: "FAQ", href: "#faq" },
      { label: "Speech Signup", href: "#speech" },
      { label: "RSVP", href: "#rsvp" },
    ],

    hero: {
      photo: "/photos/hero.png",
      photoAlt: "Couple photo",
      title: "Emma & Lucas",
      subtitle: "We’re getting married!",
      body: [
        "Saturday, 12 July 2026",
        "Zürich, Switzerland",
        "We can’t wait to celebrate with you.",
      ],
      ctas: [
        { label: "RSVP", href: "https://example.com/rsvp", external: true, variant: "primary" },
        { label: "See details", href: "#schedule", external: false, variant: "secondary" },
      ],
    },

    breaks: {
      one: { photo: "/photos/break-1.png", photoAlt: "Romantic photo" },
      two: { photo: "/photos/break-2.png", photoAlt: "Floral photo" },
    },

    schedule: {
      title: "Schedule",
      subtitle: "A quick overview of the day",
      body: ["Times are approximate — we’ll update if anything changes."],
      items: [
        { title: "Ceremony", meta: "15:00", detail: "Arrive 20 minutes early" },
        { title: "Reception", meta: "16:30", detail: "Drinks & photos" },
        { title: "Dinner", meta: "18:30", detail: "Seated dinner" },
        { title: "Party", meta: "21:00", detail: "Music & dancing" },
      ],
    },

    venue: {
      title: "Venue",
      subtitle: "How to get there",
      body: ["Venue Name", "Street Address 1, 8000 Zürich"],
      map: {
        image: "/maps/venue.png",
        alt: "Map to the venue",
        openLabel: "Open in Google Maps",
        openHref: "https://www.google.com/maps?q=Street+Address+1+8000+Z%C3%BCrich",
        note: "Parking: limited spots nearby. Public transport recommended.",
      },
    },

    travel: {
      title: "Travel & Stay",
      subtitle: "Recommendations",
      body: ["If you’re coming from out of town, here are a few options."],
      items: [
        { title: "Getting there", meta: "", detail: "Nearest train: Zürich HB (15 min by tram)" },
        { title: "Hotels", meta: "", detail: "We recommend booking early (summer season)" },
        { title: "Tips", meta: "", detail: "Comfortable shoes — we’ll be outdoors briefly" },
      ],
    },

    faq: {
      title: "FAQ",
      subtitle: "Good to know",
      items: [
        { q: "Dress code?", a: "Summer formal / cocktail. Pastels welcome (not required)." },
        { q: "Can I bring a plus-one?", a: "Please follow your invitation. If unsure, contact us." },
        { q: "Children?", a: "We love your kids — this will be an adults-only celebration." },
        { q: "Gifts?", a: "Your presence is the best gift. If you’d like, we’ll share a registry link soon." },
      ],
    },

    speech: {
      title: "Speeches & Toasts",
      subtitle: "Want to say a few words?",
      body: [
        "If you’d like to give a speech or toast, please sign up using the form below so we can plan the timing.",
      ],
      ctas: [
        { label: "Sign up for a speech", href: "https://example.com/speech-form", external: true, variant: "primary" },
      ],
    },

    final: {
      title: "RSVP",
      subtitle: "We hope you can make it",
      body: ["Please RSVP by 15 June 2026."],
      ctas: [
        { label: "RSVP Now", href: "https://example.com/rsvp", external: true, variant: "primary" },
        { label: "Contact", href: "mailto:hello@example.com", external: true, variant: "secondary" },
      ],
    },

    footer: "Made with love. If you have questions, just reach out.",
  },

  // Placeholders for later (we keep keys consistent so layout never changes)
  de: { navItems: [], hero: {}, breaks: {}, schedule: {}, venue: {}, travel: {}, faq: {}, speech: {}, final: {}, footer: "" },
  fr: { navItems: [], hero: {}, breaks: {}, schedule: {}, venue: {}, travel: {}, faq: {}, speech: {}, final: {}, footer: "" },
};
