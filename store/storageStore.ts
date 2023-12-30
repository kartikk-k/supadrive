import createFolder from '@/helpers/supabase/createFolder'
import getFolderDataFromDatabase from '@/helpers/supabase/getFolderData'
import { toast } from 'sonner'
import { create } from 'zustand'


interface StorageStore {
    storageObjects: storageObject[] // all objects in storage (for reuse)

    // currentPathData
    pathObjects: storageObject[] // objects in current path

    isFetching: boolean
    setIsFetching: (isFetching: boolean) => void

    getPathData: (path: string) => void // fetch data from database and add it to storage objects
    getStoredObjects: (path: string) => void // get stored objects from storage objects

    refreshPathData: (path: string) => void // refresh data from database and add it to storage objects

    createNewFolder: (path: string, folderName: string) => Promise<void> // create new folder in database and add it to storage objects

    isAddingFolder: boolean
    setIsAddingFolder: (isAddingFolder: boolean) => void

    isUploadingFile: boolean
    setIsUploadingFile: (isUploadingFile: boolean) => void

    // resets storage objects for new path
    pathReset: () => void
}


const useStorageStore = create<StorageStore>((set, get) => ({

    storageObjects: [],
    pathObjects: [] || undefined,

    getPathData: async (path) => {
        const { data, error } = await getFolderDataFromDatabase(path)
        set({ isFetching: false })

        if (error) {
            toast.error(error.message)
            return [] // return empty array if error

        } else {
            set({ pathObjects: data as storageObject[] })
            set({ storageObjects: get().storageObjects.concat(data as storageObject[]) }) // add data in storage objects
            return data as storageObject[] // empty [] if no objects found
        }
    },

    getStoredObjects: (path) => {
        const storageObjects = get().storageObjects
        const storedObjects = storageObjects.filter((storageObject) => storageObject.path === path)
        return storedObjects
    },

    refreshPathData: async (path) => {
        set({ isFetching: true })
        const { data, error } = await getFolderDataFromDatabase(path)
        set({ isFetching: false })

        if (error) {
            toast.error(error.message)
            return [] // return empty array if error
        }
        else {
            const storageObjects = get().storageObjects
            const storedObjects = storageObjects.filter((storageObject) => storageObject.path !== path) // remove old data

            set({ pathObjects: data as storageObject[] })
            set({ storageObjects: storedObjects.concat(data as storageObject[]) }) // add new data
        }
    },

    createNewFolder: async (path, folderName) => {

        const promise = new Promise<void>(async (resolve, reject) => {

            set({ isAddingFolder: true })
            const { data, error } = await createFolder(folderName, path ? '/' + path : '/')
            set({ isAddingFolder: false })

            if (error) return reject(error.message)

            // if data
            const newFolder = data![0] as storageObject
            const updatedPathObject = get().pathObjects.concat(newFolder)

            set({ pathObjects: updatedPathObject })
            resolve()
        })

        toast.promise(promise, {
            loading: 'Creating folder...',
            success: 'Folder created!',
            error: (err) => `Error: ${err}`
        })

        return
    },

    isFetching: true,
    setIsFetching: (isFetching) => set({ isFetching }),

    isAddingFolder: false,
    setIsAddingFolder: (isAddingFolder) => set({ isAddingFolder }),

    isUploadingFile: false,
    setIsUploadingFile: (isUploadingFile) => set({ isUploadingFile }),

    pathReset: () => {
        set({ pathObjects: undefined, isFetching: true, isAddingFolder: false })
    }
}))

export default useStorageStore