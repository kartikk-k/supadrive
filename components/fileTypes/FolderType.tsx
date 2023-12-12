import React from 'react'
import Image from 'next/image'
import FolderIllustration from '@assets/illustrations/folder.svg'



interface props {
    name: string
    onDoubleClick: (value: string) => void
}

function FolderType({ name, onDoubleClick }: props) {
    return (
        <div
            className="flex flex-col items-center gap-4 cursor-pointer"
            onDoubleClick={() => onDoubleClick(name)}
        >
            <Image
                src={FolderIllustration}
                priority
                alt="folder"
                className="h-20 w-full max-w-[100px] object-cover overflow-hidden"
            />
            <p>{name}</p>
        </div>
    )
}

export default FolderType