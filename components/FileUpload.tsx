import React, { useEffect, useRef, useState } from 'react'
import { Dialog, DialogContent } from './ui/Dialog'
import cn from 'mxcn'
import useStorageStore from '@/store/storageStore'
import Image from 'next/image'
import UploadIcon from '@assets/icons/upload.svg'

function FileUpload() {

    const isUploadingFile = useStorageStore(state => state.isUploadingFile)
    const setIsUploadingFile = useStorageStore(state => state.setIsUploadingFile)


    const fileInput = useRef<HTMLInputElement>(null)

    const [isDragging, setIsDragging] = useState(false)
    const [file, setFile] = useState<File | null>(null)


    useEffect(() => {
        if (!file) console.log('no file')
        else {
            console.log(file.type.toString())
            // empty input file
            fileInput && fileInput.current?.files === null
        }
    }, [file])

    const handleOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]

        if (file) setFile(file)
        else console.log("file not found")
    }

    const handleClick = () => {
        if (!fileInput.current) return
        fileInput.current.click()
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDragging(true)
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDragging(false)

        const file = e.dataTransfer.files[0]
        setFile(file)
    }

    return (
        <Dialog open={isUploadingFile} onOpenChange={setIsUploadingFile}>
            <DialogContent>
                <div className='flex flex-col items-center space-y-8 text-gray-600'>
                    <div className='w-full space-y-2 text-sm'>
                        <label htmlFor="foldername" className=''>Folder name</label>
                        <div
                            onDragOver={handleDragOver}
                            onDrop={handleDrop}
                            // onDragLeave={handleDrop}
                            className={cn('flex flex-col items-center justify-center w-full h-40 gap-6 px-2 font-medium bg-gray-200 rounded-xl',
                                isDragging ? 'border-2 border-dashed bg-blue-600/20 border-blue-600' : '')}
                        >
                            <Image src={UploadIcon} alt='Upload file' />
                            <p>
                                Drag & Drop or &nbsp;
                                <span onClick={handleClick} className='text-blue-600 underline cursor-pointer'>Choose file</span>
                                &nbsp; to upload
                            </p>
                        </div>
                    </div>
                </div>

                <input
                    type="file"
                    ref={fileInput}
                    multiple={false}
                    style={{ display: 'none' }}
                    onChange={e => handleOnInputChange(e)}
                />
            </DialogContent>
        </Dialog>
    )
}

export default FileUpload