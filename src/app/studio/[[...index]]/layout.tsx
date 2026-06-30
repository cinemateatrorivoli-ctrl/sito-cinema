export const metadata = {
  title: 'Sanity Studio',
  description: 'Area riservata per la gestione dei contenuti',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
