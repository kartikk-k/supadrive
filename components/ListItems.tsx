import React from 'react'

interface props {
    items: Folder['files'] | undefined | null
}


function ListItems({ items }: props) {

    const renderItem = (fileType: Folder['files'][0]['type']) => {
        if (fileType === 'FOLDER') {
            return <p>Folder</p>
        } else if (fileType === 'TXT') {
            return <p>Text</p>
        } else {
            return <p>File</p>
        }
    }

    return (
        <div>
            {items?.map(file => (
                <div>
                    {renderItem(file.type)}
                </div>
            ))}
        </div>
    )
}

export default ListItems