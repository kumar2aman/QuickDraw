# QuickDraw  ✏️



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## About QuickDraw
---
"This project is an innovative, full-featured online canvas application, designed to provide a seamless and intuitive experience for users to express themselves creatively and collaborate with others. By signing up with a secure and convenient sign-in system, users gain access to a comprehensive dashboard where they can explore and manage multiple canvases. With an abundance of tools and features at their fingertips, users can bring their ideas to life, jotting down notes, sketching, drawing, and editing with ease."


## Tech stack we are using :-



Frontend: Nextjs, Tailwind Css , Shadcn, Typescript
Backend / DATABASE : Nextjs , Postgresql , Prisma (orm) , Authjs



## To Contribution
---

Fork this repo and clone the repo
git clone https://github.com/Kumar2aman/QuickDraw

In you pc , move to the folder & install the dependencies
```bash 
cd QuickDraw

npm install
```


Copy over the .env.example & .env.local.example in the root folder. You can get the google client id and secret from google cloud console .

```bash
openssl rand -base64 32 //run this in the terminal to generate the Auth secret & paste it

```

To start  development server:

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


