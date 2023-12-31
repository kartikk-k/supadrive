import { GeistSans } from 'geist/font/sans'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from './providers'
import { Metadata } from 'next'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Supadrive',
  description: 'Your personal cloud storage',
  openGraph: {
    images: [
      '/og.png'
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Providers>
          <main className='text-foreground'>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
