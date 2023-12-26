import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '@assets/icons/logo.svg'

function Navbar() {
    return (
        <nav className='flex items-center justify-between h-12 p-4 text-sm font-medium border-b border-border'>
            {/* logo */}
            {/* <Link href={'/'} className='text-[#7A89AB] flex items-center gap-2'>
                <Image src={Logo} alt='' width={20} height={20} />
                <span className='font-medium'>Supadrive</span>
            </Link> */}

            {/* Menu */}
            <div className='relative flex gap-1 font-semibold text-gray-500 -left-2'>
                <button className='px-3 py-1 duration-300 rounded-md hover:bg-gray-200/70' >File</button>
                <button className='px-3 py-1 duration-300 rounded-md hover:bg-gray-200/70' >View</button>
                <button className='px-3 py-1 duration-300 rounded-md hover:bg-gray-200/70' >Shortcuts</button>
            </div>

            <div className='flex items-center gap-4'>
                <Link href={'/'}>Github</Link>
                <Link href={'/'}>Report issue</Link>
            </div>
        </nav>
    )
}

export default Navbar