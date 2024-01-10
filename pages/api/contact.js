import { Resend } from "resend";

export default async function handler(req, res) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  console.log("SENDING EMAIL");
  if (req.method === "POST") {
    try {
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "eihsan94@gmail.com",
        subject: "Got Freelancing Gig",
        html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              text-align: center;
            }
            .invitation-container {
              height: 100vh;
              padding: 20px;
              font-family: Arial, sans-serif;
            }
            .invitation-title {
              font-size: 18px;
              font-weight: bold;
              margin-bottom: 20px;
            }
            .invitation-message {
              font-size: 16px;
              line-height: 1.5;
              margin-bottom: 20px;
            }
          </style>
        </head>
        <body>
          <div class="invitation-container">
            <h1 class="invitation-title">Reset Your Password!</h1>
            <p class="invitation-message">
            <div>
            Hey we got freelancing gig from our website. Here are the details:
            </div>
            <div>
            Name: ${req.body.name}
            </div>
            <div>
            Email: ${req.body.email}
            </div>
            <div>
            Phone: ${req.body.phone}
            </div>
            <div>
            Message:
            </div>
            <p>
              ${req.body.msg}
            </p>
          </div>
        </body>
      </html>
    `,
      });
      res.status(200).json({ message: "success" });
    } catch (error) {
      res.status(422).json({ message: error.stack });
    }
  } else {
    res.status(404).json({ statusText: "not found" });
  }
  return res;
}
