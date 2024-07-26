import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

export default function Layout({ children, showSidebar = true }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-grow">
        {showSidebar && <Sidebar />}
        <main className="flex-grow p-4 md:p-8">{children}</main>
      </div>
      <Footer />
    </div>
  )
}