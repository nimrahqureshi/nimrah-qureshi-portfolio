import express from 'express';
import Lead from '../models/Lead.js';
import { writeLimiter } from '../middleware/limiters.js';
import { isEmail, clampStr, escapeHTML, asPlainString } from '../middleware/validate.js';

const router = express.Router();

/**
 * POST /api/contact — public contact form.
 * Server-side validation mirrors the client, inputs are length-capped and
 * HTML-escaped before being interpolated into notification emails.
 */
router.post('/', writeLimiter, async (req, res, next) => {
  try {
    // Honeypot: bots that fill the hidden field get a fake success.
    if (asPlainString(req.body.website)) {
      return res.status(201).json({ message: 'Message received successfully!' });
    }

    const name = clampStr(asPlainString(req.body.name), 100);
    const email = clampStr(asPlainString(req.body.email), 254).toLowerCase();
    const company = clampStr(asPlainString(req.body.company), 150);
    const subject = clampStr(asPlainString(req.body.subject), 150);
    const projectType = clampStr(asPlainString(req.body.projectType), 60);
    const budget = clampStr(asPlainString(req.body.budget), 60);
    const message = clampStr(asPlainString(req.body.message), 5000);

    if (name.length < 2) return res.status(400).json({ message: 'Please enter your name.' });
    if (!isEmail(email)) return res.status(400).json({ message: 'Please enter a valid email address.' });
    if (message.length < 10)
      return res.status(400).json({ message: 'Please tell me a little more about your project (at least 10 characters).' });

    const lead = await Lead.create({ name, email, company, subject, projectType, budget, message, source: 'website' });

    // Emails are best-effort; a mail failure never fails the submission.
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);
        const e = { name: escapeHTML(name), email: escapeHTML(email), company: escapeHTML(company),
          subject: escapeHTML(subject), budget: escapeHTML(budget),
          message: escapeHTML(message).replace(/\n/g, '<br/>') };

        await resend.emails.send({
          from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
          to: process.env.CONTACT_EMAIL || 'nimrahqureshi13@gmail.com',
          subject: `New Lead: ${name.slice(0, 60)}${subject ? ` — ${subject.slice(0, 60)}` : ''}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${e.name}</p>
            <p><strong>Email:</strong> ${e.email}</p>
            <p><strong>Company:</strong> ${e.company || 'N/A'}</p>
            <p><strong>Subject:</strong> ${e.subject || 'N/A'}</p>
            <p><strong>Budget:</strong> ${e.budget || 'N/A'}</p>
            <p><strong>Message:</strong></p><p>${e.message}</p>`,
        });

        await resend.emails.send({
          from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
          to: email,
          subject: 'Thank you for reaching out!',
          html: `
            <h2>Thank you for contacting me!</h2>
            <p>Hi ${e.name},</p>
            <p>I've received your message and will get back to you within 24 hours.</p>
            <p>In the meantime, feel free to check out my portfolio and case studies.</p>
            <br/><p>Best regards,</p><p>Nimrah Qureshi</p><p>AI Engineer &amp; Full-Stack Developer</p>`,
        });
      } catch (emailError) {
        console.error('Email sending failed:', emailError.message);
      }
    }

    // Return only what the client needs — not the full DB document.
    res.status(201).json({
      message: 'Message received successfully! I will get back to you within 24 hours.',
      lead: { _id: lead._id },
    });
  } catch (err) {
    next(err);
  }
});

export default router;
