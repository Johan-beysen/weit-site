---
title: "De Tussenruimte: van idee tot live website"
category: "development / case"
year: 2026
date: 2026-10-10
summary: "Hoe een website voor een startende eenmanszaak tot stand kwam: van smaak en voorkeuren tot vanilla HTML/CSS, Decap CMS, GDPR-conforme tracking, wachtwoordhygiëne en een A+ op de Mozilla HTTP Observatory."
---

De Tussenruimte was een bijzonder aangenaam project met zijn eigen specifieke uitdagingen. Het moest een website worden met een zo laag mogelijke operationele kost, gezien het om een opstartende eenmanszaak ging. De korte versie staat bij de [projecten](/projects/de-tussenruimte); hier neem ik je mee door het volledige traject.

## Van voorkeuren naar eerste draft

Om een idee te krijgen van smaak en voorkeuren was de eerste vraag simpel maar doelgericht: bezorg me een paar websites die je leuk vindt en omschrijf in enkele woorden wat je er leuk aan vindt - layout, lettertype, kleurenpalet enzovoort.

Nadat Liesbeth een selectie had gemaakt, planden we een korte meeting in om dit samen te overlopen. Het mag ouderwets klinken, maar tijdens zo'n meeting kun je heel snel heen en weer schakelen, verkregen info omzetten naar kleine suggesties, reacties inschatten en bepalen waar de echte voorkeuren en prioriteiten liggen. En dat was dan ook meteen het resultaat: ik had een helder beeld van de richting die Liesbeth uit wou.

Na wat gesprokkel naar stockfoto's voor de sfeerbeelden - dat presenteert tenslotte veel mooier dan placeholders - stond de eerste draft vrij snel klaar. Ik ben me ervan bewust dat het niet altijd zo zal gaan, maar die eerste draft was meteen raak.

De stockfoto's werden vervangen door professionele foto's, Liesbeth leverde de teksten aan, en ondertussen dook ik in de code, bekeek ik de hostingopties en zette ik de basisroadmap uit.

## De roadmap

### GitHub - eigenaarschap van de code

De code die ik schreef, staat op Liesbeths eigen GitHub-account, waar ik als collaborator ben toegevoegd. Zo is zij eigenaar van de code en heeft ze mijn goedkeuring niet nodig om er zelf aanpassingen aan te doen of te laten doen.

### Netlify - hosting

De website gaat van GitHub naar Netlify. Netlify biedt behoorlijk wat tools binnen de gratis versie, en ook hier gebruiken we een account op naam van Liesbeth, zodat zij op het einde van de rit volledige controle heeft.

### Domeinregistratie

De registrar voor de domeinnaam werd gekozen op basis van deze criteria:

- een lage eerste registratiekost;
- de mogelijkheid om enkel de domeinnaam te nemen, zonder bijkomende diensten;
- een lage verlengingskost.

Na een kort onderzoek kwam **mijn.host** naar voren als een van de betere opties voor de gekozen domeinnaam.

Er werden in dit stadium ongetwijfeld nog andere keuzes gemaakt, maar dit zijn de belangrijkste.

## De tech stack - simpel maar doordacht

Een bewuste keuze die ik graag even toelicht: de volledige site is opgebouwd in **vanilla HTML en CSS**, zonder JavaScript-framework. Voor een statische website van dit formaat is dat de meest performante en onderhoudsvriendelijke keuze. Geen onnodige overhead, geen framework-updates die iets kunnen breken - gewoon snelle, schone code.

Toch zitten er een paar interessante technieken onder de motorkap die het geheel een stuk slimmer maken:

### Data-injectie via JSON

Alle teksten worden dynamisch ingeladen via `data-cms`-attributen in de HTML. Copy aanpassen vraagt daardoor nooit een rechtstreekse aanpassing in de HTML - een scheiding die enorm handig is wanneer een CMS de content beheert.

### Statische blogpagina's

Een Node.js-buildscript leest Markdown-bestanden in en genereert automatisch een HTML-pagina per blogartikel, inclusief een JSON-index voor de blogoverzichtspagina. Statisch, snel en zonder nood aan een server.

### Testimonial-carrousel

Volledig in vanilla JavaScript, met bolletjes als indicator, vorige/volgende-knoppen en circulaire navigatie - en filterbaar per type dienst.

### Sticky navigatie

Transparant bovenaan de pagina, solide bij het scrollen. Een subtiel detail dat veel bijdraagt aan de look-and-feel.

Voor het design viel de keuze op **Cormorant Garamond** - een elegant schreeflettertype - voor de titels, gecombineerd met **Jost**, een moderne sans-serif, voor de lopende tekst. Het kleurenpalet in warme aardetinten (crème, zand, salie, steen) versterkt het gevoel van rust en warmte dat bij het merk van Liesbeth past.

Zelf gehoste fonts in WOFF2-formaat houden de laadtijden scherp, en afbeeldingen worden geserveerd in WebP met een JPG-fallback en waar zinvol pas geladen wanneer ze in beeld komen (lazy loading).

## Blog en contentbeheer

Vanuit mijn kant kwam de suggestie om met blogteksten te werken. Regelmatig een artikel posten over je vakgebied toont zowel zoekmachines als bezoekers wie je bent, wat je kunt en hoe je denkt. Goed gebruikt heeft dat een positieve invloed op je vindbaarheid én op je geloofwaardigheid bij potentiële klanten.

