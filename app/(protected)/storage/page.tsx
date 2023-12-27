"use client"

import React, { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import useStorageStore from "@/store/storageStore"
import ListItems from "@/components/ListItems"
import AddFolder from "@/components/AddFolder"
import { toast } from "sonner"


function Page() {

    const isFetching = useStorageStore(state => state.isFetching)
    const getPathData = useStorageStore(state => state.getPathData)
    const pathObjects = useStorageStore(state => state.pathObjects)
    const createNewFolder = useStorageStore(state => state.createNewFolder)

    const searchParams = useSearchParams()

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

    useEffect(() => {
        console.log(pathObjects)
    }, [pathObjects])

    const handleCreateFolder = (name: string) => {
        if (!name.trim()) return toast.error('Folder name cannot be empty')
        createNewFolder(currentPath!, name)
    }


    return (
        <div className='p-4 space-y-4 text-sm'>

            {!isFetching && !pathObjects.length && <p>Folder is empty</p>}

            {pathObjects && (
                <div className="mt-5">
                    <ListItems items={pathObjects} />
                </div>
            )}

            <AddFolder onCreate={handleCreateFolder} />

        </div>
    )
}

export default Page;