import React from 'react'

interface props {
    children: React.ReactNode
}

function StorageObjectWrapper({ children }: props) {
    return (
        <div className='shrink-0 w-[100px]'>
            {children}
        </div>
    )
}

export default StorageObjectWrapper