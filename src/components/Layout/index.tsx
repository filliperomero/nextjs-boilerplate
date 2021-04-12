import Navigation from './Navigation'
import Footer from './Footer'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}

export default Layout
