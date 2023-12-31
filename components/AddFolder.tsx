"use client"

import React, { ChangeEvent } from 'react'
import Image from 'next/image'
import { Button } from './ui/Button'
import AddFolderIcon from '@assets/icons/add-folder.svg'
import { Dialog, DialogClose, DialogContent, DialogTrigger } from './ui/Dialog'
import useStorageStore from '@/store/storageStore'



interface props {
    onCreate: (name: string) => void
}

function AddFolder({ onCreate }: props) {

    const isAddingFolder = useStorageStore(state => state.isAddingFolder)
    const setIsAddingFolder = useStorageStore(state => state.setIsAddingFolder)

    const [folderName, setFolderName] = React.useState<string>('Untitled')

    const handleClick = () => {
        onCreate(folderName)
    }

    return (
        <Dialog open={isAddingFolder} onOpenChange={setIsAddingFolder}>
            {/* <DialogTrigger className='shrink-0'>
                <Button variant={'ghost'}>
                    <Image src={AddFolderIcon} alt='Add file' />
                    <span>Add folder</span>
                </Button>
            </DialogTrigger> */}

            <DialogContent>
                <div className='flex flex-col items-center space-y-8'>
                    <div className='w-full space-y-2 text-sm'>
                        <label htmlFor="foldername" className='text-gray-600'>Folder name</label>
                        <input
                            type="text"
                            value={folderName}
                            onChange={e => setFolderName(e.target.value)}
                            className='flex items-center w-full h-10 px-2 bg-gray-200 outline-none rounded-xl'
                        />
                    </div>

                    <div className='flex items-center justify-end w-full gap-4'>
                        <DialogClose asChild={true}>
                            <Button
                                variant='outline'
                                size={'large'}
                            >
                                Cancel
                            </Button>
                        </DialogClose>

                        <Button
                            variant='primary'
                            size={'large'}
                            disabled={!folderName.trim()}
                            onClick={handleClick}
                        >
                            Create
                        </Button>

                    </div>
                </div>

            </DialogContent>

        </Dialog>
    )
}

export default AddFolder