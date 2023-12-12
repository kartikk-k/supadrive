"use client"

import React from 'react'
import ArrowLeftIcon from '@assets/icons/arrow-left.svg'
import ArrowRightIcon from '@assets/icons/arrow-right.svg'
import ReleadIcon from '@assets/icons/refresh.svg'
import FilterIcon from '@assets/icons/adjust.svg'
import InfoCircleIcon from '@assets/icons/info-circle.svg'
import SidebarIcon from '@assets/icons/sidebar.svg'
import { Button } from '@components/ui/Button'
import Image from 'next/image'
import PathEditor from './PathEditor'
import { useRouter } from 'next/navigation'


function Addressbar() {
    const router = useRouter()
    return (
        <div className='flex items-center h-12 gap-2 p-4 font-medium border-b border-border'>

            <Button onClick={() => router.back()} variant={'ghost'} size={'icon'}>
                <Image src={ArrowLeftIcon} alt='back' />
            </Button>

            <Button onClick={() => router.forward()} variant={'ghost'} size={'icon'}>
                <Image src={ArrowRightIcon} alt='forward' />
            </Button>


            <Button onClick={() => router.refresh()} variant={'ghost'} size={'icon'}>
                <Image src={ReleadIcon} alt='refresh' />
            </Button>

            <PathEditor />

            <Button variant={'ghost'} size={'icon'} disabled>
                <Image src={InfoCircleIcon} alt='info' />
            </Button>

            <Button variant={'ghost'} size={'icon'}>
                <Image src={FilterIcon} alt='filters' />
            </Button>

            <Button variant={'ghost'} size={'icon'}>
                <Image src={SidebarIcon} alt='sidebar' />
            </Button>

        </div>
    )
}

export default Addressbar