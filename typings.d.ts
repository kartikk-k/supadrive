interface FolderItem {
    id: string
    name: string
    path: string
    createdAt: string
    isPrivate: boolean
    type: 'FOLDER' | 'TXT' | 'IMG' | 'PDF' | 'VIDEO' | undefined
}

interface Folder {
    id: string
    name: string
    path: string
    files: FolderItem[]
    createdAt: string
    isPrivate: boolean
}