# Push to GitHub (then deploy on Vercel)

1. Create a new **empty** repo on GitHub (no README/license). Copy the remote URL.
2. In this project folder:
```bash
git init
git add .
git commit -m "feat: client portal with roles + DocuSign embedded signing"
git branch -M main
git remote add origin YOUR_GITHUB_REMOTE_URL
git push -u origin main
```
3. On **Vercel**: Import the repo, set env vars from `.env.example`, deploy.
4. Stripe: add webhook to `https://YOUR-DOMAIN/api/webhooks/stripe`.
5. Twilio: Messaging webhook `https://YOUR-DOMAIN/api/twilio/inbound`.
