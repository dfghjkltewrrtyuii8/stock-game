# TeenStock

Interactive stock market game built with **Next.js**, **Tailwind CSS**, and **Firebase**. Players get $10,000 in virtual cash to trade real stocks and compete on a leaderboard.

## Features
- Signup with Firebase Auth (scaffolded)
- Real-time stock quotes via Yahoo Finance API
- Portfolio tracking and weekly leaderboard
- Dark theme with green accents and simple animations

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env.local` file with your Firebase project settings:
   ```bash
   NEXT_PUBLIC_FIREBASE_API_KEY=
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
   NEXT_PUBLIC_FIREBASE_APP_ID=
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000 to view the app.

## Deploying to Vercel
1. Push this repository to GitHub.
2. Import the project into [Vercel](https://vercel.com/).
3. Set the same environment variables in the Vercel dashboard.
4. Deploy. Vercel will run `npm run build` automatically.

## Scripts
- `npm run dev` – start the dev server
- `npm run build` – create a production build
- `npm start` – run the production server
- `npm run lint` – run ESLint

Happy trading!
