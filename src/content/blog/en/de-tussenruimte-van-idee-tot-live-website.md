---
title: "De Tussenruimte: from idea to live website"
category: "development / case"
year: 2026
date: 2026-10-10
summary: "How a website for a starting sole proprietorship came together: from taste and preferences to vanilla HTML/CSS, Decap CMS, GDPR-compliant tracking, password hygiene and an A+ on Mozilla's HTTP Observatory."
---

De Tussenruimte was a particularly enjoyable project with its own specific challenges. It had to be a website with the lowest possible running costs, given that we were talking about a sole proprietorship that was just starting out. The short version is in the [projects](/en/projects/de-tussenruimte); here I'll take you through the full journey.

## From preferences to first draft

To get a sense of taste and preferences, the first question was simple but targeted: send me a few websites you like and describe in a few words what you like about them - layout, typeface, colour palette and so on.

Once Liesbeth had made a selection, we scheduled a short meeting to go through it together. It may sound old-fashioned, but in a meeting like that you can switch back and forth very quickly, turn what you hear into small suggestions, read reactions and pin down where the real preferences and priorities lie. And that was exactly the result: I had a clear picture of the direction Liesbeth wanted to take.

After some digging for stock photos as mood images - that simply presents much better than placeholders - the first draft was ready fairly quickly. I'm aware it won't always go this way, but that first draft hit the mark straight away.

The stock photos were replaced by professional photography, Liesbeth supplied the copy, and in the meantime I dove into the code, looked at hosting options and laid out the basic roadmap.

## The roadmap

### GitHub - ownership of the code

The code I wrote lives on Liesbeth's own GitHub account, where I was added as a collaborator. That way she owns the code and doesn't need my approval to make changes herself or have them made.

### Netlify - hosting

The website is deployed from GitHub to Netlify. Netlify offers quite a few tools on its free tier, and here too we use an account in Liesbeth's name, so that she has full control at the end of the day.

### Domain registration

The registrar for the domain name was chosen on these criteria:

- a low initial registration cost;
- the option to take only the domain name, without extra services;
- a low renewal cost.

After a short comparison, **mijn.host** came out as one of the better options for the chosen domain name.

Other choices were no doubt made at this stage, but these are the most important ones.

## The tech stack - simple but deliberate

One conscious choice I'd like to explain: the entire site is built in **vanilla HTML and CSS**, without a JavaScript framework. For a static website of this size, that's the most performant and maintainable choice. No unnecessary overhead, no framework updates that can break things - just fast, clean code.

Still, there are a few interesting techniques under the hood that make the whole thing a lot smarter:

### Data injection via JSON

All copy is loaded dynamically through `data-cms` attributes in the HTML. Changing copy therefore never requires editing the HTML directly - a separation that is extremely handy when a CMS manages the content.

### Static blog pages

A Node.js build script reads Markdown files and automatically generates an HTML page per blog post, including a JSON index for the blog overview page. Static, fast and no server required.

### Testimonial carousel

Entirely in vanilla JavaScript, with dot indicators, previous/next buttons and circular navigation - and filterable by type of service.

### Sticky navigation

Transparent at the top of the page, solid when scrolling. A subtle detail that adds a lot to the look and feel.

For the design, the choice fell on **Cormorant Garamond** - an elegant serif - for the headings, combined with **Jost**, a modern sans-serif, for body text. The colour palette in warm earth tones (cream, sand, sage, stone) reinforces the sense of calm and warmth that fits Liesbeth's brand.

Self-hosted fonts in WOFF2 keep load times sharp, and images are served as WebP with a JPG fallback and, where it makes sense, only loaded once they come into view (lazy loading).

## Blog and content management

On my side came the suggestion to work with blog posts. Regularly publishing an article about your field shows both search engines and visitors who you are, what you can do and how you think. Used well, that has a positive effect on both your findability and your credibility with potential clients.

To make the blog manageable on her own, I chose **Decap CMS** (formerly Netlify CMS). But I didn't limit it to the blog posts. I set it up so that Liesbeth can manage the **entire content of her site** herself, without having to call on me: copy, services, testimonials, blog posts, images - everything, and without in-depth technical knowledge. All git-backed, all through a user-friendly interface, all in her own hands.

## Calendly and the contact flow

Liesbeth already knew Calendly as a possible "book an appointment" tool, so it was integrated into the site. In the end Calendly was taken out again and we chose to work only with "send a message".

The contact page runs on **Netlify Forms**, with honeypot protection against spam, an optional newsletter sign-up and a privacy-friendly setup.

## GDPR and cookie consent

Integrating Google Tag Manager called for a proper approach to privacy. The choice fell on **Klaro**, an open source consent manager. Klaro holds back Google Ads tracking and analytics until the visitor explicitly consents, fully in line with the GDPR. No tracking without consent - it's that simple.

## An unexpected side track: password hygiene

During this project, login details were sent back and forth here and there. Not only how those passwords were put together, but also the way they were exchanged, revealed a thing or two about password hygiene. As an ethical hacker I couldn't resist pointing this out to Liesbeth, and I immediately showed her the importance of:

- **never** reusing passwords;
- not making up passwords yourself, but using the **password generator** of a password manager;
- using a **password manager** in the first place.

Personally I use Proton Pass, although a switch to **1Password** is definitely on the cards, because of its extensive options for managing API keys and referencing stored keys directly from your code.

By the end of the project, Liesbeth had a fully populated password manager, with all credentials tagged so they're easy to find, and she was comfortable using it.

## Security - an A+ nobody asked for

The website is now live and delivering the desired results. But I'd like to dwell for a moment on something that wasn't asked for, but that I couldn't leave alone.

Both the **CSP (Content Security Policy)** and the other security headers initially had an excellent score. To make Google Tag Manager work, I unfortunately had to be a touch less strict - but on [Mozilla's HTTP Observatory](https://developer.mozilla.org/en-US/observatory) the site still gets an **A+ with a score of 115/100**.

<figure>
  <img src="/blog/de-tussenruimte/observatory-score.webp" alt="Mozilla HTTP Observatory report for de-tussenruimte.be: grade A+, score 115/100, 11 of 12 tests passed" width="1285" height="740" loading="lazy" />
  <figcaption>Mozilla HTTP Observatory, scan of 10 October 2026.</figcaption>
</figure>

How exceptional that is shows in the Observatory's own benchmark: of all sites scanned over the past year, only a very small share gets an A+. The vast majority ends up at a D or F.

<figure>
  <img src="/blog/de-tussenruimte/observatory-benchmark.webp" alt="Bar chart from Mozilla HTTP Observatory showing the number of scanned websites per grade over the past year: a narrow bar at A+, the tallest bars at D, D- and F" width="1282" height="465" loading="lazy" />
  <figcaption>Distribution of grades across all websites scanned over the past year.</figcaption>
</figure>

Liesbeth didn't ask for it; it's a matter of personal pride. As an ethical hacker I can't do anything other than deliver a well-secured product. Want to know how your own website or application holds up? That's exactly what I do in [security](/en/security).

## Conclusion

As I said, it was a particularly enjoyable project and a very good exercise in turning a client's idea into a working end product. From a first conversation about taste and preferences, through technical choices, the CMS setup and password hygiene, to a live website that presents her services - life coaching, career coaching, entrepreneur coaching and retreats - clearly and warmly. The full journey.

Need a website or tool yourself that you fully own afterwards? Read more about [development](/en/development) or [get in touch](/en/contact).

[**De Tussenruimte**](https://de-tussenruimte.be) - for life, career and entrepreneurship, in Antwerp and online.
