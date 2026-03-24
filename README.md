# Twilio WhatsApp SaaS Dashboard Redesign

A full-stack SaaS platform to manage WhatsApp message templates and send messages using the Twilio API.

## Features
- **Modern Dashboard:** Overview with analytics and stats.
- **Template Management:** Create, track, and manage WhatsApp templates.
- **Approval Workflow:** Simulated lifecycle (Draft → Submitted → Approved/Rejected).
- **Send Messaging:** Dynamic variable mapping for approved templates.
- **WhatsApp Preview:** Live visual preview of messages and interactive buttons.

## Core Objective
Create a system where users can create, submit, track and manage custom WhatsApp message templates and handle the approval workflow similar to Twilio's system.

## Setup Instructions

### Backend (server)
1. Navigate to the `server` directory: `cd server`
2. Install dependencies: `npm install`
3. Create a `.env` file with the following variables:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/twilio-saas
   JWT_SECRET=your_jwt_secret
   TWILIO_ACCOUNT_SID=your_twilio_sid
   TWILIO_AUTH_TOKEN=your_twilio_token
   TWILIO_PHONE_NUMBER=your_twilio_whatsapp_number
   ```
4. Start the server: `npm start`

### Frontend (client)
1. Navigate to the `client` directory: `cd client`
2. Install dependencies: `npm install`
3. Start the Vite dev server: `npm run dev`
4. Access the dashboard at `http://localhost:5173`

## Tech Stack
- **Frontend:** React, Tailwind CSS, Vite, Lucide Icons, Recharts.
- **Backend:** Node.js, Express, MongoDB/Mongoose, Twilio API.
- **Auth:** JWT (Placeholder implemented).
