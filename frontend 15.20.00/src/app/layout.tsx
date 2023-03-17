import './globals.css'

export const metadata = {
  title: 'European Rat Repository',
  description: 'European Rat Repository',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>MarcoDE</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
