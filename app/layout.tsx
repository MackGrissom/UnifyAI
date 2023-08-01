import './globals.css'
import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Space_Grotesk } from 'next/font/google'
import { ModalProvider } from '@/components/modal-provider'
import { ToasterProvider } from '@/components/toaster-provider'
import { CrispChat } from '@/components/crisp-chat'

const font = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UnifyAI',
  description: 'AI ToolKit',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" className='everything'>
        <CrispChat/>
        <body className={font.className}>
          <ModalProvider />
          <ToasterProvider/>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
