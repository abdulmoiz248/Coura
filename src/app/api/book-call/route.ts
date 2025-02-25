import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request){
    const body = await req.json()
    if(body.subject){
      sendMailContact(body.name, body.email,body.subject,body.message);
      console.log("returning")
      return NextResponse.json({success:true, message: 'successfully sent message!'},{status:200})
  
    }
      sendMail2Client(body.name, body.email);
      sendMail(body.name, body.email,body.phone,body.company,body.message);
      console.log("returning")
      return NextResponse.json({success:true, message: 'Call booked successfully!'},{status:200})
  
  
}
async function sendMail2Client(name: string, email: string) {
  const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD, 
    },
  });

  const mailOptions = {
    from: '"Coura" <coura.tech@gmail.com>',
    to: email,
    subject: 'Your Call with Coura is Confirmed!',
    text: `Dear ${name},\n\nThank you for reaching out! Your call with Coura has been booked.\n\nWe will share the time details with you shortly.\n\nBest regards,\nThe Coura Team`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

async function sendMail(name: string, email: string, phone: string, company: string, message: string) {
    const transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD, 
        },
      });
    
      const mailOptions = {
        from: '"Coura" <coura.tech@gmail.com>',
        to: 'moiz20920@gmail.com',
        subject: 'Call with Coura client!',
        text: `Name: ${name}   Email: ${email}   Phone: ${phone}   Company: ${company}   Message: ${message}`,
      };
    
      try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully!');
      } catch (error) {
        console.error('Error sending email:', error);
      }
    }

async function sendMailContact(name: string, email: string, subject:string, message: string) {
      const transporter = nodemailer.createTransport({
          service: 'gmail', 
          auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD, 
          },
        });
      
        const mailOptions = {
          from: '"Coura" <coura.tech@gmail.com>',
          to: 'moiz20920@gmail.com',
          subject: 'Someone Contacted!',
          text: `Name: ${name}   Email: ${email}   Subject: ${subject}    Message: ${message}`,
        };
      
        try {
          await transporter.sendMail(mailOptions);
          console.log('Email sent successfully!');
        } catch (error) {
          console.error('Error sending email:', error);
        }
      }