Om de blog zelfstandig beheersbaar te maken, koos ik voor **Decap CMS** (voorheen Netlify CMS). Maar ik heb het niet beperkt tot de blogartikels. Ik heb het zo opgezet dat Liesbeth de **volledige inhoud van haar site** zelf kan beheren, zonder op mij beroep te moeten doen: teksten, diensten, testimonials, blogposts, afbeeldingen - alles, en zonder diepgaande technische kennis. Alles git-backed, alles via een gebruiksvriendelijke interface, alles in haar eigen handen.

## Calendly en de contact-flow

Liesbeth kende Calendly al als mogelijke tool voor "boek een afspraak", dus die werd mee geïntegreerd in de site. Uiteindelijk werd Calendly er toch weer uitgehaald en kozen we om enkel met "stuur een bericht" te werken.

De contactpagina werkt via **Netlify Forms**, met honeypot-bescherming tegen spam, een optionele inschrijving op de nieuwsbrief en een privacyvriendelijke inrichting.

## GDPR en cookie consent

De integratie van Google Tag Manager vroeg om een correcte aanpak op vlak van privacy. De keuze viel op **Klaro**, een open source consent manager. Klaro houdt de Google Ads-tracking en analytics tegen tot de bezoeker daar uitdrukkelijk toestemming voor geeft, volledig conform de GDPR. Geen tracking zonder toestemming - zo simpel is het.

## Een onverwachte zijlijn: wachtwoordhygiëne

Tijdens dit project zijn er hier en daar wat inloggegevens heen en weer gestuurd. Niet alleen de opbouw van die wachtwoorden, maar ook de manier waarop ze werden uitgewisseld, verklapten een en ander over de wachtwoordhygiëne. Als ethisch hacker kon ik het niet laten om Liesbeth daarop te wijzen, en ik heb haar meteen het belang getoond van:

- wachtwoorden **nooit** hergebruiken;
- geen wachtwoorden zelf verzinnen, maar de **wachtwoordgenerator** van een wachtwoordbeheerder gebruiken;
- het gebruik van een **wachtwoordbeheerder** zelf.

Persoonlijk gebruik ik Proton Pass, al zit een overstap naar **1Password** er zeker aan te komen, omwille van de uitgebreide mogelijkheden rond het beheer van API-sleutels en het rechtstreeks verwijzen naar opgeslagen sleutels vanuit je code.

Tegen het einde van het project had Liesbeth een volledig gevulde wachtwoordbeheerder, met alle inloggegevens voorzien van een label zodat ze makkelijk terug te vinden zijn, en was ze vertrouwd met het gebruik ervan.

Precies dit soort snelle winst - een wachtwoordbeheerder, tweestapsverificatie, back-ups nakijken - staat bovenaan het plan van de [cyberweerbaarheid nulmeting](/nulmeting).

## Security - een A+ waar niemand om vroeg

De website is nu online en levert de gewenste resultaten. Maar ik wil nog even stilstaan bij iets wat niet gevraagd werd, maar wat ik toch niet kon laten.

Zowel de **CSP (Content Security Policy)** als de andere security headers hadden aanvankelijk een uitstekende score. Om Google Tag Manager te laten werken, moest ik helaas een tikkeltje minder strikt zijn - maar de site haalt op de [HTTP Observatory van Mozilla](https://developer.mozilla.org/en-US/observatory) nog steeds een **A+ met een score van 115/100**.

<figure>
  <img src="/blog/de-tussenruimte/observatory-score.webp" alt="Mozilla HTTP Observatory-rapport voor de-tussenruimte.be: graad A+, score 115/100, 11 van 12 tests geslaagd" width="1285" height="740" loading="lazy" />
  <figcaption>Mozilla HTTP Observatory, scan van 10 oktober 2026.</figcaption>
</figure>

Hoe uitzonderlijk dat is, toont de benchmark van de Observatory zelf: van alle sites die het voorbije jaar gescand werden, haalt maar een heel klein deel een A+. Het overgrote deel blijft steken op een D of F.

<figure>
  <img src="/blog/de-tussenruimte/observatory-benchmark.webp" alt="Staafdiagram van de Mozilla HTTP Observatory met het aantal gescande websites per graad over het voorbije jaar: een smalle balk bij A+, de hoogste balken bij D, D- en F" width="1282" height="465" loading="lazy" />
  <figcaption>Verdeling van de graden van alle gescande websites over het voorbije jaar.</figcaption>
</figure>

Liesbeth had daar niet om gevraagd; dat is een kwestie van persoonlijke trots. Als ethisch hacker kan ik niet anders dan een goed beveiligd product afleveren. Wil je weten hoe jouw eigen website of applicatie ervoor staat? Dat is precies wat ik doe bij [security](/security).

## Conclusie

Zoals gezegd was het een bijzonder aangenaam project en een heel goede oefening in hoe je het idee van een klant omzet in een werkend eindproduct. Van een eerste gesprek over smaak en voorkeuren, over technische keuzes, de CMS-setup en wachtwoordhygiëne, tot een live website die haar diensten - life coaching, loopbaancoaching, ondernemerscoaching en retraites - helder en warm in de markt zet. Het volledige traject.

Zelf een website of tool nodig die je achteraf volledig in eigen handen hebt? Lees meer over [development](/development) of [neem contact op](/contact).

[**De Tussenruimte**](https://de-tussenruimte.be) - voor leven, loopbaan en ondernemen, in Antwerpen en online.
