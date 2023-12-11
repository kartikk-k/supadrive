import React from 'react'
import { Toaster } from 'sonner'

function Providers({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Toaster />
            {children}
        </div>
    )
}

export default Providers