"use client"

import React from "react"
import Image from "next/image"
import { usePathname, useSearchParams } from "next/navigation"
import FolderIllustration from '@assets/illustrations/folder.svg'
import FileIllustration from '@assets/illustrations/file.svg'


function Page() {

    const pathname = usePathname()
    const searchParams = useSearchParams()

    return (
        <div className='p-4 space-y-4 text-sm'>
            {/* <p className="text-xs">
                {pathname + '/' + searchParams.get('path')}
            </p> */}

            <div className="text-[#2C2F36] mt-5 flex font-medium items-start gap-10">
                <div className="flex flex-col items-center gap-4">
                    <Image src={FolderIllustration} alt="folder" className="h-20 w-full max-w-[100px] object-cover overflow-hidden" />
                    <p>OG Images</p>
                </div>

                <div className="flex flex-col items-center gap-4 max-w-[100px]">
                    <Image src={FolderIllustration} alt="folder" className="object-cover w-full h-20 overflow-hidden" />
                    <p className="text-center">Testimonial screenshots</p>
                </div>

                <div className="flex flex-col items-center gap-4 max-w-[100px]">
                    <Image src={FileIllustration} alt="folder" className="object-cover h-20 overflow-visible" />
                    <p className="text-center">quick-docs.txt</p>
                </div>
            </div>

        </div>
    )
}

export default Page;