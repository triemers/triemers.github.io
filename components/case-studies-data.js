// Single source of truth for case study metadata, used by <related-work>
// to render each case study page's "More Work" section. Thumbnails match
// the canonical images used on the home page's <case-card> entries.
const caseStudies = [
  {
    id: 'askchron',
    title: 'AskChron',
    href: '/pages/askchron.html',
    thumb: '/images/chronicle/ask-chron.png',
    desc: 'AI-powered research assistant trained on more than 130,000 Chronicle news articles and opinion pieces',
  },
  {
    id: 'chronicle-header',
    title: 'Header Redesign',
    href: '/pages/chronicle-header.html',
    thumb: '/images/chronicle/Header card still.png',
    desc: "A context-aware header system designed through stakeholder workshops that serves users' goals on different page types",
  },
  {
    id: 'lost-canyon',
    title: 'Lost Canyon Imports',
    href: '/pages/lostcanyonimports.html',
    thumb: '/images/lostcanyon/LCI card still.png',
    desc: 'A sustainable ecommerce site focused on endangered traditional crafts and the communities that make them',
  },
  {
    id: 'chronicle-design-system',
    title: 'Design System',
    href: '/pages/chronicle-design-system.html',
    thumb: '/images/designsyscard.png',
    desc: 'A year-long CMS redesign that eliminated technical debt and established a scalable design system',
  },
];
