# Weather App

This is a weather application built with [Next.js](https://nextjs.org), bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). The app fetches and displays weather information for various cities using the Weather API.

## Features

- Fetches real-time weather data
- Displays weather conditions, temperature, and location details
- Responsive design
- Optimized image loading with `next/image`

## Getting Started

To get started with the development server, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/weather_app.git
   cd weather_app

   2. Install Dependencies
   npm install
   ```

# or

yarn install

# or

pnpm install

3. Run the development server:
   npm run dev

# or

yarn dev

# or

pnpm dev

# or

bun dev

4. Open http://localhost:3000 with your browser to see the result.

Configuration
To use the Weather API, you need to set up your API key. Create a .env.local file in the root of your project and add your API key:

NEXT_PUBLIC_WEATHER_API_KEY=your_api_key_here

Project Structure
page.tsx: Main page component where the weather data is fetched and displayed.
WeatherInfo.tsx: Component to display weather information.
styles/page.module.css: CSS module for styling the main page.

Learn More

To learn more about Next.js and related technologies, take a look at the following resources:

Next.js Documentation - Learn about Next.js features and API.
Learn Next.js - Interactive Next.js tutorial.
Weather API Documentation - Learn about the Weather API used in this project.

Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

Deploy on Vercel
The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

Check out the Next.js deployment documentation for more details.
