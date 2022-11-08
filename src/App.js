import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

import Home from './pages/home/Home'
import Next_Trip from './pages/home/next_trip/Next_trip'

import './index.css'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Next_Trip/>
      <Footer />
    </>
  )
}

export default App
