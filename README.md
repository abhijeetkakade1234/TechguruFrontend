# TechGuru 2026 Frontend

Rebuilt with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open the app**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

- `/components`: Reusable UI components extracted from the original landing page.
- `/app`: Next.js 15 App Router pages and global styling.
- `.github/workflows`: CI/CD pipeline for Cloudflare Pages.

## Deployment (Cloudflare Pages)

This project is configured to deploy automatically to Cloudflare Pages via GitHub Actions.

### Setup GitHub Secrets

To enable automatic deployment, add the following secrets to your GitHub repository:

1. `CLOUDFLARE_API_TOKEN`: Your Cloudflare API Token (with Pages Edit permissions).
2. `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare Account ID.

### Environment Variables

Copy `.env.example` to `.env.local` to manage your local environmental variables.
