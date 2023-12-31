import { headers, cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { Label } from '@/components/ui/Label'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function Login({
  searchParams,
}: {
  searchParams: { message: string }
}) {
  const signIn = async (formData: FormData) => {
    'use server'

    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      return redirect('/login?message=Could not authenticate user')
    }

    return redirect('/')
  }

  const signUp = async (formData: FormData) => {
    'use server'

    const origin = headers().get('origin')
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    })

    if (error) {
      return redirect('/login?message=Could not authenticate user')
    }

    return redirect('/login?message=Check email to continue sign in process')
  }

  {/* main content */ }
  return (
    <div className='flex items-center justify-center h-screen p-4 font-medium'>
      <div className='space-y-10 w-full sm:w-[300px]'>
        <div className='space-y-2 text-center'>
          <h1 className='text-2xl font-bold text-gray-800'>Supadrive</h1>
          <p className='font-medium text-gray-400'>Welcome! Please enter your details.</p>
        </div>

        {/* form -- can be replaced by <form> */}
        <form action={signIn} className='space-y-4'>
          {/* room code */}
          <div className='space-y-1'>
            <Label>Email</Label>
            <Input
              name='email'
              type='email'
              placeholder='example@domain.com'
            />
          </div>
          <div className='space-y-1'>
            <Label>Password</Label>
            <Input
              name='password'
              type='password'
              placeholder='••••••••'
            />
          </div>

          <div className='pt-4 space-y-4 font-medium text-center'>
            <Button
              formAction={signIn}
              variant={'primary'}
              className='w-full'
            >
              Login
            </Button>

            <p className='text-xs text-gray-400'>
              Need help?
              &nbsp;{/* non-breaking space */}
              <Link href="/" className='underline text-primary'>click here</Link>
            </p>
          </div>

        </form>

      </div>
    </div>
  )
}
// <div className="flex flex-col justify-center flex-1 w-full gap-2 px-8 sm:max-w-md">
//   <Link
//     href="/"
//     className="absolute flex items-center px-4 py-2 text-sm no-underline rounded-md left-8 top-8 text-foreground bg-btn-background hover:bg-btn-background-hover group"
//   >
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1"
//     >
//       <polyline points="15 18 9 12 15 6" />
//     </svg>{' '}
//     Back
//   </Link>

//   <form
//     className="flex flex-col justify-center flex-1 w-full gap-2 animate-in text-foreground"
//     action={signIn}
//   >
//     <label className="text-md" htmlFor="email">
//       Email
//     </label>
//     <input
//       className="px-4 py-2 mb-6 border rounded-md bg-inherit"
//       name="email"
//       placeholder="you@example.com"
//       required
//     />
//     <label className="text-md" htmlFor="password">
//       Password
//     </label>
//     <input
//       className="px-4 py-2 mb-6 border rounded-md bg-inherit"
//       type="password"
//       name="password"
//       placeholder="••••••••"
//       required
//     />
//     <button className="px-4 py-2 mb-2 bg-green-700 rounded-md text-foreground">
//       Sign In
//     </button>
//     <button
//       formAction={signUp}
//       className="px-4 py-2 mb-2 border rounded-md border-foreground/20 text-foreground"
//     >
//       Sign Up
//     </button>
//     {searchParams?.message && (
//       <p className="p-4 mt-4 text-center bg-foreground/10 text-foreground">
//         {searchParams.message}
//       </p>
//     )}
//   </form>
// </div>
