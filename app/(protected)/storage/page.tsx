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
import { toast } from "sonner"


function Page() {

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const [folderData, setFolderData] = React.useState<storageObject[] | undefined | null>(undefined)

    useEffect(() => {
        if (searchParams.get('path') === null || searchParams.get('path') === '') getData('')
        else if (searchParams.get('path')) getData(searchParams.get('path')!)
        else setFolderData(null)
    }, [searchParams])

    const getData = async (path: string) => {
        const { data, error } = await getFolderDataFromDatabase(path)

        if (data) setFolderData(data)
        else toast.error(error?.message)
    }

    return (
        <div className='p-4 space-y-4 text-sm'>

            {folderData === null && <p>Folder is empty</p>}
            {folderData && (
                <div
                    className="mt-5"
                >
                    <ListItems items={folderData} />
                </div>
            )}


            {folderData?.length === 0 && <p>Folder is empty</p>}

        </div>
    )
}

export default Page;