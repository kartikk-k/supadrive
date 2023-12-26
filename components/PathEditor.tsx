"use client"

import Image from 'next/image'
import FolderIcon from '@assets/icons/folder.svg'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import createQueryString from '@/helpers/createQueryString'
import useStorageStore from '@/store/storageStore'
import { AnimatePresence, motion } from 'framer-motion'

function PathEditor() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const path = searchParams.get('path')

    const isFetching = useStorageStore(state => state.isFetching)

    const redirectToPath = (value: string) => {
        router.push(pathname + '?' + createQueryString(value, searchParams))
    }

    return (
        <div className='relative flex items-center w-full h-8 gap-2 px-2 overflow-hidden border rounded-lg focus-within:outline focus-within:outline-blue-400 border-border'>
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


            {/* fetching indicator */}
            <AnimatePresence>
                {isFetching && (
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: isFetching ? '90%' : 0, opacity: 1 }}
                        exit={{ width: '100%', opacity: 0 }}
                        transition={{ duration: 0.3 }} // average response time
                        className='absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 animate-pulse'
                    />
                )}
            </AnimatePresence>

        </div>
    )
}

export default PathEditor