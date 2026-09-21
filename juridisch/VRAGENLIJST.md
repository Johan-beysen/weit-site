# Vragenlijst voor privacyverklaring en algemene voorwaarden

Doel: op basis van je antwoorden worden later twee afzonderlijke teksten opgesteld:

1. `privacyverklaring.md` (met een cookiegedeelte als alleen noodzakelijke cookies worden gebruikt, of met een verwijzing naar een apart cookiebeleid indien nodig);
2. `algemene-voorwaarden.md` voor de diensten van WeIT.be.

De technische implementatie valt buiten deze opdracht. De teksten worden afgestemd op Belgisch recht en de AVG/GDPR, maar blijven een juridisch werkdocument. Laat vooral de algemene voorwaarden vóór ingebruikname controleren door een Belgische jurist of advocaat.

## Hoe invullen

- Zet je antwoord telkens onder **Antwoord**.
- `n.v.t.` is een geldig antwoord.
- Als je iets nog niet weet, schrijf `nog te bepalen`; dan kan ik een voorstel doen of een duidelijke placeholder gebruiken.
- Vragen met **Vereist** zijn nodig voor een verantwoorde eerste versie.
- Corrigeer ook de technische vaststellingen hieronder als de productieomgeving anders werkt dan de huidige broncode.

## Wat ik al in de website aantrof — te bevestigen

- Publieke website: `https://weit.be`, met Nederlandse en Engelse pagina's.
- Hosting/runtime: Cloudflare Workers/Assets; Cloudflare-observability staat in de configuratie aan.
- Contactformulier: naam, e-mailadres, optionele bedrijfsnaam en vrij bericht worden naar Web3Forms gestuurd.
- Klantenportaal: Supabase voor authenticatie, database en bestandsopslag.
- In het portaal staan onder andere contactgegevens, projecten, taken, opmerkingen, urenregistraties, kredietsaldo/-vervaldatum en uploads.
- Er worden noodzakelijke authenticatiecookies voor het portaal gebruikt.
- Ik vond momenteel geen Google Analytics, advertentiepixels, nieuwsbrief, sociale embeds, externe agenda of extern geladen webfonts.

## A. Reikwijdte en onderneming

### 1. Identiteit van de contracterende onderneming — **Vereist**

Geef de volledige officiële gegevens:

- juridische naam en handelsnaam;
- rechtsvorm (eenmanszaak, BV, ...);
- naam van de natuurlijke persoon indien eenmanszaak;
- ondernemingsnummer en btw-nummer;
- maatschappelijke zetel/vestigingsadres;
- professioneel e-mailadres en telefoonnummer;
- eventueel apart postadres.

**Antwoord:**
WeIT
Eenmanszaak
Johan Beysen
Ondernemingsnr in aanvraag
Windhoek 26,2640 Mortsel
contact@weit.be - +32 484 56 03 64

### 2. Privacycontact — **Vereist**

Welk e-mailadres mogen betrokkenen gebruiken voor inzage, correctie, verwijdering of andere privacyvragen? Is er een functionaris voor gegevensbescherming (DPO), of niet?

**Antwoord:**
contact@weit.be -- Johan Beysen

### 3. Diensten en klanten — **Vereist**

Bevestig welke diensten door de voorwaarden moeten worden gedekt. De site noemt momenteel:

- pentests, security-audits en securitybegeleiding;
- infrastructuur, cloud, Microsoft 365 en databankbeheer;
- software/webontwikkeling en integraties;
- automatisering;
- AI-integraties;
- technisch advies/consulting;
- ondersteuning via vooraf aangekochte uren of kredieten.

Wat ontbreekt, en wat moet expliciet buiten de voorwaarden vallen?

**Antwoord:**
is volledig

### 4. B2B, B2C of beide — **Vereist**

Werk je uitsluitend voor ondernemingen en professionele klanten, of ook voor consumenten/particulieren? Werk je ook voor overheden, vzw's of buitenlandse klanten?

**Antwoord:**
zo breed mogelijk

### 5. Landen en recht — **Vereist**

In welke landen zitten je (beoogde) klanten? Wil je Belgisch recht toepassen? Welke rechtbank wil je bevoegd maken (bijvoorbeeld het arrondissement van je zetel), voor zover de wet dat toelaat?

**Antwoord:**
grootendeels Beglie, maar mag niet beperkend zijn
Mortsel is Arrondisement Antwerpen denk ik?
### 6. Talen en bestanden — **Vereist**

Wil je de privacyverklaring en algemene voorwaarden:

- alleen in het Nederlands;
- in het Nederlands én Engels;
- eventueel ook in een andere taal?

Welke taal heeft voorrang bij tegenstrijdigheden tussen vertalingen?

**Antwoord:**
Nederlands - frans en engels -- Nederlands heeft voorang

### 7. Waarop moeten de voorwaarden van toepassing zijn? — **Vereist**

Moeten ze alleen de website en het portaal dekken, of ook alle offertes, opdrachten, raamovereenkomsten, support, abonnementen en losse interventies? Worden ze bij elke offerte als pdf/bijlage meegestuurd en uitdrukkelijk aanvaard?

**Antwoord:**
Er zal een link op de offertes staan waarbij ze uitdrukkelijk aanvaard worden -- ja alles dekken

### 8. Bijzondere wettelijke of professionele regels

Is een vergunning, erkenning, beroepsvereniging, gedragscode of toezichthouder van toepassing? Heb je een beroeps- of cyberaansprakelijkheidsverzekering waarvan gegevens vermeld moeten worden?

**Antwoord:**
In opstart, verzekering in aanvraag, geen toezichthouder 

## B. Privacy, persoonsgegevens en cookies

### 9. Verwerkingsverantwoordelijke(n) — **Vereist**

Is de onderneming uit vraag 1 voor alle website-, contact-, klant- en portaalgegevens de enige verwerkingsverantwoordelijke? Zijn er activiteiten die je samen met een partner bepaalt (gezamenlijke verantwoordelijkheid)?

**Antwoord:**
OP dit moment niet maar de optie moet open blijven, WeIT zal nooit gegevens delen zonder uitdrukkelijke transparante goedkeuring te vragen

### 10. Categorieën personen — **Vereist**

Van wie verwerk je gegevens? Denk aan bezoekers, prospecten, klanten, contactpersonen en medewerkers van klanten, leveranciers, sollicitanten, onderaannemers en personen van wie gegevens tijdens een pentest of IT-opdracht worden aangetroffen.

**Antwoord:**
zet dit ook maar zo breed mogelijk, maar wederom transparant, nooit zonder toestemming -- zie nota onderaan

### 11. Contactformulier en Web3Forms — **Vereist**

Bevestig of corrigeer:

- verplichte velden: naam, e-mail en bericht;
- optioneel veld: bedrijfsnaam;
- bestemming: naar welk intern e-mailadres of mailboxsysteem gaat het bericht?;
- gebruikt Web3Forms spamcontrole, loggegevens, IP-adressen of tijdelijke opslag?;
- hoe lang bewaar jij contactaanvragen en onbeantwoorde prospectgegevens?;
- gebruik je deze gegevens alleen om te antwoorden, of later ook voor marketing/opvolging?

**Antwoord:**
contact@weit.be - ja web3forms doet dat, niet langer dan noodzakelijk/wenselijk - zowel om te antwoorden als later voor marketing/opvolging - uitluitend door WeIT zelf geen doorgifte aan derden

### 12. Cloudflare en technische loggegevens — **Vereist**

Welke Cloudflare-diensten staan in productie aan (hosting, CDN, DNS, WAF, botbescherming, analytics, logs/observability, Turnstile, ...)? Welke bezoekersgegevens/logs zie of bewaar je, en hoe lang? Wordt de gratis of betaalde versie gebruikt?

**Antwoord:**
De gratis versie van cloudflare wordt gebruikt, op dit moment worden er geen gegevvens bewaard denk ik maar dit mag zeker niet uitgesloten worden 

### 13. Supabase-regio en portaalaccounts — **Vereist**

Bevestig:

- in welke Supabase-projectregio de database en opslag staan;
- welke account-/loginmetadata Supabase bewaart (e-mail, wachtwoordhash, IP-/loginlogs, herstel- en uitnodigingsmails, ...);
- of MFA of externe loginproviders worden gebruikt;
- wanneer een portaalaccount wordt verwijderd na einde samenwerking;
- hoe lang authenticatie- en beveiligingslogs worden bewaard.

