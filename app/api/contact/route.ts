import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, company, email, service, budget, vision } = body;

        const data = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>', // Using the default resend test domain
            to: ['annasalami31@gmail.com'], // Deliver straight to Hannah's email
            subject: `New Inquiry from ${name}`,
            text: `
You have a new inquiry from your website!

Name: ${name}
Company: ${company || 'N/A'}
Email: ${email}

Service of Interest: ${service}
Budget Range: ${budget}

Project Vision:
${vision}
            `,
        });

        if (data.error) {
            return NextResponse.json({ success: false, error: data.error }, { status: 500 });
        }

        return NextResponse.json({ success: true, data: data.data });
    } catch (error) {
        return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
    }
}
