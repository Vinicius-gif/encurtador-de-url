import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: ['500', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Encurtando URLs'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-lt-installed="true">
      <head>
      <link rel="icon" href="/images/favicon-32x32.png" type="image/png"/>
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
