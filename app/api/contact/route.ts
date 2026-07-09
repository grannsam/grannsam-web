import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: "Kontakt <info@grannsam.nu>", // MÅSTE vara verifierad i Resend!
      to: ["info@grannsam.nu"],
      replyTo: email, // Här lägger du besökarens mejl så du kan svara dem
      subject: `Nytt meddelande från ${name}`,
      text: message,
    });

    if (error) {
      // Om Resend nekar, returnera felet istället för att krascha funktionen
      return Response.json({ error }, { status: 400 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    // Fångar upp dolda fel (t.ex. nätverksproblem eller saknade API-nycklar)
    return Response.json(
      { error: "Något gick snett internt" }, 
      { status: 500 }
    );
  }
}