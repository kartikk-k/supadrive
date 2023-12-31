import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Toolbar from '@/components/Toolbar'
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'
import Addressbar from '@/components/Addressbar'

async function Layout({ children }: { children: React.ReactNode }) {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { data: { user } } = await supabase.auth.getUser()
    if (!user?.email) redirect('/')

    return (
        <main className='flex flex-col w-screen h-screen text-[#7c8994]'>
            <Navbar />
            <div className='md:grid grid-cols-[250px_1fr] h-full text-sm'>
                <Sidebar />
                <div>
                    <Toolbar />
                    <Addressbar />
                    {children}
                </div>
            </div>
        </main>
    )
}

export default Layout