import { NextResponse } from "next/server";

const TO_EMAIL =
  process.env.ASSESSMENT_TO_EMAIL ?? "matthew.reed018@gmail.com";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  city?: string;
  sqft?: string;
  propertyType?: string;
  message?: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const city = body.city?.trim() ?? "";
  const sqft = body.sqft?.trim() ?? "";
  const propertyType = body.propertyType?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !phone || !city) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 },
    );
  }

  if (!isEmail(email)) {
    return NextResponse.json({ error: "Enter a valid email." }, { status: 400 });
  }

  const subject = `REC Assessment Request — ${name} (${city})`;

  // FormSubmit delivers to the inbox with no SMTP secrets required.
  // First use: Matt must click the one-time activation link FormSubmit emails him.
  const upstream = await fetch(`https://formsubmit.co/ajax/${TO_EMAIL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      phone,
      city,
      sqft: sqft || "(not specified)",
      propertyType: propertyType || "(not specified)",
      message: message || "(no message)",
      _replyto: email,
      _subject: subject,
      _template: "table",
      _captcha: "false",
    }),
  });

  let upstreamJson: { success?: string | boolean; message?: string } = {};
  try {
    upstreamJson = (await upstream.json()) as typeof upstreamJson;
  } catch {
    // ignore parse errors; status code still used below
  }

  if (!upstream.ok) {
    console.error("[contact] FormSubmit error", upstream.status, upstreamJson);
    return NextResponse.json(
      {
        error:
          "Could not send the request right now. Please try again, or email matthew.reed018@gmail.com directly.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
