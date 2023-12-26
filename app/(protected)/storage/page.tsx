"use client"

import React, { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import useStorageStore from "@/store/storageStore"
import ListItems from "@/components/ListItems"


function Page() {

    const getPathData = useStorageStore(state => state.getPathData)
    const pathObjects = useStorageStore(state => state.pathObjects)

    const searchParams = useSearchParams()

    // const [folderData, setFolderData] = React.useState<storageObject[] | undefined | null>(undefined)
    const [currentPath, setCurrentPath] = React.useState<string | null | undefined>(undefined)


    useEffect(() => {
        if (searchParams.get('path') === null || searchParams.get('path') === '') setCurrentPath('')
        else if (searchParams.get('path')) setCurrentPath(searchParams.get('path')!)
    }, [searchParams])

    // triggers getData for current path when the current path changes
    useEffect(() => {
        if (currentPath === undefined) return
        else getPathData(currentPath!)
    }, [currentPath])


    return (
        <div className='p-4 space-y-4 text-sm'>

            {pathObjects && !pathObjects.length && <p>Folder is empty</p>}

            {pathObjects && (
                <div
                    className="mt-5"
                >
                    <ListItems items={pathObjects} />
                </div>
            )}

        </div>
    )
}

export default Page;