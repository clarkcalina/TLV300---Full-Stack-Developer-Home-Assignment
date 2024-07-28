# TLV300 - Full Stack Developer Home Assignment

## Overview

The Whois API is a service that provides comprehensive information about domain names, including details about domain registration, ownership, and contact information. This API allows users to retrieve essential details about a given domain.

For more information about the Whois REST API, refer to the [Whois API Documentation](https://whois.whoisxmlapi.com/documentation/making-requests).

## Assignment

This project involves creating a full-stack application with both backend and frontend components.

### Backend

Create an endpoint that receives a domain name and the type of requested data (domain information/contact information) and returns the corresponding data from the Whois API.

- **Domain Information**
  - Domain Name
  - Registrar
  - Registration Date

### Frontend

Develop a user interface using Next.js 14 and Tailwind CSS to interact with the backend endpoint and display the retrieved domain information.

## Getting Started

### Prerequisites

- Node.js (v14.x or higher)
- npm or yarn
- A Whois API key


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
