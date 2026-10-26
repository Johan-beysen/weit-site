---
title: "Can I guess your password?"
category: "security / passwords"
year: 2026
date: 2026-10-13
summary: "How an innocent chat and a bit of searching are enough to guess your password, and five rules to prevent it: unique, random, a password manager, MFA and nothing in a Word file."
---

## An innocent chat

Say we meet somewhere and start talking. Nothing special, just some casual small talk. Before you know it, I have a full inventory of possible building blocks for your password.

To name a few: your town and postcode, where you were born, the names of your children and your pets, your favourite football club, your favourite dish. And I could go on.

Then a few searches online. With a bit of luck, you've posted some strong candidates on social media yourself: your date of birth, your wedding day, your eldest's birthday.

Next, I make a list:

- initials of 2, 3 or 4 letters, taken from the names I found;
- number sequences after them, from 123 and 1234 to 12345;
- combinations of the dates above (1985, 0412, 04121985 ...);
- capitals in the obvious places, some punctuation in between, and definitely a '!' at the end.

I feed those elements into a program that automatically generates every combination. The result: a list of thousands, maybe hundreds of thousands of passwords, which a computer runs through in no time. That, by the way, is how a good wordlist for a brute-force attack\* is built in practice.

How likely is it that your password is on it?

*\* A wordlist is a list of possible passwords that a script or program tries one by one. On a login page that happens at tens to hundreds of attempts per second, at least if the site doesn't build in blocking or delays. If an attacker has a leaked database of encrypted (hashed) passwords, they test offline: an ordinary gaming computer with a good graphics card then manages billions of attempts per second against weakly protected passwords.*

## I, too, thought I was doing fine

Let's be honest: we humans are very bad at making up passwords. Especially when we have to change them every so often, because then Summer2024! simply becomes Autumn2024!.

Before I got into cybersecurity, I had three standard passwords:

1. one for social media, email and everything that didn't seem that important;
2. one for somewhat more sensitive things;
3. one for banking and the like.

I was genuinely convinced I was doing fine. With that system, surely my password hygiene was excellent?

Until I looked those passwords up in leaked databases. Sure enough: all three leaked. Even the last one.

One hacker willing to try them, that's all it would have taken to get to even my most sensitive data.

Sound familiar? Then keep reading, because here's how to do it right.

## Five rules for better passwords

### Rule 1: never reuse a password

Passwords leak all the time, including at large, well-known companies. If you use a different password everywhere, a leak only affects that one account. Everything else stays safe.

### Rule 2: don't make up your passwords yourself

We humans simply aren't good at randomness. The chance that a self-invented password is predictable in one way or another is enormous. Let a tool generate truly random passwords, preferably at least 16 characters long.

There's one exception: the master password of your password manager (see rule 3). That one you do have to remember yourself. Choose a long passphrase of four or five random, unrelated words, for example umbrella-stove-zebra-mustard-train. No line from a song, no names, no dates.

### Rule 3: use a password manager

Don't try to remember all those passwords yourself; store them in a password manager. Then you only need to know one strong password.

- **Less digitally inclined?** Use the password manager built into your browser, such as the one in Chrome, Edge, Firefox or Safari. That alone is a huge step forward.\*\*
- **Comfortable enough with tech?** Choose a dedicated password manager, such as Bitwarden, 1Password or KeePassXC. It works across all your devices and browsers.

*\*\* Yes, passwords stored in your browser can be retrieved by someone who already has access to your computer. But they're still a thousand times safer than reused, self-invented passwords that are easy to remember.*

Let your password manager suggest new passwords too. That way you follow rule 2 without even thinking about it. An added bonus: a password manager won't fill in your password on a fake phishing site that looks just slightly different from the real one.

### Rule 4: turn on MFA/2FA wherever you can

With two-step verification (MFA or 2FA), your password alone isn't enough for a hacker: they also need a code or confirmation on your phone. Turn it on for your most important accounts, and definitely for your mailbox.

Why your mailbox? Your email address is used to reset passwords. Whoever has access to your mailbox therefore has access to all your accounts.

Where possible, choose an authenticator app (such as Microsoft Authenticator, Google Authenticator or your password manager) or a passkey instead of a code by text message. And keep the recovery codes you get during setup.

### Rule 5: don't store your passwords anywhere else

Don't put your passwords in a Word document, an Excel file or a note on your phone. If you do want to keep something separately, such as your master password or your recovery codes, don't do it digitally: write or print it and keep it in a safe place at home. The chance that a hacker gets into your home first is much smaller than the chance they get into your computer.

## Start today

You don't have to change everything in one evening. Start with what matters most:

- Check on [haveibeenpwned.com](https://haveibeenpwned.com) whether your email address appears in a known data breach.
- Install a password manager or activate the one in your browser.
- Give your mailbox a new, unique password and turn on MFA.
- Then do the same for your bank, your social media and your webshops.
- Replace the rest each time you log in somewhere.

In a next post I'll explain exactly how a password manager works, and why it actually makes your life easier rather than harder.

**Running a business yourself?** Keep in mind that any of your employees could be this story too. One reused password, one leak at a webshop, and an attacker is in your mailbox or on your network.

Want to know where your company stands? [Request your Cybersecurity Plan.](https://weit.be/cyberveiligheidsplan/)
