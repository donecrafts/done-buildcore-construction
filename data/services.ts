export type IconName =
  | "compass"
  | "building"
  | "droplets"
  | "package"
  | "hardhat"
  | "hammer"
  | "landmark"
  | "clipboard";

export type Service = {
  slug: string;
  title: string;
  icon: IconName;
  summary: string;
  description: string;
  points: string[];
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "general-construction",
    title: "General Construction",
    icon: "hardhat",
    summary:
      "Full-site construction for buildings that need one team to hold structure, envelope and interiors together.",
    description:
      "General construction at Done BuildCore Construction is the coordinated delivery of a building, from mobilisation through handover. We organise the site, the sequence and the trades so the work you approved on paper is the work that gets built.",
    points: [
      "Site setup, temporary works and construction sequencing",
      "Structure, envelope and interior coordination",
      "Progress reporting a client can actually read",
      "Handover information gathered while the work is happening",
    ],
    image: "/images/crane.jpg",
    imageAlt: "Tower cranes beside high-rise buildings wrapped in construction netting",
  },
  {
    slug: "planning",
    title: "Planning",
    icon: "compass",
    summary:
      "Site studies, programmes and scope decisions that give a project a clear path before construction starts.",
    description:
      "Planning is where a brief becomes a buildable sequence. We look at the site, the drawings and the constraints together, then set a programme that tells every trade what has to happen first.",
    points: [
      "Brief, scope and construction-method reviews",
      "Site constraints, access and logistics",
      "Programmes tied to real trade sequences",
      "Early cost and lead-time conversations",
    ],
    image: "/images/concrete.jpg",
    imageAlt: "Hands reviewing architectural drawings with a scale ruler on the table",
  },
  {
    slug: "building",
    title: "Building",
    icon: "building",
    summary:
      "Coordinated construction of homes, workplaces and mixed-use buildings, managed from the ground up.",
    description:
      "Building is the visible work, and it depends on quiet preparation. We construct residential and commercial structures with the structure, services and finishes planned as one sequence rather than three separate jobs.",
    points: [
      "Residential, commercial and mixed-use structures",
      "Concrete, steel and framed construction",
      "Envelope, roofing and external works",
      "Site supervision that stays close to the drawings",
    ],
    image: "/images/crew.jpg",
    imageAlt: "Construction crew tying steel reinforcement on a high-rise frame",
  },
  {
    slug: "plumbing",
    title: "Plumbing",
    icon: "droplets",
    summary:
      "Distribution, drainage and fixtures planned with the structure so systems stay accessible after handover.",
    description:
      "Plumbing is coordinated with the frame, the floors and the rooms people will actually use. We plan routes, risers and fixtures so maintenance access is designed in, not cut in later.",
    points: [
      "Hot and cold distribution layouts",
      "Drainage, waste and vent coordination",
      "Fixture schedules aligned with room layouts",
      "Access planned for future maintenance",
    ],
    image: "/images/pipes.jpg",
    imageAlt: "Chrome bath filler and hand shower mounted on a white tub",
  },
  {
    slug: "procurement",
    title: "Procurement",
    icon: "package",
    summary:
      "Materials, equipment and trade packages sourced against the specification and the construction sequence.",
    description:
      "Procurement keeps the specification and the site calendar in the same conversation. We organise materials and trade packages around lead times, so the crew is not waiting on a decision that should have been made earlier.",
    points: [
      "Specification reviews before orders are placed",
      "Lead times matched to the programme",
      "Trade-package scope written in plain language",
      "Substitutions checked against performance, not only price",
    ],
    image: "/images/workers.jpg",
    imageAlt: "Workers on a reinforcement deck surrounded by steel and site equipment",
  },
  {
    slug: "renovation",
    title: "Renovation",
    icon: "hammer",
    summary:
      "Updates to existing buildings that respect the structure, the occupants and the life of the street.",
    description:
      "Renovation starts with what is already there. We survey the existing building, separate what should stay from what should change, and sequence the work so occupied or adjoining spaces are treated with care.",
    points: [
      "Surveys of existing structure and services",
      "Phased work for occupied buildings",
      "Interior rebuilds and selective demolition",
      "Finishes coordinated with retained fabric",
    ],
    image: "/images/renovation.jpg",
    imageAlt: "Renovated white kitchen with dark tile backsplash and a large island",
  },
  {
    slug: "civil-engineering",
    title: "Civil Engineering",
    icon: "landmark",
    summary:
      "Groundworks, drainage and site infrastructure that let a building sit properly in its place.",
    description:
      "Civil work is the part of a project most people never see and every building depends on. We coordinate earthworks, drainage and external infrastructure with the structure that will sit on top of them.",
    points: [
      "Site levels, earthworks and foundations",
      "Storm and foul drainage coordination",
      "External works, paving and access",
      "Interfaces with adjoining streets and neighbours",
    ],
    image: "/images/site.jpg",
    imageAlt: "Project team in hard hats reviewing a large foundation and conduit layout",
  },
  {
    slug: "project-management",
    title: "Project Management",
    icon: "clipboard",
    summary:
      "A single line of responsibility for programme, decisions and the information a project needs to move.",
    description:
      "Project management keeps decisions, drawings and the site in step. Clients get a clear record of what was agreed, what is next, and what is waiting on them.",
    points: [
      "Single point of contact for the client team",
      "Decision logs and drawing control",
      "Programme updates tied to site progress",
      "Coordination meetings with a written outcome",
    ],
    image: "/images/workshop.jpg",
    imageAlt: "Team in a bright studio reviewing a wall of planning notes",
  },
];

export const homeServices = [
  "planning",
  "building",
  "plumbing",
  "procurement",
].map((slug) => services.find((service) => service.slug === slug)!);
