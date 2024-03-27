import './App.css'
import Capabilities from './components/capabilities/Capabilities'
import ContDoc from './components/contDoc/ContDoc'
import Export from './components/export/Export'
import Footer from './components/footer/Footer'
import Founder from './components/founder/Founder'
import Intro from './components/intro/Intro'
import Navbar from './components/navbar/Navbar'
import Products from './components/products/Products'
import Sectors from './components/sectors/Sectors'

function App() {

  return (
    <>
      <Navbar />
      <Intro />
      <Capabilities />
      <Sectors />
      <Products />
      <Export />
      <Founder />
      <ContDoc />
      <Footer />
    </>
  )
}

export default App
