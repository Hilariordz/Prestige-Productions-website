import { getDatabasePool } from "@/lib/db";

type ContactRequest = {
  name?: unknown;
  email?: unknown;
  eventDate?: unknown;
  message?: unknown;
};

const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 254;
const MAX_DATE_LENGTH = 50;
const MAX_MESSAGE_LENGTH = 5000;

function readText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return email.length <= MAX_EMAIL_LENGTH && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: ContactRequest;

  try {
    body = (await request.json()) as ContactRequest;
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = readText(body.name);
  const email = readText(body.email);
  const eventDate = readText(body.eventDate);
  const message = readText(body.message);

  if (
    !name ||
    name.length > MAX_NAME_LENGTH ||
    !isValidEmail(email) ||
    !eventDate ||
    eventDate.length > MAX_DATE_LENGTH ||
    !message ||
    message.length > MAX_MESSAGE_LENGTH
  ) {
    return Response.json(
      { error: "Please provide valid contact information and message." },
      { status: 400 },
    );
  }

  try {
    await getDatabasePool().execute(
      "INSERT INTO contact_submissions (name, email, event_date, message) VALUES (?, ?, ?, ?)",
      [name, email, eventDate, message],
    );
  } catch (error) {
    console.error("Failed to save contact submission.", error);
    return Response.json(
      { error: "Unable to send your message right now. Please try again later." },
      { status: 500 },
    );
  }

  return Response.json({ message: "Your message has been sent." }, { status: 201 });
}
