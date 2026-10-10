// Structured data (schema.org JSON-LD) voor zoekmachines.
// organizationGraph() komt via Base.astro op elke pagina; pagina's kunnen
// extra nodes meegeven via de `schema` prop (zie bv. nulmeting.astro).
// Gegevens volgen de juridische teksten (src/content/legal) - pas ze daar
// en hier samen aan.

export const SITE = 'https://weit.be';
export const ORG_ID = `${SITE}/#organization`;
export const WEBSITE_ID = `${SITE}/#website`;
export const FOUNDER_ID = `${SITE}/#founder`;

export const TELEFOON = '+32484560364';
export const TELEFOON_LEESBAAR = '+32 484 56 03 64';

const provincieId = (slug: string) => `${SITE}/#provincie-${slug}`;

const provincies = [
  { slug: 'antwerpen', name: 'Provincie Antwerpen' },
  { slug: 'vlaams-brabant', name: 'Provincie Vlaams-Brabant' },
  { slug: 'limburg', name: 'Provincie Limburg' },
];

// Mortsel en omgeving eerst, daarna de rest van de drie provincies.
// Gemeentenamen volgen de fusies van 1 januari 2025 (bv. Borsbeek is
// nu een district van Antwerpen, Tongeren-Borgloon, Tessenderlo-Ham).
const gemeenten: Record<string, string[]> = {
  antwerpen: [
    'Mortsel', 'Edegem', 'Hove', 'Boechout', 'Kontich', 'Lint', 'Aartselaar',
    'Antwerpen', 'Wommelgem', 'Ranst', 'Lier', 'Duffel', 'Rumst', 'Schelle',
    'Niel', 'Hemiksem', 'Boom', 'Wijnegem', 'Schoten', 'Zandhoven', 'Nijlen',
    'Mechelen', 'Sint-Katelijne-Waver', 'Bonheiden', 'Willebroek', 'Puurs-Sint-Amands',
    'Brasschaat', 'Kapellen', 'Stabroek', 'Schilde', 'Zoersel', 'Malle', 'Brecht',
    'Heist-op-den-Berg', 'Herentals', 'Grobbendonk', 'Turnhout', 'Geel', 'Mol',
  ],
  'vlaams-brabant': [
    'Leuven', 'Vilvoorde', 'Zaventem', 'Machelen',
    'Grimbergen', 'Kampenhout', 'Haacht', 'Keerbergen', 'Tremelo', 'Aarschot',
    'Diest', 'Tienen', 'Herent', 'Kortenberg', 'Halle', 'Asse',
  ],
  limburg: [
    'Hasselt', 'Genk', 'Beringen', 'Heusden-Zolder', 'Lommel', 'Tessenderlo-Ham',
    'Sint-Truiden', 'Tongeren-Borgloon', 'Bilzen-Hoeselt', 'Maasmechelen',
    'Houthalen-Helchteren', 'Diepenbeek', 'Lanaken', 'Leopoldsburg', 'Peer',
  ],
};

// Antwerpse districten - expliciet vermeld omdat er lokaal op gezocht wordt.
const districten = [
  'Berchem', 'Wilrijk', 'Hoboken', 'Deurne', 'Borgerhout', 'Merksem',
  'Ekeren', 'Borsbeek', 'Berendrecht-Zandvliet-Lillo',
];

const diensten = [
  {
    path: '/nulmeting',
    name: 'Cyberweerbaarheid nulmeting',
    description: 'Eén dag on-site en een implementatieplan in gewone taal op basis van de CyberFundamentals (CyFun®) van het Centrum voor Cybersecurity België.',
  },
  {
    path: '/security',
    name: 'Security, pentesting en NIS2/CyFun®-begeleiding',
    description: 'Web application en API pentesting, network pentesting, security audits, hardening en praktische NIS2/CyFun®-begeleiding voor kmo\'s.',
  },
  {
    path: '/infrastructure',
    name: 'Infrastructuur en Microsoft 365',
    description: 'Servers, netwerken, cloud en Microsoft 365 - stevig ingericht en overzichtelijk beheerd.',
  },
  {
    path: '/development',
    name: 'Development',
    description: 'Webapplicaties, tools en integraties op maat.',
  },
  {
    path: '/automation',
    name: 'Automatisering',
    description: 'Workflows, scripts en koppelingen die repetitief werk overnemen.',
  },
  {
    path: '/ai-integratie',
    name: 'AI-integratie',
    description: 'Agentic automatisering en AI-ondersteunde security tooling.',
  },
  {
    path: '/consulting',
    name: 'IT-consulting',
    description: 'Procesanalyse, technische roadmap, vendor- en toolselectie en second opinions.',
  },
];

