import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function AuthButton() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const signOut = async () => {
    'use server'

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    await supabase.auth.signOut()
    // return redirect('/login')
  }

  return (
    <div className="flex items-center gap-4 font-medium">
      {user ? (
        <Link
          href={'/storage'}
        >
          Dashboard
        </Link>
      ) : (
        <Link
          href={'/login'}
        >
          Login
        </Link>
      )}

      <Link
        href={'https://github.com/kartikk-k/supadrive'}
        target='_blank'
      >
        Github
      </Link>


      {/* Hey, {user.email}!
      <form action={signOut}>
        <button className="px-4 py-2 no-underline rounded-md bg-btn-background hover:bg-btn-background-hover">
          Logout
        </button>
      </form> */}

    </div>
  )
}
