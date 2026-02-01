import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'Deepu Asok',
  description: 'Thoughts on product, strategy, and building things.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <header>
            <h1><Link href="/" style={{ textDecoration: 'none' }}>Deepu Asok</Link></h1>
            <nav>
              <Link href="/">blog</Link>
              <Link href="/about">about</Link>
            </nav>
          </header>
          {children}
          <footer>
            <p>No tracking. No cookies. Just words.</p>
          </footer>
        </main>
      </body>
    </html>
  )
}
