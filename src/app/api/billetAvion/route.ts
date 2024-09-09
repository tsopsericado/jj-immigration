import { type NextRequest, NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
    const { nom, prenom, email, typeVoyage, villeDepart, villeArrivee, typeBillet, dateDepart, dateRetour, adultes, jeunes, enfants, bebes } = await request.json();
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
        to: "info@jj-immigrations.com",
        subject: `Demande d'achat de billet d'avion ${name} ${prenom}`,
        html: `
    <div>
    <h1>Reservation de billet pour Mr/Mme ${nom}</h1>
      
      <pNom et prenom: <b>${nom} ${prenom}</b></p>
      <p>Type de voyage: <b>${typeVoyage}</b></p>
      <p>Ville départ: <b>${villeDepart}</b></p>
      <p>Ville d'arrivé: <b>${villeArrivee}</b></p>
      <p>Type de billet: <b>${typeBillet}</b></p>
      <p>Date de départ: <b>${dateDepart}</b></p>
      <p>Date de retour: <b>${dateRetour}</b></p>
      <p>Nombre d'adulte: <b>${adultes}</b></p>
      <p>Nombre de jeune: <b>${jeunes}</b></p>
      <p>Nombre d'enfant: <b>${enfants}</b></p>
      <p>Nombre de bébés: ${bebes}</p>
    </div>
    `,
    };

    const sendMailPromise = () =>
        new Promise<string>((resolve, reject) => {
            transporter.sendMail(mailOptions, (err) => {
                if (!err) {
                    resolve('Email sent');
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