import express from "express";
import { createServer } from "vite";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);
const email_destinatario = process.env.EMAIL_DESTINATARIO;

const app = express();
app.use(express.json());
const PORT = 3000;

async function startServer() {
  const vite = await createServer({
    server: { middlewareMode: true },
  });

  app.post("/api/send", async (req, res) => {

    const body = await req.body;

    const { email, subject, message } = body;
    
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: email_destinatario,
      subject: `${subject} - From: ${email}`,
      html: `<strong>${message}</strong>`,
    });

    res.status(200).json({ data });
  });

  app.use(vite.middlewares);

  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}

startServer();