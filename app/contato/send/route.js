import { NextResponse, NextRequest } from 'next/server';

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SG_API);

export async function POST(req) {
    const body = await req.json() 
    const message = `<div style="max-width: 500px">
            <div style="padding: 25px; background: #F6F6F6; text-align: center; ">
                <a style="text-decoration: none; color:#A1A2B3"><img src="https://i.imgur.com/6GvnyrO.png" style="height: 40px; width: auto;"/></a>
            </div>
            <div style="background: #26262E; padding: 50px 25px">
              <p style="text-align: start; color: white; font-weight:bold; font-size: 32px; margin-bottom:20px; ">
                Nova mensagem
              </p>
                <div style="color: #A1A2B3; text-decoration: none;">
                    <p style="color: #A1A2B3; text-decoration: none;">Nome <strong>${body.name}</strong></p>
                    <p style="color: #A1A2B3; text-decoration: none;">Site <strong>${body.site}</strong></p>
                    <p style="color: #A1A2B3; text-decoration: none;">Email <strong>${body.mail}</strong></p>
                    <p style="color: #A1A2B3; text-decoration: none;">Telefone <strong>${body.phone}</strong></p>
                    <p style="color: #A1A2B3; text-decoration: none;">Serviço <strong>${body.service}</strong></p>
                    <p style="color: #A1A2B3; text-decoration: none;">Computadores <strong>${body.computers}</strong></p>
                    <p style="color: #A1A2B3; text-decoration: none;">Mensagem <strong>${body.message}</strong></p>
                </div>
            </div>
        </div>`;

    const data = {
        to: 'bernardojbraga@gmail.com',
        from: 'hokup Mailer <mail@hokup.com.br>',
        subject: `hokup - Contato de <${body.mail}>`,
        text: 'hokup',
        html: message
    }

    // sgMail.send(data);

    return NextResponse.json({ status: "ok" })
}