**Antwoord:**
Dit moet breed opengetrokken worden, maar bij aanmaak van account klantenportaal volgt er een apparte goedkeuring waarin alle details op dat ogenblik gaan opgenomen zijn, ook hier gegevens enkel bewaard zo lang strikt nodig voor werking portaal. 

### 14. Portaalinhoud — **Vereist**

Bevestig welke gegevens werkelijk in het portaal worden opgeslagen:

- naam, bedrijfsnaam, e-mail en telefoon;
- projectnamen, status, planning en notities;
- taken, verantwoordelijke, tijdsinschattingen en voltooiingsstatus;
- berichten/opmerkingen en auteursnaam/e-mailadres;
- urenregistraties, omschrijvingen en factureerbaarheid;
- kredietsaldo, vervaldatum, overdraagbaarheid en maximum;
- bestandsnaam, uploader en uploads.

Zijn er nog andere tabellen, velden, auditlogs of metadata?

**Antwoord:**
voorlopig niet maar kan uitbreiden naar de toekomst

### 15. Bestandsuploads en gevoelige gegevens — **Vereist**

Welke bestanden mogen klanten uploaden (momenteel lijken afbeeldingen, pdf, Word en Excel toegelaten)? Kunnen die bestanden persoonsgegevens, wachtwoorden, systeemlogs, kwetsbaarheden, gezondheidsgegevens, strafrechtelijke gegevens of andere gevoelige informatie bevatten? Welke informatie wil je uitdrukkelijk verbieden? Is er een maximale bewaartermijn of worden bestanden bij afsluiting verwijderd?

**Antwoord:**
Uploads dienen om richlijnen rond project mee te verschaffen, credentials en dergelijke moeten op versleutelde wijze aangeleverd worden al dan niet dmv wachtwoordmanager -- de klant is verantwoordelijk voor de inhoud van / wijze van aanleveren gevoelige informatie 

### 16. Klanten-, contract- en facturatieadministratie — **Vereist**

Welke gegevens bewaar je buiten het portaal voor offertes, contracten, facturen, betalingen, support en boekhouding? Welke software en dienstverleners gebruik je daarvoor? Vermeld ook bank, betaalprovider, accountant/boekhouder en CRM indien van toepassing.

**Antwoord:**
Dit gaat eigen crm worden en facturatie software -- blijf hier vaag over 'naar eigen dunk WeIT -- veilige oplossing compliant met ....'

### 17. E-mail, agenda en andere communicatie — **Vereist**

Welke provider(s) gebruik je voor professionele e-mail, agenda, videogesprekken en support? Worden gesprekken opgenomen of automatisch getranscribeerd? Hoe lang bewaar je e-mails en afspraken?

**Antwoord:**
Keuze vrij laten, indien nodig kan dit gebeuren, steeds met uitdrukkelijke toestemming. keuze van providers vrij naar eigen dunk WeIT ... 

### 18. Gegevens tijdens klantopdrachten — **Vereist**

Kun je tijdens pentests, beheer, migraties, development, automatisering of AI-projecten toegang krijgen tot persoonsgegevens waarvoor de klant verantwoordelijk is? Verwerk je die alleen volgens instructies van de klant? Bestaat er al een verwerkersovereenkomst/DPA, en wil je later ook een afzonderlijk DPA-model laten opstellen?

**Antwoord:**
Ja — tijdens pentests, security assessments, migraties, development, automatisering en AI-projecten kan WeIT toegang krijgen tot persoonsgegevens waarvoor de klant de verwerkingsverantwoordelijke is (bv. gebruikersaccounts, logbestanden, databases die tijdens een engagement doorzocht/getest worden). WeIT verwerkt deze gegevens uitsluitend in opdracht van en volgens instructies van de klant, in de rol van verwerker (art. 28 AVG/GDPR).

Er bestaat momenteel nog geen standaard verwerkersovereenkomst (DPA) — deze wordt best per opdracht of als sjabloon opgesteld vóór aanvang van een engagement waarbij persoonsgegevens verwerkt worden. Ja, een apart DPA-model laten opstellen is gewenst.

---- de enige gegevens die opgeslaan gebruikt worden dienen voor de versterking van het pentestrapport, worden onder geen enkele voorwaarden hierbuiten gebruikt, tenzij met uitdrukkelijke toestemming van de klant. 

### 19. AI-diensten — **Vereist indien AI wordt gebruikt**

Welke AI-aanbieders of modellen gebruik je zelf of voor klanten? Worden contactgegevens, klantdata, broncode, documenten, prompts of portaalgegevens naar zo'n aanbieder gestuurd? Gebeurt dit alleen na akkoord van de klant, welke accountvorm/dataregio wordt gebruikt en mogen aanbieders de invoer voor training gebruiken?

**Antwoord:**
WeIT behoud het recht hier vrij in te kiezen tenzij uitdrukkelijk bezwaar van de klant, invoer mag nooit voor training gebruikt worden en er wordt zo veel mogelijk gebruik gemaakt van lokaal draaiende modellen. 

### 20. Marketing, nieuwsbrief en prospectie — **Vereist**

Verstuur je nieuwsbrieven of commerciële opvolgmails? Gebruik je gegevens uit openbare bronnen, sociale media, databanken of aangekochte lijsten voor prospectie? Zo ja: welke gegevens, bron, doelgroep, frequentie, opt-out en bewaartermijn?

**Antwoord:**
Ja, WeIT kan gebruik maken van gegevens uit openbare bronnen voor B2B-prospectie, met name:

