"use client"

import Image from 'next/image'
import FolderIcon from '@assets/icons/folder.svg'
import { redirect, usePathname, useSearchParams } from 'next/navigation'
import { ChangeEvent, useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'
import createQueryString from '@/helpers/createQueryString'

function PathEditor() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const path = searchParams.get('path')

    const redirectToPath = (value: string) => {
        console.log(value)
        router.push(pathname + '?' + createQueryString(value, searchParams))
    }

    return (
        <div className='flex items-center w-full h-8 gap-2 px-2 border rounded-lg focus-within:outline focus-within:outline-blue-400 border-border'>
            <Image src={FolderIcon} alt='folder' />
            <span className='flex items-center w-full'>
                Path://
                <input
                    type="text"
                    defaultValue={path || ''}
                    onKeyDown={e => e.key === 'Enter' && redirectToPath(e.currentTarget.value)}
                    className='w-full bg-transparent outline-none'
                />
            </span>
        </div>
    )
}

export default PathEditor