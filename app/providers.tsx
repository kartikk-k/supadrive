"use client"

import React, { useEffect } from 'react'
import { Toaster } from 'sonner'
import { usePathname, useSearchParams } from 'next/navigation'
import useStorageStore from '@/store/storageStore'

function Providers({ children }: { children: React.ReactNode }) {

    const pathname = usePathname()
    const searchParams = useSearchParams()

    const pathReset = useStorageStore(state => state.pathReset)

    useEffect(() => {
        pathReset()
    }, [pathname, searchParams])

    return (
        <div>
            <Toaster />
            {children}
        </div>
    )
}

export default Providers