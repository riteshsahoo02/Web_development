import Navbar from './Navbar'
import Footer from './Footer'

export default function AppLayout({ children }) {
  return (
    <div className="page-shell">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
