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
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>  
        </head>
        <body className="bg-black">{children}</body>
      </html>
    </ReactQueryProvider>
   
  )
}
