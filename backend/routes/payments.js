import express from 'express';
import Stripe from 'stripe';

const router = express.Router();

const stripe = process.env.STRIPE_SECRET_KEY ? new Stripe(process.env.STRIPE_SECRET_KEY) : null;

/**
 * Prices live on the SERVER, keyed by plan id. The client only ever sends a
 * planId — never an amount — so the amount cannot be tampered with.
 * Must stay in sync with src/data/pricing.ts.
 */
const PLAN_PRICES_USD_CENTS = {
  starter: 299900,
  business: 799900,
  professional: 1499900,
  enterprise: null, // custom quote — not purchasable via checkout
};

router.post('/create-payment-intent', async (req, res, next) => {
  try {
    if (!stripe) {
      return res.status(503).json({ message: 'Payment service not configured' });
    }
    const planId = typeof req.body.planId === 'string' ? req.body.planId : '';
    const amount = PLAN_PRICES_USD_CENTS[planId];
    if (!amount) {
      return res.status(400).json({ message: 'Unknown or non-purchasable plan.' });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      metadata: { planId },
      automatic_payment_methods: { enabled: true },
    });

    res.json({ clientSecret: paymentIntent.client_secret, paymentIntentId: paymentIntent.id });
  } catch (err) { next(err); }
});

/**
 * Stripe webhook handler. Exported separately and mounted in server.js with
 * express.raw() BEFORE the global JSON parser — constructEvent requires the
 * raw request body for signature verification.
 */
export async function stripeWebhook(req, res) {
  const sig = req.headers['stripe-signature'];
  if (!stripe || !process.env.STRIPE_WEBHOOK_SECRET) {
    return res.status(503).json({ message: 'Webhook not configured' });
  }
  try {
    const event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
    switch (event.type) {
      case 'payment_intent.succeeded':
        console.log('Payment succeeded:', event.data.object.id);
        break;
      case 'payment_intent.payment_failed':
        console.log('Payment failed:', event.data.object.id);
        break;
    }
    res.json({ received: true });
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    res.status(400).json({ message: 'Webhook Error' });
  }
}

export default router;
