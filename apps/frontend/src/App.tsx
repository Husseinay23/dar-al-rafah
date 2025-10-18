import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Courses from './pages/Courses'
import News from './pages/News'
import Research from './pages/Research'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const { i18n } = useTranslation()

  return (
    <Router>
      <div className={`min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 ${
        i18n.language === 'ar' ? 'font-arabic' : 'font-latin'
      }`}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/news" element={<News />} />
            <Route path="/research" element={<Research />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
