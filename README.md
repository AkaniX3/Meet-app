# Video Meeting Web App

This is a **Video Meeting Web Application** built with **Next.js**, **React**, and **Tailwind CSS**. It leverages **Clerk** for authentication and **GetStream** for video call functionalities, providing a seamless experience for hosting and joining video meetings.

---

## Features

- **User Authentication** powered by Clerk
- **Real-Time Video Calls** using GetStream's SDK
- Responsive design built with **Tailwind CSS**
- Easy-to-use meeting controls for a smooth user experience
- Participant management with live participant list and layouts
- Modern and scalable architecture with Next.js

---

## Prerequisites

Before you begin, ensure you have the following:

- **Node.js** (>= 16.x recommended)
- **npm** or **yarn** or **pnpm**
- GetStream API key and App ID
- Clerk project and API key

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/video-meeting-app.git
cd video-meeting-app
```

### 2. Install Dependencies

Choose your preferred package manager:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory and add the following environment variables:

```bash
NEXT_PUBLIC_GETSTREAM_API_KEY=your_getstream_api_key
NEXT_PUBLIC_GETSTREAM_APP_ID=your_getstream_app_id
NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
CLERK_API_KEY=your_clerk_api_key
```

Replace the placeholders with your actual keys.

### 4. Run the Development Server

Start the app locally:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

---

## Hosting the App

### 1. **Deploy on Vercel**
The easiest way to host your Next.js app is through Vercel:

1. Sign up or log in at [Vercel](https://vercel.com).
2. Import your GitHub repository to Vercel.
3. Set the required environment variables in the Vercel dashboard.
4. Deploy your app with one click.

### 2. **Deploy on Other Platforms**
You can also host this app on platforms like AWS, DigitalOcean, or any hosting provider that supports Node.js. Here's a quick guide for deploying on other platforms:

- **Build the app**:  
  ```bash
  npm run build
  ```
- **Run the app**:  
  ```bash
  npm start
  ```
- Ensure that your environment variables are correctly configured on the hosting platform.

---

## Technologies Used

- **Next.js**: Framework for building server-side rendered React applications  
- **React**: JavaScript library for building user interfaces  
- **TypeScript**: Strongly typed programming language for enhancing JavaScript with static typing  
- **Tailwind CSS**: Utility-first CSS framework for styling  
- **Clerk**: Authentication and user management  
- **GetStream**: Video call SDK for real-time communication  

---

## Contributing

We welcome contributions to this project! To get started:

1. Fork the repository.
2. Create a new branch: `git checkout -b my-feature-branch`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin my-feature-branch`.
5. Submit a pull request.

---

ty 🍞✨