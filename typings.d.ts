
interface storageObject {
    id: string
    name: string
    path: string
    createdAt: string
    type: 'FOLDER' | 'TXT' | 'IMG' | 'PDF' | 'VIDEO' | 'FILE' | undefined
    href?: string // bucket url
    extension?: '.txt' | '.pdf' | '.jpg' | '.png' | '.mp4' | undefined
    isPrivate: boolean
    publicLink?: string
}