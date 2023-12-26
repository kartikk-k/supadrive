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

    createNewFolder: (path: string, folderName: string) => Promise<storageObject | null> // create new folder in database and add it to storage objects

    isAddingFolder: boolean
    setIsAddingFolder: (isAddingFolder: boolean) => void

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
        return null
    },

    isFetching: true,
    setIsFetching: (isFetching) => set({ isFetching }),

    isAddingFolder: false,
    setIsAddingFolder: (isAddingFolder) => set({ isAddingFolder }),

    pathReset: () => {
        set({ pathObjects: undefined, isFetching: true, isAddingFolder: false })
    }
}))

export default useStorageStore