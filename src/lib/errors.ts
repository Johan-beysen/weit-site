// Foutmeldingen naar de gebruiker: nooit de ruwe tekst van Supabase/Postgres
// tonen (die kan tabel-, kolom- of constraintnamen en andere interne details
// lekken). De echte fout gaat naar de serverlog (Cloudflare Workers logs),
// de gebruiker krijgt een vaste Nederlandse melding.

const bekendeCodes: Record<string, string> = {
  // Supabase Auth (AuthError.code)
  weak_password: 'Dit wachtwoord is te zwak. Kies een langer of minder voorspelbaar wachtwoord.',
  same_password: 'Kies een ander wachtwoord dan je huidige.',
  email_exists: 'Er bestaat al een account met dit e-mailadres.',
  user_already_exists: 'Er bestaat al een account met dit e-mailadres.',
  over_email_send_rate_limit: 'Te veel e-mails op korte tijd verstuurd. Probeer het later opnieuw.',
  over_request_rate_limit: 'Te veel pogingen op korte tijd. Probeer het later opnieuw.',
  session_expired: 'Je sessie is verlopen. Meld je opnieuw aan.',
  otp_expired: 'Deze link is ongeldig of verlopen. Vraag een nieuwe aan.',
  // Postgres (PostgrestError.code)
  '23505': 'Dit item bestaat al.',
  '23503': 'Dit item verwijst naar iets dat niet (meer) bestaat.',
  '23502': 'Niet alle verplichte velden zijn ingevuld.',
  '22P02': 'Een van de ingevulde waarden heeft een ongeldig formaat.',
};

export function veiligeFoutmelding(
  fout: unknown,
  context: string,
  standaard = 'Er ging iets mis. Probeer het opnieuw of neem contact op.',
): string {
  const code = (fout as { code?: unknown } | null)?.code;
  const bericht = (fout as { message?: unknown } | null)?.message;
  console.error(`[${context}]`, code ?? '-', bericht ?? fout);
  return (typeof code === 'string' && bekendeCodes[code]) || standaard;
}
