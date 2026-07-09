export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    console.error("KONFIGURATIONSFEL: Saknar miljövariabler för Resend.");
    return NextResponse.json(
      { error: "Konfigurationsfel på servern." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch (parseError) {
    console.error("400 FEL: Misslyckades med att tolka JSON i requesten.", parseError);
    return NextResponse.json({ error: "Ogiltig förfrågan (JSON-fel)." }, { status: 400 });
  }

  const fields = parseContactBody(body);
  if (!fields) {
    console.error("400 FEL: parseContactBody returnerade null. Body var inte ett objekt:", body);
    return NextResponse.json({ error: "Ogiltig förfrågan (Felaktig datastruktur)." }, { status: 400 });
  }

  const errors = validateContactForm(fields);
  // FIX: Kontrollera om objektet faktiskt innehåller några fel, 
  // eftersom ett tomt objekt {} annars utvärderas till true.
  if (errors && Object.keys(errors).length > 0) {
    console.error("400 FEL: Valideringen misslyckades. Följande fel hittades:", errors);
    return NextResponse.json(
      { error: "Validering misslyckades.", errors },
      { status: 400 }
    );
  }

  try {
    const email = buildContactEmail(fields);
    const resend = new Resend(apiKey);
    
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email.replyTo,
      subject: email.subject,
      text: email.text,
      html: email.html,
    });

    if (error) {
      console.error("502 FEL: Resend nekade utskicket:", error);
      return NextResponse.json(
        { error: "Kunde inte skicka meddelandet via e-posttjänsten." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });

  } catch (serverError) {
    console.error("500 INTERNT FEL: Något gick snett under e-postbygget eller Resend-anropet:", serverError);
    return NextResponse.json(
      { error: "Ett internt fel uppstod på servern." },
      { status: 500 }
    );
  }
}