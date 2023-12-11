"use client"

import React, { useEffect } from "react"
import Image from "next/image"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import FolderIllustration from '@assets/illustrations/folder.svg'
import FileIllustration from '@assets/illustrations/file.svg'
import useStorageStore from "@/store/storageStore"
import getFolderDataFromDatabase from "@/helpers/supabase/getFolderData"
import ListItems from "@/components/ListItems"
import createQueryString from "@/helpers/createQueryString"


function Page() {

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const [folderData, setFolderData] = React.useState<Folder['files'] | undefined | null>(undefined)

    useEffect(() => {

        console.log(searchParams.get('path'))

        if (searchParams.get('path') === null || searchParams.get('path') === '') getData('')
        else if (searchParams.get('path')) getData(searchParams.get('path')!)
        else setFolderData(null)

    }, [searchParams])

    const getData = async (path: string) => {
        const { data, error } = await getFolderDataFromDatabase(path)

        if (data) setFolderData(data)
        else console.log(error)
    }

    const handleDoubleClick = (value: string) => {
        router.push(pathname + '?' + createQueryString(value, searchParams))
    }

    return (
        <div className='p-4 space-y-4 text-sm'>
            {/* <p className="text-xs">
                {searchParams.get('path')}
            </p> */}

            {folderData === null && <p>Folder is empty</p>}

            <div className="text-[#2C2F36] mt-5 flex font-medium items-start gap-10 flex-wrap">
                {/* <div className="flex flex-col items-center gap-4">
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
                </div> */}

                {folderData && folderData.map((folder) => (
                    <div key={folder.id} className="flex flex-col items-center gap-4 cursor-pointer" onDoubleClick={() => handleDoubleClick(folder.name)}>
                        <Image src={FolderIllustration} alt="folder" className="h-20 w-full max-w-[100px] object-cover overflow-hidden" />
                        <p>{folder.name}</p>
                    </div>
                ))}

                {/* <ListItems items={folderData} /> */}

            </div>

            {folderData?.length === 0 && <p>Folder is empty</p>}

        </div>
    )
}

export default Page;