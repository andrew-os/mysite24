import Header from './Header'
import Footer from './Footer'

interface LayoutProps{
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className='mt-8'>{children}</main>
      <Footer />
    </>
  )
}