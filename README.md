# Next.js Merchant Dashboard

## Project Overview

This Next.js project is designed to implement a simple application with a two-side menu navigation system. The application consists of two main pages: the Profile page and the Payment page. Users can easily navigate between these pages using the side menu bar.

## User Story

As a user, I want to be able to:

1. View and edit my profile information, including Name, Gender, and Date of Birth (DOB), on the Profile page.
2. Enter credit card information on the Payment page, including Card Number, Expiry Date, Card Holder Name, and CVV.
3. Navigate between the Profile and Payment pages using the side menu bar.
4. Experience form validation to ensure the entered information is accurate and secure.

## Project Structure

The project structure is organized as follows:

```
wtheq-task/
|-- app/
| |-- page.tsx (Home page)
| |-- profile/ (Profile page)
| |-- payment/ (Payment page)
| | |-- page.tsx (Payment page)
|-- components/
| |-- SideMenu.tsx
| |-- ProfileForm.tsx
| |-- PaymentForm.tsx
|-- styles/
| |-- global.css
|-- public/
| |-- images/
| |-- visa.png
| |-- mastercard.png
|-- README.md
|-- package.json
|-- ...
```

## Getting Started

- Clone the repository:

```bash
git clone https://github.com/yourusername/wtheq-task.git
cd wtheq-task
```

- Install dependencies:

```bash
npm install
```
