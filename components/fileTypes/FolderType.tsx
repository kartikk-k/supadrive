import React from 'react'
import Image from 'next/image'
import FolderIllustration from '@assets/illustrations/folder.png'



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
                className="object-cover h-full"
            />
            <p>{name}</p>
        </div>
    )
}

export default FolderType