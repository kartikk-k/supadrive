import React, { useEffect, useState } from 'react'

interface props {
    fileName: string
    onNameChange: (value: string) => void
}

function ItemNameEditor({ fileName, onNameChange }: props) {

    const initialName = fileName.split('.')[0]
    const [name, setName] = useState<string>(initialName)

    useEffect(() => {
        onNameChange(name)
    }, [name])

    return (
        <div className='p-1 bg-gray-500 rounded-md'>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className='bg-transparent outline-none'
            />
        </div>
    )
}

export default ItemNameEditor