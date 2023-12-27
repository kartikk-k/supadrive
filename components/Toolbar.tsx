"use client"

import Image from 'next/image'
import AddFileIcon from '@assets/icons/add-file.svg'
import AddFolderIcon from '@assets/icons/add-folder.svg'
import DownloadIcon from '@assets/icons/download.svg'
import DeleteIcon from '@assets/icons/trash.svg'
import CopyIcon from '@assets/icons/copy.svg'
import LockIcon from '@assets/icons/lock.svg'
import { Button } from '@components/ui/Button'
import useStorageStore from '@/store/storageStore'

function Toolbar() {

    const setIsAddingFolder = useStorageStore(state => state.setIsAddingFolder)

    return (
        <div className='flex items-center h-12 gap-6 p-4 font-medium border-b border-border'>

            <Button variant={'ghost'}>
                <Image src={AddFileIcon} alt='Add file' />
                <span>Add file</span>
            </Button>

            <Button variant={'ghost'} onClick={() => setIsAddingFolder(true)}>
                <Image src={AddFolderIcon} alt='Add file' />
                <span>Add folder</span>
            </Button>

            <span className='h-full w-[1px] bg-gray-300 inline-block' />

            <Button variant={'ghost'}>
                <Image src={CopyIcon} alt='Add file' />
                <span>Copy</span>
            </Button>

            <Button variant={'ghost'}>
                <Image src={DownloadIcon} alt='Add file' />
                <span>Download</span>
            </Button>

            <Button variant={'ghost'}>
                <Image src={DeleteIcon} alt='Add file' />
                <span>Delete</span>
            </Button>

            <span className='h-full w-[1px] bg-gray-300 inline-block' />

            <Button variant={'ghost'}>
                <Image src={LockIcon} alt='Add file' />
                <span>Permissions</span>
            </Button>

        </div>
    )
}

export default Toolbar