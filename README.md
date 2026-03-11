# Alraimi Business Group --- Website

Production website for **alraimigroup.com**, built using **Next.js (App
Router)**.

This repository contains the frontend application, form APIs, UI
component system, SEO configuration, and deployment setup for the
Alraimi Business Group website.

The project is designed to be:

-   fast
-   minimal in dependencies
-   easy to maintain
-   production-stable
-   SEO compatible

The website functions primarily as a **B2B lead‑generation platform**
for international brands looking for manufacturing partners in China.

------------------------------------------------------------------------

# Tech Stack

Core technologies used:

-   Next.js (App Router)
-   React
-   Tailwind CSS
-   GSAP (scroll animations)
-   Cloudinary (image optimization & delivery)
-   Vercel (hosting & deployment)

Supporting tooling:

-   Node.js
-   PostCSS
-   ESLint

------------------------------------------------------------------------

# Development Requirements

Node.js \>= 18\
npm \>= 9

Verify:

`node -v`\
`npm -v`

------------------------------------------------------------------------

# Installation

Clone:

`git clone <repository-url>`

Install dependencies:

`npm install`

------------------------------------------------------------------------

# Development

Run development server:

`npm run dev`

Open:

`http://localhost:3000`

------------------------------------------------------------------------

# Production

Build:

`npm run build`

Run:

`npm start`

------------------------------------------------------------------------

# Environment Variables

Create `.env.local`:

EMAIL_TO=contact@alraimigroup.com\
EMAIL_FROM=noreply@alraimigroup.com\
SMTP_HOST=smtp.example.com\
SMTP_PORT=587\
SMTP_USER=username\
SMTP_PASS=password

------------------------------------------------------------------------

# API Endpoints

## Inquiry

`/api/inquiry`

Handles general manufacturing inquiries.

Fields:

-   name
-   email
-   company
-   message

## PI Request

`/api/pi-request`

Handles production quote requests.

Fields:

-   name
-   company
-   email
-   product category
-   quantity
-   timeline
-   notes

------------------------------------------------------------------------

# SEO

Implemented:

-   sitemap.js
-   robots.js
-   Open Graph metadata

Recommended additions:

-   og-image.jpg
-   structured data (JSON‑LD)
-   canonical tags

------------------------------------------------------------------------

# Deployment

Hosted on **Vercel**.

Features:

-   automatic builds
-   global CDN
-   preview deployments
-   edge caching

Deploy triggered by:

`git push`

------------------------------------------------------------------------

# Performance

Optimizations:

-   Cloudinary image transformations
-   minimal JS payload
-   server rendering where required
-   HTTP/3 support
-   CDN edge delivery

------------------------------------------------------------------------

# Development Principles

The project follows simple engineering rules:

-   simplicity over abstraction
-   predictable component structure
-   minimal dependencies
-   readable code over clever code
-   performance first

------------------------------------------------------------------------

# License

Internal project for Alraimi Business Group.
