import { create } from 'zustand'


interface StorageStore {
    folders: Folder[]

    getFolderData: (folder: Folder) => Folder
    getFileData: (folder: Folder, file: FolderItem) => FolderItem

    addFolders: (folders: Folder[]) => void
    // addFolder: (folder: Folder) => void
    addFile: (folder: Folder, file: FolderItem) => void
    removeFolder: (folder: Folder) => void
    removeFile: (folder: Folder, file: FolderItem) => void
}

const useStorageStore = create<StorageStore>((set) => ({
    folders: [],

    getFolderData: (folder) => {
        return folder
    },
    getFileData: (folder, file) => {
        return file
    },

    addFolders: (folders) => {
        set((state) => ({
            folders: [...state.folders, ...folders],
        }))
    },

    addFile: (folder, file) => {
        set((state) => ({
            folders: state.folders.map((f) => {
                if (f.path === folder.path) {
                    return {
                        ...f,
                        files: [...f.files, file],
                    }
                }
                return f
            }),
        }))
    },
    removeFolder: (folder) => {
        set((state) => ({
            folders: state.folders.filter((f) => f.path !== folder.path),
        }))
    },
    removeFile: (folder, file) => {
        set((state) => ({
            folders: state.folders.map((f) => {
                if (f.path === folder.path) {
                    return {
                        ...f,
                        files: f.files.filter((fl) => fl.path !== file.path),
                    }
                }
                return f
            }),
        }))
    },
}))

export default useStorageStore