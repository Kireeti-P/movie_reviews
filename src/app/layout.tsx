import './globals.css'
import { Inter } from 'next/font/google'
import {ReactQueryProvider} from './ReactQueryProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Movie Reviews',
  description: 'Get reviews of any movie here',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ReactQueryProvider>
   
  )
}
