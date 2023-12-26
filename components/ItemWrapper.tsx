import React from 'react'
import ItemNameEditor from './ItemNameEditor'

interface props {
    item: storageObject
    updateItemData: (item: storageObject) => void
    children: React.ReactNode
}

function ItemWrapper({ item, updateItemData, children }: props) {

    const handleUpdate = (value: string) => {
        updateItemData({ ...item, name: value })
    }

    return (
        <div>
            {children}


            {!item?.isRenaming ? (
                <p>{item.name}</p>
            ) :
                <ItemNameEditor
                    fileName={item.name}
                    onNameChange={handleUpdate}
                />
            }
        </div>
    )
}

export default ItemWrapper