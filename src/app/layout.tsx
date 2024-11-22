import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from './components/header'
import { Aside } from './components/aside'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Playground',
  description: 'Playground motion dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <div className="mx-auto flex w-full max-w-[1400px] border border-t-0 max-lg:mb-14 max-lg:flex-col max-lg:gap-12 xl:border-x xl:border-neutral-800/60">
          <Aside />
          <div className="min-w-0 flex-grow px-6 lg:mt-6 lg:px-10">
            <main className="my-2 xl:mb-24">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
