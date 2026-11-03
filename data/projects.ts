export const projectCategories = [
  "All",
  "Residential",
  "Commercial",
  "Renovation",
  "Civil",
  "Infrastructure",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export type Project = {
  slug: string;
  title: string;
  category: Exclude<ProjectCategory, "All">;
  summary: string;
  description: string[];
  image: string;
  imageAlt: string;
  gallery: { src: string; alt: string }[];
  setting: string;
  year: string;
  specs: { label: string; value: string }[];
  scope: string[];
};

export const projects: Project[] = [
  {
    slug: "harbor-house",
    title: "Harbor House",
    category: "Residential",
    summary:
      "A two-storey family house organised around daylight, a timber-clad wing and a single open living room.",
    description: [
      "Harbor House is my residential project. The plan keeps private rooms on the upper volume and opens the ground floor to the garden through a full-height glazed wall.",
      "The construction sequence starts with the concrete base, then the framed upper storey, then the timber rainscreen and glazing. Services are routed so the open room does not collect a ceiling of exposed compromises.",
    ],
    image: "/images/residential.jpg",
    imageAlt: "Modern two-storey house with timber cladding and a glazed living room",
    gallery: [
      {
        src: "/images/interior.jpg",
        alt: "Open living room with timber wall, grey sofa and a view to the kitchen",
      },
      {
        src: "/images/house-dusk.jpg",
        alt: "White cubic house with a pool terrace and glass balustrades",
      },
      {
        src: "/images/renovation.jpg",
        alt: "White kitchen with a dark tiled backsplash and island seating",
      },
    ],
    setting: "Coastal metro setting",
    year: "2024",
    specs: [
      { label: "Type", value: "Detached house" },
      { label: "Levels", value: "Two storeys" },
      { label: "Structure", value: "Concrete base and framed upper floor" },
      { label: "Envelope", value: "Timber rainscreen and full-height glazing" },
      { label: "Record", value: "My project" },
    ],
    scope: [
      "Planning and construction programme",
      "Structure and envelope",
      "Interior fit-out coordination",
      "External works to the garden edge",
    ],
  },
  {
    slug: "ridge-court",
    title: "Ridge Court",
    category: "Residential",
    summary:
      "A courtyard house with a pool terrace, deep overhangs and a simple white masonry volume.",
    description: [
      "Ridge Court is my project for a house that is both compact and generous. The rooms face a shared terrace, and the overhangs do the shading work so the glass can stay large.",
      "The build is masonry and slab construction, with glass balustrades and a service core kept off the main living edges.",
    ],
    image: "/images/house-dusk.jpg",
    imageAlt: "White cubic house with a pool terrace and glass balustrades",
    gallery: [
      {
        src: "/images/residential.jpg",
        alt: "Timber-clad modern house opening onto a lawn",
      },
      {
        src: "/images/interior.jpg",
        alt: "Daylit living space connected to an outdoor deck",
      },
      {
        src: "/images/green.jpg",
        alt: "Dark brick building corner with a deep metal overhang",
      },
    ],
    setting: "Hillside metro setting",
    year: "2023",
    specs: [
      { label: "Type", value: "Courtyard house" },
      { label: "Levels", value: "Two storeys over a terrace" },
      { label: "Structure", value: "Masonry and concrete slab" },
      { label: "Focus", value: "Shade, outlook and outdoor rooms" },
      { label: "Record", value: "My project" },
    ],
    scope: [
      "Design coordination with the architect",
      "Superstructure and envelope",
      "Terrace, pool edge and balustrades",
      "Building services rough-in",
    ],
  },
  {
    slug: "meridian-block",
    title: "Meridian Block",
    category: "Commercial",
    summary:
      "A white commercial building with a stacked, cantilevered volume and a disciplined window grid.",
    description: [
      "Meridian Block is my commercial project. The massing is a set of stacked boxes, which lets floors step back and gives the lower levels a covered edge.",
      "The construction interest is the cantilever and the repeating window module. Both have to be decided early, because the structure and the facade are the same idea.",
    ],
    image: "/images/glass.jpg",
    imageAlt: "White commercial building with stacked cantilevered floors and a strict window grid",
    gallery: [
      {
        src: "/images/hero.jpg",
        alt: "Glass office towers seen from street level",
      },
      {
        src: "/images/office.jpg",
        alt: "Long office corridor with dark joinery and a pale floor",
      },
      {
        src: "/images/green.jpg",
        alt: "Brick and metal commercial facade against a clear sky",
      },
    ],
    setting: "Central business setting",
    year: "2025",
    specs: [
      { label: "Type", value: "Workplace building" },
      { label: "Structure", value: "Concrete frame with cantilevered floors" },
      { label: "Envelope", value: "Panelised facade and punched windows" },
      { label: "Interior", value: "Open floors with a service core" },
      { label: "Record", value: "My project" },
    ],
    scope: [
      "Frame and cantilever coordination",
      "Facade package",
      "Core, stairs and services risers",
      "Base-build interior handover",
    ],
  },
  {
    slug: "civic-wing",
    title: "Civic Wing",
    category: "Commercial",
    summary:
      "An angular public building with a glazed hall and a folded metal volume above the entrance.",
    description: [
      "Civic Wing is my project for a public building. A glazed hall does the welcoming, and a folded upper volume gives the street a clear address.",
      "Projects like this turn on coordination: structure, glass and metal panels have to meet cleanly, and the public entrance has to stay readable during construction.",
    ],
    image: "/images/facade.jpg",
    imageAlt: "Angular glass and metal civic building with a folded upper volume",
    gallery: [
      {
        src: "/images/glass.jpg",
        alt: "Stacked white commercial facade",
      },
      {
        src: "/images/office.jpg",
        alt: "Quiet workplace corridor with dark cabinetry",
      },
      {
        src: "/images/sustainable.jpg",
        alt: "Curved white and glass commercial facade against a blue sky",
      },
    ],
    setting: "Civic quarter setting",
    year: "2022",
    specs: [
      { label: "Type", value: "Institutional building" },
      { label: "Envelope", value: "Glass hall and metal panel volume" },
      { label: "Public edge", value: "Street-facing entrance hall" },
      { label: "Coordination", value: "Structure, glass and cladding" },
      { label: "Record", value: "My project" },
    ],
    scope: [
      "Primary structure",
      "Glazed hall and entrance",
      "Metal cladding package",
      "Public-realm interface",
    ],
  },
  {
    slug: "atelier-kitchen",
    title: "Atelier Kitchen",
    category: "Renovation",
    summary:
      "A full kitchen and services rebuild inside an existing home, kept within the original room footprint.",
    description: [
      "Atelier Kitchen is my renovation project. The room stays where it is. What changes is the services, the joinery and the way the island organises daily use.",
      "Renovation work like this is decided by what the existing slab and walls will allow. New drainage, power and ventilation are planned before any cabinet is ordered.",
    ],
    image: "/images/renovation.jpg",
    imageAlt: "Renovated kitchen with white cabinets, dark backsplash and pendant lights",
    gallery: [
      {
        src: "/images/interior.jpg",
        alt: "Living room opening toward a white kitchen",
      },
      {
        src: "/images/pipes.jpg",
        alt: "Close view of a chrome bath filler and hand shower",
      },
      {
        src: "/images/commercial.jpg",
        alt: "Blue and ochre apartment facade with repeating balconies",
      },
    ],
    setting: "Inner neighbourhood setting",
    year: "2025",
    specs: [
      { label: "Type", value: "Occupied-home renovation" },
      { label: "Scope", value: "Kitchen, services and finishes" },
      { label: "Constraint", value: "Existing structure retained" },
      { label: "Sequence", value: "Services first, then joinery" },
      { label: "Record", value: "My project" },
    ],
    scope: [
      "Strip-out and protection",
      "Plumbing and electrical relocation",
      "Joinery and stone surfaces",
      "Finishes and handover clean",
    ],
  },
  {
    slug: "westline-rooms",
    title: "Westline Rooms",
    category: "Renovation",
    summary:
      "An interior renewal that opens a living room to the garden and rebuilds the kitchen beyond it.",
    description: [
      "Westline Rooms is my project for opening an existing house without losing its structure. A new glazed edge connects the living room to the deck, and the kitchen is rebuilt in the same sequence.",
      "The construction challenge is the opening in the external wall and the services that have to move with it. Temporary support and the new lintel are planned before demolition starts.",
    ],
    image: "/images/interior.jpg",
    imageAlt: "Renovated living room with a timber feature wall and sliding glass doors",
    gallery: [
      {
        src: "/images/renovation.jpg",
        alt: "White renovated kitchen with black stools",
      },
      {
        src: "/images/residential.jpg",
        alt: "Exterior of a modern timber and glass house",
      },
      {
        src: "/images/office.jpg",
        alt: "Refined interior corridor with dark joinery",
      },
    ],
    setting: "Garden suburb setting",
    year: "2024",
    specs: [
      { label: "Type", value: "House alteration" },
      { label: "Key move", value: "New glazed opening to the garden" },
      { label: "Structure", value: "Existing walls with new support" },
      { label: "Interior", value: "Living room and kitchen" },
      { label: "Record", value: "My project" },
    ],
    scope: [
      "Structural opening",
      "Glazing package",
      "Interior rebuild",
      "Making-good of retained rooms",
    ],
  },
  {
    slug: "quay-deck",
    title: "Quay Deck",
    category: "Civil",
    summary:
      "A foundation and conduit deck for a large floor plate, reviewed on site before the frame rises.",
    description: [
      "Quay Deck is my civil project. My team reads the ground floor as it is laid out: reinforcement, conduits and the edge of the slab.",
      "This kind of work is about levels, drainage and the services that have to be in the concrete before it is too late to move them.",
    ],
    image: "/images/site.jpg",
    imageAlt: "Construction team reviewing a foundation slab with conduit runs",
    gallery: [
      {
        src: "/images/workers.jpg",
        alt: "Two workers among reinforcement bars and site tools",
      },
      {
        src: "/images/crew.jpg",
        alt: "Crew assembling a tall reinforcement cage",
      },
      {
        src: "/images/concrete.jpg",
        alt: "Close view of drawings and a scale ruler",
      },
    ],
    setting: "Waterfront works setting",
    year: "2023",
    specs: [
      { label: "Type", value: "Ground works and slab" },
      { label: "Focus", value: "Foundations, conduits and levels" },
      { label: "Coordination", value: "Civil, structure and services" },
      { label: "Stage shown", value: "Pre-frame review" },
      { label: "Record", value: "My project" },
    ],
    scope: [
      "Excavation and levels",
      "Reinforcement and conduits",
      "Slab pour coordination",
      "Site access and temporary works",
    ],
  },
  {
    slug: "frame-tower",
    title: "Frame Tower",
    category: "Infrastructure",
    summary:
      "A high-rise frame in progress, with cranes, screened floors and a vertical construction sequence.",
    description: [
      "Frame Tower is my infrastructure project. The work is the vertical sequence: floors, screens, cranes and the logistics of moving material up the building.",
      "Infrastructure around a tower is more than the frame. Hoists, street interfaces and the crane strategy decide whether the upper floors can keep moving.",
    ],
    image: "/images/crane.jpg",
    imageAlt: "Yellow tower cranes rising between buildings under construction",
    gallery: [
      {
        src: "/images/crew.jpg",
        alt: "Workers climbing a reinforcement cage on a high-rise site",
      },
      {
        src: "/images/workers.jpg",
        alt: "Site crew working a reinforcement deck",
      },
      {
        src: "/images/hero.jpg",
        alt: "Completed glass towers filling the sky",
      },
    ],
    setting: "Dense urban setting",
    year: "2026",
    specs: [
      { label: "Type", value: "High-rise frame" },
      { label: "Plant", value: "Tower cranes and screened floors" },
      { label: "Sequence", value: "Vertical, floor by floor" },
      { label: "Interface", value: "Street, hoist and site logistics" },
      { label: "Record", value: "My project" },
    ],
    scope: [
      "Frame construction",
      "Crane and hoist strategy",
      "Floor-cycle coordination",
      "Temporary edge protection",
    ],
  },
];

export const featuredShowcase = [
  {
    title: "Residential Construction",
    summary:
      "Houses shaped around structure, daylight and a construction sequence a client can follow from the first slab to handover.",
    href: "/projects/harbor-house",
    image: "/images/residential.jpg",
    imageAlt: "Modern two-storey house with timber cladding and a glazed living room",
  },
  {
    title: "Commercial Buildings",
    summary:
      "Workplaces and mixed-use buildings where the frame, the facade and the floors are coordinated as one delivery.",
    href: "/projects/meridian-block",
    image: "/images/glass.jpg",
    imageAlt: "White commercial building with stacked floors and a precise window grid",
  },
  {
    title: "Renovations",
    summary:
      "Existing buildings renewed with care for what should stay, what must move, and who is still using the place.",
    href: "/projects/atelier-kitchen",
    image: "/images/renovation.jpg",
    imageAlt: "Renovated kitchen with white joinery and a dark tiled splashback",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(slug: string) {
  const current = getProject(slug);
  if (!current) return [];
  const same = projects.filter(
    (project) => project.slug !== slug && project.category === current.category,
  );
  const others = projects.filter(
    (project) => project.slug !== slug && project.category !== current.category,
  );
  return [...same, ...others].slice(0, 3);
}
