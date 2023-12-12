import React from 'react'
import Image from 'next/image'
import DocumentIllustration from '@assets/illustrations/file.svg'



interface props {
    name: string
    onDoubleClick: (value: string) => void
}

function DocumentType({ name, onDoubleClick }: props) {
    return (
        <div
            className="flex flex-col items-center gap-4 cursor-pointer"
            onDoubleClick={() => onDoubleClick(name)}
        >
            <Image
                src={DocumentIllustration}
                priority
                alt="folder"
                quality={100}
                className="object-cover h-20 overflow-visible"
            />
            <p>{name}</p>
        </div>
    )
}

export default DocumentType