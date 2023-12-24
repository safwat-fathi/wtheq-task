# Wtheq Merchant Dashboard

## Project Overview

This Wtheq project is designed to implement a simple application with a two-side menu navigation system. The application consists of two main pages: the Profile page and the Payment page. Users can easily navigate between these pages using the side menu bar.

## User Story

As a user, I want to be able to:

1. View and edit my profile information, including Name, Gender, and Date of Birth (DOB), on the Profile page.
2. Enter credit card information on the Payment page, including Card Number, Expiry Date, Card Holder Name, and CVV.
3. Navigate between the Profile and Payment pages using the side menu bar.
4. Experience form validation to ensure the entered information is accurate and secure.
5. Integrated with PayPal as a payment gateway.

## Project Structure

The project structure is organized as follows:

```
wtheq-task/
.
├── actions
│   ├── auth.ts
│   └── payment.ts
├── app
│   ├── api
│   │   ├── payment
│   │   │   └── add
│   │   │       └── route.ts
│   │   └── profile
│   │       └── update
│   │           └── route.ts
│   ├── global-error.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   ├── payment
│   │   ├── components
│   │   │   └── PaymentForm
│   │   │       └── index.tsx
│   │   └── page.tsx
│   └── profile
│       ├── components
│       │   └── ProfileForm
│       │       └── index.tsx
│       └── page.tsx
├── lib
│   ├── classes
│   │   └── http-error.ts
│   ├── hooks
│   │   ├── usePaymentForm.tsx
│   │   └── useProfileForm.tsx
│   ├── ui
│   │   ├── components
│   │   │   ├── Button
│   │   │   │   └── index.tsx
│   │   │   ├── Header
│   │   │   │   └── index.tsx
│   │   │   ├── InputField
│   │   │   │   └── index.tsx
│   │   │   ├── Loaders
│   │   │   │   ├── PageLoader
│   │   │   │   │   └── index.tsx
│   │   │   │   └── SidebarLoader
│   │   │   │       └── index.tsx
│   │   │   └── Sidebar
│   │   │       ├── index.tsx
│   │   │       └── SidebarNav.tsx
│   │   └── layouts
│   │       └── UserLayout
│   │           └── index.tsx
│   └── utils
│       ├── date.ts
│       ├── payment.ts
│       └── string.ts
├── next.config.js
├── next-env.d.ts
├── package.json
├── postcss.config.js
├── public
│   └── images
│       ├── american-express.svg
│       ├── credit-card.png
│       ├── mastercard.svg
│       ├── unionpay.svg
│       └── visa.svg
├── README.md
├── routes.ts
├── services
│   ├── http.service.ts
│   ├── payment.service.ts
│   ├── paypal.service.ts
│   └── profile.service.ts
├── tailwind.config.js
├── tsconfig.json
├── types
│   ├── components
│   │   ├── i-input.ts
│   │   ├── i-payment-form.ts
│   │   └── i-user-form.ts
│   ├── env.d.ts
│   ├── global
│   │   └── index.ts
│   ├── hooks
│   │   └── i-use-payment.ts
│   ├── models
│   │   └── index.ts
│   └── services
│       └── index.ts
└── yarn.lock
```

**actions dir**  
For server action functions that can be used in server-side and client-side

**app dir**  
Represent application views 

**app/api dir**  
Represent application api endpoints 

**lib dir**  
Represent application business logic (utility functions - global components - react hooks) 

**services dir**  
Contains api services or 3rd party services   

**types dir**  
Represent application types 

**routes.ts file**  
Application routes as constants 

## Getting Started

- Clone the repository:

```bash
git clone https://github.com/yourusername/wtheq-task.git
cd wtheq-task
```

- Install dependencies:

```bash
yarn
```

- start project:

```bash
yarn dev
```

- build project:

```bash
yarn build
```