Bron: KBO (Kruispuntbank van Ondernemingen), bedrijfswebsites, LinkedIn (publiek zichtbare bedrijfs- en functie-informatie), domeinregistraties.
Gegevens: bedrijfsnaam, ondernemingsnummer, sector, publiek bedrijfs-e-mailadres of generiek contactadres (info@...), functietitel van contactpersonen indien publiek op LinkedIn.
Doelgroep: [KMO's / specifieke sectoren — vul aan] die potentieel baat hebben bij cybersecurity-dienstverlening.
Frequentie: sporadisch, geen geautomatiseerde bulkverzending naar aangekochte lijsten.
Rechtsgrond: gerechtvaardigd belang (art. 6.1.f AVG) voor B2B-prospectie naar rechtspersonen — let op: als je een natuurlijk persoon (bv. een zelfstandige zonder vennootschap, of een privé LinkedIn-profiel) individueel aanschrijft, geldt eerder de strengere regeling voor prospectie bij natuurlijke personen, en is een opt-out bij eerste contact verplicht.
Opt-out: iedere prospectiemail bevat een afmeldmogelijkheid; verzoek tot verwijdering wordt binnen [bv. 30 dagen] verwerkt.
Bewaartermijn: [bv. 12 maanden na laatste contact zonder respons, dan verwijderd of gearchiveerd].
Nieuwsbrief: enkel via expliciete opt-in (double opt-in aanbevolen); geen gekochte lijsten worden hiervoor gebruikt.

### 21. Leveranciers en ontvangers — **Vereist**

Vul de bekende leveranciers aan of corrigeer ze. Geef waar mogelijk ook contractpartij, product, dataregio en accounttype:

| Leverancier/ontvanger | Gebruik | Welke gegevens | Regio/land | Bewaartermijn |
|---|---|---|---|---|
| Cloudflare | website/hosting/beveiliging/logs |  |  |  |
| Supabase | authenticatie/database/opslag |  |  |  |
| Web3Forms | contactformulier |  |  |  |
| E-mail/agenda |  |  |  |  |
| Boekhouding/facturatie |  |  |  |  |
| Bank/betaalprovider |  |  |  |  |
| Back-up/monitoring |  |  |  |  |
| AI-aanbieder(s) |  |  |  |  |
| Onderaannemer(s) |  |  |  |  |
| Andere |  |  |  |  |

**Antwoord/toelichting:**
Veranderlijk en mag niet beperkend zijn

### 22. Doorgiften buiten de EER — **Vereist**

Weet je of leveranciers gegevens buiten de Europese Economische Ruimte verwerken of toegankelijk maken, met name in de VS? Zo ja, op welke waarborg wordt gesteund (adequaatheidsbesluit/Data Privacy Framework, standaardcontractbepalingen, andere)? Als je dit niet weet, geef dan per leverancier `te onderzoeken` op.

**Antwoord:**
Geen idee - indien de klant hier bezwaren op heeft diend die dat uitdrukkelijk te vermelden - er wordt met zoveel platformen gewerkt afhankelijk van noden klant. 

### 23. Bewaartermijnen — **Vereist**

Geef je gewenste of bestaande termijn voor elk type. Als je geen termijn hebt, mag je `voorstel gevraagd` invullen.

| Gegevenscategorie | Termijn of verwijdercriterium |
|---|---|
| Contactaanvragen die geen klant worden |  |
| Offertes/prospectdossiers |  |
| Klant- en contractdossier |  |
| Boekhouding en facturen |  |
| E-mailcorrespondentie |  |
| Portaalaccount en profiel |  |
| Projecten, taken, opmerkingen en uren |  |
| Geüploade bestanden |  |
| Back-ups |  |
| Website-/beveiligingslogs |  |
| Toestemmingsbewijzen/marketingvoorkeuren |  |
| Gegevens nodig voor juridische claims |  |

**Antwoord/toelichting:**

voorstel gevraagd

### 24. Doeleinden en rechtsgronden — **Vereist**

Bevestig of deze indeling klopt, en voeg afwijkingen toe:

- antwoorden op vragen en precontractuele stappen;
- uitvoeren en beheren van contracten en het portaal;
- facturatie, boekhouding en wettelijke verplichtingen;
- website-, account- en informatiebeveiliging op basis van gerechtvaardigd belang;
- verdediging van rechtsvorderingen op basis van gerechtvaardigd belang;
- marketing alleen waar toegestaan, op basis van toestemming of gerechtvaardigd belang;
- noodzakelijke portaalcookies voor de gevraagde dienst;
- verwerking van klantdata tijdens opdrachten als verwerker namens de klant.

**Antwoord:**
zaken kunnen verwerkt worden in blog - doch deze zal nooit gepubliceerd worden zonder uitdrukkelijke goedkeuring klant

### 25. Verplichte gegevens en gevolgen — **Vereist**

Welke gegevens moet een prospect of klant verplicht geven om een antwoord, offerte, contract, factuur of portaalaccount te krijgen? Wat kan niet worden geleverd als die gegevens ontbreken?

**Antwoord:**
naam telefoon mail

### 26. Cookies en vergelijkbare technieken — **Vereist**

Bevestig of er uitsluitend technisch noodzakelijke Supabase-authenticatiecookies worden gebruikt. Noteer voor elke cookie/techniek indien bekend: naam, provider, doel, soort, domein en levensduur. Zijn nu of binnenkort analytics, pixels, A/B-tests, embeds, chat, captcha/Turnstile of personalisatie gepland?

**Antwoord:**
dit moet zo breed mogelijk blijven, afhankelijk van toepassing/nood

### 27. Privacyrechten en klachten — **Vereist**

Via welk kanaal behandel je privacyverzoeken? Hoe controleer je zo nodig de identiteit? Wil je de Belgische Gegevensbeschermingsautoriteit als bevoegde toezichthouder vermelden, en zijn er ook andere bevoegde autoriteiten door je doelgroep/vestiging?

**Antwoord:**
contact@weit.be -- ja doe maar -
bij twijfel over de identiteit van de aanvrager kan WeIT bijkomende verificatie vragen (bv. bevestiging via het reeds gekende contact-e-mailadres, of een kopie van een identiteitsdocument met niet-relevante gegevens afgeschermd) — enkel wanneer redelijke twijfel bestaat, niet standaard bij elk verzoek.

### 28. Beveiligingsmaatregelen — **Vereist**

Welke maatregelen mogen publiek en op hoofdlijnen worden genoemd? Bijvoorbeeld toegangsbeheer, MFA, versleuteling tijdens transport/opslag, least privilege/RLS, logging, back-ups, updates, geheimhoudingsplicht en incidentbeheer. Noem geen details die de beveiliging verzwakken.

**Antwoord:**
WeIT hanteert een pragmatische, groeiende set beveiligingsmaatregelen, waaronder onder meer:

Toegangsbeheer: least privilege-principe, multi-factor authenticatie (MFA) op kritieke accounts en systemen.
Versleuteling: gegevens worden waar mogelijk versleuteld tijdens transport (TLS) en in rust.
Logging & monitoring: relevante systeem- en toegangslogs worden bijgehouden voor detectie en onderzoek van incidenten.
Back-ups: periodieke back-ups van kritieke data en configuraties.
Updates & patchbeheer: systemen en software worden regelmatig bijgewerkt.
Geheimhouding: alle klantgegevens en -informatie worden vertrouwelijk behandeld, ook na afloop van een opdracht.
Incidentbeheer: bij een vermoed of vastgesteld datalek wordt een intern proces gevolgd dat onder meer melding aan de GBA (indien vereist) en aan betrokkenen omvat.

Deze maatregelen worden continu geëvalueerd en verder uitgebouwd naarmate WeIT groeit. Om veiligheidsredenen worden geen technische details over specifieke implementaties publiek gedeeld.

### 29. Geautomatiseerde besluitvorming, profilering en minderjarigen — **Vereist**

Worden mensen onderworpen aan geautomatiseerde beslissingen met belangrijke gevolgen of profilering? Richt de dienst zich ooit op minderjarigen of worden bewust gegevens van minderjarigen verwerkt?

**Antwoord:**
neen, zitten in een B2B context - indien dit projectmatig wel zo is worden hier apparte voorwaarden / voorzorgen voor uitgetekend

### 30. Versiedatum en wijzigingsmelding

Welke ingangsdatum wil je gebruiken? Hoe wil je wezenlijke wijzigingen melden: alleen publicatie op de website, via e-mail aan portaalgebruikers, of beide?

**Antwoord:**
vandaag - versie 1 - alleen publicatie op website

## C. Algemene voorwaarden voor de dienstverlening

### 31. Totstandkoming van een opdracht — **Vereist**

Hoe komt een overeenkomst tot stand: ondertekende offerte, akkoord per e-mail, bestelbon, online akkoord of start van de werkzaamheden? Hoe lang is een offerte geldig? Welke documentvolgorde geldt bij tegenstrijdigheid (bijvoorbeeld opdrachtbrief/SOW, DPA, offerte, algemene voorwaarden)? Aanvaard je inkoopvoorwaarden van de klant ooit?

**Antwoord:**
Een overeenkomst tussen WeIT en de klant komt tot stand door ondertekening van de offerte door de klant, of bij ontstentenis daarvan door een schriftelijk akkoord per e-mail, dan wel door de feitelijke start van de werkzaamheden indien de klant daarmee instemt zonder voorafgaande formele ondertekening.

Een offerte is geldig gedurende 30 kalenderdagen vanaf de offertedatum, tenzij anders vermeld. Na deze termijn kan WeIT de offerte herzien.

Documentvolgorde bij tegenstrijdigheid (van hoog naar laag prioriteit):

Ondertekende opdrachtbrief/Statement of Work (SOW) specifiek voor de opdracht;
Verwerkersovereenkomst (DPA), voor zover het de verwerking van persoonsgegevens betreft;
Offerte;
Algemene voorwaarden van WeIT.

WeIT aanvaardt in principe geen inkoopvoorwaarden van de klant, tenzij dit uitdrukkelijk en schriftelijk overeengekomen wordt in de opdrachtbrief/SOW zelf. Bij stilzwijgen gelden steeds de algemene voorwaarden van WeIT.

### 32. Inspannings- of resultaatsverbintenis — **Vereist**

Zijn diensten in beginsel een inspanningsverbintenis? Welke resultaten of opleverdata wil je alleen bindend maken wanneer dat uitdrukkelijk schriftelijk staat afgesproken? Mogen planning en schattingen wijzigen door afhankelijkheden of nieuwe bevindingen?

**Antwoord:**
WeIT's diensten (pentesting, security assessments, development, automatisering, AI-projecten, advies) zijn in beginsel een inspanningsverbintenis: WeIT verbindt zich ertoe de opdracht met de vereiste zorgvuldigheid, vakkennis en professionaliteit uit te voeren, zonder een gegarandeerd resultaat te beloven (bv. het vinden van een specifiek aantal kwetsbaarheden, of "100% veilig" na een pentest).

Concrete resultaten of opleverdata worden enkel bindend wanneer deze uitdrukkelijk en schriftelijk zijn overeengekomen in de opdrachtbrief/SOW — een indicatieve planning in een offerte of e-mailwisseling geldt niet automatisch als bindende resultaatsverbintenis.

Planning en tijdsinschattingen kunnen wijzigen ten gevolge van:

afhankelijkheden bij de klant (bv. laattijdige toegang, ontbrekende informatie, wijzigingen in scope);
nieuwe bevindingen tijdens de uitvoering (bv. onverwachte complexiteit, bijkomende kwetsbaarheden die verder onderzoek vereisen);
overmacht of externe factoren buiten de controle van WeIT.

WeIT informeert de klant zo spoedig mogelijk bij een verwachte wijziging in planning, met een bijgestelde inschatting.

### 33. Medewerking van de klant — **Vereist**

Welke verplichtingen heeft de klant? Denk aan juiste en tijdige informatie, bevoegde contactpersoon, toegang/accounts, back-ups, licenties en toestemming van derden, testomgeving, tijdige feedback/beslissingen en veilig beheer van inloggegevens. Wat gebeurt er bij vertraging door de klant?

**Antwoord:**
De klant verbindt zich ertoe om, voor een correcte en tijdige uitvoering van de opdracht, het volgende te voorzien:

Juiste en tijdige informatie over de scope, systemen, omgeving en context van de opdracht;
Een bevoegde contactpersoon die beslissingen kan nemen of tijdig kan doorverwijzen naar wie dat kan;
Toegang, accounts en rechten die nodig zijn voor de uitvoering (bv. testaccounts, VPN-toegang, API-sleutels), inclusief een up-to-date en veilig beheer van deze inloggegevens;
Voorafgaande back-ups van systemen/data vóór aanvang van werkzaamheden met impact (bv. pentesting, migraties, configuratiewijzigingen) — WeIT is niet aansprakelijk voor dataverlies indien de klant dit nagelaten heeft;
Schriftelijke toestemming/machtiging van de klant voor pentesting-activiteiten, en bevestiging dat de klant gerechtigd is deze toestemming te geven (bv. bij systemen van derden, cloud-providers of gehoste omgevingen — de klant garandeert dat ook eventuele externe partijen akkoord zijn of dat dit niet vereist is);
Een geschikte test-/staging-omgeving, indien van toepassing en indien dit vooraf zo overeengekomen is;
Tijdige feedback en beslissingen tijdens de opdracht, binnen een redelijke termijn na verzoek van WeIT;
Geldige licenties voor software/systemen waarop WeIT werkt of test.

Bij vertraging door de klant (bv. laattijdige toegang, ontbrekende informatie, uitblijvende feedback) kan WeIT:

de planning en opleverdata dienovereenkomstig aanpassen, zonder dat dit als een tekortkoming van WeIT geldt;
bijkomende kosten aanrekenen indien de vertraging leidt tot herplanning, stilstand of extra inzet van WeIT;
de opdracht opschorten indien de vertraging de uitvoering redelijkerwijze onmogelijk maakt, zonder dat dit recht geeft op schadevergoeding vanwege de klant.

### 34. Pentests en securitywerk — **Vereist indien aangeboden**

Welke waarborgen wil je opnemen voor securityopdrachten?

- voorafgaande schriftelijke toestemming en bewijs dat de klant het doelwit mag laten testen;
- exacte scope, tijdvenster, toegestane technieken en uitgesloten systemen;
- noodcontact en stopprocedure;
- mogelijke verstoring, noodzaak van back-ups en risicoaanvaarding;
- regels voor social engineering, phishing, fysieke tests, DoS en productieomgevingen;
- vertrouwelijke behandeling en verwijdering van testdata;
- geen garantie dat alle kwetsbaarheden worden gevonden;
- verantwoordelijkheden voor herstel en hertest.

**Antwoord:**

Autorisatie en toestemming
Vóór aanvang van een securityopdracht (pentesting, red teaming, social engineering of gelijkaardige activiteiten) bezorgt de klant WeIT een schriftelijke autorisatie ("Rules of Engagement" / autorisatiebrief), waarin de klant uitdrukkelijk bevestigt gerechtigd te zijn om de betrokken systemen te laten testen. Indien systemen gehost zijn bij of gedeeld worden met een derde partij (cloud-provider, SaaS-leverancier, partner), garandeert de klant dat de nodige toestemming van die derde partij eveneens verkregen is.

Scope en tijdvenster
De autorisatiebrief/SOW omschrijft nauwkeurig: de systemen, applicaties, IP-ranges of domeinen die binnen scope vallen; het tijdvenster waarbinnen getest mag worden; de toegestane technieken en methodes; en de systemen die uitdrukkelijk uitgesloten zijn van testing. Activiteiten buiten deze scope worden niet uitgevoerd zonder voorafgaand schriftelijk akkoord.

Noodcontact en stopprocedure
Beide partijen wijzen een noodcontactpersoon aan, bereikbaar tijdens het testvenster. Bij een vermoeden van ernstige verstoring, onvoorziene impact of een crisissituatie kan elke partij de opdracht onmiddellijk laten stopzetten via een vooraf afgesproken stopprocedure/codewoord.

Risico op verstoring
De klant erkent dat securitytests, ondanks alle voorzorgen van WeIT, een risico op verstoring of onbeschikbaarheid van systemen kunnen inhouden. De klant is verantwoordelijk voor het voorzien van actuele back-ups vóór aanvang van de opdracht en aanvaardt dit inherente risico voor zover WeIT handelt binnen de overeengekomen scope en met de vereiste zorgvuldigheid.

Specifieke regels per techniek

Social engineering/phishing: enkel uitgevoerd binnen de expliciet overeengekomen scope (doelgroep, methodes, duur); herkenning door medewerkers wordt niet gerapporteerd als individuele tekortkoming tenzij anders overeengekomen.
Fysieke tests: enkel op vooraf schriftelijk aangeduide locaties, met een "get-out-of-jail"-verklaring die testers bij zich dragen voor het geval van interventie door beveiliging of politie.
Denial-of-Service (DoS): DoS-technieken worden niet uitgevoerd tenzij uitdrukkelijk en afzonderlijk schriftelijk overeengekomen, gezien het verhoogde risico op impact.
Productieomgevingen: testen op productieomgevingen gebeurt enkel indien expliciet toegestaan door de klant; waar mogelijk wordt een test-/staging-omgeving aanbevolen.

Vertrouwelijkheid en testdata
Alle informatie, bevindingen en tijdens de opdracht verzamelde data worden vertrouwelijk behandeld. Testdata en tijdelijk verzamelde gegevens (bv. gekraakte wachtwoorden, geëxfiltreerde testbestanden) worden na afloop van de opdracht en rapportage op veilige wijze verwijderd, tenzij bewaring vereist is voor het rapport zelf.

Geen garantie op volledigheid
WeIT levert een inspanningsverbintenis (zie art. 32) en garandeert niet dat alle mogelijke kwetsbaarheden geïdentificeerd worden. Het ontbreken van een vermelding van een kwetsbaarheid in het rapport betekent niet dat deze niet bestaat.

Herstel en hertest
Herstel van vastgestelde kwetsbaarheden valt onder de verantwoordelijkheid van de klant. Een hertest ter verificatie van herstelmaatregelen is niet inbegrepen in de oorspronkelijke opdracht, tenzij uitdrukkelijk overeengekomen, en kan afzonderlijk aangeboden worden.


### 35. Scopewijzigingen en meerwerk — **Vereist**

Hoe worden change requests, onvoorziene werkzaamheden en meerwerk goedgekeurd en aangerekend? Mag dringend werk mondeling starten met latere schriftelijke bevestiging?

**Antwoord:**
altijd schriftelijk

### 36. Oplevering en aanvaarding — **Vereist**

Hoe wordt software, documentatie, advies of een rapport opgeleverd? Hoeveel dagen krijgt de klant voor controle? Wanneer geldt iets als aanvaard? Wat is een gebrek, en binnen welke termijn herstel je een aantoonbare afwijking van de afgesproken scope?

**Antwoord:**
Oplevering
Software, documentatie, adviesrapporten en pentestrapporten worden opgeleverd via een schriftelijke of digitale kennisgeving (bv. e-mail met bijlage, of via een gedeelde omgeving), met vermelding van de opleverdatum.

Controletermijn
De klant beschikt over 14 kalenderdagen vanaf de opleverdatum om het geleverde te controleren en eventuele opmerkingen of gebreken schriftelijk te melden aan WeIT.

Aanvaarding
Het geleverde wordt geacht stilzwijgend aanvaard te zijn indien de klant binnen deze termijn van 14 dagen geen schriftelijke opmerkingen overmaakt, of vanaf het moment dat de klant het geleverde effectief in gebruik neemt of er zichtbaar mee verdergaat (bv. het pentestrapport intern verspreidt, de software in productie neemt), indien dit eerder plaatsvindt.

Gebrek
Een gebrek is een aantoonbare afwijking van de scope of specificaties die uitdrukkelijk schriftelijk zijn overeengekomen in de offerte of opdrachtbrief/SOW (bv. een ontbrekend onderdeel van de afgesproken scope, een factually incorrecte bevinding in een rapport, een functionaliteit die niet werkt zoals overeengekomen). Een verschil in verwachting dat niet uitdrukkelijk zo is vastgelegd, geldt niet als gebrek.

Hersteltermijn
Een aantoonbaar gebrek wordt door WeIT hersteld binnen een redelijke termijn, in onderling overleg met de klant vastgesteld naargelang de aard en omvang van het gebrek, en dit kosteloos indien het gebrek aantoonbaar aan WeIT te wijten is en binnen de controletermijn (of nadien binnen een redelijke termijn voor verborgen gebreken) gemeld werd.

### 37. Prijzen en prijsmodellen — **Vereist**

Werk je met uur-/dagtarieven, vaste prijzen, voorschotten, abonnementen/retainers en/of voorafbetaalde uren? Zijn prijzen exclusief btw? Mogen tarieven jaarlijks worden geïndexeerd of tussentijds gewijzigd voor nieuwe opdrachten? Is reistijd factureerbaar?

**Antwoord:**
zo ruim mogelijk houden

### 38. Facturatie en betaling — **Vereist**

Wanneer factureer je (vooraf, per maand, per mijlpaal, bij oplevering)? Welke betalingstermijn geldt? Welke betaalmethoden worden aanvaard? Mag je voorschotten of betwiste en onbetwiste factuurdelen anders behandelen?

**Antwoord:**
flexibel afhankelijk van project/opdracht/overeenkomst

### 39. Laattijdige betaling — **Vereist**

Welke contractuele rente en forfaitaire schade-/invorderingsvergoeding wil je bij B2B-klanten toepassen, binnen de wettelijke grenzen? Na hoeveel dagen en waarschuwingen mag je diensten of toegang opschorten? Als je consumenten bedient, moeten hiervoor afzonderlijke dwingende regels worden gevolgd.

**Antwoord:**
Interest bij laattijdige betaling
Bij niet-betaling op de vervaldag is van rechtswege en zonder ingebrekestelling de wettelijke interestvoet voor handelstransacties verschuldigd (zoals halfjaarlijks gepubliceerd door de FOD Economie op basis van de Wet Betalingsachterstand Handelstransacties).

Forfaitaire schadevergoeding
Daarnaast is een forfaitaire vergoeding voor invorderingskosten verschuldigd, binnen de wettelijke grenzen (Wet van 2 augustus 2002, zoals gewijzigd in 2023):

een vast bedrag van 40 EUR, steeds verschuldigd, ongeacht het factuurbedrag;
vermeerderd met een percentage van het onbetaalde factuurbedrag: 10% voor het gedeelte tot 5.000 EUR, 5% voor het gedeelte tussen 5.000 en 10.000 EUR, en 1% voor het gedeelte boven 10.000 EUR, met een absoluut maximum van 5.000 EUR.

Opschorting van diensten/toegang
Bij uitblijvende betaling na de vervaldag stuurt WeIT een eerste herinnering met een betalingstermijn van 8 kalenderdagen. Blijft betaling na deze termijn uit, dan kan WeIT, na een tweede schriftelijke ingebrekestelling, de uitvoering van lopende diensten en/of de toegang tot geleverde systemen/omgevingen opschorten, zonder dat dit aanleiding geeft tot schadevergoeding vanwege WeIT, en onverminderd het recht op de hierboven vermelde interesten en vergoedingen.
Tenzij anders overeengekomen / project / opdracht

### 40. Kosten van derden en onkosten — **Vereist**

Wie betaalt cloudkosten, softwarelicenties, domeinen, hardware, verplaatsingen en andere externe kosten? Is voorafgaande goedkeuring nodig boven een bepaald bedrag? Mogen leveranciers hun eigen voorwaarden en prijswijzigingen doorrekenen?

**Antwoord:**
afhankelijk van opdracht / project  

### 41. Urenkredieten — **Vereist indien gebruikt**

Leg het commerciële model uit:

- hoe klanten uren/kredieten kopen en tegen welk tarief;
- wanneer tijd wordt afgetrokken en hoe wordt afgerond;
- wat “factureerbaar/krediet” in het portaal precies betekent;
- geldigheidsduur en verval;
- overdraagbaarheid en maximaal cumuleerbaar saldo;
- terugbetaalbaarheid bij opzegging;
- mogelijkheid tot negatief saldo of werk boven saldo;
- betwisting/correctie van tijdsregistraties;
- wat bij prijswijziging of einde dienstverlening gebeurt.

**Antwoord:**
Aankoop en tarief
Klanten kopen bij WeIT vooraf een urenkrediet (bv. een blok van 10, 20 of 40 uur) tegen het op de offerte vermelde uurtarief. Het tarief per uur ligt vast voor de geldigheidsduur van het aangekochte krediet en wordt niet retroactief gewijzigd.

Verrekening en afronding
Tijd wordt afgetrokken van het saldo per effectief gepresteerde prestatie (uitvoering, overleg, rapportage), afgerond naar boven per kwartier (15 minuten). Verplaatsingstijd wordt aangerekend, tenzij anders overeengekomen.

Betekenis "factureerbaar/krediet" in het portaal

Factureren: tijd die van het krediet wordt afgetrokken én zichtbaar is als verbruikte, betaalde prestatie.
Niet factureren: tijd die niet van het krediet wordt afgetrokken en niet gefactureerd wordt (bv. coulance, interne opvolging, opzoekingen / leertraject).
Niet factureren maar wel vermelden: tijd die niet van het krediet afgetrokken of gefactureerd wordt, maar ter transparantie wel op de factuur/tijdsoverzicht vermeld staat (bv. als goodwill-gebaar zichtbaar maken).

Geldigheidsduur en verval
Een aangekocht urenkrediet is geldig gedurende 12 maanden vanaf aankoopdatum. Niet-gebruikte uren na deze termijn vervallen zonder recht op terugbetaling, tenzij anders schriftelijk overeengekomen.

Overdraagbaarheid en maximaal saldo
Het urenkrediet is niet overdraagbaar aan derden zonder schriftelijke toestemming van WeIT. Er geldt geen absoluut maximum cumuleerbaar saldo, tenzij WeIT dit om praktische redenen beperkt bij bijkomende aankopen.

Terugbetaalbaarheid bij opzegging
Bij opzegging van de samenwerking door de klant is het resterend, niet-gebruikte urenkrediet niet terugbetaalbaar, behoudens uitdrukkelijk andersluidend beding of in geval van opzegging door WeIT zonder geldige reden.

Negatief saldo / werk boven saldo
Werk boven het beschikbare saldo wordt enkel uitgevoerd na uitdrukkelijk akkoord van de klant voor bijkomende aankoop van krediet, of tegen het standaarduurtarief per aparte facturatie. WeIT staat geen structureel negatief saldo toe zonder voorafgaand akkoord.

Betwisting van tijdsregistraties
De klant kan een tijdsregistratie schriftelijk betwisten binnen 14 dagen na registratie in het portaal. WeIT onderzoekt de betwisting en corrigeert het saldo indien de afwijking aantoonbaar is.

Prijswijziging of einde dienstverlening
Bij een tariefwijziging blijft het reeds aangekochte krediet gelden aan het tarief van aankoop; enkel nieuw aangekochte kredieten volgen het nieuwe tarief. Bij definitieve stopzetting van de dienstverlening door WeIT wordt het resterende, niet-gebruikte krediet terugbetaald pro rata het aantal onverbruikte uren.

### 42. Annulering, verplaatsing en wachttijd — **Vereist**

Mag een klant een ingeplande interventie of project annuleren/verplaatsen? Welke opzegtermijn en vergoeding gelden? Hoe factureer je gereserveerde tijd, wachttijd of een no-show?

**Antwoord:**
A. Kortlopende interventies (enkele uren tot enkele dagen)

> 5 werkdagen vooraf: kosteloos annuleerbaar/verplaatsbaar.
2 tot 5 werkdagen vooraf: 50% van de voorziene tijd verschuldigd.
< 48 uur vooraf, of no-show: 100% van de voorziene tijd verschuldigd.

B. Langlopende opdrachten/projectblokken (gereserveerde capaciteit vanaf 2 weken)
Voor opdrachten waarbij WeIT capaciteit reserveert over een langere periode, geldt een opzegtermijn die evenredig is met de duur van de reservering, met name minstens 1 week opzegtermijn per gereserveerde maand, met een minimum van 2 weken. Bij annulering of significante inkrimping van de opdracht:

bij naleving van deze opzegtermijn: geen vergoeding verschuldigd voor het niet-gepresteerde deel;
bij annulering binnen deze opzegtermijn: een vergoeding verschuldigd, gelijk aan 100% van het gereserveerde honorarium voor de periode die binnen de opzegtermijn valt (m.a.w. het deel van de opdracht dat WeIT niet meer redelijkerwijze aan een andere klant kon toewijzen), verminderd met eventueel reeds elders ingevulde capaciteit door WeIT.

Deze vergoeding weerspiegelt de reële opportuniteitskost van gereserveerde, niet-herinvulbare capaciteit, en geldt onverminderd het recht van WeIT om reeds gepresteerde uren tot de annulering apart te factureren.

### 43. Support, onderhoud en beschikbaarheid — **Vereist**

Welke supporturen, reactietijden en kanalen bied je? Is er alleen een SLA als die apart wordt afgesproken? Zijn onderhoud, updates, incidentrespons en beschikbaarheid inbegrepen of afzonderlijk? Is het klantenportaal “as is” zonder gegarandeerde uptime?

**Antwoord:**
OP de huidige systemen -- gezien de evolutie en ontwikkeling geen garanties -- op klantensystemen 'te bespreken per opdracht, rekening houdende met de garanties van de leveranciers van gebruikte systemen en platformen

### 44. Hosting, back-ups en exit — **Vereist indien relevant**

Bied je zelf hosting/beheer of zet je alles op accounts van de klant? Wie is verantwoordelijk voor back-ups, hersteltests, continuïteit en export/migratie bij einde samenwerking? Hoe lang blijven klantdata en back-ups daarna beschikbaar?

**Antwoord:**
voorlopig geen hosting - klant draagt verantwoordelijkheid, --- zo veel mogelijk op accounts klant

### 45. Diensten van derden en open source — **Vereist**

Mag je derde diensten, cloudplatforms, API's en open-sourcesoftware gebruiken? Wil je aansprakelijkheid uitsluiten voor storingen/wijzigingen bij derden voor zover wettelijk toegestaan? Wie aanvaardt de licentievoorwaarden van die derden?

**Antwoord:**
ja - zo veel mogelijk op accounts klant, -- 

### 46. Intellectuele eigendom — **Vereist**

Wat moet gelden voor:

- bestaande tools, templates, scripts, methodes en knowhow van WeIT;
- specifiek voor de klant gemaakte code en documentatie;
- generieke/herbruikbare onderdelen die tijdens een project ontstaan;
- eigendomsoverdracht versus gebruikslicentie;
- moment van overdracht (bijvoorbeeld pas na volledige betaling);
- broncode, bewerkbare bestanden en documentatie;
- materiaal dat de klant of derden aanleveren;
- open-sourcecomponenten.

**Antwoord:**
A. Bestaande tools, templates, scripts, methodes en knowhow van WeIT
Alle door WeIT vóór of onafhankelijk van een specifieke opdracht ontwikkelde tools, scripts, templates, methodologieën, rapportstructuren en knowhow (het "WeIT-basismateriaal") blijven volledig eigendom van WeIT, ongeacht of ze tijdens een opdracht gebruikt of aangepast worden voor de klant. De klant verkrijgt hierop een niet-exclusieve, niet-overdraagbare gebruikslicentie, beperkt tot het doel van de opdracht, tenzij uitdrukkelijk anders schriftelijk overeengekomen (bv. bij een aparte productlicentie-overeenkomst indien WeIT dit basismateriaal later als apart product aanbiedt).

B. Specifiek voor de klant gemaakte code en documentatie
Code, configuraties, documentatie en andere werken die WeIT specifiek in opdracht van en op maat van de klant ontwikkelt (en die geen deel uitmaken van het WeIT-basismateriaal onder A), worden in volle eigendom overgedragen aan de klant, overeenkomstig WeIT's uitgangspunt van klantautonomie en volledige controle over het eigen digitale eigendom.

C. Generieke/herbruikbare onderdelen ontstaan tijdens het project
Onderdelen die weliswaar tijdens een klantopdracht ontstaan, maar generiek en herbruikbaar zijn (d.w.z. niet specifiek gebonden aan de context, data of vereisten van deze ene klant — bv. een algemene automatiseringsmodule, een generiek script), blijven eigendom van WeIT als deel van het WeIT-basismateriaal (categorie A), tenzij de klant deze specifiek en exclusief liet ontwikkelen tegen een daartoe overeengekomen vergoeding.

Moment van overdracht
De eigendomsoverdracht van categorie B wordt pas definitief van kracht na volledige betaling van de desbetreffende factuur/factureerbaar krediet. Tot dat moment verleent WeIT hoogstens een voorlopig gebruiksrecht.

Broncode, bewerkbare bestanden en documentatie
Bij overdracht (categorie B) levert WeIT steeds de volledige broncode, bewerkbare bronbestanden en bijhorende documentatie, in overeenstemming met het uitgangspunt van volledige overdraagbaarheid — geen verborgen afhankelijkheden of enkel-leesbare eindproducten, tenzij dit door de aard van het gebruikte platform (bv. een SaaS-tool van een derde partij) niet mogelijk is.

Materiaal aangeleverd door de klant of derden
Materiaal, data, logo's, content of licenties die de klant of een door de klant aangeduide derde aanlevert, blijft eigendom van de klant/derde. De klant garandeert over de nodige rechten te beschikken om dit materiaal aan WeIT ter beschikking te stellen voor gebruik binnen de opdracht.

Open-sourcecomponenten
Voor zover WeIT open-sourcecomponenten gebruikt binnen een oplevering, blijven deze onderworpen aan hun eigen respectievelijke licentievoorwaarden. WeIT informeert de klant over gebruikte open-sourcecomponenten met een copyleft-karakter (bv. GPL) indien dit relevante verplichtingen voor de klant met zich meebrengt.

### 47. Referenties en portfolio

Mag je naam, logo en een niet-vertrouwelijke projectbeschrijving als referentie gebruiken, of alleen na voorafgaande schriftelijke toestemming? Mogen geanonimiseerde kennis en resultaten hergebruikt worden?

**Antwoord:**
Enkel na uitdrukkelijke toestemming

### 48. Vertrouwelijkheid — **Vereist**

Moet de geheimhoudingsplicht wederzijds zijn? Welke uitzonderingen gelden (openbaar, al bekend, rechtmatig van derde, wettelijk bevel)? Hoe lang loopt ze door na het contract? Moeten securitybevindingen en toegangsgegevens zonder einddatum of voor een langere termijn vertrouwelijk blijven?

**Antwoord:**
Wederkerigheid
De geheimhoudingsplicht geldt wederzijds: zowel WeIT als de klant verbinden zich ertoe alle vertrouwelijke informatie die zij van elkaar ontvangen tijdens de opdracht geheim te houden en enkel te gebruiken voor het doel van de opdracht.

Uitzonderingen
De geheimhoudingsplicht geldt niet voor informatie die:

reeds openbaar is of wordt, zonder schending van deze bepaling;
de ontvangende partij reeds rechtmatig bekend was vóór ontvangst, aantoonbaar;
de ontvangende partij rechtmatig van een derde verkrijgt, zonder geheimhoudingsverplichting ten aanzien van die derde;
openbaar gemaakt moet worden ingevolge een wettelijke verplichting, gerechtelijk bevel of bevoegde overheidsinstantie — in dat geval stelt de bekendmakende partij de andere partij, voor zover wettelijk toegestaan, voorafgaand op de hoogte.

Duur na afloop van de overeenkomst
De geheimhoudingsplicht blijft gelden gedurende 5 jaar na beëindiging van de overeenkomst, met uitzondering van de hierna vermelde categorieën, waarvoor een langere of onbeperkte duur geldt.

Securitybevindingen en toegangsgegevens
Gezien de aard van WeIT's dienstverlening (pentesting, security assessments) blijven de volgende gegevens zonder tijdsbeperking (voor onbepaalde duur) vertrouwelijk, ook na het verstrijken van de hierboven vermelde termijn van 5 jaar:

vastgestelde kwetsbaarheden en securitybevindingen van de klant, ongeacht of deze reeds verholpen zijn;
toegangsgegevens, credentials, tokens of sleutels waartoe WeIT tijdens de opdracht toegang kreeg;
testdata of technische details die, indien bekendgemaakt, de veiligheid van de klant opnieuw in gevaar zouden kunnen brengen.

Deze onbeperkte geheimhoudingsplicht voor securitygerelateerde informatie geldt ongeacht de reden van beëindiging van de samenwerking. - Tenzij anders overeengekomen en enkel mits wederzijdse goedkeuring

### 49. Gegevensbescherming en onderaannemers — **Vereist**

Wil je vastleggen dat iedere partij haar eigen AVG-rol naleeft en dat bij verwerking namens de klant een aparte DPA geldt? Mag je gekwalificeerde onderaannemers/subverwerkers inzetten, en moet de klant vooraf worden geïnformeerd over wezenlijke wijzigingen?

**Antwoord:**
ja ja en ja

### 50. Garantie en herstel — **Vereist**

Welke beperkte herstelgarantie wil je geven voor maatwerk? Welke zaken vallen niet onder garantie, zoals wijzigingen door klant/derden, verkeerd gebruik, externe platformwijzigingen, verouderde software of gebruik buiten de afgesproken omgeving? Bied je na oplevering een gratis herstelperiode; zo ja, hoe lang?

**Antwoord:**
wettelijk minimum, dek me hier zo goed mogelijk in

### 51. Aansprakelijkheid — **Vereist; juridisch laten controleren**

Wat is een redelijk aansprakelijkheidsplafond: bedrag van de betreffende opdracht, vergoedingen van de laatste 12 maanden, verzekerde som of ander bedrag? Wil je indirecte schade (zoals winst-, omzet-, data- of reputatieverlies) uitsluiten voor zover toegestaan? Welke uitzonderingen moeten gelden, bijvoorbeeld opzet, zware fout waar uitsluiting verboden is, lichamelijke schade, vertrouwelijkheid, privacy of intellectuele eigendom?

**Antwoord:**
Aansprakelijkheidsplafond
De totale aansprakelijkheid van WeIT, uit welke hoofde ook (contractueel, buitencontractueel of anderszins), is per schadegeval en per contractjaar beperkt tot het hoogste van:

het bedrag van de vergoedingen betaald door de klant aan WeIT voor de betreffende opdracht in de 12 maanden voorafgaand aan het schadeverwekkend feit, of
het bedrag dat effectief door WeIT's beroeps-/cyberaansprakelijkheidsverzekering wordt gedekt en uitgekeerd voor het betreffende schadegeval.

Uitsluiting van indirecte schade
Voor zover wettelijk toegestaan, is WeIT niet aansprakelijk voor indirecte of gevolgschade, met inbegrip van doch niet beperkt tot winstderving, omzetverlies, verlies van klanten, reputatieschade, verlies van data (behoudens de hierna vermelde uitzondering) of verlies van een zakelijke kans.

Uitzonderingen op de beperking/uitsluiting
De hierboven vermelde beperking en uitsluiting gelden niet in geval van:

bedrog of opzettelijke fout van WeIT;
zware fout, voor zover en in de mate een uitsluiting daarvan wettelijk niet is toegestaan;
lichamelijke schade of overlijden veroorzaakt door WeIT;
schending van de vertrouwelijkheidsverplichtingen (art. 48);
schending van privacyverplichtingen als verwerker (art. 18/AVG-GDPR), voor zover dwingend recht een beperking niet toestaat;
schending van intellectuele eigendomsrechten van de klant of derden.

In deze gevallen blijft WeIT aansprakelijk overeenkomstig het gemeen recht, onverminderd het recht van WeIT om zich te beroepen op de dekking van zijn beroeps-/cyberaansprakelijkheidsverzekering.

### 52. Vrijwaringen

Moet de klant je vrijwaren voor claims doordat hij geen toestemming had voor een pentest, onrechtmatige inhoud/data aanleverde, rechten van derden schond of jouw werk buiten de afgesproken scope gebruikte? Zijn wederzijdse vrijwaringen gewenst voor IP-inbreuken?

**Antwoord:**
Vrijwaring door de klant
De klant vrijwaart WeIT tegen alle aanspraken, vorderingen of schade van derden die voortvloeien uit:

het ontbreken van de vereiste toestemming/autorisatie van de klant (of van een derde partij die eigenaar/beheerder is van geteste systemen) voor het uitvoeren van de securityopdracht, overeenkomstig art. [33/rules of engagement];
onrechtmatige of niet-gemachtigde inhoud, data of materiaal dat de klant aan WeIT heeft aangeleverd of toegankelijk heeft gemaakt;
een schending van rechten van derden (o.a. intellectuele eigendom, privacy) door de klant, diens data, systemen of instructies;
gebruik van het door WeIT geleverde werk buiten de overeengekomen scope, doeleinden of licentievoorwaarden (bv. doorverkoop, gebruik voor een ander systeem dan getest, of gebruik na het verstrijken van een licentie).

Deze vrijwaring omvat de vergoeding van alle redelijke kosten die WeIT hierdoor oploopt, inclusief gerechtskosten en redelijke advocaatkosten.

Wederzijdse vrijwaring voor IP-inbreuk
Omgekeerd vrijwaart WeIT de klant tegen aanspraken van derden wegens inbreuk op intellectuele eigendomsrechten, voor zover deze inbreuk rechtstreeks voortvloeit uit het WeIT-basismateriaal (art. [IE, categorie A]) zoals opgeleverd door WeIT, met uitzondering van inbreuken die het gevolg zijn van:

materiaal, instructies of specificaties die de klant zelf heeft aangeleverd;
wijzigingen die de klant of een derde aan het geleverde werk heeft aangebracht zonder toestemming van WeIT;
gebruik van open-sourcecomponenten overeenkomstig hun eigen licentievoorwaarden (art. [IE, open source]).

### 53. Overmacht — **Vereist**

Welke gebeurtenissen wil je als overmacht behandelen (storing bij cloud/telecom/energie, cyberincident buiten redelijke controle, ziekte, overheidsmaatregel, oorlog, staking, ...)? Wanneer mag elke partij beëindigen als overmacht lang duurt?

**Antwoord:**
Definitie overmacht
Als overmacht wordt onder meer, doch niet uitsluitend, beschouwd: storingen bij cloud-, hosting- of telecomproviders buiten de redelijke controle van de betrokken partij; een cyberincident (bv. DDoS-aanval, ransomware, grootschalige inbraak) dat niet het gevolg is van een tekortkoming van de getroffen partij; energie- of internetuitval; ziekte of arbeidsongeschiktheid van de uitvoerende persoon bij WeIT (in de mate WeIT als eenmanszaak/kleine structuur geen onmiddellijke vervanging kan voorzien); overheidsmaatregelen, embargo's of sanctiewetgeving; oorlog, terrorisme of gelijkaardige veiligheidsdreiging; staking of collectieve actie bij een betrokken derde partij (bv. leverancier, transporteur); en elke andere gebeurtenis die redelijkerwijze buiten de controle van de betrokken partij valt en de uitvoering van de overeenkomst blijvend of tijdelijk onmogelijk maakt.

Gevolg tijdens overmacht
De partij die zich op overmacht beroept, stelt de andere partij daarvan zo snel mogelijk schriftelijk in kennis, met vermelding van de vermoedelijke duur. De verplichtingen van de getroffen partij worden opgeschort voor de duur van de overmacht, zonder recht op schadevergoeding voor de andere partij.

Beëindiging bij langdurige overmacht
Indien de overmachtssituatie langer dan 30 kalenderdagen onafgebroken aanhoudt, kan elke partij de overeenkomst (of het betreffende gedeelte ervan) schriftelijk en zonder rechterlijke tussenkomst beëindigen, zonder dat dit voor één van beide partijen recht geeft op enige schadevergoeding. Reeds gepresteerde en niet-betwiste prestaties tot op het moment van beëindiging blijven verschuldigd; niet-gebruikt urenkrediet wordt in dat geval pro rata terugbetaald, overeenkomstig art. [commercieel model — prijswijziging/einde dienstverlening].

### 54. Opschorting en beëindiging — **Vereist**

Wanneer mag elke partij opschorten of opzeggen? Denk aan wanbetaling, veiligheidsrisico, onrechtmatig gebruik, herhaalde contractbreuk, insolventie of langdurige overmacht. Is er een hersteltermijn? Wat gebeurt bij einde met openstaande facturen, lopend werk, licenties, accounts, kredieten, export en verwijdering van data?

**Antwoord:**


### 55. Portaalregels — **Vereist**

Welke regels moeten gelden voor het klantenportaal? Denk aan persoonlijk account, veilige wachtwoorden, geen delen van accounts, juiste uploads, geen schadelijke/onwettige bestanden, melding van misbruik, tijdelijke blokkering en beschikbaarheid van gegevens na einde contract.

**Antwoord:**
Opschorting of opzegging door WeIT
WeIT kan de uitvoering van de overeenkomst opschorten, of de overeenkomst met onmiddellijke ingang beëindigen, in geval van:

wanbetaling door de klant, na de procedure voorzien in art. [invordering — herinnering + ingebrekestelling];
een vastgesteld veiligheidsrisico voor WeIT, haar medewerkers of derden tijdens de uitvoering van de opdracht;
onrechtmatig of oneigenlijk gebruik door de klant van het door WeIT geleverde materiaal, buiten de overeengekomen scope of licentievoorwaarden;
herhaalde contractbreuk door de klant die niet binnen een hersteltermijn van 14 dagen na schriftelijke ingebrekestelling wordt verholpen;
kennelijk onvermogen, insolventie, faillissement, ontbinding of gelijkaardige procedure bij de klant;
overmacht die langer dan de in art. [overmacht] vermelde termijn aanhoudt.

Opzegging door de klant
De klant kan de overeenkomst beëindigen mits naleving van de toepasselijke opzegtermijn (art. [annulering/opzeg — kort- en langlopende opdrachten]), of onmiddellijk in geval van een aantoonbare zware fout van WeIT die niet binnen een hersteltermijn van 14 dagen na schriftelijke ingebrekestelling wordt verholpen.

Hersteltermijn
Behoudens de hierboven vermelde gevallen die onmiddellijke beëindiging toelaten (veiligheidsrisico, insolventie), krijgt de in gebreke blijvende partij steeds een hersteltermijn van 14 dagen na schriftelijke ingebrekestelling om de tekortkoming te verhelpen, vooraleer de andere partij tot beëindiging kan overgaan.

Gevolgen bij einde van de overeenkomst

Openstaande facturen: blijven onmiddellijk opeisbaar, ongeacht de reden van beëindiging.
Lopend werk: reeds gepresteerde, niet-betwiste tijd wordt gefactureerd tot en met de datum van beëindiging.
Licenties: elke gebruikslicentie op WeIT-basismateriaal (art. [IE, categorie A]) vervalt bij beëindiging, tenzij uitdrukkelijk anders overeengekomen; reeds overgedragen eigendom (art. [IE, categorie B]) blijft bij de klant.
Accounts en toegang: door WeIT gebruikte toegang tot klantsystemen wordt binnen een redelijke termijn na beëindiging verwijderd/gedeactiveerd door beide partijen in onderling overleg.
Kredieten: niet-gebruikt urenkrediet wordt afgehandeld overeenkomstig art. [commercieel model — terugbetaalbaarheid], behoudens beëindiging wegens een tekortkoming van de klant, in welk geval geen terugbetaling verschuldigd is.
Export en verwijdering van data: op verzoek van de klant, ingediend binnen 30 dagen na beëindiging, bezorgt WeIT een export van de voor de klant relevante data/documentatie/rapporten in een gangbaar formaat. Na deze termijn, of op uitdrukkelijk verzoek van de klant, verwijdert WeIT klantdata op veilige wijze, met uitzondering van gegevens die WeIT wettelijk verplicht is te bewaren (bv. boekhoudkundige stukken) of die onder de onbeperkte vertrouwelijkheidsplicht voor securitybevindingen vallen (art. [vertrouwelijkheid]).

### 56. Consumenten — **Alleen invullen als je B2C werkt**

Kunnen consumenten volledig op afstand een opdracht sluiten? Moet de uitvoering binnen de wettelijke herroepingstermijn starten en vraag je daarvoor uitdrukkelijk verzoek/erkenning? Hoe behandel je herroeping, wettelijke garanties, klachten en verplichte consumenteninformatie?

**Antwoord:**
geen consumenten

### 57. Klachten en geschillen — **Vereist**

Binnen welke termijn moeten factuurklachten en andere klachten worden gemeld, zonder dwingende rechten ongeldig te beperken? Wil je eerst overleg/bemiddeling verplicht proberen? Welke bevoegde rechtbank en eventueel arbitrage of bemiddelingsinstantie heeft je voorkeur?

**Antwoord:**

de standaard, voor Mortsel is dat Antwerpen denk ik

### 58. Wijziging van voorwaarden en communicatie — **Vereist**

Mogen voorwaarden voor toekomstige opdrachten worden gewijzigd door publicatie, en hoe worden wijzigingen voor lopende abonnementen/raamovereenkomsten aangekondigd? Welke kennisgevingen mogen per e-mail gebeuren? Vanaf wanneer geldt een e-mail als ontvangen?

**Antwoord:**
Wijziging van voorwaarden
WeIT kan haar algemene voorwaarden wijzigen. Voor nieuwe opdrachten die na de publicatiedatum worden aangegaan, gelden automatisch de op dat moment gepubliceerde voorwaarden.

Voor lopende abonnementen, raamovereenkomsten of doorlopende samenwerkingen, worden wijzigingen aan de klant meegedeeld met een voorafgaande kennisgeving van minstens 30 kalenderdagen vóór inwerkingtreding. Indien de klant niet akkoord gaat met een wezenlijke wijziging, kan deze de lopende overeenkomst binnen deze termijn schriftelijk opzeggen tegen de datum van inwerkingtreding, zonder dat dit een vervroegde beëindigingsvergoeding met zich meebrengt. Bij gebrek aan schriftelijk verzet binnen deze termijn, worden de gewijzigde voorwaarden geacht aanvaard te zijn.

Kennisgevingen per e-mail
Alle kennisgevingen, ingebrekestellingen, opzeggingen en andere mededelingen in het kader van de overeenkomst kunnen rechtsgeldig per e-mail gebeuren, gericht aan het door de klant opgegeven contactadres (of het adres van waaruit de klant gewoonlijk communiceert met WeIT), respectievelijk aan info@weit.be voor WeIT.

Moment van ontvangst
Een e-mail wordt geacht ontvangen te zijn op de eerste werkdag na verzending, tenzij de verzendende partij een bericht van niet-aflevering (bounce) ontvangt, in welk geval de kennisgeving niet geacht wordt te zijn gebeurd en opnieuw dient te worden verstuurd via een geldig adres.


### 59. Bestaande documenten en afspraken — **Vereist**

Zijn er bestaande offertes, contractmodellen, SLA's, DPA's, verzekeringsvoorwaarden of mondelinge commerciële afspraken waarmee de nieuwe teksten consistent moeten zijn? Geef de bestanden of vat de relevante clausules samen.

**Antwoord:**
neen

### 60. Gewenste toon en detailniveau

Wil je een compacte, menselijk leesbare tekst in de directe stijl van WeIT.be, of een uitgebreidere en formelere tekst? Zijn er voorwaarden die je absoluut wel of niet wilt opnemen?

**Antwoord:**
compacte, menselijk leesbare tekst in de directe stijl van WeIT.be

## Officiële referenties waarop de uiteindelijke teksten worden gebaseerd

- AVG/GDPR, in het bijzonder artikelen 12 tot en met 14: <https://eur-lex.europa.eu/eli/reg/2016/679/oj>
- Gegevensbeschermingsautoriteit over cookies en tracking: <https://www.gegevensbeschermingsautoriteit.be/professioneel/thema-s/cookies>
- FOD Economie over verplichte identificatiegegevens op bedrijfswebsites: <https://economie.fgov.be/nl/themas/online/elektronische-handel/verkoop-internet/bedrijfswebsite-en-accounts-op>
- FOD Economie over precontractuele informatie: <https://economie.fgov.be/nl/themas/verkoop/contracten/precontractuele-informatie>

