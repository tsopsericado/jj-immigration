import { type NextRequest, NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { email, name, surname, message, tel, ville, entreprise } = await request.json();
  console.log("entreprise", entreprise)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL,
      pass: process.env.NEXT_PUBLIC_APP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const mailOptions: Mail.Options = {
    from: email,
    to: "info@jj-immigration.com",
    subject: `Mr/Mme ${name} souhaite entrer en contact`,
    html: `
    <div>
      <h1>Voici les informations relatives</h1>
      <br>
      <h2>Nom et prenom: <b>${name} ${surname}</b></h2>
      <p>Ville: <b>${ville}</b></p>
      <p>Telephone: <b>${tel}</b></p>
      <p>Nom de l'entreprise: <b>${entreprise}</b></p>
      <p>Voici le message: ${message}</p>
      <h2>Mr/Mme ${name} souhaite entrer en contact avec JJ-immigration international</h2>
      <p>Repondre: <b><a href ="mailto:${email}">${email}</a></b></p>
    </div>
    `,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transporter.sendMail(mailOptions, (err) => {
        if (!err) {
          resolve('Email sent');
          console.log('email sent from route.ts')
        } else {
          // console.log('an error occured', err.message)
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent', status: 500 });
  } catch (err) {
    // console.log('from route', err)
    return NextResponse.json({ error: err }, { status: 500 });
  }
}