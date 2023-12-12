import getFolderDataFromDatabase from '@/helpers/supabase/getFolderData'
import { toast } from 'sonner'
import { create } from 'zustand'


interface StorageStore {
    storageObjects: storageObject[]

    getFolderData: (path: string) => Promise<storageObject | null>
    updateFolderData: (path: string) => Promise<storageObject | null>

    addStorageObjects: (storageObjects: storageObject[]) => void
}

const useStorageStore = create<StorageStore>((set, get) => ({
    storageObjects: [],

    updateFolderData: async (path) => {
        const { data, error } = await getFolderDataFromDatabase(path)

        if (error) {
            toast.error(error.message)
            return null
        }

        let storageObject = get().storageObjects.find(storageObject => storageObject.path === path)
        storageObject = { ...storageObject, ...data }
        if (storageObject) set({ storageObjects: [...get().storageObjects, storageObject] })
        else set({ storageObjects: [...get().storageObjects, data] })

        return data as storageObject
    },

    getFolderData: async (path) => {
        // check is data already exists in store
        const { storageObjects } = get()
        const storageObject = storageObjects.find(storageObject => storageObject.path === path)
        if (storageObject) return storageObjects[0]

        // get data from database
        const { data, error } = await getFolderDataFromDatabase(path)

        if (error) toast.error(error.message)
        else set({ storageObjects: [...get().storageObjects, data] })

        return data as storageObject
    },

    addStorageObjects: (storageObjects) => set({ storageObjects })
}))

export default useStorageStore