'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logo from '@/public/images/hiking-logo-3.png';
import { UserButton, SignInButton, SignOutButton } from '@clerk/nextjs'


const Navbar = () => {

  const pathname = usePathname();

  return (
    <nav className='sticky top-0 z-50 bg-green-700 border-b-2 border-green-800 text-white py-3 px-4 shadow-lg'>
      <div className='mx-auto max-w-8xl px-2 sm:px-6 lg:px-8'>
        
        <div className='realitive flex items-center justify-between'>
        <Link className='flex-shrink-0 hidden md:block'  href='/'>
              <Image src={logo} alt='Hiking Logo' width={150} height={150}
                
            />
            </Link>
          <div className='flex space-x-2'>

            
            <Link
              href='/'
              className={`${pathname === '/' ?  'bg-[#6a0923]' : ''} hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-white`}>
            HOME
            </Link>

            <Link
              href='/trails'
              className={`${pathname === '/trails' ?  'bg-[#6a0923]' : ''} hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-white`}>
              TRAILS
            </Link>

            <Link
              href='/groups'
              className={`${pathname === '/groups' ?  'bg-[#6a0923]' : ''} hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-white`}>
              GROUPS
            </Link>

            <Link
              href='/contact'
              className={`${pathname === '/contact' ?  'bg-[#6a0923]' : ''} hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-white`}>
              CONTACT
            </Link>
          </div>
          <div className="hidden md:block md:ml-6">
              <div className="flex items-center">
                <button
                  className="flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
              >
                <SignInButton />
                <SignOutButton />
                  <span></span>
                </button>
              </div>
            </div>
        </div>
        <UserButton />

      </div>
    </nav>
  )
}

export default Navbar;
