// Single source of truth for case study metadata, used by <related-work>
// to render each case study page's "More Work" section. Thumbnails match
// the canonical images used on the home page's <case-card> entries.
const caseStudies = [
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
  {
    id: 'amazon-nike',
    title: 'Amazon v. Nike',
    href: 'https://uxdesign.cc/amazon-and-nike-com-through-the-lense-of-a-keyboard-584872b3fda9',
    target: '_blank',
    thumb: '/images/nike lead.png',
    desc: 'Keyboard & screenreader accessibility study of nike.com and amazon.com (opens in new tab)',
  },
];
