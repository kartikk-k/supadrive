"use client"

import React from 'react'
import Image from 'next/image'
import FolderIllustration from '@assets/illustrations/folder.svg'
import { Dialog, DialogContent } from './ui/Dialog'


function NewFolder() {

    const [folderName, setFolderName] = React.useState<string>('Untitled')

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key !== 'Enter') return
        console.log('File saved')
    }

    return (
        <Dialog open>
            <DialogContent>
                <div>
                    <Image
                        src={FolderIllustration}
                        priority
                        alt="folder"
                        className="h-20 w-full max-w-[100px] object-cover overflow-hidden"
                    />

                </div>
            </DialogContent>
        </Dialog>
    )
}

export default NewFolder