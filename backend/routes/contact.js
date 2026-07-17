import express from 'express';
import Lead from '../models/Lead.js';

const router = express.Router();

// Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, company, projectType, budget, message } = req.body;

    // Save lead to database
    const lead = await Lead.create({
      name,
      email,
      company,
      projectType,
      budget,
      message,
      source: 'website',
    });

    // Send confirmation email via Resend
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);

        // Send notification to admin
        await resend.emails.send({
          from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
          to: process.env.CONTACT_EMAIL || 'nimrahqureshi013@gmail.com',
          subject: `New Lead: ${name} - ${projectType || 'General Inquiry'}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || 'N/A'}</p>
            <p><strong>Project Type:</strong> ${projectType || 'N/A'}</p>
            <p><strong>Budget:</strong> ${budget || 'N/A'}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
        });

        // Send confirmation to lead
        await resend.emails.send({
          from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
          to: email,
          subject: 'Thank you for reaching out!',
          html: `
            <h2>Thank you for contacting me!</h2>
            <p>Hi ${name},</p>
            <p>I've received your message and will get back to you within 24 hours.</p>
            <p>In the meantime, feel free to check out my portfolio and case studies.</p>
            <br/>
            <p>Best regards,</p>
            <p>Nimrah Qureshi</p>
            <p>AI Engineer & Full-Stack Developer</p>
          `,
        });
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Don't fail the request if email fails
      }
    }

    res.status(201).json({
      message: 'Message received successfully! I will get back to you within 24 hours.',
      lead,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
