import emailjs from "@emailjs/browser";

const SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;

const TEMPLATE_CONTACT =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;

const TEMPLATE_REPLY =
  process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID!;

const PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

export async function sendContactMail(data: {
  from_name: string;
  reply_to: string;
  subject: string;
  message: string;
}) {
  // Mail reçu par Sébastien
  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_CONTACT,
    data,
    PUBLIC_KEY
  );

  // Réponse automatique au visiteur
  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_REPLY,
    data,
    PUBLIC_KEY
  );
}