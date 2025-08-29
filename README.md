# TeenStock

Public stock market game demo built with React, Tailwind CSS and Framer Motion via CDN.

## Running locally
Open `index.html` in any modern browser. The page uses CDN links so no build step is required.

To change links or settings, edit the constants at the top of `script.js`:

```
const FORM_URL = 'https://example.com/form';
const LEADERBOARD_EMBED_URL = '';
const SOCIAL_URL = '';
```

## Deploying to Vercel
1. Create a new project on [Vercel](https://vercel.com/).
2. Import this repository.
3. Choose **Other** framework (static site). No build command is needed.
4. Deploy. The site will be served from `index.html` at the project root.
