import AuthButton from '../components/AuthButton'
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import Logo from './logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import HeroImage from './hero.png'


export default async function Index() {
  const cookieStore = cookies()

  const canInitSupabaseClient = () => {
    try {
      createClient(cookieStore)
      return true
    } catch (e) {
      return false
    }
  }

  const isSupabaseConnected = canInitSupabaseClient()

  return (
    <div className="flex flex-col items-center flex-1 h-screen gap-12 w-screen overflow-hidden min-h-screen bg-[#DCDCE2]">
      <nav className="flex justify-center w-full p-4 md:p-8">
        <div className="flex items-center justify-between w-full p-3 text-sm">
          {/* <DeployButton /> */}
          <Image
            src={Logo}
            alt="Supadrive"
            width={28}
          />
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav>

      {/* hero */}
      <div className='flex flex-col justify-between w-full p-4 md:p-8 md:flex-row'>
        {/* header */}
        <div className='relative z-10 space-y-8 shrink-0'>
          <h1
            id='hero-title'
            className='text-5xl font-extrabold'
          >
            Supadrive
          </h1>
          <p className='max-w-md font-medium text-gray-500'>
            A self-host personal cloud storage where you get full control over your data.
          </p>

          <div className='space-x-4 text-xs font-medium'>
            <Link href={'/login'} id='primary-btn' className='px-4 py-2 text-white rounded-lg'>
              Get Started
            </Link>

            <Link href={'/login'} className='px-4 py-1.5'>
              Login
            </Link>
          </div>

        </div>

        {/* preview image */}
        <div className='relative'>
          <Image
            src={HeroImage}
            alt='Supadrive'
            width={1800}
            // height={00}
            className='relative -bottom-[20%] pt-20 md:-top-20 min-w-[100vw]'
          />
        </div>

      </div>

    </div>
  )
}
