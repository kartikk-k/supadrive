import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import createQueryString from '@/helpers/createQueryString'
import FolderType from './fileTypes/FolderType'
import DocumentType from './fileTypes/DocumentType'
import { motion } from 'framer-motion'
import StorageObjectWrapper from './StorageObjectWrapper'

interface props {
    items: storageObject[]
}


function ListItems({ items }: props) {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const handleDoubleClick = (value: string) => {
        router.push(pathname + '?' + createQueryString(value, searchParams))
    }

    const renderItem = (file: storageObject) => {
        if (file.type === 'FOLDER') {
            return <StorageObjectWrapper key={file.id}>
                <FolderType name={file.name} onDoubleClick={handleDoubleClick} />
            </StorageObjectWrapper>

        } else if (file.type === 'FILE') {
            return <StorageObjectWrapper key={file.id}>
                <DocumentType name={file.name} onDoubleClick={handleDoubleClick} />
            </StorageObjectWrapper>
        }
    }

    return (
        <div className='flex w-full font-medium items-start gap-10 flex-wrap text-[#2C2F36]'>
            {items?.map(file => (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    {renderItem(file)}
                </motion.div>
            ))}
        </div>
    )
}

export default ListItems