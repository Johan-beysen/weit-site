export const locales = ['nl', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'nl';

// Paginanamen die geen 1-op-1 Engels woord zijn, krijgen een eigen Engelse
// routenaam. Alle andere routes (security, contact, blog, projects, ...) zijn
// al identiek in beide talen.
const slugMap: Record<string, string> = {
  aanpak: 'approach',
  'ai-integratie': 'ai-integration',
};
const reverseSlugMap: Record<string, string> = Object.fromEntries(
  Object.entries(slugMap).map(([nl, en]) => [en, nl])
);

export const ui = {
  nl: {
    'nav.diensten': 'diensten',
    'nav.projects': 'projects',
    'nav.blog': 'blog',
    'nav.aanpak': 'aanpak',
    'nav.contact': 'contact',
    'nav.security.title': '[Security]',
    'nav.security.desc': 'Kwetsbaarheden opsporen vóór anderen ze misbruiken. Pentesting, security audits en NIS2/CyFun®-begeleiding.',
    'nav.infrastructure.title': '[Infrastructure]',
    'nav.infrastructure.desc': 'Servers, netwerken, cloud en Microsoft 365 - stevig ingericht en overzichtelijk beheerd.',
    'nav.development.title': '[Development]',
    'nav.development.desc': 'Webapplicaties, tools en integraties. Clean code, geen overbodige complexiteit.',
    'nav.automation.title': '[Automation]',
    'nav.automation.desc': 'Repetitief werk uit handen nemen. Workflows, scripts en slimme koppelingen.',
    'nav.ai.title': '[AI-integratie]',
    'nav.ai.desc': 'Workflows die zelfstandig taken uitvoeren - van agentic automatisering tot AI-ondersteunde security tooling.',
    'nav.consulting.title': '[Consulting]',
    'nav.consulting.desc': 'Meedenken over digitale vraagstukken. Van procesanalyse tot technische roadmap.',
    'footer.tagline': 'cybersecurity · infrastructuur · maatwerk · automatisering',
    'herocode.focus': 'resultaat',
    'herocode.aanpak.key': 'aanpak',
    'herocode.aanpak.value': 'pragmatisch',
    'herocode.transparantie.key': 'transparantie',
  },
  en: {
    'nav.diensten': 'services',
    'nav.projects': 'projects',
    'nav.blog': 'blog',
    'nav.aanpak': 'approach',
    'nav.contact': 'contact',
    'nav.security.title': '[Security]',
    'nav.security.desc': 'Finding vulnerabilities before attackers do. Pentesting, security audits and NIS2/CyFun® guidance.',
    'nav.infrastructure.title': '[Infrastructure]',
    'nav.infrastructure.desc': 'Servers, networks, cloud and Microsoft 365 - solidly set up and clearly managed.',
    'nav.development.title': '[Development]',
    'nav.development.desc': 'Web applications, tools and integrations. Clean code, no unnecessary complexity.',
    'nav.automation.title': '[Automation]',
    'nav.automation.desc': 'Taking repetitive work off your hands. Workflows, scripts and smart integrations.',
    'nav.ai.title': '[AI Integration]',
    'nav.ai.desc': 'Workflows that carry out tasks independently - from agentic automation to AI-assisted security tooling.',
    'nav.consulting.title': '[Consulting]',
    'nav.consulting.desc': 'Thinking along on digital questions. From process analysis to technical roadmap.',
    'footer.tagline': 'cybersecurity · infrastructure · custom software · automation',
    'herocode.focus': 'results',
    'herocode.aanpak.key': 'approach',
    'herocode.aanpak.value': 'pragmatic',
    'herocode.transparantie.key': 'transparency',
  },
} as const;

export type UiKey = keyof (typeof ui)['nl'];

export function useTranslations(locale: string | undefined) {
  const lang: Locale = locale === 'en' ? 'en' : 'nl';
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui.nl[key];
  };
}

/**
 * Geeft het equivalente pad in de doeltaal terug, voor de taalschakelaar en
 * hreflang-tags. Blog/project-detailslugs zijn identiek tussen talen; enkel
 * de twee routes in slugMap krijgen een andere naam per taal.
 */
export function getLocalizedPathname(pathname: string, targetLocale: Locale): string {
  const isEn = pathname === '/en' || pathname.startsWith('/en/');
  const nlSegments = (isEn ? pathname.replace(/^\/en/, '') || '/' : pathname)
    .split('/')
    .filter(Boolean);

  // Normaliseer naar de nl-vorm van het eerste segment (indien het een van
  // de hernoemde en-routes betreft).
  if (isEn && nlSegments.length > 0 && reverseSlugMap[nlSegments[0]]) {
    nlSegments[0] = reverseSlugMap[nlSegments[0]];
  }

  if (targetLocale === 'nl') {
    return nlSegments.length > 0 ? '/' + nlSegments.join('/') : '/';
  }

  const enSegments = nlSegments.map((seg, i) => (i === 0 && slugMap[seg] ? slugMap[seg] : seg));
  return enSegments.length > 0 ? '/en/' + enSegments.join('/') : '/en';
}
