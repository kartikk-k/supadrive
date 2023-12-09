import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '@assets/icons/logo.svg'

function Navbar() {
    return (
        <nav className='flex items-center justify-between h-12 p-4 border-b border-border'>
            {/* logo */}
            <Link href={'/'} className='text-[#7A89AB] flex items-center gap-2'>
                <Image src={Logo} alt='' width={20} height={20} />
                <span className='font-medium'>Supadrive</span>
            </Link>

            <div className='flex items-center gap-4 text-sm font-medium'>
                <Link href={'/'}>Github</Link>
                <Link href={'/'}>Report issue</Link>
            </div>
        </nav>
    )
}

export default Navbar