export function organizationGraph() {
  const areaServed = [
    { '@type': 'Country', name: 'België' },
    { '@type': 'AdministrativeArea', name: 'Vlaanderen' },
    ...provincies.map(p => ({ '@type': 'AdministrativeArea', '@id': provincieId(p.slug), name: p.name })),
    ...Object.entries(gemeenten).flatMap(([slug, namen]) =>
      namen.map(name => ({
        '@type': 'City',
        name,
        containedInPlace: { '@id': provincieId(slug) },
      }))
    ),
    ...districten.map(name => ({
      '@type': 'Place',
      name: `${name} (Antwerpen)`,
      containedInPlace: { '@type': 'City', name: 'Antwerpen' },
    })),
  ];

  return [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': ORG_ID,
      name: 'WeIT',
      alternateName: 'WeIT.be',
      url: `${SITE}/`,
      logo: `${SITE}/og-image.png`,
      image: `${SITE}/og-image.png`,
      slogan: 'Sterke systemen. Slimmer werken.',
      description: 'WeIT helpt kmo\'s, zelfstandigen en organisaties met cybersecurity, IT-infrastructuur, maatwerksoftware, automatisering en AI-integratie - pragmatisch, transparant en zonder vendor lock-in.',
      email: 'contact@weit.be',
      telephone: TELEFOON,
      vatID: 'BE0669642666',
      taxID: '0669.642.666',
      identifier: {
        '@type': 'PropertyValue',
        propertyID: 'KBO-ondernemingsnummer',
        value: '0669.642.666',
      },
      founder: { '@id': FOUNDER_ID },
      sameAs: [
        'https://www.linkedin.com/company/weit-be',
        'https://www.facebook.com/profile.php?id=61561651043515',
      ],
      address: {
        '@type': 'PostalAddress',
        postalCode: '2640',
        addressLocality: 'Mortsel',
        addressRegion: 'Antwerpen',
        addressCountry: 'BE',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'contact@weit.be',
        telephone: TELEFOON,
        url: `${SITE}/contact`,
        availableLanguage: ['nl', 'en'],
        areaServed: 'BE',
      },
      areaServed,
      knowsLanguage: ['nl', 'en'],
      knowsAbout: [
        'Cybersecurity', 'Penetratietesten', 'Ethical hacking', 'Web application security',
        'API security', 'OWASP Top 10', 'Network security', 'Security audits', 'Risicoanalyse',
        'NIS2', 'CyberFundamentals (CyFun)', 'GDPR', 'Hardening', 'Microsoft 365',
        'Netwerkbeheer', 'Systeembeheer', 'Cloud', 'Back-ups', 'Tweestapsverificatie',
        'Webontwikkeling', 'Procesautomatisering', 'AI-integratie', 'IT-consulting',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Diensten van WeIT',
        itemListElement: diensten.map(d => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            '@id': `${SITE}${d.path}#service`,
            name: d.name,
            description: d.description,
            url: `${SITE}${d.path}`,
            provider: { '@id': ORG_ID },
          },
        })),
      },
    },
    {
      '@type': 'Person',
      '@id': FOUNDER_ID,
      name: 'Johan Beysen',
      jobTitle: 'Oprichter, ethisch hacker en IT-consultant',
      worksFor: { '@id': ORG_ID },
      url: `${SITE}/aanpak`,
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: `${SITE}/`,
      name: 'WeIT.be',
      inLanguage: ['nl-BE', 'en'],
      publisher: { '@id': ORG_ID },
    },
  ];
}

export function jsonLd(extra: object[] = []) {
  // `<` escapen zodat inhoud nooit een </script> kan vormen
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [...organizationGraph(), ...extra],
  }).replace(/</g, '\\u003c');
}
