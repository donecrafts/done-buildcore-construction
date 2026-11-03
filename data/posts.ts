export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "read-the-site-before-you-build",
    title: "Read the site before you build",
    excerpt:
      "The drawing is not the site. A useful construction start begins with access, levels, neighbours and what is already in the ground.",
    category: "Planning",
    date: "2026-03-12",
    readTime: "5 min",
    image: "/images/site.jpg",
    imageAlt: "Team standing over a foundation deck on an active site",
    content: [
      "A programme that looks tidy in a meeting can fall apart on the first morning if nobody has stood on the site. Access for concrete trucks, the width of the street, the neighbour’s wall and the level of the existing ground all change the sequence.",
      "Before mobilisation, walk the boundary with the drawings in hand. Mark where materials can actually sit, where water will run, and which existing services are guesses until they are opened up.",
      "This is not caution for its own sake. It is how you avoid telling a client that week three is really week six because the hoist has nowhere to stand.",
      "Done BuildCore Construction treats that first reading of the site as part of planning, not as a delay to planning. The programme should be written after the visit, not before it.",
    ],
  },
  {
    slug: "sequence-is-a-design-decision",
    title: "Sequence is a design decision",
    excerpt:
      "The order of trades is part of the building. Decide it early and the drawings stay believable on site.",
    category: "Project management",
    date: "2026-02-02",
    readTime: "6 min",
    image: "/images/workshop.jpg",
    imageAlt: "People gathered around a planning wall in a bright studio",
    content: [
      "Clients often meet design as a set of drawings and construction as a separate, later problem. On a real project the order of work changes the design. A ceiling that hides ductwork only works if the ductwork has a path, and that path has to be agreed before the ceiling grid is frozen.",
      "A useful programme names the decisions, not only the activities. Pouring a slab is an activity. Agreeing which conduits are in that slab is a decision, and it has a date.",
      "When the decision is late, the site invents an answer. Those invented answers are where leaks, clashes and expensive openings come from.",
      "We write programmes so a client can see the next decision they owe the project. Construction moves more calmly when the sequence is visible to everyone who can stop it.",
    ],
  },
  {
    slug: "renovating-while-people-stay",
    title: "Renovating while people stay",
    excerpt:
      "Occupied renovation is a different kind of construction. Protection, noise and a daily route through the building matter as much as the new room.",
    category: "Renovation",
    date: "2026-01-16",
    readTime: "5 min",
    image: "/images/interior.jpg",
    imageAlt: "Finished living room with new glazing toward a deck",
    content: [
      "A renovation drawing shows the finished room. It rarely shows the three weeks when that room is a route for materials and the kitchen people still need is two doors away.",
      "Occupied work needs a protection plan, a noise plan and a way in that does not change every morning. Dust does not respect a doorway. Agree the sealed line before demolition, not after the first complaint.",
      "Services are the other surprise. Moving a sink is also moving a drain, and the drain may run through a room that was supposed to stay finished.",
      "The projects that feel simple at the end are the ones that were phased with the people who live or work there, not only with the new joinery.",
    ],
  },
  {
    slug: "procurement-without-the-surprise",
    title: "Procurement without the surprise",
    excerpt:
      "Order dates belong on the programme. A specification that cannot be bought in time is not yet a specification.",
    category: "Procurement",
    date: "2025-11-20",
    readTime: "4 min",
    image: "/images/workers.jpg",
    imageAlt: "Workers and bundled reinforcement on a concrete deck",
    content: [
      "Procurement is often treated as shopping. On a building it is scheduling. A facade panel, a switchboard or a stone top has a lead time, and that lead time has to sit on the same programme as the trade who will install it.",
      "Start with the items that can stop the job: structure, envelope, long-lead services and anything that is made to a measured opening. Commodity materials can follow.",
      "When a product is unavailable, the question is not only what looks similar. It is whether the substitute matches the performance the drawing assumed: fire, water, structure, maintenance.",
      "A clear procurement list lets a client say yes or no early. Late substitutions are how budgets and elevations drift at the same time.",
    ],
  },
  {
    slug: "envelopes-that-earn-their-keep",
    title: "Envelopes that earn their keep",
    excerpt:
      "Daylight, shade and a reliable skin are construction decisions. They are cheaper to draw than to repair.",
    category: "Building",
    date: "2025-10-08",
    readTime: "5 min",
    image: "/images/sustainable.jpg",
    imageAlt: "Curving glass and metal facade of a contemporary building",
    content: [
      "A building envelope does several jobs at once. It keeps water out, controls heat, carries wind, and decides how the rooms feel at three o’clock in the afternoon.",
      "Sustainable practice, in construction terms, is mostly this: choose a skin and a structure that reduce the work the mechanical systems have to do later. Overhangs, insulation continuity and honest window sizes matter more than a slogan on the hoarding.",
      "The details that fail are usually the joints. Where the wall meets the window, the roof and the ground, the drawing has to be buildable by the person who will be there in the rain.",
      "We would rather spend time on those joints in planning than explain them as defects at handover.",
    ],
  },
  {
    slug: "what-a-client-should-see",
    title: "What a client should see each month",
    excerpt:
      "Progress is not a percentage. It is what was decided, what was built, and what is in the way.",
    category: "Project management",
    date: "2025-09-03",
    readTime: "4 min",
    image: "/images/concrete.jpg",
    imageAlt: "Architectural drawings spread on a wooden table",
    content: [
      "A monthly report that says a project is 40 percent complete rarely helps anyone make a decision. Clients need to know which packages are installed, which drawings are current, and which choices are still open.",
      "A simple record works. This month’s completed work. Next month’s work. Decisions needed, with a date. Risks that have changed since last time.",
      "Photographs help when they are tied to a location and a package, not when they are a gallery of hard hats. The point is to let someone who was not on site understand the building.",
      "Done BuildCore Construction uses that kind of record on my projects: scope, sequence and what the work actually is. The same habit is what keeps a live project understandable.",
    ],
  },
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function formatPostDate(iso: string) {
  const [year, month, day] = iso.split("-");
  return `${Number(day)} ${months[Number(month) - 1]} ${year}`;
}

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string) {
  const current = getPost(slug);
  if (!current) return [];
  const same = posts.filter((post) => post.slug !== slug && post.category === current.category);
  const others = posts.filter((post) => post.slug !== slug && post.category !== current.category);
  return [...same, ...others].slice(0, 2);
}
