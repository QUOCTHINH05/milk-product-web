# Vercel Deployment Setup Guide

## Setting Up Environment Variables for Vercel

When you deploy to Vercel, you need to add Supabase environment variables for product price syncing to work.

### Step 1: Go to Vercel Dashboard
1. Visit https://vercel.com/dashboard
2. Select your project (e.g., `milk-product-web`)

### Step 2: Add Environment Variables
1. Click **Settings**
2. Go to **Environment Variables**
3. Add the following variables:

| Key | Value |
|-----|-------|
| `VITE_SUPABASE_URL` | `https://cottgojhqtbbcpubsvby.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | Your Supabase anon public key (from Supabase > Settings > API) |

### Step 3: Redeploy
1. After adding variables, go to **Deployments**
2. Click the three dots (...) on the latest deployment
3. Click **Redeploy** (or just push a new commit to trigger auto-deploy)

---

## Local Development

For local development, create `.env.local`:

```env
VITE_SUPABASE_URL=https://cottgojhqtbbcpubsvby.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

Then run:
```bash
npm run dev
```

---

## Fallback Behavior

If environment variables are not set:
- ✅ App still works
- ✅ Prices stored locally in browser (localStorage)
- ⚠️ Prices won't sync across devices
- 📋 Console shows a warning message

Once you add environment variables to Vercel, prices will sync across all devices automatically.

---

## Troubleshooting

**Q: Still getting "Missing Supabase" error?**
- A: Clear browser cache and hard refresh (Ctrl+Shift+R)

**Q: Environment variables set but still not working?**
- A: Make sure you clicked "Redeploy" after adding variables

**Q: How do I get my Supabase Anon Key?**
- A: Go to https://app.supabase.com → Your Project → Settings → API → Copy "anon public" key
