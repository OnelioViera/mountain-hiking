import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import Footer from '@/components/Footer';
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

export const metadata = {
  title: 'Mountain Hiking',
  description: 'Mountain Hiking is a website for hikers and outdoor enthusiasts.',
  keywords: 'hiking, mountain hiking',
};

const MainLayout = ({ children }) => {
  return (
    <ClerkProvider>
    <html lang='en'>
      <body className='flex flex-col min-h-screen'>
        <Navbar />
        <main>
            {children}
          <SpeedInsights />
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
    </ClerkProvider>
  )
};

export default MainLayout;
