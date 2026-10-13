---
title: "Kan ik je wachtwoord raden?"
category: "security / wachtwoorden"
year: 2026
date: 2026-10-13
summary: "Hoe een onschuldig babbeltje en wat zoekwerk volstaan om je wachtwoord te raden, en vijf regels om dat te voorkomen: uniek, willekeurig, een wachtwoordmanager, MFA en niets op papier of in een Word-bestand."
---

## Een onschuldig babbeltje

Stel: we ontmoeten elkaar ergens en raken aan de praat. Niets bijzonders, gewoon wat losse small talk. Voor je het weet heb ik een volledige inventaris van mogelijke bouwstenen voor je wachtwoord.

Ik zeg maar wat: je woonplaats en postcode, waar je geboren bent, de namen van je kinderen en je huisdieren, je favoriete voetbalploeg, je lievelingsgerecht. En zo kan ik nog even doorgaan.

Daarna nog een paar zoekopdrachten online. Met een beetje geluk heb je zelf een paar sterke kandidaten op je sociale media gezet: je geboortedatum, je trouwdag, de verjaardag van je oudste.

Vervolgens maak ik een lijstje:

- initialen van 2, 3 of 4 letters, afgeleid uit de namen die ik vond;
- cijferreeksen erachter, van 123 en 1234 tot 12345;
- combinaties van de datums hierboven (1985, 0412, 04121985 ...);
- hoofdletters op de voor de hand liggende plaatsen, wat leestekens ertussen, en zeker een '!' op het einde.

Die elementen gooi ik in een programma dat er automatisch alle combinaties van maakt. Resultaat: een lijst van duizenden, misschien honderdduizenden wachtwoorden, die een computer in een mum van tijd afloopt. Zo wordt in de praktijk trouwens een goede wordlist voor een brute-force-aanval\* opgemaakt.

Hoe groot is de kans dat jouw wachtwoord ertussen staat?

*\* Een wordlist is een lijst met mogelijke wachtwoorden die een script of programma één voor één uitprobeert. Op een loginpagina gaat dat aan tientallen tot honderden pogingen per seconde, tenminste als de site geen blokkering of vertraging inbouwt. Heeft een aanvaller een gelekte databank met versleutelde (gehashte) wachtwoorden in handen, dan test hij offline: een gewone gamingcomputer met een goede grafische kaart haalt dan, bij zwak beveiligde wachtwoorden, miljarden pogingen per seconde.*

## Ook ik dacht dat ik goed bezig was

Eerlijk is eerlijk: wij mensen zijn heel slecht in het verzinnen van wachtwoorden. Zeker als we ze dan ook nog om de zoveel tijd moeten veranderen, want dan wordt Zomer2024! gewoon Herfst2024!.

Vroeger, voor ik met cybersecurity in aanraking kwam, had ik standaard drie wachtwoorden:

1. eentje voor sociale media, mail en alles wat niet zo belangrijk leek;
2. eentje voor de ietwat gevoeligere zaken;
3. eentje voor bankzaken en dergelijke.

Ik was er echt van overtuigd dat ik goed bezig was. Met dat systeem had ik toch een prima wachtwoordhygiëne?

Tot ik die wachtwoorden opzocht in gelekte databanken. Ja hoor: alle drie gelekt. Zelfs dat laatste.

Eén hacker die de moeite nam om ze uit te proberen, meer was er niet nodig geweest om aan zelfs mijn meest gevoelige gegevens te komen.

Herken je jezelf hierin? Lees dan zeker verder, want nu komt hoe het wél moet.

## Vijf regels voor betere wachtwoorden

### Regel 1: hergebruik nooit een wachtwoord

Wachtwoorden lekken bij de vleet, ook bij grote, bekende bedrijven. Gebruik je overal een ander wachtwoord, dan is bij een lek enkel die ene account getroffen. Al de rest blijft veilig.

### Regel 2: verzin je wachtwoorden niet zelf

Wij mensen zijn nu eenmaal niet goed in willekeur. De kans dat een zelfverzonnen wachtwoord op de een of andere manier voorspelbaar is, is waanzinnig groot. Laat een tool echt willekeurige wachtwoorden genereren, bij voorkeur van minstens 16 tekens.

