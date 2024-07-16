
import Dashboard from './templates/Dashboard'
import Navbar from './components/organisms/Navbar'
import Footer from './components/organisms/Footer'
import './App.css'
export default function App() {


  return (
    <>
      <main className='w-full h-full bg-white'>
        <Navbar />
        <Dashboard />
        <Footer />

      </main>
    </>
  )
}

