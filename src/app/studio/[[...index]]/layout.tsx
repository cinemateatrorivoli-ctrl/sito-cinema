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
    <div style={{ minHeight: 'calc(100vh - 80px)' }}>{children}</div>
  )
}
