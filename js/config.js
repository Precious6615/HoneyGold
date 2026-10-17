/*
 * HONEY GOLD ROOFING - SITE CONFIGURATION
 * ---------------------------------------
 * Edit this one file to update contact details, social links,
 * services, projects and FAQs. No other code changes are needed.
 */
window.SITE_CONFIG = {
  brand: {
    name: "Honey Gold Roofing",
    legalName: "Honey The Gold Roofing Concept",
    tagline: "Roofing, Installation, Repairs & Property Improvement",
  },

  contact: {
    // International format, digits only, no "+" (used for wa.me links)
    whatsappNumber: "2348038116293",
    whatsappMessage:
      "Hello Honey Gold Roofing, I would like to enquire about your roofing and general contracting services.",
    phones: [
      { display: "0803 811 6293", tel: "+2348038116293" },
      { display: "0902 428 3209", tel: "+2349024283209" },
    ],
    email: "kennygold79@gmail.com",
    address: "Federal Second Gate, Ijanikin, Badagry Expressway, Lagos State, Nigeria",
    mapsQuery: "Federal Second Gate Ijanikin Badagry Expressway Lagos",
    hours: "9:00am - 6:00pm",
  },

  /*
   * SOCIAL MEDIA
   * Leave url as "" until the client confirms the exact public profile link.
   * Empty links show as inactive icons and never send visitors anywhere.
   * Instagram and TikTok links were supplied by the client. Facebook
   * ("Honey Gold") is still unconfirmed.
   */
  social: [
    { network: "instagram", label: "Instagram", reference: "@kengold67", url: "https://www.instagram.com/kengold67/" },
    { network: "tiktok", label: "TikTok", reference: "@honeythegoldroofing", url: "https://www.tiktok.com/@honeythegoldroofing" },
    { network: "facebook", label: "Facebook", reference: "Honey Gold", url: "" },
  ],

  /*
   * SERVICES
   * Set show: false to hide a service the client does not offer.
   * confirmed: true means it appears on the client's own flyer.
   */
  services: [
    {
      id: "roof-installation",
      icon: "install",
      title: "Roof Installation",
      text: "New roofs for residential and commercial buildings, from roof framing to the final sheet or tile.",
      confirmed: true,
      show: true,
    },
    {
      id: "roof-repairs",
      icon: "repair",
      title: "Roof Repairs",
      text: "Fixing leaks, loose sheets, damaged tiles and worn flashing before small problems grow.",
      confirmed: false,
      show: true,
    },
    {
      id: "roof-replacement",
      icon: "replace",
      title: "Roof Replacement",
      text: "Removing an old or failing roof and replacing it with a durable modern roofing system.",
      confirmed: false,
      show: true,
    },
    {
      id: "tile-roofing",
      icon: "tile",
      title: "Tile Roofing",
      text: "Stone-coated metro tiles in classic and modern profiles, in a range of colours.",
      confirmed: true,
      show: true,
    },
    {
      id: "metal-roofing",
      icon: "metal",
      title: "Metal Roofing",
      text: "High quality aluminium long span, roofing sheets, flat sheets and cladding sheets.",
      confirmed: true,
      show: true,
    },
    {
      id: "waterproofing",
      icon: "water",
      title: "Waterproofing",
      text: "Protecting roofs, gutters and joints against water damage. Please confirm scope with us.",
      confirmed: false,
      show: true,
    },
    {
      id: "roof-inspections",
      icon: "inspect",
      title: "Roof Inspections",
      text: "A clear look at your roof's condition so you know what needs attention and why.",
      confirmed: false,
      show: true,
    },
    {
      id: "general-contracting",
      icon: "contract",
      title: "General Contracting",
      text: "Planning and managing building work from structure to finish, with one team to talk to.",
      confirmed: true,
      show: true,
    },
    {
      id: "property-improvements",
      icon: "home",
      title: "Property Improvements",
      text: "Upgrades that add value and comfort, from roof upgrades to exterior improvements.",
      confirmed: false,
      show: true,
    },
  ],

  // Materials listed on the client's flyer
  materials: [
    "Aluminium Long Span",
    "Roofing Sheets",
    "Flat Sheets",
    "Cladding Sheets",
    "Stone-Coated Metro Tiles",
    "Roofing Accessories",
  ],

  /*
   * PROJECTS
   * Only client-supplied photos belong here. Every photo below comes from
   * the client's own promotional flyer. Add more with a category from
   * projectCategories. Categories with no photos show a "coming soon" note.
   */
  projectCategories: [
    "Roofing Installation",
    "Roofing Repairs",
    "Roof Replacement",
    "General Contracting",
  ],
  projects: [
    { img: "assets/img/projects/p13.jpg", category: "Roofing Installation", caption: "Stone-coated tile installation in progress" },
    { img: "assets/img/projects/p10.jpg", category: "Roofing Installation", caption: "Red stone-coated tile roof" },
    { img: "assets/img/projects/p07.jpg", category: "Roofing Installation", caption: "Multi-hip roof in charcoal tiles" },
    { img: "assets/img/projects/p02.jpg", category: "Roofing Installation", caption: "Red aluminium long span roof" },
    { img: "assets/img/projects/p08.jpg", category: "Roofing Installation", caption: "Brown stone-coated tile roof" },
    { img: "assets/img/projects/p12.jpg", category: "Roofing Installation", caption: "Red tile hip roof with dormer" },
    { img: "assets/img/projects/p01.jpg", category: "Roofing Installation", caption: "Black tile roof on new build" },
    { img: "assets/img/projects/p09.jpg", category: "Roofing Installation", caption: "Charcoal tile roof, side view" },
    { img: "assets/img/projects/p03.jpg", category: "Roofing Installation", caption: "Tile installation over timber frame" },
    { img: "assets/img/projects/p11.jpg", category: "Roofing Installation", caption: "Large slate-grey tile roof" },
    { img: "assets/img/projects/p04.jpg", category: "Roofing Installation", caption: "Black tile roof with gable detail" },
    { img: "assets/img/projects/p14.jpg", category: "Roofing Installation", caption: "Completed hip roof" },
    { img: "assets/img/projects/p06.jpg", category: "General Contracting", caption: "Timber roof framing before tiling" },
    { img: "assets/img/projects/p05.jpg", category: "General Contracting", caption: "Aluminium roofing coils in stock" },
  ],

  faqs: [
    {
      q: "What roofing installation services do you offer?",
      a: "We install new roofs using stone-coated metro tiles and aluminium roofing such as long span, flat and cladding sheets. We can also handle the roof framing and accessories. Tell us about your building and we will recommend a suitable option.",
    },
    {
      q: "Can you repair my roof instead of replacing it?",
      a: "Often, yes. Many leaks and damaged sections can be repaired. After we see the roof, we will explain whether a repair makes sense or whether replacement is the better long-term choice.",
    },
    {
      q: "How do I know if my roof needs replacing?",
      a: "Common signs include repeated leaks, rusted or badly damaged sheets, sagging sections and many broken tiles. The best way to know is to have the roof checked. Contact us to arrange a visit.",
    },
    {
      q: "What does general contracting include?",
      a: "General contracting means we help plan, coordinate and carry out building work, not only the roof. Share what you need and we will confirm what we can take on for your project.",
    },
    {
      q: "How do I get a project estimate?",
      a: "Send us your details through the quote form or WhatsApp. Include your location, the type of work and photos if you have them. We will discuss your needs, and an estimate usually follows a site visit or a clear description of the job.",
    },
    {
      q: "How long will my project take?",
      a: "It depends on the size of the building, the materials chosen and site conditions. We will give you a realistic timeline once we understand your project.",
    },
    {
      q: "Where are you located and which areas do you serve?",
      a: "Our office is at Federal Second Gate, Ijanikin, Badagry Expressway, Lagos. Contact us with your project location and we will confirm whether we can serve it.",
    },
  ],
};
