import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: 'Test Next App v2',
  description: 'This is a test Next.js app v2',
  keywords: 'next.js, tailwindcss, react',
}

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main>
          {children}
          <SpeedInsights />
          <Analytics />
        </main>
      </body>
    </html>
  )
}

export default MainLayout;
