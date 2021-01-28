This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Project Flow
This application uses next js to render the application server side initially and when other filers are applied it renders client side.

It is deployed on heroku with a CI/CD pipeline

window.replaceState() is used to update the queryParams in the URL when filters are applied and by checking those queryParams we persist state when page is refreshed.

## Technologies
Project is created with:
*HTML5
*Next: 10.0.5,
*React: 17.0.1
*CSS

**Using Lighthouse in Chrome DevTools**

![lighthouse score](https://imgur.com/0Jnemmx.png)