import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SettingIcon from '@assets/icons/setting.svg'
import FolderIllustration from '@assets/illustrations/folder.svg'

function Sidebar() {
    return (
        <div className='flex flex-col h-full gap-5 p-4 font-medium border-r border-border'>

            <div className='p-1.5 border rounded-lg flex items-center justify-between border-border'>
                <p>Personal cloud</p>
                <Image src={SettingIcon} alt='settings' />
            </div>

            <>
                <Link href='/storage' className='flex items-center gap-2'>
                    <Image src={FolderIllustration} alt='folder-icon' />
                    <p>Home</p>
                </Link>

                <Link href='/storage' className='flex items-center gap-2'>
                    <Image src={FolderIllustration} alt='folder-icon' />
                    <p>Recently viewed</p>
                </Link>
            </>

        </div>
    )
}

export default Sidebar