Er is één uitzondering: het hoofdwachtwoord van je wachtwoordmanager (zie regel 3). Dat moet je wél zelf onthouden. Kies daarvoor een lange wachtwoordzin van vier of vijf willekeurige, losse woorden, bijvoorbeeld paraplu-kachel-zebra-mosterd-trein. Geen zin uit een liedje, geen namen, geen datums.

### Regel 3: gebruik een wachtwoordmanager

Probeer al die wachtwoorden niet zelf te onthouden, maar bewaar ze in een wachtwoordmanager. Je hoeft dan nog maar één sterk wachtwoord te kennen.

- **Minder digitaal aangelegd?** Gebruik dan de wachtwoordmanager die in je browser zit, bijvoorbeeld die van Chrome, Edge, Firefox of Safari. Dat is al een enorme stap vooruit.\*\*
- **Digitaal vertrouwd genoeg?** Kies een aparte wachtwoordmanager, zoals Bitwarden, 1Password of KeePassXC. Die werkt over al je toestellen en browsers heen.

*\*\* Ja, wachtwoorden die in je browser zijn opgeslagen, zijn te achterhalen door wie al toegang heeft tot je computer. Maar ze blijven duizend keer veiliger dan hergebruikte, zelfverzonnen wachtwoorden die je makkelijk kunt onthouden.*

Laat je wachtwoordmanager ook meteen nieuwe wachtwoorden voorstellen. Zo volg je regel 2 zonder er nog over na te denken. Een bijkomend voordeel: een wachtwoordmanager vult je wachtwoord niet in op een valse phishingsite die er net iets anders uitziet dan de echte.

### Regel 4: zet MFA/2FA aan waar het kan

Met tweestapsverificatie (MFA of 2FA) heeft een hacker aan je wachtwoord alleen niet genoeg: hij heeft ook een code of bevestiging op je telefoon nodig. Zet het aan op je belangrijkste accounts, en zeker op je mailbox.

Waarom je mailbox? Je mailadres wordt gebruikt om wachtwoorden te resetten. Wie toegang heeft tot je mailbox, heeft dus toegang tot al je accounts.

Kies waar mogelijk voor een authenticator-app (zoals Microsoft Authenticator, Google Authenticator of je wachtwoordmanager) of een passkey in plaats van een code via sms. En bewaar de herstelcodes die je bij het instellen krijgt.

### Regel 5: bewaar je wachtwoorden nergens anders

Zet je wachtwoorden niet in een Word-document, een Excel-bestand of een notitie op je gsm. Wil je toch iets apart bewaren, zoals je hoofdwachtwoord of je herstelcodes, doe het dan niet digitaal: schrijf of print het en bewaar het op een veilige plek thuis. De kans dat een hacker eerst bij jou thuis binnenkomt, is veel kleiner dan dat hij toegang krijgt tot je computer.

## Begin vandaag nog

Je hoeft niet alles in één avond om te gooien. Begin met wat het zwaarst doorweegt:

- Check op [haveibeenpwned.com](https://haveibeenpwned.com) of je mailadres in een gekend datalek zit.
- Installeer een wachtwoordmanager of activeer die van je browser.
- Geef je mailbox een nieuw, uniek wachtwoord en zet MFA aan.
- Doe daarna hetzelfde voor je bank, je sociale media en je webshops.
- Vervang de rest telkens wanneer je ergens inlogt.

In een volgende blog leg ik uit hoe zo'n wachtwoordmanager precies werkt, en waarom hij je leven eigenlijk makkelijker maakt in plaats van moeilijker.

**Heb je zelf een onderneming?** Bedenk dan dat elk van je medewerkers dit verhaal ook kan zijn. Eén hergebruikt wachtwoord, één lek bij een webshop, en een aanvaller staat in je mailbox of in je netwerk. Wil je weten hoe jouw bedrijf ervoor staat? [Vraag je Cyberveiligheidsplan aan.](https://weit.be/nulmeting/)
